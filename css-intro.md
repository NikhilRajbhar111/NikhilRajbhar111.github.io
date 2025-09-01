# Introduction to CSS

---

## What is CSS?

CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

## CSS Syntax

CSS consists of **selectors** and **declaration blocks**:

```css
selector {
    property: value;
    property: value;
}
```

### Example:
```css
h1 {
    color: blue;
    font-size: 24px;
}
```

## Ways to Include CSS

### 1. Inline CSS
CSS written directly in HTML elements using the `style` attribute.

```html
<h1 style="color: blue; font-size: 24px;">Hello World</h1>
```

### 2. Internal CSS
CSS written in the `<head>` section of an HTML document using `<style>` tags.

```html
<head>
    <style>
        h1 {
            color: blue;
            font-size: 24px;
        }
    </style>
</head>
```

### 3. External CSS
CSS written in a separate `.css` file and linked to HTML using `<link>` tag.

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

## CSS Selectors

### Basic Selectors

**Element Selector**: Selects all elements of a specific type
```css
p { color: red; }
```

**Class Selector**: Selects elements with a specific class
```css
.highlight { background-color: yellow; }
```

**ID Selector**: Selects an element with a specific ID
```css
#header { font-size: 32px; }
```

**Universal Selector**: Selects all elements
```css
* { margin: 0; padding: 0; }
```

### Combinators

**Descendant Selector**: Selects elements that are descendants of a specified element
```css
div p { color: blue; }
```

**Child Selector**: Selects direct children of a specified element
```css
div > p { color: green; }
```

**Adjacent Sibling**: Selects elements that are immediately preceded by a specified element
```css
h1 + p { font-weight: bold; }
```

## CSS Properties

### Text Properties
- `color`: Sets text color
- `font-family`: Sets font family
- `font-size`: Sets font size
- `font-weight`: Sets font weight (bold, normal)
- `text-align`: Sets text alignment
- `text-decoration`: Sets text decoration (underline, overline, line-through)

### Box Model Properties
- `margin`: Sets outer spacing
- `padding`: Sets inner spacing
- `border`: Sets border properties
- `width`: Sets element width
- `height`: Sets element height

## Final Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Introduction</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f0f0f0;
        }
        
        h1 {
            color: #2c3e50;
            text-align: center;
            text-decoration: underline;
        }
        
        .container {
            background-color: white;
            padding: 20px;
            border: 2px solid #3498db;
            border-radius: 8px;
            margin: 20px auto;
            max-width: 600px;
        }
        
        .highlight {
            background-color: #f39c12;
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
        }
        
        #special-text {
            font-size: 18px;
            font-weight: bold;
            color: #e74c3c;
        }
    </style>
</head>
<body>
    <h1>CSS Introduction</h1>
    
    <div class="container">
        <p>This is a <span class="highlight">highlighted text</span> using CSS.</p>
        <p id="special-text">This text has special styling applied to it.</p>
        <p>CSS makes web pages look beautiful and organized!</p>
    </div>
</body>
</html>
```

## Key Points to Remember

1. **CSS stands for Cascading Style Sheets**
2. **CSS separates content (HTML) from presentation (styling)**
3. **CSS can be inline, internal, or external**
4. **Selectors target specific HTML elements**
5. **Properties define how elements should look**
6. **CSS follows a specific syntax: selector { property: value; }**
