var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.image.fromURL('BirthdayImage.jpg', function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(700);
    block_image_object.scaleToheight(510);
    block_image_object.set({
   top:0,
   left:0
    });
});
	
}

function playSound(){
	x.play();
}
