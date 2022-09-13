<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

<?php
 $num=array(5,10,15,20,25);

// $nameone = array("Zack", "Anthony", "Ram", "Salim", "Raghav");
 

// echo "Accessing the 1st array elements directly:\n";
// echo $nameone[2], "\n";
// echo $nameone[0], "\n";
// echo $nameone[4], "\n";
echo "<br>".var_dump($num);
echo "<br>";
print_r($num);
echo $num[0];
for($i=0;$i<sizeof($num);$i++)
{
    echo "<br>".$num[$i];
}
?>