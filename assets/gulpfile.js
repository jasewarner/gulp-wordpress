'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import autoprefixer from 'gulp-autoprefixer';
import { deleteAsync as del } from 'del';

const sass = gulpSass(dartSass);

/**
 * Paths and files
 */
const srcScss = 'scss/**/*.scss';
const srcJsDir = 'js';
const srcJsCoreFiles = [
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
];

/**
 * Clean directories containing minified assets
 */
export const cleanDirs = () => {
    return del(srcClean);
};

/**
 * Core styles
 */
export const css = () => {
    return gulp.src(srcScss)
        .pipe(sass.sync({
            // Suppress the "slash as division" and other API warnings
            // that cause modern Sass to hang or fail on Bootstrap 5 code
            quietDeps: true,
            // Help Sass to find @import for Bootstrap files
            includePaths: ['node_modules'],
            // Silence the @import warnings
            silenceDeprecations: ['import', 'legacy-js-api'],
        }).on('error', sass.logError))
        .pipe(autoprefixer({ cascade : false }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest(destCss));
};

/**
 * Core scripts
 */
export const jsCore = () => {
    return gulp.src(srcJsCoreFiles)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('core.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(destJs));
};

/**
 * Scripts for components like blocks, post or page templates etc.
 */
export const jsComponents = () => {
    return gulp.src(srcJsComponentFiles)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest(destJs));
};

/**
 * Combine the script tasks into one for ease
 */
export const js = gulp.series(jsCore, jsComponents);

/**
 * Task for watching styles and scripts
 */
export const watch = () => {
    gulp.watch(srcScss, css);
    gulp.watch(srcJsCoreFiles, jsCore);
    gulp.watch(srcJsComponentFiles, jsComponents);
};

/**
 * Default task
 */
export default gulp.series(cleanDirs, css, js);
