// Load Node Modules/Plugins
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var cocnat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');

// compile sass into css and auto inject into browsers
gulp.task('sass', function () {
    return gulp.src('app/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

// process scripts
gulp.task('scripts', function () {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.stream())
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

// minify images
gulp.task('images', function () {
    return gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

    // watch task
gulp.task('watch', function () {
    gulp.watch('app/scss/main.scss', ['sass']);
    gulp.watch('app/js/*.js', ['scripts']);
    gulp.watch('app/img/*', ['images']);
    gulp.watch('index.html').on('change', browserSync.reload);
});

// create a static server for browserSync and watch scss/html/js files
gulp.task('browser-sync', ['sass'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });



});

gulp.task('default', ['sass', 'scripts', 'images', 'watch', 'browser-sync']);