## 🖼️ **HTML `<img>` Tag – Displaying Images**

The `<img>` tag is used to **display images** on a webpage.

### ✅ Basic Syntax:

```html
<img src="image-url" alt="description">
```

### 📌 Common Attributes of `<img>`:

| Attribute | Description                                                  | Example                                             |
| --------- | ------------------------------------------------------------ | --------------------------------------------------- |
| `src`     | Specifies the **URL/path** of the image                      | `src="https://source.unsplash.com/300x200/?nature"` |
| `alt`     | **Alternative text** for the image (for SEO & accessibility) | `alt="Nature photo"`                                |
| `width`   | Sets the **width** of the image in pixels or %               | `width="300"`                                       |
| `height`  | Sets the **height** of the image in pixels or %              | `height="200"`                                      |

### 🖼️ Example with Unsplash Image:

```html
<img src="https://source.unsplash.com/300x200/?nature" alt="Nature Image" width="300" height="200">
```

---

## 🔗 **HTML `<a>` Tag – Creating Links**

The `<a>` tag (anchor) is used to **create hyperlinks**.

### ✅ Basic Syntax:

```html
<a href="url">Link Text</a>
```

### 📌 Common Attributes of `<a>`:

| Attribute | Description                                    | Example                              |
| --------- | ---------------------------------------------- | ------------------------------------ |
| `href`    | The **URL** the link goes to                   | `href="https://www.google.com"`      |
| `target`  | Controls **where** the link opens              | `target="_blank"` (opens in new tab) |
| `title`   | Tooltip text shown when hovering over the link | `title="Go to Google"`               |

### 🔗 Example:

```html
<a href="https://www.google.com" target="_blank" title="Visit Google">Go to Google</a>
```

---

## 🖼️🔗 **Using an Image as a Hyperlink**

You can **wrap an image inside an anchor (`<a>`) tag** to make it clickable:

### 🖼️ Example – Image as a Link:

```html
<a href="https://unsplash.com" target="_blank" title="Go to Unsplash">
    <img src="https://source.unsplash.com/300x200/?mountains" alt="Mountain Image" width="300" height="200">
</a>
```

📝 This example makes a **mountain image from Unsplash** clickable, and it opens **Unsplash.com** in a new tab.

---

## 🧾 Summary Table:

| Tag     | Purpose             | Key Attributes                  |
| ------- | ------------------- | ------------------------------- |
| `<img>` | Displays an image   | `src`, `alt`, `width`, `height` |
| `<a>`   | Creates a hyperlink | `href`, `target`, `title`       |