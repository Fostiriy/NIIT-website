export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        notify: false,
        open: false,
        port: 3000
    });
}