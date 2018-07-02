let changeCursorOnHover = require('../changeCursorOnHover');

export class Inventory_screwdriver {
    constructor(inventoryScrewdriver, painting, painting_on_bed, painting_on_wall, room1) {
        inventoryScrewdriver.setAlpha(0);
        changeCursorOnHover(inventoryScrewdriver, room1, true)

        this.inventoryScrewdriver = inventoryScrewdriver;
        this.screwdriverCollideWithPainting = false;
        this.painting = painting;
        this.painting_on_bed = painting_on_bed;
        this.painting_on_wall = painting_on_wall;
        room1.physics.add.overlap(inventoryScrewdriver, painting_on_wall, () => { this.screwdriverCollideWithPainting = true });
        this.room1 = room1;
    }

    overlaps_with_painting() {
        this.inventoryScrewdriver.on('pointerup', () => {
            this.screwdriverCollideWithPainting = false;
            this.room1.time.addEvent({
                delay: 5, callback: () => {
                    if (this.screwdriverCollideWithPainting) {
                        this.room1.tweens.add({
                            targets: this.inventoryScrewdriver,
                            alpha: 0,
                            duration: 200,
                            onComplete: () => {
                                this.inventoryScrewdriver.destroy()
                            }
                        });

                        this.room1.tweens.add({
                            targets: this.painting,
                            y: 215,
                            angle: -10,
                            duration: 1000,
                            delay: 500
                        })
                        this.painting.anims.play('fall');
                        this.room1.time.addEvent({
                            delay: 500, callback: () => {
                                this.painting_on_wall.setAlpha(0);
                                this.painting_on_wall.disableInteractive();
                            }
                        });
                        this.room1.time.addEvent({
                            delay: 2000, callback: () => {
                                this.painting.setAlpha(0);
                                this.painting_on_bed.setAlpha(1);
                                this.painting_on_bed.setInteractive();
                            }
                        });

                    }
                    else {
                        this.room1.tweens.add({
                            targets: this.inventoryScrewdriver,
                            x: 0,
                            y: 20,
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