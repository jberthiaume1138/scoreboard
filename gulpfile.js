var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile-sass', function() {
    gulp.src('./public/style/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/style/'));
});

gulp.task('default', function() {
    gulp.watch('./public/style/sass/**/*.scss', ['compile-sass']);
});
