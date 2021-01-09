var bullet,wall,thickness;
var speed,weight;
function setup() {
  speed=random(223,321)
  weight=random(30,50)
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255);  
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness, height/2);
  wall.shapecColor=(80,80,80);
  bullet.velocityX=speed;

if(wall.x-bullet.x <(bullet.width+wall.width)/2)
{
  bullet.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
      bullet.shapeColor=color(255,255,255);
  }

  if(deformation<180 && deformation>100)
  {
      bullet.shapeColor=color(230,230,0);
  }

  if(deformation<100)
  {
      bullet.shapeColor=color(0,255,0);
  }
}
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);
    if(damage>0)
    {
        wall.shapeColor=color(255,0,0);
    }


    if(damage<10)
    {
        wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
  hasCollided();
}

function hasCollided(Lbullet, Lwall)
{
    bulletRightEdge-Lbullet.x +lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
        return true
    }
    return false;
}