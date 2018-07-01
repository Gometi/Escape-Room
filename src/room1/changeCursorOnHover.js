let changeCursorOnHover = (item, room, tint)=>{
    item.on('pointerover', () => {
        room.sys.canvas.style.cssText = 'cursor: url(assets/Alternate.cur), auto';
        if (tint) item.setTint(0xcccccc);
    });
    item.on('pointerout', () => {
        room.sys.canvas.style.cssText = 'cursor: url(assets/Normal_Select.cur), auto';
        if(tint) item.clearTint();
    });
}

module.exports = changeCursorOnHover;