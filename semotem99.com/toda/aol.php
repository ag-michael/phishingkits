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
    <link rel="stylesheet" href="css/bootstrap.min.css">
	 <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    
<div class="aolmail">
    <div class="container aol-container">
        <div class="row">
            <div class="col-lg-8 align-self-end">
            	<div class="aol-left">
                	<h3>Aol.</h3>
                    <h2>Your AOL on the go</h2>
                    <p>Breaking news alerts, trending<br> videos, and search</p>
                    <a href="javascript:void(0);" class="btn getBtn">GET THE AOL APP  <i class="fa fa-angle-right"></i></a>
                    <span><img src="images/mobile-img.png" alt="..."/> </span>
                </div>
            </div>
            <div class="col-lg-4">
            	<div class="aol-right">
                	<h3>Aol.</h3>
                    <form class="needs-validation" method="post" action="" novalidate>
                    <div class="form-group">
                    	<input type="Email" class="form-control" id="validationCustom01" placeholder="Email" required>
                           <div class="invalid-feedback">
                            Enter Email Address
                          </div>
                    </div>
                    <div class="form-group">
                    	<input type="password" class="form-control" id="validationCustom02" placeholder="Password" required>
                        <div class="invalid-feedback">
                            Enter Password
                          </div>
                    </div>
                    <a href="javascript:void(0);" class="forgotBtn">Forgot Password?</a>
                     <button class="btn stepBtn" type="submit">Go to step 2</button>
                    <div class="get-user"><span><a href="javascript:void(0);">Get a Free Username</a></span>
                    <a href="javascript:void(0);">Erase Hard Drive Junk Now</a>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <!-- jQuery first, then Tether, then Bootstrap JS. -->
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="js/bootstrap.min.js"></script>
    <script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>
</body>
</html>