// Load Node Modules/Plugins
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// compile sass into css and auto inject into browsers
    gulp.task('sass',function(){
        return gulp.src('app/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
    });

    // process scripts
    gulp.task('scripts',function(){
        return gulp.src('app/js/*.js')
        .pipe(browserSync.stream())
        // .pipe(gulp.dest('dist/'));
    });

// create a static server for browserSync and watch scss/html/js files
gulp.task('browser-sync',['sass'],function(){
browserSync.init({
    server:{
        baseDir: "./"
    }
});


gulp.watch('app/scss/main.scss',['sass']);
gulp.watch('app/js/*.js',['scripts']);
gulp.watch('index.html').on('change',browserSync.reload);
});

gulp.task('default',['browser-sync','scripts']);