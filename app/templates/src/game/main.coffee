window.onload = ->
  'use strict'

  Phaser = require 'phaser'

  game = new Phaser.Game <%= gameWidth %>, <%= gameHeight %>, Phaser.AUTO, '<%= _.slugify(projectName) %>'

  # Game States
  game.state.add 'boot', require './states/boot'
  game.state.add 'preloader', require './states/preloader'
  game.state.add 'menu', require './states/menu'
  game.state.add 'game', require './states/game'

  game.state.start 'boot'
