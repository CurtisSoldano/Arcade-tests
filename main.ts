controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.vy = -1 * thrust
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.ax = thrust
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.ax = -1 * thrust
})
let mySprite: Sprite = null
let thrust = 0
let gravity = 1
thrust = 1.5
let idle = 1
mySprite = sprites.create(img`
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . 1 . 1 . . . . . . . 
    . . . . . . 1 . 1 . . . . . . . 
    . . . . . . 1 . 1 . . . . . . . 
    . . . . . 1 1 . 1 . . . . . . . 
    . . . . . 1 . . 1 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 1 . . . 1 1 . . . . . 
    . . . . 1 1 . . . . 1 . . . . . 
    . . . . 1 1 . . . . 1 . . . . . 
    . . . 1 1 . . . . . 1 . . . . . 
    . . . 1 . . . . . . . 1 . . . . 
    . . . . . . . . . . . 1 . . . . 
    `, SpriteKind.Player)
mySprite.ay = gravity
mySprite.setPosition(0, 0)
