function rotate(tweens, image, angle){
    if(angle == 360) angle = 0;
    angle += 90;
 tweens.add({
     targets: image,
     angle: angle,
     duration: 1000
 })
}

function success(angle1, angle2, angle3, angle4){
    if(angle1 == 0 && angle2 == 0 && angle3 == 0 && angle4 == 0){
        return true;
    }
    else{
        return false;
    }
}

module.exports = {
    rotate,
    success
}