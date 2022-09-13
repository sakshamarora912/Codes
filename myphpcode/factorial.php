<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factorial</title>
</head>
<body>
    <form action="" method="POST">
        <label>First Value<label><input type="number" name="first"><br>
        <input type="submit" value="factorial">
        <input type="reset"><br>

    </form>
</body>
</html>
    <?php
    if($_POST){
        $num=$_POST['first'];
        $b=1;
        $count=1;
        while($b <=$num){
            $count=$count*$b;
            $b=$b+1;
            echo "THE FACTORIAL OF ",$num," IS ",$count," <br>";

        }
    }
    ?>