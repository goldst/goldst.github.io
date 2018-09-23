module.exports = class Parser {
    static parseToObject(data) {
        const jsdocExpr = /(\/\*\*.+?\*\/)/gms;

        let match, jsdocElements = [];
        while((match = jsdocExpr.exec(data)) !== null) {
            jsdocElements.push({
                function: this._functionName(data.substring(jsdocExpr.lastIndex)),
                elements: this._jsdoc(match[0]),
            });
        }
        return jsdocElements;
    }

    static _jsdoc(jsdoc) {
        const plainJsdoc = jsdoc.substring(3, jsdoc.length-2)
                                 .replace(/( )+/g, ' ')
                                 .replace(/\n *\* /g, '\n')
                                 //.replace(/\n/g, ' ')
                                 .trim();
        return this._jsdocTags(plainJsdoc);
    }

    static _jsdocTags(plainJsdoc) {
        const tagExpr = /@.+?(?=@|$)/gs;

        let match, tags=[];
        while((match = tagExpr.exec(plainJsdoc)) !== null) {
            tags.push(this._jsdocTag(match[0]));
        }
        return tags;
    }

    static _jsdocTag(tag) {
        const tagNameExpr = /@.+?(?= |\n)/m,
              tagName = tagNameExpr.exec(tag)[0];

        switch(tagName) {
            case '@example':
                return this._tagExample(tag);
            case '@returns':
            case '@return':
                return this._tagReturns(tag);
            default:
                return {tag: tagName.substring(1)};
        }
    }

    static _tagReturns(tag) {
        const returnTypeExpr = /{.+?}/,
              returnType = returnTypeExpr.exec(tag)[0];

        return {
            tag: 'returns',
            type: returnType.substring(1, returnType.length-1)
        }
    }

    static _tagExample(tag) {
        const examples = tag.substring(9),
              commentExpr = /(\/\*.*?\*\/)|(\/\/).*?$/gms,
              codeExamples = examples.split(commentExpr)
                                     .filter(a => a!==undefined && a!=='//');

        let out = [];
        for(let i = 0, match;
            (match = commentExpr.exec(examples)) !== null;
            i++) {
            out.push(this._example(codeExamples[i].trim(), match[0]));
        }
        return {
            tag: 'example',
            examples: out
        };
    }

    static _example(code, comment) {
        let splitCode = code.split(';')
                            .map(c => c.trim());
        if(splitCode[splitCode.length-1] === '') {
            splitCode.pop();
        }

        const assertCode = splitCode[splitCode.length-1].trim(),
            additionalReqs = this._additionalRequires(splitCode),
            preCode = splitCode
                        .slice(additionalReqs.length,
                               splitCode.length-additionalReqs.length-1)
                        .join(';\n             '),
              commentInfo = this._comment(comment);
        
        let attr = [assertCode];
        if(commentInfo.hasOwnProperty('attr2')) {
            attr.push(commentInfo.attr2);
        }

        return {
            pre: preCode,
            assert: {
                attr: attr,
                type: commentInfo.type
            },
            additionalRequires: additionalReqs
        }
    }

    static _comment(comment) {
        const assert = this._assert(comment);

        let attr2 = undefined;
        if(assert.attr2Offset > -1){
            attr2 = this._assertAttr2(comment.substring(assert.attr2Offset + 2));
            return {
                type: assert.assertName,
                attr2: attr2
            }
        }
        
        return {
            type: assert.assertName
        }
    }

    static _assert(comment) {
        const c = comment.replace(/\n/, ' ')
                         .substring(2)
                         .trim();
        let assert,
            attr2Offset;

        if(/^is true /.test(c)) {
            assert = 'ok';
            attr2Offset = 8;
        } else if(/^is false /.test(c)) {
            assert = 'notOk';
            attr2Offset = 9;
        } else if(/^is equal to and has the same type as /.test(c)) {
            assert = 'deepStrictEqual';
            attr2Offset = 37;
        } else if(/^is equal to /.test(c)) {
            assert = 'deepEqual';
            attr2Offset = 12;
        } else if(/^is not equal to or has another type than /.test(c)) {
            assert = 'notDeepStrictEqual';
            attr2Offset = 41;
        } else if(/^is not equal to /.test(c)) {
            assert = 'notDeepEqual';
            attr2Offset = 16;
        } else if(/^is not /.test(c)) {
            assert = 'notEqual';
            attr2Offset = 7;
        } else if(/^is /.test(c)) {
            assert = 'equal';
            attr2Offset = 3;
        } else if(/^throws an error of type /.test(c)) {
            assert = 'throws';
            attr2Offset = 24;
        } else if(c === 'throws an error') {
            assert = 'throws';
            attr2Offset = -1;
        } else if(c === 'has the correct type') {
            assert = 'throws';
            attr2Offset = -1;
        } else if(c === 'mochajs, throw an error!') {
            assert = 'fail';
            attr2Offset = -1;
        }

        return {
            assertName: assert,
            attr2Offset: attr2Offset
        };
    }

    static _assertAttr2(commentTypePart) {
        let output;
        try {
            output = JSON.stringify(
                JSON.parse(commentTypePart)
            );
        } catch (syntaxError) {
            throw commentTypePart + 'is not valid JSON';
        }
        return output;
    }
    
    static _functionName(input) {
        return input.match(/((.+?)(?={))|((.+?)(?=\=\> {))/s)[0].trim();
    }
    
    static _additionalRequires(splitCode) {
        let out = [];
        splitCode.forEach(line => {
            let importName, file;
            if(line.match(/(import.+)|(require.+)/)) {
                importName = line.split(' ')[1];
                file = line.match(/('.+')|(".+")/)[0];
                out.push({
                    importName: importName,
                    filePath: file.substring(1, file.length-1)
                })
            }
        });
        return out;
    }
}