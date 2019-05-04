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
var rand_x = Math.floor(Math.random() * 100 + 100);
var rand_y = Math.floor(Math.random() * 100 + 100);
img1.src = 'https://source.unsplash.com/collection/1127165/' + rand_x + 'x' + rand_y;
img2.src = 'https://source.unsplash.com/collection/1127168/' + (400 - rand_x) + 'x' + (400 - rand_y);
img3.src = 'https://source.unsplash.com/collection/1127166/' + rand_x + 'x' + (400 - rand_y);
img4.src = 'https://source.unsplash.com/collection/1127163/' + (400 - rand_x) + 'x' + rand_y
img1.onload = function() { ctx.drawImage(img1, 0, 0); }
img2.onload = function() { ctx.drawImage(img2, rand_x, rand_y); }
img3.onload = function() { ctx.drawImage(img3, 0, rand_y); }
img4.onload = function() { ctx.drawImage(img4, rand_x, 0); }

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
button.style.marginTop = "40px";

var xhr = new XMLHttpRequest();
xhr.open("GET", 'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=text&lang=ru', true);
xhr.onload = function() {
    var text = xhr.responseText;
    console.log(text);
    window.onload = function() {
        ctx.font = "bold 20pt Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(text, 200, 200);
    };
}
xhr.send(null);

/*window.onload = function() {
    ctx.font = "bold 20pt Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("HellYeah", 150, 200);
};*/