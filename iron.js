class Iron {
    constructor(x, y, height,width) {
      var options = {
          'restitution':0.3,
          'friction':2,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height,width, options);
      this.width = 20;
      this.height = height;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };