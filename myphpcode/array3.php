<?php
$a=array(7,12,21,19,29,67);
$b=array(7,12,21,19,29);
$c=array();
for($i=0;$i<sizeof($a);$i++){$c[$i]=$a[$i]+$b[$i];}
for($i=0;$i<sizeof($c);$i++){echo $c[$i]," ";}

foreach($a as $n){echo $n,"<br>";}
?>