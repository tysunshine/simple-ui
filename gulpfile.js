"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass");

// 拷贝html
gulp.task("copyHtml", function () {
	gulp.src("src/view/*.html").pipe(gulp.dest("dist/view"));
})

// 解析sass，并拷贝到css
gulp.task("copySass", function () {
	gulp.src("src/css/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"));
})

// 监听变化
gulp.task("watchAll", function () {
	gulp.watch("src/**/*", ["copyHtml", "copySass"]);
})
