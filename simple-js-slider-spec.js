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
      slider = new SimpleSlider.Slider(document.createElement("div"));
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
        expect(control.getAttribute("step")).toEqual('0.01');
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

  describe("Sliders", function() {
    var sliders;
    beforeEach(function() {
    });

    describe("render()", function() {
      it("creates as many sliders as it's told into the given element", function() {
        sliders = new SimpleSlider.Sliders(3, jasmineContent);
        spyOn(SimpleSlider.Slider.prototype, 'render');
        sliders.render();
        expect(SimpleSlider.Slider.prototype.render.callCount).toEqual(3);
      });

      it("inserts its child sliders into the given element", function() {
        sliders = new SimpleSlider.Sliders(2, jasmineContent);
        sliders.render();
        expect(jasmineContent.querySelectorAll("input[type=range]").length).toEqual(2);
      });
    });
  });
});
