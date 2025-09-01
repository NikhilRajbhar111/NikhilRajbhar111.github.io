## Background

### About Background

The `background` property in CSS controls the visual styling behind elements. It can apply solid colors, images, gradients, and combinations of these.

### Properties

**1. background-size**
Defines how background images are scaled.

* `auto`: original size
* `cover`: fill container while maintaining aspect ratio
* `contain`: fit entirely inside element

**2. background-repeat**
Controls if and how the image repeats.

* `repeat` (default): repeats both directions
* `repeat-x`: repeats horizontally
* `repeat-y`: repeats vertically
* `no-repeat`: no repetition

**3. background-color**
Defines solid color backgrounds. Accepts named colors, hex, rgb, hsl.

**4. background-image**
Sets an image as background. Example: `url("image.png")`.

**5. background**
Shorthand property that allows setting color, image, position, size, repeat in one line.

**6. linear-gradient**
Creates a gradient along a straight line. Example:
`background: linear-gradient(to right, red, blue);`

**7. radial-gradient**
Creates gradient radiating from center or a point. Example:
`background: radial-gradient(circle, red, blue);`

**8. conic-gradient**
Creates a gradient rotated around a center. Example:
`background: conic-gradient(red, yellow, green, blue);`

### Final Code Example (Background)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Background Example</title>
  <style>
    body {
      background: linear-gradient(to right, lightblue, lightgreen);
    }
    .box1 {
      width: 200px;
      height: 200px;
      background-color: coral;
    }
    .box2 {
      width: 200px;
      height: 200px;
      background-image: url("https://via.placeholder.com/150");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .box3 {
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, yellow, orange);
    }
    .box4 {
      width: 200px;
      height: 200px;
      background: conic-gradient(red, yellow, green, blue, red);
    }
  </style>
</head>
<body>
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
  <div class="box4"></div>
</body>
</html>