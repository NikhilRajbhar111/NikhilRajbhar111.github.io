## 📌 What are HTML Attributes?

* **Attributes** provide **additional information** about HTML elements.
* They are always written **inside the opening tag** of an element.
* Attributes are written in the format:
  `attribute="value"`

### ✅ Example:

```html
<body bgcolor="lightyellow">
```

* `bgcolor` is the **attribute**
* `lightyellow` is the **value**

---

## 🧍‍♂️ Where Are Attributes Written?

* Attributes are written **within the opening tag** of an element.
* Different HTML **tags support different attributes**.

---

## 🧾 Common Tag Attributes Example:

### 1. **`<body>` Tag Attributes**

The `<body>` tag represents the **main content area** of the webpage.

#### Common Attributes:

| Attribute    | Description                             | Example                        |
| ------------ | --------------------------------------- | ------------------------------ |
| `bgcolor`    | Sets the background color of the page   | `<body bgcolor="lightyellow">` |
| `background` | Sets a background image for the page    | `<body background="bg.jpg">`   |
| `text`       | Sets the default text color on the page | `<body text="black">`          |

---

### 2. **`<font>` Tag**

> ❗ **Note:** The `<font>` tag is **deprecated** in HTML5. CSS is now recommended for styling text, but `<font>` may still work in older HTML documents.

The `<font>` tag is used to **change the appearance of text**.

#### Common Attributes:

| Attribute | Description                          | Example               |
| --------- | ------------------------------------ | --------------------- |
| `face`    | Sets the **font style** (like Arial) | `<font face="Arial">` |
| `color`   | Sets the **text color**              | `<font color="blue">` |
| `size`    | Sets the **size of the text** (1–7)  | `<font size="4">`     |

#### Example:

```html
<font face="Arial" color="blue" size="4">
    <p>This is styled text using the font tag.</p>
</font>
```

---

## 📄 Summary:

```html
<body bgcolor="lightyellow">
    <font face="Arial" color="blue" size="4">
        <h1>HTML Attributes, Body and Font Tag</h1>
        <p>This page demonstrates attributes like bgcolor in body and usage of the font tag.</p>
    </font>
```

* The `<body>` tag uses the `bgcolor` attribute to set the background color to light yellow.
* The `<font>` tag uses:

  * `face="Arial"` to change the font style
  * `color="blue"` to change the text color
  * `size="4"` to increase the font size