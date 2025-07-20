<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form in a Table</title>
</head>
<body>
    <h1>Form Inside a Table</h1>

    <form>
        <table border="1" cellpadding="5">
            <tr>
                <td>Username:</td>
                <td><input type="text" name="username"></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input type="password" name="password"></td>
            </tr>
            <tr>
                <td colspan="2"><input type="submit" value="Login"></td>
            </tr>
        </table>
    </form>

    <h2>Assignment</h2>
    <p>Design a login form inside a table with username and password fields.</p>
</body>
</html>
