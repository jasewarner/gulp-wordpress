var autoprefixer = require( 'gulp-autoprefixer' ),
	cleancss = require( 'gulp-clean-css' ),
	gulp = require( 'gulp' ),
	rename = require( 'gulp-rename' ),
	sass = require( 'gulp-sass' ),
	uglify = require( 'gulp-uglify' );

/**
 * Here we set a prefix for our compiled and stylesheet and scripts.
 * Note that this should be the same as the `$themeHandlePrefix` in `func-script.php` and `func-style.php`.
 */
var themePrefix = 'theme-name';

/**
 * Asset paths.
 */
var scssSrc = 'scss/**/*.scss',
	jsSrc = 'js/functions/*.js',
	jsDest = 'js/scripts/';

/**
 * Task for styles.
 *
 * Scss files are compiled and sent over to `assets/css/`.
 */
gulp.task( 'styles', function () {
	gulp.src( scssSrc )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( autoprefixer( {
			browsers: ['last 3 versions', '> 5%', 'Explorer >= 10', 'Safari >= 8'],
			cascade: false
		} ) )
		.pipe( rename( { prefix: themePrefix + '-', suffix: '.min' } ) )
		.pipe( cleancss() )
		.pipe( gulp.dest( './css/' ) );
} );

/**
 * Task for scripts.
 *
 * Js files are uglified and sent over to `assets/js/scripts/`.
 */
gulp.task( 'scripts', function () {
	return gulp.src( jsSrc )
		.pipe( rename( { prefix: themePrefix + '-', suffix: '.min' } ) )
		.pipe( uglify() )
		.pipe( gulp.dest( jsDest ) );
} );

/**
 * Task for watching styles and scripts.
 */
gulp.task( 'watch', function () {
	gulp.watch( scssSrc, ['styles'] );
	gulp.watch( jsSrc, ['scripts'] );
} );
