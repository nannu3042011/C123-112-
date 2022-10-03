function setup() {
    canvas =creatCanvas(640, 480);
    canvas.position(110, 250);
    video = creatCapture(VIDEO),
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot(){
    save('studient_name.png');
}