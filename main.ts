namespace SpriteKind {
    export const location = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, sprites.castle.tileGrass1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c . . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f b 3 b c 3 b c f b b c c c . 
        . c b b b b b b c f b c b c c . 
        . c b b b b b b c b b c b b c . 
        c b 1 b b b 1 b b b c c c b c . 
        c b b b b b b b b c c c c c . . 
        f b c b b b c b b b b f c . . . 
        f b 1 f f f 1 b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . c c f f f 
        c b b c f . . . c c . . c c f f 
        . c b b b f f c c 3 c c 3 c f f 
        . c c c b b f c b 3 c b 3 b f f 
        . c c b c b f c b b b b b b c . 
        . c b b c b b c b b b b b b c . 
        . c b c c c b b b 1 b b b 1 b c 
        . . c c c c c b b b b b b b b c 
        . . . c f b b b b c b b b c b f 
        . . c c f b b b b 1 f f f 1 b f 
        . . . . f c b b b b b b b b f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, sprites.castle.tileGrass1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    mySprite.setPosition(10, 265)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    game.splash("Layer 2")
    tiles.setCurrentTilemap(tilemap`Layer 2`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (!(immute)) {
        info.changeLifeBy(-1)
        immute = 1
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
    }
})
let immute = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . f f f . . 
    f f f . . . . . . . . c c f f f 
    c b b c f . . . c c . . c c f f 
    . c b b b f f c c 3 c c 3 c f f 
    . c c c b b f c b 3 c b 3 b f f 
    . c c b c b f c b b b b b b c . 
    . c b b c b b c b b b b b b c . 
    . c b c c c b b b 1 b b b 1 b c 
    . . c c c c c b b b b b b b b c 
    . . . c f b b b b c b b b c b f 
    . . c c f b b b b 1 f f f 1 b f 
    . . . . f c b b b b b b b b f . 
    . . . . . f c b b b b b b f . . 
    . . . . . . f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 125, 125)
let otherSprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(otherSprite, sprites.castle.tileGrass1)
otherSprite.follow(mySprite)
otherSprite.setVelocity(150, 150)
immute = 0
scene.setBackgroundColor(15)
tiles.setCurrentTilemap(tilemap`Layer 2`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
scene.cameraFollowSprite(mySprite)
info.startCountdown(90)
info.setScore(0)
game.showLongText("Get to layer 3 to win.", DialogLayout.Center)
info.setLife(3)
forever(function () {
    if (immute) {
        pause(1000)
        immute = 0
    }
})
forever(function () {
    if (immute) {
        mySprite.setImage(img`
            5 6 2 5 . . . . . . 2 5 6 2 5 6 
            5 f f 6 2 5 . 6 2 5 6 c c f f 2 
            2 b b c f 6 2 5 c c c c c c f 5 
            6 c b b b f f c c 3 c c 3 c f 6 
            5 c c c b b f c b 3 c b 3 b f 2 
            2 c c b c b f c b b b b b b c 5 
            6 c b b c b b c b b b b b b c 6 
            5 c b c c c b b b 1 b b b 1 b 2 
            2 6 c c c c c b b b b b b b b 5 
            . 5 6 c f b b b b c b b b c b 6 
            . 2 c c f b b b b 1 f f f 1 b 2 
            . 6 5 2 f c b b b b b b b b f 5 
            . . . 6 5 f c b b b b b b f 2 6 
            . . . . 2 6 f f f f f f f 5 6 . 
            . . . . . 5 2 6 5 2 6 5 2 6 . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
