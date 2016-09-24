console.log('Loaded!');
alert('My Javascripyt is running');

// change the text
var element = document.getElementById('text');
element.innerHTML = 'New value being displayed';

//move the image
var img = document.getElementById('madi');
function moveRight(){
    marginLeft=marginLeft=10;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick=function(){
    var interval = setInterval(moveRight,40);
};
