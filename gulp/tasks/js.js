import webpack from "webpack-stream";

export const main = () => {
    return app.gulp.src(app.path.src.js.main, { sourcemaps: app.isDev })
        .pipe(webpack({
            mode: app.isBuild ? "production" : "development",
            output: {
                filename: 'bundle.js'
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}

export const whackAMole = () => {
    return app.gulp.src(app.path.src.js.whackAMole, { sourcemaps: app.isDev })
        .pipe(webpack({
            mode: app.isBuild ? "production" : "development",
            output: {
                filename: 'whack-a-mole.js'
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}

export const refrigeratorGame = () => {
    return app.gulp.src(app.path.src.js.refrigeratorGame, { sourcemaps: app.isDev })
        .pipe(webpack({
            mode: app.isBuild ? "production" : "development",
            output: {
                filename: 'refrigerator-game.js'
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}

export const bombCountdown = () => {
    return app.gulp.src(app.path.src.js.bombCountdown, { sourcemaps: app.isDev })
        .pipe(webpack({
            mode: app.isBuild ? "production" : "development",
            output: {
                filename: 'bomb-countdown.js'
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}

export const aboutAuthor = () => {
    return app.gulp.src(app.path.src.js.aboutAuthor, { sourcemaps: app.isDev })
        .pipe(webpack({
            mode: app.isBuild ? "production" : "development",
            output: {
                filename: 'about-author.js'
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}

export const messenger = () => {
    return app.gulp.src(app.path.src.js.messenger, { sourcemaps: app.isDev })
        .pipe(webpack({
            mode: app.isBuild ? "production" : "development",
            output: {
                filename: 'messenger.js'
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}