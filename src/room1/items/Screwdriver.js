let changeCursorOnHover = require('../changeCursorOnHover');

export class Screwdriver {
    constructor(screwdriver1, room1) {
        screwdriver1.setScale(.5);
        changeCursorOnHover(screwdriver1, room1, true);
    }
    
   
    modal(screwdriver1, screwdriverModal, screwdriverBackground, takeScrewdriver, screwdriverClose, inventory_screwdriver, room1){
        takeScrewdriver.setColor('#2cf469').setBackgroundColor('#363836').setFontFamily('Arial Black').setPadding(5);
        screwdriverClose.setBackgroundColor('#5e5f60').setFontFamily('Arial Black').setPadding(5);
        changeCursorOnHover(takeScrewdriver, room1, true);
        changeCursorOnHover(screwdriverClose, room1, true);

        screwdriver1.on('pointerup', () => {
        screwdriverModal.setAlpha(.9);
        screwdriverBackground.setInteractive();
        takeScrewdriver.setInteractive();
        screwdriverClose.setInteractive();
    });

    takeScrewdriver.on('pointerup', () => {
        screwdriverModal.setAlpha(0);
        screwdriverBackground.disableInteractive();
        takeScrewdriver.disableInteractive();
        screwdriverClose.disableInteractive();
        screwdriver1.destroy();
        inventory_screwdriver.setInteractive();
        room1.input.setDraggable(inventory_screwdriver);
        room1.tweens.add({
            targets: inventory_screwdriver,
            alpha: 1,
            duration: 1300
        })
    });

    screwdriverClose.on('pointerup', () => {
        screwdriverModal.setAlpha(0);
        screwdriverBackground.disableInteractive();
        takeScrewdriver.disableInteractive();
        screwdriverClose.disableInteractive();


    });
    }

}
