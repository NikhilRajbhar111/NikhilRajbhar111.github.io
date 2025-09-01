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