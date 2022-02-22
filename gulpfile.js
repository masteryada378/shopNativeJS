const gulp = require('gulp');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const pug = require('gulp-pug');
const rename = require('gulp-rename');

// const sass  = require('gulp-sass');
const sass = require('gulp-sass')(require('sass'));


const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const spritesmith = require('gulp.spritesmith');
const rimraf = require('rimraf');
const autoprefixer = require('gulp-autoprefixer');
var svgSprite = require('gulp-svg-sprite');
const babel = require('gulp-babel');


// var pipeline = require('readable-stream').pipeline;


// Настройка сервера
gulp.task('server', ()=>{
    browserSync.init({
        server: {
            port: 9000,
            baseDir: 'docs'
        }
    });
    gulp.watch('docs/**/*').on('change', browserSync.reload)
})

//коомпеляция PUG

gulp.task('pug', ()=>{
    return gulp.src('source/template/*.pug')
                .pipe(
                    pug({pretty: true})
                )
                .pipe(gulp.dest('docs'))
})

gulp.task('pug-blocks', ()=>{
    return gulp.src('source/template/blocks/*.pug')
                .pipe(
                    pug({pretty: true})
                )
                .pipe(gulp.dest('docs/blocks'))
})

//коомпеляция css       вписать сюда!!!
gulp.task('scss', ()=>{
    return gulp.src('source/styles/main.scss')
                .pipe(sourcemaps.init())
                .pipe(
                    sass()
                    // sass({outputStyle: 'compressed'})
                    .on('error', sass.logError)
                )
                .pipe(
                    rename('main.min.css')   
                )
                .pipe(autoprefixer({
                    // browsers: ['last 3 version'],
                    overrideBrowserslist: ['last 3 version'],
                    cascade: false
                }))
                .pipe(sourcemaps.write('.'))
                .pipe(gulp.dest('docs/css'))
})


//- sprite

gulp.task('svgSprite', ()=> {
    return gulp.src('source/svg/*.svg') 
        .pipe(svgSprite({
                mode: {
                    stack: {
                        sprite: "../sprite.svg" 
                    }
                },
            }
        ))
        .pipe(gulp.dest('docs/images/'));
});

//delete 

gulp.task('clean', (cb)=> rimraf('docs', cb));

// копируем шрифты

gulp.task('copy:fonts', ()=>{
    return gulp.src('source/fonts/**/*.*')
            .pipe(gulp.dest('docs/fonts'))
})

//копируем картинки

gulp.task('copy:images', ()=>{
    return gulp.src('source/images/**/*.*')
            .pipe(gulp.dest('docs/images'))
})


//собираем js
gulp.task('js', ()=>{
    return gulp.src('source/js/*.js')
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(concat('script.js'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('docs/js'))
})

gulp.task('copy', gulp.parallel('copy:fonts', 'js', 'copy:images'))

//наблюдатели 

gulp.task('watch', () => {
    gulp.watch('source/template/**/*.pug', gulp.series('pug'));
    gulp.watch('source/styles/**/*.scss', gulp.series('scss'));
    gulp.watch('source/js/modules/*.js', gulp.series('js'));
    gulp.watch('source/js/*.js', gulp.series('js'));
    gulp.watch('source/js/modules/*.js', gulp.series('js'));
})

gulp.task('default', gulp.series('clean', gulp.parallel('svgSprite', 'pug', 'scss','pug-blocks', 'js','copy'), gulp.parallel('watch', 'server')));