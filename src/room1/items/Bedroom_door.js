export class Bedroom_door{
    constructor(door) {
        door.setScale(.7, .65);
        door.on('pointerover', () => {
            door.setTint(0xcccccc);
        });
        door.on('pointerout', () => {
            door.clearTint();
        });
    }
   

    modal(door, door_modal, door_modal_background, close_door){
        door.on('pointerup', () => {
            door_modal.setAlpha(9);
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

