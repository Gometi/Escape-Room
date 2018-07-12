let changeCursorOnHover = require('../changeCursorOnHover');

export class Inventory_hairpin{
    constructor(inventoryHairpin, door, room1) {
        inventoryHairpin.setAlpha(0);
        changeCursorOnHover(inventoryHairpin, room1, true)
        this.inventoryHairpin = inventoryHairpin;
        this.screwdriverCollideWithDoor = false;
        this.door = door;
        this.room1 = room1;
        room1.physics.add.overlap(inventoryHairpin, door, () => { this.screwdriverCollideWithDoor = true });
    }

    overlapsWithDoor(hairpin1, hairpin2, controls, keyhole_background, KeyholeModal, close_keyhole){
        this.hairpin1 = hairpin1;
        this.hairpin2 = hairpin2;
        this.controls = controls;
        this.inventoryHairpin.on('pointerup', () => {
            this.screwdriverCollideWithDoor = false;
            this.room1.time.addEvent({
                delay: 5, callback: () => {
                    if (this.screwdriverCollideWithDoor) {
                        this.room1.tweens.add({
                            targets: this.inventoryHairpin,
                            alpha: 0,
                            x: 600,
                            y: 0,
                            duration: 100,
                            onComplete: () => {
                                keyhole_background.setInteractive();
                                close_keyhole.setInteractive();
                                KeyholeModal.setAlpha(.9);
                                hairpin1.anims.play('hairpin_anim');
                               
                                this.moveHairpin();
                            }
                        });


                    }
                    else {
                        this.room1.tweens.add({
                            targets: this.inventoryHairpin,
                            x: 600,
                            y: 0,
                            duration: 2000,
                            ease: 'Power1',
                            delay: 200
                        });
                    }
                }
            })


        });
    }
    moveHairpin(){
        this.room1.tweens.add({
           targets: this.hairpin1,
           x: 230,
           y: -214,
           duration: 2000,
            ease: 'Power1',
           delay: 500,
           onComplete: ()=>{
               this.hairpin1.setAlpha(0);
               this.hairpin2.setAlpha(1);
               this.room1.tweens.add({
                   targets: this.controls,
                   alpha: 1,
                   duration: 1000,
               });
           }
        });
    }
}