<?php
$cars=array(array(5),array(5,10),array(5,10,15));
$even=0;
for($row=0;$row<4;$row++){
  echo"<b><p>row number $row</p></b>";
  echo "<ul>";
  for($col=0;$col<4;$col++){
    echo"<li>,$car[$row][$col]";
    if(($car[$row][$col]%2)==0){
     $even+=1;
        }
     }
    }
?> 

