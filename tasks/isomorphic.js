/*
 * grunt-isomorphic
 * https://github.com/krampstudio/grunt-isomorphic
 *
 * Copyright (c) 2015 Bertrand Chevrier
 * Licensed under the MIT license.
 */
var hbs = require('handlebars');
var path = require('path');


module.exports = function(grunt) {
    'use strict';

    var templates = {};

    var morpher = function(type, data) {
        var tpl;
        if (!templates[type]) {
            tpl = path.resolve(__dirname + '/tpl/' + type + '.hbs');
            if (!grunt.file.exists(tpl)) {
                grunt.log.error('Unable to find template for type ' + tpl);
                return false;
            }
            templates[type] = hbs.compile(grunt.file.read(tpl));
        }

        if (!templates[type]) {
            grunt.log.error('Unsupported output type ' + type);
            return false;
        }

        return templates[type](data);
    };

    grunt.registerMultiTask('isomorphic', 'Creates amd, cjs, es6 and old school modules from your js source.', function() {

        var options = this.options({
            types: ['old', 'amd', 'cjs', 'umd', 'es6'],
            name : function (file){
                return path.basename(file, '.js');
            }
        });

        this.files.forEach(function(file) {
            // Concat specified files.
            file.src.forEach(function(filepath) {
                var fileData;

                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return;
                }

                fileData = {
                    name : options.name(filepath),
                    code : grunt.file.read(filepath)
                };

                options.types.forEach(function(type){
                    var dest = file.dest + '/' + fileData.name + '.' + type + '.js';
                    grunt.file.write(dest, morpher(type, fileData));

                    if(grunt.file.exists(dest)){
                        grunt.log.writeln(dest + ' generated');
                    }
                });
            });
        });
    });
};
