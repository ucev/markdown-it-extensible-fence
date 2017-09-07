const gulp = require('gulp')
const babel = require('gulp-babel')
const browserify = require('browserify')
const rename = require('gulp-rename')
const source = require('vinyl-source-stream')
const uglify = require('gulp-uglify')

const NPM_NAME = require('./package.json').name

function jsCompile(filename, opts) {
  return browserify(filename, opts)
    .transform('babelify', {presets: ['es2015']})
    .bundle()
}

process.env.NODE_ENV = 'production'

gulp.task('js', function() {
  return browserify('./index.js', {standalone: NPM_NAME})
    .transform('babelify', {presets: ['es2015']})
    .bundle()
    .pipe(source(`${NPM_NAME + '.js'}`))
    .pipe(gulp.dest('./dist'))
})

gulp.task('build', ['js'], function() {
  return gulp.src(`./dist/${NPM_NAME}.js`)
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['build'])
