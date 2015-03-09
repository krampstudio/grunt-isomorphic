# grunt-isomorphic

> Write once run anywhere

Creates AMD, CommonJs, ES6 and old school modules from your js source.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-isomorphic --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-isomorphic');
```

## The "isomorphic" task

### Overview
In your project's Gruntfile, add a section named `isomorphic` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  isomorphic: {
    options: {
        types : ['old', 'amd',' cjs', 'es6', 'umd'],            //supported modules/patterns
        name  : function(filepath){
            return require('path').basename(filepath, '.js');   //module name from the fileName
        }
    },
    files: {
      'destDir': ['lib/source.js']
    }
  },
})
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

 - 0.0.1 Early release, only basic generation

## License
Copyright (c) 2015 Bertrand Chevrier. Licensed under the MIT license.
