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
const themePrefix = 'theme-name';

/**
 * Paths and files
 */
const srcScss = 'scss/**/*.scss';
const srcJsDir = 'js';
const srcJsFiles = [
    //`./node_modules/babel-polyfill/dist/polyfill.js`,
    `${srcJsDir}/scripts/common.js`,
];
const destCss = 'css';
const destJs = 'js';

/**
 * Scss lint
 */
gulp.task('scss-lint', () => {
    return gulp.src(srcScss)
        .pipe(scsslint());
});

/**
 * Task for styles.
 *
 * Scss files are compiled and sent over to `assets/css/`.
 */
gulp.task('css', gulp.series('scss-lint', () => {
    return gulp.src(srcScss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ cascade : false }))
        .pipe(rename(`${themePrefix}.min.css`))
        .pipe(cleancss())
        .pipe(gulp.dest(destCss));
}));

/**
 * Task for scripts.
 *
 * Js files are uglified and sent over to `assets/js/scripts/`.
 */
gulp.task('js', () => {
    return gulp.src(srcJsFiles)
        .pipe(babel({
            presets : ['es2015']
        }))
        .pipe(concat(`${themePrefix}.min.js`))
        .pipe(uglify())
        .pipe(gulp.dest(destJs));
});

/**
 * Task for watching styles and scripts.
 */
gulp.task('watch', () => {
    gulp.watch(srcScss, gulp.series('css'));
    gulp.watch(srcJsFiles, gulp.series('js'));
});

/**
 * Default task
 */
gulp.task('default', gulp.series('css', 'js') );
