console.log('Loaded!');
alert('My Javascripyt is running');

// change the text
var element = document.getElementById('text');
element.innerHTML = 'New value being displayed';

//move the image
var img = document.getElementById('madi');
marginLeft = 0; 
marginRight = 0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft = marginLeft+'px';
}
function moveLeft(){
      marginRight=marginRight+10;
      img.style.marginRight = marginRight+'px';
}
img.onclick1=function(){
    var interval = setInterval(moveRight,40);
};
img.onclick2=function(){
    var interval = setInterval(moveLeft,40);
};
