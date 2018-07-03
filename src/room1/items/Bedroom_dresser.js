let changeCursorOnHover = require('../changeCursorOnHover');

export class Bedroom_dresser{
    constructor(dresser, dresser1, room1) {
        dresser.setScale(.63);
        dresser.setAlpha(0);
        let dresserAnimation = room1.anims.generateFrameNames('dresser_anim', {
            start: 0, end: 37, prefix: 'image (', suffix: ').png'
        });

        room1.anims.create({ key: 'open dresser', frames: dresserAnimation, repeat: 0 })

       changeCursorOnHover(dresser1, room1, true);
       this.dresser1 = dresser1;
       this.room1 = room1;
    }
   

    modal(){
        let dresser_modal_background = this.room1.add.image(0, 0, 'black').setScale(1.7);
        let dresser2 = this.room1.add.image(-45, 111, 'dresser');
        let close_dresser = this.room1.add.text(-50, 300, 'Close');
        let dresser_modal = this.room1.add.container(500, 190);

        dresser_modal.add([dresser_modal_background, dresser2, close_dresser]);
        dresser_modal.setAlpha(0);
        close_dresser.setBackgroundColor('#5e5f60').setFontFamily('Arial Black').setPadding(5);
        changeCursorOnHover(close_dresser, this.room1, true);
        this.dresser1.on('pointerup', () => {
            dresser_modal.setAlpha(.9);
            dresser_modal_background.setInteractive();
            close_dresser.setInteractive();

        })

        close_dresser.on('pointerup', () => {
            dresser_modal.setAlpha(0);
            dresser_modal_background.disableInteractive();
            close_dresser.disableInteractive();
        })
    }
}

