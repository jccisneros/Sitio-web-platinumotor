const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');

gulp.task('pug', () => {
    return gulp.src('src/dev/views/pages/*.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('src/dist/'))
    .pipe(browserSync.stream());
});

gulp.task('sass', () => {
    return gulp.src([        
        'src/dev/scss/*.scss',        
        'src/dev/scss/base/*.scss',
        'src/dev/scss/components/*.scss',        
        'src/dev/scss/config/*.scss',
        'src/dev/scss/hacks/*.scss',
        'src/dev/scss/layout/*.scss',
        'src/dev/scss/sections/*.scss',
        'src/dev/scss/theme/*.scss',        
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/animate.css/animate.min.css'
    ])
    .pipe(sass({outputStyle: 'compressed'})) 
    .pipe(gulp.dest('src/dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', () => {
    return gulp.src([        
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js'
    ])
    .pipe(gulp.dest('src/dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass', 'pug'], () => {
    browserSync.init({
        server: './src/dist'
    });
    gulp.watch([        
        'src/dev/scss/**/*.scss',
        'src/dev/views/**/*.pug',
    ], ['sass',  'pug']);
    gulp.watch('src/dist/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);