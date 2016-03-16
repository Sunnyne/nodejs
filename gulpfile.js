var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

//gulp default
gulp.task('default', function() {
    console.log('default gulp.');
});

//gulp css minify & autoprefixer
gulp.task('cssminify', function () {
    gulp.src('src/*.css')
        .pipe(autoprefixer({
            browsers: ["last 2 version", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('min'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./html/"
        },
        port: 8080
    });
});

//Sass comfile
gulp.task('sass', function () {
    return gulp.src('./html/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./html/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./html/css/*.css', ['sass']);
});
