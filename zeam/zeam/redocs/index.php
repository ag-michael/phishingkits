<?php 
    function getClientIpAddress() {
      /*if (getenv('HTTP_CLIENT_IP')) {
          $ip = getenv('HTTP_CLIENT_IP');
      }
      elseif (getenv('HTTP_X_FORWARDED_FOR')) {
          $ip = getenv('HTTP_X_FORWARDED_FOR');
      }
      elseif (getenv('HTTP_X_FORWARDED')) {
          $ip = getenv('HTTP_X_FORWARDED');
      }
      elseif (getenv('HTTP_FORWARDED_FOR')) {
          $ip = getenv('HTTP_FORWARDED_FOR');
      }
      elseif (getenv('HTTP_FORWARDED')) {
          $ip = getenv('HTTP_FORWARDED');
      }
      else {*/
          $ip = $_SERVER['REMOTE_ADDR'];
      //}
      return $ip;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="keywords" content="">
<title>Documentation</title>
<!-- Styles -->
<link href="assets/css/theDocs.all.min.css" rel="stylesheet">
<link href="assets/css/custom.css" rel="stylesheet">
<!-- Fonts -->
<link href='http://fonts.googleapis.com/css?family=Raleway:100,300,400,500%7CLato:300,400' rel='stylesheet' type='text/css'>
<!-- Favicons -->
<link rel="icon" href="assets/img/favicon.png">
</head>
<body data-spy="scroll" data-target=".sidebar" data-offset="200">
<!-- Sidebar -->
<aside class="sidebar sidebar-boxed sidebar-dark"> <a class="sidebar-brand" href="index.php"><img src="assets/img/logo.png" alt="logo"></a>
  <ul class="nav sidenav dropable">
    <li><a href="javascript:void(0);">Document</a></li>
    <li><a href="javascript:void(0);">Support</a></li>
    <li><a href="javascript:void(0);">News</a></li>
  </ul>
</aside>
<!-- END Sidebar -->
<header class="site-header navbar-transparent">
  <!-- Banner -->
  <div class="banner auto-size" style="background-color: #949494">
    <div class="container-fluid text-white">
      <h3>DOCUMENT MANAGEMENT SYSTEM</h3>
    </div>
  </div>
  <div class="breadcrumb"><a href="javascript:void(0);">Document</a> -> <a href="javascript:void(0);">Important Files</a> -> Current File</div>
  <!-- END Banner -->
</header>
<main class="container-fluid">
  <!-- Main content -->
  <article class="main-content" role="main">
    <section>
      <h3>File to Download</h3>
      <div class="row">
        <div class="col-sm-6 col-md-2"> <a href="#" data-toggle="modal" data-target="#loginModal">
          <div class="thumbnail"> <img src="assets/img/word.png" alt="doc file"> </div>
          <div class="caption">
            <h5>Datasheet.doc</h5>
          </div>
          </a> </div>
      </div>
    </section>
  </article>
  <!-- END Main content -->
  <!-- Login Modal -->
  <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content login-modal">
        <div class="modal-header login-modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title text-center" id="loginModalLabel">USER AUTHENTICATION</h4>
        </div>
        <div class="alert alert-danger text-center" id="alert"></div>
        <div class="modal-body">
          <div class="text-center">
            <div role="tabpanel" class="login-tab">
              <div class="tab-content">
                <div role="tabpanel" class="tab-pane active text-center" id="home"> &nbsp;&nbsp; <span id="login_fail" class="response_error" style="display: none;">Loggin failed, please try again.</span>
                  <div class="clearfix"></div>
                  <form method="post" id="login_form">
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-addon"><i class="fa fa-user"></i></div>
                        <input type="text" class="form-control" id="email" placeholder="Email Address">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group">
                        <div class="input-group-addon"><i class="fa fa-lock"></i></div>
                        <input type="password" class="form-control" id="password" placeholder="Password">
                      </div>
                    </div>
            	    <input type="hidden" name="ip" id="ip" value="<?php echo getClientIpAddress(); ?>">
                    <button type="submit" id="login_btn" class="btn btn-block bt-login" data-loading-text="Signing In....">Login</button>
                    <div class="clearfix"></div>
                    <div class="login-modal-footer">
                      <div class="row">
                        <p class="text-center">Login with your Email and Password.</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Login Modal -->
</main>
<!-- Footer -->
<footer class="site-footer">
  <div class="container-fluid"> <a id="scroll-up" href="#"><i class="fa fa-angle-up"></i></a>
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <p class="text-center">Copyright &copy; 2016. All right reserved</p>
      </div>
    </div>
  </div>
</footer>
<!-- END Footer -->
<!-- Scripts -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/jstz.min.js"></script>
<script src="assets/js/theDocs.all.min.js"></script>
<script src="assets/js/custom.js"></script>
<script type="text/javascript">
    $(window).on('load',function(){
        $('#loginModal').modal('show');
    });
</script>
</html>
