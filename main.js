noseX="";
noseY="";
leftEyeX="";
leftEyeY="";
leftEarX="";
leftEarY="";


item="";


function preload(){

    musctacheImg = loadImage("musctache-trans.png");
    hatImg = loadImage("hat.png");
    glassesImg = loadImage("glasses.png");
}


function setup(){
canvas= createCanvas(400,300);
canvas.position(570,200);
video= createCapture(VIDEO);
video.size(400,300);
video.hide();


poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on("pose", getResults);

}


function draw(){
image(video,0,0,400,300);

if (item=="m"){
    image(musctacheImg,noseX - 30,noseY + 5,70,30);
}else if(item=="g"){
    image(glassesImg,leftEyeX - 70,leftEyeY - 15,100,40);
}else if(item=="h"){
    image(hatImg,leftEarX - 80,leftEarY - 180,90,110); 
}

}

function snap(){
    save("photoBooth.png")
}

function modelLoaded(){
    console.log("model loaded");
}

function getResults(results){
    if(results.length > 0){
        console.log(results);

        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        leftEyeX= results[0].pose.leftEye.x;
        leftEyeY= results[0].pose.leftEye.y;
        leftEarX= results[0].pose.leftEar.x;
        leftEarY= results[0].pose.leftEar.y; 
    }
}

function mustache(){
item="m";
}

function hat(){
    item="h";
    }


    function glasses(){
        item="g";
        }
    


