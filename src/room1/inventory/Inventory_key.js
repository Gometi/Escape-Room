let changeCursorOnHover = require('../changeCursorOnHover');

export class Inventory_key{
    constructor(inventoryKey, dresser1, room1) {
        inventoryKey.setAlpha(0);
       changeCursorOnHover(inventoryKey, room1, true)

        this.inventoryKey = inventoryKey;
        this.keyCollideWithDresser = false;
        this.room1 = room1;
        room1.physics.add.overlap(inventoryKey, dresser1, ()=> this.keyCollideWithDresser = true);
    }

    overlaps_with_dresser(dresser, dresser1, opened_dresser){
        this.inventoryKey.on('pointerup', () => {
            this.keyCollideWithDresser = false;
            this.room1.time.addEvent({
                delay: 90, callback: () => {
                    if (this.keyCollideWithDresser) {
                        dresser.setAlpha(1);
                        dresser1.setAlpha(0);
                        dresser1.disableInteractive();
                        this.inventoryKey.setAlpha(0);
                        dresser.anims.play('open dresser');
                        opened_dresser.setAlpha(0.1).setInteractive();
                    }
                    else {
                        this.room1.tweens.add({
                            targets: this.inventoryKey,
                            x: 300,
                            y: 20,
                            duration: 2000,
                            ease: 'Power1',
                            delay: 200
                        });
                    }
                }
            })
        })

        // changeCursorOnHover(close_open_dresser, this.room1, true);
        // changeCursorOnHover(hair_pin, this.room1, true);

       
        
        // this.inventoryKey.on('pointerup', () => {
        //     this.keyCollideWithDresser = false;
        //     this.room1.time.addEvent({ delay: 90, callback: ()=>{
        //         if (this.keyCollideWithDresser) {
        //             open_dresser_modal.setAlpha(.9);
        //             open_dresser_modal_background.setInteractive();
        //             close_open_dresser.setInteractive();
        //             hair_pin.setInteractive();
        //             this.inventoryKey.setAlpha(0);
        //         }
        //         else {
        //             this.room1.tweens.add({
        //                 targets: this.inventoryKey,
        //                 x: 300,
        //                 y: 20,
        //                 duration: 2000,
        //                 ease: 'Power1',
        //                 delay: 200
        //             });
        //         }
        //     } })
        // })
    }
}