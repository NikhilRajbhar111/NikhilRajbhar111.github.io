## 📊 **HTML Tables**

The `<table>` tag is used to **display data in rows and columns**, like a spreadsheet.

---

## 🧱 **Basic Table Structure**

```html
<table>
  <tr>        <!-- Table Row -->
    <th>...</th>  <!-- Table Header -->
    <td>...</td>  <!-- Table Data -->
  </tr>
</table>
```

---

## 🏷️ **Table Tags and Their Purpose**

| Tag         | Description                                  |
| ----------- | -------------------------------------------- |
| `<table>`   | Starts the table                             |
| `<tr>`      | Table row (wraps header/data cells)          |
| `<th>`      | Table **header cell** (bold & centered text) |
| `<td>`      | Table **data cell**                          |
| `<thead>`   | Groups the table header rows (optional)      |
| `<tbody>`   | Groups the main body rows (optional)         |
| `<tfoot>`   | Groups the footer rows (optional)            |
| `<caption>` | Adds a **title/caption** above the table     |

---

## 🧾 **Common Table Attributes**

| Attribute     | Applied To    | Description                          | Example Value         |
| ------------- | ------------- | ------------------------------------ | --------------------- |
| `border`      | `<table>`     | Adds border to the table             | `border="1"`          |
| `cellspacing` | `<table>`     | Space between cells                  | `cellspacing="5"`     |
| `cellpadding` | `<table>`     | Space **inside** cells               | `cellpadding="10"`    |
| `width`       | `<table>`     | Width of the table (px or %)         | `width="100%"`        |
| `height`      | `<table>`     | Height of the table                  | `height="300"`        |
| `align`       | `<table>`     | Aligns the table (left/center/right) | `align="center"`      |
| `bgcolor`     | Any cell      | Background color of a cell           | `bgcolor="lightblue"` |
| `colspan`     | `<td>`/`<th>` | Cell spans multiple columns          | `colspan="2"`         |
| `rowspan`     | `<td>`/`<th>` | Cell spans multiple rows             | `rowspan="3"`         |

---

## 📋 **Full Example with Attributes**

```html
<table border="1" cellpadding="10" cellspacing="5" width="70%" align="center">
  <caption><strong>Student Marks Table</strong></caption>

  <thead>
    <tr>
      <th>Roll No</th>
      <th>Name</th>
      <th>Maths</th>
      <th>Science</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1</td>
      <td>John</td>
      <td>85</td>
      <td>90</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Alice</td>
      <td>92</td>
      <td>88</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="2">Total Students</td>
      <td colspan="2">2</td>
    </tr>
  </tfoot>
</table>
```

---

## ✅ **Special Attributes for `<td>` and `<th>`**

### ➤ `colspan` – Span across columns

```html
<td colspan="2">Combined Cell</td>
```

### ➤ `rowspan` – Span across rows

```html
<td rowspan="2">Merged Row Cell</td>
```

---

## 📝 Summary

| Tag         | Purpose                      |
| ----------- | ---------------------------- |
| `<table>`   | Creates the table            |
| `<tr>`      | Defines a row                |
| `<th>`      | Defines a **header cell**    |
| `<td>`      | Defines a **data cell**      |
| `<thead>`   | Groups header content        |
| `<tbody>`   | Groups main body content     |
| `<tfoot>`   | Groups footer content        |
| `<caption>` | Adds a title above the table |

Great! Let’s now learn about **Nested Tables** — a table **inside another table** — with clear explanation, structure, and examples.

---

## 🔄 **What is a Nested Table?**

A **nested table** is a table that is placed **within a `<td>` (table cell)** of another table.

> ✅ Used when you need to organize complex data or group related information inside a table.

---

## 📌 **Where Is It Used?**

* Report cards
* Invoices
* Dashboards
* Any complex layout using tabular data

---

## 🧱 **Basic Structure of a Nested Table**

```html
<table border="1">
  <tr>
    <td>Outer Cell 1</td>
    <td>
      <!-- Nested Table starts here -->
      <table border="1">
        <tr>
          <td>Nested Cell 1</td>
          <td>Nested Cell 2</td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

---

## 📋 **Full Example of a Nested Table**

```html
<table border="2" cellpadding="10" cellspacing="0">
  <caption><strong>Employee Details</strong></caption>
  
  <tr>
    <th>Name</th>
    <th>Contact Info</th>
  </tr>

  <tr>
    <td>John Doe</td>
    <td>
      <!-- Nested table inside contact info -->
      <table border="1" cellpadding="5">
        <tr>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        <tr>
          <td>john@example.com</td>
          <td>123-456-7890</td>
        </tr>
      </table>
    </td>
  </tr>

  <tr>
    <td>Jane Smith</td>
    <td>
      <table border="1" cellpadding="5">
        <tr>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        <tr>
          <td>jane@example.com</td>
          <td>987-654-3210</td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

---

## 🧾 Tips for Nested Tables

| Tip                                   | Why It’s Important                   |
| ------------------------------------- | ------------------------------------ |
| Use proper **indentation**            | Improves readability                 |
| Add **border** and **cellpadding**    | Keeps layout clear and clean         |
| Avoid excessive nesting               | Too many layers can make HTML messy  |
| Use for **data grouping**, not layout | Use **CSS** for complex page layouts |

---

## ✅ Summary

* Nested tables are **tables inside `<td>` cells**.
* Useful for **grouping related data** visually.
* Easy to implement but should be used **only when needed**.
* Avoid using nested tables for full website layout — CSS is better for that.