let changeCursorOnHover = require('../changeCursorOnHover');
export class Taylor_painting {
    constructor(taylor1, taylor2, taylor3, taylor4, dresserKey, room1) {
        taylor1.setAngle(180);
        taylor2.setAngle(270);
        taylor3.setAngle(180);
        taylor4.setAngle(90);
        this.taylor1 = taylor1;
        this.taylor2 = taylor2;
        this.taylor3 = taylor3;
        this.taylor4 = taylor4;
        this.dresserKey = dresserKey;
        this.room1 = room1;
        changeCursorOnHover(taylor1, room1);
        changeCursorOnHover(taylor2, room1);
        changeCursorOnHover(taylor3, room1);
        changeCursorOnHover(taylor4, room1);
    }
    
    modal(picture_frame_back, picture_frame_back2, taylor_modal, taylorClose) {
        taylorClose.setBackgroundColor('#5e5f60').setFontFamily('Arial Black').setPadding(5);
        changeCursorOnHover(taylorClose, this.room1, true)
        picture_frame_back.on('pointerup', () => {
            taylor_modal.setAlpha(.9);
            this.taylor1.setInteractive();
            this.taylor2.setInteractive();
            this.taylor3.setInteractive();
            this.taylor4.setInteractive();
            taylorClose.setInteractive();
            picture_frame_back2.setInteractive();
            this.room1.tweens.add({
                targets: picture_frame_back2,
                y: -500,
                delay: 200,
                duration: 3000
            })
        });

        taylorClose.on('pointerup', () => {
            taylor_modal.setAlpha(0);
            this.taylor1.disableInteractive();
            this.taylor2.disableInteractive();
            this.taylor3.disableInteractive();
            this.taylor4.disableInteractive();
            picture_frame_back2.disableInteractive();
            taylorClose.disableInteractive();
        });
    }

    rotate(image) {
        let angle = image.angle;
        if (angle == 360) angle = 0;
        angle += 90;
        this.room1.tweens.add({
            targets: image,
            angle: angle,
            duration: 1000,
            onStart: () => image.disableInteractive(),
            onComplete: () => {
                image.setInteractive();
                this.checkResult();
            }
        })
    }

    checkResult() {
        if (this.taylor1.angle == 0 && this.taylor2.angle == 0 && this.taylor3.angle == 0 && this.taylor4.angle == 0) {
            console.log('win')
            this.room1.tweens.add({
                targets: this.dresserKey,
                y: 250,
                delay: 800,
                ease: 'power2',
                duration: 1000
            })
            this.taylor1.disableInteractive();
            this.taylor2.disableInteractive();
            this.taylor3.disableInteractive();
            this.taylor4.disableInteractive();
            this.dresserKey.setInteractive();
            
        }
    }


    playMiniGame() {
        
        this.taylor1.on('pointerup', () => {
            this.rotate(this.taylor1);
        });

        this.taylor2.on('pointerup', () => {
            this.rotate(this.taylor2);
           });

        this.taylor3.on('pointerup', () => {
            this.rotate(this.taylor3);
        });

        this.taylor4.on('pointerup', () => {
            this.rotate(this.taylor4);
        });
    }
}