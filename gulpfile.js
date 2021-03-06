'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
	return gulp.src('./work/sass/**/*.scss')
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(autoprefixer({
			cascade: false,
			grid: true
		}))
		.pipe(gulp.dest('./common/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./work/sass/**/*.scss', gulp.series('sass'));
});
