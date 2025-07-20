## 🗺️ **What is Client-Side Image Mapping?**

**Client-side image mapping** allows you to define **clickable areas** on an image that act like hyperlinks, using HTML.

This is done using:

* The `<map>` tag — defines the **image map**
* The `<area>` tag — defines the **clickable areas**
* The `usemap` attribute in `<img>` — links the image to the map

---

## 🖼️ Basic Structure:

```html
<img src="image.jpg" usemap="#mapname" alt="Descriptive Text">

<map name="mapname">
  <area shape="..." coords="..." href="..." alt="...">
</map>
```

---

## 📐 Shapes Used in Image Maps

There are **three shapes** you can use with the `<area>` tag:

### 1. 🔲 **Rectangle (`rect`)**

* Defines a **rectangular area**
* `coords` format: `x1,y1,x2,y2` (top-left and bottom-right corners)

#### Example:

```html
<area shape="rect" coords="50,50,150,150" href="https://example.com/rectangle" alt="Rectangle">
```

---

### 2. ⚪ **Circle (`circle`)**

* Defines a **circular area**
* `coords` format: `x,y,r`

  * `x,y` = center
  * `r` = radius

#### Example:

```html
<area shape="circle" coords="200,200,50" href="https://example.com/circle" alt="Circle">
```

---

### 3. 🔺 **Polygon (`poly`)**

* Defines an area with **multiple points**
* `coords` format: `x1,y1,x2,y2,x3,y3,...`
  (At least 3 points needed to form a shape)

#### Example:

```html
<area shape="poly" coords="300,100,350,150,325,200,275,200,250,150" href="https://example.com/polygon" alt="Polygon">
```

---

## ✅ Attributes of `<area>` Tag

| Attribute | Description                                              |
| --------- | -------------------------------------------------------- |
| `shape`   | Shape of the clickable area (`rect`, `circle`, `poly`)   |
| `coords`  | Coordinates for the shape                                |
| `href`    | Link to open when area is clicked                        |
| `alt`     | Text shown if image is not available / for accessibility |
| `target`  | (Optional) Opens the link in new tab (`_blank`)          |

---

## 🧪 Full Example with All Shapes (Using Unsplash Image):

```html
<img src="https://source.unsplash.com/600x400/?technology" usemap="#techmap" alt="Technology Image">

<map name="techmap">
  <!-- Rectangle area -->
  <area shape="rect" coords="50,50,150,150" href="https://example.com/rect" alt="Rect Area">

  <!-- Circle area -->
  <area shape="circle" coords="300,100,50" href="https://example.com/circle" alt="Circle Area">

  <!-- Polygon area -->
  <area shape="poly" coords="400,200,450,250,425,300,375,300,350,250" href="https://example.com/poly" alt="Polygon Area">
</map>