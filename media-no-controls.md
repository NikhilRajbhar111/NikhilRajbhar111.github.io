## 🎵 **1. HTML `<audio>` Tag**

Used to **embed audio files** (like music, voice recordings) on a webpage.

### ✅ Syntax:

```html
<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

### 🔑 Attributes of `<audio>`:

| Attribute  | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| `controls` | Shows play, pause, volume, etc.                                     |
| `autoplay` | Starts playing automatically                                        |
| `loop`     | Repeats the audio                                                   |
| `muted`    | Audio starts muted                                                  |
| `preload`  | Hints how browser should preload audio (`auto`, `metadata`, `none`) |

---

## 🎬 **2. HTML `<video>` Tag**

Used to **embed videos** into a webpage.

### ✅ Syntax:

```html
<video width="400" height="300" controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

### 🔑 Attributes of `<video>`:

| Attribute          | Description                          |
| ------------------ | ------------------------------------ |
| `controls`         | Shows video controls                 |
| `autoplay`         | Plays video automatically            |
| `loop`             | Repeats video after ending           |
| `muted`            | Mutes video audio on load            |
| `poster`           | Displays an image before video plays |
| `width` / `height` | Sets video size                      |

---

## 📼 **3. Example: Audio and Video Together**

```html
<h2>Audio Example</h2>
<audio controls>
  <source src="sample-audio.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>

<h2>Video Example</h2>
<video width="500" controls>
  <source src="sample-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

---

## 🧓 **4. Old/Legacy Tags**

Before `<audio>` and `<video>`, media was added using:

### 📌 `<embed>` Tag

Used to embed multimedia files directly.

```html
<embed src="sample-audio.mp3" width="300" height="90" autostart="false">
```

* ❌ No good control or cross-browser support
* ✅ Still works for PDFs and Flash (though Flash is now obsolete)

---

### 📌 `<object>` Tag

Used for embedding external files like audio, video, PDFs, etc.

```html
<object data="sample-video.mp4" width="400" height="300">
  Video not supported
</object>
```

* ❗ Mostly outdated for media — use `<video>` or `<audio>` instead

---

## 🎯 Summary Comparison

| Feature         | `<audio>` / `<video>` | `<embed>` / `<object>` |
| --------------- | --------------------- | ---------------------- |
| Modern HTML5    | ✅ Yes                 | ❌ Older                |
| Controls        | ✅ Native UI           | ❌ Manual               |
| Accessibility   | ✅ Better              | ❌ Poor                 |
| Browser Support | ✅ Great               | ⚠️ Limited             |

---

## ✅ Best Practice

Always use:

* `<audio>` for sound
* `<video>` for video
* Include multiple `<source>` tags for cross-browser compatibility (e.g., `.mp3`, `.ogg` for audio)