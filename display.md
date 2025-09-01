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