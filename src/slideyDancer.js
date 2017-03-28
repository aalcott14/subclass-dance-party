var SlideyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  ///var oldStep = this.step;
};

SlideyDancer.prototype = Object.create(Dancer.prototype);
SlideyDancer.prototype.constructor = SlideyDancer;

SlideyDancer.prototype.oldStep = Dancer.prototype.step;

SlideyDancer.prototype.step = function() {
  this.$node.addClass('dancer-slide');

};