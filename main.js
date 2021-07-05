status="";
Objects=[];
function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
canvas= createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting objects";
}

function modelLoaded(){
    console.log("model is loaded");
    status=true;
    objectDetector.detect(img,gotresults);
}

function gotresults(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    Objects=results;
}
}

function draw(){
image(img,0,0,640,420);
if(status !=""){
    for(i=0;i<Objects.length;i++){
    document.getElementById("status").innerHTML="Status : Objects detected";
    fill("#ff0000");
    percent=floor(Objects[i].confidence * 100);
    text(Objects[i].label+" "+percent+"%",Objects[i].x+15,Objects[i].y+15);
    noFill()
    stroke("#ff0000");
    rect(Objects[i].x,Objects[i].y,Objects[i].width,Objects[i].height);
    }
}
}