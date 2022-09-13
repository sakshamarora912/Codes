<?php
$count=0;
for($i=1;$i<=10;$i++){
  if($i%2==0){
    echo"the Even number between 1 to 10 ",$i;
    $count++;
  }
  echo $count;
}
?>