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
    control.step = 0.01;

    control.addEventListener("change", this.handleChange);

    this.el.appendChild(control);
    this.control = control;
  };

  Slider.prototype.handleChange = function(event) {

  };

  SimpleSlider.prototype.Slider = Slider;

  var Sliders = function(count, el) {
    this.count = count;
    this.el = el;
  };

  Sliders.prototype.render = function() {
    this.sliders = [];
    for(var i = 0; i < this.count; i++) {
      var sliderEl = document.createElement("div");
      var slider = new Slider(sliderEl);
      slider.render();
      this.el.appendChild(sliderEl);

      this.sliders.push(slider);
    }
  };

  SimpleSlider.prototype.Sliders = Sliders;

  window.SimpleSlider = new SimpleSlider();
})();
