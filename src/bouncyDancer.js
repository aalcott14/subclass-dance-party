var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  ///var oldStep = this.step;
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.oldStep = Dancer.prototype.step;

BouncyDancer.prototype.step = function() {
  this.$node.addClass('dancer-bounce');
  this.$node.css("animation-duration", this._timeBetweenSteps / 500 + "s");

};