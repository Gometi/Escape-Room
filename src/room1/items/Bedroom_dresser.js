let changeCursorOnHover = require('../changeCursorOnHover');

export class Bedroom_dresser{
    constructor(dresser, closed_dresser, opened_dresser, hair_pin, room1) {
        dresser.setScale(.63);
        dresser.setAlpha(0);
        let dresserAnimation = room1.anims.generateFrameNames('dresser_anim', {
            start: 0, end: 37, prefix: 'image (', suffix: ').png'
        });

        room1.anims.create({ key: 'open dresser', frames: dresserAnimation, repeat: 0 })
        
        
        
       changeCursorOnHover(closed_dresser, room1, true);
    changeCursorOnHover(opened_dresser, room1, true);
       this.closed_dresser = closed_dresser;
       this.hair_pin = hair_pin;
       this.opened_dresser = opened_dresser;
       this.room1 = room1;
    }
   

    modal(opened_dresser_modal_background, opened_dresser_modal, close_opened_dresser){
        let text = this.room1.add.text(-50, 300, "It's Locked").setFontFamily('Comic Sans Ms');
        
        
        let closed_dresser_modal_background = this.room1.add.image(0, 0, 'black').setScale(1.7);
        let closed_dresser_image = this.room1.add.image(-22, 117, 'closed_dresser').setScale(.7);
        let close = this.room1.add.text(-50, 360, 'Close');
        let closed_dresser_modal = this.room1.add.container(500, 190);
        closed_dresser_modal.add([closed_dresser_modal_background, closed_dresser_image, text, close]);

       

            // closed_dresser_modal.add([closed_dresser_modal_background, closed_dresser_image, close, this.hair_pin]);
      
        closed_dresser_modal.setAlpha(0);
        close.setBackgroundColor('#5e5f60').setFontFamily('Arial Black').setPadding(5);
        changeCursorOnHover(close, this.room1, true);
        close_opened_dresser.setBackgroundColor('#5e5f60').setFontFamily('Arial Black').setPadding(5);
        changeCursorOnHover(close_opened_dresser, this.room1, true);
        this.closed_dresser.on('pointerup', () => {
            closed_dresser_modal.setAlpha(.9);
            closed_dresser_modal_background.setInteractive();
            close.setInteractive();

        });

        close.on('pointerup', () => {
            closed_dresser_modal.setAlpha(0);
            closed_dresser_modal_background.disableInteractive();
            close.disableInteractive();
        });

        this.opened_dresser.on('pointerup', () => {
            opened_dresser_modal.setAlpha(.9);
            opened_dresser_modal_background.setInteractive();
            close_opened_dresser.setInteractive();
            this.hair_pin.setInteractive();

        });

        close_opened_dresser.on('pointerup', () => {
            opened_dresser_modal.setAlpha(0);
            opened_dresser_modal_background.disableInteractive();
            close_opened_dresser.disableInteractive();
        });

    }

    
}

