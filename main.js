var canvas = new fabric.Canvas('qwerty');
var x= document.getElementById("myAudio");
var player_object = "";
function dumb(){
    x.play();
    fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        player_object= Img;
        player_object.scaleToWidth(400);
        player_object.scaleToHeight(400);
        player_object.set({
            top:0,
            left:0
        });
        canvas.add(player_object);
    })
}
