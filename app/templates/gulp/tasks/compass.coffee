compass      = require 'gulp-compass'
gulp         = require 'gulp'
notify       = require 'gulp-notify'
handleErrors = require '../util/handleErrors'

gulp.task 'compass', ->
  gulp.src './src/sass/*.scss'
  .pipe compass
    config_file: 'compass.rb'
    css: 'build'
    sass: 'src/sass'
  .on 'error', handleErrors
