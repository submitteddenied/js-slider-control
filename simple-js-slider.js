(function() {
  var originalSlider = window.SimpleSlider;
  var SimpleSlider = function() {
  };

  SimpleSlider.prototype.noConflict = function() {
    window.SimpleSlider = originalSlider;
    return this;
  };

  window.SimpleSlider = new SimpleSlider();
})();
