// Do not need require
// require('src/robot');

describe("Robot", function() {
  var robot = new Robot();

  it("robot bearing", function() {
    var directions = [ 'east', 'west', 'north', 'south' ];

    for (var i = 0; i < directions.length; i++) {
      var currentDirection = directions[i];
      robot.orient(currentDirection);
      expect(robot.bearing).toEqual(currentDirection);
    }
  });

  it("invalid robot bearing", function() {
    try {
      robot.orient("crood");
    } catch(exception) {
      expect(exception).toEqual("Invalid Robot Bearing");
    }
  });

  it("turn right from north", function() {
    robot.orient('north');
    robot.turnRight();
    expect(robot.bearing).toEqual('east');
  });

  it("turn right from east", function() {
    robot.orient('east');
    robot.turnRight();
    expect(robot.bearing).toEqual('south');
  });

  it("turn right from south", function() {
    robot.orient('south');
    robot.turnRight();
    expect(robot.bearing).toEqual('west');
  });

  xit("turn right from west", function() {
    robot.orient('west');
    robot.turnRight();
    expect(robot.bearing).toEqual('north');
  });

  it("turn left from north", function() {
    robot.orient('north');
    robot.turnLeft();
    expect(robot.bearing).toEqual('west');
  });

  it("turn left from east", function() {
    robot.orient('east');
    robot.turnLeft();
    expect(robot.bearing).toEqual('north');
  });

  it("turn left from south", function() {
    robot.orient('south');
    robot.turnLeft();
    expect(robot.bearing).toEqual('east');
  });

  it("turn left from west", function() {
    robot.orient('west');
    robot.turnLeft();
    expect(robot.bearing).toEqual('south');
  });

  it("robot coordinates", function() {
    robot.at(3, 0);
    expect(robot.coordinates).toEqual([3,0]);
  });


  it("other robot coordinates", function() {
    robot.at(-2, 5);
    expect(robot.coordinates).toEqual([-2,5]);
  });

  it("advance when facing north", function() {
    robot.at(0,0);
    robot.orient('north');
    robot.advance();
    expect(robot.coordinates).toEqual([0,1]);
  });

  it("advance when facing east", function() {
    robot.at(0,0);
    robot.orient('east');
    robot.advance();
    expect(robot.coordinates).toEqual([1,0]);
  });

  it("advance when facing south", function() {
    robot.at(0,0);
    robot.orient('south');
    robot.advance();
    expect(robot.coordinates).toEqual([0,-1]);
  });

  it("advance when facing west", function() {
    robot.at(0,0);
    robot.orient('west');
    robot.advance();
    expect(robot.coordinates).toEqual([-1,0]);
  });

});