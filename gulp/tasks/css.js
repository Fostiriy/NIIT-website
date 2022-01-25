import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'; // сжатие CSS файла
import webpcss from 'gulp-webpcss'; // вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer'; // добавление вендорных префиксов (для кроссбраузерности)
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // группировка медиа-запросов


export const css = () => {
    return app.gulp.src(app.path.src.css, { sourcemaps: app.isDev })
        .pipe(
            app.plugins.if(
                app.isBuild,
                groupCssMediaQueries()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpcss({
                    webpClass: ".webp",
                    noWebpClass: ".no-webp"
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ["last 3 versions"],
                    cascade: true
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss()
            )
        )
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}