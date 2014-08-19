var gulp = require('gulp');
var browserify = require('./gulp/browserify');
var test = require('./gulp/test');


gulp.task('default', function() {
  gulp.src(test.testFiles)
    .pipe(test.karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});
