import 'phaser';

import { Welcome_scene } from './scenes/Welcome_scene';
import { Room1 } from "./scenes/Room1";

const gameConfig = {
    width: 1024,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: 0
        }
    },
    scene: [
        Welcome_scene,
        Room1
    ]
};

new Phaser.Game(gameConfig);
