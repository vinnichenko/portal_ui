/**
 * Created by vinnichenko on 10/19/2015.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);