
import { Bedroom_door } from "../room1/items/Bedroom_door";
import { Bedroom_dresser } from "../room1/items/Bedroom_dresser";
import { MansionPainting } from "../room1/items/MansionPainting";
import { Screwdriver } from "../room1/items/Screwdriver";
import { Taylor_painting } from "../room1/items/Taylor_painting";

let door;
let fan;
let painting;
let painting_on_wall;
let painting_on_bed;
let inventory;
let inventory_screwdriver;
let inventory_key;
let keyCollideWithDresser = false;
let screwdriverCollideWithPainting = false;
let timedEvent;

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
        let room1 = this;
       
        
        let room1_background = this.add.image(0, 0, 'room1').setOrigin(0, 0);
         door = this.physics.add.image(545, 201, 'door').setInteractive();
        
        let bedroomDoor = new Bedroom_door(door);
        fan = this.add.sprite(70, 0, 'fan', 'fan0001.png').setOrigin(0, 0);
        let dresser = this.physics.add.image(665, 319, 'dresser').setInteractive();
        let bedroomDresser = new Bedroom_dresser(dresser);
        

        let picture_frame_back = this.add.image(300, 146, 'picture_frame_back').setInteractive();
        
       
        painting = this.add.sprite(61, 9, 'painting', 'painting-fall0001.png').setOrigin(0, 0);
        painting_on_wall = this.physics.add.sprite(300, 145, 'painting_on_wall').setInteractive();
        
        painting_on_bed = this.add.sprite(248, 309, 'painting_on_bed').setOrigin(0, 0);
        let mansion_painting = new MansionPainting(painting, picture_frame_back, painting_on_wall, painting_on_bed);
        let screwdriver1 = this.add.image(874, 342, 'screwdriver1').setInteractive();
        
        let screwdriverBackground = this.add.image(0, 0, 'black').setScale(1.7);
        let screwdriver2 = this.add.image(-45, 111, 'screwdriver2').setScale(.3);
        let takeScrewdriver = this.add.text(-90, 190, 'Take Screwdriver');
        let screwdriverClose = this.add.text(-30, 270, 'Close');
        let screwdriverModal = this.add.container(500, 190);
        screwdriverModal.setAlpha(0);
        screwdriverModal.add([screwdriverBackground, screwdriver2, takeScrewdriver, screwdriverClose]);

        let screwdriver_on_table = new Screwdriver(screwdriver1);
        
        let painting_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        let mansion_picture = this.add.image(-45, 111, 'mansion_painting');
        let close_mansion_painting = this.add.text(-50, 300, 'Close').setInteractive();
        let painting_modal = this.add.container(500, 190);
        painting_modal.add([painting_modal_background, mansion_picture, close_mansion_painting]);
        painting_modal.setAlpha(0);

        mansion_painting.modal(painting_on_wall, close_mansion_painting, painting_modal);

        let door_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        let door1 = this.add.image(-45, 111, 'door1').setScale(.6);
        let close_door = this.add.text(-50, 300, 'Close');
        let door_modal = this.add.container(500, 190);
        door_modal.add([door_modal_background, door1, close_door]);
        door_modal.setAlpha(0);

        bedroomDoor.modal(door, door_modal, door_modal_background, close_door);

        let dresser_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        let dresser1 = this.add.image(-45, 111, 'dresser');
        let close_dresser = this.add.text(-50, 300, 'Close');
        let dresser_modal = this.add.container(500, 190);

        dresser_modal.add([dresser_modal_background, dresser1, close_dresser]);
        dresser_modal.setAlpha(0);
       
        bedroomDresser.modal(dresser, dresser_modal, dresser_modal_background, close_dresser);
       
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
        
        let taylorPainting = new Taylor_painting(taylor1, taylor2, taylor3, taylor4, picture_frame_back, box_key, room1);

        let taylorClose = this.add.text(-122, 375, 'Close');
        let picture_frame_back2 = this.add.image(-100, 70, 'picture_frame_back1');
        picture_frame_back2.setScale(1.4, 1);
        picture_frame_back2.setTint(0x0a0a0a);
        
        let taylor_modal = this.add.container(500, 190);
        taylor_modal.add([taylor_modal_background, picture_frame_back1, box_key, taylor1, taylor2, taylor3, taylor4, taylorClose, picture_frame_back2]);
        taylor_modal.setAlpha(0);

        

        taylorPainting.modal(picture_frame_back, picture_frame_back2, taylor_modal, taylorClose)

        taylorPainting.playMiniGame();
   
       
        
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

        

        
        let paintingFrameNames = this.anims.generateFrameNames('painting', {
            start: 1, end: 13, zeroPad: 4,
            prefix: 'painting-fall', suffix: '.png'
        });

        this.anims.create({ key: 'fall', frames: paintingFrameNames, delay: 1100,  repeat: 0 });

        

        
       

        inventory_screwdriver = this.physics.add.image(0, 0, 'screwdriver2').setScale(.2);
        screwdriver_on_table.modal(screwdriver1, screwdriverModal, screwdriverBackground, takeScrewdriver, screwdriverClose, inventory_screwdriver, room1);
       inventory_screwdriver.setAlpha(0);
        inventory_screwdriver.on('pointerover', () => {
            inventory_screwdriver.setTint(0xcccccc);
        });
        inventory_screwdriver.on('pointerout', () => {
            inventory_screwdriver.clearTint();
        });
        inventory = this.add.container(120, 630);
        inventory.add(inventory_screwdriver);
        inventory_screwdriver.on('pointerup', ()=>{
            screwdriverCollideWithPainting = false;
            timedEvent.addEvent({delay: 5, callback: ()=>{
                if (screwdriverCollideWithPainting){
                this.tweens.add({
                    targets: inventory_screwdriver,
                    alpha: 0,
                    duration: 200,
                    onComplete: ()=>{
                        inventory_screwdriver.destroy()
                    }
                });

                    this.tweens.add({
                        targets: painting,
                        y: 215,
                        angle: -10,
                        duration: 1000,
                        delay: 500
                    })
                    painting.anims.play('fall');
                    this.time.addEvent({ delay: 500, callback: painting_fall_start });
                    this.time.addEvent({ delay: 2000, callback: painting_fall_complete });
                    
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
            }})
          
            
        });

        function painting_fall_complete() {
            painting.setAlpha(0);
            painting_on_bed.setAlpha(1);
            painting_on_bed.setInteractive();
        }

        function painting_fall_start() {
            painting_on_wall.setAlpha(0);
            painting_on_wall.disableInteractive();
        }

        this.physics.add.overlap(inventory_screwdriver, painting_on_wall, overlap_painting_screwdriver);
        
        function overlap_painting_screwdriver() {
            screwdriverCollideWithPainting = true;
            console.log('overlap')
            
           
        }

        inventory_key = this.physics.add.image(300, 0, 'box_key').setScale(.2);
        inventory_key.setAlpha(0);

        inventory.add(inventory_key);
         
       this.physics.add.overlap(inventory_key, dresser, openDresser);
       
        function openDresser() {
            keyCollideWithDresser = true;
        }

         timedEvent = this.time;
        let checkOverlap = ()=>{
            console.log('pointerUp overlap', keyCollideWithDresser)
             if(keyCollideWithDresser){
                open_dresser_modal.setAlpha(.9);
                open_dresser_modal_background.setInteractive();
                close_open_dresser.setInteractive();
                hair_pin.setInteractive();
                inventory_key.setAlpha(0);
            }
            else{
                 this.tweens.add({
                     targets: inventory_key,
                     x: 300,
                     y: 0,
                     duration: 2000,
                     ease: 'Power1',
                     delay: 200
                 });
            }
        }
        inventory_key.on('pointerup', ()=>{
            keyCollideWithDresser = false;
            timedEvent.addEvent({delay: 90, callback: checkOverlap})
        })




       

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