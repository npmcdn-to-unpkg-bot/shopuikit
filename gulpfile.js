"use scrict"

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps')
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('index.html')
  .pipe(connect.reload());
});

gulp.task('css', function () {
  return gulp.src('css/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css/"))
    .pipe(connect.reload())
});

gulp.task('js', function () {
  return gulp.src('js/*.js')
    .pipe(gulp.dest("js/"))
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch("css/*.less", ['css']);
  gulp.watch("js/*.js", ['js']);
  gulp.watch("index.html", ['html']);
});

gulp.task('default', ['watch', 'connect']);