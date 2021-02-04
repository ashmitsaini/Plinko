class Particle {
    constructor(x, y, d) {
      var options = {
          'isStatic': false
      }
      this.x = x;
      this.y = y;
      this.d = d;
      this.body = Bodies.circle(x,y,d/2, options);
      this.color = color(random(0,255), random(0,255), random(0,255));
      World.add(world, this.body);

    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(this.color);
      ellipse(0, 0, this.d, this.d);
      pop();

    }
  };