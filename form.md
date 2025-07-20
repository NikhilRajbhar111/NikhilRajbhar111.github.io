## 📋 **Why Use a Table in a Form?**

Using a table inside a form helps:

* Align labels and inputs cleanly
* Group related fields row-wise
* Create structured forms like registration, login, etc.

> ✅ This method is old-school but still useful for simple form layouts.

---

## 🧱 **Basic Structure**

```html
<form action="submit.php" method="post">
  <table border="1">
    <tr>
      <td>Label</td>
      <td><input type="text" name="field"></td>
    </tr>
    <!-- Add more rows as needed -->
  </table>
</form>
```

---

## ✅ **Example: Registration Form Using Table**

```html
<form action="submit.php" method="post">
  <table border="1" cellpadding="10" cellspacing="0" align="center">
    <caption><strong>Student Registration Form</strong></caption>

    <tr>
      <td><label for="name">Full Name:</label></td>
      <td><input type="text" id="name" name="fullname" required></td>
    </tr>

    <tr>
      <td><label for="email">Email:</label></td>
      <td><input type="email" id="email" name="email"></td>
    </tr>

    <tr>
      <td>Gender:</td>
      <td>
        <input type="radio" name="gender" value="male"> Male
        <input type="radio" name="gender" value="female"> Female
      </td>
    </tr>

    <tr>
      <td>Subjects:</td>
      <td>
        <input type="checkbox" name="subject" value="math"> Math
        <input type="checkbox" name="subject" value="science"> Science
      </td>
    </tr>

    <tr>
      <td><label for="country">Country:</label></td>
      <td>
        <select id="country" name="country">
          <option value="india">India</option>
          <option value="usa">USA</option>
        </select>
      </td>
    </tr>

    <tr>
      <td><label for="bio">About You:</label></td>
      <td>
        <textarea id="bio" name="bio" rows="4" cols="30"></textarea>
      </td>
    </tr>

    <tr>
      <td colspan="2" align="center">
        <input type="submit" value="Register">
        <input type="reset" value="Clear">
      </td>
    </tr>
  </table>
</form>
```

---

## 🧾 Summary

* Forms can be laid out inside tables using `<table>`, `<tr>`, and `<td>`.
* Each **form row** is placed in a `<tr>`, and the **label/input** pair is placed in separate `<td>`s.
* You can use `colspan`, `align`, or `caption` to enhance layout and readability.