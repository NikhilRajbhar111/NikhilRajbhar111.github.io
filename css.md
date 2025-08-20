# CSS COURSE

---

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
```

---

## Position

### static

Default. Elements are positioned in normal document flow.

### absolute

Removes element from flow. Positioned relative to nearest positioned ancestor (not static).

### fixed

Positions element relative to viewport. Does not move on scroll.

### relative

Keeps element in flow, but allows offset positioning from its normal place.

### sticky

Behaves like relative until a defined scroll threshold, then acts like fixed.

### Final Code Example (Position)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Position Example</title>
  <style>
    .static {
      position: static;
      background: lightcoral;
    }
    .relative {
      position: relative;
      left: 30px;
      background: lightblue;
    }
    .absolute {
      position: absolute;
      top: 50px;
      left: 100px;
      background: lightgreen;
    }
    .fixed {
      position: fixed;
      bottom: 10px;
      right: 10px;
      background: gold;
    }
    .sticky {
      position: sticky;
      top: 0;
      background: pink;
    }
    div {
      padding: 20px;
      margin: 10px;
    }
  </style>
</head>
<body>
  <div class="static">Static</div>
  <div class="relative">Relative</div>
  <div class="absolute">Absolute</div>
  <div class="sticky">Sticky</div>
  <div class="fixed">Fixed</div>
  <p style="height:2000px;">Scroll down</p>
</body>
</html>
```

---

## Display

### display: block

Element takes full width, starts on a new line. Example: `<div>`.

### display: inline

Element takes only necessary width, does not break line. Example: `<span>`.

### visibility

Controls visibility without removing layout.

* `visible`: default
* `hidden`: element hidden but takes space

### Flexbox

Provides 1D layout control.

**Properties**

* `justify-content`: Aligns items horizontally (`flex-start`, `center`, `space-between`, etc.)
* `align-content`: Aligns rows in container when there is extra space
* `flex-wrap`: Defines wrapping (`nowrap`, `wrap`)
* `flex-direction`: Defines main axis direction (`row`, `column`)

### Final Code Example (Flex)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flex Example</title>
  <style>
    .container {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-around;
      align-content: center;
      height: 300px;
      background: lightgray;
    }
    .item {
      width: 100px;
      height: 100px;
      background: coral;
      margin: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
  </div>
</body>
</html>
```

---

## Grid

### Explanation

Grid provides 2D layout system. You define rows and columns and place items precisely.

### Properties

* `display: grid`: enables grid
* `grid-template-columns`: defines column sizes
* `grid-template-rows`: defines row sizes
* `gap`: spacing between items
* `grid-column` and `grid-row`: place items spanning specific rows/columns

### Final Code Example (Grid)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Grid Example</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 100px 100px;
      gap: 10px;
      background: lightgray;
    }
    .grid-item {
      background: coral;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .wide {
      grid-column: span 2;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item wide">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
  </div>
</body>
</html>
```

---

## Animation

### Keyframes

Define how element styles change over time. Declared with `@keyframes`.

### Properties

* `animation-name`: name of keyframes sequence
* `animation-duration`: how long one cycle lasts
* `animation-delay`: wait time before starting
* `animation-iteration-count`: number of times animation runs (`infinite` allowed)
* `animation-timing-function`: pacing (`linear`, `ease-in`, `ease-out`)
* `animation-direction`: whether it reverses alternate cycles (`normal`, `alternate`)

### Final Code Example (Animation)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Animation Example</title>
  <style>
    @keyframes moveBox {
      0%   { transform: translateX(0); background: coral; }
      50%  { transform: translateX(200px); background: lightblue; }
      100% { transform: translateX(0); background: coral; }
    }
    .box {
      width: 100px;
      height: 100px;
      background: coral;
      animation-name: moveBox;
      animation-duration: 4s;
      animation-delay: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      animation-direction: alternate;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```