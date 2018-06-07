let taylorMinigame = require('../taylorMinigame');

let door;
let fan;
let painting;
let painting_on_wall;
let painting_on_bed;
let inventory;
let inventory_screwdriver;
let paintingFallComplete;
let paintingFallStart;
let inventory_key;
let keyCollideWithDresser = false;

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
        this.load.image('box_key', 'assets/box_key.png');
        this.load.image('door', 'assets/door.png');
        this.load.image('door1', 'assets/door1.png');
        this.load.image('open_dresser', 'assets/open_dresser.png');
        this.load.image('hair_pin', 'assets/hair_pin.png');

    }

    create() {
        let room1 = this.add.image(0, 0, 'room1').setOrigin(0, 0);
         door = this.physics.add.image(545, 201, 'door').setInteractive();
        door.setScale(.7, .65);
        door.on('pointerover', () => {
            door.setTint(0xcccccc);
        });
        door.on('pointerout', () => {
            door.clearTint();
        });

        fan = this.add.sprite(70, 0, 'fan', 'fan0001.png').setOrigin(0, 0);
        let dresser = this.physics.add.image(665, 319, 'dresser').setInteractive();
        dresser.setScale(.63);

        

        let picture_frame_back = this.add.image(300, 146, 'picture_frame_back').setInteractive();
        picture_frame_back.setScale(.449);
        picture_frame_back.on('pointerover', () => {
            picture_frame_back.setTint(0xcccccc);
        });
        picture_frame_back.on('pointerout', () => {
            picture_frame_back.clearTint();
        });
        painting = this.add.sprite(61, 9, 'painting', 'painting-fall0001.png').setOrigin(0, 0);
        painting_on_wall = this.physics.add.sprite(300, 145, 'painting_on_wall').setInteractive();
        painting_on_wall.on('pointerover', () => {
            painting_on_wall.setTint(0xcccccc);
        });
        painting_on_wall.on('pointerout', () => {
            painting_on_wall.clearTint();
        });
        painting_on_bed = this.add.sprite(248, 309, 'painting_on_bed').setOrigin(0, 0);
        
        let screwdriver1 = this.add.image(874, 342, 'screwdriver1').setInteractive();
        screwdriver1.on('pointerover', () => {
            screwdriver1.setTint(0xcccccc);
        });
        screwdriver1.on('pointerout', () => {
            screwdriver1.clearTint();
        });
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

        let door_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        let door1 = this.add.image(-45, 111, 'door1').setScale(.6);
        let close_door = this.add.text(-50, 300, 'Close');
        let door_modal = this.add.container(500, 190);
        door_modal.add([door_modal_background, door1, close_door]);
        door_modal.setAlpha(0);

        door.on('pointerup', () => {
            door_modal.setAlpha(9);
            door_modal_background.setInteractive();
            close_door.setInteractive();
        })

        close_door.on('pointerup', () => {
            door_modal.setAlpha(0);
            door_modal_background.disableInteractive();
            close_door.disableInteractive();
        })


        let dresser_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        let dresser1 = this.add.image(-45, 111, 'dresser');
        let close_dresser = this.add.text(-50, 300, 'Close');
        let dresser_modal = this.add.container(500, 190);

        dresser_modal.add([dresser_modal_background, dresser1, close_dresser]);
        dresser_modal.setAlpha(0);
        
        dresser.on('pointerover', () => {
            dresser.setTint(0xcccccc);
        });
        dresser.on('pointerout', () => {
            dresser.clearTint();
        });
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


        let open_dresser_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        let open_dresser = this.add.image(-45, 111, 'open_dresser');
        open_dresser.setScale(.6);
        let close_open_dresser = this.add.text(-50, 340, 'Close');
        close_open_dresser.on('pointerup', ()=>{
            open_dresser_modal.setAlpha(0);
        })
        let open_dresser_modal = this.add.container(500, 190);
        let hair_pin = this.add.image(-54, 200, 'hair_pin');
        hair_pin.setScale(.3)
        open_dresser_modal.add([open_dresser_modal_background, open_dresser, hair_pin, close_open_dresser]);
        open_dresser_modal.setAlpha(0);

        let taylor_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        let picture_frame_back1 = this.add.image(-100, 70, 'picture_frame_back1');
        picture_frame_back1.setScale(1.4, 1);
        let box_key = this.add.image(-168, 120, 'box_key').setScale(.2);
        let taylor1 = this.add.sprite(-168, -50, 'taylor1').setScale(.6);
        let taylor2 = this.add.sprite(-30, -50, 'taylor2').setScale(.6);
        let taylor3 = this.add.sprite(-30, 120, 'taylor3').setScale(.6);
        let taylor4 = this.add.sprite(-168, 120, 'taylor4').setScale(.6);
        let taylorClose = this.add.text(-122, 375, 'Close');
        let picture_frame_back2 = this.add.image(-100, 70, 'picture_frame_back1');
        picture_frame_back2.setScale(1.4, 1);
        picture_frame_back2.setTint(0x0a0a0a);
        
        let taylor_modal = this.add.container(500, 190);
        taylor_modal.add([taylor_modal_background, picture_frame_back1, box_key, taylor1, taylor2, taylor3, taylor4, taylorClose, picture_frame_back2]);
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
            taylorMinigame.rotate(rotateImage, taylor1, taylor1.angle, taylor2.angle, taylor3.angle, taylor4.angle);
            this.time.addEvent({delay: 1100, callback: checkResult})
        });
        let movekey = this.tweens;
        function checkResult(){
            console.log(taylor1.angle)
            if (taylorMinigame.success(taylor1.angle, taylor2.angle, taylor3.angle, taylor4.angle)) {
                console.log('win')
                movekey.add({
                    targets: box_key,
                    y: 250,
                    delay: 800,
                    ease: 'power2',
                    duration: 1000
                })
                taylor1.disableInteractive();
                taylor2.disableInteractive();
                taylor3.disableInteractive();
                taylor4.disableInteractive();
                box_key.setInteractive();
                picture_frame_back.disableInteractive();
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
        
        let box_key_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        let box_key1 = this.add.image(-45, 111, 'box_key');
        let close_box_key = this.add.text(-50, 300, 'Close');
        let box_key_modal = this.add.container(500, 190);
        box_key_modal.add([box_key_modal_background, box_key1, close_box_key]);
        box_key_modal.setAlpha(0);
        box_key.on('pointerup', ()=>{
            box_key_modal.setAlpha(.9);
            taylor_modal.setAlpha(0);
            close_box_key.setInteractive();
        });

        close_box_key.on('pointerup', () => {
            box_key_modal.setAlpha(0);
            this.tweens.add({
                targets: inventory_key,
                alpha: 1,
                delay: 500,
                duration: 1000
            })
            close_box_key.disableInteractive();
            inventory_key.setInteractive();
            this.input.setDraggable(inventory_key);
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
        inventory_screwdriver.on('pointerover', () => {
            inventory_screwdriver.setTint(0xcccccc);
        });
        inventory_screwdriver.on('pointerout', () => {
            inventory_screwdriver.clearTint();
        });
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

        inventory_key = this.physics.add.image(300, 0, 'box_key').setScale(.2);
        inventory_key.setAlpha(0);

        inventory.add(inventory_key);
         

        this.physics.add.overlap(inventory_key, dresser, openDresser);
        
       
        function openDresser() {
            dresser.body.enable = false;
            keyCollideWithDresser = true;
        }

        inventory_key.on('pointerup', ()=>{
            if(keyCollideWithDresser){
                open_dresser_modal.setAlpha(.9);
                open_dresser_modal_background.setInteractive();
                close_open_dresser.setInteractive();
                hair_pin.setInteractive();
                inventory_key.setAlpha(0);
            }
        })




        function painting_fall_complete() {
            painting.setAlpha(0);
            painting_on_bed.setAlpha(1);
            painting_on_bed.setInteractive();
        }

        function painting_fall_start(){
            painting_on_wall.setAlpha(0);
            painting_on_wall.disableInteractive();
        }

        // let x = this.add.text(100, 300, '');
        // let y = this.add.text(100, 320, '');
        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
            // x.setText('x: ' + gameObject.x)
            // y.setText('y: ' + gameObject.y)

        })
    }

    
}