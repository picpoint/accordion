var gulp = require('gulp');
var smartgrid = require('smart-grid');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();



const settings = {
	root: './src',
	srcless: './less/*.less',
	destcss: './dist/css/'
};


gulp.task('preproc', function () {
	gulp.src('./src/less/*.less')
	.pipe(less())
	.pipe(gulp.dest('./dist/css'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('html', function () {
	gulp.src('./dist/*.html')
	 .pipe(gulp.dest('./dist'))
	 .pipe(browserSync.reload({
		 stream: true
	 }));
});


gulp.task('watch', ['preproc', 'browserSync'], function () {
	gulp.watch('./src/less/*.less', ['preproc']);
	gulp.watch('./dist/*.html', ['html']);
});

gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: './dist'
		}
	});
});
