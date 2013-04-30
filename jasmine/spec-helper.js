//set some original slider object, to allow for noConflict tests
window.SimpleSlider = "original slider";
var jasmineContent;

beforeEach(function() {
  jasmineContent = document.createElement("div");
  jasmineContent.setAttribute('id', 'jasmine-content');
  document.body.appendChild(jasmineContent);
});

afterEach(function() {
  document.body.removeChild(jasmineContent);
  jasmineContent = undefined;
});
