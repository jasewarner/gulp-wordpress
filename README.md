# Gulp + WordPress
Version: 1.0.5

## Author
Jase Warner ( <a href="http://jase.io">http://jase_io</a>)

## Synopsis
Gulp + WordPress is a blank slate WordPress theme, for those Developers wishing to start a project with the bare minimum.

The theme has been built according to <a href="https://make.wordpress.org/core/handbook/best-practices/coding-standards/php/">WordPress Coding Standards</a>. All functions, includes and templates are placed in their respective directory and divided into separate files accordingly.

Gulp + WordPress is packaged with Gulp for watching and compiling SCSS and JS files.
A selection of helpful mixins is also included, all of which are featured in <a href="http://zerosixthree.se/8-sass-mixins-you-must-have-in-your-toolbox/">this useful article</a> by <a href="https://twitter.com/seb_ekstrom">@seb_ekstrom</a>.

## Installation
Clone the project into <code>wp-content/themes</code> and rename it accordingly.

In Terminal, <code>cd</code> into the <code>assets</code> directory and install the Gulp packages (if you haven't already installed Gulp, you’ll need to <a href="https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md">do so</a> first), e.g:

<code>sudo npm install gulp-[package]</code>

Once you have installed the packages, in Terminal, run <code>gulp watch</code>. Any changes to the SCSS files in <code>assets/sass/</code> will lead to the creation of <code>style.css</code> and <code>style.min.css</code> in <code>assets/css</code>.

Likewise, any alterations to the JS files in <code>assets/js/functions/</code> will be concatenated and uglified in <code>assets/js</code> to <code>scripts.js</code> and <code>scripts.min.js</code>.

## Features
The Gulp build features the following helpful packages:
<ul>
  <li><a href="https://github.com/sindresorhus/gulp-autoprefixer">gulp-autoprefixer</a></li>
  <li><a href="https://github.com/scniro/gulp-clean-css">gulp-clean-css</a></li>
  <li><a href="https://github.com/contra/gulp-concat">gulp-concat</a></li>
  <li><a href="https://github.com/lazd/gulp-csslint">gulp-csslint</a></li>
  <li><a href="https://github.com/hparra/gulp-rename">gulp-rename</a></li>
  <li><a href="https://github.com/dlmanning/gulp-sass">gulp-sass</a></li>
  <li><a href="https://github.com/terinjokes/gulp-uglify">gulp-uglify</a></li>
</ul>

There are also a selection of useful WordPress functions located in the <code>functions</code> directory, including the following:

<ul>
    <li>Change admin credit in footer</li>
    <li>Change default “Howdy” greeting</li>
    <li>Reorder admin menu</li>
    <li>Register custom navigation menu</li>
    <li>Remove trailing slash from permalinks</li>
    <li>Enqueue scripts and styles</li>
</ul>

## Credits
<ul>
  <li><a href="https://wordpress.com">WordPress</a> (duh!)</li>
  <li><a href="https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards">WordPress Coding Standards for PHP_Codesniffer</a></li>
  <li><a href="http://gulpjs.com/">Gulp.js</a></li>
  <li><a href="http://sass-lang.com/">SASS / SCSS</a></li>
</ul>
