const gulp = require('gulp');
const pug = require('gulp-pug');

function pugTemplates() {
    return gulp.src('src/pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'));
}

module.exports = pugTemplates;
