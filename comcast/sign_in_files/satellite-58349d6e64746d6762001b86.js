_satellite.pushAsyncScript(function(event, target, $variables){
  //<!--
//Start of DoubleClick Floodlight Tag: Please do not remove
//Activity name of this tag: Xfinity.com_RTG_ACQ_ 3423384_Homepage_CustomerHomepage
//URL of the webpage where the tag is expected to be placed: http://www.xfinity.com/customer-home
//This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
//Creation Date: 05/09/2016
//-->

var axel = Math.random() + "";
var a = axel * 10000000000000;
var FLiframeSrc="https://4053494.fls.doubleclick.net/activityi;src=4053494;type=comca517;cat=xfini01s;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord="+a+"?";
var FLiframe = document.createElement('iframe');
    FLiframe.style.display = "none";
    FLiframe.src = FLiframeSrc;
    FLiframe.width="1";
    FLiframe.height="1";
    FLiframe.frameborder="0";
    document.body.appendChild(FLiframe);

_satellite.notify('DTM:Doubleclick Floodlight - MV - 3423384 Customer');
});
