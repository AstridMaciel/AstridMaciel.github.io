var gulp = require('gulp');
var gulpJade = require('gulp-jade');

gulp.task('jade', function(){
 	return gulp.src('./jade/*.jade') /*con q archivo va a trabajar*/
 	.pipe(gulpJade())
	.pipe(gulp.dest('./'));/*ubicacion de destino*/
}); 

gulp.task('watch-jade',function(){
 return gulp.watch('./jade/*.jade', ['jade'])});

gulp.task('default',['watch-jade']);