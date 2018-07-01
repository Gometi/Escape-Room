export class Welcome extends Phaser.Scene {
    constructor(test) {
        super(
            { key: 'Welcome' }
        )
    }
    preload() {
    }

    create() {
        let welcome = this.add.text(80, 200, 'Welcome to the Escape Room!', { fill: '#8e057c' });
        welcome.setAlpha(0);
        welcome.setFontSize(50).setFontFamily('Arial Black').setStroke('#f49cac', 10).setShadow(2, 2, '#333333', 2, true, true);

        this.tweens.add({
            targets: welcome,
            alpha: 1,
            delay: 500,
            duration: 2500,
            yoyo: true,
            onComplete: () => this.scene.start('Intro')
        })
        
     
    }
}