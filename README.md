# js-slider-control
A simple, js-only slider control

## Usage
Put `simple-js-slider.js` on your page. 
It will go and live under the `window.SimpleSlider` object. Use `SimpleSlider.noConflict()` to get a reference and restore whatever was at `SimpleSlider` before.
(The rest of this readme assumes you didn't use `noConflict()` and that Simple JS Slider is still at `SimpleSlider`)

Create an object that will describe your sliders. You'll need to specify:

* Number of sliders
* Labels for each slider
* An element to render the sliders into
* [Optionally] The starting values for each slider

Simple Slider speaks in JS objects, so your configuration should look like this:

    {
      "sliders": 3,
      "el": "#sliders",
      "labels": [
        "Tom",
        "Dick",
        "Harry"
      ],
      "initialValues": [
        0.25, //tom
        0.5,  //dick
        0.25  //harry
      ]
    }

Pass this off to `SimpleSlider.sliders(config)` and you're rolling!

## Markup
Of course, you'll need to style all this yourself. Here's how the markup is generated:

_coming soon_
