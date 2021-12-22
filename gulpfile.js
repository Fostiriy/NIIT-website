'use strict';

const gulp = require('gulp'),
    rigger = require('gulp-rigger'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

const path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/*.js',
        css: 'src/css/*.css',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        css: 'src/css/**/*.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

gulp.task('html:build', async function () {
    gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task('js:build', async function () {
    gulp.src(path.src.js)
        .pipe(gulp.dest(path.build.js))
});

gulp.task('css:build', async function () {
    gulp.src(path.src.css)
        .pipe(gulp.dest(path.build.css))
});

gulp.task('img:build', async function () {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
});

gulp.task('fonts:build', async function () {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', gulp.series(
    'html:build',
    'js:build',
    'css:build',
    'img:build',
    'fonts:build'
));