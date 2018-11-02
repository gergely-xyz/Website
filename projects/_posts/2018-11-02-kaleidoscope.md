---
title: Kaleidoscope in p5.js
---
I made a simple kaleidoscope generator thingy today. It uses [Perlin noise](https://en.wikipedia.org/wiki/Perlin_noise) to smoothly move around a point and vary its size. The colour is simply shifting back and forth with the red channel starting in the middle and the others at 0. The original point is then mirrored to achieve 8-way symmetry.

This is my first adventure into the world of JavaScript with the [p5.js](https://p5js.org/) library. 

[Check it out here!](/projects/kaleidoscope_demo)

I don't think that JavaScript is going to become my favourite language, but I have to admit that this was pretty fun and the result is mesmerising. It is also pretty obvious why it is so heavily used for web development. 

[The code is available on my GitHub page under the MIT license.](https://github.com/gergely-xyz/Kaleidoscope)