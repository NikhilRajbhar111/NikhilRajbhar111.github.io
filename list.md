## 📋 **What is a List in HTML?**

HTML provides tags to create different types of lists. Lists help organize content into readable, structured formats like:

* Bullet points
* Numbered steps
* Definitions

---

## 🧾 **Types of Lists in HTML**

### 1️⃣ **Unordered List (`<ul>`)**

* Displays items with **bullets**
* Best for non-sequential data

#### Syntax:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

---

### 2️⃣ **Ordered List (`<ol>`)**

* Displays items with **numbers or letters**
* Best for steps, rankings, or sequences

#### Syntax:

```html
<ol>
  <li>Step 1</li>
  <li>Step 2</li>
</ol>
```

#### ➕ Optional Attribute for `<ol>`:

| Attribute | Description                                    | Example          |
| --------- | ---------------------------------------------- | ---------------- |
| `type`    | Changes marker style (`1`, `A`, `a`, `I`, `i`) | `<ol type="A">`  |
| `start`   | Starts list from a specific number             | `<ol start="5">` |

---

### 3️⃣ **Description List (`<dl>`)**

* Used for **terms and definitions**

#### Syntax:

```html
<dl>
  <dt>HTML</dt>   <!-- Definition term -->
  <dd>HyperText Markup Language</dd>  <!-- Description -->
</dl>
```

---

## 🔁 **Nested Lists**

Nested lists are **lists inside lists**. You can nest:

* `<ul>` inside `<ul>`
* `<ol>` inside `<ol>`
* Even mix `<ul>` and `<ol>`

### 🧱 Example: Nested Unordered List

```html
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Tomato</li>
    </ul>
  </li>
</ul>
```

---

### 🔢 Example: Nested Ordered List

```html
<ol>
  <li>Step One</li>
  <li>Step Two
    <ol type="a">
      <li>Sub-step A</li>
      <li>Sub-step B</li>
    </ol>
  </li>
</ol>
```

---

### 🔀 Example: Mixed Nested List

```html
<ul>
  <li>Languages
    <ol>
      <li>HTML</li>
      <li>CSS</li>
    </ol>
  </li>
  <li>Tools
    <ul>
      <li>VS Code</li>
      <li>Browser</li>
    </ul>
  </li>
</ul>
```

---

## ✅ Summary Table

| Tag    | Purpose                                |
| ------ | -------------------------------------- |
| `<ul>` | Unordered list (bulleted)              |
| `<ol>` | Ordered list (numbered or lettered)    |
| `<li>` | List item (used in both `<ul>`/`<ol>`) |
| `<dl>` | Description list container             |
| `<dt>` | Term being described                   |
| `<dd>` | Description of the term                |