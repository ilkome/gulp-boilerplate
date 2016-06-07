const gulp = require('gulp')
const paths = require('../paths')
const config = require('../config')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const plumber = require('gulp-plumber')
const gulpif = require('gulp-if')
const jade = require('gulp-jade')
const jadeGlobbing = require('gulp-jade-globbing')
const prettify = require('gulp-jsbeautifier')


// Compile jade
// =================================================================================================
gulp.task('jade', () =>
  gulp.src(paths.pages.input)

    .pipe(plumber(error => {
      gutil.log(gutil.colors.red('jade error:'), error.message)
    }))

    .pipe(debug({ title: 'jade:' }))

    .pipe(jadeGlobbing())
    .pipe(jade())

    // Prettify
    .pipe(gulpif(gutil.env.pretty, prettify(config.pretty)))

    .pipe(gulp.dest(paths.build))

    .on('end', () => {
      if (gutil.env.pretty) {
        gutil.log('jade:', gutil.colors.green('pretty'))
      } else {
        gutil.log('jade:', gutil.colors.green('minify'))
      }
    })
)
