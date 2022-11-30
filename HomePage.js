var images=['image/section2/img1.png','image/section2/img2.png','image/section2/img3.png','image/section2/img4.png'];
var i=0;
function slide(){
	
	document.getElementById("image").src=images[i];
	if(i<images.length-1)
	{
		i++;
	}
	else{
		i=0;
	}
	setTimeout("slide()",2000);
}
window.onload=slide;