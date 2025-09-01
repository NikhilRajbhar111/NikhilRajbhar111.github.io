# CSS Box Model

---

## Understanding the Box Model

Every HTML element is treated as a box by CSS. The CSS box model consists of:
- **Content**: The actual content of the element
- **Padding**: Space between content and border
- **Border**: A line around the padding and content
- **Margin**: Space outside the border

## Box Model Components

### Content Box
The area where your content (text, images, etc.) is displayed.

```css
.content {
    width: 200px;
    height: 100px;
}
```

### Padding
Creates space between the content and the border.

```css
.padded {
    padding: 10px;           /* All sides */
    padding: 10px 20px;      /* Top/bottom, left/right */
    padding: 10px 20px 15px; /* Top, left/right, bottom */
    padding: 10px 20px 15px 25px; /* Top, right, bottom, left */
}
```

### Border
A line that goes around the padding and content.

```css
.bordered {
    border: 2px solid black;           /* Shorthand */
    border-width: 2px;                 /* Width only */
    border-style: solid;               /* Style only */
    border-color: black;               /* Color only */
    
    /* Individual sides */
    border-top: 1px solid red;
    border-right: 2px dashed blue;
    border-bottom: 3px dotted green;
    border-left: 4px double orange;
}
```

### Margin
Creates space outside the border, between elements.

```css
.margined {
    margin: 10px;           /* All sides */
    margin: 10px 20px;      /* Top/bottom, left/right */
    margin: 10px 20px 15px; /* Top, left/right, bottom */
    margin: 10px 20px 15px 25px; /* Top, right, bottom, left */
    
    /* Individual sides */
    margin-top: 20px;
    margin-right: 15px;
    margin-bottom: 10px;
    margin-left: 25px;
}
```

## Box Sizing

### Content Box (Default)
The default `box-sizing` property. Width and height only include content.

```css
.content-box {
    box-sizing: content-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* Total width = 200 + 40 + 10 = 250px */
}
```

### Border Box
Width and height include content, padding, and border.

```css
.border-box {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* Total width = 200px (includes padding and border) */
}
```

## Display Properties

### Block Elements
- Take full width available
- Start on a new line
- Respect width, height, margin, and padding

```css
.block-element {
    display: block;
    width: 200px;
    height: 100px;
    margin: 10px;
    padding: 15px;
}
```

### Inline Elements
- Take only necessary width
- Don't start on new lines
- Don't respect width, height, or vertical margins

```css
.inline-element {
    display: inline;
    /* width, height, vertical margins won't work */
    padding: 5px;
    margin-left: 10px;
    margin-right: 10px;
}
```

### Inline-Block Elements
- Combine features of both block and inline
- Respect width, height, and all margins/padding
- Don't start on new lines

```css
.inline-block-element {
    display: inline-block;
    width: 150px;
    height: 80px;
    margin: 10px;
    padding: 15px;
}
```

## Final Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Box Model</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .box {
            background-color: #3498db;
            color: white;
            text-align: center;
            padding: 20px;
            border: 3px solid #2980b9;
            margin: 20px;
        }
        
        .content-box {
            box-sizing: content-box;
            width: 200px;
            height: 100px;
        }
        
        .border-box {
            box-sizing: border-box;
            width: 200px;
            height: 100px;
        }
        
        .inline-block {
            display: inline-block;
            width: 150px;
            height: 80px;
            margin: 10px;
        }
        
        .highlight {
            background-color: #e74c3c;
            padding: 10px;
            border: 2px solid #c0392b;
            border-radius: 5px;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Box Model Examples</h1>
        
        <div class="highlight">
            <h3>Content Box (Default)</h3>
            <p>Width: 200px + Padding: 40px + Border: 6px = 246px total</p>
        </div>
        
        <div class="box content-box">
            Content Box
        </div>
        
        <div class="highlight">
            <h3>Border Box</h3>
            <p>Total width: 200px (includes padding and border)</p>
        </div>
        
        <div class="box border-box">
            Border Box
        </div>
        
        <div class="highlight">
            <h3>Inline-Block Elements</h3>
            <p>These elements respect width, height, and margins but don't break lines</p>
        </div>
        
        <div class="box inline-block">Box 1</div>
        <div class="box inline-block">Box 2</div>
        <div class="box inline-block">Box 3</div>
    </div>
</body>
</html>
```

## Key Points to Remember

1. **Every HTML element is a box**
2. **Box model consists of: Content → Padding → Border → Margin**
3. **Padding creates space inside the element**
4. **Margin creates space outside the element**
5. **Border goes around padding and content**
6. **box-sizing: border-box includes padding and border in width/height**
7. **Display properties affect how elements behave in layout**
8. **Block elements take full width and start on new lines**
9. **Inline elements don't respect width, height, or vertical margins**
10. **Inline-block combines features of both block and inline**
