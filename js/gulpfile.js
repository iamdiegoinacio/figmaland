const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer =  require('gulp-autoprefixer');

//Function to compile sass to css
function compilaSass(){
    return gulp
    .src('../scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
        overrideBrowserslist: [
            "defaults"
        ],
        cascade: false
    }))
    .pipe(gulp.dest('../css'))
}


gulp.task('sass', compilaSass);

//Watch function to monitor changes to sass files and automatically compile
function watch(){
    gulp.watch('../scss/*.scss', compilaSass);
}

gulp.task('default', watch);