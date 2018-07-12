let changeCursorOnHover = require('../changeCursorOnHover');

export class Bedroom_door {
    constructor(door, door_anim, open_door, room1) {
        door.setScale(.6, .67).setInteractive();
        door.setTint(0x0a0a0a);
        door_anim.setScale(.61);
        door.on('pointerover', () => {
            room1.sys.canvas.style.cssText = 'cursor: url(assets/Alternate.cur), auto';
            door_anim.setTint(0xcccccc);
        });
        door.on('pointerout', () => {
            room1.sys.canvas.style.cssText = 'cursor: url(assets/Normal_Select.cur), auto';
            door_anim.clearTint();
        });

        open_door.setScale(.13, .45).setAlpha(.001);
        changeCursorOnHover(open_door, room1);
        open_door.on('pointerup',()=>{
            room1.scene.transition({ target: 'Room2', duration: 1000 });
        })
        // room1.input.setDraggable(black);

        let doorFrameNames = room1.anims.generateFrameNames('door_animation', {
            start: 0, end: 37, zeroPad: 4,
            prefix: 'door', suffix: '.png'
        });

        room1.anims.create({ key: 'open_door', frames: doorFrameNames, delay: 500 });
        // door_anim.anims.play('open_door');

        this.room1 = room1;
    }


    modal(door, door_modal, door_modal_background, close_door) {
        let text = this.room1.add.text(-90, 300, "It's Locked").setFontFamily('Comic Sans Ms');
        door_modal.add(text);
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

