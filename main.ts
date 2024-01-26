controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_bullet = 3
})
function spawnenemies () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        enemy_sprite_list = [
        img`
            . . . . . . 2 2 2 2 . . . . . . 
            . . . . 2 2 3 3 3 3 2 e . . . . 
            . . . 2 3 d 1 1 d d 3 2 e . . . 
            . . 2 3 1 d 3 3 3 d d 3 e . . . 
            . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
            . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
            2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
            2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
            2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
            2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
            e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
            e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
            e 3 d 3 3 1 d d 3 d 1 b b e e . 
            . e 3 1 1 d d 1 1 1 b b e e e . 
            . . e 3 3 3 3 3 3 b e e e e . . 
            . . . e e e e e e e e e e . . . 
            `,
        img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . b b d d d 5 5 5 5 5 5 5 b . . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            c b 5 5 b c d d 5 5 5 5 5 5 b . 
            b b c c c d d d 5 5 5 5 5 d b . 
            . . . . c c d d d 5 5 5 b b . . 
            . . . . . . c c c c c b b . . . 
            `,
        img`
            ............3333bb..bb33333.....
            ........3bb31111d3b311d111d33...
            .......3bdd11111dbd11d11111113..
            .......bdddd1111bd11d111dd11113.
            ......3d111dd111b11d111dd33d11d3
            ......3d11111dd1d11d111d11d33113
            ....bb3d111111dd13dd111d1dd3b31b
            ...b3d3dd111111dd13dd11d1dddbbdb
            ...3ddd31d111111dd133dddddddb.b.
            ..311111d1ddd1111dd11dddddd33...
            ..3111111d111dd111dd1111dd3313..
            ..bddd1111ddd11dd111d111111113..
            ..311ddd111dddd11dd11ddd1111ddb.
            ..31111dd111dddd11dd111dddddddb.
            ...bd1111d1113ddd11dd1111111d3b.
            ...4dd1111d1113ddd11ddd111d333b.
            ..4dbdddd11d11133ddddddddddddb..
            .4ddbddddd11d111d33ddddddddd3b..
            .4dddb11ddd11dd111d333dddd3bb...
            .4dd55b111d11dd11111d3333bbb....
            .445555b111d11dddd111111ddb.....
            .4455555bd1d311ddddddddddd3.....
            .45455555bb1d3111ddddddd113.....
            .4554555555b333d1111111113......
            455554555555bbb33d11111d33......
            4d555545555555dbbb3d11d33.......
            4dd5555455555ddddd43333.........
            45dd555544ddddddd4..............
            .45dd5555d44dddd4...............
            ..45dd55dddd4444................
            ...45dd55444....................
            ....44444.......................
            `,
        img`
            ................86..................
            ...........6688867886...............
            ...........8666877688868............
            ............868777767768............
            .........688667777776688............
            ........67767777777778666...........
            .........6776667767666868...........
            ..........866667667677688...........
            .........8666666666667778...........
            ........667766666666666676..........
            .......67766667666776667776.........
            ......886667776676777666688.........
            .....67766777667767777666768........
            ....6776666666777667776666776.......
            .....8667776667766676677776776......
            ......8777666666667776777776688.....
            ....6887766776677677777777776776....
            ..8866666677767777777777766666778...
            .86666666777667767777766666776668...
            ..88677666666777677677666667776668..
            ..86776677666666666666667776666668..
            886666677766667666666776677766668...
            6668666676667766767767766677666668..
            88866666666777677677667666666776668.
            .86668866666766776776666667766666668
            .86688666666666776666667667776666688
            .668866666666666666666677666666688..
            ..8866686666666666677667776666668...
            ...866886666666666677667776666668...
            ...86886668666666667666666666888....
            ....88866886686666666666666668......
            ......86886668666866668666868.......
            ......88866688668866688866888.......
            ........8888888688888ce868..........
            ..............e88e88.ec.8...........
            ...............eeee..e..............
            ...............ceef.ce..............
            ...............ceefcec..............
            ...............feefce...............
            ...............fceeec...............
            ...............ffceec...............
            `
        ]
        enemy_sprite = sprites.create(enemy_sprite_list[randint(0, 3)], SpriteKind.Enemy)
        tiles.placeOnTile(enemy_sprite, value)
        tiles.setTileAt(value, assets.tile`myTile`)
    }
    if (true) {
    	
    }
}
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
    } else {
    	
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
    } else {
    	
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_bullet = 1
})
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
    } else {
    	
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
})
function gameover () {
    if (info.life() == 0) {
        game.setGameOverMessage(false, "GAME OVER!")
    } else if (enemy_sprite == 0) {
        game.setGameOverMessage(true, "You win")
    } else {
    	
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.spray, 500)
})
let projectile: Sprite = null
let playerisnotmoving = false
let enemy_sprite = 0
let enemy_sprite_list: Image[] = []
let Player_bullet = 0
let MyPlayer: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
MyPlayer = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
MyPlayer.setPosition(100, 50)
controller.moveSprite(MyPlayer, 100, 100)
scene.cameraFollowSprite(MyPlayer)
info.setLife(3)
spawnenemies()
