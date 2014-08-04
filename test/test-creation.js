/*global require, describe, beforeEach, it, __dirname */
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('phaser generator', function () {
  'use strict';

  beforeEach(function (done) {

    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('phaser-official-coffee:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      '.jshintrc',
      '.gitignore',
      '.bowerrc',
      'gulpfile.js',
      'src/assets/fonts/minecraftia.png',
      'src/assets/fonts/minecraftia.xml',
      'src/assets/images/player.png',
      'src/assets/images/preloader.gif',
      'src/sass/main.scss',
      'src/game/states/boot.coffee',
      'src/game/states/game.coffee',
      'src/game/states/menu.coffee',
      'src/game/states/preloader.coffee',
      'src/game/main.coffee',
      'src/index.html',
      'gulp/index.coffee',
      'gulp/tasks/browserify.coffee',
      'gulp/tasks/browserSync.coffee',
      'gulp/tasks/build.coffee',
      'gulp/tasks/compass.coffee',
      'gulp/tasks/copy.coffee',
      'gulp/tasks/default.coffee',
      'gulp/tasks/images.coffee',
      'gulp/tasks/setWatch.coffee',
      'gulp/tasks/watch.coffee',
      'gulp/util/bundleLogger.coffee',
      'gulp/util/handleErrors.coffee',
      'gulp/util/scriptFilter.coffee'
    ];

    helpers.mockPrompt(this.app, {
      'someOption': true
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
