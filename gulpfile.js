
/* File: gulpfile.js */
var babelify = require('babelify');
var gulp  = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var bro = require('gulp-bro');
var connect = require('gulp-connect');
var imagemin = require('gulp-imagemin');

gulp.task("js", function() {
  gulp
    .src("./source/js/app.js")
    .pipe(sourcemaps.write())
    .pipe(
      bro({
        transform: [
          babelify.configure({
            presets: [
              ["env",{ targets: {
                    browsers: ["last 2 versions", "ie >= 9"]}
              }]]
          })
        ]
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/js"));
});

gulp.task('scss', function() {
    gulp.src('./source/scss/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9'],
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
    gulp.src('./source/index.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('pages', function(){
  gulp.src('./source/pages/*.html')
  .pipe(gulp.dest('./dist/pages'))
  .pipe(connect.reload());
});

gulp.task("images", function() {
  gulp.src('./source/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/img'));
});

gulp.task("build", ['scss', 'js', 'html', 'images', 'pages']);

gulp.task('watch', function() {
    gulp.watch('./source/scss/*.scss', ['scss']);
    gulp.watch('./source/js/*.js', ['js']);
    gulp.watch('./source/*.html', ['html']);
    gulp.watch('./source/img/*', ['images']);
    gulp.watch('./source/pages/*.html', ["pages"]);
});

gulp.task('connect', function() {
  connect.server({
    root: './dist',
    port: 8888,
    livereload: true,
    https: true
  });
});



gulp.task('default', ['connect', 'watch']);