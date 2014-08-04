fs = require 'fs'
onlyScripts = require './util/scriptFilter'
tasks = fs.readdirSync('./gulp/tasks/').filter onlyScripts

require './tasks/' + task for task in tasks

