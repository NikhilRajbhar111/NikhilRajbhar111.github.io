# CSS Typography

---

## Font Properties

### Font Family
Sets the typeface for text. You can specify multiple fonts as fallbacks.

```css
.text {
    font-family: Arial, Helvetica, sans-serif;
    font-family: "Times New Roman", Times, serif;
    font-family: "Courier New", Courier, monospace;
}
```

### Font Size
Controls the size of text. Can be specified in various units.

```css
.text {
    font-size: 16px;        /* Pixels */
    font-size: 1.2em;       /* Relative to parent */
    font-size: 1.5rem;      /* Relative to root */
    font-size: 120%;        /* Percentage */
    font-size: large;       /* Keywords */
    font-size: 12pt;        /* Points */
}
```

### Font Weight
Controls how bold or light the text appears.

```css
.text {
    font-weight: normal;    /* Default */
    font-weight: bold;      /* Bold */
    font-weight: 100;       /* Thin */
    font-weight: 400;       /* Normal */
    font-weight: 700;       /* Bold */
    font-weight: 900;       /* Extra Bold */
    font-weight: lighter;   /* Lighter than parent */
    font-weight: bolder;    /* Bolder than parent */
}
```

### Font Style
Controls the style of the font.

```css
.text {
    font-style: normal;     /* Default */
    font-style: italic;     /* Italic */
    font-style: oblique;    /* Oblique (slanted) */
}
```

### Font Variant
Controls special text features.

```css
.text {
    font-variant: normal;           /* Default */
    font-variant: small-caps;       /* Small caps */
    font-variant: all-small-caps;   /* All small caps */
}
```

## Text Properties

### Text Color
Sets the color of the text.

```css
.text {
    color: red;                     /* Named color */
    color: #ff0000;                 /* Hex color */
    color: rgb(255, 0, 0);         /* RGB */
    color: rgba(255, 0, 0, 0.5);   /* RGBA with transparency */
    color: hsl(0, 100%, 50%);      /* HSL */
    color: hsla(0, 100%, 50%, 0.5); /* HSLA with transparency */
}
```

### Text Alignment
Controls how text is aligned horizontally.

```css
.text {
    text-align: left;       /* Left align (default) */
    text-align: right;      /* Right align */
    text-align: center;     /* Center align */
    text-align: justify;    /* Justify text */
    text-align: start;      /* Start of text direction */
    text-align: end;        /* End of text direction */
}
```

### Text Decoration
Adds decorative lines to text.

```css
.text {
    text-decoration: none;          /* No decoration */
    text-decoration: underline;     /* Underline */
    text-decoration: overline;      /* Overline */
    text-decoration: line-through;  /* Strikethrough */
    text-decoration: blink;         /* Blinking text */
    
    /* Individual properties */
    text-decoration-line: underline;
    text-decoration-color: red;
    text-decoration-style: wavy;
    text-decoration-thickness: 3px;
}
```

### Text Transform
Controls the capitalization of text.

```css
.text {
    text-transform: none;           /* No change */
    text-transform: uppercase;      /* ALL CAPS */
    text-transform: lowercase;      /* all lowercase */
    text-transform: capitalize;     /* First Letter Of Each Word */
    text-transform: full-width;     /* Full-width characters */
}
```

### Text Indent
Controls the indentation of the first line of text.

```css
.text {
    text-indent: 20px;             /* Pixels */
    text-indent: 2em;              /* Relative to font size */
    text-indent: 10%;              /* Percentage of container width */
    text-indent: -20px;            /* Negative (hanging indent) */
}
```

### Line Height
Controls the height of text lines.

```css
.text {
    line-height: normal;            /* Default */
    line-height: 1.5;               /* 1.5 times font size */
    line-height: 24px;              /* Specific height */
    line-height: 150%;              /* Percentage */
}
```

### Letter Spacing
Controls the space between characters.

