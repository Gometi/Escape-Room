export class Dresser_key{
    constructor() {
        
    }

    modal(dresserKey, dresserKey_modal, taylor_modal, takeKey, inventory_key, picture_frame_back, room1){
        dresserKey.on('pointerup', () => {
            dresserKey_modal.setAlpha(.9);
            taylor_modal.setAlpha(0);
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
            inventory_key.setInteractive();
            room1.input.setDraggable(inventory_key);
        });
    }
}