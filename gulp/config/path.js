// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        files: `${buildFolder}/files/`
    },
    src: {
        html: `${srcFolder}/*.html`,
        css: `${srcFolder}/css/*.css`,
        files: `${srcFolder}/files/**/*.*`
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        css: `${srcFolder}/css/**/*.css`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
};