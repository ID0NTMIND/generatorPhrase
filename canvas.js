var canvas = document.createElement('canvas');
canvas.id = "collage";
canvas.width = 500;
canvas.height = 500;
canvas.style.border = "1px solid black";
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
var rand_x = Math.floor(Math.random() * 200 + 100);
var rand_y = Math.floor(Math.random() * 200 + 100);
img1.src = 'https://source.unsplash.com/random/' + rand_x + 'x' + rand_y;
img2.src = 'https://source.unsplash.com/random/' + (500 - rand_x) + 'x' + (500 - rand_y);
img3.src = 'https://source.unsplash.com/random/' + rand_x + 'x' + (500 - rand_y);
img4.src = 'https://source.unsplash.com/random/' + (500 - rand_x) + 'x' + rand_y;
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
    var words = text.split(" ");
    var countWords = words.length;
    window.onload = function() {
        ctx.font = "bold 16pt Comic Sans MS";
        ctx.fillStyle = "white";
        var marginLeft = 30;
        var marginTop = 170;
        var lineHeight = 30;
        var line = "";
        for (var n = 0; n < countWords; n++) {
            var testLine = line + words[n] + " ";
            var testWidth = ctx.measureText(testLine).width;
            if (testWidth > 450) {
                ctx.fillText(line, marginLeft, marginTop);
                line = words[n] + " ";
                marginTop += lineHeight;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, marginLeft, marginTop);
    };
}
xhr.send(null);