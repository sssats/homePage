var gulp = require('gulp'),
    async = require('async'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('scripts', function () {
    return gulp.src(['./dev/js/**/*.js'])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./prod/js/'))
});

gulp.task('sass', function () {
    return gulp.src('./dev/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./prod/css'))
});

gulp.task('watch', function () {
    gulp.watch('./dev/scss/**/*.scss', ['sass']);
    gulp.watch('./dev/js/**/*.js', ['scripts']);
});


gulp.task('default', ['scripts', 'sass', 'watch'], function () {
});