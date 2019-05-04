var canvas = document.createElement('canvas');
canvas.id = "collage";
canvas.wigth = 400;
canvas.height = 400;
canvas.style.border = "1px solid grey";
canvas.style.margin = "auto";
canvas.style.display = "block";
document.body.appendChild(canvas);
var elem = document.getElementById("collage");
var ctx = canvas.getContext("2d");
var img1 = new Image;
var img2 = new Image;
var img3 = new Image;
var img4 = new Image;
img1.crossOrigin = 'anonymous';
img2.crossOrigin = 'anonymous';
img3.crossOrigin = 'anonymous';
img4.crossOrigin = 'anonymous';
img1.src = 'http://source.unsplash.com/collection/1127163/300x200';
img2.src = 'http://source.unsplash.com/collection/1127164/300x200';
img3.src = 'http://source.unsplash.com/collection/1127165/300x200';
img4.src = 'http://source.unsplash.com/collection/1127166/300x200';
img1.onload = function() { ctx.drawImage(img1, 0, 0); }
img2.onload = function() { ctx.drawImage(img2, 200, 200); }
img3.onload = function() { ctx.drawImage(img3, 0, 200); }
img4.onload = function() { ctx.drawImage(img4, 200, 0); }

var ref = document.createElement('a');
var button = document.createElement('button');
button.appendChild(ref);
document.body.appendChild(button);
ref.id = "down-btn";
ref.href = "#";
ref.textContent = "Download collage";
ref.download = "collage.png";
ref.addEventListener('click', function(e) {
    var dataURL = canvas.toDataURL();
    ref.href = dataURL;
})
button.style.margin = "auto";
button.style.display = "block";
button.style.marginTop = "40px"