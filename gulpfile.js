var gulp = require('gulp');
const shell = require('gulp-shell')

gulp.task('dev', ['wwwsqldesigner', 'angular']);

gulp.task('wwwsqldesigner', shell.task('cd wwwsqldesigner && npm start'))

// gulp.task('start-wwwsqldesigner', function (cb) {
//     exec('cd wwwsqldesigner && npm start', function (err, stdout, stderr) {
//         console.log(stdout);
//         console.log(stderr);
//         cb(err);
//     });
// })

gulp.task('angular', shell.task('npm start'))