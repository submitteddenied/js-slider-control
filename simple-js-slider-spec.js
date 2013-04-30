describe("Simple Slider", function() {
  describe("jasmine", function() {
    it("works", function() {
      expect(true).toBeTruthy();
    });
  });

  describe("noConflict()", function() {
    var otherSlider;
    afterEach(function() {
      window.SimpleSlider = otherSlider;
    });

    it("restores the value of SimpleSlider", function() {
      otherSlider = SimpleSlider.noConflict();
      expect(window.SimpleSlider).toEqual("original slider"); //set up in spec-helper.js, before SimpleSlider is loaded
    });
  });

  describe("sliders()", function() {

  });

  describe("Slider", function() {
    var slider;
    beforeEach(function() {
      slider = new SimpleSlider.Slider();
      slider.el = document.createElement("div");
      jasmineContent.appendChild(slider.el);
    });

    describe("render()", function() {
      it("creates a slider control", function() {
        slider.render();
        expect(slider.el.querySelector("input[type=range]")).toBeDefined();
      });

      it("sets the right settings on the control", function() {
        slider.render();
        var control = slider.control;
        expect(control.getAttribute("max")).toEqual('1');
        expect(control.getAttribute("min")).toEqual('0');
      });
    });

    describe("handleChange()", function() {
      it("is called when the change event occurs", function() {
        spyOn(slider, 'handleChange');
        slider.render();
        var e = document.createEvent("HTMLEvents");
        var control = slider.control;
        e.initEvent("change", true, true);

        control.dispatchEvent(e);
        expect(slider.handleChange).toHaveBeenCalledWith(e);
      });
    });
  });
});
