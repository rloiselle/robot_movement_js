//

// function  orient(direction) {
// 	return direction;
//}

// function advance(spaces, currentDirection)
// {
// 	var xAxis = 0;
// 	var yAxis = 0;
// 	if (currentDirection == 'west')
// 	{
// 		xAxis = (xAxis - spaces);
// 	}
// 	else if (currentDirection == 'north')
// 	{
// 		yAxis = (spaces + yAxis);
// 	}
// 	else if (currentDirection == 'east')
// 	{
// 		xAxis = (xAxis + spaces);
// 	}
// 	else (currentDirection == 'south')
// 	{
// 		yAxis = (yAxis - spaces);
// 	}
// 	return [xAxis, yAxis];
// }

var Robot = function () {
	xAxis = 0
	yAxis = 0
	this.coordinates = [xAxis,yAxis];
	this.bearing = 'north';
};
// Robot.prototype.at = function(xcoord,ycoord) {
// 	this.coordinates = [xcoord, ycoord];
// };
Robot.prototype.orient = function (direction) {
	this.bearing = direction;
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
	else (this.bearing == 'west')
	{
		this.coordinates = [xAxis -1, yAxis];
	}
};

Robot.prototype.turnLeft = function() {

	if (this.orient == 'north')
	{
		this.bearing == 'west';
	}
	else if (this.orient == 'south')
	{
		this.bearing == 'east';
	}
	else if (this.orient == 'east')
	{
		this.bearing == 'north';
	}
	else (this.orient == 'west')
	{
		this.bearing == 'south';
	}
};

Robot.prototype.turnRight = function() {

	if (this.orient == 'north')
	{
		this.bearing == 'east';
	}
	else if (this.orient == 'south')
	{
		this.bearing == 'west';
	}
	else if (this.orient == 'east')
	{
		this.bearing == 'south';
	}
	else (this.orient == 'west')
	{
		this.bearing == 'north';
	}
};

console.log (a.bearing);
console.log (a.advance());
console.log (a.coordinates);
console.log (a.turnLeft());
console.log (a.turnRight());



// function turnRight(turns, currentDirection) {
// 	var x = 0;
// 	var y = 0;
// 	if (currentDirection == 'west') {
// 		newDirection = x
// 	}
// 	var newDirection = x + turns;
// 	return newDirection;
// }

// function turnLeft(turns) {
// 	var newDirection = x - turns;
// 	return newDirection;
// }

// console.log(advance(10,'west'));



// // function 
// console.log(orient('west'));
// console.log(turnRight(2));
// console.log(turnLeft(2));
// console.log(x);
// console.log(y);