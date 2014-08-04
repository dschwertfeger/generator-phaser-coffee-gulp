# browserify task
# ---------------
# Bundle javascripty things with browserify!
#
# If the watch task is running, this uses watchify instead
# of browserify for faster bundling using caching.

browserify   = require 'browserify'
watchify     = require 'watchify'
bundleLogger = require '../util/bundleLogger'
gulp         = require 'gulp'
handleErrors = require '../util/handleErrors'
source       = require 'vinyl-source-stream'

gulp.task 'browserify', ->
  bundleMethod = if global.isWatching then watchify else browserify

  bundler = bundleMethod
    # Specify the entry point of your app
    entries: ['./src/game/main.coffee']
    # Add file extentions to make optional in your requires
    extensions: ['.coffee']
    # Enable source maps!
    debug: true

  bundle = ->
    # Log when bundling starts
    bundleLogger.start()

    bundler
      .bundle()
      # Report compile errors
      .on 'error', handleErrors
      # Use vinyl-source-stream to make the
      # stream gulp compatible. Specifiy the
      # desired output filename here.
      .pipe source 'app.js'
      # Specify the output destination
      .pipe gulp.dest './build'
      # Log when bundling completes!
      .on 'end', bundleLogger.end

  # Rebundle with watchify on changes.
  bundler.on 'update', bundle if global.isWatching

  bundle()

