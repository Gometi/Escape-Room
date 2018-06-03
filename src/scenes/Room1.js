let fan;
let painting;
let painting_on_wall;
let painting_on_bed;
let inventory;
let inventory_screwdriver;
export class Room1 extends Phaser.Scene {
    constructor(test) {
        super(
            { key: 'Room1' }
        )
    }
    preload() {
        this.load.atlas('fan', 'assets/fan.png', 'assets/fan.json');
        this.load.image('room1', 'assets/room1.jpg');
        this.load.image('dresser', 'assets/dresser1.png');
        this.load.image('taylor1', 'assets/taylor-cutout1.jpg');
        this.load.image('taylor2', 'assets/taylor-cutout2.jpg');
        this.load.image('taylor3', 'assets/taylor-cutout3.jpg');
        this.load.image('taylor4', 'assets/taylor-cutout4.jpg');
        this.load.atlas('painting', 'assets/painting-fall.png', 'assets/painting-fall.json');
        this.load.image('screwdriver1', 'assets/screwdriver1.png');
        this.load.image('screwdriver2', 'assets/screwdriver2.png');
        this.load.image('black', 'assets/black.jpg');
        this.load.image('painting_on_wall', 'assets/painting_on_wall.png');
        this.load.image('painting_on_bed', 'assets/painting_on_bed.png');
    }

    create() {
        let room1 = this.add.image(0, 0, 'room1').setOrigin(0, 0);
        fan = this.add.sprite(70, 0, 'fan', 'fan0001.png').setOrigin(0, 0);
        fan.setScale(.6);

        let fanFrameNames = this.anims.generateFrameNames('fan', {
            start: 1, end: 17, zeroPad: 4,
            prefix: 'fan', suffix: '.png'
        });

        this.anims.create({ key: 'rotate', frames: fanFrameNames, repeat: -1 });
        fan.anims.play('rotate');

        painting = this.add.sprite(61, 9, 'painting', 'painting-fall0001.png').setOrigin(0,0);
        painting.setScale(.6);
        let paintingFrameNames = this.anims.generateFrameNames('painting', {
            start: 1, end: 13, zeroPad: 4,
            prefix: 'painting-fall', suffix: '.png'
        });

        this.anims.create({ key: 'fall', frames: paintingFrameNames, delay: 1100,  repeat: 0 });

        
        
        painting_on_wall = this.add.sprite(35, -5, 'painting_on_wall').setOrigin(0, 0);
        painting_on_wall.setScale(.63);
        painting_on_wall.setInteractive();
        painting_on_wall.on('pointerup', () => {
            console.log('painting on wall');
        });
        painting_on_bed = this.add.sprite(248, 309, 'painting_on_bed').setOrigin(0, 0);
        painting_on_bed.setScale(.655);
        painting_on_bed.setAngle(-10);
        painting_on_bed.setAlpha(0);

        painting_on_bed.on('pointerup', () => {
            console.log('painting on bed');
        });
        

        let dresser = this.add.image(665, 319, 'dresser').setInteractive();
        dresser.setScale(.63);
        
        
        let screwdriver1 = this.add.image(874, 342, 'screwdriver1').setInteractive();
        screwdriver1.setScale(.5);
        let screwdriverBackground = this.add.image(0, 0, 'black').setScale(1.7);
        let screwdriver2 = this.add.image(-45, 111, 'screwdriver2').setScale(.3);
        // screwdriver2.setAlpha(0);
        let takeScrewdriver = this.add.text(-90, 190, 'Take Screwdriver');
        let screwdriverClose = this.add.text(-30, 270, 'Close');
        let screwdriverContainer = this.add.container(500, 190);
        screwdriverContainer.setAlpha(0);
        screwdriverContainer.add([screwdriverBackground, screwdriver2, takeScrewdriver, screwdriverClose]);
       
        screwdriver1.on('pointerup', ()=>{
            screwdriverContainer.setAlpha(.9);
            screwdriverBackground.setInteractive();
            takeScrewdriver.setInteractive();
            screwdriverClose.setInteractive();
        });

        takeScrewdriver.on('pointerup', () => {
            screwdriverContainer.setAlpha(0);
            screwdriverBackground.disableInteractive();
            takeScrewdriver.disableInteractive();
            screwdriverClose.disableInteractive();
            screwdriver1.destroy();
            inventory_screwdriver.setInteractive();
            this.input.setDraggable(inventory_screwdriver);
            this.tweens.add({
                targets:  inventory_screwdriver,
                alpha: 1,
                duration: 1300
            })
        });

        screwdriverClose.on('pointerup', () => {
            screwdriverContainer.setAlpha(0);
            screwdriverBackground.disableInteractive();
            takeScrewdriver.disableInteractive();
            screwdriverClose.disableInteractive();
              this.tweens.add({
              targets: painting,
              y: 215,
              angle: -10,
              duration: 1000,
              delay: 400
              
          })
            painting.anims.play('fall');
             this.time.addEvent({ delay: 2000, callback: this.painting_fall_complete });
            this.time.addEvent({ delay: 400, callback: this.painting_fall_start });
        });

        let taylor1 = this.add.sprite(400, 200, 'taylor1').setScale(.6);
        let taylor2 = this.add.sprite(538, 200, 'taylor2').setScale(.6);
        let taylor3 = this.add.sprite(538, 370, 'taylor3').setScale(.6);
        let taylor4 = this.add.sprite(400, 370, 'taylor4').setScale(.6);
        taylor1.setAlpha(0);
        taylor2.setAlpha(0);
        taylor3.setAlpha(0);
        taylor4.setAlpha(0);

        inventory_screwdriver = this.add.image(0, 0, 'screwdriver2').setScale(.3);
       inventory_screwdriver.setAlpha(0);
        inventory = this.add.container(120, 630);
        inventory.add(inventory_screwdriver);

        let x = this.add.text(100, 300, '');
        let y = this.add.text(100, 320, '');
        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
            x.setText('x: ' + gameObject.x)
            y.setText('y: ' + gameObject.y)

        })
    }

    painting_fall_complete() {
        painting.setAlpha(0);
        painting_on_bed.setAlpha(1);
        painting_on_bed.setInteractive();
    }

    painting_fall_start(){
        painting_on_wall.setAlpha(0);
        painting_on_wall.disableInteractive();
    }
}