let taylorMinigame = require('../taylorMinigame');

let fan;
let painting;
let painting_on_wall;
let painting_on_bed;
let inventory;
let inventory_screwdriver;
let paintingFallComplete;
let paintingFallStart;

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
        this.load.image('mansion_painting', 'assets/mansion_painting.png');
        this.load.image('picture_frame_back', 'assets/picture_frame_back.png');
        this.load.image('picture_frame_back1', 'assets/picture_frame_back1.png');
    }

    create() {
        let room1 = this.add.image(0, 0, 'room1').setOrigin(0, 0);
        fan = this.add.sprite(70, 0, 'fan', 'fan0001.png').setOrigin(0, 0);
        let dresser = this.add.image(665, 319, 'dresser').setInteractive();
        let picture_frame_back = this.add.image(300, 146, 'picture_frame_back').setInteractive();
        picture_frame_back.setScale(.449);
        painting = this.add.sprite(61, 9, 'painting', 'painting-fall0001.png').setOrigin(0, 0);
        painting_on_wall = this.physics.add.sprite(300, 145, 'painting_on_wall').setInteractive();
        this.input.setDraggable(painting_on_wall);
        painting_on_bed = this.add.sprite(248, 309, 'painting_on_bed').setOrigin(0, 0);
        
        let screwdriver1 = this.add.image(874, 342, 'screwdriver1').setInteractive();
        let screwdriverBackground = this.add.image(0, 0, 'black').setScale(1.7);
        let screwdriver2 = this.add.image(-45, 111, 'screwdriver2').setScale(.3);
        let takeScrewdriver = this.add.text(-90, 190, 'Take Screwdriver');
        let screwdriverClose = this.add.text(-30, 270, 'Close');
        let screwdriverContainer = this.add.container(500, 190);
        screwdriverContainer.setAlpha(0);
        screwdriverContainer.add([screwdriverBackground, screwdriver2, takeScrewdriver, screwdriverClose]);
        
        let painting_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        let mansion_painting = this.add.image(-45, 111, 'mansion_painting');
        let close_mansion_painting = this.add.text(-50, 300, 'Close').setInteractive();
        let painting_modal = this.add.container(500, 190);
        painting_modal.add([painting_modal_background, mansion_painting, close_mansion_painting]);
        painting_modal.setAlpha(0);

        let taylor_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        let picture_frame_back1 = this.add.image(-100, 70, 'picture_frame_back1');
        picture_frame_back1.setScale(1.4, 1);
        let taylor1 = this.add.sprite(-168, -50, 'taylor1').setScale(.6);
        let taylor2 = this.add.sprite(-30, -50, 'taylor2').setScale(.6);
        let taylor3 = this.add.sprite(-30, 120, 'taylor3').setScale(.6);
        let taylor4 = this.add.sprite(-168, 120, 'taylor4').setScale(.6);
        let taylorClose = this.add.text(-122, 375, 'Close');
        let picture_frame_back2 = this.add.image(-100, 70, 'picture_frame_back1');
        picture_frame_back2.setScale(1.4, 1);
        picture_frame_back2.setTint(0x0a0a0a);
        
        let taylor_modal = this.add.container(500, 190);
        taylor_modal.add([taylor_modal_background, picture_frame_back1, taylor1, taylor2, taylor3, taylor4, taylorClose, picture_frame_back2]);
        taylor_modal.setAlpha(0);

        picture_frame_back.on('pointerup', ()=>{
            taylor_modal.setAlpha(.9);
            taylor1.setInteractive();
            taylor2.setInteractive();
            taylor3.setInteractive();
            taylor4.setInteractive();
            taylorClose.setInteractive();
            picture_frame_back2.setInteractive();
            this.tweens.add({
                targets: picture_frame_back2,
                y: -500,
                delay: 200,
                duration: 3000
            })
        });

        taylorClose.on('pointerup', () => {
            taylor_modal.setAlpha(0);
            taylor1.disableInteractive();
            taylor2.disableInteractive();
            taylor3.disableInteractive();
            taylor4.disableInteractive();
            taylorClose.disableInteractive();
        });

        taylor1.setAngle(180);
        taylor2.setAngle(270);
        taylor3.setAngle(180);
        taylor4.setAngle(90);
   
        taylor1.on('pointerup', ()=>{
            let rotateImage = this.tweens;
            taylorMinigame.rotate(rotateImage, taylor1, taylor1.angle);
            this.time.addEvent({delay: 1100, callback: checkResult})
        });

        function checkResult(){
            console.log(taylor1.angle)
            if (taylorMinigame.success(taylor1.angle, taylor2.angle, taylor3.angle, taylor4.angle)) {
                console.log('win')
            }
        }

        taylor2.on('pointerup', () => {
            let rotateImage = this.tweens;
            taylorMinigame.rotate(rotateImage, taylor2, taylor2.angle);
            this.time.addEvent({ delay: 1100, callback: checkResult })
        });

        taylor3.on('pointerup', () => {
            let rotateImage = this.tweens;
            taylorMinigame.rotate(rotateImage, taylor3, taylor3.angle);
            this.time.addEvent({ delay: 1100, callback: checkResult })
        });

        taylor4.on('pointerup', () => {
            let rotateImage = this.tweens;
            taylorMinigame.rotate(rotateImage, taylor4, taylor4.angle);
            this.time.addEvent({ delay: 1100, callback: checkResult })
        });

        
        
        fan.setScale(.6);

        let fanFrameNames = this.anims.generateFrameNames('fan', {
            start: 1, end: 17, zeroPad: 4,
            prefix: 'fan', suffix: '.png'
        });

        this.anims.create({ key: 'rotate', frames: fanFrameNames, repeat: -1 });
        fan.anims.play('rotate');

        close_mansion_painting.on('pointerup', ()=>{
            painting_modal.setAlpha(0)
        })

        painting.setScale(.6);
        let paintingFrameNames = this.anims.generateFrameNames('painting', {
            start: 1, end: 13, zeroPad: 4,
            prefix: 'painting-fall', suffix: '.png'
        });

        this.anims.create({ key: 'fall', frames: paintingFrameNames, delay: 1100,  repeat: 0 });

        
        
        
        painting_on_wall.setScale(.63);
        painting_on_wall.setInteractive();
        painting_on_wall.on('pointerup', () => {
            painting_modal.setAlpha(.9);
        });
        
        painting_on_bed.setScale(.655);
        painting_on_bed.setAngle(-10);
        painting_on_bed.setAlpha(0);

       
        

        
        dresser.setScale(.63);
        
        
        
        screwdriver1.setScale(.5);
       
        
       
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
              
            
        });

       

        inventory_screwdriver = this.physics.add.image(0, 0, 'screwdriver2').setScale(.2);
       inventory_screwdriver.setAlpha(0);
        inventory = this.add.container(120, 630);
        inventory.add(inventory_screwdriver);
        let screwdriverCollideWithPainting = false;
        inventory_screwdriver.on('pointerup', ()=>{
            if (screwdriverCollideWithPainting){
                this.tweens.add({
                    targets: inventory_screwdriver,
                    alpha: 0,
                    duration: 1000,
                });
            }
            else{
                this.tweens.add({
                    targets: inventory_screwdriver,
                    x: 0,
                    y: 0,
                    duration: 2000,
                    ease: 'Power1',
                    delay: 200
                });
            }
            
        });

        this.physics.add.overlap(inventory_screwdriver, painting_on_wall, painting_falls);
        paintingFallComplete = this.time;
        paintingFallStart = this.time;
        let movePaintingDown = this.tweens;
        function painting_falls() {
            console.log('overlap')
            screwdriverCollideWithPainting = true;
            painting_on_wall.body.enable = false;
            movePaintingDown.add({
                targets: painting,
                y: 215,
                angle: -10,
                duration: 1000,
                delay: 400
            })
            painting.anims.play('fall');
            paintingFallComplete.addEvent({ delay: 2000, callback: painting_fall_complete });
            paintingFallStart.addEvent({ delay: 400, callback: painting_fall_start });
        }

        function painting_fall_complete() {
            painting.setAlpha(0);
            painting_on_bed.setAlpha(1);
            painting_on_bed.setInteractive();
        }

        function painting_fall_start(){
            painting_on_wall.setAlpha(0);
            painting_on_wall.disableInteractive();
        }

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