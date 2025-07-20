```html

<!DOCTYPE html>
<html>
<head>
    <title>Table with Nested Table Example</title>
    <style>
    </style>
</head>
<body>

<table border="1px">
    <tr>
        <th>Product</th>
        <th>Details</th>
    </tr>
    <tr>
        <td>Smartphone</td>
        <td>
            <!-- Nested Table inside this cell -->
            <table border="1px">
                <tr>
                    <th>Feature</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>Screen Size</td>
                    <td>6.5 inches</td>
                </tr>
                <tr>
                    <td>Battery</td>
                    <td>4000 mAh</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td>Laptop</td>
        <td>
            <!-- Another nested table -->
            <table border="1px">
                <tr>
                    <th>Feature</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>Processor</td>
                    <td>Intel i7</td>
                </tr>
                <tr>
                    <td>RAM</td>
                    <td>16 GB</td>
                </tr>
            </table>
        </td>
    </tr>
</table>

</body>
</html>
