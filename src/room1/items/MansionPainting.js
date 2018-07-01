let changeCursorOnHover = require('../changeCursorOnHover');

export class MansionPainting{
    constructor(painting, picture_frame_back, painting_on_wall, painting_on_bed, room1) {
        painting.setScale(.6);
        picture_frame_back.setScale(.449);
        changeCursorOnHover(picture_frame_back, room1, true);

        painting_on_wall.setScale(.63);
        painting_on_wall.setInteractive();
        changeCursorOnHover(painting_on_wall, room1, true);

        painting_on_bed.setScale(.655);
        painting_on_bed.setAngle(-10);
        painting_on_bed.setAlpha(0);
        this.room1 = room1;
    }
    

    modal(painting_on_wall, close_mansion_painting, painting_modal, painting_modal_background){
        close_mansion_painting.setBackgroundColor('#5e5f60').setFontFamily('Arial Black').setPadding(5);
        changeCursorOnHover(close_mansion_painting, this.room1, true);
        painting_on_wall.on('pointerup', () => {
            painting_modal.setAlpha(.9);
            close_mansion_painting.setInteractive();
            painting_modal_background.setInteractive();
        });
        close_mansion_painting.on('pointerup', () => {
            painting_modal_background.disableInteractive();
            painting_modal.setAlpha(0)
            close_mansion_painting.disableInteractive();
        })
    }
}


