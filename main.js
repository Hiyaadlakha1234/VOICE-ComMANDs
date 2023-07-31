rightWristX = "";
leftWristX = "";
square_length="";
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 450);
    canvas.position(620, 150);
    posenett = ml5.poseNet(video, modelLoaded);
}
function draw() {
   background("black");
   stroke("white");
   fill("white");
   textSize(square_length);
   text("HIYA",100,250);
}
function modelLoaded() {
    console.log("Pose Net Loaded Successfully");
    posenett.on("pose", getResult)
}
function getResult(r) {
    if (r.length > 0) {
        console.log(r);
        leftWristX = r[0].pose.leftWrist.x;
        rightWristX = r[0].pose.rightWrist.x;
        square_length=leftWristX-rightWristX;
        document.getElementById("font_size").innerHTML=round(square_length)+" px ";
    }
}