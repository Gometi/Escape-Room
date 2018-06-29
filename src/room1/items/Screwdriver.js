export class Screwdriver {
    constructor(screwdriver1) {
        screwdriver1.setScale(.5);
        screwdriver1.on('pointerover', () => {
            screwdriver1.setTint(0xa1a5ad);
        });
        screwdriver1.on('pointerout', () => {
            screwdriver1.clearTint();
        });
    }
    
   
    modal(screwdriver1, screwdriverModal, screwdriverBackground, takeScrewdriver, screwdriverClose, inventory_screwdriver, room1){
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
