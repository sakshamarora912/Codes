<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP - Calculate Electricity Bill</title>
</head>
<?php
$result_str = $result = '';
  $units = $_POST['units'];
  if (!empty($units)) {
      $result_str = 'Total amount of ' . $bill;
  }
if($units>=900){$bill=$units;}
else if($units>=800 && $units<=900){$bill=$units*.90;}
else if($units>=700 && $units<=800){$bill=$units*.85;}
else if($units>=400 && $units<=700){$bill=$units*.80;}
else if($units>=800 && $units<=900){$bill=$units*.60;}
else{$bill=$units*.90;}
return $bill;
?>
<body>
  <div>Electricity bill after waiver</div>
  <form action="" method="post"> 
    <input type="number" name="units" id="units" placeholder="Please enter no. of Units" />
  </form>
  <div>
		    <?php echo '<br />' . $result_str; ?>
		</div>
</body>
</html>