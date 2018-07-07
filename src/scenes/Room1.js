
import { Bedroom_door } from "../room1/items/Bedroom_door";
import { Bedroom_dresser } from "../room1/items/Bedroom_dresser";
import { MansionPainting } from "../room1/items/MansionPainting";
import { Screwdriver } from "../room1/items/Screwdriver";
import { Taylor_painting } from "../room1/items/Taylor_painting";
import { Dresser_key } from "../room1/items/Dresser_key";
import { Inventory_screwdriver } from "../room1/inventory/Inventory_screwdriver";
import { Inventory_key } from "../room1/inventory/Inventory_key";
import { Hairpin } from "../room1/items/Hairpin";
import { Inventory_hairpin } from "../room1/inventory/Inventory_hairpin";

let door;
let fan;
let painting;
let painting_on_wall;
let painting_on_bed;
let inventory;
let inventoryScrewdriver;
let inventoryKey;


export class Room1 extends Phaser.Scene {
    constructor(test) {
        super(
            { key: 'Room1' }
        )
    }
    preload() {
        this.load.atlas('fan', 'assets/fan.png', 'assets/fan.json');
        this.load.image('room1', 'assets/room1.jpg');
        this.load.image('dresser', 'assets/dresser.png');
        this.load.image('closed_dresser', 'assets/closed_dresser.png');
        this.load.image('opened_dresser', 'assets/opened_dresser.png');
        this.load.image('opened_dresser1', 'assets/opened_dresser1.png');
        this.load.atlas('dresser_anim', 'assets/dresser_anim.png', 'assets/dresser_anim.json');
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
        this.load.image('dresserKey', 'assets/box_key.png');
        this.load.image('door', 'assets/door.png');
        this.load.image('door1', 'assets/door1.png');
        this.load.image('open_dresser', 'assets/open_dresser.png');
        this.load.image('hair_pin', 'assets/hair_pin.png');

    }

