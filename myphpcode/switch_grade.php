<html lang="en">
<body>
<form action=""method="POST">
   <label>Enter the percentage</label>
   <input type="text" name="p"><br>
   <input type="submit" value="check">
  </form>
</body>  
<?php
if($_POST){
  $marks=$_POST['p'];
  switch($marks){
    case($marks>90); echo"Grade is A"; break;
    case($marks>=70 && $marks <90); echo"Grade is b"; break;
    case($marks>=40 && $marks <70); echo"Grade is c"; break;
    case($marks<40); echo"You are not cleared"; break;
    default: echo"Result not declared";break;
  }
}
?>
</html>
