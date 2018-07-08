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

    overlapsWithDoor(){
        this.inventoryHairpin.on('pointerup', () => {
            this.screwdriverCollideWithDoor = false;
            this.room1.time.addEvent({
                delay: 5, callback: () => {
                    if (this.screwdriverCollideWithDoor) {
                        this.room1.tweens.add({
                            targets: this.inventoryHairpin,
                            alpha: 0,
                            duration: 200,
                            onComplete: () => {
                                this.inventoryHairpin.destroy()
                            }
                        });

                        
                        // this.room1.time.addEvent({
                        //     delay: 2000, callback: () => {
                        //         this.painting.setAlpha(0);
                        //         this.painting_on_bed.setAlpha(1);
                        //         this.painting_on_bed.setInteractive();
                        //     }
                        // });

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
}