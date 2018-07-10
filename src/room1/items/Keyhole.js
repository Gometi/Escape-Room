export class Keyhole {
    constructor(hairpin1, KeyholeModal, room1) {

        let background = room1.add.image(0, 0, 'black').setScale(1.7);
        let keyholeImage = room1.add.image(-25, 32, 'keyhole').setScale(.5);
        // room1.input.setDraggable(hairpin1);

        let hairpinFrames = room1.anims.generateFrameNames('hairpin_animation', {
            start: 0, end: 25, zeroPad: 4,
            prefix: 'hairpin', suffix: '.png'
        });

        room1.anims.create({ key: 'hairpin_anim', frames: hairpinFrames, delay: 1000});
        // hairpin1.anims.play('hairpin_anim');
        KeyholeModal.add([background, keyholeImage, hairpin1]);
        KeyholeModal.setAlpha(0);
    }
}