let changeCursorOnHover = require('../changeCursorOnHover');
export class Keyhole {
    constructor(hairpin1, hairpin2, inventoryHairpin, background, controls, close, KeyholeModal, room1) {
        let text = room1.add.text(-101, 371, 'Nothing Happened..').setAlpha(0);
        let keyholeImage = room1.add.image(-25, 32, 'keyhole').setScale(.5);
        
        close.on('pointerup', ()=>{
            background.disableInteractive();
            KeyholeModal.setAlpha(0);
            close.disableInteractive();
            inventoryHairpin.setAlpha(1);
        })
        controls.setAlpha(0);
        changeCursorOnHover(close, room1, true);
        close.setBackgroundColor('#5e5f60').setFontFamily('Arial Black').setPadding(5);

        // controls.setInteractive();
        // room1.input.setDraggable(controls);
        let hairpinFrames = room1.anims.generateFrameNames('hairpin_animation', {
            start: 0, end: 25, zeroPad: 4,
            prefix: 'hairpin', suffix: '.png'
        });

        room1.anims.create({ key: 'hairpin_anim', frames: hairpinFrames, delay: 1000 });
        // hairpin1.anims.play('hairpin_anim');
        
        KeyholeModal.add([background, keyholeImage, hairpin2, hairpin1, controls, text, close]);
        KeyholeModal.setAlpha(0);
        this.room1 = room1;
        this.hairpin2 = hairpin2;
        this.text = text;
        this.close = close;
        this.background = background;
        this.KeyholeModal = KeyholeModal;
    }

    rotateHairpin() {
        this.room1.input.keyboard.on('keydown_RIGHT', () => {
            this.hairpin2.angle += 2;
        });
        this.room1.input.keyboard.on('keydown_LEFT', () => {
            this.hairpin2.angle -= 2;
        })
        

    }

    unlockDoor(){
        this.room1.input.keyboard.on('keydown_SPACE', () => {
            this.room1.tweens.add({
                targets: this.hairpin2,
                x: -8,
                y: -30,
                duration: 70,
                onComplete: () => {
                    this.room1.tweens.add({
                        targets: this.hairpin2,
                        x: -39,
                        y: -15,
                        duration: 70,
                        onComplete: () => {
                            this.room1.tweens.add({
                                targets: this.hairpin2,
                                x: -40,
                                y: -28,
                                duration: 70,
                                onComplete: () => {
                                    this.room1.tweens.add({
                                        targets: this.hairpin2,
                                        x: -11,
                                        y: -27,
                                        duration: 70,
                                        onComplete: () => {
                                            this.room1.tweens.add({
                                                targets: this.hairpin2,
                                                x: -23,
                                                y: -24,
                                                duration: 70,
                                                onComplete: () => {
                                                    this.checkHairpinPosition();
                                                }
                                            });
                                        }
                                    });
                                }
                            });

                        }
                    });
                }
            });
        })
    }

    checkHairpinPosition(){
        if(this.hairpin2.angle > 100 && this.hairpin2.angle < 120){
            this.text.setColor('#5ae8a1').setText('Door Unlocked!')
            this.room1.tweens.add({
                targets: this.text,
                alpha: 1,
                duration: 800,
                onComplete: ()=>{
                    this.room1.time.addEvent({delay: 1300, callback: ()=>{
                        this.background.disableInteractive();
                       this.close.disableInteractive();
                       this.KeyholeModal.setAlpha(0);
                    }});
                }
            });
        }
        else{
            this.room1.tweens.add({
              targets: this.text,
              alpha: 1,
              duration: 1000,
              yoyo: true
            });
        }
    }
}