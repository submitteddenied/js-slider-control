(function() {
  var originalSlider = window.SimpleSlider;
  var SimpleSlider = function() {
  };

  SimpleSlider.prototype.noConflict = function() {
    window.SimpleSlider = originalSlider;
    return this;
  };

  SimpleSlider.prototype.sliders = function(config) {

  };

  var Slider = function(el) {
    this.el = el;
  };

  Slider.prototype.render = function() {
    var control = document.createElement("input");
    control.type = "range";
    control.min = 0;
    control.max = 1;

    control.addEventListener("change", this.handleChange);

    this.el.appendChild(control);
    this.control = control;
  };

  Slider.prototype.handleChange = function(event) {

  };

  SimpleSlider.prototype.Slider = Slider;

  window.SimpleSlider = new SimpleSlider();
})();
