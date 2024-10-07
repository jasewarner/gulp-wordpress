'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const scsslint = require('gulp-scss-lint');
const clean = require('gulp-clean');

/**
 * Paths and files
 */
const srcScss = 'scss/**/*.scss';
const srcJsDir = 'js';
const srcJsCoreFiles = [
    // `./node_modules/bootstrap/dist/js/bootstrap.js`,
    `${srcJsDir}/src/core.js`,
];
const srcJsComponentFiles = [
    `${srcJsDir}/src/components/*.js`,
];
const destCss = 'css';
const destJs = 'js/dist';
const srcClean = [
    `${destCss}/*.min.css`,
    `!${destCss}/.gitkeep`,
    `${destJs}/*.min.js`,
    `!${destJs}/.gitkeep`
]

/**
 * Scss lint
 */
gulp.task('scss-lint', () => {
    return gulp.src(srcScss)
        .pipe(scsslint());
});

/**
 * Clean directories containing minified assets
 */
gulp.task('clean-dirs', () => {
    return gulp.src(srcClean, {read: false})
        .pipe(clean())
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
        .pipe(rename({
            suffix: `.min`
        }))
        .pipe(cleancss())
        .pipe(gulp.dest(destCss));
}));

/**
 * Task for scripts.
 *
 * Js files are uglified and sent over to `assets/js/dist/`.
 */
gulp.task('js-core', () => {
    return gulp.src(srcJsCoreFiles)
        .pipe(babel({
            presets : ['@babel/env']
        }))
        .pipe(concat(`core.min.js`))
        .pipe(uglify())
        .pipe(gulp.dest(destJs));
});

gulp.task('js-components', () => {
    return gulp.src(srcJsComponentFiles)
        .pipe(babel({
            presets : ['@babel/env']
        }))
        .pipe(rename({
            suffix: `.min`
        }))
        .pipe(uglify())
        .pipe(gulp.dest(destJs));
});

/**
 * Task for watching styles and scripts.
 */
gulp.task('watch', () => {
    gulp.watch(srcScss, gulp.series('css'));
    gulp.watch(srcJsCoreFiles, gulp.series('js-core'));
    gulp.watch(srcJsComponentFiles, gulp.series('js-components'));
});

/**
 * Default task
 */
gulp.task('default', gulp.series('clean-dirs', 'css', 'js-core', 'js-components') );