```css
.text {
    letter-spacing: normal;         /* Default */
    letter-spacing: 2px;            /* Increase spacing */
    letter-spacing: -1px;           /* Decrease spacing */
    letter-spacing: 0.1em;          /* Relative to font size */
}
```

### Word Spacing
Controls the space between words.

```css
.text {
    word-spacing: normal;           /* Default */
    word-spacing: 5px;              /* Increase spacing */
    word-spacing: -2px;             /* Decrease spacing */
    word-spacing: 0.2em;            /* Relative to font size */
}
```

## Font Shorthand

The `font` property allows you to set multiple font properties in one line.

```css
.text {
    /* font: style variant weight size/line-height family */
    font: italic small-caps bold 16px/1.5 Arial, sans-serif;
    
    /* Common shorthand */
    font: 16px Arial, sans-serif;
    font: bold 18px "Times New Roman", serif;
    font: italic 14px/1.4 Georgia, serif;
}
```

## Web Fonts

### Google Fonts
Import and use web fonts from Google Fonts.

```html
<head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
</head>
```

```css
.text {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;  /* Light */
    font-weight: 400;  /* Regular */
    font-weight: 700;  /* Bold */
}
```

### Custom Fonts
Use `@font-face` to define custom fonts.

```css
@font-face {
    font-family: 'MyCustomFont';
    src: url('path/to/font.woff2') format('woff2'),
         url('path/to/font.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

.text {
    font-family: 'MyCustomFont', fallback, sans-serif;
}
```

## Final Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Typography</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        
        h1 {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
            color: #2c3e50;
            text-decoration: underline;
            text-decoration-color: #e74c3c;
            text-decoration-thickness: 3px;
        }
        
        h2 {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 400;
            color: #34495e;
            border-bottom: 2px solid #3498db;
            padding-bottom: 5px;
        }
        
        .highlight {
            background-color: #f39c12;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .code-example {
            background-color: #ecf0f1;
            padding: 15px;
            border-left: 4px solid #3498db;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            line-height: 1.4;
        }
        
        .text-styles {
            margin: 20px 0;
        }
        
        .uppercase {
            text-transform: uppercase;
            font-weight: 700;
            color: #e74c3c;
        }
        
        .italic {
            font-style: italic;
            color: #27ae60;
        }
        
        .small-caps {
            font-variant: small-caps;
            color: #8e44ad;
        }
        
        .justified {
            text-align: justify;
            text-indent: 20px;
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>CSS Typography Examples</h1>
    
    <div class="highlight">Typography is the art of arranging type</div>
    
    <h2>Font Properties</h2>
    <p>This text uses the <strong>Roboto</strong> font family with various styling options.</p>
    
    <div class="text-styles">
        <p class="uppercase">This text is uppercase and bold</p>
        <p class="italic">This text is italic and green</p>
        <p class="small-caps">This text uses small caps</p>
    </div>
    
    <h2>Text Alignment & Spacing</h2>
    <div class="justified">
        <p>This paragraph demonstrates justified text alignment with a first-line indent. 
        The text is spread evenly across the width of the container, creating a clean, 
        professional appearance. This is commonly used in books, magazines, and formal documents.</p>
    </div>
    
    <h2>Code Example</h2>
    <div class="code-example">
        .text {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.6;
            color: #333;
        }
    </div>
    
    <p>Typography plays a crucial role in web design, affecting readability, user experience, and the overall aesthetic appeal of a website.</p>
</body>
</html>
```

## Key Points to Remember

1. **Font properties control the appearance of text**
2. **Text properties control the layout and spacing of text**
3. **Use web fonts for better typography options**
4. **Font shorthand combines multiple properties**
5. **Line height affects readability**
6. **Text alignment impacts visual hierarchy**
7. **Letter and word spacing improve text legibility**
8. **Always provide fallback fonts**
9. **Consider accessibility when choosing fonts and colors**
10. **Typography significantly impacts user experience**
