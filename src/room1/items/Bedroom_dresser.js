export class Bedroom_dresser{
    constructor(dresser) {
        dresser.setScale(.63);
        dresser.on('pointerover', () => {
            dresser.setTint(0xcccccc);
        });
        dresser.on('pointerout', () => {
            dresser.clearTint();
        });
    }
   

    modal(dresser, dresser_modal, dresser_modal_background, close_dresser){
        dresser.on('pointerup', () => {
            dresser_modal.setAlpha(9);
            dresser_modal_background.setInteractive();
            close_dresser.setInteractive();

        })

        close_dresser.on('pointerup', () => {
            dresser_modal.setAlpha(0);
            dresser_modal_background.disableInteractive();
            close_dresser.disableInteractive();
        })
    }
}

