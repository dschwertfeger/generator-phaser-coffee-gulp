/*global require, module*/
'use strict';
var yeoman = require('yeoman-generator');

var PhaserGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
      default: 'phaser game'
    },
    {
      name: 'phaserVersion',
      message: 'Which Phaser version would you like to use?',
      default: '2.0.7'
    },
    {
      name: 'gameWidth',
      message: 'Game Display Width',
      default: 800
    },
    {
      name: 'gameHeight',
      message: 'Game Display Height',
      default: 600
    }
  ];

    this.prompt(prompts, function (props) {
      this.projectName = props.projectName;
      this.phaserVersion = props.phaserVersion;
      this.gameHeight = props.gameHeight;
      this.gameWidth = props.gameWidth;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('src');
    this.mkdir('src/assets');
    this.mkdir('src/game');

    this.directory('gulp', 'gulp');

    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');

    this.copy('bowerrc', '.bowerrc');
    this.copy('_gulpfile.js', 'gulpfile.js');
    this.copy('_compass.rb', 'compass.rb');
  },

  projectfiles: function () {
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');

    this.copy('src/assets/fonts/minecraftia.png', 'src/assets/fonts/minecraftia.png');
    this.copy('src/assets/fonts/minecraftia.xml', 'src/assets/fonts/minecraftia.xml');
    this.copy('src/assets/images/player.png', 'src/assets/images/player.png');
    this.copy('src/assets/images/preloader.gif', 'src/assets/images/preloader.gif');
    this.copy('src/sass/main.scss', 'src/sass/main.scss');

    this.template('src/game/states/boot.coffee', 'src/game/states/boot.coffee');
    this.template('src/game/states/game.coffee', 'src/game/states/game.coffee');
    this.template('src/game/main.coffee', 'src/game/main.coffee');
    this.template('src/game/states/menu.coffee', 'src/game/states/menu.coffee');
    this.template('src/game/states/preloader.coffee', 'src/game/states/preloader.coffee');
    this.template('src/sass/main.scss', 'src/sass/main.scss');
    this.template('src/index.html', 'src/index.html');
  }
});

module.exports = PhaserGenerator;
