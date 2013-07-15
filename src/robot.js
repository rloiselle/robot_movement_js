//

// function  orient(direction) {
//  return direction;
//}

// function advance(spaces, currentDirection)
// {
//  var xAxis = 0;
//  var yAxis = 0;
//  if (currentDirection == 'west')
//  {
//    xAxis = (xAxis - spaces);
//  }
//  else if (currentDirection == 'north')
//  {
//    yAxis = (spaces + yAxis);
//  }
//  else if (currentDirection == 'east')
//  {
//    xAxis = (xAxis + spaces);
//  }
//  else (currentDirection == 'south')
//  {
//    yAxis = (yAxis - spaces);
//  }
//  return [xAxis, yAxis];
// }

var Robot = function () {
  xAxis = 0;
  yAxis = 0;
  this.coordinates = [xAxis,yAxis];
  this.bearing = 'north';
};

Robot.prototype.at = function(xcoord,ycoord) {
 this.coordinates = [xcoord, ycoord];
};

Robot.prototype.orient = function (direction) {
  this.bearing = direction;
  return "The robot is pointed " + direction;
};

var a = new Robot();
console.log (a);
// console.log (a.at(3,0));
// console.log (a.orient('east'));

Robot.prototype.advance = function() {

  if (this.bearing == 'north')
  {
    this.coordinates = [xAxis, yAxis + 1];
  }
  else if (this.bearing == 'south')
  {
    this.coordinates = [xAxis, yAxis - 1];
  }
  else if (this.bearing == 'east')
  {
    this.coordinates = [xAxis + 1, yAxis];
  }
  else if(this.bearing == 'west')
  {
    this.coordinates = [xAxis -1, yAxis];
  }
};

Robot.prototype.turnLeft = function() {

  if (this.bearing == 'north')
  {
    this.orient('west');
  }
  else if (this.bearing == 'south')
  {
    this.orient('east');
  }
  else if (this.bearing == 'east')
  {
    this.orient('north');
  }
  else if (this.bearing == 'west')
  {
    this.orient('south');
  }
};

Robot.prototype.turnRight = function() {

  if (this.bearing == 'north')
  {
    this.orient('east');
  }
  else if (this.bearing == 'south')
  {
    this.orient('west');
  }
  else if (this.bearing == 'east')
  {
    this.orient('south');
  }
  else if(this.bearing == 'west')
  {
    this.orient('north');
  }
};

console.log (a.bearing);
a.orient('east');
// console.log(a.orient('east'));  //this will return something other than 'undefined' only because it is programed into the function
// console.log (a.bearing);  //if no statement is programmed into the orient fxn, double check the bearings...
console.log(a.valueOf());  //returns data for the instance object
console.log (a.advance());

// console.log (a.coordinates);
// console.log (a.turnLeft());
// console.log (a.turnRight());




// function turnRight(turns, currentDirection) {
//  var x = 0;
//  var y = 0;
//  if (currentDirection == 'west') {
//    newDirection = x
//  }
//  var newDirection = x + turns;
//  return newDirection;
// }

// function turnLeft(turns) {
//  var newDirection = x - turns;
//  return newDirection;
// }

// console.log(advance(10,'west'));



// // function
// console.log(orient('west'));
// console.log(turnRight(2));
// console.log(turnLeft(2));
// console.log(x);
// console.log(y);