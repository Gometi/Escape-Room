export class Welcome_scene extends Phaser.Scene {
    constructor(test) {
        super(
            { key: 'Welcome_scene' }
        )
    }
    preload() {
    }

    create() {
        this.add.text(100, 100, 'Welcome to the Escape Room!', { fill: '#0f0' });
      let start = this.add.text(450, 400, 'Start').setInteractive();
      start.on('pointerup', ()=>{
          this.scene.start('Room1');
      })
    }
}