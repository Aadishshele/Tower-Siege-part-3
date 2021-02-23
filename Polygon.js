class Polygon {
    constructor(width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.image = loadImage("Sprites/polygon.png")
      this.body = Bodies.circle(50,200,20, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("orange");
      image(this.image,0,0,this.width,this.height);

      pop();
    }
  };