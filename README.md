# Gulp + WordPress

Version: 2.1.0

## Author

Jase Warner ( [https://jase.io](https://jase.io) )

> If this project has been a helping hand to you, feel free to [give this grateful developer a coffee](https://www.buymeacoffee.com/jasewarner/) ☕️

## Synopsis

*Gulp + WordPress* is a blank slate WordPress theme for those Developers wishing to start a project with the bare minimum.

The theme has been built according to [WordPress Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/php/). All functions, includes and templates are placed in their respective directory and divided into separate files accordingly.

*Gulp + WordPress* is packaged with Gulp v4 for watching, compiling, and minifying SCSS and JS files.

Any SCSS files that are made alongside `core.scss` will be turned into individual CSS files, which could, for example, then be used for Gutenberg blocks. 

You may also write your JavaScript in ES6 &ndash; The Gulp scripts task utilises [Babel](https://babeljs.io/), so you can use new syntax without worrying about browser support.

## Installation

Clone the project into `wp-content/themes` and rename it accordingly.

You’ll want to update `style.css` in the theme root with all the relevant bits of information, as well as `assets/package.json` (specifically `name` and `author`).

Now, in Terminal, `cd` into the `assets` directory and install the Gulp packages (if you haven't already installed Gulp, you’ll need to [do so](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) first):

`npm install`

Once you have installed the packages, in Terminal and while still in the `assets` directory, run `gulp watch`. Note that you may want to run the default task (`gulp`) to do an initial build of the assets.  

SCSS files in `assets/scss/` are compiled and minified over to `assets/css`.

JavaScript files in `assets/js/src` are packaged over to `assets/js/dist`.
It’s possible to add JS files to the `srcJsCoreFiles` var in `gulpfile.js`. These files will then be included in the packaged `core.min.js` file.
You can also add JS files in `assets/js/src/components`, however these will not be concatenated and will instead be minified into individual JS files – this is useful if you need to split out your JS for Gutenberg blocks, or, say, have JS load on a particular archive template.

## Features

The Gulp build features the following helpful packages:

* [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)
* [gulp-babel](https://github.com/babel/gulp-babel)
* [gulp-clean-css](https://github.com/scniro/gulp-clean-css)
* [gulp-rename](https://github.com/hparra/gulp-rename)
* [gulp-sass](https://github.com/dlmanning/gulp-sass)
* [gulp-uglify](https://github.com/terinjokes/gulp-uglify)
* [gulp-scss-lint](https://github.com/juanfran/gulp-scss-lint)

There are also a selection of useful WordPress functions located in the `functions` directory to get you started, including the following:

* Change admin credit in footer
* Change default “Howdy” greeting
* Enqueue scripts and styles
* Pretty printing debugging tool for PHP
* Register custom navigation menu

## Credits

* [WordPress](https://wordpress.com)
* [WordPress Coding Standards](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards)
* [Gulp.js](http://gulpjs.com/)
* [SASS / SCSS](http://sass-lang.com/)
