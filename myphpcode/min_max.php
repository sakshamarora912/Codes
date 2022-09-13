<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <label>First Value<label><input type="number" name="first"><br>
        <label>Second Value<label><input type="number" name="sec"><br>
        <input type="submit"></br>
    </form>
    </body>
    <?php
    if($_POST){
        $a=$_POST['first'];
        $b=$_POST['sec'];
        $max=$a;
        $min=$a;
        for($i=$a;$i<$b;$i++){
            if($max<$i){
                $max=$i;
            }
            if($max>$i){
                $min=$i;            
            }
    }
    echo "The maximum value is ".$max;
    echo "<br> The maximum value is ".$min;
}
?>
</html>

