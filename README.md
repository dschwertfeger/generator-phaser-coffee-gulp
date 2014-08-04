# generator-phaser-coffee-gulp

A [Yeoman](http://yeoman.io/) generator for writing HTML5 games with the [Phaser](http://phaser.io/) game framework in [CoffeeScript](coffeescript.org). It inlcudes a fantastic [Gulp](http://gulpjs.com/) + [Browserify](http://browserify.org/) build system based on the [gulp-starter](https://github.com/greypants/gulp-starter) project by [@greypants](https://github.com/greypants).


## Instructions

Install [Node.js](http://www.nodejs.org) if you haven't already.

Install Yeoman, Gulp, and this generator:

`npm install -g yo gulp generator-phaser-coffee-gulp`

Create a new directory for your game: 

`mkdir my-game && cd $_`

Finally, invoke the generator:

`yo phaser-coffee-gulp`


### Run A Local Development SErver

Install Compass if you haven't already.

The gulp-compass module relies on Compass already being installed on your system.

````
gem update --system
gem install compass
```

Run the server.

`gulp`


## Credit

[@photonstorm](https://github.com/photonstorm/) for creating  [phaser](https://github.com/photonstorm/phaser)

The guys behind [yeoman](https://github.com/yeoman/yeoman)

[Gulp.js](http://www.gulpjs.com)

[Dan Tello](https://github.com/greypants) for [gulp-starter](https://github.com/greypants/gulp-starter)

## License

MIT
