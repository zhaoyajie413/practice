const DOT_RADIUS = 10; // Radius of the dots
let GLOBE_RADIUS = width / 3; // Radius of the globe based on the canvas width

class Dot {
  constructor() {
    this.theta = Math.random() * 2 * Math.PI; // Random value between [0, 2Pi]
    this.phi = Math.acos((Math.random() * 2) - 1); // Random value between [0, Pi]
    
    // The x, y, z coordinates will be calculated in the project() function
    this.x = 0;
    this.y = 0;
    this.z = 0;
    
    // The projected coordinates will be calculated in the project() function
    this.xProjected = 0;
    this.yProjected = 0;
    this.scaleProjected = 0;
    
    // Add some animation to the sphere rotate
    TweenMax.to(this, 20 + Math.random() * 10, {
      theta: this.theta + Math.PI * 2,
      repeat: -1,
      ease: Power0.easeNone
    });
  }
  // Project our element from its 3D world to the 2D canvas
  project() {
    // Calculate the x, y, z coordinates in the 3D world
    this.x = GLOBE_RADIUS * Math.sin(this.phi) * Math.cos(this.theta);
    this.y = GLOBE_RADIUS * Math.cos(this.phi);
    this.z = GLOBE_RADIUS * Math.sin(this.phi) * Math.sin(this.theta) + GLOBE_RADIUS;
    
    // Project the 3D coordinates to the 2D canvas
    this.scaleProjected = PERSPECTIVE / (PERSPECTIVE + this.z);
    this.xProjected = (this.x * this.scaleProjected) + PROJECTION_CENTER_X;
    this.yProjected = (this.y * this.scaleProjected) + PROJECTION_CENTER_Y;
  }
  // Draw the dot on the canvas
  draw() {
    // We first calculate the projected values of our dot
    this.project();
    
    // We define the opacity of our element based on its distance
    ctx.globalAlpha = Math.abs(1 - this.z / width);
    
    // In this case we are drawing a circle instead of a rectangle
    ctx.beginPath();
    
    // The arc function takes 5 parameters (x, y, radius, angle start, angle end) 
    ctx.arc(this.xProjected, this.yProjected, DOT_RADIUS * this.scaleProjected, 0, Math.PI * 2);
    
    // Fill the circle in black
    ctx.fill();
  }
}