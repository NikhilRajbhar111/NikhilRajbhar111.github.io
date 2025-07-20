```html
<!DOCTYPE html>
<html>
<head>
    <title>Full Input Types Form Using Table</title>
</head>
<body bgcolor="lightyellow">

<h2 align="center" style="color:blue;">Complete Registration Form</h2>

<form action="/submit" method="post">
    <table border="1" cellpadding="8" cellspacing="0" align="center" bgcolor="white">
        <tr bgcolor="#87CEFA">
            <th colspan="2">Fill in all fields</th>
        </tr>
        <tr>
            <td><label for="fullname">Full Name:</label></td>
            <td><input type="text" id="fullname" name="fullname" required></td>
        </tr>
        <tr>
            <td><label for="password">Password:</label></td>
            <td><input type="password" id="password" name="password" required></td>
        </tr>
        <tr>
            <td><label for="email">Email:</label></td>
            <td><input type="email" id="email" name="email" required></td>
        </tr>
        <tr>
            <td><label for="number">Age:</label></td>
            <td><input type="number" id="number" name="age" min="1" max="120" required></td>
        </tr>
        <tr>
            <td><label for="date">Date of Birth:</label></td>
            <td><input type="date" id="date" name="dob" required></td>
        </tr>
        <tr>
            <td>Gender:</td>
            <td>
                <input type="radio" id="male" name="gender" value="male" required>
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female">
                <label for="female">Female</label>
                <input type="radio" id="other" name="gender" value="other">
                <label for="other">Other</label>
            </td>
        </tr>
        <tr>
            <td>Interests:</td>
            <td>
                <input type="checkbox" id="sports" name="interests" value="sports">
                <label for="sports">Sports</label>
                <input type="checkbox" id="music" name="interests" value="music">
                <label for="music">Music</label>
                <input type="checkbox" id="movies" name="interests" value="movies">
                <label for="movies">Movies</label>
            </td>
        </tr>
        <tr>
            <td><label for="color">Favorite Color:</label></td>
            <td><input type="color" id="color" name="favcolor"></td>
        </tr>
        <tr>
            <td><label for="range">Satisfaction Level (1-10):</label></td>
            <td><input type="range" id="range" name="satisfaction" min="1" max="10"></td>
        </tr>
        <tr>
            <td><label for="website">Website:</label></td>
            <td><input type="url" id="website" name="website" placeholder="https://example.com"></td>
        </tr>
        <tr>
            <td><label for="phone">Phone Number:</label></td>
            <td><input type="tel" id="phone" name="phone" placeholder="+1234567890"></td>
        </tr>
        <tr>
            <td><label for="time">Preferred Time:</label></td>
            <td><input type="time" id="time" name="appt"></td>
        </tr>
        <tr>
            <td><label for="bio">Short Bio:</label></td>
            <td><textarea id="bio" name="bio" rows="4" cols="30"></textarea></td>
        </tr>
        <tr>
            <td><label for="country">Country:</label></td>
            <td>
                <select id="country" name="country" required>
                    <option value="">Select</option>
                    <option value="usa">USA</option>
                    <option value="india">India</option>
                    <option value="uk">UK</option>
                    <option value="australia">Australia</option>
                </select>
            </td>
        </tr>
        <tr bgcolor="#87CEFA">
            <td colspan="2" align="center">
                <input type="submit" value="Register">
                <input type="reset" value="Clear">
            </td>
        </tr>
    </table>
</form>

</body>
</html>