    create() {
        

        this.sys.canvas.style.cssText = 'cursor: url(assets/Normal_Select.cur), auto';
        let room1 = this;
        
        let room1_background = this.add.image(0, 0, 'room1').setOrigin(0, 0);
         door = this.physics.add.image(545, 201, 'door').setInteractive();
        
        let bedroomDoor = new Bedroom_door(door, room1);
        fan = this.add.sprite(70, 0, 'fan', 'fan0001.png').setOrigin(0, 0);
        fan.setScale(.6);

        let fanFrameNames = this.anims.generateFrameNames('fan', {
            start: 1, end: 17, zeroPad: 4,
            prefix: 'fan', suffix: '.png'
        });

        this.anims.create({ key: 'rotate', frames: fanFrameNames, repeat: -1 });
        fan.anims.play('rotate');

        let dresser = this.physics.add.sprite(517, 271, 'dresser_anim', 'image (0).png');
        let dresser1 = this.physics.add.image(660, 320, 'dresser').setInteractive().setScale(.688);
       
        let picture_frame_back = this.add.image(300, 146, 'picture_frame_back').setInteractive();
        
       
        painting = this.add.sprite(61, 9, 'painting', 'painting-fall0001.png').setOrigin(0, 0);
        painting_on_wall = this.physics.add.sprite(300, 145, 'painting_on_wall').setInteractive();
        
        painting_on_bed = this.add.sprite(248, 309, 'painting_on_bed').setOrigin(0, 0);
        let mansion_painting = new MansionPainting(painting, picture_frame_back, painting_on_wall, painting_on_bed, room1);

        let paintingFrameNames = this.anims.generateFrameNames('painting', {
            start: 1, end: 13, zeroPad: 4,
            prefix: 'painting-fall', suffix: '.png'
        });

        this.anims.create({ key: 'fall', frames: paintingFrameNames, delay: 1100, repeat: 0 });

        let screwdriver1 = this.add.image(874, 342, 'screwdriver1').setInteractive();
        
        let screwdriverBackground = this.add.image(0, 0, 'black').setScale(1.7);
        let screwdriver2 = this.add.image(-45, 111, 'screwdriver2').setScale(.3);
        let takeScrewdriver = this.add.text(-90, 190, 'Take Screwdriver');
        let screwdriverClose = this.add.text(-30, 270, 'Close');
        let screwdriverModal = this.add.container(500, 190);
        screwdriverModal.setAlpha(0);
        screwdriverModal.add([screwdriverBackground, screwdriver2, takeScrewdriver, screwdriverClose]);

        let screwdriver_on_table = new Screwdriver(screwdriver1, room1);
        
        let painting_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        let mansion_picture = this.add.image(-45, 10, 'mansion_painting');
        let paintingDescription = this.add.text(-319, 190, 'A painting of a Mansion. It is screwed in pretty tight.');
        paintingDescription.setFontSize(20).setFontFamily('Comic Sans Ms');
        paintingDescription.setWordWrapWidth(600);
        let close_mansion_painting = this.add.text(-50, 300, 'Close');
        let painting_modal = this.add.container(500, 190);
        painting_modal.add([painting_modal_background, mansion_picture, paintingDescription, close_mansion_painting]);
        painting_modal.setAlpha(0);

        mansion_painting.modal(painting_on_wall, close_mansion_painting, painting_modal, painting_modal_background);

        let door_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        let door1 = this.add.image(-45, 56, 'door1').setScale(.6);
        let close_door = this.add.text(-50, 300, 'Close');
        let door_modal = this.add.container(500, 190);
        door_modal.add([door_modal_background, door1, close_door]);
        door_modal.setAlpha(0);

        bedroomDoor.modal(door, door_modal, door_modal_background, close_door);

        let hair_pin = room1.add.image(-73, 145, 'hair_pin').setScale(.2);
       
       
        let opened_dresser = room1.add.image(651, 319, 'opened_dresser').setScale(.658).setAlpha(0);
        let opened_dresser_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        let opened_dresser_image = this.add.image(-22, 117, 'opened_dresser1').setScale(.5);
        let close_opened_dresser = this.add.text(-50, 300, 'Close');
        let opened_dresser_modal = this.add.container(500, 190);
        opened_dresser_modal.add([opened_dresser_modal_background, opened_dresser_image, close_opened_dresser, hair_pin]);
        opened_dresser_modal.setAlpha(0);

        let bedroomDresser = new Bedroom_dresser(dresser, dresser1, opened_dresser, hair_pin, room1);
        bedroomDresser.modal(opened_dresser_modal_background, opened_dresser_modal, close_opened_dresser);

      
        // bedroomDresser.modal(dresser, dresser_modal, dresser_modal_background, close_dresser);
       
        // let open_dresser_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        // let open_dresser = this.add.image(-45, 111, 'open_dresser');
        // open_dresser.setScale(.6);
        // let close_open_dresser = this.add.text(-50, 340, 'Close');
        // close_open_dresser.on('pointerup', ()=>{
        //     open_dresser_modal.setAlpha(0);
        // })
        // let open_dresser_modal = this.add.container(500, 190);
        // let hair_pin = this.add.image(-54, 200, 'hair_pin');
        // hair_pin.setScale(.3)
        // open_dresser_modal.add([open_dresser_modal_background, open_dresser, hair_pin, close_open_dresser]);
        // open_dresser_modal.setAlpha(0);


        let taylor_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        let picture_frame_back1 = this.add.image(-100, 70, 'picture_frame_back1');
        picture_frame_back1.setScale(1.4, 1);
        let dresserKey = this.add.image(-168, 120, 'dresserKey').setScale(.2);
        let taylor1 = this.add.sprite(-168, -50, 'taylor1').setScale(.6);
        let taylor2 = this.add.sprite(-30, -50, 'taylor2').setScale(.6);
        let taylor3 = this.add.sprite(-30, 120, 'taylor3').setScale(.6);
        let taylor4 = this.add.sprite(-168, 120, 'taylor4').setScale(.6);
        
        let taylorPainting = new Taylor_painting(taylor1, taylor2, taylor3, taylor4, dresserKey, room1);

        let taylorClose = this.add.text(-122, 340, 'Close');
        let picture_frame_back2 = this.add.image(-100, 70, 'picture_frame_back1');
        picture_frame_back2.setScale(1.4, 1);
        picture_frame_back2.setTint(0x0a0a0a);
        
        let taylor_modal = this.add.container(500, 190);
        taylor_modal.add([taylor_modal_background, picture_frame_back1, dresserKey, taylor1, taylor2, taylor3, taylor4, taylorClose, picture_frame_back2]);
        taylor_modal.setAlpha(0);

        

        taylorPainting.modal(picture_frame_back, picture_frame_back2, taylor_modal, taylor_modal_background, taylorClose)

        taylorPainting.playMiniGame();
   
       
        
        let dresserKey_modal_background = this.add.image(0, 0, 'black').setScale(1.7);
        let dresserKey1 = this.add.image(-45, 111, 'dresserKey');
        let takeKey = this.add.text(-50, 300, 'Take Key');
        let dresserKey_modal = this.add.container(500, 190);
        dresserKey_modal.add([dresserKey_modal_background, dresserKey1, takeKey]);
        dresserKey_modal.setAlpha(0);

        inventoryKey = this.physics.add.image(300, 20, 'dresserKey').setScale(.2);
        
        let dresser_key = new Dresser_key(dresserKey, room1);
        dresser_key.modal(dresserKey, dresserKey_modal, taylor_modal, takeKey, inventoryKey, picture_frame_back, dresserKey_modal_background, taylor_modal_background, taylorClose, room1);
       
        inventoryScrewdriver = this.physics.add.image(0, 20, 'screwdriver2').setScale(.2);
        screwdriver_on_table.modal(screwdriver1, screwdriverModal, screwdriverBackground, takeScrewdriver, screwdriverClose, inventoryScrewdriver, room1);
       

        let inventory_screwdriver = new Inventory_screwdriver(inventoryScrewdriver, painting, painting_on_bed, painting_on_wall, room1);
        inventory_screwdriver.overlaps_with_painting();

        let inventoryHairpin = this.physics.add.image(600, 20, 'hair_pin').setScale(.5);
        let inventory_hairpin = new Inventory_hairpin(inventoryHairpin, room1);

        inventory = this.add.container(120, 630);
        inventory.add(inventoryScrewdriver);
       
        inventory.add(inventoryKey);
        let inventory_key = new Inventory_key(inventoryKey, dresser1, room1)

        inventory_key.overlaps_with_dresser(dresser, dresser1, opened_dresser);

        let hairpin = new Hairpin(hair_pin, room1);
        hairpin.modal(inventoryHairpin, opened_dresser, opened_dresser_modal, opened_dresser_modal_background, close_opened_dresser);
        inventory.add(inventoryHairpin);
        
      
        // let x = this.add.text(100, 300, '');
        // let y = this.add.text(100, 320, '');
        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
            // x.setText('x: ' + gameObject.x)
            // y.setText('y: ' + gameObject.y)

        })
        this.add.text(20, 580, 'Inventory', { fill: '#96ddbe'});

        let graphics = this.add.graphics();
        graphics.lineStyle(5, 0xbbe8d4);
        graphics.beginPath();
        graphics.moveTo(0, 600);
        graphics.lineTo(1000, 600);
        graphics.closePath();
        graphics.strokePath();
    }

    

    
}