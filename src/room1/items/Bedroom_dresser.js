let changeCursorOnHover = require('../changeCursorOnHover');

export class Bedroom_dresser{
    constructor(dresser, room1) {
        dresser.setScale(.63);
       changeCursorOnHover(dresser, room1, true);
       this.room1 = room1;
    }
   

    modal(dresser, dresser_modal, dresser_modal_background, close_dresser){
        close_dresser.setBackgroundColor('#5e5f60').setFontFamily('Arial Black').setPadding(5);
        changeCursorOnHover(close_dresser, this.room1, true);
        dresser.on('pointerup', () => {
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

