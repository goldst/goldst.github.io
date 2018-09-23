'use strict';

const FO = require('./FolderOperations.js');

module.exports = class MochaMaker {
    static toMocha(input, output, parsedDoc) {
        const functions = this._allFunctions(input, parsedDoc),
              requires = this._requires(input, output, parsedDoc);
        
        return requires +
            `const assert = require('chai').assert;\n` +
            `describe('${input}', function() {\n` +
            functions +
            `});`;

    }
    
    static _allFunctions(input, parsedDoc) {
        let functions = '';
        parsedDoc.forEach(jsdocTagArray => {
            functions += this._funtionTestFuntions(jsdocTagArray);
        });
        return functions;
    }

    static _funtionTestFuntions(jsdocTagArray) {
        let functions = '';
        jsdocTagArray.elements.forEach(element => {
            if(element.tag === 'example') {
                element.examples.forEach(example => {
                    functions += this._exampleAsserts(example); 
                });
            }
        });
        
        if(functions) {
            return `    describe('${jsdocTagArray.function}', function() {\n` +
                functions +
                `    });\n`;
        }
        
        return '';
        
    }
    
    static _exampleAsserts(ex) {
        let pre = '',
            attributes = ex.assert.attr,
            description;
        
        if(ex.pre) {
            pre = '            ' + ex.pre + '\n';
        }
        
        switch(ex.assert.type) {
            case 'throws':
                attributes[0] = '() => ' + attributes[0];
                if(attributes.length === 1) {
                    description = this._stringFormat(attributes[0]) +
                        ' should throw an error';
                } else {
                    description = _stringFormat(attributes[0]) +
                        ' should throw an error of type ' +
                        this._stringFormat(attributes[1]);
                }
                break;
            default:
                if(attributes.length !== 1) {
                    description = this._stringFormat(attributes[0]) +
                        ' should be ' +
                        this._stringFormat(attributes[1]);
                } else {
                    throw 'assert type not implemented?: ' + ex.assert.type;
                }
        }
        
        return `        it('${description}', function() {\n` +
            pre +
            `            assert.${ex.assert.type}(${attributes});\n` +
            `        });\n`;
    }
    
    static _requires(input, output, parseDoc) {
        const inputSplit = input.split('/'),
            moduleName = inputSplit[inputSplit.length-1].split('.')[0],
            outputDepth = output.split('/').length - 1;
        
        let out = `const ${moduleName} = require('./`;
        for(let i = 0; i < outputDepth-1; i++) {
            out += '../';
        }
        out += `${input}').default;\n`;
        
        out += this._additionalRequires(input, output, parseDoc);
        
        return out;
    }
    
    //Makes it a one row string and puts in '\\' before parentheses so that they can be used in strings in the generated mocha JavaScript file 
    static _stringFormat(input) {
        return input.replace(/\n/g, ' ').replace(/'/g, "\\'");
    }
    
    static _additionalRequires(input, output, parseDoc) {
        let out = '';
        parseDoc.forEach(jsdocTagArray => {
            jsdocTagArray.elements.forEach(element => {
                if(element.tag === 'example') {
                    element.examples.forEach(example => {
                        example.additionalRequires.forEach(req => {
                            const cliToImport = FO.extendPath(input, req.filePath),
                                testToImport = FO.pathFromPath(output, cliToImport);
                            out += `let ${req.importName} = ` + `require('${testToImport}').default;\n`;
                        });
                    });
                }
            });
        });
        return out;
    }
}