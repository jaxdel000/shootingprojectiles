function projectile () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 4 4 5 5 5 5 5 4 4 . . . 
. 4 4 5 5 5 5 5 5 5 5 5 4 4 . . 
. 4 5 5 5 5 5 5 5 5 5 5 5 4 4 . 
. 4 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
. 4 5 5 5 5 5 5 5 5 5 5 5 4 4 . 
. 4 5 5 5 5 5 5 5 5 5 5 5 4 4 . 
. 4 4 5 5 5 5 5 5 5 5 5 5 4 4 . 
. 4 4 5 5 5 5 5 5 5 5 5 4 4 4 . 
. 4 4 5 5 5 5 5 5 5 5 5 4 4 4 . 
. 4 4 4 4 5 5 5 4 5 5 5 4 4 4 . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
. . 4 4 4 4 4 4 4 4 4 4 4 . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
    projectile22 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . 4 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 4 4 5 5 5 5 5 4 4 . . . 
. 4 4 5 5 5 5 5 5 5 5 5 4 4 . . 
. 4 5 5 5 5 5 5 5 5 5 5 5 4 4 . 
. 4 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
. 4 5 5 5 5 5 5 5 5 5 5 5 4 4 . 
. 4 5 5 5 5 5 5 5 5 5 5 5 4 4 . 
. 4 4 5 5 5 5 5 5 5 5 5 5 4 4 . 
. 4 4 5 5 5 5 5 5 5 5 5 4 4 4 . 
. 4 4 5 5 5 5 5 5 5 5 5 4 4 4 . 
. 4 4 4 4 5 5 5 4 5 5 5 4 4 4 . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
. . 4 4 4 4 4 4 4 4 4 4 4 . . . 
. . . . 4 4 4 4 4 4 4 . . . . . 
. . . . . . . . . . . . . . . . 
`, player_awesome, 50, 0)
    projectile2.setPosition(0, Math.randomRange(0, 120))
}
function player () {
    player_awesome = sprites.create(img`
. . . . . . . . . . . . . . . . 
f f f f f f f f f . . . . . . . 
7 7 7 7 7 7 7 7 7 f f . . . . . 
7 7 7 7 7 7 7 7 7 7 7 f f 5 5 5 
4 7 7 7 7 7 7 7 7 7 7 7 f f 5 5 
4 . . . . . 7 7 7 7 7 7 7 f f 5 
4 . . . . . . . 7 7 7 7 7 7 f f 
4 . . . . . . . . 7 7 7 7 7 7 f 
4 . . . . . . . . . 7 7 7 7 7 f 
4 . . . . . . . . . 7 7 7 7 7 f 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 f f . 
f f f f f f f f 7 7 7 f f f . . 
. . . . . . . . f f f . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    player_awesome.setPosition(78, 101)
    controller.moveSprite(player_awesome, 100, 100)
}
let player_awesome: Sprite = null
let projectile22: Sprite = null
let projectile2: Sprite = null
player()
projectile()
game.onUpdate(function () {
	
})
