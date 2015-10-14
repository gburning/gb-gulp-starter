// requirements
var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var browserSync  = require('browser-sync');
var prefix       = require('gulp-autoprefixer');
var rename       = require('gulp-rename');
var uglify       = require('gulp-uglify');

// create sass tasks
gulp.task('sass', function() {
  return sass('scss/style.scss', {style: 'compressed'}, {sourcemap: true})
    .pipe(rename({suffix: '.min'}))
    .pipe(prefix("last 2 versions", "> 1%", "ie 8", "Android 2", "Firefox ESR"))
    .pipe(gulp.dest('css'))
});

gulp.task('compress', function() {
  return gulp.src('js/main.js')
    .pipe(uglify())
    .pipe(rename({suffix: '-min'}))
    .pipe(gulp.dest('js/'));
});

// create browser sync task
gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "*.html", "*.php", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

// default task (just run gulp)
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("js/main.js", ['compress']);
});