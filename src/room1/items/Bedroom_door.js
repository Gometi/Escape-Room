let changeCursorOnHover = require('../changeCursorOnHover');

export class Bedroom_door{
    constructor(door, room1) {
        door.setScale(.7, .65);
        changeCursorOnHover(door, room1, true);
        this.room1 = room1;
    }
   

    modal(door, door_modal, door_modal_background, close_door){
        changeCursorOnHover(close_door, this.room1, true);
        close_door.setBackgroundColor('#5e5f60').setFontFamily('Arial Black').setPadding(5);
        door.on('pointerup', () => {
            door_modal.setAlpha(.9);
            door_modal_background.setInteractive();
            close_door.setInteractive();
        })

        close_door.on('pointerup', () => {
            door_modal.setAlpha(0);
            door_modal_background.disableInteractive();
            close_door.disableInteractive();
        })
    }
}

