objects=[];
status1="";
function preload(){
    video=createVideo("video.mp4");
}
function setup(){
    canvas=createCanvas(380, 280);
    canvas.center();
    video.hide();
}
function start(){
    x1=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    video.volume(0);
    video.speed(1);
    video.loop();
}
function gotResult(error, results){
    if(error){
    console.log(error);
    }
    console.log(results);
    objects=results;
    }
function draw(){
    image(video, 0, 0, 380, 280);
    if(status1!=""){
        x1.detect(video, gotResult);
        for (let i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML="Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML="Number Of Objects Detected Are: "+objects.length;
            fill("#FF0000");
            noFill();
            stroke("#FF0000");
           var percent = floor(objects[i].confidence*100);
           text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
           rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
}
