var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext('2d')

var mouse = null
var layer = [0,1,2,3,4,5,6,7,8,9,10]
var canvasUI = new Array(layer.length)
var body = document.getElementsByTagName('BODY')[0]
var loopSpeed = 1

const LEFT = 37
const UP = 38
const RIGHT = 39
const DOWN = 40