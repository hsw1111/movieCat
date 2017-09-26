var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var cssnano = require("gulp-cssnano");
var htmlmin = require("gulp-htmlmin");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
var imagemin = require("gulp-imagemin");

//启动服务器
gulp.task('default',["jsmin","cssmin","htmlmin"],function(){
  browserSync.init({
    server:{
      baseDir:"./"
    }
  });

  // 监控文件变化
  gulp.watch(["./src/js/*.js",'./src/views/**/*.js','./src/css/*.css',"./src/*.html","./src/views/**/*.html"],["jsmin","cssmin","htmlmin"]
  )
})

//合并并压缩js
gulp.task("jsmin",function(){
  gulp.src(["./src/js/*.js",'./src/views/**/*.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(reload({stream:true}));
});

//压缩css
gulp.task("cssmin",function(){
  gulp.src('./src/css/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css'))
    .pipe(reload({stream:true}));
})

//压缩html
gulp.task("htmlmin",function(){
  gulp.src("./src/*.html")
    // 去除空格
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))
    .pipe(reload({stream:true}));


  gulp.src("./src/views/**/*.html")
    // 去除空格
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("./dist/views"))
    .pipe(reload({stream:true}));
})
