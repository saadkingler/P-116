nose_x = 0;
nose_y = 0;
function preload()
{
  nose = loadImage('https://i.postimg.cc/QNmXnH8z/download-3.jpg');
}
    
    function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video,modalloaded);
    posenet.on('pose',gotPoses);
}

function modalloaded()
{
    console.log("poseNet loaded");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x - 15;
        nose_y = results[0].pose.nose.y - 15;
    }
}

function draw()
{
    image(video,0,0,300,300);
    image(nose,nose_x,nose_y,30,30);
}

function take_snapshot()
{
    save('myfilterImage.png');
}