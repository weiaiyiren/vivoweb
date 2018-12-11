//  require 引入模块
var gulp = require('gulp');//引入gulp
var uglify = require('gulp-uglify');//压缩js
var babel = require('gulp-babel');//es6转译
var connect = require('gulp-connect');//服务器
var concat = require('gulp-concat');//合并
var minicss = require('gulp-clean-css');//引入css
var minihtml = require('gulp-html-minify');//引入html
var del = require('del');//删除整个文件
const rev = require('gulp-rev');//添加版本号
var revCollector = require('gulp-rev-collector');//修改路径版本号
var run = require('run-sequence');//异步执行
var miniimg = require('gulp-imagemin');//图片压缩
var rename= require('gulp-rename');//重命名
// task
// 创建一个任务
// 在cmd中, 执行任务 gulp + 任务名称
// src() 查找文件
// .pipe()  下一步
// .dest()  文件输出


//压缩js
gulp.task('minijs',function(){
    gulp.src('app/static/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/static/js'))
    .pipe(connect.reload())
})
//压缩css
gulp.task('minicss',function(){
    gulp.src('app/static/css/*.css')
    .pipe(minicss())
    .pipe(gulp.dest('dist/static/css'))
    .pipe(connect.reload())
})
//压缩HTML
gulp.task('minihtml',function(){
    gulp.src('app/*.html')
    .pipe(minihtml())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())//实时刷新
})
//图片压缩
gulp.task('miniimg',function(){
    gulp.src('app/static/images/**/*.*')
    .pipe(gulp.dest('dist/static/images'))
    .pipe(connect.reload())
})
gulp.task('miniimgs',function(){
    gulp.src('app/static/img/**/*.*')
    .pipe(gulp.dest('dist/static/img'))
    .pipe(connect.reload())
})
//任务监听
gulp.task('watch', function() {
    gulp.watch('app/**/*.*', ['miniAll']);
//  gulp.watch('app/**/*.html', ['minihtml'])
//  gulp.watch('app/**/*.js', ['minijs'])
})

//gulp.task('miniAll', function() {
//	gulp.src('app/**/*.*')
//	.pipe(gulp.dest('dist'))
//	.pipe(connect.reload())
//})

// 开启服务器
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: '7777',
        livereload: true
    });
  });
  
gulp.task('default', ['minijs', 'minicss','minihtml','miniimg','miniimgs']);
