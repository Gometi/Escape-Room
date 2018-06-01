import 'phaser';

import { welcome_scene } from './scenes/welcome_scene';

const gameConfig = {
    width: 1024,
    height: 720,
    scene: welcome_scene
};

new Phaser.Game(gameConfig);
