let changeCursorOnHover = require('../changeCursorOnHover');

export class Inventory_hairpin{
    constructor(inventoryHairpin, room1) {
        inventoryHairpin.setAlpha(0);
        changeCursorOnHover(inventoryHairpin, room1, true)
    }
}