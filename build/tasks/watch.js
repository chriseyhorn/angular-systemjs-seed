var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

function changed(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['build-dev'], function () {
  gulp.watch([ paths.source ], [ 'es6', browserSync.reload ]).on('change', changed);
  gulp.watch([ paths.html ], [ 'html', browserSync.reload ]).on('change', changed);
  gulp.watch([ paths.less ], [ 'less-dev' ]).on('change', changed);
});