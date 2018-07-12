import 'phaser';

import { Welcome } from './scenes/Welcome';
import { Intro } from "./scenes/Intro";
import { Room1 } from "./scenes/Room1";
import { Room2 } from "./scenes/Room2";

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
        Welcome,
        Intro,
        Room1,
        Room2
        
    ]
};

new Phaser.Game(gameConfig);
