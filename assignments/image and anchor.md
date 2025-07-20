# **Assignment: Working with Images and Anchors in HTML**

### Objective:

Learn how to add images to a webpage and create clickable links (anchors) that can direct users to other pages or websites. Also, practice making an image a hyperlink.

---

### Tasks:

1. **Add an Image to Your Webpage**

   * Use the `<img>` tag to insert an image.
   * Use attributes like `src` (image URL), `alt` (alternative text), `width`, and `height` to control the image display.
   * Example:

     ```html
     <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Beautiful Landscape" width="400" height="300">
     ```

2. **Create a Hyperlink Using the Anchor Tag `<a>`**

   * Use the `<a>` tag to link to a website.
   * Use the `href` attribute to specify the URL.
   * Example:

     ```html
     <a href="https://www.wikipedia.org" target="_blank">Visit Wikipedia</a>
     ```
   * The `target="_blank"` attribute opens the link in a new tab.

3. **Make an Image a Clickable Link**

   * Wrap the `<img>` tag inside an `<a>` tag to make the image clickable.
   * Example:

     ```html
     <a href="https://unsplash.com" target="_blank">
       <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Click to visit Unsplash" width="400">
     </a>
     ```

---

### Bonus Challenge:

* Add multiple images and link each image to a different website.
* Use relative links to link between different pages of your own website.

---

### Deliverable:

Write the HTML code for the above tasks and test it by opening the file in a browser.