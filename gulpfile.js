"use scrict"

var gulp = require('gulp'),
    watch = require('gulp-watch'),
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
  return gulp.src('css/*.css')
    .pipe(connect.reload())
    .pipe(gulp.dest("css/"))
});

gulp.task('js', function () {
  return gulp.src('js/*.js')
    .pipe(connect.reload())
    .pipe(gulp.dest("js/"))
});

gulp.task('watch', function() {
  gulp.watch("css/*.css", ['css']);
  gulp.watch("js/*.js", ['js']);
  gulp.watch("index.html", ['html']);
});

gulp.task('default', ['watch', 'connect']);