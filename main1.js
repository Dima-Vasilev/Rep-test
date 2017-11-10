var wrap = document.querySelector('.wrap');
var block = document.querySelector('.block');
var allowDrag = false;
var coords = {};

block.addEventListener('mousedown', function (e) {
    allowDrag = true;

    var wrapRect = wrap.getBoundingClientRect();
    var blockRect = block.getBoundingClientRect();

    coords.block = {
        offsetLeft: blockRect.left,
        offsetTop: blockRect.top,
        clickedX: e.layerX,
        clickedY: e.layerY,
        width: blockRect.width,
        height: blockRect.height
    };

    coords.wrap = {
        offsetLeft: wrapRect.left,
        offsetTop: wrapRect.top,
        width: wrapRect.width,
        height: wrapRect.height
    };

    console.log(e);
});

document.addEventListener('mousemove', function (e) {
    if (!allowDrag) return;
     var blockPositionX = e.pageX - coords.wrap.offsetLeft - coords.block.clickedX;
     var blockPositionY = e.pageY - coords.wrap.offsetTop - coords.block.clickedY;

     if (blockPositionX < 0) {
         blockPositionX = 0;
     }

     if  (blockPositionY < 0) {
         blockPositionY = 0;
     }

     if (blockPositionX > coords.wrap.width - coords.block.width) {
         blockPositionX = coords.wrap.width - coords.block.width - 4;
     }

    if (blockPositionY > coords.wrap.height - coords.block.height) {
        blockPositionY = coords.wrap.height - coords.block.height - 4;
    }

     block.style.top = blockPositionY + 'px';
     block.style.left = blockPositionX + 'px';


    console.log(coords);

});

document.addEventListener('mouseup', function () {
    allowDrag = false;
    console.log('mouseup');
});