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
});
