const gulp = require('gulp');
const clean = require('./gulp-tasks/gulp-clean');
const styles = require('./gulp-tasks/gulp-styles');
const scripts = require('./gulp-tasks/gulp-scripts');
const pugTemplates = require('./gulp-tasks/gulp-pug');
const { images, svg } = require('./gulp-tasks/gulp-images');
const fonts = require('./gulp-tasks/gulp-fonts');
const browserSync = require('browser-sync').create();

function serve(done) {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
        port: 8080,
        open: false,
        notify: false,
    });
    done();
}

function reload(done) {
    browserSync.reload();
    done();
}

function watchFiles() {
    gulp.watch('src/scss/**/*.scss', gulp.series(styles, reload));
    gulp.watch('src/js/**/*.js', gulp.series(scripts, reload));
    gulp.watch('src/pug/**/*.pug', gulp.series(pugTemplates, reload));
    gulp.watch('src/fonts/**/*', gulp.series(fonts, reload));
    gulp.watch(['src/images/**/*.{jpg,jpeg,png,gif}', '!src/images/svg/**/*'], gulp.series(images, reload));
    gulp.watch('src/images/svg/**/*.svg', gulp.series(svg, reload));
}

const build = gulp.series(clean, gulp.parallel(styles, scripts, pugTemplates, fonts, images, svg));
exports.serve = gulp.series(build, serve, watchFiles);

exports.clean = clean;
exports.build = build;
exports.default = gulp.series(build, serve, watchFiles);