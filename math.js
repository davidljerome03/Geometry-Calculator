
function circle(x , y) {
  console.log('Radius sent =',x);
  console.log('Height sent =',y)
    this.radius = x;
    this.height = y;
  // volume method
    this.volume = function () 
    {
        return Math.PI * this.radius * this.radius *this.height;
    };
  // surfacearea method
    this.surfacearea = function ()
    {
        return 2*Math.PI*this.radius*this.height+2*Math.PI*this.radius*this.radius;
    };

  console.log('Volume of a Cylinder =', this.volume().toFixed(2));
  console.log('Surface Area of a Cylinder =', this.surfacearea().toFixed(2));

  if (x > 0) {
    window.alert("Volume: " + this.volume().toFixed(2)  + " cubic units" + 
    "\nSurface Area: " + this.surfacearea().toFixed(2) + " square units");
  }
}




// cube
function cube(x) {
    this.side = x;
  // volume method
    this.volume2 = function () 
    {
        return this.side * this.side * this.side;
    };
  // surface area method
    this.surfacearea2 = function ()
    {
        return 6*this.side*this.side;
    };

    console.log('Volume of a Cube =', this.volume2().toFixed(2));
    console.log('Surface Area of a Cube =', this.surfacearea2().toFixed(2));

    if (x > 0) {
    window.alert("Volume: " + this.volume2().toFixed(2) + " cubic units" + "\nSurface Area: " + this.surfacearea2().toFixed(2) + " square units");
  }
}




// rectangular prism
function rectangularprism(x , y , z) {
    this.length = x;
    this.height2 = y;
    this.width = z;
  // volume method
    this.volume3 = function () 
    {
        return this.width * this.length * this.height2;
    };
  // surface area method
    this.surfacearea3 = function ()
    {
        return 2*(this.width*this.length+this.height2*this.length+this.height2*this.width);
    };

    console.log('Volume of a Rectangular Prism =', this.volume3().toFixed(2));
   console.log('Surface Area of a Rectangular Prism =', this.surfacearea3().toFixed(2));

   if (x > 0) {
    window.alert("Volume: " + this.volume3().toFixed(2) + " cubic units" + "\nSurface Area: " + this.surfacearea3().toFixed(2) + " square units"); 
   }
}




// cone
function cone(x , y) {
    this.radius2 = x;
    this.height3 = y;
  // volume method
    this.volume4 = function () 
    {
        return Math.PI * this.radius2 * this.radius2 * this.height3/3;
    };
  // surface area method
    this.surfacearea4 = function ()
    {
        return Math.PI * this.radius2 * (this.radius2 + Math.sqrt(this.height3 * this.height3 + this.radius2 * this.radius2));
    };

    console.log('Volume of a Cone =', this.volume4().toFixed(2));
    console.log('Surface Area of a Cone =', this.surfacearea4().toFixed(2));

    if (x > 0) {
    window.alert("Volume: " + this.volume4().toFixed(2) + " cubic units" + "\nSurface Area: " + this.surfacearea4().toFixed(2) + " square units"); 
   }
}




// pyramid
function pyramid(x , y , z) {
    this.length2 = x;
    this.height4 = y;
    this.width2 = z;
  // volume method
    this.volume5 = function () 
    {
        return this.length2 * this.width2 * this.height4/3;
    };
  // surface area method
    this.surfacearea5 = function ()
    {
        return this.length2 * this.width2 + this.length2 * Math.sqrt(this.width2/2 * this.width2/2 + this.height4 * this.height4) + this.width2 * Math.sqrt(this.length2/2 * this.length2/2 + this.height4 * this.height4);
    };

    console.log('Volume of a Pyramid =', this.volume5().toFixed(2));
    console.log('Surface Area of a Pyramid =', this.surfacearea5().toFixed(2));

    if (x > 0) {
    window.alert("Volume: " + this.volume5().toFixed(2) + " cubic units" + "\nSurface Area: " + this.surfacearea5().toFixed(2) + " square units"); 
   }
}