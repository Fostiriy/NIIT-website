import fileInclude from "gulp-file-include"; // плагин для вставки в html
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // плагин для перевода img в webp
import versionNumber from "gulp-version-number"; // плагин для проверки кэша

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(fileInclude())
        .pipe(webpHtmlNosvg())
        .pipe(versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            }))
        .pipe(app.gulp.dest(app.path.build.html))
}