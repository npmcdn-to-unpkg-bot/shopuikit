"use scrict"

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'build/',
    livereload: true
  });
});

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
  .pipe(rigger())
  .pipe(gulp.dest("build/"))
  .pipe(connect.reload());
});

gulp.task('css', function () {
  return gulp.src('src/css*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("build/css/"))
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch("src/css/*.less", ['css']);
  gulp.watch("src/*.html", ['html']);
});

gulp.task('default', ['watch', 'connect', 'html']);