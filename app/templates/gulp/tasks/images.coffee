changed  = require 'gulp-changed'
gulp     = require 'gulp'
imagemin = require 'gulp-imagemin'

gulp.task 'images', ->
  dest = './build/assets/images'

  gulp.src './src/assets/images/**'
    # Ignore unchanged files
    .pipe changed dest
    # Optimize
    .pipe imagemin()
    .pipe gulp.dest dest

