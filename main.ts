controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_bullet = 3
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    doSomething(enemy_sprite_list)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    playerbullet()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_bullet = 0
})
function velocityis0 () {
    if (MyPlayer.vx == 0 && MyPlayer.vy == 0) {
        playerisnotmoving = true
    } else if (MyPlayer.vx != 0 || MyPlayer.vy != 0) {
        playerisnotmoving = false
    }
}
function semiauto () {
    projectile = MyPlayer
    if (Player_bullet == 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . . 1 1 2 2 2 . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, MyPlayer, -200, 0)
    } else if (Player_bullet == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . . 1 1 2 2 2 . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, MyPlayer, 200, 0)
    } else if (Player_bullet == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . . 1 1 2 2 2 . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, MyPlayer, 0, 200)
    } else if (Player_bullet == 3) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . . 1 1 2 2 2 . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, MyPlayer, 0, -200)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_bullet = 1
})
function doSomething (enemy_sprite_list: Image[]) {
    spawn_location = tiles.getTilesByType(sprites.castle.tilePath3)
    for (let index = 0; index < 4; index++) {
        tiles.placeOnTile(enemy_sprite, spawn_location.removeAt(randint(0, spawn_location.length - 1)))
        enemy_sprite = sprites.create(enemy_sprite_list._pickRandom(), SpriteKind.Enemy)
        enemy_sprite.follow(MyPlayer, 20)
    }
    if (info.life() == 0) {
        game.gameOver(false)
    }
    game.setGameOverMessage(false, "You Lose Lol")
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_bullet = 2
})
function Fullyauto () {
    projectile = MyPlayer
    if (Player_bullet == 0) {
        for (let index = 0; index < 8; index++) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f . . . . . . . 
                . . . . f f f f f . . . . . . . 
                . . . . 2 2 2 2 2 . . . . . . . 
                . . . . f f f f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, MyPlayer, -400, 0)
        }
    } else if (Player_bullet == 1) {
        for (let index = 0; index < 8; index++) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f . . . . . . . 
                . . . . f f f f f . . . . . . . 
                . . . . 2 2 2 2 2 . . . . . . . 
                . . . . f f f f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, MyPlayer, 400, 0)
        }
    } else if (Player_bullet == 2) {
        for (let index = 0; index < 8; index++) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f . . . . . . . 
                . . . . f f f f f . . . . . . . 
                . . . . 2 2 2 2 2 . . . . . . . 
                . . . . f f f f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, MyPlayer, 0, 400)
        }
    } else if (Player_bullet == 3) {
        for (let index = 0; index < 8; index++) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f . . . . . . . 
                . . . . f f f f f . . . . . . . 
                . . . . 2 2 2 2 2 . . . . . . . 
                . . . . f f f f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, MyPlayer, 0, -400)
        }
    }
}
function playerbullet () {
    velocityis0()
    if (playerisnotmoving == true) {
        Fullyauto()
    } else {
        semiauto()
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let enemy_sprite: Sprite = null
let spawn_location: tiles.Location[] = []
let projectile: Sprite = null
let playerisnotmoving = false
let Player_bullet = 0
let enemy_sprite_list: Image[] = []
let MyPlayer: Sprite = null
game.splash("Press A to shoot and B to spawn enemies")
tiles.setCurrentTilemap(tilemap`level1`)
MyPlayer = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f e e f f f . . . . 
    . . . f f f e e e e f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e e e 4 4 e e e e f . . 
    . . f e e e 4 4 4 4 e e e f . . 
    . . f e d f 4 4 4 4 f d e f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . 8 8 f 8 5 2 2 5 8 f 8 8 . . 
    . . 4 d f 8 5 2 2 5 8 f d 4 . . 
    . . 4 4 f 5 5 5 5 5 5 f 4 4 . . 
    . . . . 1 5 1 5 5 1 5 1 . . . . 
    . . . 1 5 1 1 5 5 1 1 5 1 . . . 
    `, SpriteKind.Player)
MyPlayer.setPosition(100, 50)
controller.moveSprite(MyPlayer, 100, 100)
scene.cameraFollowSprite(MyPlayer)
info.setLife(3)
info.setScore(0)
enemy_sprite_list = [img`
    . . . . f f f f . . . . 
    . . f f f f f f f f . . 
    . f f f f f f f f f f . 
    f f f f f d f f f f f f 
    f f f f d d d f f f f f 
    f d f d d d d d f f d f 
    f d d d d d d d d d d f 
    f d d f f d d f f d d f 
    f d d d d d d d d d d f 
    . f d d d b b d d d f . 
    . f f d d d d d d f f . 
    d d f 6 6 f 6 6 6 f d d 
    d d f 6 6 f 6 f 6 f d d 
    d d f 6 6 f 6 6 6 f d d 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, img`
    . . . . . f f f f . . . . . 
    . . . f f c 2 c c f f . . . 
    . . f c 2 c 2 c 2 c c f . . 
    . f c c c 2 2 2 c c c c f . 
    . f c c c 2 5 2 c c c c f . 
    f c c c c 2 2 2 c c c c c f 
    f c c c 2 c c c 2 c c c c f 
    f 5 5 d b f d d f b d 5 5 f 
    f 5 d d 1 f d d f 1 d d 5 f 
    . f d f d d d d d d f d f . 
    . f c f c c b c c c f c f . 
    . c c f c c b c f c f c c . 
    . c f f c c b c c c f f c . 
    . c f c c c b c f c c f c . 
    . . f f f f f f f f f f . . 
    . . . . f f b b f f . . . . 
    `, img`
    . . . . f f f f . . . . 
    . . f f 6 b b 6 f f . . 
    . f f 6 b 6 6 b 6 f f . 
    f f 6 b 6 b b 6 b 6 f f 
    f 6 b 6 b 6 6 b 6 b 6 f 
    6 6 b 6 6 b b 6 6 b 6 6 
    f d d d d d d d d d d f 
    f d d f f d d f f d d f 
    f d d d d d d d d d d f 
    . f d d d b b d d d f . 
    . f f d d d d d d f f . 
    8 8 f 8 8 8 8 8 8 f 8 8 
    8 8 f 8 8 8 8 8 8 f 8 8 
    8 8 f 8 8 8 8 8 8 f 8 8 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `]
