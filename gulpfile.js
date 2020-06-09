const gulp = require('gulp');

gulp.task('default', () => gulp.src('src/**/*.js').pipe(gulp.dest('dist')));
