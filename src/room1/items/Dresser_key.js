let changeCursorOnHover = require('../changeCursorOnHover');
export class Dresser_key{
    constructor(dresserKey, room1) {
        changeCursorOnHover(dresserKey, room1, true)
    }

    modal(dresserKey, dresserKey_modal, taylor_modal, takeKey, inventory_key, picture_frame_back, dresserKey_modal_background, taylor_modal_background, taylorClose, room1){
        takeKey.setColor('#2cf469').setBackgroundColor('#363836').setFontFamily('Arial Black').setPadding(5);
        changeCursorOnHover(takeKey, room1, true)
        dresserKey.on('pointerup', () => {
            dresserKey_modal.setAlpha(.9);
            taylor_modal.setAlpha(0);
            taylorClose.disableInteractive();
            dresserKey_modal_background.setInteractive();
            takeKey.setInteractive();
        });

        takeKey.on('pointerup', () => {
            dresserKey_modal.setAlpha(0);
            room1.tweens.add({
                targets: inventory_key,
                alpha: 1,
                delay: 500,
                duration: 1000
            })
            takeKey.disableInteractive();
            picture_frame_back.disableInteractive();
            dresserKey_modal_background.disableInteractive();
            taylor_modal_background.disableInteractive();
            dresserKey.destroy();
            inventory_key.setInteractive();
            room1.input.setDraggable(inventory_key);
        });
    }
}