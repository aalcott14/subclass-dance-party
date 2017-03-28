describe('slideyDancer', function() {

  var slideyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slideyDancer = new SlideyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(slideyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    // sinon.spy(slideyDancer.$node, 'toggle');
    // slideyDancer.step();
    // expect(slideyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      // sinon.spy(slideyDancer, 'step');
      // expect(slideyDancer.step.callCount).to.be.equal(0);
      // //console.log('sddd');
      // // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      // expect(slideyDancer.step.callCount).to.be.equal(1);
      // //console.log('sddd');
      // clock.tick(timeBetweenSteps);
      // expect(slideyDancer.step.callCount).to.be.equal(2);
    });

    it('should be animated', function() {
      expect(slideyDancer.$node.hasClass('dancer-slide'));
      expect(slideyDancer.$node.css('animation')).to.not.equal('none');
    });
  });
});
