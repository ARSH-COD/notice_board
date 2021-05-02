nosex=0;
nosey=0;
difference=0;
leftwristx=0;
rightwristx=0;
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,500);
canvas.position(560,160);
poseNet=ml5.poseNet(video,modelLoeded);
poseNet.on('pose',gotPoses);
}
function draw() 
{ 
    background('#6C91C2'); 
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px"; 
    textSize(difference);
    fill('#FFE787'); 
    text('Arsh', nosex,nosey); 
}
function modelLoeded(){
    console.log('posenet is initialized');
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex="+nosex+" nosey="+nosey);
    leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    difference=floor(leftwristx-rightwristx);
    console.log("leftwristx= "+leftwristx+" rightwristx= "+rightwristx+" diffrence= "+difference);
}
}