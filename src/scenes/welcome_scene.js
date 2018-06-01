export class welcome_scene extends Phaser.Scene {
    preload() {
    }

    create() {
        this.add.text(100, 100, 'Welcome to the Escape Room!', { fill: '#0f0' });
    }
}