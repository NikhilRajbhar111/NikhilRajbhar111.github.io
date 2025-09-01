## Position

### static

Default. Elements are positioned in normal document flow.

### absolute

Removes element from flow. Make it postion on the page and keeps is scrollable. Positioned relative to nearest positioned ancestor (not static).

### fixed

Positions element relative to viewport. Does not move on scroll.

### relative

Keeps element in flow, but allows offset positioning from its normal place. And it moves according to it's parent's viewport.

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