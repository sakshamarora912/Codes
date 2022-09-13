<html lang="en">
<head>
  <title>Factorial</title>
</head>
<body>
  <div>FACTORIAL CALCULATOR</div><br>
<form action="" method="post"> 
    <input type="number" name="val" id="val" placeholder="Enter a positive val" />
  </form>
</body>
</html>

<?php 
$num = $_POST['val'];  
$fact= 1;  
for ($i=$num; $i>=1; $i--)   
{  
  $fact = $fact * $i;
  
}  
echo "Factorial of $num is $fact";  
?>