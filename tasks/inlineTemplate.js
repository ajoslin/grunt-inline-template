var inlineTemplate = require('inline-template');

module.exports = function(grunt) {
  grunt.registerMultiTask('inlineTemplate', 'Turn <%= inlineTemplate("mytpl.html") %> into <div>my template!</div> in your javascript.', function() {
    var options = this.options({
      doubleQuote: false,
      base: '.'
    });

    this.files.forEach(function(file) {
      var src = file.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });
      var content = src.map(function(filepath) {
        return inlineTemplate.process(grunt.file.read(file.src), options);
      });
      grunt.file.write(file.dest, content);
    });
  });
};
