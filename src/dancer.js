// Creates and returns a new dancer object that can step

var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._top = top;
  this._left = left;
  this._vector = {x: 0, y: 0};
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  //this.unsetPosition();
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
};

Dancer.prototype.step = function() {
  var context = this;
  //console.log(context);
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //console.log('context', context.step.toString());
  // var time = context._timeBetweenSteps;
  //setTimeout(function(){context.step();}, context._timeBetweenSteps);
  setTimeout(function() { context.step(); }, this._timeBetweenSteps);
  //setTimeout(context.step, context._timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.getCenter = function() {
  var data = this.$node[0].getBoundingClientRect();
  return {
    x: data.left + data.width / 2,
    y: data.top + data.height / 2
  };
};

Dancer.prototype.resetVector = function() {
  this._vector = {x: 0, y: 0};
};

Dancer.prototype.updateVector = function(dancer, distance) {
  var t = this.getCenter();
  var d = dancer.getCenter();
  // console.log('initial coord ', this._vector.x, this._vector.y);
  var dx = (t.x - d.x);
  dx *= dx;
  var dy = t.y - d.y;
  dy *= dy;
  distance *= distance;
  if (dx + dy > distance) {
    return;
  }
  if (t.x !== d.x) {
    this._vector.x = this._vector.x + (Math.sqrt(distance) * 5) / (t.x - d.x);
  }
  if (t.y !== d.y) {
    this._vector.y = this._vector.y + (Math.sqrt(distance) * 5) / (t.y - d.y);
  }
  // console.log('final coord ', this._vector.x, this._vector.y);
  // console.log('mouse ', d.x, d.y, distance);
  // console.log('dancer ', t.x, t.y);
  // this._vector = {x: this._vector.x + (t.x - d.x), y: this._vector.y + (t.y - d.y)};

};

Dancer.prototype.newPosition = function(maxx, maxy) {
  //console.log(this._top, this._left);
  this._top += this._vector.y;
  this._left += this._vector.x;
  if (this._top < 0) {
    this._top = maxy + this._top;
  }
  if (this._top > maxy) {
    this._top = this._top - maxy;
  }
  if (this._left < 0) {
    this._left = maxx - this._left;
  }
  if (this._left > maxx) {
    this._left -= maxx;
  }
  this.setPosition(this._top, this._left);
  //console.log(this._top, this._left);
};


// Dancer.prototype.lineUp = function () {

// };

// Dancer.prototype.unsetPosition = function() {
//   this.$node.css({left: "0"})
// }