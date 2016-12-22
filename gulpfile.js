var gulp = require('gulp');
var stylus = require('gulp-stylus');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
var concat = require('gulp-concat');


gulp.task('stylus', function () {
    return gulp.src('src/css/style.styl')
        // .pipe(stylus({
        //   compress: true
        // }))
        .pipe(stylus())
        .pipe(gulp.dest('src/css'));
});

gulp.task('autoprefixer', function() {
    gulp.src('src/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Firefox > 20', '> 5%'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css/'))
    }
);

gulp.task('script', function(){
    return gulp.src('src/js/components/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
	gulp.watch('src/css/components/*.styl', ['stylus', 'autoprefixer', 'script']);
	
});

gulp.task('default', ['stylus', 'autoprefixer', 'script']);