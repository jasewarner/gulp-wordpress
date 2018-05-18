# Gulp + WordPress

Version: 2.0.1

## Author

Jase Warner ( <a href="https://jase.io">https://jase.io</a> )

## Synopsis

Gulp + WordPress is a blank slate WordPress theme, for those Developers wishing to start a project with the bare minimum.

The theme has been built according to <a href="https://make.wordpress.org/core/handbook/best-practices/coding-standards/php/">WordPress Coding Standards</a>. All functions, includes and templates are placed in their respective directory and divided into separate files accordingly.

Gulp + WordPress is packaged with Gulp for watching and compiling and minifying SCSS and JS files.

A selection of helpful mixins is also included, most of which are featured in <a href="http://zerosixthree.se/8-sass-mixins-you-must-have-in-your-toolbox/">this useful article</a> by <a href="https://twitter.com/seb_ekstrom">@seb_ekstrom</a>.

You may also write your JavaScript in ES6 – The Gulp scripts task utilises <a href="https://babeljs.io/">Babel</a>, so you can use new syntax without worrying about browser support!

## Installation

Clone the project into <code>wp-content/themes</code> and rename it accordingly.

In Terminal, <code>cd</code> into the <code>assets</code> directory and install the Gulp packages (if you haven't already installed Gulp, you’ll need to <a href="https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md">do so</a> first), e.g:

<code>npm install</code>

> Note: you may need to run the command as <code>sudo npm install</code>, depending on your permissions.

Once you have installed the packages, in Terminal while still in the <code>/assets</code> directory, run <code>gulp watch</code>. 

SCSS files in <code>assets/scss/</code> are compiled and minified over to <code>assets/css</code>.

JavaScript files in <code>assets/js/scripts/</code> are uglified, concatenated and sent over to <code>assets/js/</code>.

> Note: If you would like to specify scripts per WordPress template (e.g. posts, pages etc.), you can tweak the <code>js</code> Gulp task to create separate JavaScript files.

## Features
The Gulp build features the following helpful packages:
<ul>
  <li><a href="https://github.com/sindresorhus/gulp-autoprefixer">gulp-autoprefixer</a></li>
  <li><a href="https://github.com/babel/gulp-babel">gulp-babel</a></li>
  <li><a href="https://github.com/scniro/gulp-clean-css">gulp-clean-css</a></li>
  <li><a href="https://github.com/hparra/gulp-rename">gulp-rename</a></li>
  <li><a href="https://github.com/dlmanning/gulp-sass">gulp-sass</a></li>
  <li><a href="https://github.com/terinjokes/gulp-uglify">gulp-uglify</a></li>
</ul>

There are also a selection of useful WordPress functions located in the <code>functions</code> directory, including the following:

<ul>
    <li>Change admin credit in footer</li>
    <li>Change default “Howdy” greeting</li>
    <li>Enqueue scripts and styles</li>
    <li>Pretty printing debugging tool for PHP</li>
    <li>Register custom navigation menu</li>
    <li>Reorder admin menu</li>
</ul>

## Credits
<ul>
  <li><a href="https://wordpress.com">WordPress</a> (duh!)</li>
  <li><a href="https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards">WordPress Coding Standards for PHP_Codesniffer</a></li>
  <li><a href="http://gulpjs.com/">Gulp.js</a></li>
  <li><a href="http://sass-lang.com/">SASS / SCSS</a></li>
</ul>
