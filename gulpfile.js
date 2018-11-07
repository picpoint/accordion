var gulp = require('gulp');
var smartgrid = require('smart-grid');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();



const settings = {
	root: './src',
	srcless: './less/*.less',
	destcss: './dist/css/'
};

/*
gulp.task('preproc', function () {
	gulp.src(settings.root + settings.srcless)
	.pipe(less())
	.pipe(gulp.dest(settings.destcss))
	.pipe(browserSync.reload({
		stream: true
	}));
});
*/


gulp.task('css', function () {
	gulp.src('./src/*.less')
		.pipe(less())
		.pipe(gulp.dest('./dist/css/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', ['css', 'browserSync'], function () {
	gulp.watch('./dist', ['css']);
});

gulp.task('browserSync', function () {
	browserSync.init({
		baseDir: settings.root
	});
});
