let changeCursorOnHover = require('../changeCursorOnHover');

export class Hairpin{
    constructor(hair_pin, room1){
        changeCursorOnHover(hair_pin, room1, true);
        this.hair_pin = hair_pin;
        this.room1 = room1;
    }

    modal(inventoryHairpin, opened_dresser, opened_dresser_modal, opened_dresser_modal_background, close_opened_dresser){
        let hairpin_modal_background = this.room1.add.image(0, 0, 'black').setScale(1.7);
        let hairpin = this.room1.add.image(-45, 111, 'hair_pin');
        let takeHairpin = this.room1.add.text(-70, 300, 'Take Hairpin');
        takeHairpin.setColor('#2cf469').setBackgroundColor('#363836').setFontFamily('Arial Black').setPadding(5);
        changeCursorOnHover(takeHairpin, this.room1, true);
        let hairPin_modal = this.room1.add.container(500, 190);
        hairPin_modal.add([hairpin_modal_background, hairpin, takeHairpin]);
        hairPin_modal.setAlpha(0);

        this.hair_pin.on('pointerup', ()=>{
            hairPin_modal.setAlpha(.9);
            hairpin_modal_background.setInteractive();
            takeHairpin.setInteractive();
            opened_dresser_modal.setAlpha(0);
            opened_dresser_modal_background.disableInteractive();
            close_opened_dresser.disableInteractive();
            opened_dresser.disableInteractive();
        });

        takeHairpin.on('pointerup', ()=>{
            hairPin_modal.setAlpha(0);
            hairpin_modal_background.disableInteractive();
            takeHairpin.disableInteractive();
            hairpin.destroy();
            inventoryHairpin.setInteractive();
            this.room1.input.setDraggable(inventoryHairpin);
            this.room1.tweens.add({
                targets: inventoryHairpin,
                alpha: 1,
                duration: 1300
            })
        });
    }
}