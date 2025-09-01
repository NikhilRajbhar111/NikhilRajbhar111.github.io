// Comprehensive lesson data for the Web Development Interactive Course
const lessonData = {
    html: [
        {
            title: "Introduction to HTML",
            explanation: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using elements and tags. HTML elements are the building blocks of HTML pages, represented by tags enclosed in angle brackets.",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is my first HTML document.</p>
    <p>HTML is easy to learn and powerful for creating web pages.</p>
</body>
</html>`
        },
        {
            title: "Text Formatting Tags",
            explanation: "HTML provides various tags to format text content. These tags help emphasize important content, create visual hierarchy, and improve readability. Common formatting tags include bold, italic, underline, strikethrough, and more.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Text Formatting</title>
</head>
<body>
    <h1>Text Formatting Examples</h1>
    
    <p><b>Bold text</b> using &lt;b&gt; tag</p>
    <p><strong>Strong text</strong> using &lt;strong&gt; tag</p>
    <p><i>Italic text</i> using &lt;i&gt; tag</p>
    <p><em>Emphasized text</em> using &lt;em&gt; tag</p>
    <p><u>Underlined text</u> using &lt;u&gt; tag</p>
    <p><s>Strikethrough text</s> using &lt;s&gt; tag</p>
    <p><sub>Subscript</sub> and <sup>Superscript</sup></p>
    <p><small>Small text</small> and <mark>highlighted text</mark></p>
</body>
</html>`
        },
        {
            title: "Body and Font Tag",
            explanation: "The body tag contains all visible content of a web page. While the font tag is deprecated in HTML5, we can still demonstrate its usage. Modern web development uses CSS for styling, but understanding legacy tags helps with older code maintenance.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Body and Font Tags</title>
</head>
<body bgcolor="#f0f8ff" text="#333333">
    <h1>Welcome to My Website</h1>
    
    <font face="Arial" size="4" color="blue">
        This text uses the font tag (deprecated in HTML5)
    </font>
    
    <p style="font-family: Georgia; font-size: 18px; color: green;">
        This paragraph uses CSS styling (recommended approach)
    </p>
    
    <font size="2" color="red">Small red text</font><br>
    <font size="6" color="purple">Large purple text</font>
    
    <p>The body tag can have attributes like bgcolor and text for basic styling.</p>
</body>
</html>`
        },
        {
            title: "Lists in HTML",
            explanation: "HTML provides three types of lists: ordered lists (numbered), unordered lists (bulleted), and description lists. Lists are essential for organizing information in a structured and readable format.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>HTML Lists</title>
</head>
<body>
    <h1>Different Types of Lists</h1>
    
    <h2>Unordered List (Bulleted)</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
    </ul>
    
    <h2>Ordered List (Numbered)</h2>
    <ol>
        <li>Learn HTML basics</li>
        <li>Master CSS styling</li>
        <li>Study JavaScript programming</li>
        <li>Build projects</li>
    </ol>
    
    <h2>Description List</h2>
    <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language</dd>
        <dt>CSS</dt>
        <dd>Cascading Style Sheets</dd>
        <dt>JS</dt>
        <dd>JavaScript Programming Language</dd>
    </dl>
</body>
</html>`
        },
        {
            title: "Nested Lists in HTML",
            explanation: "Nested lists allow you to create hierarchical structures by placing one list inside another. This is useful for creating menus, table of contents, or any multi-level organization of information.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Nested Lists</title>
</head>
<body>
    <h1>Course Structure</h1>
    
    <ul>
        <li>Web Development Fundamentals
            <ul>
                <li>HTML Basics
                    <ol>
                        <li>Elements and Tags</li>
                        <li>Attributes</li>
                        <li>Document Structure</li>
                    </ol>
                </li>
                <li>CSS Styling
                    <ol>
                        <li>Selectors</li>
                        <li>Properties</li>
                        <li>Layout</li>
                    </ol>
                </li>
            </ul>
        </li>
        <li>JavaScript Programming
            <ul>
                <li>Variables and Data Types</li>
                <li>Functions and Events</li>
                <li>DOM Manipulation</li>
            </ul>
        </li>
    </ul>
</body>
</html>`
        },
        {
            title: "Image and Anchor Tags",
            explanation: "Images and links are fundamental elements of web pages. The img tag displays images, while the anchor tag creates hyperlinks. These elements make web pages interactive and visually appealing.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Images and Links</title>
</head>
<body>
    <h1>Images and Anchor Tags</h1>
    
    <h2>Image Examples</h2>
    <img src="https://via.placeholder.com/300x200/4CAF50/white?text=Sample+Image" 
         alt="Sample Image" 
         width="300" 
         height="200">
    
    <p>Image with different sizes:</p>
    <img src="https://via.placeholder.com/150x100/FF5722/white?text=Small" 
         alt="Small Image" 
         width="150" 
         height="100">
    
    <h2>Anchor Tag Examples</h2>
    <p><a href="https://www.w3.org/html/" target="_blank">Learn more about HTML</a></p>
    <p><a href="#section1">Jump to Section 1</a></p>
    <p><a href="mailto:contact@example.com">Send Email</a></p>
    <p><a href="tel:+1234567890">Call Us</a></p>
    
    <h2 id="section1">Section 1</h2>
    <p>This is the section referenced by the anchor link above.</p>
</body>
</html>`
        },
        {
            title: "Client Side Image Mapping",
            explanation: "Image maps allow you to create clickable areas within an image. This technique is useful for creating interactive graphics, navigation menus, or hotspot functionality on images.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Image Mapping</title>
</head>
<body>
    <h1>Client-Side Image Mapping</h1>
    
    <p>Click on different parts of the geometric shapes below:</p>
    
    <img src="https://via.placeholder.com/400x300/E3F2FD/1976D2?text=Click+Different+Areas" 
         alt="Clickable Areas" 
         usemap="#shapemap" 
         width="400" 
         height="300">
    
    <map name="shapemap">
        <area shape="rect" coords="50,50,150,150" 
              href="#rectangle" 
              alt="Rectangle Area"
              onclick="alert('You clicked the rectangle area!')">
        <area shape="circle" coords="300,100,50" 
              href="#circle" 
              alt="Circle Area"
              onclick="alert('You clicked the circle area!')">
        <area shape="poly" coords="200,200,250,250,150,250" 
              href="#triangle" 
              alt="Triangle Area"
              onclick="alert('You clicked the triangle area!')">
    </map>
    
    <h3 id="rectangle">Rectangle Section</h3>
    <p>This section is linked to the rectangular area of the image map.</p>
    
    <h3 id="circle">Circle Section</h3>
    <p>This section is linked to the circular area of the image map.</p>
    
    <h3 id="triangle">Triangle Section</h3>
    <p>This section is linked to the triangular area of the image map.</p>
</body>
</html>`
        },
        {
            title: "Tables in HTML",
            explanation: "HTML tables are used to display data in rows and columns. They consist of table, row, and cell elements. Tables are perfect for presenting structured data like schedules, price lists, or comparison charts.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>HTML Tables</title>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background-color: #4CAF50; color: white; }
        tr:nth-child(even) { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h1>Student Grade Report</h1>
    
    <table>
        <thead>
            <tr>
                <th>Student Name</th>
                <th>Subject</th>
                <th>Score</th>
                <th>Grade</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>Mathematics</td>
                <td>85</td>
                <td>A</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>Science</td>
                <td>92</td>
                <td>A+</td>
            </tr>
            <tr>
                <td>Bob Johnson</td>
                <td>History</td>
                <td>78</td>
                <td>B</td>
            </tr>
            <tr>
                <td>Alice Brown</td>
                <td>English</td>
                <td>88</td>
                <td>A</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`
        },
        {
            title: "Nested Tables in HTML",
            explanation: "Nested tables involve placing one table inside another table cell. While this technique was common in older web design, it's now mostly replaced by CSS for layout. However, understanding nested tables helps with legacy code and specific data presentation needs.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Nested Tables</title>
    <style>
        table { border-collapse: collapse; margin: 10px; }
        th, td { border: 1px solid #333; padding: 8px; }
        th { background-color: #4CAF50; color: white; }
        .inner-table { background-color: #f9f9f9; }
    </style>
</head>
<body>
    <h1>Company Organization</h1>
    
    <table>
        <tr>
            <th>Department</th>
            <th>Details</th>
        </tr>
        <tr>
            <td><strong>Engineering</strong></td>
            <td>
                <table class="inner-table">
                    <tr>
                        <th>Team</th>
                        <th>Members</th>
                    </tr>
                    <tr>
                        <td>Frontend</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Backend</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>DevOps</td>
                        <td>2</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td><strong>Marketing</strong></td>
            <td>
                <table class="inner-table">
                    <tr>
                        <th>Campaign</th>
                        <th>Budget</th>
                    </tr>
                    <tr>
                        <td>Digital</td>
                        <td>$50,000</td>
                    </tr>
                    <tr>
                        <td>Print</td>
                        <td>$25,000</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`
        },
        {
            title: "Forms in HTML",
            explanation: "HTML forms collect user input and send it to servers for processing. Forms contain various input elements like text fields, checkboxes, radio buttons, and submit buttons. They are essential for user interaction on websites.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>HTML Forms</title>
    <style>
        form { max-width: 500px; margin: 20px; }
        label { display: block; margin: 10px 0 5px 0; font-weight: bold; }
        input, textarea, select { width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 4px; }
        button { background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background-color: #45a049; }
    </style>
</head>
<body>
    <h1>Contact Us Form</h1>
    
    <form action="#" method="post">
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone">
        
        <label for="gender">Gender:</label>
        <input type="radio" name="gender" value="male" id="male">
        <label for="male" style="display:inline;">Male</label>
        <input type="radio" name="gender" value="female" id="female">
        <label for="female" style="display:inline;">Female</label>
        
        <label for="interests">Interests:</label>
        <input type="checkbox" name="interests" value="web" id="web">
        <label for="web" style="display:inline;">Web Development</label>
        <input type="checkbox" name="interests" value="mobile" id="mobile">
        <label for="mobile" style="display:inline;">Mobile Apps</label>
        
        <label for="country">Country:</label>
        <select id="country" name="country">
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="other">Other</option>
        </select>
        
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" placeholder="Enter your message here..."></textarea>
        
        <button type="submit">Send Message</button>
    </form>
</body>
</html>`
        },
        {
            title: "Forms with Table Layout",
            explanation: "Using tables to layout forms was a common practice in older web development. While CSS is now preferred for form layouts, understanding table-based form layouts helps with maintaining legacy code and provides precise control over form element positioning.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Form with Table Layout</title>
    <style>
        table { margin: 20px auto; border-collapse: collapse; }
        td { padding: 10px; }
        input, select, textarea { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
        .form-label { font-weight: bold; text-align: right; background-color: #f5f5f5; }
        .submit-btn { background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
        .submit-btn:hover { background-color: #45a049; }
    </style>
</head>
<body>
    <h1>Registration Form (Table Layout)</h1>
    
    <form action="#" method="post">
        <table border="1">
            <tr>
                <td class="form-label">First Name:</td>
                <td><input type="text" name="firstname" size="30" required></td>
            </tr>
            <tr>
                <td class="form-label">Last Name:</td>
                <td><input type="text" name="lastname" size="30" required></td>
            </tr>
            <tr>
                <td class="form-label">Date of Birth:</td>
                <td><input type="date" name="dob"></td>
            </tr>
            <tr>
                <td class="form-label">Email:</td>
                <td><input type="email" name="email" size="30" required></td>
            </tr>
            <tr>
                <td class="form-label">Password:</td>
                <td><input type="password" name="password" size="30" required></td>
            </tr>
            <tr>
                <td class="form-label">Education:</td>
                <td>
                    <select name="education">
                        <option value="highschool">High School</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">PhD</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="form-label">Skills:</td>
                <td>
                    <input type="checkbox" name="skills" value="html"> HTML
                    <input type="checkbox" name="skills" value="css"> CSS
                    <input type="checkbox" name="skills" value="js"> JavaScript
                </td>
            </tr>
            <tr>
                <td class="form-label">Bio:</td>
                <td><textarea name="bio" rows="4" cols="30" placeholder="Tell us about yourself..."></textarea></td>
            </tr>
            <tr>
                <td colspan="2" style="text-align: center;">
                    <button type="submit" class="submit-btn">Register Now</button>
                    <button type="reset" class="submit-btn" style="background-color: #f44336;">Clear Form</button>
                </td>
            </tr>
        </table>
    </form>
</body>
</html>`
        },
        {
            title: "Audio and Video Elements",
            explanation: "HTML5 introduced native audio and video elements for multimedia content. These elements can be controlled with JavaScript and styled with CSS. The controls attribute adds play/pause buttons, while without it, you need custom controls.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Audio and Video Elements</title>
    <style>
        .media-container { margin: 20px 0; }
        video, audio { max-width: 100%; border: 2px solid #ddd; border-radius: 8px; }
        .custom-controls { margin: 10px 0; }
        button { margin: 5px; padding: 8px 15px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background: #45a049; }
    </style>
</head>
<body>
    <h1>Audio and Video in HTML5</h1>
    
    <div class="media-container">
        <h2>Video with Controls</h2>
        <video width="400" height="300" controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
            <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
            Your browser does not support the video tag.
        </video>
    </div>
    
    <div class="media-container">
        <h2>Video without Controls (Custom Controls)</h2>
        <video id="customVideo" width="400" height="300">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="custom-controls">
            <button onclick="document.getElementById('customVideo').play()">Play</button>
            <button onclick="document.getElementById('customVideo').pause()">Pause</button>
            <button onclick="document.getElementById('customVideo').volume += 0.1">Volume Up</button>
            <button onclick="document.getElementById('customVideo').volume -= 0.1">Volume Down</button>
        </div>
    </div>
    
    <div class="media-container">
        <h2>Audio with Controls</h2>
        <audio controls>
            <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
            <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
    
    <div class="media-container">
        <h2>Audio without Controls</h2>
        <audio id="customAudio">
            <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
            <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <div class="custom-controls">
            <button onclick="document.getElementById('customAudio').play()">Play Audio</button>
            <button onclick="document.getElementById('customAudio').pause()">Stop Audio</button>
        </div>
    </div>
</body>
</html>`
        },
        {
            title: "Marquee and Iframe Tags",
            explanation: "The marquee tag creates scrolling text (deprecated but still functional), while iframe embeds external content like websites, videos, or documents. These elements add dynamic and embedded content to web pages.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Marquee and Iframe</title>
    <style>
        .marquee-container { background: #f0f8ff; padding: 10px; margin: 15px 0; border: 2px solid #4CAF50; }
        iframe { border: 2px solid #ddd; border-radius: 8px; margin: 10px 0; }
        .iframe-container { margin: 20px 0; }
        h2 { color: #333; }
    </style>
</head>
<body>
    <h1>Marquee and Iframe Examples</h1>
    
    <h2>Marquee Examples (Scrolling Text)</h2>
    <div class="marquee-container">
        <marquee>🌟 Welcome to our website! This text scrolls from right to left! 🌟</marquee>
    </div>
    
    <div class="marquee-container">
        <marquee direction="up" height="60px">📢 This text scrolls upward!</marquee>
    </div>
    
    <div class="marquee-container">
        <marquee direction="down" height="60px" scrolldelay="200">⬇️ This text scrolls downward slowly!</marquee>
    </div>
    
    <div class="marquee-container">
        <marquee behavior="alternate" bgcolor="#ffff99">↔️ This text bounces back and forth!</marquee>
    </div>
    
    <h2>Iframe Examples</h2>
    <div class="iframe-container">
        <h3>Embedded Website</h3>
        <iframe src="https://www.w3schools.com/html/html_iframe.asp" 
                width="600" 
                height="400"
                title="W3Schools HTML Iframe Tutorial">
        </iframe>
    </div>
    
    <div class="iframe-container">
        <h3>Embedded Video</h3>
        <iframe width="560" 
                height="315" 
                src="https://www.youtube.com/embed/UB1O30fR-EE" 
                title="HTML Tutorial Video"
                frameborder="0" 
                allowfullscreen>
        </iframe>
    </div>
    
    <div class="iframe-container">
        <h3>Embedded Map</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.682853059621!2d-73.98784368459391!3d40.74844797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959887345!5m2!1sen!2sus" 
                width="600" 
                height="300" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">
        </iframe>
    </div>
    
    <p><strong>Note:</strong> The marquee tag is deprecated in HTML5 but still works in most browsers. Use CSS animations for modern scrolling effects.</p>
</body>
</html>`
        }
    ],

    css: [
        {
            title: "Introduction to CSS",
            explanation: "CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the presentation of HTML elements, including colors, fonts, spacing, and positioning. CSS can be applied inline, internally, or externally through separate files.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Introduction to CSS</title>
    <style>
        /* Internal CSS */
        .header {
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 20px;
            font-family: Arial, sans-serif;
        }
        
        .content {
            margin: 20px;
            padding: 15px;
            background-color: #f9f9f9;
            border-radius: 8px;
            border-left: 4px solid #4CAF50;
        }
        
        #special-text {
            color: #e74c3c;
            font-weight: bold;
            font-size: 18px;
        }
        
        p {
            line-height: 1.6;
            color: #333;
        }
        
        .highlight {
            background-color: yellow;
            padding: 2px 4px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Welcome to CSS Styling</h1>
        <p>Making web pages beautiful and functional</p>
    </div>
    
    <div class="content">
        <h2>What is CSS?</h2>
        <p>CSS stands for <span class="highlight">Cascading Style Sheets</span>. It's a language used to describe the presentation of HTML documents.</p>
        
        <p id="special-text">This paragraph has a special ID and custom styling!</p>
        
        <p>CSS can be applied in three ways:</p>
        <ul>
            <li><strong>Inline CSS:</strong> <span style="color: blue; font-weight: bold;">Directly in HTML elements</span></li>
            <li><strong>Internal CSS:</strong> Within &lt;style&gt; tags in the head section</li>
            <li><strong>External CSS:</strong> In separate .css files</li>
        </ul>
        
        <p>CSS makes web development efficient and maintains consistency across pages!</p>
    </div>
</body>
</html>`
        },
        {
            title: "Background Properties",
            explanation: "CSS background properties control the background appearance of elements. You can set colors, images, gradients, positioning, and repetition patterns. These properties are essential for creating visually appealing web designs.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Background Properties</title>
    <style>
        .bg-color {
            background-color: #3498db;
            color: white;
            padding: 20px;
            margin: 10px;
            text-align: center;
        }
        
        .bg-image {
            background-image: url('https://via.placeholder.com/200x200/27ae60/ffffff?text=Background');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            height: 200px;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        
        .bg-gradient {
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            padding: 30px;
            color: white;
            text-align: center;
            margin: 10px;
            border-radius: 10px;
        }
        
        .bg-multiple {
            background: 
                url('https://via.placeholder.com/50x50/e74c3c/ffffff?text=★') no-repeat 10px 10px,
                linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            background-size: 50px 50px, cover;
            padding: 60px 20px;
            color: white;
            margin: 10px;
            text-align: center;
        }
        
        .bg-attachment {
            background-image: url('https://via.placeholder.com/400x300/2c3e50/ffffff?text=Fixed+Background');
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
            font-weight: bold;
            margin: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
        }
    </style>
</head>
<body>
    <h1>CSS Background Properties Examples</h1>
    
    <div class="bg-color">
        <h2>Background Color</h2>
        <p>This div has a solid blue background color using background-color property.</p>
    </div>
    
    <div class="bg-image">
        <div>
            <h2>Background Image</h2>
            <p>This div uses background-image with center positioning and cover sizing.</p>
        </div>
    </div>
    
    <div class="bg-gradient">
        <h2>CSS Gradient Background</h2>
        <p>This div has a beautiful linear gradient background from red to teal.</p>
    </div>
    
    <div class="bg-multiple">
        <h2>Multiple Backgrounds</h2>
        <p>This div combines a small star image with a gradient background.</p>
    </div>
    
    <div class="bg-attachment">
        <div>
            <h2>Fixed Background</h2>
            <p>This background stays fixed when you scroll!</p>
        </div>
    </div>
    
    <div style="height: 200px; margin: 10px; padding: 20px; background-color: #f8f9fa;">
        <p>Scroll up and down to see the fixed background effect on the previous div!</p>
        <p>Background properties offer endless possibilities for creative designs.</p>
    </div>
</body>
</html>`
        },
        {
            title: "Font Properties",
            explanation: "CSS font properties control the appearance of text including family, size, weight, style, and spacing. These properties are crucial for typography and readability, helping create hierarchy and visual appeal in your content.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Font Properties</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f5f5f5;
        }
        
        .font-family-demo {
            margin: 20px 0;
            padding: 15px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .serif { font-family: "Times New Roman", serif; }
        .sans-serif { font-family: Arial, Helvetica, sans-serif; }
        .monospace { font-family: "Courier New", monospace; }
        .cursive { font-family: cursive; }
        
        .font-size-demo h3 { margin-bottom: 10px; color: #2c3e50; }
        .size-12 { font-size: 12px; }
        .size-16 { font-size: 16px; }
        .size-20 { font-size: 20px; }
        .size-24 { font-size: 24px; }
        .size-2em { font-size: 2em; }
        .size-1-5rem { font-size: 1.5rem; }
        
        .font-weight-demo p {
            margin: 8px 0;
            font-size: 18px;
        }
        .weight-100 { font-weight: 100; }
        .weight-400 { font-weight: 400; }
        .weight-700 { font-weight: 700; }
        .weight-900 { font-weight: 900; }
        
        .font-style-demo p {
            margin: 8px 0;
            font-size: 16px;
        }
        .italic { font-style: italic; }
        .oblique { font-style: oblique; }
        
        .text-decoration-demo p {
            margin: 8px 0;
            font-size: 16px;
        }
        .underline { text-decoration: underline; }
        .overline { text-decoration: overline; }
        .line-through { text-decoration: line-through; }
        .no-decoration { text-decoration: none; color: blue; }
        
        .text-transform-demo p {
            margin: 8px 0;
            font-size: 16px;
        }
        .uppercase { text-transform: uppercase; }
        .lowercase { text-transform: lowercase; }
        .capitalize { text-transform: capitalize; }
        
        .letter-spacing-demo p {
            margin: 8px 0;
            font-size: 16px;
        }
        .spacing-2 { letter-spacing: 2px; }
        .spacing-4 { letter-spacing: 4px; }
        .spacing-neg1 { letter-spacing: -1px; }
    </style>
</head>
<body>
    <h1 style="text-align: center; color: #2c3e50;">CSS Font Properties Showcase</h1>
    
    <div class="font-family-demo">
        <h2>Font Family Examples</h2>
        <p class="serif">This text uses Times New Roman serif font family.</p>
        <p class="sans-serif">This text uses Arial sans-serif font family.</p>
        <p class="monospace">This text uses Courier New monospace font family.</p>
        <p class="cursive">This text uses cursive font family.</p>
    </div>
    
    <div class="font-family-demo font-size-demo">
        <h2>Font Size Examples</h2>
        <p class="size-12">12px font size - Small text for fine print</p>
        <p class="size-16">16px font size - Standard body text size</p>
        <p class="size-20">20px font size - Larger body text</p>
        <p class="size-24">24px font size - Heading size text</p>
        <p class="size-2em">2em font size - Relative to parent element</p>
        <p class="size-1-5rem">1.5rem font size - Relative to root element</p>
    </div>
    
    <div class="font-family-demo font-weight-demo">
        <h2>Font Weight Examples</h2>
        <p class="weight-100">Font weight 100 - Ultra light</p>
        <p class="weight-400">Font weight 400 - Normal/Regular</p>
        <p class="weight-700">Font weight 700 - Bold</p>
        <p class="weight-900">Font weight 900 - Ultra bold</p>
    </div>
    
    <div class="font-family-demo font-style-demo">
        <h2>Font Style Examples</h2>
        <p>Normal text style (default)</p>
        <p class="italic">Italic font style</p>
        <p class="oblique">Oblique font style</p>
    </div>
    
    <div class="font-family-demo text-decoration-demo">
        <h2>Text Decoration Examples</h2>
        <p class="underline">Underlined text</p>
        <p class="overline">Overlined text</p>
        <p class="line-through">Line-through text</p>
        <a href="#" class="no-decoration">Link with no decoration</a>
    </div>
    
    <div class="font-family-demo text-transform-demo">
        <h2>Text Transform Examples</h2>
        <p class="uppercase">this text is transformed to uppercase</p>
        <p class="lowercase">THIS TEXT IS TRANSFORMED TO LOWERCASE</p>
        <p class="capitalize">this text is transformed to capitalize each word</p>
    </div>
    
    <div class="font-family-demo letter-spacing-demo">
        <h2>Letter Spacing Examples</h2>
        <p>Normal letter spacing</p>
        <p class="spacing-2">L e t t e r   s p a c i n g   2px</p>
        <p class="spacing-4">L  e  t  t  e  r    s  p  a  c  i  n  g    4px</p>
        <p class="spacing-neg1">Condensed letter spacing -1px</p>
    </div>
</body>
</html>`
        },
        {
            title: "Display Property",
            explanation: "The CSS display property determines how elements are rendered on the page. It controls whether elements are block, inline, flex, grid, or hidden. Understanding display properties is fundamental for layout and positioning.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Display Property</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f8f9fa;
        }
        
        .demo-container {
            margin: 20px 0;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .demo-container h3 {
            margin-top: 0;
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 5px;
        }
        
        /* Display Block */
        .block-element {
            display: block;
            background-color: #e74c3c;
            color: white;
            padding: 10px;
            margin: 5px 0;
            text-align: center;
        }
        
        /* Display Inline */
        .inline-element {
            display: inline;
            background-color: #2ecc71;
            color: white;
            padding: 5px 10px;
            margin: 2px;
        }
        
        /* Display Inline-Block */
        .inline-block-element {
            display: inline-block;
            background-color: #9b59b6;
            color: white;
            padding: 10px;
            margin: 5px;
            width: 150px;
            text-align: center;
        }
        
        /* Display None */
        .hidden-element {
            display: none;
        }
        
        /* Display Flex */
        .flex-container {
            display: flex;
            background-color: #34495e;
            padding: 10px;
            gap: 10px;
        }
        
        .flex-item {
            background-color: #3498db;
            color: white;
            padding: 20px;
            flex: 1;
            text-align: center;
            border-radius: 4px;
        }
        
        /* Display Grid */
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            background-color: #34495e;
            padding: 10px;
        }
        
        .grid-item {
            background-color: #e67e22;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 4px;
        }
        
        /* Toggle Demo */
        .toggle-demo {
            background-color: #f39c12;
            color: white;
            padding: 15px;
            margin: 10px 0;
            text-align: center;
            cursor: pointer;
            border-radius: 4px;
            transition: all 0.3s ease;
        }
        
        .toggle-demo:hover {
            background-color: #e67e22;
            transform: scale(1.02);
        }
    </style>
</head>
<body>
    <h1 style="text-align: center; color: #2c3e50;">CSS Display Property Examples</h1>
    
    <div class="demo-container">
        <h3>Display: Block</h3>
        <p>Block elements take up the full width available and start on a new line:</p>
        <div class="block-element">Block Element 1</div>
        <div class="block-element">Block Element 2</div>
        <div class="block-element">Block Element 3</div>
    </div>
    
    <div class="demo-container">
        <h3>Display: Inline</h3>
        <p>Inline elements only take up as much width as necessary and don't start on new lines:</p>
        <span class="inline-element">Inline 1</span>
        <span class="inline-element">Inline 2</span>
        <span class="inline-element">Inline 3</span>
        <span class="inline-element">Inline 4</span>
    </div>
    
    <div class="demo-container">
        <h3>Display: Inline-Block</h3>
        <p>Inline-block elements behave like inline but can have width and height:</p>
        <div class="inline-block-element">Inline-Block 1</div>
        <div class="inline-block-element">Inline-Block 2</div>
        <div class="inline-block-element">Inline-Block 3</div>
    </div>
    
    <div class="demo-container">
        <h3>Display: Flex</h3>
        <p>Flexbox layout for flexible and responsive designs:</p>
        <div class="flex-container">
            <div class="flex-item">Flex Item 1</div>
            <div class="flex-item">Flex Item 2</div>
            <div class="flex-item">Flex Item 3</div>
        </div>
    </div>
    
    <div class="demo-container">
        <h3>Display: Grid</h3>
        <p>CSS Grid for two-dimensional layout:</p>
        <div class="grid-container">
            <div class="grid-item">Grid Item 1</div>
            <div class="grid-item">Grid Item 2</div>
            <div class="grid-item">Grid Item 3</div>
            <div class="grid-item">Grid Item 4</div>
            <div class="grid-item">Grid Item 5</div>
            <div class="grid-item">Grid Item 6</div>
        </div>
    </div>
    
    <div class="demo-container">
        <h3>Display: None (Toggle Demo)</h3>
        <p>Click the button to toggle visibility:</p>
        <div class="toggle-demo" onclick="toggleVisibility()">
            Click me to toggle the element below
        </div>
        <div id="toggleElement" class="block-element">
            This element can be hidden and shown using display: none
        </div>
    </div>
    
    <script>
        function toggleVisibility() {
            const element = document.getElementById('toggleElement');
            if (element.style.display === 'none') {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        }
    </script>
</body>
</html>`
        },
        {
            title: "Position Property",
            explanation: "The CSS position property specifies how elements are positioned in the document. The main values are static (default), relative, absolute, fixed, and sticky. Each type affects how elements interact with the document flow and other elements.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Position Property</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
            height: 200vh; /* Make page scrollable */
        }
        
        .demo-container {
            margin: 20px 0;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: relative;
            min-height: 200px;
        }
        
        h1, h3 {
            color: #2c3e50;
        }
        
        /* Static Position (Default) */
        .static-element {
            position: static;
            background-color: #3498db;
            color: white;
            padding: 15px;
            margin: 10px;
            text-align: center;
            border-radius: 4px;
        }
        
        /* Relative Position */
        .relative-parent {
            position: relative;
            background-color: #ecf0f1;
            padding: 20px;
            border: 2px dashed #95a5a6;
        }
        
        .relative-element {
            position: relative;
            top: 20px;
            left: 30px;
            background-color: #e74c3c;
            color: white;
            padding: 15px;
            display: inline-block;
            border-radius: 4px;
        }
        
        /* Absolute Position */
        .absolute-parent {
            position: relative;
            background-color: #ecf0f1;
            padding: 20px;
            border: 2px dashed #95a5a6;
            height: 150px;
        }
        
        .absolute-element {
            position: absolute;
            top: 30px;
            right: 20px;
            background-color: #2ecc71;
            color: white;
            padding: 15px;
            border-radius: 4px;
            width: 120px;
            text-align: center;
        }
        
        /* Fixed Position */
        .fixed-element {
            position: fixed;
            top: 10px;
            right: 10px;
            background-color: #9b59b6;
            color: white;
            padding: 10px 15px;
            border-radius: 4px;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        
        /* Sticky Position */
        .sticky-element {
            position: sticky;
            top: 0;
            background-color: #f39c12;
            color: white;
            padding: 15px;
            text-align: center;
            margin: 20px 0;
            border-radius: 4px;
            z-index: 100;
        }
        
        /* Z-index Demo */
        .z-index-container {
            position: relative;
            height: 200px;
        }
        
        .z1 {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: #e74c3c;
            width: 100px;
            height: 100px;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            border-radius: 4px;
        }
        
        .z2 {
            position: absolute;
            top: 50px;
            left: 50px;
            background-color: #3498db;
            width: 100px;
            height: 100px;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            border-radius: 4px;
        }
        
        .z3 {
            position: absolute;
            top: 80px;
            left: 80px;
            background-color: #2ecc71;
            width: 100px;
            height: 100px;
            z-index: 3;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="fixed-element">
        Fixed Element<br>
        (Always visible)
    </div>
    
    <h1 style="text-align: center;">CSS Position Property Examples</h1>
    
    <div class="demo-container">
        <h3>Position: Static (Default)</h3>
        <p>Static elements follow the normal document flow:</p>
        <div class="static-element">Static Element 1</div>
        <div class="static-element">Static Element 2</div>
    </div>
    
    <div class="demo-container">
        <h3>Position: Relative</h3>
        <p>Relative elements are positioned relative to their normal position:</p>
        <div class="relative-parent">
            <p>This is the parent container (position: relative)</p>
            <div class="relative-element">
                Relative Element<br>
                (moved 20px down, 30px right)
            </div>
        </div>
    </div>
    
    <div class="demo-container">
        <h3>Position: Absolute</h3>
        <p>Absolute elements are positioned relative to their nearest positioned parent:</p>
        <div class="absolute-parent">
            <p>This is the parent container (position: relative)</p>
            <div class="absolute-element">
                Absolute Element<br>
                (30px from top, 20px from right)
            </div>
        </div>
    </div>
    
    <div class="sticky-element">
        <strong>Sticky Element</strong> - This stays at the top when you scroll past it!
    </div>
    
    <div class="demo-container">
        <h3>Z-Index Stacking</h3>
        <p>Z-index controls the stacking order of positioned elements:</p>
        <div class="z-index-container">
            <div class="z1">Z-Index: 1</div>
            <div class="z2">Z-Index: 2</div>
            <div class="z3">Z-Index: 3</div>
        </div>
    </div>
    
    <div class="demo-container">
        <h3>Scroll to Test Position Effects</h3>
        <p>Scroll up and down to see how different position values behave:</p>
        <ul>
            <li><strong>Fixed Element:</strong> Stays in the same position relative to the viewport</li>
            <li><strong>Sticky Element:</strong> Scrolls normally until it hits the top, then sticks</li>
            <li><strong>Static/Relative Elements:</strong> Scroll with the page content</li>
            <li><strong>Absolute Elements:</strong> Move with their positioned parent</li>
        </ul>
        
        <div style="height: 300px; background: linear-gradient(45deg, #667eea, #764ba2); margin: 20px 0; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; border-radius: 8px;">
            Keep Scrolling!
        </div>
        
        <p>The position property is fundamental for creating layouts, overlays, navigation bars, and interactive UI elements. Each position value serves different use cases in modern web development.</p>
    </div>
</body>
</html>`
        },
        {
            title: "CSS Animation",
            explanation: "CSS animations allow elements to gradually change from one style to another without JavaScript. They use keyframes to define the animation sequence and properties like duration, timing, and iteration. Animations enhance user experience and add visual appeal to web pages.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Animations</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .demo-container {
            margin: 20px 0;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.95);
            border-radius: 10px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        h1 {
            text-align: center;
            color: white;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
            from { text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
            to { text-shadow: 2px 2px 20px rgba(255,255,255,0.8); }
        }
        
        /* Bounce Animation */
        .bounce {
            width: 80px;
            height: 80px;
            background-color: #e74c3c;
            border-radius: 50%;
            animation: bounce 2s infinite;
            margin: 20px auto;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-40px);
            }
            60% {
                transform: translateY(-20px);
            }
        }
        
        /* Rotation Animation */
        .rotate {
            width: 100px;
            height: 100px;
            background: linear-gradient(45deg, #3498db, #2ecc71);
            margin: 20px auto;
            animation: rotate 3s linear infinite;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        /* Pulse Animation */
        .pulse {
            width: 120px;
            height: 120px;
            background-color: #9b59b6;
            border-radius: 50%;
            animation: pulse 1.5s ease-in-out infinite;
            margin: 20px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
        }
        
        /* Slide In Animation */
        .slide-in {
            background-color: #f39c12;
            color: white;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            animation: slideIn 2s ease-out;
            text-align: center;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(-100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        /* Fade In Animation */
        .fade-in {
            background-color: #34495e;
            color: white;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            animation: fadeIn 3s ease-in;
            text-align: center;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        /* Hover Animations */
        .hover-button {
            background-color: #2ecc71;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            margin: 10px;
            transition: all 0.3s ease;
            display: inline-block;
            text-decoration: none;
        }
        
        .hover-button:hover {
            background-color: #27ae60;
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        
        /* Loading Spinner */
        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 20px auto;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Wave Animation */
        .wave {
            display: inline-block;
            margin: 0 5px;
            animation: wave 1s ease-in-out infinite;
            font-size: 2em;
        }
        
        .wave:nth-child(1) { animation-delay: 0s; }
        .wave:nth-child(2) { animation-delay: 0.1s; }
        .wave:nth-child(3) { animation-delay: 0.2s; }
        .wave:nth-child(4) { animation-delay: 0.3s; }
        .wave:nth-child(5) { animation-delay: 0.4s; }
        
        @keyframes wave {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-20px); }
        }
        
        /* Heartbeat Animation */
        .heartbeat {
            color: #e74c3c;
            font-size: 3em;
            animation: heartbeat 1.5s ease-in-out infinite;
            text-align: center;
        }
        
        @keyframes heartbeat {
            0% { transform: scale(1); }
            14% { transform: scale(1.1); }
            28% { transform: scale(1); }
            42% { transform: scale(1.1); }
            70% { transform: scale(1); }
        }
    </style>
</head>
<body>
    <h1>🎨 CSS Animation Showcase 🎨</h1>
    
    <div class="demo-container">
        <h3>Bounce Animation</h3>
        <p>A bouncing ball effect using transform and keyframes:</p>
        <div class="bounce"></div>
    </div>
    
    <div class="demo-container">
        <h3>Rotation Animation</h3>
        <p>Continuous 360-degree rotation:</p>
        <div class="rotate">ROTATE</div>
    </div>
    
    <div class="demo-container">
        <h3>Pulse Animation</h3>
        <p>Scaling animation with opacity changes:</p>
        <div class="pulse">PULSE</div>
    </div>
    
    <div class="demo-container">
        <h3>Slide In Animation</h3>
        <div class="slide-in">
            <h4>This box slides in from the left!</h4>
            <p>Perfect for entrance effects and revealing content.</p>
        </div>
    </div>
    
    <div class="demo-container">
        <h3>Fade In Animation</h3>
        <div class="fade-in">
            <h4>This box fades in gradually</h4>
            <p>Smooth opacity transition from invisible to visible.</p>
        </div>
    </div>
    
    <div class="demo-container">
        <h3>Hover Animations</h3>
        <p>Interactive animations triggered by mouse hover:</p>
        <div style="text-align: center;">
            <a href="#" class="hover-button">Hover Me!</a>
            <a href="#" class="hover-button">And Me Too!</a>
        </div>
    </div>
    
    <div class="demo-container">
        <h3>Loading Spinner</h3>
        <p>Perfect for loading states and progress indicators:</p>
        <div class="spinner"></div>
    </div>
    
    <div class="demo-container">
        <h3>Wave Text Animation</h3>
        <p>Animated text with staggered timing:</p>
        <div style="text-align: center; font-weight: bold; color: #3498db;">
            <span class="wave">W</span>
            <span class="wave">A</span>
            <span class="wave">V</span>
            <span class="wave">E</span>
            <span class="wave">!</span>
        </div>
    </div>
    
    <div class="demo-container">
        <h3>Heartbeat Animation</h3>
        <p>Rhythm-based scaling animation:</p>
        <div class="heartbeat">❤️</div>
    </div>
    
    <div class="demo-container">
        <h3>Animation Properties</h3>
        <p>Key CSS animation properties:</p>
        <ul>
            <li><strong>animation-name:</strong> Name of the keyframe rule</li>
            <li><strong>animation-duration:</strong> How long the animation takes</li>
            <li><strong>animation-timing-function:</strong> Speed curve (ease, linear, cubic-bezier)</li>
            <li><strong>animation-delay:</strong> Delay before animation starts</li>
            <li><strong>animation-iteration-count:</strong> How many times it repeats</li>
            <li><strong>animation-direction:</strong> Forward, reverse, or alternate</li>
            <li><strong>animation-fill-mode:</strong> Style before/after animation</li>
        </ul>
    </div>
</body>
</html>`
        },
        {
            title: "Tables using CSS",
            explanation: "CSS provides powerful styling options for HTML tables, allowing you to create professional-looking data presentations. You can style borders, backgrounds, spacing, alignment, and even add hover effects and responsive behavior to enhance user experience.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Table Styling</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 20px;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
        }
        
        .demo-container {
            margin: 30px 0;
            padding: 25px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 40px;
        }
        
        h3 {
            color: #34495e;
            border-bottom: 2px solid #3498db;
            padding-bottom: 5px;
        }
        
        /* Basic Table Styling */
        .basic-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        
        .basic-table th,
        .basic-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        
        .basic-table th {
            background-color: #3498db;
            color: white;
            font-weight: bold;
        }
        
        /* Modern Table Design */
        .modern-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            border-radius: 10px;
            overflow: hidden;
        }
        
        .modern-table th {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 1px;
        }
        
        .modern-table td {
            padding: 15px;
            border-bottom: 1px solid #eee;
        }
        
        .modern-table tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        
        .modern-table tr:hover {
            background-color: #e3f2fd;
            transform: scale(1.01);
            transition: all 0.3s ease;
        }
        
        /* Colorful Table */
        .colorful-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            border-radius: 10px;
            overflow: hidden;
        }
        
        .colorful-table th {
            padding: 15px;
            color: white;
            font-weight: bold;
        }
        
        .colorful-table th:nth-child(1) { background-color: #e74c3c; }
        .colorful-table th:nth-child(2) { background-color: #f39c12; }
        .colorful-table th:nth-child(3) { background-color: #2ecc71; }
        .colorful-table th:nth-child(4) { background-color: #3498db; }
        .colorful-table th:nth-child(5) { background-color: #9b59b6; }
        
        .colorful-table td {
            padding: 12px;
            text-align: center;
            border-right: 1px solid #eee;
        }
        
        .colorful-table td:last-child {
            border-right: none;
        }
        
        .colorful-table tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        
        /* Responsive Table */
        .responsive-container {
            overflow-x: auto;
            margin: 20px 0;
        }
        
        .responsive-table {
            width: 100%;
            border-collapse: collapse;
            min-width: 600px;
        }
        
        .responsive-table th,
        .responsive-table td {
            padding: 12px;
            border: 1px solid #ddd;
        }
        
        .responsive-table th {
            background-color: #34495e;
            color: white;
            position: sticky;
            top: 0;
            z-index: 10;
        }
        
        /* Pricing Table */
        .pricing-tables {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .pricing-table {
            background: white;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            overflow: hidden;
            text-align: center;
            flex: 1;
            min-width: 250px;
            max-width: 300px;
            transition: transform 0.3s ease;
        }
        
        .pricing-table:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
        
        .pricing-table .plan-name {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            font-size: 24px;
            font-weight: bold;
        }
        
        .pricing-table .price {
            font-size: 48px;
            font-weight: bold;
            color: #2c3e50;
            margin: 20px 0;
        }
        
        .pricing-table .price span {
            font-size: 18px;
            color: #7f8c8d;
        }
        
        .pricing-table ul {
            list-style: none;
            padding: 0;
            margin: 0 20px;
        }
        
        .pricing-table li {
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        }
        
        .pricing-table .cta-button {
            display: block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 30px;
            margin: 20px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        
        .pricing-table .cta-button:hover {
            background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
            transform: scale(1.05);
        }
        
        /* Data Table with Search */
        .data-controls {
            margin: 20px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .search-input {
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            width: 300px;
            max-width: 100%;
        }
        
        .search-input:focus {
            outline: none;
            border-color: #3498db;
        }
        
        .table-info {
            color: #7f8c8d;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <h1>🎨 CSS Table Styling Examples</h1>
    
    <div class="demo-container">
        <h3>Basic Table Styling</h3>
        <p>Simple table with borders and basic styling:</p>
        <table class="basic-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Laptop</td>
                    <td>$999</td>
                    <td>15</td>
                    <td>Electronics</td>
                </tr>
                <tr>
                    <td>Mouse</td>
                    <td>$25</td>
                    <td>50</td>
                    <td>Accessories</td>
                </tr>
                <tr>
                    <td>Keyboard</td>
                    <td>$75</td>
                    <td>30</td>
                    <td>Accessories</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="demo-container">
        <h3>Modern Table Design</h3>
        <p>Enhanced table with gradients, hover effects, and modern styling:</p>
        <table class="modern-table">
            <thead>
                <tr>
                    <th>Employee</th>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Smith</td>
                    <td>Frontend Developer</td>
                    <td>Engineering</td>
                    <td>$85,000</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Sarah Johnson</td>
                    <td>UX Designer</td>
                    <td>Design</td>
                    <td>$75,000</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Mike Davis</td>
                    <td>Backend Developer</td>
                    <td>Engineering</td>
                    <td>$90,000</td>
                    <td>On Leave</td>
                </tr>
                <tr>
                    <td>Lisa Anderson</td>
                    <td>Project Manager</td>
                    <td>Management</td>
                    <td>$95,000</td>
                    <td>Active</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="demo-container">
        <h3>Colorful Header Table</h3>
        <p>Table with colorful headers for better visual separation:</p>
        <table class="colorful-table">
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Duration</th>
                    <th>Level</th>
                    <th>Students</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>HTML/CSS</td>
                    <td>4 weeks</td>
                    <td>Beginner</td>
                    <td>150</td>
                    <td>4.8/5</td>
                </tr>
                <tr>
                    <td>JavaScript</td>
                    <td>6 weeks</td>
                    <td>Intermediate</td>
                    <td>120</td>
                    <td>4.7/5</td>
                </tr>
                <tr>
                    <td>React</td>
                    <td>8 weeks</td>
                    <td>Advanced</td>
                    <td>95</td>
                    <td>4.9/5</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="demo-container">
        <h3>Responsive Table</h3>
        <p>Table that scrolls horizontally on smaller screens:</p>
        <div class="responsive-container">
            <table class="responsive-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Orders</th>
                        <th>Total Spent</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Alice Cooper</td>
                        <td>alice@email.com</td>
                        <td>(555) 123-4567</td>
                        <td>123 Main St</td>
                        <td>Springfield</td>
                        <td>IL</td>
                        <td>62701</td>
                        <td>15</td>
                        <td>$1,250.00</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Bob Wilson</td>
                        <td>bob@email.com</td>
                        <td>(555) 987-6543</td>
                        <td>456 Oak Ave</td>
                        <td>Portland</td>
                        <td>OR</td>
                        <td>97201</td>
                        <td>8</td>
                        <td>$890.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    <div class="demo-container">
        <h3>Pricing Tables</h3>
        <p>Card-style tables perfect for pricing plans:</p>
        <div class="pricing-tables">
            <div class="pricing-table">
                <div class="plan-name">Basic</div>
                <div class="price">$9<span>/month</span></div>
                <ul>
                    <li>✅ 5 Projects</li>
                    <li>✅ 10GB Storage</li>
                    <li>✅ Email Support</li>
                    <li>❌ Priority Support</li>
                    <li>❌ Advanced Analytics</li>
                </ul>
                <a href="#" class="cta-button">Choose Basic</a>
            </div>
            
            <div class="pricing-table">
                <div class="plan-name">Pro</div>
                <div class="price">$29<span>/month</span></div>
                <ul>
                    <li>✅ 25 Projects</li>
                    <li>✅ 100GB Storage</li>
                    <li>✅ Email Support</li>
                    <li>✅ Priority Support</li>
                    <li>✅ Advanced Analytics</li>
                </ul>
                <a href="#" class="cta-button">Choose Pro</a>
            </div>
            
            <div class="pricing-table">
                <div class="plan-name">Enterprise</div>
                <div class="price">$99<span>/month</span></div>
                <ul>
                    <li>✅ Unlimited Projects</li>
                    <li>✅ 1TB Storage</li>
                    <li>✅ Email Support</li>
                    <li>✅ Priority Support</li>
                    <li>✅ Advanced Analytics</li>
                </ul>
                <a href="#" class="cta-button">Choose Enterprise</a>
            </div>
        </div>
    </div>
</body>
</html>`
        },
        {
            title: "Forms using CSS",
            explanation: "CSS allows you to style forms for better usability and aesthetics. You can customize inputs, textareas, selects, buttons, and provide hover/focus states for better user interaction.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>CSS Forms</title>
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
        }
        
        .form-container {
            max-width: 600px; 
            margin: 0 auto; 
            background: white; 
            padding: 40px; 
            border-radius: 20px; 
            box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }
        
        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
            font-size: 2.5rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .form-group {
            margin-bottom: 25px;
        }
        
        label { 
            display: block; 
            margin-bottom: 8px; 
            font-weight: 600;
            color: #2c3e50;
            font-size: 1rem;
        }
        
        input, select, textarea { 
            width: 100%; 
            padding: 15px; 
            margin-bottom: 5px; 
            border: 2px solid #e9ecef; 
            border-radius: 10px; 
            transition: all 0.3s ease;
            font-size: 16px;
            background: #f8f9fa;
        }
        
        input:focus, select:focus, textarea:focus { 
            border-color: #667eea; 
            outline: none;
            background: white;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            transform: translateY(-2px);
        }
        
        input:hover, select:hover, textarea:hover {
            border-color: #adb5bd;
            background: white;
        }
        
        .radio-group, .checkbox-group {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            margin-top: 10px;
        }
        
        .radio-item, .checkbox-item {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        input[type="radio"], input[type="checkbox"] {
            width: auto;
            margin: 0;
            transform: scale(1.2);
        }
        
        .radio-item label, .checkbox-item label {
            margin: 0;
            font-weight: 400;
            cursor: pointer;
        }
        
        button { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            padding: 18px 40px; 
            border: none; 
            border-radius: 50px; 
            cursor: pointer;
            font-size: 18px;
            font-weight: 600;
            width: 100%;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        button:hover { 
            background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        button:active {
            transform: translateY(-1px);
        }
        
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        
        .success-message {
            background: #d4edda;
            color: #155724;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
            border: 1px solid #c3e6cb;
        }
        
        @media (max-width: 768px) {
            .form-container {
                padding: 30px 20px;
                margin: 10px;
            }
            
            .form-row {
                grid-template-columns: 1fr;
            }
            
            .radio-group, .checkbox-group {
                flex-direction: column;
                gap: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>Contact Us</h1>
        <div class="success-message" style="display: none;" id="successMessage">
            Thank you! Your message has been sent successfully.
        </div>
        
        <form onsubmit="handleSubmit(event)">
            <div class="form-row">
                <div class="form-group">
                    <label for="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required placeholder="Enter your first name">
                </div>
                
                <div class="form-group">
                    <label for="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required placeholder="Enter your last name">
                </div>
            </div>
            
            <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" name="email" required placeholder="your.email@example.com">
            </div>
            
            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567">
            </div>
            
            <div class="form-group">
                <label>Gender</label>
                <div class="radio-group">
                    <div class="radio-item">
                        <input type="radio" name="gender" value="male" id="male">
                        <label for="male">Male</label>
                    </div>
                    <div class="radio-item">
                        <input type="radio" name="gender" value="female" id="female">
                        <label for="female">Female</label>
                    </div>
                    <div class="radio-item">
                        <input type="radio" name="gender" value="other" id="other">
                        <label for="other">Other</label>
                    </div>
                </div>
            </div>
            
            <div class="form-group">
                <label>Interests</label>
                <div class="checkbox-group">
                    <div class="checkbox-item">
                        <input type="checkbox" name="interests" value="webdev" id="webdev">
                        <label for="webdev">Web Development</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" name="interests" value="design" id="design">
                        <label for="design">UI/UX Design</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" name="interests" value="mobile" id="mobile">
                        <label for="mobile">Mobile Apps</label>
                    </div>
                </div>
            </div>
            
            <div class="form-group">
                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="">Select your country</option>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                    <option value="france">France</option>
                    <option value="other">Other</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What is this regarding?">
            </div>
            
            <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" name="message" rows="6" required placeholder="Please enter your message here..."></textarea>
            </div>
            
            <button type="submit">Send Message</button>
        </form>
    </div>
    
    <script>
        function handleSubmit(event) {
            event.preventDefault();
            
            // Show success message
            document.getElementById('successMessage').style.display = 'block';
            
            // Scroll to top to show message
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Reset form after showing success
            setTimeout(() => {
                event.target.reset();
                document.getElementById('successMessage').style.display = 'none';
            }, 3000);
        }
    </script>
</body>
</html>`
        }
    ],

    javascript: [
        {
            title: "Introduction to JavaScript",
            explanation: "JavaScript is a dynamic programming language that enables interactive web pages and is an essential part of web applications. It runs in web browsers and can manipulate HTML content, respond to user events, and communicate with servers.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Introduction to JavaScript</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        .demo-box { 
            background: white; 
            padding: 20px; 
            margin: 15px 0; 
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        button { 
            background: #4CAF50; 
            color: white; 
            padding: 12px 24px; 
            border: none; 
            border-radius: 6px; 
            cursor: pointer;
            font-size: 16px;
            margin: 5px;
            transition: background 0.3s;
        }
        button:hover { background: #45a049; }
        .output { 
            background: #f8f9fa; 
            padding: 15px; 
            border-left: 4px solid #007bff;
            margin: 10px 0;
            border-radius: 4px;
        }
        #datetime { color: #e74c3c; font-weight: bold; }
    </style>
</head>
<body>
    <h1>🚀 Introduction to JavaScript</h1>
    
    <div class="demo-box">
        <h2>What is JavaScript?</h2>
        <p>JavaScript is a versatile programming language that makes web pages interactive. It can:</p>
        <ul>
            <li>Change HTML content and attributes</li>
            <li>Modify CSS styles</li>
            <li>Respond to user interactions</li>
            <li>Validate form data</li>
            <li>Create animations and effects</li>
        </ul>
    </div>
    
    <div class="demo-box">
        <h2>Interactive Demos</h2>
        
        <h3>1. Alert Message</h3>
        <button onclick="showAlert()">Show Alert</button>
        
        <h3>2. Change Text Content</h3>
        <p id="demo-text">This text will change when you click the button!</p>
        <button onclick="changeText()">Change Text</button>
        
        <h3>3. Current Date and Time</h3>
        <p>Current time: <span id="datetime">Click button to see time</span></p>
        <button onclick="showDateTime()">Show Date & Time</button>
        
        <h3>4. Simple Calculator</h3>
        <input type="number" id="num1" placeholder="First number" style="padding: 8px; margin: 5px;">
        <input type="number" id="num2" placeholder="Second number" style="padding: 8px; margin: 5px;">
        <br>
        <button onclick="calculate('add')">Add (+)</button>
        <button onclick="calculate('subtract')">Subtract (-)</button>
        <button onclick="calculate('multiply')">Multiply (×)</button>
        <button onclick="calculate('divide')">Divide (÷)</button>
        <div class="output" id="calc-result">Result will appear here</div>
        
        <h3>5. Change Page Style</h3>
        <button onclick="changeStyle()">Toggle Dark Mode</button>
        <button onclick="changeColor()">Change Color Theme</button>
    </div>
    
    <div class="demo-box">
        <h2>JavaScript in Action</h2>
        <p>The buttons above demonstrate various JavaScript capabilities:</p>
        <ul>
            <li><strong>DOM Manipulation:</strong> Changing HTML elements</li>
            <li><strong>Event Handling:</strong> Responding to clicks</li>
            <li><strong>Date/Time Functions:</strong> Working with built-in objects</li>
            <li><strong>Mathematical Operations:</strong> Processing user input</li>
            <li><strong>Style Manipulation:</strong> Dynamic CSS changes</li>
        </ul>
    </div>

    <script>
        // Function to show alert
        function showAlert() {
            alert("Hello! Welcome to JavaScript programming! 🎉");
        }
        
        // Function to change text content
        function changeText() {
            const textElement = document.getElementById('demo-text');
            const messages = [
                "Text changed successfully! ✅",
                "JavaScript is awesome! 🚀",
                "You clicked the button! 👆",
                "DOM manipulation in action! ⚡",
                "This text will change when you click the button!"
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            textElement.textContent = randomMessage;
            textElement.style.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
        }
        
        // Function to show current date and time
        function showDateTime() {
            const now = new Date();
            const formattedDate = now.toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            document.getElementById('datetime').textContent = formattedDate;
        }
        
        // Calculator function
        function calculate(operation) {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const resultElement = document.getElementById('calc-result');
            
            if (isNaN(num1) || isNaN(num2)) {
                resultElement.innerHTML = '<span style="color: red;">Please enter valid numbers!</span>';
                return;
            }
            
            let result;
            let operationSymbol;
            
            switch(operation) {
                case 'add':
                    result = num1 + num2;
                    operationSymbol = '+';
                    break;
                case 'subtract':
                    result = num1 - num2;
                    operationSymbol = '-';
                    break;
                case 'multiply':
                    result = num1 * num2;
                    operationSymbol = '×';
                    break;
                case 'divide':
                    if (num2 === 0) {
                        resultElement.innerHTML = '<span style="color: red;">Cannot divide by zero!</span>';
                        return;
                    }
                    result = num1 / num2;
                    operationSymbol = '÷';
                    break;
                default:
                    resultElement.innerHTML = '<span style="color: red;">Unknown operation!</span>';
                    return;
            }
            
            resultElement.innerHTML = `<strong>${num1} ${operationSymbol} ${num2} = ${result}</strong>`;
            resultElement.style.color = '#28a745';
        }
        
        // Function to toggle dark mode
        let isDarkMode = false;
        function changeStyle() {
            const body = document.body;
            if (!isDarkMode) {
                body.style.background = 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
                body.style.color = 'white';
                isDarkMode = true;
            } else {
                body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
                body.style.color = 'black';
                isDarkMode = false;
            }
        }
        
        // Function to change color theme
        const colorThemes = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' // original
        ];
        let currentThemeIndex = 0;
        
        function changeColor() {
            currentThemeIndex = (currentThemeIndex + 1) % colorThemes.length;
            document.body.style.background = colorThemes[currentThemeIndex];
        }
        
        // Auto-update time every second for demonstration
        setInterval(() => {
            const datetimeElement = document.getElementById('datetime');
            if (datetimeElement.textContent !== 'Click button to see time') {
                showDateTime();
            }
        }, 1000);
    </script>
</body>
</html>`
        },
        {
            title: "Variables, Operators and Datatypes",
            explanation: "Variables store data values, operators perform operations on data, and data types define what kind of data can be stored. JavaScript is dynamically typed, meaning variables can hold different types of data during execution.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Variables, Operators and Data Types</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            max-width: 900px; 
            margin: 0 auto; 
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
        }
        .demo-box { 
            background: white; 
            padding: 25px; 
            margin: 20px 0; 
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        .code-example { 
            background: #2d3748; 
            color: #e2e8f0;
            padding: 20px; 
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            overflow-x: auto;
            margin: 15px 0;
        }
        .output { 
            background: #f8f9fa; 
            padding: 15px; 
            border-left: 4px solid #28a745;
            margin: 10px 0;
            border-radius: 8px;
            font-family: monospace;
        }
        button { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            padding: 12px 20px; 
            border: none; 
            border-radius: 8px; 
            cursor: pointer;
            margin: 5px;
            transition: all 0.3s;
        }
        button:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
        .datatype { color: #e74c3c; font-weight: bold; }
        .value { color: #27ae60; font-weight: bold; }
        h1 { color: white; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
    </style>
</head>
<body>
    <h1>📊 Variables, Operators & Data Types</h1>
    
    <div class="demo-box">
        <h2>1. Variables in JavaScript</h2>
        <p>Variables are containers for storing data. JavaScript has three ways to declare variables:</p>
        
        <div class="code-example">
// Variable declarations
let name = "Alice";        // Can be reassigned
const age = 25;           // Cannot be reassigned
var city = "New York";    // Old way (avoid in modern JS)

// Reassigning variables
name = "Bob";             // ✅ Works with 'let'
// age = 30;              // ❌ Error with 'const'
        </div>
        
        <button onclick="showVariableDemo()">Run Variable Demo</button>
        <div class="output" id="variable-output">Click the button to see variable examples!</div>
    </div>
    
    <div class="demo-box">
        <h2>2. Data Types</h2>
        <p>JavaScript has several built-in data types. Let's explore each one:</p>
        
        <button onclick="showDataTypes()">Explore Data Types</button>
        <div class="output" id="datatype-output">Click to see different data types in action!</div>
    </div>
    
    <div class="demo-box">
        <h2>3. Operators</h2>
        <p>Operators perform operations on variables and values:</p>
        
        <h3>Arithmetic Operators</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 10px;">
            <button onclick="calculateArithmetic('+')">Addition (+)</button>
            <button onclick="calculateArithmetic('-')">Subtraction (-)</button>
            <button onclick="calculateArithmetic('*')">Multiplication (*)</button>
            <button onclick="calculateArithmetic('/')">Division (/)</button>
            <button onclick="calculateArithmetic('%')">Modulus (%)</button>
            <button onclick="calculateArithmetic('**')">Exponent (**)</button>
        </div>
        
        <div style="margin: 15px 0;">
            <input type="number" id="num1" placeholder="First number" style="padding: 10px; margin: 5px; border: 1px solid #ddd; border-radius: 5px;">
            <input type="number" id="num2" placeholder="Second number" style="padding: 10px; margin: 5px; border: 1px solid #ddd; border-radius: 5px;">
        </div>
        
        <div class="output" id="arithmetic-output">Enter numbers and click an operator button!</div>
        
        <h3>Comparison Operators</h3>
        <button onclick="showComparisons()">Test Comparisons</button>
        <div class="output" id="comparison-output">Click to see comparison examples!</div>
        
        <h3>Logical Operators</h3>
        <button onclick="showLogicalOperators()">Test Logical Operators</button>
        <div class="output" id="logical-output">Click to see logical operator examples!</div>
    </div>
    
    <div class="demo-box">
        <h2>4. Type Conversion</h2>
        <p>JavaScript can convert between different data types:</p>
        
        <button onclick="showTypeConversion()">Show Type Conversion</button>
        <div class="output" id="conversion-output">Click to see type conversion examples!</div>
    </div>
    
    <div class="demo-box">
        <h2>5. Interactive Variable Playground</h2>
        <p>Create and test your own variables:</p>
        
        <div style="margin: 15px 0;">
            <input type="text" id="var-name" placeholder="Variable name" style="padding: 10px; margin: 5px; border: 1px solid #ddd; border-radius: 5px;">
            <input type="text" id="var-value" placeholder="Variable value" style="padding: 10px; margin: 5px; border: 1px solid #ddd; border-radius: 5px;">
            <button onclick="createVariable()">Create Variable</button>
            <button onclick="clearVariables()">Clear All</button>
        </div>
        
        <div class="output" id="playground-output">Create some variables to see them here!</div>
    </div>

    <script>
        // Variables for the playground
        let userVariables = {};
        
        // Function to demonstrate variables
        function showVariableDemo() {
            const output = document.getElementById('variable-output');
            
            // Variable examples
            let studentName = "John Doe";
            const birthYear = 1995;
            var isStudent = true;
            
            // Show variable reassignment
            let counter = 0;
            counter = counter + 1;
            counter += 1; // Shorthand
            counter++; // Even shorter
            
            output.innerHTML = `
                <strong>Variable Examples:</strong><br>
                • let studentName = "${studentName}" (Type: ${typeof studentName})<br>
                • const birthYear = ${birthYear} (Type: ${typeof birthYear})<br>
                • var isStudent = ${isStudent} (Type: ${typeof isStudent})<br>
                <br>
                <strong>Counter increments:</strong><br>
                • Started at 0, now counter = ${counter}
            `;
        }
        
        // Function to show data types
        function showDataTypes() {
            const output = document.getElementById('datatype-output');
            
            // Different data types
            const string = "Hello World";
            const number = 42;
            const boolean = true;
            const array = [1, 2, 3, "four", true];
            const object = {name: "Alice", age: 30};
            const nullValue = null;
            let undefinedValue;
            const func = function() { return "I'm a function"; };
            
            output.innerHTML = `
                <strong>JavaScript Data Types:</strong><br>
                • <span class="datatype">String:</span> <span class="value">"${string}"</span> (typeof: ${typeof string})<br>
                • <span class="datatype">Number:</span> <span class="value">${number}</span> (typeof: ${typeof number})<br>
                • <span class="datatype">Boolean:</span> <span class="value">${boolean}</span> (typeof: ${typeof boolean})<br>
                • <span class="datatype">Array:</span> <span class="value">[${array.join(", ")}]</span> (typeof: ${typeof array})<br>
                • <span class="datatype">Object:</span> <span class="value">${JSON.stringify(object)}</span> (typeof: ${typeof object})<br>
                • <span class="datatype">Null:</span> <span class="value">${nullValue}</span> (typeof: ${typeof nullValue})<br>
                • <span class="datatype">Undefined:</span> <span class="value">${undefinedValue}</span> (typeof: ${typeof undefinedValue})<br>
                • <span class="datatype">Function:</span> <span class="value">${func.toString().substring(0,30)}...</span> (typeof: ${typeof func})
            `;
        }
        
        // Function for arithmetic operations
        function calculateArithmetic(operator) {
            const num1 = parseFloat(document.getElementById('num1').value) || 10;
            const num2 = parseFloat(document.getElementById('num2').value) || 3;
            const output = document.getElementById('arithmetic-output');
            
            let result;
            switch(operator) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '*': result = num1 * num2; break;
                case '/': result = num1 / num2; break;
                case '%': result = num1 % num2; break;
                case '**': result = num1 ** num2; break;
            }
            
            output.innerHTML = `
                <strong>Arithmetic Operation:</strong><br>
                ${num1} ${operator} ${num2} = <span class="value">${result}</span><br>
                <small>Result type: ${typeof result}</small>
            `;
        }
        
        // Function to show comparison operators
        function showComparisons() {
            const output = document.getElementById('comparison-output');
            
            const a = 10, b = "10", c = 20;
            
            output.innerHTML = `
                <strong>Comparison Examples (a=10, b="10", c=20):</strong><br>
                • a == b: <span class="value">${a == b}</span> (loose equality)<br>
                • a === b: <span class="value">${a === b}</span> (strict equality)<br>
                • a != b: <span class="value">${a != b}</span> (loose inequality)<br>
                • a !== b: <span class="value">${a !== b}</span> (strict inequality)<br>
                • a > c: <span class="value">${a > c}</span> (greater than)<br>
                • a < c: <span class="value">${a < c}</span> (less than)<br>
                • a >= 10: <span class="value">${a >= 10}</span> (greater than or equal)<br>
                • c <= 20: <span class="value">${c <= 20}</span> (less than or equal)
            `;
        }
        
        // Function to show logical operators
        function showLogicalOperators() {
            const output = document.getElementById('logical-output');
            
            const x = true, y = false, z = 1, w = 0;
            
            output.innerHTML = `
                <strong>Logical Examples (x=true, y=false, z=1, w=0):</strong><br>
                • x && y: <span class="value">${x && y}</span> (AND operator)<br>
                • x || y: <span class="value">${x || y}</span> (OR operator)<br>
                • !x: <span class="value">${!x}</span> (NOT operator)<br>
                • !y: <span class="value">${!y}</span> (NOT operator)<br>
                • z && w: <span class="value">${z && w}</span> (truthy/falsy AND)<br>
                • z || w: <span class="value">${z || w}</span> (truthy/falsy OR)<br>
                • !!z: <span class="value">${!!z}</span> (convert to boolean)
            `;
        }
        
        // Function to show type conversion
        function showTypeConversion() {
            const output = document.getElementById('conversion-output');
            
            const str = "123";
            const num = 456;
            const bool = true;
            
            output.innerHTML = `
                <strong>Type Conversion Examples:</strong><br>
                • String to Number: "${str}" → <span class="value">${Number(str)}</span><br>
                • Number to String: ${num} → <span class="value">"${String(num)}"</span><br>
                • Boolean to String: ${bool} → <span class="value">"${String(bool)}"</span><br>
                • String to Boolean: "hello" → <span class="value">${Boolean("hello")}</span><br>
                • Empty string to Boolean: "" → <span class="value">${Boolean("")}</span><br>
                • Number to Boolean: ${num} → <span class="value">${Boolean(num)}</span><br>
                • Zero to Boolean: 0 → <span class="value">${Boolean(0)}</span><br>
                • parseInt("123.45") → <span class="value">${parseInt("123.45")}</span><br>
                • parseFloat("123.45") → <span class="value">${parseFloat("123.45")}</span>
            `;
        }
        
        // Function to create user variables
        function createVariable() {
            const name = document.getElementById('var-name').value.trim();
            const value = document.getElementById('var-value').value;
            const output = document.getElementById('playground-output');
            
            if (!name) {
                output.innerHTML = '<span style="color: red;">Please enter a variable name!</span>';
                return;
            }
            
            // Try to parse the value
            let parsedValue;
            if (value === 'true') parsedValue = true;
            else if (value === 'false') parsedValue = false;
            else if (value === 'null') parsedValue = null;
            else if (value === '') parsedValue = undefined;
            else if (!isNaN(value) && value !== '') parsedValue = Number(value);
            else parsedValue = value;
            
            userVariables[name] = parsedValue;
            
            // Clear inputs
            document.getElementById('var-name').value = '';
            document.getElementById('var-value').value = '';
            
            displayUserVariables();
        }
        
        // Function to display user variables
        function displayUserVariables() {
            const output = document.getElementById('playground-output');
            let html = '<strong>Your Variables:</strong><br>';
            
            for (let [name, value] of Object.entries(userVariables)) {
                html += `• <span class="datatype">${name}:</span> <span class="value">${JSON.stringify(value)}</span> (${typeof value})<br>`;
            }
            
            output.innerHTML = html;
        }
        
        // Function to clear variables
        function clearVariables() {
            userVariables = {};
            document.getElementById('playground-output').innerHTML = 'All variables cleared!';
        }
        
        // Initialize with default numbers if not provided
        document.getElementById('num1').value = 10;
        document.getElementById('num2').value = 3;
    </script>
</body>
</html>`
        },
        {
            title: "Decision Making 1 (if/else)",
            explanation: "Conditional statements allow programs to make decisions based on different conditions. The if/else statement is the most fundamental decision-making structure in programming, enabling code to execute different paths based on whether conditions are true or false.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Decision Making with if/else</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            max-width: 900px; 
            margin: 0 auto; 
            padding: 20px;
            background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
        }
        .demo-box { 
            background: white; 
            padding: 25px; 
            margin: 20px 0; 
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        .code-example { 
            background: #2d3748; 
            color: #e2e8f0;
            padding: 20px; 
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            overflow-x: auto;
            margin: 15px 0;
        }
        .output { 
            background: #f8f9fa; 
            padding: 15px; 
            border-left: 4px solid #007bff;
            margin: 10px 0;
            border-radius: 8px;
            min-height: 30px;
        }
        .success { border-left-color: #28a745; background: #d4edda; }
        .warning { border-left-color: #ffc107; background: #fff3cd; }
        .danger { border-left-color: #dc3545; background: #f8d7da; }
        button { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            padding: 12px 20px; 
            border: none; 
            border-radius: 8px; 
            cursor: pointer;
            margin: 5px;
            transition: all 0.3s;
        }
        button:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
        input, select { 
            padding: 10px; 
            margin: 5px; 
            border: 2px solid #e9ecef; 
            border-radius: 8px; 
            font-size: 16px;
        }
        input:focus, select:focus { 
            border-color: #667eea; 
            outline: none; 
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        h1 { color: white; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
    </style>
</head>
<body>
    <h1>🤔 Decision Making with if/else</h1>
    
    <div class="demo-box">
        <h2>1. Basic if/else Structure</h2>
        <p>The if statement executes code when a condition is true, else executes when it's false:</p>
        
        <div class="code-example">
if (condition) {
    // Code to execute when condition is true
} else {
    // Code to execute when condition is false
}

// Example:
let age = 18;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}
        </div>
    </div>
    
    <div class="demo-box">
        <h2>2. Age Checker Demo</h2>
        <p>Enter your age to see if/else in action:</p>
        
        <input type="number" id="age-input" placeholder="Enter your age" min="1" max="150">
        <button onclick="checkAge()">Check Age Category</button>
        
        <div class="output" id="age-output">Enter your age and click the button!</div>
    </div>
    
    <div class="demo-box">
        <h2>3. Multiple Conditions (else if)</h2>
        <p>Use else if for multiple conditions:</p>
        
        <div class="code-example">
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
        </div>
        
        <input type="number" id="score-input" placeholder="Enter test score (0-100)" min="0" max="100">
        <button onclick="calculateGrade()">Calculate Grade</button>
        
        <div class="output" id="grade-output">Enter a test score to see your grade!</div>
    </div>
    
    <div class="demo-box">
        <h2>4. Weather Advisory System</h2>
        <p>Complex conditional logic for weather conditions:</p>
        
        <select id="weather-select">
            <option value="sunny">☀️ Sunny</option>
            <option value="cloudy">☁️ Cloudy</option>
            <option value="rainy">🌧️ Rainy</option>
            <option value="snowy">❄️ Snowy</option>
            <option value="stormy">⛈️ Stormy</option>
        </select>
        
        <input type="number" id="temp-input" placeholder="Temperature (°F)" min="-50" max="130">
        <button onclick="getWeatherAdvice()">Get Weather Advice</button>
        
        <div class="output" id="weather-output">Select weather and temperature for advice!</div>
    </div>
    
    <div class="demo-box">
        <h2>5. Password Strength Checker</h2>
        <p>Multiple nested conditions to check password strength:</p>
        
        <input type="text" id="password-input" placeholder="Enter a password">
        <button onclick="checkPasswordStrength()">Check Strength</button>
        
        <div class="output" id="password-output">Enter a password to check its strength!</div>
    </div>
    
    <div class="demo-box">
        <h2>6. BMI Calculator with Categories</h2>
        <p>Body Mass Index calculator with health categories:</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 15px 0;">
            <input type="number" id="weight-input" placeholder="Weight (lbs)" min="50" max="500">
            <input type="number" id="height-input" placeholder="Height (inches)" min="36" max="96">
        </div>
        
        <button onclick="calculateBMI()">Calculate BMI</button>
        
        <div class="output" id="bmi-output">Enter weight and height to calculate BMI!</div>
    </div>
    
    <div class="demo-box">
        <h2>7. Interactive Quiz</h2>
        <p>Answer the question and get feedback:</p>
        
        <div id="quiz-question" style="font-size: 18px; margin: 15px 0;">
            <strong>What is the largest planet in our solar system?</strong>
        </div>
        
        <div style="margin: 15px 0;">
            <label><input type="radio" name="quiz" value="earth"> Earth</label><br>
            <label><input type="radio" name="quiz" value="jupiter"> Jupiter</label><br>
            <label><input type="radio" name="quiz" value="saturn"> Saturn</label><br>
            <label><input type="radio" name="quiz" value="neptune"> Neptune</label>
        </div>
        
        <button onclick="checkQuizAnswer()">Submit Answer</button>
        <button onclick="nextQuestion()">Next Question</button>
        
        <div class="output" id="quiz-output">Select an answer and submit!</div>
    </div>

    <script>
        // Age checker function
        function checkAge() {
            const age = parseInt(document.getElementById('age-input').value);
            const output = document.getElementById('age-output');
            
            if (!age || age < 1) {
                output.innerHTML = '<span style="color: red;">Please enter a valid age!</span>';
                output.className = 'output danger';
                return;
            }
            
            let message, className;
            
            if (age < 13) {
                message = `At ${age} years old, you are a child. 👶 Time for play and learning!`;
                className = 'output success';
            } else if (age < 20) {
                message = `At ${age} years old, you are a teenager. 🧑‍🎓 Focus on education and growth!`;
                className = 'output warning';
            } else if (age < 65) {
                message = `At ${age} years old, you are an adult. 💼 Time for career and responsibilities!`;
                className = 'output success';
            } else {
                message = `At ${age} years old, you are a senior. 👴 Enjoy your golden years!`;
                className = 'output warning';
            }
            
            output.innerHTML = message;
            output.className = className;
        }
        
        // Grade calculator function
        function calculateGrade() {
            const score = parseFloat(document.getElementById('score-input').value);
            const output = document.getElementById('grade-output');
            
            if (isNaN(score) || score < 0 || score > 100) {
                output.innerHTML = '<span style="color: red;">Please enter a valid score between 0 and 100!</span>';
                output.className = 'output danger';
                return;
            }
            
            let grade, message, className;
            
            if (score >= 97) {
                grade = "A+";
                message = "Outstanding! Perfect performance! 🌟";
                className = 'output success';
            } else if (score >= 93) {
                grade = "A";
                message = "Excellent work! Keep it up! 🎉";
                className = 'output success';
            } else if (score >= 90) {
                grade = "A-";
                message = "Very good! Almost perfect! 👍";
                className = 'output success';
            } else if (score >= 87) {
                grade = "B+";
                message = "Good job! Above average! ✨";
                className = 'output warning';
            } else if (score >= 83) {
                grade = "B";
                message = "Solid work! Meeting expectations! 👌";
                className = 'output warning';
            } else if (score >= 80) {
                grade = "B-";
                message = "Fair performance! Room for improvement! 📈";
                className = 'output warning';
            } else if (score >= 77) {
                grade = "C+";
                message = "Acceptable work! Keep trying! 💪";
                className = 'output warning';
            } else if (score >= 73) {
                grade = "C";
                message = "Average performance! Study harder! 📚";
                className = 'output warning';
            } else if (score >= 70) {
                grade = "C-";
                message = "Below average! Need improvement! ⚠️";
                className = 'output danger';
            } else if (score >= 60) {
                grade = "D";
                message = "Passing but concerning! Get help! 🆘";
                className = 'output danger';
            } else {
                grade = "F";
                message = "Failing! Seek immediate assistance! ❌";
                className = 'output danger';
            }
            
            output.innerHTML = `<strong>Score: ${score}% | Grade: ${grade}</strong><br>${message}`;
            output.className = className;
        }
        
        // Weather advice function
        function getWeatherAdvice() {
            const weather = document.getElementById('weather-select').value;
            const temp = parseInt(document.getElementById('temp-input').value);
            const output = document.getElementById('weather-output');
            
            if (isNaN(temp)) {
                output.innerHTML = '<span style="color: red;">Please enter a valid temperature!</span>';
                output.className = 'output danger';
                return;
            }
            
            let advice, className = 'output success';
            
            if (weather === 'sunny') {
                if (temp > 85) {
                    advice = "☀️ Hot and sunny! Stay hydrated, use sunscreen, and find shade!";
                    className = 'output warning';
                } else if (temp > 70) {
                    advice = "☀️ Perfect sunny weather! Great day for outdoor activities!";
                } else {
                    advice = "☀️ Cool and sunny! Light jacket recommended!";
                }
            } else if (weather === 'rainy') {
                if (temp < 50) {
                    advice = "🌧️ Cold rain! Wear waterproof gear and warm clothes!";
                    className = 'output danger';
                } else {
                    advice = "🌧️ Rainy day! Don't forget your umbrella and waterproof shoes!";
                    className = 'output warning';
                }
            } else if (weather === 'snowy') {
                if (temp < 20) {
                    advice = "❄️ Extremely cold snow! Bundle up, avoid travel if possible!";
                    className = 'output danger';
                } else {
                    advice = "❄️ Snowy weather! Dress warmly and drive carefully!";
                    className = 'output warning';
                }
            } else if (weather === 'stormy') {
                advice = "⛈️ Stormy weather! Stay indoors and avoid travel!";
                className = 'output danger';
            } else if (weather === 'cloudy') {
                if (temp > 75) {
                    advice = "☁️ Warm and cloudy! Comfortable weather for any activity!";
                } else if (temp < 50) {
                    advice = "☁️ Cool and cloudy! Light jacket recommended!";
                    className = 'output warning';
                } else {
                    advice = "☁️ Mild cloudy weather! Perfect for a walk!";
                }
            }
            
            output.innerHTML = `<strong>Weather: ${weather.charAt(0).toUpperCase() + weather.slice(1)} | Temp: ${temp}°F</strong><br>${advice}`;
            output.className = className;
        }
        
        // Password strength checker
        function checkPasswordStrength() {
            const password = document.getElementById('password-input').value;
            const output = document.getElementById('password-output');
            
            if (!password) {
                output.innerHTML = '<span style="color: red;">Please enter a password!</span>';
                output.className = 'output danger';
                return;
            }
            
            let strength = 0;
            let feedback = [];
            
            // Check length
            if (password.length >= 8) {
                strength += 1;
            } else {
                feedback.push("At least 8 characters");
            }
            
            // Check for lowercase
            if (/[a-z]/.test(password)) {
                strength += 1;
            } else {
                feedback.push("Lowercase letters");
            }
            
            // Check for uppercase
            if (/[A-Z]/.test(password)) {
                strength += 1;
            } else {
                feedback.push("Uppercase letters");
            }
            
            // Check for numbers
            if (/\d/.test(password)) {
                strength += 1;
            } else {
                feedback.push("Numbers");
            }
            
            // Check for special characters
            if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                strength += 1;
            } else {
                feedback.push("Special characters");
            }
            
            let strengthText, className, message;
            
            if (strength <= 2) {
                strengthText = "Weak 🔴";
                className = 'output danger';
                message = "Your password is weak! ";
            } else if (strength <= 3) {
                strengthText = "Medium 🟡";
                className = 'output warning';
                message = "Your password is medium strength! ";
            } else if (strength <= 4) {
                strengthText = "Strong 🟢";
                className = 'output success';
                message = "Your password is strong! ";
            } else {
                strengthText = "Very Strong 💚";
                className = 'output success';
                message = "Your password is very strong! ";
            }
            
            if (feedback.length > 0) {
                message += `Consider adding: ${feedback.join(', ')}.`;
            } else {
                message += "Excellent password security!";
            }
            
            output.innerHTML = `<strong>Password Strength: ${strengthText}</strong><br>${message}`;
            output.className = className;
        }
        
        // BMI Calculator
        function calculateBMI() {
            const weight = parseFloat(document.getElementById('weight-input').value);
            const height = parseFloat(document.getElementById('height-input').value);
            const output = document.getElementById('bmi-output');
            
            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                output.innerHTML = '<span style="color: red;">Please enter valid weight and height values!</span>';
                output.className = 'output danger';
                return;
            }
            
            // Calculate BMI (weight in lbs, height in inches)
            const bmi = (weight / (height * height)) * 703;
            const roundedBMI = Math.round(bmi * 10) / 10;
            
            let category, advice, className;
            
            if (bmi < 18.5) {
                category = "Underweight";
                advice = "Consider consulting a healthcare provider about healthy weight gain strategies.";
                className = 'output warning';
            } else if (bmi < 25) {
                category = "Normal weight";
                advice = "Great job! You're maintaining a healthy weight. Keep up the good work!";
                className = 'output success';
            } else if (bmi < 30) {
                category = "Overweight";
                advice = "Consider adopting healthier eating habits and increasing physical activity.";
                className = 'output warning';
            } else {
                category = "Obese";
                advice = "It's recommended to consult with a healthcare provider about weight management strategies.";
                className = 'output danger';
            }
            
            output.innerHTML = `
                <strong>BMI: ${roundedBMI} | Category: ${category}</strong><br>
                ${advice}<br>
                <small>Note: BMI is a general indicator and doesn't account for muscle mass, bone density, and other factors.</small>
            `;
            output.className = className;
        }
        
        // Quiz system
        const quizQuestions = [
            {
                question: "What is the largest planet in our solar system?",
                options: ["earth", "jupiter", "saturn", "neptune"],
                correct: "jupiter",
                explanation: "Jupiter is the largest planet in our solar system!"
            },
            {
                question: "What is the capital of France?",
                options: ["london", "paris", "rome", "madrid"],
                correct: "paris",
                explanation: "Paris is the capital and largest city of France!"
            },
            {
                question: "What is 12 × 8?",
                options: ["84", "96", "104", "88"],
                correct: "96",
                explanation: "12 × 8 = 96. Great mental math!"
            }
        ];
        
        let currentQuestionIndex = 0;
        
        function checkQuizAnswer() {
            const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
            const output = document.getElementById('quiz-output');
            
            if (!selectedAnswer) {
                output.innerHTML = '<span style="color: red;">Please select an answer!</span>';
                output.className = 'output danger';
                return;
            }
            
            const currentQuestion = quizQuestions[currentQuestionIndex];
            const isCorrect = selectedAnswer.value === currentQuestion.correct;
            
            if (isCorrect) {
                output.innerHTML = `<strong>✅ Correct!</strong><br>${currentQuestion.explanation}`;
                output.className = 'output success';
            } else {
                output.innerHTML = `<strong>❌ Incorrect!</strong><br>The correct answer is: ${currentQuestion.correct}<br>${currentQuestion.explanation}`;
                output.className = 'output danger';
            }
        }
        
        function nextQuestion() {
            currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
            const currentQuestion = quizQuestions[currentQuestionIndex];
            
            document.getElementById('quiz-question').innerHTML = `<strong>${currentQuestion.question}</strong>`;
            
            // Update radio button options
            const radioButtons = document.querySelectorAll('input[name="quiz"]');
            const labels = document.querySelectorAll('label');
            
            currentQuestion.options.forEach((option, index) => {
                if (radioButtons[index] && labels[index]) {
                    radioButtons[index].value = option;
                    radioButtons[index].checked = false;
                    labels[index].innerHTML = `<input type="radio" name="quiz" value="${option}"> ${option.charAt(0).toUpperCase() + option.slice(1)}`;
                }
            });
            
            document.getElementById('quiz-output').innerHTML = 'New question loaded! Select an answer and submit!';
            document.getElementById('quiz-output').className = 'output';
        }
    </script>
</body>
</html>`
        },
        {
            title: "Decision Making 2 (switch)",
            explanation: "The switch statement provides an efficient way to execute different code blocks based on different values. It's particularly useful when you have many possible conditions to check against a single variable, offering cleaner syntax than multiple if/else statements.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Decision Making with Switch</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            max-width: 900px; 
            margin: 0 auto; 
            padding: 20px;
            background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        }
        .demo-box { 
            background: white; 
            padding: 25px; 
            margin: 20px 0; 
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        .code-example { 
            background: #2d3748; 
            color: #e2e8f0;
            padding: 20px; 
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            overflow-x: auto;
            margin: 15px 0;
        }
        .output { 
            background: #f8f9fa; 
            padding: 15px; 
            border-left: 4px solid #007bff;
            margin: 10px 0;
            border-radius: 8px;
            min-height: 30px;
        }
        .success { border-left-color: #28a745; background: #d4edda; }
        .warning { border-left-color: #ffc107; background: #fff3cd; }
        .danger { border-left-color: #dc3545; background: #f8d7da; }
        .info { border-left-color: #17a2b8; background: #d1ecf1; }
        button { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            padding: 12px 20px; 
            border: none; 
            border-radius: 8px; 
            cursor: pointer;
            margin: 5px;
            transition: all 0.3s;
            font-size: 14px;
        }
        button:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
        input, select { 
            padding: 10px; 
            margin: 5px; 
            border: 2px solid #e9ecef; 
            border-radius: 8px; 
            font-size: 16px;
        }
        input:focus, select:focus { 
            border-color: #667eea; 
            outline: none; 
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        h1 { color: white; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
        .day-buttons, .month-buttons { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); 
            gap: 10px; 
            margin: 15px 0; 
        }
    </style>
</head>
<body>
    <h1>🔀 Decision Making with Switch</h1>
    
    <div class="demo-box">
        <h2>1. Switch Statement Basics</h2>
        <p>The switch statement compares a value against multiple cases and executes matching code:</p>
        
        <div class="code-example">
switch (expression) {
    case value1:
        // Code for value1
        break;
    case value2:
        // Code for value2
        break;
    case value3:
        // Code for value3
        break;
    default:
        // Code when no case matches
        break;
}

// Example:
let day = 3;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    default: console.log("Invalid day");
}
        </div>
    </div>
    
    <div class="demo-box">
        <h2>2. Day of the Week</h2>
        <p>Click a number to see the corresponding day:</p>
        
        <div class="day-buttons">
            <button onclick="getDayName(1)">1</button>
            <button onclick="getDayName(2)">2</button>
            <button onclick="getDayName(3)">3</button>
            <button onclick="getDayName(4)">4</button>
            <button onclick="getDayName(5)">5</button>
            <button onclick="getDayName(6)">6</button>
            <button onclick="getDayName(7)">7</button>
            <button onclick="getDayName(0)">0</button>
        </div>
        
        <div class="output" id="day-output">Click a number to see the day of the week!</div>
    </div>
    
    <div class="demo-box">
        <h2>3. Grade Letter to Description</h2>
        <p>Enter a letter grade to get detailed feedback:</p>
        
        <input type="text" id="grade-input" placeholder="Enter grade (A, B, C, D, F)" maxlength="1" style="text-transform: uppercase;">
        <button onclick="getGradeDescription()">Get Description</button>
        
        <div class="output" id="grade-description-output">Enter a grade letter to see description!</div>
    </div>
    
    <div class="demo-box">
        <h2>4. Month Information System</h2>
        <p>Click a month to get information about it:</p>
        
        <div class="month-buttons">
            <button onclick="getMonthInfo(1)">Jan</button>
            <button onclick="getMonthInfo(2)">Feb</button>
            <button onclick="getMonthInfo(3)">Mar</button>
            <button onclick="getMonthInfo(4)">Apr</button>
            <button onclick="getMonthInfo(5)">May</button>
            <button onclick="getMonthInfo(6)">Jun</button>
            <button onclick="getMonthInfo(7)">Jul</button>
            <button onclick="getMonthInfo(8)">Aug</button>
            <button onclick="getMonthInfo(9)">Sep</button>
            <button onclick="getMonthInfo(10)">Oct</button>
            <button onclick="getMonthInfo(11)">Nov</button>
            <button onclick="getMonthInfo(12)">Dec</button>
        </div>
        
        <div class="output" id="month-output">Click a month to see information!</div>
    </div>
    
    <div class="demo-box">
        <h2>5. Calculator with Switch</h2>
        <p>Perform basic math operations using switch statement:</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin: 15px 0;">
            <input type="number" id="calc-num1" placeholder="First number">
            <select id="calc-operator">
                <option value="+">Addition (+)</option>
                <option value="-">Subtraction (-)</option>
                <option value="*">Multiplication (×)</option>
                <option value="/">Division (÷)</option>
                <option value="%">Modulus (%)</option>
                <option value="**">Power (^)</option>
            </select>
            <input type="number" id="calc-num2" placeholder="Second number">
        </div>
        
        <button onclick="performCalculation()">Calculate</button>
        <button onclick="clearCalculator()">Clear</button>
        
        <div class="output" id="calc-output">Enter numbers and select an operation!</div>
    </div>
    
    <div class="demo-box">
        <h2>6. Traffic Light System</h2>
        <p>Traffic light controller using switch statement:</p>
        
        <div style="text-align: center; margin: 20px 0;">
            <div id="traffic-light" style="display: inline-block; padding: 20px; background: #333; border-radius: 15px;">
                <div id="red-light" style="width: 50px; height: 50px; background: #darkred; border-radius: 50%; margin: 10px auto;"></div>
                <div id="yellow-light" style="width: 50px; height: 50px; background: #darkorange; border-radius: 50%; margin: 10px auto;"></div>
                <div id="green-light" style="width: 50px; height: 50px; background: #darkgreen; border-radius: 50%; margin: 10px auto;"></div>
            </div>
        </div>
        
        <button onclick="changeTrafficLight('red')">Red Light</button>
        <button onclick="changeTrafficLight('yellow')">Yellow Light</button>
        <button onclick="changeTrafficLight('green')">Green Light</button>
        <button onclick="changeTrafficLight('off')">Turn Off</button>
        
        <div class="output" id="traffic-output">Click a button to control the traffic light!</div>
    </div>
    
    <div class="demo-box">
        <h2>7. Music Genre Recommendation</h2>
        <p>Get music recommendations based on your mood:</p>
        
        <select id="mood-select">
            <option value="">Select your mood...</option>
            <option value="happy">😊 Happy</option>
            <option value="sad">😢 Sad</option>
            <option value="energetic">⚡ Energetic</option>
            <option value="relaxed">😌 Relaxed</option>
            <option value="romantic">💕 Romantic</option>
            <option value="angry">😠 Angry</option>
            <option value="nostalgic">🎭 Nostalgic</option>
        </select>
        
        <button onclick="getMusicRecommendation()">Get Recommendation</button>
        
        <div class="output" id="music-output">Select your mood to get music recommendations!</div>
    </div>
    
    <div class="demo-box">
        <h2>8. Seasonal Activity Planner</h2>
        <p>Get activity suggestions based on the season:</p>
        
        <input type="text" id="season-input" placeholder="Enter season (spring, summer, fall, winter)">
        <button onclick="getSeasonalActivities()">Get Activities</button>
        
        <div class="output" id="season-output">Enter a season to get activity suggestions!</div>
    </div>

    <script>
        // Day of the week function
        function getDayName(dayNumber) {
            const output = document.getElementById('day-output');
            let result, className = 'output success';
            
            switch (dayNumber) {
                case 1:
                    result = "Monday - Start of the work week! ☕ Time to get organized!";
                    break;
                case 2:
                    result = "Tuesday - Tuesday motivation! 💪 Keep pushing forward!";
                    break;
                case 3:
                    result = "Wednesday - Hump day! 🐪 Halfway through the week!";
                    break;
                case 4:
                    result = "Thursday - Almost there! 🎯 The weekend is near!";
                    break;
                case 5:
                    result = "Friday - TGIF! 🎉 Weekend vibes starting!";
                    break;
                case 6:
                    result = "Saturday - Weekend fun! 🏖️ Time to relax and enjoy!";
                    break;
                case 7:
                    result = "Sunday - Rest day! 😴 Prepare for the new week!";
                    break;
                case 0:
                    result = "Sunday (alternate) - Some systems use 0 for Sunday! 🗓️";
                    break;
                default:
                    result = "Invalid day number! Please use 1-7 (or 0 for Sunday). ❌";
                    className = 'output danger';
                    break;
            }
            
            output.innerHTML = `<strong>Day ${dayNumber}:</strong> ${result}`;
            output.className = className;
        }
        
        // Grade description function
        function getGradeDescription() {
            const grade = document.getElementById('grade-input').value.toUpperCase();
            const output = document.getElementById('grade-description-output');
            let result, className;
            
            switch (grade) {
                case 'A':
                    result = "Excellent! Outstanding performance! 🌟 You've mastered the material!";
                    className = 'output success';
                    break;
                case 'B':
                    result = "Good work! Above average performance! 👍 You understand most concepts well!";
                    className = 'output success';
                    break;
                case 'C':
                    result = "Satisfactory! Average performance! 📚 You meet basic requirements!";
                    className = 'output warning';
                    break;
                case 'D':
                    result = "Below average! Needs improvement! ⚠️ Consider getting additional help!";
                    className = 'output warning';
                    break;
                case 'F':
                    result = "Failing grade! Immediate attention needed! 🆘 Seek help from instructor!";
                    className = 'output danger';
                    break;
                case '':
                    result = "Please enter a grade letter! 📝";
                    className = 'output info';
                    break;
                default:
                    result = `"${grade}" is not a valid grade! Please use A, B, C, D, or F. ❌`;
                    className = 'output danger';
                    break;
            }
            
            output.innerHTML = result;
            output.className = className;
        }
        
        // Month information function
        function getMonthInfo(monthNumber) {
            const output = document.getElementById('month-output');
            let result, className = 'output info';
            
            switch (monthNumber) {
                case 1:
                    result = "January ❄️ - 31 days | Winter season | New Year celebrations!";
                    break;
                case 2:
                    result = "February 💕 - 28/29 days | Winter season | Valentine's Day!";
                    break;
                case 3:
                    result = "March 🌸 - 31 days | Spring begins | Flowers start blooming!";
                    break;
                case 4:
                    result = "April 🌦️ - 30 days | Spring season | April showers bring May flowers!";
                    break;
                case 5:
                    result = "May 🌺 - 31 days | Spring season | Beautiful weather and Mother's Day!";
                    break;
                case 6:
                    result = "June ☀️ - 30 days | Summer begins | Perfect weather and graduations!";
                    break;
                case 7:
                    result = "July 🎆 - 31 days | Summer season | Hot weather and Independence Day!";
                    break;
                case 8:
                    result = "August 🏖️ - 31 days | Summer season | Vacation time and back-to-school prep!";
                    break;
                case 9:
                    result = "September 📚 - 30 days | Fall begins | Back to school and cooler weather!";
                    break;
                case 10:
                    result = "October 🎃 - 31 days | Fall season | Halloween and beautiful autumn colors!";
                    break;
                case 11:
                    result = "November 🦃 - 30 days | Fall season | Thanksgiving and gratitude!";
                    break;
                case 12:
                    result = "December 🎄 - 31 days | Winter begins | Holidays and year-end celebrations!";
                    break;
                default:
                    result = "Invalid month number! Please use 1-12. ❌";
                    className = 'output danger';
                    break;
            }
            
            output.innerHTML = `<strong>Month ${monthNumber}:</strong> ${result}`;
            output.className = className;
        }
        
        // Calculator function
        function performCalculation() {
            const num1 = parseFloat(document.getElementById('calc-num1').value);
            const num2 = parseFloat(document.getElementById('calc-num2').value);
            const operator = document.getElementById('calc-operator').value;
            const output = document.getElementById('calc-output');
            
            if (isNaN(num1) || isNaN(num2)) {
                output.innerHTML = "Please enter valid numbers! ❌";
                output.className = 'output danger';
                return;
            }
            
            let result, operationName, className = 'output success';
            
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    operationName = 'Addition';
                    break;
                case '-':
                    result = num1 - num2;
                    operationName = 'Subtraction';
                    break;
                case '*':
                    result = num1 * num2;
                    operationName = 'Multiplication';
                    break;
                case '/':
                    if (num2 === 0) {
                        output.innerHTML = "Error: Division by zero is not allowed! ⚠️";
                        output.className = 'output danger';
                        return;
                    }
                    result = num1 / num2;
                    operationName = 'Division';
                    break;
                case '%':
                    if (num2 === 0) {
                        output.innerHTML = "Error: Modulus by zero is not allowed! ⚠️";
                        output.className = 'output danger';
                        return;
                    }
                    result = num1 % num2;
                    operationName = 'Modulus';
                    break;
                case '**':
                    result = num1 ** num2;
                    operationName = 'Exponentiation';
                    break;
                default:
                    output.innerHTML = "Unknown operator! ❌";
                    output.className = 'output danger';
                    return;
            }
            
            output.innerHTML = `
                <strong>${operationName}:</strong> ${num1} ${operator} ${num2} = <strong>${result}</strong><br>
                <small>Operation completed successfully! ✅</small>
            `;
            output.className = className;
        }
        
        // Clear calculator function
        function clearCalculator() {
            document.getElementById('calc-num1').value = '';
            document.getElementById('calc-num2').value = '';
            document.getElementById('calc-operator').selectedIndex = 0;
            document.getElementById('calc-output').innerHTML = 'Calculator cleared! Enter numbers and select an operation!';
            document.getElementById('calc-output').className = 'output info';
        }
        
        // Traffic light function
        function changeTrafficLight(color) {
            const output = document.getElementById('traffic-output');
            const redLight = document.getElementById('red-light');
            const yellowLight = document.getElementById('yellow-light');
            const greenLight = document.getElementById('green-light');
            
            // Reset all lights
            redLight.style.background = '#darkred';
            yellowLight.style.background = '#darkorange';
            greenLight.style.background = '#darkgreen';
            
            let message, className;
            
            switch (color) {
                case 'red':
                    redLight.style.background = '#ff0000';
                    redLight.style.boxShadow = '0 0 20px #ff0000';
                    message = "🔴 RED LIGHT - STOP! Do not proceed! Wait for green light!";
                    className = 'output danger';
                    break;
                case 'yellow':
                    yellowLight.style.background = '#ffff00';
                    yellowLight.style.boxShadow = '0 0 20px #ffff00';
                    message = "🟡 YELLOW LIGHT - CAUTION! Prepare to stop! Light will change soon!";
                    className = 'output warning';
                    break;
                case 'green':
                    greenLight.style.background = '#00ff00';
                    greenLight.style.boxShadow = '0 0 20px #00ff00';
                    message = "🟢 GREEN LIGHT - GO! Proceed with caution! Drive safely!";
                    className = 'output success';
                    break;
                case 'off':
                    redLight.style.boxShadow = 'none';
                    yellowLight.style.boxShadow = 'none';
                    greenLight.style.boxShadow = 'none';
                    message = "⚫ LIGHTS OFF - Traffic light is not operational! Exercise extreme caution!";
                    className = 'output info';
                    break;
                default:
                    message = "Invalid light color! Use red, yellow, green, or off! ❌";
                    className = 'output danger';
                    break;
            }
            
            output.innerHTML = message;
            output.className = className;
        }
        
        // Music recommendation function
        function getMusicRecommendation() {
            const mood = document.getElementById('mood-select').value;
            const output = document.getElementById('music-output');
            let result, className = 'output success';
            
            switch (mood) {
                case 'happy':
                    result = "😊 Happy Vibes! Try: Pop, Dance, Funk, or Upbeat Rock! 🎵 Artists: Pharrell Williams, Dua Lipa, Bruno Mars!";
                    break;
                case 'sad':
                    result = "😢 Melancholy Mood! Try: Blues, Sad Ballads, or Indie Folk! 🎭 Artists: Adele, Johnny Cash, Bon Iver!";
                    break;
                case 'energetic':
                    result = "⚡ High Energy! Try: Electronic, Hip-Hop, Metal, or Punk Rock! 🔥 Artists: The Prodigy, Eminem, Metallica!";
                    break;
                case 'relaxed':
                    result = "😌 Chill Mode! Try: Lo-fi, Ambient, Jazz, or Acoustic! 🌙 Artists: Norah Jones, Miles Davis, Bon Iver!";
                    break;
                case 'romantic':
                    result = "💕 Love Songs! Try: R&B, Romantic Pop, or Smooth Jazz! 💖 Artists: John Legend, Ed Sheeran, Sade!";
                    break;
                case 'angry':
                    result = "😠 Release the Rage! Try: Heavy Metal, Punk, or Aggressive Rap! 🔥 Artists: Rage Against the Machine, Eminem!";
                    break;
                case 'nostalgic':
                    result = "🎭 Memory Lane! Try: Classic Rock, Oldies, or Retro Pop! 📻 Artists: The Beatles, Queen, Michael Jackson!";
                    break;
                case '':
                    result = "Please select your current mood to get personalized music recommendations! 🎵";
                    className = 'output info';
                    break;
                default:
                    result = "Mood not recognized! Please select from the available options! ❌";
                    className = 'output danger';
                    break;
            }
            
            output.innerHTML = result;
            output.className = className;
        }
        
        // Seasonal activities function
        function getSeasonalActivities() {
            const season = document.getElementById('season-input').value.toLowerCase().trim();
            const output = document.getElementById('season-output');
            let result, className = 'output success';
            
            switch (season) {
                case 'spring':
                    result = "🌸 Spring Activities! Try: Hiking, Gardening, Picnics, Bird Watching, Cycling, Outdoor Photography, or visiting Botanical Gardens!";
                    break;
                case 'summer':
                    result = "☀️ Summer Fun! Try: Swimming, Beach Volleyball, BBQ Parties, Camping, Water Sports, Outdoor Concerts, or Ice Cream Tours!";
                    break;
                case 'fall':
                case 'autumn':
                    result = "🍂 Fall Adventures! Try: Apple Picking, Hiking, Pumpkin Patches, Halloween Parties, Cozy Reading, or Leaf Peeping!";
                    break;
                case 'winter':
                    result = "❄️ Winter Wonderland! Try: Skiing, Ice Skating, Hot Chocolate by the Fire, Holiday Markets, or Building Snowmen!";
                    break;
                case '':
                    result = "Please enter a season to get activity suggestions! 🌟";
                    className = 'output info';
                    break;
                default:
                    result = `"${season}" is not a recognized season! Try: spring, summer, fall/autumn, or winter! ❌`;
                    className = 'output danger';
                    break;
            }
            
            output.innerHTML = `<strong>Season: ${season.charAt(0).toUpperCase() + season.slice(1)}</strong><br>${result}`;
            output.className = className;
        }
    </script>
</body>
</html>`
        },
        {
            title: "Loops",
            explanation: "Loops allow you to repeat code multiple times. JavaScript provides several types of loops: for loops (with known iterations), while loops (condition-based), and do-while loops (execute at least once). Loops are essential for processing arrays, creating patterns, and automating repetitive tasks.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Loops</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            max-width: 1000px; 
            margin: 0 auto; 
            padding: 20px;
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
        }
        .demo-box { 
            background: white; 
            padding: 25px; 
            margin: 20px 0; 
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        .code-example { 
            background: #2d3748; 
            color: #e2e8f0;
            padding: 20px; 
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            overflow-x: auto;
            margin: 15px 0;
            font-size: 14px;
        }
        .output { 
            background: #f8f9fa; 
            padding: 15px; 
            border-left: 4px solid #007bff;
            margin: 10px 0;
            border-radius: 8px;
            min-height: 30px;
            font-family: monospace;
            white-space: pre-wrap;
            max-height: 300px;
            overflow-y: auto;
        }
        .success { border-left-color: #28a745; background: #d4edda; }
        .warning { border-left-color: #ffc107; background: #fff3cd; }
        .info { border-left-color: #17a2b8; background: #d1ecf1; }
        button { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            padding: 12px 20px; 
            border: none; 
            border-radius: 8px; 
            cursor: pointer;
            margin: 5px;
            transition: all 0.3s;
            font-size: 14px;
        }
        button:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
        input, select { 
            padding: 10px; 
            margin: 5px; 
            border: 2px solid #e9ecef; 
            border-radius: 8px; 
            font-size: 16px;
        }
        input:focus, select:focus { 
            border-color: #667eea; 
            outline: none; 
        }
        h1 { color: white; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
        .pattern-display { 
            font-family: monospace; 
            background: #f8f9fa; 
            padding: 20px; 
            border-radius: 10px; 
            border: 2px solid #e9ecef;
            white-space: pre;
            font-size: 16px;
            line-height: 1.2;
        }
        .loop-controls { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
            gap: 15px; 
            margin: 15px 0; 
        }
    </style>
</head>
<body>
    <h1>🔄 JavaScript Loops</h1>
    
    <div class="demo-box">
        <h2>1. Loop Types Overview</h2>
        <p>JavaScript provides several ways to create loops:</p>
        
        <div class="code-example">
// FOR LOOP - Known number of iterations
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

// WHILE LOOP - Continue while condition is true
let count = 0;
while (count < 3) {
    console.log("Count: " + count);
    count++;
}

// DO-WHILE LOOP - Execute at least once
let num = 0;
do {
    console.log("Number: " + num);
    num++;
} while (num < 2);

// FOR...OF LOOP - Iterate over arrays
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit);
}
        </div>
    </div>
    
    <div class="demo-box">
        <h2>2. Basic For Loop Counter</h2>
        <p>Demonstrate a simple counting loop:</p>
        
        <div class="loop-controls">
            <input type="number" id="count-start" placeholder="Start number" value="1">
            <input type="number" id="count-end" placeholder="End number" value="10">
            <input type="number" id="count-step" placeholder="Step" value="1">
        </div>
        
        <button onclick="runForLoop()">Run For Loop</button>
        <button onclick="clearOutput('for-loop-output')">Clear</button>
        
        <div class="output" id="for-loop-output">Enter range and click 'Run For Loop'!</div>
    </div>
    
    <div class="demo-box">
        <h2>3. While Loop with User Control</h2>
        <p>While loop that continues until a condition is met:</p>
        
        <input type="number" id="while-target" placeholder="Target number" value="100">
        <select id="while-operation">
            <option value="multiply">Multiply by 2</option>
            <option value="add">Add 10</option>
            <option value="square">Square the number</option>
        </select>
        
        <button onclick="runWhileLoop()">Run While Loop</button>
        <button onclick="clearOutput('while-loop-output')">Clear</button>
        
        <div class="output" id="while-loop-output">Set target and operation, then click 'Run While Loop'!</div>
    </div>
    
    <div class="demo-box">
        <h2>4. Array Processing Loops</h2>
        <p>Different ways to loop through arrays:</p>
        
        <textarea id="array-input" placeholder="Enter items separated by commas (e.g., apple, banana, orange)" 
                  rows="3" style="width: 100%; padding: 10px; border: 2px solid #e9ecef; border-radius: 8px;">apple, banana, orange, grape, strawberry</textarea>
        
        <div style="margin: 15px 0;">
            <button onclick="processArrayFor()">For Loop</button>
            <button onclick="processArrayForOf()">For...Of Loop</button>
            <button onclick="processArrayForEach()">forEach Method</button>
            <button onclick="processArrayWhile()">While Loop</button>
        </div>
        
        <div class="output" id="array-output">Enter array items and choose a loop type!</div>
    </div>
    
    <div class="demo-box">
        <h2>5. Pattern Generator</h2>
        <p>Create visual patterns using nested loops:</p>
        
        <div class="loop-controls">
            <select id="pattern-type">
                <option value="stars">Star Pattern</option>
                <option value="numbers">Number Pattern</option>
                <option value="pyramid">Pyramid</option>
                <option value="diamond">Diamond</option>
                <option value="checkerboard">Checkerboard</option>
            </select>
            <input type="number" id="pattern-size" placeholder="Size" value="5" min="1" max="15">
        </div>
        
        <button onclick="generatePattern()">Generate Pattern</button>
        <button onclick="clearPattern()">Clear Pattern</button>
        
        <div class="pattern-display" id="pattern-output">Select pattern type and size, then click 'Generate Pattern'!</div>
    </div>
    
    <div class="demo-box">
        <h2>6. Multiplication Table Generator</h2>
        <p>Generate multiplication tables using loops:</p>
        
        <div class="loop-controls">
            <input type="number" id="table-number" placeholder="Table for number" value="7" min="1" max="20">
            <input type="number" id="table-limit" placeholder="Up to" value="12" min="1" max="20">
        </div>
        
        <button onclick="generateTable()">Generate Table</button>
        <button onclick="clearOutput('table-output')">Clear</button>
        
        <div class="output" id="table-output">Enter a number to generate its multiplication table!</div>
    </div>
    
    <div class="demo-box">
        <h2>7. Prime Number Finder</h2>
        <p>Find prime numbers using loops and conditions:</p>
        
        <input type="number" id="prime-limit" placeholder="Find primes up to this number" value="50" min="2" max="1000">
        <button onclick="findPrimes()">Find Prime Numbers</button>
        <button onclick="clearOutput('prime-output')">Clear</button>
        
        <div class="output" id="prime-output">Enter a limit to find all prime numbers up to that number!</div>
    </div>
    
    <div class="demo-box">
        <h2>8. Interactive Number Guessing Game</h2>
        <p>Loop-based guessing game:</p>
        
        <div id="game-status" class="output info">Click 'Start Game' to begin!</div>
        
        <div id="game-controls" style="display: none;">
            <input type="number" id="guess-input" placeholder="Enter your guess (1-100)" min="1" max="100">
            <button onclick="makeGuess()">Make Guess</button>
            <button onclick="giveHint()">Get Hint</button>
        </div>
        
        <button id="start-game-btn" onclick="startGuessingGame()">Start New Game</button>
        
        <div class="output" id="game-output">Game results will appear here!</div>
    </div>

    <script>
        // For loop demonstration
        function runForLoop() {
            const start = parseInt(document.getElementById('count-start').value) || 1;
            const end = parseInt(document.getElementById('count-end').value) || 10;
            const step = parseInt(document.getElementById('count-step').value) || 1;
            const output = document.getElementById('for-loop-output');
            
            if (step <= 0) {
                output.innerHTML = 'Error: Step must be positive!';
                output.className = 'output warning';
                return;
            }
            
            let result = `For Loop: from ${start} to ${end} (step: ${step})\n\n`;
            let count = 0;
            
            for (let i = start; i <= end; i += step) {
                result += `Iteration ${++count}: i = ${i}\n`;
                if (count > 50) { // Prevent infinite display
                    result += '... (truncated, too many iterations)\n';
                    break;
                }
            }
            
            result += `\nTotal iterations: ${count}`;
            output.innerHTML = result;
            output.className = 'output success';
        }
        
        // While loop demonstration
        function runWhileLoop() {
            const target = parseInt(document.getElementById('while-target').value) || 100;
            const operation = document.getElementById('while-operation').value;
            const output = document.getElementById('while-loop-output');
            
            let current = 1;
            let iterations = 0;
            let result = `While Loop: reaching ${target} using ${operation}\n\n`;
            
            while (current < target && iterations < 20) {
                result += `Step ${++iterations}: ${current}`;
                
                switch (operation) {
                    case 'multiply':
                        current *= 2;
                        result += ' × 2 = ' + current + '\n';
                        break;
                    case 'add':
                        current += 10;
                        result += ' + 10 = ' + current + '\n';
                        break;
                    case 'square':
                        current = current * current;
                        result += '² = ' + current + '\n';
                        break;
                }
                
                if (current >= target) {
                    result += `\nTarget ${target} reached!`;
                    break;
                }
            }
            
            if (iterations >= 20) {
                result += '\n... (stopped at 20 iterations to prevent overflow)';
            }
            
            output.innerHTML = result;
            output.className = 'output success';
        }
        
        // Array processing functions
        function getArrayFromInput() {
            const input = document.getElementById('array-input').value;
            return input.split(',').map(item => item.trim()).filter(item => item !== '');
        }
        
        function processArrayFor() {
            const array = getArrayFromInput();
            const output = document.getElementById('array-output');
            
            let result = 'Processing array with FOR loop:\n\n';
            for (let i = 0; i < array.length; i++) {
                result += `Index ${i}: "${array[i]}" (length: ${array[i].length})\n`;
            }
            result += `\nTotal items processed: ${array.length}`;
            
            output.innerHTML = result;
            output.className = 'output success';
        }
        
        function processArrayForOf() {
            const array = getArrayFromInput();
            const output = document.getElementById('array-output');
            
            let result = 'Processing array with FOR...OF loop:\n\n';
            let index = 0;
            for (const item of array) {
                result += `Item ${++index}: "${item}" (uppercase: "${item.toUpperCase()}")\n`;
            }
            result += `\nTotal items processed: ${array.length}`;
            
            output.innerHTML = result;
            output.className = 'output success';
        }
        
        function processArrayForEach() {
            const array = getArrayFromInput();
            const output = document.getElementById('array-output');
            
            let result = 'Processing array with forEach method:\n\n';
            array.forEach((item, index) => {
                result += `Position ${index + 1}: "${item}" (reversed: "${item.split('').reverse().join('')}")\n`;
            });
            result += `\nTotal items processed: ${array.length}`;
            
            output.innerHTML = result;
            output.className = 'output success';
        }
        
        function processArrayWhile() {
            const array = getArrayFromInput();
            const output = document.getElementById('array-output');
            
            let result = 'Processing array with WHILE loop:\n\n';
            let i = 0;
            while (i < array.length) {
                const item = array[i];
                result += `Step ${i + 1}: "${item}" (first letter: "${item.charAt(0)}")\n`;
                i++;
            }
            result += `\nTotal items processed: ${array.length}`;
            
            output.innerHTML = result;
            output.className = 'output success';
        }
        
        // Pattern generator
        function generatePattern() {
            const patternType = document.getElementById('pattern-type').value;
            const size = parseInt(document.getElementById('pattern-size').value) || 5;
            const output = document.getElementById('pattern-output');
            
            let pattern = '';
            
            switch (patternType) {
                case 'stars':
                    for (let i = 1; i <= size; i++) {
                        for (let j = 1; j <= i; j++) {
                            pattern += '* ';
                        }
                        pattern += '\n';
                    }
                    break;
                    
                case 'numbers':
                    for (let i = 1; i <= size; i++) {
                        for (let j = 1; j <= i; j++) {
                            pattern += j + ' ';
                        }
                        pattern += '\n';
                    }
                    break;
                    
                case 'pyramid':
                    for (let i = 1; i <= size; i++) {
                        // Add spaces
                        for (let j = 1; j <= size - i; j++) {
                            pattern += ' ';
                        }
                        // Add stars
                        for (let j = 1; j <= 2 * i - 1; j++) {
                            pattern += '*';
                        }
                        pattern += '\n';
                    }
                    break;
                    
                case 'diamond':
                    // Upper half
                    for (let i = 1; i <= size; i++) {
                        for (let j = 1; j <= size - i; j++) {
                            pattern += ' ';
                        }
                        for (let j = 1; j <= 2 * i - 1; j++) {
                            pattern += '*';
                        }
                        pattern += '\n';
                    }
                    // Lower half
                    for (let i = size - 1; i >= 1; i--) {
                        for (let j = 1; j <= size - i; j++) {
                            pattern += ' ';
                        }
                        for (let j = 1; j <= 2 * i - 1; j++) {
                            pattern += '*';
                        }
                        pattern += '\n';
                    }
                    break;
                    
                case 'checkerboard':
                    for (let i = 0; i < size; i++) {
                        for (let j = 0; j < size; j++) {
                            if ((i + j) % 2 === 0) {
                                pattern += '█ ';
                            } else {
                                pattern += '░ ';
                            }
                        }
                        pattern += '\n';
                    }
                    break;
            }
            
            output.innerHTML = pattern || 'No pattern generated';
            output.style.fontSize = size > 10 ? '12px' : '16px';
        }
        
        function clearPattern() {
            document.getElementById('pattern-output').innerHTML = 'Pattern cleared! Select a new pattern to generate.';
        }
        
        // Multiplication table generator
        function generateTable() {
            const number = parseInt(document.getElementById('table-number').value) || 7;
            const limit = parseInt(document.getElementById('table-limit').value) || 12;
            const output = document.getElementById('table-output');
            
            let result = `Multiplication Table for ${number}:\n\n`;
            
            for (let i = 1; i <= limit; i++) {
                const product = number * i;
                result += `${number} × ${i.toString().padStart(2, ' ')} = ${product.toString().padStart(3, ' ')}\n`;
            }
            
            output.innerHTML = result;
            output.className = 'output success';
        }
        
        // Prime number finder
        function findPrimes() {
            const limit = parseInt(document.getElementById('prime-limit').value) || 50;
            const output = document.getElementById('prime-output');
            
            if (limit < 2) {
                output.innerHTML = 'Please enter a number greater than 1!';
                output.className = 'output warning';
                return;
            }
            
            let primes = [];
            let result = `Prime numbers from 2 to ${limit}:\n\n`;
            
            for (let num = 2; num <= limit; num++) {
                let isPrime = true;
                
                // Check if number is prime
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
                
                if (isPrime) {
                    primes.push(num);
                }
            }
            
            result += primes.join(', ') + '\n\n';
            result += `Found ${primes.length} prime numbers.`;
            
            output.innerHTML = result;
            output.className = 'output success';
        }
        
        // Guessing game variables
        let secretNumber;
        let guessCount;
        let gameActive = false;
        
        function startGuessingGame() {
            secretNumber = Math.floor(Math.random() * 100) + 1;
            guessCount = 0;
            gameActive = true;
            
            document.getElementById('game-status').innerHTML = 'Game started! I\'m thinking of a number between 1 and 100.';
            document.getElementById('game-status').className = 'output info';
            document.getElementById('game-controls').style.display = 'block';
            document.getElementById('start-game-btn').textContent = 'Start New Game';
            document.getElementById('guess-input').value = '';
            document.getElementById('game-output').innerHTML = 'Make your first guess!';
            document.getElementById('game-output').className = 'output';
        }
        
        function makeGuess() {
            if (!gameActive) {
                alert('Please start a new game first!');
                return;
            }
            
            const guess = parseInt(document.getElementById('guess-input').value);
            const output = document.getElementById('game-output');
            
            if (isNaN(guess) || guess < 1 || guess > 100) {
                output.innerHTML = 'Please enter a valid number between 1 and 100!';
                output.className = 'output warning';
                return;
            }
            
            guessCount++;
            let result = `Guess #${guessCount}: ${guess}\n`;
            
            if (guess === secretNumber) {
                result += `🎉 Congratulations! You guessed it in ${guessCount} tries!\n`;
                result += `The number was ${secretNumber}.`;
                output.className = 'output success';
                gameActive = false;
                document.getElementById('game-controls').style.display = 'none';
            } else if (guess < secretNumber) {
                result += '📈 Too low! Try a higher number.';
                output.className = 'output info';
            } else {
                result += '📉 Too high! Try a lower number.';
                output.className = 'output info';
            }
            
            if (guessCount >= 10 && gameActive) {
                result += `\n\n😅 Hint: You've made ${guessCount} guesses. The number is ${secretNumber}.`;
            }
            
            output.innerHTML = result;
            document.getElementById('guess-input').value = '';
        }
        
        function giveHint() {
            if (!gameActive) return;
            
            const output = document.getElementById('game-output');
            let hints = [];
            
            if (secretNumber % 2 === 0) {
                hints.push('The number is even.');
            } else {
                hints.push('The number is odd.');
            }
            
            if (secretNumber <= 25) {
                hints.push('The number is 25 or less.');
            } else if (secretNumber <= 50) {
                hints.push('The number is between 26 and 50.');
            } else if (secretNumber <= 75) {
                hints.push('The number is between 51 and 75.');
            } else {
                hints.push('The number is between 76 and 100.');
            }
            
            output.innerHTML = `💡 Hints:\n${hints.join('\n')}`;
            output.className = 'output warning';
        }
        
        // Utility function to clear outputs
        function clearOutput(elementId) {
            const element = document.getElementById(elementId);
            element.innerHTML = 'Output cleared!';
            element.className = 'output info';
        }
        
        // Enter key support for inputs
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const activeElement = document.activeElement;
                if (activeElement.id === 'guess-input') {
                    makeGuess();
                }
            }
        });
    </script>
</body>
</html>`
        },
        {
            title: "Nested Loops",
            explanation: "Nested loops are loops inside other loops. They are essential for working with multidimensional data, creating patterns, matrices, and solving complex problems that require multiple levels of iteration. Understanding nested loops is crucial for advanced programming concepts.",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Nested Loops</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            max-width: 1100px; 
            margin: 0 auto; 
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .demo-box { 
            background: white; 
            padding: 25px; 
            margin: 20px 0; 
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        .code-example { 
            background: #2d3748; 
            color: #e2e8f0;
            padding: 20px; 
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            overflow-x: auto;
            margin: 15px 0;
            font-size: 13px;
            line-height: 1.4;
        }
        .output { 
            background: #f8f9fa; 
            padding: 15px; 
            border-left: 4px solid #007bff;
            margin: 10px 0;
            border-radius: 8px;
            font-family: monospace;
            white-space: pre-wrap;
            max-h