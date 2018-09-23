#!/usr/bin/env node
'use strict';

const prog = require('commander'),
      fs   = require('fs'),
      p    = require('./Parser.js'),
      MM   = require('./MochaMaker.js');

prog.version('1.0.0')
    .description('creates mocha tests based on jsdoc tags and examples')
    .arguments('<file> [options]')
    .action((file, options) => {
        prog.file = file;
        prog.options = options;
    });

prog.option('-o, --output-file <file>', 'markdown output file name. If not set, console output.')
    .option('-c, --config <file>', 'configuration, usually a jde2mjs.json file')
    .option('-e, --encoding <e>', 'file encoding of input and output files default: utf8')
    .parse(process.argv);

const inputFile = prog.file || './js/index.js',
      encoding = prog.encoding || 'utf8',
      outputFile = prog.outputFile || './test/' + inputFile;

fs.readFile(inputFile, encoding, parseDoc);

function parseDoc(error, data) {
    if(error) {
        console.log('Error reading input file. File exists & Permissions are set correctly?');
        return console.log(error);
    }
    
    const parsed = p.parseToObject(data);
    
    //console.log(parsed);
    console.log(MM.toMocha(inputFile, outputFile, parsed));
    
}