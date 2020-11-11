class Raindrops  {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        var Raindrops = 100;
      for (var i=0; i<Raindrops; i++){
        Raindrops.push(new createRaindrops(random(0,400), random(400)));
      }
    
  
  this.body = Bodies.circle(x, y, this.r, options)
  this.color=("blue");
  World.add(world,this.body)


      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
      }
}
    
      