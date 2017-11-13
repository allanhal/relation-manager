var gulp = require('gulp');
const shell = require('gulp-shell')

gulp.task('wwwsqldesigner', shell.task('cd wwwsqldesigner && npm start'))

gulp.task('angular', shell.task('npm start'))

gulp.task('dev', ['wwwsqldesigner', 'angular']);