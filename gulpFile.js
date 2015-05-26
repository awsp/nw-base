var NwBuilder = require('node-webkit-builder');
var gulp = require('gulp');
var gutil = require('gulp-util');
var install = require("gulp-install");
var del = require('del');

// Build package
gulp.task('nw', function () {
	var nw = new NwBuilder({
		version: '0.12.1', // Current Node Version
		files: ['./src/**'],
		platforms: ['osx64', 'win64'], // Available options ['osx', 'osx32', 'osx64', 'win', 'win32', 'win64']
		macZip: true
		//,
		//macIcns: "/path/to/your/icon.icns",
		//winIco: "/path/to/your/icon.ico"
	});
	// Log stuff you want
	nw.on('log', function (msg) {
		gutil.log('node-webkit-builder', msg);
	});
	// Build returns a promise, return it so the task isn't called in parallel
	return nw.build().catch(function (err) {
		gutil.log('node-webkit-builder', err);
	});
});

// Clean .git folder
gulp.task('clean:git', function (cb) {
	del([
		'test/',
		'.git'
	], cb);
});

// Install `src` folder dependencies
gulp.task('src:install', function () {
	gulp.src(['./src/bower.json', './src/package.json']).pipe(install());
});

// Init 
gulp.task('init', ['clean:git', 'src:install']);