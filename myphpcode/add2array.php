<?php
$a=array(1,2);
$b=array(2,4);
$c = array_map(function (...$arrays) {   
    return array_sum($arrays);
}, $a, $b);

print_r($a); echo"<br>";
print_r($b); echo"<br>";
print_r($c); echo"<br>";

if($c[0]>$c[1]){echo"<br> higest=> ",$c[0],"<br> lowest=> ",$c[1];}
else{echo"<br> higest=> ",$c[1],"<br> lowest=> ",$c[0];}
?>