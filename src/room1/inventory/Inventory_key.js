export class Inventory_key{
    constructor(inventoryKey, dresser, room1) {
        inventoryKey.setAlpha(0);
        inventoryKey.on('pointerover', () => {
            inventoryKey.setTint(0xcccccc);
        });
        inventoryKey.on('pointerout', () => {
            inventoryKey.clearTint();
        });

        this.inventoryKey = inventoryKey;
        this.keyCollideWithDresser = false;
        this.room1 = room1;
        room1.physics.add.overlap(inventoryKey, dresser, ()=> this.keyCollideWithDresser = true);
    }

    overlaps_with_dresser(open_dresser_modal, open_dresser_modal_background, close_open_dresser, hair_pin){
        this.inventoryKey.on('pointerup', () => {
            this.keyCollideWithDresser = false;
            this.room1.time.addEvent({ delay: 90, callback: ()=>{
                if (this.keyCollideWithDresser) {
                    open_dresser_modal.setAlpha(.9);
                    open_dresser_modal_background.setInteractive();
                    close_open_dresser.setInteractive();
                    hair_pin.setInteractive();
                    this.inventoryKey.setAlpha(0);
                }
                else {
                    this.room1.tweens.add({
                        targets: this.inventoryKey,
                        x: 300,
                        y: 0,
                        duration: 2000,
                        ease: 'Power1',
                        delay: 200
                    });
                }
            } })
        })
    }
}