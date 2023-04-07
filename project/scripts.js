var video = document.querySelector('#video');
var canvas = document.querySelector('#canvas');
var camera = new Webcam(video,'user',canvas);
var snapButton = document.querySelector('#snapButton');
var deleteButton = document.querySelector('#deleteButton');
var myPicture = document.querySelector('#myPicture');
camera.start();



snapButton.onclick = function(){
    var photo = camera.snap();
    myPicture.href = photo;
}


deleteButton.onclick = function(){
    canvas.remove()
;}
