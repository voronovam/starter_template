const gulp = require('gulp');

async function images() {
    const imagemin = (await import('gulp-imagemin')).default;
    const gifsicle = (await import('imagemin-gifsicle')).default;
    const mozjpeg = (await import('imagemin-mozjpeg')).default;
    const optipng = (await import('imagemin-optipng')).default;

    return gulp.src(['src/images/**/*.{jpg,jpeg,png,gif}', '!src/images/svg/**/*'])
        .pipe(imagemin([
            gifsicle({ interlaced: true }),
            mozjpeg({ quality: 75, progressive: true }),
            optipng({ optimizationLevel: 5 })
        ]))
        .pipe(gulp.dest('dist/images'));
}

async function svg() {
    const imagemin = (await import('gulp-imagemin')).default;
    const svgo = (await import('imagemin-svgo')).default;

    return gulp.src('src/images/svg/**/*.svg')
        .pipe(imagemin([
            svgo({
                plugins: [
                    { name: 'removeViewBox', active: false },
                ]
            })
        ]))
        .pipe(gulp.dest('dist/images/svg'));
}

module.exports = { images, svg };
