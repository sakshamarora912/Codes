<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="" method="POST">
    <label>Enter the no. </label>
    <input type="number" name="bn"><br>
    <label>Enter Exponention </label>
    <input type="number" name="rp"><br>
    <input type="submit" value="result">

    <input type="reset">
  </form> 
</body>
<?php
 $a=$_POST["bn"];
 $b=$_POST["rp"];
 $temp=1;
 for($i=1;$i<=$b;$i++){
  $temp=$n*$temp;
  echo"<br>";
  echo"value after loop",$temp;;
 }
 echo "<br>";
 echo "result ",$temp;

  ?>
</html>