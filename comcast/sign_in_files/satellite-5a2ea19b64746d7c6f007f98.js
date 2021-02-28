_satellite.pushAsyncScript(function(event, target, $variables){
  //<!-- Global site tag (gtag.js) - AdWords: 1023869955 -->
var GRLSAscriptSrc="https://www.googletagmanager.com/gtag/js?id=AW-1023869955";
var GRLSAscript = document.createElement('script');
    GRLSAscript.src = GRLSAscriptSrc;
    document.body.appendChild(GRLSAscript);

  window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'AW-1023869955');
_satellite.notify('DTM:Google AdWords RLSA - Global');

  gtag('event', 'conversion', {
      'send_to': 'AW-1023869955/8JxZCP-tiAgQg4ic6AM',
      'aw_remarketing_only': true,	
      'value': 1.0,
      'currency': 'USD'
  });
_satellite.notify('DTM:Google AdWords RLSA - Customer Event');
});
