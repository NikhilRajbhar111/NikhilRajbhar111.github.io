## 🖼️ **1. `<iframe>` Tag (Inline Frame)**

The `<iframe>` tag is used to **embed another webpage, video, or document** within your current HTML page.

### ✅ **Basic Syntax:**

```html
<iframe src="https://example.com" width="600" height="400"></iframe>
```

### 🔑 **Common Attributes of `<iframe>`:**

| Attribute         | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| `src`             | URL of the page or media to embed                           |
| `width`           | Width of the iframe (in px or %)                            |
| `height`          | Height of the iframe                                        |
| `title`           | Accessibility title for screen readers                      |
| `frameborder`     | `0` removes border, `1` adds a border (deprecated in HTML5) |
| `allowfullscreen` | Allows video or site to be viewed in fullscreen             |
| `loading`         | `lazy` delays iframe loading until it's in view             |

---

## 📺 **2. Embedding a Video & Website Using Two `<iframe>`s**

```html
<h2>Embedded YouTube Video</h2>
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="YouTube Video" 
        frameborder="0" 
        allowfullscreen>
</iframe>

<h2>Embedded Website (OpenAI Homepage)</h2>
<iframe src="https://www.openai.com" 
        width="100%" 
        height="400" 
        title="OpenAI Website" 
        frameborder="1">
</iframe>
```

> ⚠️ Note: Some websites block iframe embedding for security (via `X-Frame-Options`), so not all URLs will work.

---

## 🏃‍♂️ **3. `<marquee>` Tag**

The `<marquee>` tag is used to **create scrolling text or images** across the screen.

> ⚠️ Deprecated in HTML5 — not recommended for modern websites. Use CSS animations instead.

---

### ✅ **Basic Syntax:**

```html
<marquee>Scrolling Text</marquee>
```

---

### 🔑 **Attributes of `<marquee>`:**

| Attribute         | Description                                         | Example                          |
| ----------------- | --------------------------------------------------- | -------------------------------- |
| `behavior`        | Type of movement: `scroll`, `slide`, or `alternate` | `<marquee behavior="alternate">` |
| `direction`       | Scroll direction: `left`, `right`, `up`, `down`     | `<marquee direction="right">`    |
| `scrollamount`    | Speed of scroll (pixels per movement)               | `<marquee scrollamount="10">`    |
| `scrolldelay`     | Delay between movements (in ms)                     | `<marquee scrolldelay="100">`    |
| `loop`            | Number of times the marquee should loop             | `<marquee loop="3">`             |
| `bgcolor`         | Background color                                    | `<marquee bgcolor="lightblue">`  |
| `width`/`height`  | Size of marquee box                                 | `<marquee width="300">`          |
| `hspace`/`vspace` | Horizontal or vertical spacing                      | `<marquee hspace="10">`          |

---

### 📋 **Marquee Example:**

```html
<marquee behavior="alternate" direction="right" scrollamount="5" loop="3" bgcolor="yellow" width="400" height="50">
  🚀 Welcome to My Website!
</marquee>
```

---

## ✅ Summary

| Tag         | Purpose                          | Status        |
| ----------- | -------------------------------- | ------------- |
| `<iframe>`  | Embed another webpage or media   | ✅ Recommended |
| `<marquee>` | Scroll text/images across screen | ❌ Deprecated  |