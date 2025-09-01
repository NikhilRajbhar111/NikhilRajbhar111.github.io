# CSS Transforms & Transitions

---

## CSS Transforms

CSS transforms allow you to modify the coordinate space of CSS visual formatting model. This enables you to move, rotate, scale, and skew elements.

### Transform Functions

#### Translate
Moves an element from its current position.

```css
.translate {
    transform: translateX(50px);     /* Move right */
    transform: translateY(-20px);    /* Move up */
    transform: translate(50px, -20px); /* Move right and up */
    transform: translateZ(100px);    /* Move forward (3D) */
}
```

#### Rotate
Rotates an element around a specified point.

```css
.rotate {
    transform: rotate(45deg);        /* Rotate 45 degrees */
    transform: rotateX(45deg);       /* Rotate around X-axis */
    transform: rotateY(45deg);       /* Rotate around Y-axis */
    transform: rotateZ(45deg);       /* Rotate around Z-axis */
}
```

#### Scale
Scales an element by the specified factors.

```css
.scale {
    transform: scale(2);             /* Scale to 2x size */
    transform: scaleX(1.5);          /* Scale horizontally */
    transform: scaleY(0.8);          /* Scale vertically */
    transform: scale(1.5, 0.8);     /* Scale both axes */
}
```

#### Skew
Skews an element by the specified angles.

```css
.skew {
    transform: skew(20deg);          /* Skew both axes */
    transform: skewX(20deg);         /* Skew horizontally */
    transform: skewY(20deg);         /* Skew vertically */
    transform: skew(20deg, 10deg);  /* Skew both axes */
}
```

### Multiple Transforms

You can combine multiple transforms in a single declaration.

```css
.multiple {
    transform: translate(50px, 20px) rotate(45deg) scale(1.2);
}
```

### Transform Origin

Controls the point around which transformations are applied.

```css
.transform-origin {
    transform-origin: center;        /* Default */
    transform-origin: top left;      /* Top-left corner */
    transform-origin: 50% 50%;      /* Center */
    transform-origin: 0 0;          /* Top-left corner */
}
```

## CSS Transitions

CSS transitions provide a way to control animation speed when changing CSS properties.

### Transition Properties

#### transition-property
Specifies which properties to transition.

```css
.transition {
    transition-property: all;                    /* All properties */
    transition-property: background-color;       /* Specific property */
    transition-property: transform, opacity;     /* Multiple properties */
}
```

#### transition-duration
Sets how long the transition takes.

```css
.duration {
    transition-duration: 0.3s;      /* 0.3 seconds */
    transition-duration: 300ms;     /* 300 milliseconds */
    transition-duration: 0.5s, 0.2s; /* Different durations for multiple properties */
}
```

#### transition-timing-function
Controls the speed curve of the transition.

```css
.timing {
    transition-timing-function: ease;            /* Default */
    transition-timing-function: linear;          /* Constant speed */
    transition-timing-function: ease-in;         /* Slow start */
    transition-timing-function: ease-out;        /* Slow end */
    transition-timing-function: ease-in-out;     /* Slow start and end */
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Custom */
}
```

#### transition-delay
Sets a delay before the transition starts.

```css
.delay {
    transition-delay: 0s;            /* No delay */
    transition-delay: 0.5s;          /* 0.5 second delay */
    transition-delay: 0.2s, 0.5s;   /* Different delays for multiple properties */
}
```

### Transition Shorthand

The `transition` property combines all transition properties in one declaration.

```css
.shorthand {
    transition: all 0.3s ease 0s;   /* property duration timing-function delay */
    transition: transform 0.5s ease-in-out;
    transition: background-color 0.2s ease, transform 0.3s ease;
}
```

## Common Use Cases

### Hover Effects

```css
.button {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

### Smooth Scaling

```css
.card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

### Rotation Animation

```css
.icon {
    display: inline-block;
    transition: transform 0.3s ease;
}

.icon:hover {
    transform: rotate(180deg);
}
```

## Performance Considerations

### Hardware Acceleration

Use `transform` and `opacity` for better performance as they trigger hardware acceleration.

```css
.optimized {
    /* Good - triggers hardware acceleration */
    transform: translateX(100px);
    opacity: 0.8;
    
    /* Avoid - can cause layout recalculations */
    left: 100px;
    background-color: rgba(255, 0, 0, 0.8);
}
```

### Will-change Property

Hint to browsers about which properties will change.

```css
.optimized {
    will-change: transform;
    transition: transform 0.3s ease;
}
```

## Final Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Transforms & Transitions</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .container {
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            max-width: 800px;
            width: 100%;
        }
        
        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
        }
        
        .demo-section {
            margin: 30px 0;
            padding: 20px;
            border: 2px solid #ecf0f1;
            border-radius: 10px;
        }
        
        .demo-section h3 {
            color: #34495e;
            margin-bottom: 20px;
        }
        
        .transform-demo {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        .demo-box {
            width: 100px;
            height: 100px;
            background: #3498db;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .demo-box:hover {
            transform: scale(1.1);
        }
        
        .translate:hover {
            transform: translate(20px, -20px);
        }
        
        .rotate:hover {
            transform: rotate(45deg);
        }
        
        .scale:hover {
            transform: scale(1.5);
        }
        
        .skew:hover {
            transform: skew(20deg);
        }
        
        .transition-demo {
            text-align: center;
        }
        
        .animated-button {
            background: #e74c3c;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 18px;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
        }
        
        .animated-button:hover {
            background: #c0392b;
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
        }
        
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        
        .card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }
        
        .card:hover {
            transform: translateY(-10px);
            border-color: #3498db;
            box-shadow: 0 8px 25px rgba(52, 152, 219, 0.2);
        }
        
        .card h4 {
            color: #2c3e50;
            margin-bottom: 10px;
        }
        
        .card p {
            color: #7f8c8d;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Transforms & Transitions</h1>
        
        <div class="demo-section">
            <h3>Transform Examples (Hover to see effects)</h3>
            <div class="transform-demo">
                <div class="demo-box translate">Translate</div>
                <div class="demo-box rotate">Rotate</div>
                <div class="demo-box scale">Scale</div>
                <div class="demo-box skew">Skew</div>
            </div>
        </div>
        
        <div class="demo-section">
            <h3>Transition Examples</h3>
            <div class="transition-demo">
                <button class="animated-button">Hover Me!</button>
            </div>
        </div>
        
        <div class="demo-section">
            <h3>Card Hover Effects</h3>
            <div class="card-grid">
                <div class="card">
                    <h4>Transform</h4>
                    <p>Move, rotate, scale, and skew elements</p>
                </div>
                <div class="card">
                    <h4>Transition</h4>
                    <p>Control animation speed and timing</p>
                </div>
                <div class="card">
                    <h4>Performance</h4>
                    <p>Hardware acceleration for smooth animations</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

## Key Points to Remember

1. **Transforms modify the coordinate space of elements**
2. **Common transform functions: translate, rotate, scale, skew**
3. **Transitions control animation speed when properties change**
4. **Use transform and opacity for better performance**
5. **Transition shorthand: property duration timing-function delay**
6. **Transform origin controls the transformation point**
7. **Multiple transforms can be combined in one declaration**
8. **Hardware acceleration improves animation performance**
9. **Will-change property hints browsers about upcoming changes**
10. **Always provide fallbacks for older browsers**
