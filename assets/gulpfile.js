'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const scsslint = require('gulp-scss-lint');

/**
 * Here we set a prefix for our compiled and stylesheet and scripts.
 * Note that this should be the same as the `$themeHandlePrefix` in `func-script.php` and `func-style.php`.
 */
const themePrefix = 'ucl';

/**
 * Asset paths.
 */
const scssSrc = 'scss/**/*.scss';

const jsSrcDir = 'js';
const jsSrcFiles = [
    `${jsSrcDir}/scripts/common.js`,
];

/**
 * Scss lint
 */
gulp.task('scss-lint', function() {
    return gulp.src(scssSrc)
        .pipe(scsslint());
});

/**
 * Task for styles.
 *
 * Scss files are compiled and sent over to `assets/css/`.
 */
gulp.task('css', ['scss-lint'], function () {
    return gulp.src(scssSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ cascade : false }))
        .pipe(rename(`${themePrefix}.min.css`))
        .pipe(cleancss())
        .pipe(gulp.dest('./css/'));
});

/**
 * Task for scripts.
 *
 * Js files are uglified and sent over to `assets/js/scripts/`.
 */
gulp.task('js', function () {
    return gulp.src(jsSrcFiles)
        .pipe(babel({
            presets : ['es2015']
        }))
        .pipe(concat(`${themePrefix}.min.js`))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'));
});

/**
 * Task for watching styles and scripts.
 */
gulp.task('watch', function () {
    gulp.watch(scssSrc, ['css']);
    gulp.watch(jsSrcFiles, ['js']);
});

/**
 * Default task
 */
gulp.task('default', ['css', 'js'] );
