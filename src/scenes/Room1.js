export class Room1 extends Phaser.Scene {
    constructor(test) {
        super(
            {key: 'Room1'}
        )
    }
    preload() {
        this.load.image('room1', 'assets/room1.jpg');
        this.load.image('dresser', 'assets/dresser1.png');
    }

    create() {
       let room1 = this.add.image(0,0, 'room1').setOrigin(0,0);
       let dresser = this.add.image(661, 374, 'dresser').setInteractive();
       dresser.setScale(1.3);
        this.input.setDraggable(dresser);
       


       let x = this.add.text(100, 300, '');
       let y = this.add.text(100, 320, '');
        
       
        
        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
            x.setText('x: ' + gameObject.x)
            y.setText('y: ' + gameObject.y)
           
        })
    }
}