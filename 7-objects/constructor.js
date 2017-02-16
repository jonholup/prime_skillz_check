// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base

function RightTriangle (sideOne, sideTwo, base) {
  this.side1 = sideOne
  this.side2 = sideTwo;
  this.base = base;
  this.area = function () {
    return 'area: ' + (.5 * this.side1 * this.side2);
  };
  this.perimeter = function () {
    return 'perimeter: ' + (this.side1 + this.side2 + this.base);
  };
};

  //  this.area = .5 * this.side1 * this.side2;

  var small = new RightTriangle(2, 4, 6);
  var big = new RightTriangle(4, 8, 12);
  console.log(small.area());
  console.log(big.area());
  console.log(small.perimeter());
  console.log(big.perimeter());
  // The object should have two functions
  // - area() returns the area of this triangle
  // - perimeter() returns the perimeter of this triangle

  // 2 - Create two instances of the RightTriangle
  // object. Console log the results of calling
  // both functions on both instances.
