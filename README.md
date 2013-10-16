# grunt-inline-template

[inline-template](http://github.com/ajoslin/inline-template) in a grunt plugin. 

Best used with [karma-inline-template](http://github.com/ajoslin/karma-inline-template-preprocessor) for testing.

## Usage

Install from npm: 
```
npm install grunt-inline-template --save-dev
```

Load in gruntfile:
```js
grunt.loadNpmTasks('grunt-inline-template');
```

Have javascript source wanting a template:
```js
var myTemplate = '<%= inlineTemplate("templates/my-template.html") %>';
```

Then have this in your Gruntfile:

```
grunt.initConfig({
  inlineTemplate: {
    options: {
      base: 'src'
    },
    dist: {
      src: ['src/**/*.js'],
      dest: 'dist/build.js'
    }
  }
});
```

## Options

### base
Type: `String`
Default: `.`

The base directory to read templates from  For example, could be `'src'`.

### doubleQuote
Type: `Boolean`
Default: `false`

Whether to escape single quotes or double quotes in the template.  Defaults to escaping single quotes.
