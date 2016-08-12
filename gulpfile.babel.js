'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import useref from 'gulp-useref';
import uglify from 'gulp-uglify';
import gulpIf from 'gulp-if';
import cssnano from 'gulp-cssnano';
import imagemin from 'gulp-imagemin';
import cache from 'gulp-cache';
import del from 'del';
import runSequence from 'run-sequence';
import bower from 'bower';

const dirs = {
    src: 'app',
    dest: 'dist'
};
const paths = {
    sass: {
        src: `${dirs.src}/scss/**/*.scss`,
        dest: `${dirs.src}/css`
    },
    js: {
        src: `${dirs.src}/*.js`
    },
    css: {
        src: `${dirs.src}/*.css`
    },
    html: {
        src: `${dirs.src}/*.html`
    },
    images: {
        src: `${dirs.src}/images/**/*.+(png|jpg|gif|svg)`,
        dest: `${dirs.dest}/images`
    }
};

gulp.task('sass', () => {
    return gulp.src(paths.sass.src)
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest(paths.sass.dest))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: '.'
        }
    })
});

gulp.task('useref', () => {
    return gulp.src(paths.html.src)
        .pipe(useref())
        .pipe(gulpIf(paths.js.src, uglify()))
        .pipe(gulpIf(paths.css.src, cssnano()))
        .pipe(gulp.dest(dirs.dest))
});

gulp.task('images', () => {
    return gulp.src(paths.images.src)
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest(paths.images.dest))
});

gulp.task('clean:dist', () => {
    return del.sync(dirs.dest);
});

gulp.task('build',  (callback) => {
    console.log('Building files');
    runSequence('clean:dist',
        ['sass', 'useref', 'images'],
        callback
    )
});

gulp.task('watch', ['browserSync', 'sass'], () => {
    browserSync.create;
    gulp.watch(paths.sass.src, ['sass']);
    gulp.watch(paths.html.src, browserSync.reload);
    gulp.watch(paths.js.src, browserSync.reload);
});
