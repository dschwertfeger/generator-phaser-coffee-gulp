class Game

  @player = null

  create: ->
    x = @game.width / 2
    y = @game.height / 2
    @player = @add.sprite x, y, 'player'
    @player.anchor.setTo 0.5, 0.5
    @input.onDown.add @onInputDown, this

  update: ->
    x = @input.position.x
    y = @input.position.y
    cx = @world.centerX
    cy = @world.centerY

    angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI)
    @player.angle = angle

    dx = x - cx
    dy = y - cy
    scale = Math.sqrt(dx * dx + dy * dy) / 100

    @player.scale.x = scale * 0.6
    @player.scale.y = scale * 0.6

  onInputDown: ->
    @game.state.start 'menu'

module.exports = Game
