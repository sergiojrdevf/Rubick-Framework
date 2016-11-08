var gulp = require('gulp');
var stylus = require('gulp-stylus');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('stylus', function () {
  return gulp.src('./css/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css/components/'));
});

gulp.task('minify-css', function() {
  return gulp.src('./css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('autoprefixer', function() {
    gulp.src('./css/components/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Firefox > 20', '> 5%'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
}
);

gulp.task('watch', function() {
	gulp.watch('css/components/*.styl', ['stylus']); 
	gulp.watch('css/style.css', ['minify-css']);
	gulp.watch('css/components/style.css', ['autoprefixer'])
});

gulp.task('default', ['stylus', 'minify-css', 'autoprefixer', 'watch']);