<?php
$ages=array("saksham"=>42,"shivam"=>28,"shiv"=>17);
var_dump($ages); echo "<br>";

$num=array(0=>45,1=>56,2=>76,"name"=>"saksham");
var_dump($num); echo "<br>";
print_r($num); echo "<br>";

foreach($num as $n){
  echo $n; echo "<br>";
}
$num1=array(array("a"=>1,"b"=>2,"c"=>3),array("d"=>4,"e"=>5,"f"=>6));
var_dump($num1); echo "<br>";
print_r($num1); echo "<br>";

foreach($num1 as $n){
  echo $n, "<br>";
}

// for($i=1;$i<sizeof($num1);$i++){   //index should be start from 1 as in defing array element start from index 1
//   echo $num1[$i], "<br>";
// }

for($i=0;$i<sizeof($num1);$i++){
  for($j=0;$j<sizeof($num1[$i]);$j++){
    echo $num1[$i][$j];
  }
  echo "<br>";
}

$car=array("volvo"=>"XC90","BMW"=>"X5","Toyota"=>"Highlander");
print_r(array_keys($car)); echo "<br>";
print_r(array_values($car)); echo "<br>";

?>
