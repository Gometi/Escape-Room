export class Room2 extends Phaser.Scene {
    constructor(test) {
        super(
            { key: 'Room2' }
        )
    }
    preload() {
        this.load.image('room2', 'assets/mansion_interior.jpg');    }

    create() {
        let room1_background = this.add.image(0, 0, 'room2').setOrigin(0, 0).setScale(.8);
        let text = this.add.text(190, 200, 'More Rooms coming Soon!!').setAlpha(0);
        text.setFontSize(30).setWordWrapWidth(600);
        text.setFontFamily('Arial Black').setStroke('#51ad4f', 10).setShadow(2, 2, '#333333', 2, true, true);
        this.tweens.add({
            targets: text,
            alpha: 1,
            duration: 4000
        })

    }
}