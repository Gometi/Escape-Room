export class MansionPainting{
    constructor(painting, picture_frame_back, painting_on_wall, painting_on_bed) {
        painting.setScale(.6);
        picture_frame_back.setScale(.449);
        picture_frame_back.on('pointerover', () => {
            picture_frame_back.setTint(0xcccccc);
        });
        picture_frame_back.on('pointerout', () => {
            picture_frame_back.clearTint();
        });

        painting_on_wall.setScale(.63);
        painting_on_wall.setInteractive();
        painting_on_wall.on('pointerover', () => {
            painting_on_wall.setTint(0xcccccc);
        });
        painting_on_wall.on('pointerout', () => {
            painting_on_wall.clearTint();
        });

        painting_on_bed.setScale(.655);
        painting_on_bed.setAngle(-10);
        painting_on_bed.setAlpha(0);
    }
    

    modal(painting_on_wall, close_mansion_painting, painting_modal){
        painting_on_wall.on('pointerup', () => {
            painting_modal.setAlpha(.9);
        });
        close_mansion_painting.on('pointerup', () => {
            painting_modal.setAlpha(0)
        })
    }
}


