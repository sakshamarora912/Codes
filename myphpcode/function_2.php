<?php
$x=1;
$y=2;
function defaultval($a=2,$b=4){
    $a=$a+$b;
    echo $a." ".$b."<br>";
}
function callByValue($x,$y){
    $x=$x+$y;
    echo $x." ".$y."<br>";
}
callByValue($x,$y); echo $x." ".$y."<br>";

function callByRef(&$x,&$y){
    $x=$x+$y;
    echo $x." ".$y."<br>";
}
callByRef($x,$y); echo $x." ".$y."<br>";
defaultval();

?>



