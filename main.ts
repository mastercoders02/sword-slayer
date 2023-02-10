namespace SpriteKind {
    export const spritescreen = SpriteKind.create()
}
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite = sprites.create(assets.image`Sword Slayer`, SpriteKind.spritescreen)
mySprite = sprites.create(assets.image`START`, SpriteKind.spritescreen)
forever(function () {
    if (controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.spritescreen)
        scene.setBackgroundImage(assets.image`Wasteland Forest`)
        mySprite2 = sprites.create(assets.image`Character-SWORDandSHIELD`, SpriteKind.Player)
        game.showLongText("Once upon a time...", DialogLayout.Bottom)
        game.showLongText("There was a warrior who tried to save the land...", DialogLayout.Bottom)
        scene.setBackgroundImage(assets.image`Halynthia`)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        mySprite3 = sprites.create(assets.image`Dragon`, SpriteKind.Enemy)
        game.showLongText("However, the horrific monsters of Halynthia would try to split him into pieces!", DialogLayout.Bottom)
        game.showLongText("But the warrior wasn't going to let THAT guy take over!", DialogLayout.Bottom)
        scene.setBackgroundImage(assets.image`Wasteland Forest`)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        mySprite4 = sprites.create(assets.image`Character-SWORDandSHIELD`, SpriteKind.Player)
        game.showLongText("So let's help him!", DialogLayout.Bottom)
    }
})
