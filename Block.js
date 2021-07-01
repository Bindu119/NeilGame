class Block{
  constructor(x, y) {
    var options={
      'restitution':1,
      'friction':1,
      'density':1
    }
    this.body = Bodies.rectangle(x, y, 50,30, options);
    this.width=50;
    this.height=30; 
    World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("white");
    rect(0,0, this.width, this.height);
    pop();
    }
};

 