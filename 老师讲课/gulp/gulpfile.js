var gulp = require('gulp');//把gulp引进来，并起名叫gulp
var sass = require('gulp-sass');//css编译
var cssnano = require('gulp-cssnano');//css压缩
var concat = require('gulp-concat');//js合并
var uglify = require('gulp-uglify');//js压缩混淆
var htmlmin = require('gulp-htmlmin');//html压缩
var browserSync = require('browser-sync');//开启一个服务器用法看官网
var imagemin = require('gulp-imagemin');//图片压缩
var reversion = require('gulp-reversion');//防止缓存
// 以上均可以写在每一个需要导入的前面

// 注册一个gulp任务style，后面的函数会在任务调用时自动执行
// 1、css处理
gulp.task('style', function() {
	gulp.src(['src/styles/*.scss', '!src/styles/_*.scss'])//第一个环节scss编译,也可以都放到一个文件夹里面components只引到styles里面的*.scss
	.pipe(sass())//管道
	.pipe(cssnano())
	.pipe(gulp.dest('dist/styles'))
	.pipe(browserSync.reload({
		stream: true
	}))
})

// 2、js合并 压缩 混淆
gulp.task('script', function() {
	gulp.src('src/scripts/*.js')
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/scripts'))
	.pipe(browserSync.reload({
		stream: true
	}))
})

// 3、图片复制
gulp.task('image', function() {
	gulp.src('src/images/*.*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images'))
	.pipe(browserSync.reload({
		stream: true
	}))
})

// 4、html压缩
gulp.task('html', function() {
	gulp.src('src/*.html')
	.pipe(htmlmin({
		collapseWhitespace: true,//去空白
		removeComments: true//去注释
	}))//不加参数不自动去掉空格
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({
		stream: true
	}))
})

gulp.task('rebuild', ['style', 'script', 'image', 'html']);//将所有任务放一起任务组，一次性生成dist文件

gulp.task('serve', function() {
	browserSync({
		server: {
			'baseDir': ['dist']
		}
	}, function(err, bs) {
	    console.log(bs.options.getIn(["urls", "local"]));
	});

	// 当文件发生变化，执行某个任务
	gulp.watch('src/styles/*.scss', ['style']);
	gulp.watch('src/scripts/*.js', ['script']);
	gulp.watch('src/images/*.*', ['image']);
	gulp.watch('src/*.html', ['html']);
	// 在每一个任务后写上当内容刷新后页面刷新
})

// https://github.com/micua/home/blob/master/gulpfile.js  加版本防止缓存
// 会把里面引入的外部css文件全部加入v版本
gulp.task('reversion', ['html'], () => {
  return gulp.src('dist/*.html')
    .pipe(reversion())
    .pipe(gulp.dest('dist'));
});


gulp.task('css', function() {
	gulp.src('src/style/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/style'))
})


gulp.task('serveSass', function() {
	browserSync({
		server: {
			'baseDir': ['dist']
		}
	}, function(err, bs) {
	    console.log(bs.options.getIn(["urls", "local"]));
	});

	// 当文件发生变化，执行某个任务
	gulp.watch('src/style/*.scss', ['css']);
	// 在每一个任务后写上当内容刷新后页面刷新
})