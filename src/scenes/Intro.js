export class Intro extends Phaser.Scene {
    constructor(test) {
        super(
            { key: 'Intro' }
        )
    }
    preload() {
        this.load.image('start', 'assets/start.png')
    }

    create() {
        this.sys.canvas.style.cssText = 'cursor: url(assets/Normal_Select.cur), auto';
        let intro = this.add.text(180, 100, 'You are locked in a mansion. Try to find a way out by navigating through different rooms and looking for clues.');
        intro.setFontSize(30).setWordWrapWidth(600);
        intro.setFontFamily('Arial Black').setStroke('#51ad4f', 10).setShadow(2, 2, '#333333', 2, true, true);

        let start = this.add.image(480, 500, 'start').setScale(.6).setInteractive();
        intro.setAlpha(0);
        start.setAlpha(0);
        this.tweens.add({
            targets: [intro, start],
            alpha: 1,
            delay: 500,
            duration: 2500
        })

        start.on('pointerover', ()=>{
            this.sys.canvas.style.cssText = 'cursor: url(assets/Alternate.cur), auto';
            start.setTint(0xcccccc);
        });
        start.on('pointerout', () => {
            this.sys.canvas.style.cssText = 'cursor: url(assets/Normal_Select.cur), auto';
            start.clearTint();
        });
        start.on('pointerup', () => {
            this.scene.start('Room1');
        });


    }
}