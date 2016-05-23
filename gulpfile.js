/**
 * Created by vinnichenko on 10/19/2015.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
// var imageop = require('gulp-image-optimization');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    gulp.src('scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('compress', function() {
    return gulp.src('js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/min'));
});

/*gulp.task('images', function(cb) {
    gulp.src(['images/!**!/!*.png','images/!**!/!*.jpg','images/!**!/!*.gif','images/!**!/!*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('images/optimized')).on('end', cb).on('error', cb);
});*/

gulp.task('default', ['sass', 'watch', 'compress']);