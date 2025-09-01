# CSS Responsive Design

---

## What is Responsive Design?

Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. The goal is to provide an optimal viewing experience across a wide range of devices.

## Media Queries

Media queries allow you to apply different styles based on device characteristics like screen width, height, orientation, and resolution.

### Basic Syntax

```css
@media media-type and (media-feature: value) {
    /* CSS rules */
}
```

### Common Media Types

```css
@media screen { }        /* Computer screens */
@media print { }         /* Printers */
@media speech { }        /* Screen readers */
@media all { }           /* All devices */
```

### Screen Size Breakpoints

```css
/* Mobile First Approach */
/* Base styles for mobile */

/* Small tablets and up */
@media (min-width: 768px) {
    .container {
        max-width: 750px;
    }
}

/* Medium tablets and up */
@media (min-width: 992px) {
    .container {
        max-width: 970px;
    }
}

/* Large desktops and up */
@media (min-width: 1200px) {
    .container {
        max-width: 1170px;
    }
}
```

### Common Breakpoints

```css
/* Extra small devices (phones, 576px and down) */
@media (max-width: 575.98px) { }

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { }
```

## Responsive Units

### Relative Units

```css
.element {
    /* Viewport units */
    width: 100vw;        /* 100% of viewport width */
    height: 100vh;       /* 100% of viewport height */
    font-size: 4vw;      /* 4% of viewport width */
    
    /* Relative to parent */
    width: 50%;          /* 50% of parent width */
    font-size: 1.2em;    /* 1.2 times parent font size */
    
    /* Relative to root */
    font-size: 1.5rem;   /* 1.5 times root font size */
    
    /* Flexible units */
    width: 50ch;         /* 50 characters wide */
    width: 50ex;         /* 50 x-heights wide */
}
```

### Flexible Grid System

```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.item {
    background: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
}
```

## Flexbox for Responsiveness

Flexbox is excellent for creating responsive layouts that adapt to different screen sizes.

### Basic Flexbox Layout

```css
.flex-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.flex-item {
    flex: 1 1 300px; /* grow, shrink, basis */
    min-width: 0;    /* prevents overflow */
}
```

### Responsive Flexbox

```css
.responsive-flex {
    display: flex;
    flex-direction: column;
}

@media (min-width: 768px) {
    .responsive-flex {
        flex-direction: row;
    }
}
```

## CSS Grid for Responsiveness

CSS Grid provides powerful 2D layout capabilities for responsive design.

### Basic Grid Layout

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
}

@media (min-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 1024px) {
    .grid-container {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
```

### Auto-Fit Grid

```css
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

## Responsive Images

### Fluid Images

```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

### Responsive Background Images

```css
.hero {
    background-image: url('small-image.jpg');
    background-size: cover;
    background-position: center;
}

@media (min-width: 768px) {
    .hero {
        background-image: url('medium-image.jpg');
    }
}

@media (min-width: 1200px) {
    .hero {
        background-image: url('large-image.jpg');
    }
}
```

## Responsive Typography

### Fluid Typography

```css
html {
    font-size: 16px;
}

h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    line-height: 1.2;
}

p {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    line-height: 1.6;
}
```

### Responsive Text Scaling

```css
.text-responsive {
    font-size: 1rem;
}

@media (min-width: 768px) {
    .text-responsive {
        font-size: 1.1rem;
    }
}

@media (min-width: 1024px) {
    .text-responsive {
        font-size: 1.2rem;
    }
}
```

## Mobile-First Approach

Start with mobile styles and progressively enhance for larger screens.

```css
/* Mobile styles (default) */
.container {
    padding: 15px;
    margin: 10px;
}

.button {
    width: 100%;
    padding: 15px;
    font-size: 16px;
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        padding: 30px;
        margin: 20px;
    }
    
    .button {
        width: auto;
        padding: 12px 24px;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

## Final Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Design Example</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: 40px 20px;
            margin-bottom: 30px;
        }
        
        .header h1 {
            font-size: clamp(2rem, 5vw, 3.5rem);
            margin-bottom: 15px;
        }
        
        .header p {
            font-size: clamp(1rem, 2.5vw, 1.2rem);
            opacity: 0.9;
        }
        
        .grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .card {
            background: white;
            border-radius: 10px;
            padding: 25px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        .card h3 {
            color: #2c3e50;
            margin-bottom: 15px;
            font-size: 1.3rem;
        }
        
        .card p {
            color: #666;
            line-height: 1.6;
        }
        
        .flex-container {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .flex-item {
            background: #ecf0f1;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }
        
        .button {
            background: #3498db;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        
        .button:hover {
            background: #2980b9;
        }
        
        /* Tablet and up */
        @media (min-width: 768px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .flex-container {
                flex-direction: row;
            }
            
            .flex-item {
                flex: 1;
            }
        }
        
        /* Desktop and up */
        @media (min-width: 1024px) {
            .grid {
                grid-template-columns: repeat(3, 1fr);
            }
            
            .container {
                padding: 40px;
            }
        }
        
        /* Large screens */
        @media (min-width: 1200px) {
            .container {
                padding: 60px;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Responsive Design</h1>
        <p>This page adapts to different screen sizes</p>
    </div>
    
    <div class="container">
        <div class="grid">
            <div class="card">
                <h3>Mobile First</h3>
                <p>Design for mobile devices first, then progressively enhance for larger screens. This approach ensures better performance and user experience.</p>
            </div>
            
            <div class="card">
                <h3>Flexible Grids</h3>
                <p>Use CSS Grid and Flexbox to create layouts that automatically adapt to different screen sizes and orientations.</p>
            </div>
            
            <div class="card">
                <h3>Media Queries</h3>
                <p>Apply different styles based on device characteristics like screen width, height, and orientation using CSS media queries.</p>
            </div>
        </div>
        
        <div class="flex-container">
            <div class="flex-item">
                <h3>Small Screen</h3>
                <p>Content stacks vertically</p>
            </div>
            
            <div class="flex-item">
                <h3>Medium Screen</h3>
                <p>Content flows horizontally</p>
            </div>
            
            <div class="flex-item">
                <h3>Large Screen</h3>
                <p>Optimal spacing and layout</p>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
            <button class="button">Learn More</button>
        </div>
    </div>
</body>
</html>
```

## Key Points to Remember

1. **Start with mobile-first approach**
2. **Use relative units (%, em, rem, vw, vh)**
3. **Implement flexible grids with CSS Grid and Flexbox**
4. **Use media queries for different screen sizes**
5. **Make images and media responsive**
6. **Test on various devices and screen sizes**
7. **Consider touch targets for mobile devices**
8. **Optimize performance for mobile networks**
9. **Use viewport meta tag for proper scaling**
10. **Focus on content hierarchy and readability**
