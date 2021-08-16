var gulp = require('gulp');
var sass = require('gulp-sass'); // module 선언

var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () { // gulp $ 명령어
    return gulp.src('./sass/*.sass') // sass 파일 경로
   .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
   .pipe(gulp.dest('./css')); // 변환 css 생성 위치 
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.sass', gulp.series("sass")); // 변경 사항을 주시해야 될 대상 경로
  gulp.watch('./sass/**/*.sass', gulp.series("sourcemaps"));
});

gulp.task('sourcemaps', function () {
 return gulp.src('./sass/*.sass')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(sourcemaps.write('./')) // css와 동일 레벨에 .map파일 생성
  .pipe(gulp.dest('./css'));
});