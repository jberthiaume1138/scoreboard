var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

gulp.task('compile-sass', function() {
    gulp.src('./public/style/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/style/'));
});

// gulp.task('default', function() {
//     gulp.watch('./public/style/sass/**/*.scss', ['compile-sass']);
// });

gulp.task('develop', function() {
    var stream = nodemon({
        script: 'server.js',
        ext: 'html js scss',
        ignore: ['./public/style/style.css'],
        tasks: ['compile-sass']
    });
    stream.on('restart', function() {
        console.log('............restarted...........')
    })
    .on('crash', function() {
        console.error('Crashed!')
    });
});
