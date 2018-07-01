export class Welcome_scene extends Phaser.Scene {
    constructor(test) {
        super(
            { key: 'Welcome_scene' }
        )
    }
    preload() {
    }

    create() {
        let welcome = this.add.text(100, 100, 'Welcome to the Escape Room!', { fill: '#8e057c' });
        welcome.setFontSize(50).setFontFamily('Arial Black').setStroke('#f49cac', 10).setShadow(2, 2, '#333333', 2, true, true);
        
      let start = this.add.text(450, 400, 'Start').setInteractive();
      start.setFontSize(20);
      start.on('pointerup', ()=>{
          this.scene.start('Room1');
      })
    }
}