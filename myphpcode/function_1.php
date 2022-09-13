<?php
    $num1=20;
    $num2=30;
    // function add(){
    //     GLOBAL $num1;
    //     GLOBAL $num2;
    //     $result=$num1+$num2;
    //     return $result;
    // }
    function add($a,$b){
        $result=$a+$b;
        return $result;
    }
    function stat1(){
        STATIC $num=0;
        $num++;
        echo $num;
    }
    // $output=add();echo $output;echo"<br>";
    $output_2=add(3,7);echo $output_2;echo"<br>";
    stat1();echo"<br>";
    stat1();echo"<br>";
    stat1();echo"<br>";
?>