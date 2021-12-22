let gulp = require('gulp');
let rigger = require('gulp-rigger');
gulp.task('html', function () {
    gulp.src('../src')
        .pipe(rigger())
        .pipe(gulpIf(env !== 'dev', minifyHTML()))
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload())
});

gulp.task('watch', function () {
    gulp.watch('../src/**/*.html', ['html']);
});