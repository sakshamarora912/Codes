<html>
    <body>
    <form action=" "method="post">
        <label>enter the number</label>
        <input type="text" name="bn"><br>
        <input type="text" name="rp"><br>
        <input type="submit" value="result">
        <input type="result">
</form>
</body>
</html>
<?php
if($_POST){
    $n=$_POST['bn'];
    $n1=$_POST['rp'];
    $temp=1;
    for($i=1;$i<=$n1;$i++){
        $temp=$n*$temp;
        echo "<br>";
        echo "value after loop";
    }
}