const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

async function scripts() {
    return gulp.src('src/scripts/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('app.min.js'))
        .pipe(uglify()) // сжимаем js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
}

module.exports = scripts;
