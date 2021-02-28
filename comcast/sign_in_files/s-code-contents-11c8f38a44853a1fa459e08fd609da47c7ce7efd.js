/* SiteCatalyst code version: appmeasurement 1.6*/

var upDate='02022018'; //Updated on 02-02-2018
s = new AppMeasurement()

if(_satellite.configurationSettings.settings.isStaging.toString()=="true")
{
s.account="comcastdotcomqa";  
}
else if(_satellite.configurationSettings.settings.isStaging.toString()=="false")
{
 
 	s.account = "comcastdotcomprod";

}


/************************** CONFIG SECTION **************************/
s.currencyCode = "USD"
s.charSet = "UTF-8"
s.trackDownloadLinks = true
s.trackExternalLinks = true
s.trackInlineStats = true
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls"
//any edits to the s.linkInternalFilters will need a change in the s_account variable setting as done above
s.linkInternalFilters = "javascript:,comcast.com,www.xfinity,comcast.convergentcare.com,customer.xfinity.com,es.xfinity.com,forums.xfinity.com,ly.xfinity.com,mobile.xfinity.com,mostlivesports.com,referafriend.xfinity.com,sitesearch.xfinity.com,wifi.xfinity.com,forums.businesshelp.comcast.com,api.xfinity.com,cdn.xfinity.com,comcastsupport.com"
s.linkLeaveQueryString = false
s.linkTrackVars = "None"
s.linkTrackEvents = "None"

/*channel Manager  */
s._channelParameter = "Banner Ad|dfaid>Email Marketing|MID"
s._channelPattern = "Banner Ad|BAC>Direct Marketing|DMC>Email Marketing|EMC>Owned Assets|ILC>Paid Search|KNC>Social|SOC>Television|TEL"

/*Added by SE, Pointmarc, 9/20/2012, in order to allow for tracking callback functions*/
s.eventCompleteCallback = function(){};

s.addToCart = function (p, i) {
        var s = this;
        s.events = i > 0 ? "scAdd" : "scAdd,scOpen";
        s.products = ";" + p;
        s.linkTrackVars = "events,products";
        s.linkTrackEvents = s.events;
        s.eventCompleteCallback = SiteCatOnclickCall;
        s.tl(true, "o", "Add to Cart");
    };

s.removeFromCart = function (p) {
        var s = this;
        s.events = "scRemove";
        s.products = ";" + p;
        s.linkTrackVars = "events,products";
        s.linkTrackEvents = s.events;
        s.eventCompleteCallback = SiteCatOnclickCall;
        s.tl(true, "o", "Remove From Cart");
    };
s.prop54 = (typeof(Visitor) != "undefined" ? "VisitorAPI Present" : "VisitorAPI Missing");
s.visitor = Visitor.getInstance("DA11332E5321D0550A490D45@AdobeOrg");
//Page load time plugin
s_getLoadTime();

s.usePlugins = true
function s_doPlugins(s) {


		
        /* Allant integration testing */
        s.eVar51 = s.Util.getQueryParam('mid'); 
    //allant link ID
        s.eVar52 = s.Util.getQueryParam('rid'); 
    //allant recipient ID
        s.campaign = s.eVar53 = (s.eVar51 + '').substring(0, s.eVar51.indexOf('^'));
    
    s.eVar66 = s.Util.getQueryParam('TargetId');// Targetted IDs
    var _buyflow_events = ['event18','event19','event33','event50'];
    var _ev = (s.events + '').split(',');
    s.events = '';
        for (var _i = 0; _i < _ev.length; _i++) 
		{
                for (var _n = 0; _n < _buyflow_events.length; _n++) 
				{
                        if (_ev[_i] == _buyflow_events[_n]) 
						{
                                _ev[_i] += s.purchaseID ? (':' + s.purchaseID) : '';
                        }
                 }
                s.events += _ev[_i] + ',';
         }
    s.events = s.events.substring(0, s.events.length - 1);
    s.eVar37 = "D=pageName";
    /* To avoid the searches event from firing if the same KW is searched */
    if (s.eVar41) {
            s.t_search = s.getValOnce(s.eVar41, 'ev41', 0);
            s.eVar42 = 'D="' + s.eVar42 + ' : "+v41';
                if (s.events.indexOf("event9") > -1) s.events = s.repl(s.events, ",event9", "");
                /*Handles multiple tabbed search tracking*/
                if (s.t_search) s.events = s.apl(s.events, "event9", ",", 2);
        }
    s._searchTerms = s.getAndPersistValue(s.eVar41, 'stc18', 0);
    if (!s.prop18 && s._searchTerms) s.prop18 = 'D="' + s._searchTerms + ' - "+ pageName';
    /* Channel Stacking and treat natural search as a campaign*/
    
	/* Link Handler or Exit link tracking */
	/*Account for exit links not on xfinity.com*/
    
		if (s.linkURL){
		if(s.linkURL.indexOf('my.xfinity.com')>-1){
			s.linkType='e';
			s.linkName='exit to my xfinity dot com';
			}
		if(s.linkURL.indexOf('business.comcast.com')>-1){
			s.linkType='e';
			s.linkName='exit to business class';
			}
		if(s.linkURL.indexOf('comcast.net')>-1){
			s.linkType='e';
			s.linkName='exit to comcast dot net';
			}
		if(s.linkURL.indexOf('fancast.com')>-1){
			s.linkType='e';
			s.linkName='exit to fancast dot com';
			}
		if(s.linkURL.indexOf('comcastsupport.com')>-1){
			s.linkType='e';
			s.linkName='exit to comcast support';
			}
		}
	
 /* Channel Stacking and treat natural search as a campaign*/
        s.channelManager('cmp,CMP,dfaid,DFAID,mid,MID', '', '0');
			
        if (s._channel == "Unknown Paid Channel") { 
        s._channel = s._campaign.substring(0, 3) 
			}
		if(s._campaign!== null && s._campaign.indexOf("I_B_CM")>-1){
				s._channel="Cable Movers";
			}
		if(s._campaign!== null && (s._campaign.indexOf("GOOCOMAL119455")>-1 || s._campaign.indexOf("GOOCOM119468")>-1)){
				s._channel="Organic";
			}
		if(s._campaign!== null && s._campaign.indexOf("XFICOMUTOL3X")>-1 && s._campaign.indexOf("ILC")<0){
				s._channel=".net redirect";
			}
        if (!s.campaign && s._channel == "Natural Search"){
                s.campaign = s._campaign + " organic";
                s.campaign = s.campaign.substr(15,s.campaign.length);
				s._channel="Organic";
			}
     
        if (!s.campaign) s.campaign = s._campaignID;
    
        
        //Need N/A for consistent keyword reporting/allocation
    if (s.campaign) s.eVar17 = s._keywords;

        /*Internal Link Tracking*/
    if (!s.eVar45) s.eVar45 = s.Util.getQueryParam('intcmp');
	if (!s.eVar45) s.eVar45 = s.Util.getQueryParam('INTCMP');
        
        s.eVar45 = s.getValOnce(s.eVar45, "s_v45", 0);

//clear out channel if internal or external
        if (s.eVar45) { 
            s._channel = "";
            }
        if (s._channel && s._channel.toString().toLowerCase() == "external") { 
            s._channel = "";
            }
        //set traffic except internal as a Other Natural Referrers
        if(s._channel=="Other Natural Referrers" && s._campaignID=="n/a" && (document.referrer.indexOf('xfinity.com')<0 && document.referrer.indexOf('comcast.com')<0)) {
             s.campaign="Other Natural Referrers";
            }
        //clear out the campaign tracking code and channel value if tracking code is set as 'n/a'
        if(s.campaign=="n/a"){
            s.campaign="";
            s._channel="";
            s.eVar17="";
        }
    /*Call to TNT integration Plugin*/
        s.tnt = s.trackTNT();
    
		/*Get and Persist Zip Code*/
		s.prop4 = s.getAndPersistValue(s.prop4, 'omzip', 0);	
		
        //Copy purchaseID to transactionID and prop21 then truncate to 20 characters
       if (s.purchaseID) {
               s.prop21 = "D=xact";
               s.purchaseID = (s.purchaseID + '').slice(0, 20)
               }
        //page and content pathing
    if(!s.prop25){
        s.prop25=s.pageName+"|page load";
    }
	//Day Since Last Visits
	s.eVar46=s.getDaysSinceLastVisit('s_lv');
  // Percent page View
  
    if(s.pageName)
        
        var ppvArray = s.getPercentPageViewed();
    if(typeof ppvArray != 'undefined' && typeof ppvArray[1] != 'undefined')
    {
        //set prop8 equal to the initial percent of the previous page viewed and the highest percent of the previous page viewed, delimited by a pipe character
        s.prop71 = 'initialpercent=' + ppvArray[2] + ' | highestpercent=' + ppvArray[1];
        //set prop9 equal to the previous page viewed
        s.prop70 = ppvArray[0];
    }
    else
        //blank out both prop8/prop9 if the plugin did not return a proper array
        s.prop71 = s.prop70 = "";

  //Passing the s_code location into prop73

      s.prop73 ="DTM Hosted |"+upDate;

       
		//Page load plugin call
		s.prop72=s_getLoadTime();
if(s_getLoadTime())s.events=s.apl(s.events,'event36='+s_getLoadTime(),',',1);
    
/**get Responsive Web Design Values**/
		var phoneMax='750';//initialize phonemax value
		var desktopMin='980';//initiliaze desktopmin value
			
		if(typeof bp1!='undefined' && typeof bp2!='undefined'){	
			phoneMax= bp1;//set to bp1 if value is present on page
			desktopMin=bp2;//set to bp2 if value is present on page
		}
		var second=s.getRwd(false,phoneMax,desktopMin);
			if (typeof s.prop44 != 'undefined'){
			if(s.prop44.indexOf('responsive')>-1){ //update the text code to contains 'responsive' now from 'responsivedesign'
			second=s.getRwd(true,phoneMax,desktopMin);
			} 
		}
		var viewportwidth;
		var viewportheight;
		
		// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
		if (typeof window.innerWidth != 'undefined')
		{
			  viewportwidth = window.innerWidth,
			  viewportheight = window.innerHeight
		}
		// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
		else if (typeof document.documentElement != 'undefined'
			 && typeof document.documentElement.clientWidth !=
			 'undefined' && document.documentElement.clientWidth != 0)
		{
			   viewportwidth = document.documentElement.clientWidth,
			   viewportheight = document.documentElement.clientHeight
		}
		// older versions of IE
		else
		{
			   viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
			   viewportheight = document.getElementsByTagName('body')[0].clientHeight
		}

		if (viewportwidth > viewportheight){
		  var first='landscape';
		  }
		  else first='portrait';
		//populating evar29 with the concatanated value of orientation and rwd plugin response  
		s.eVar29 = first + ':' + second;
  
	/* Time To Complete different actions */
	if(s.inList("prodView", s.events) || s.inList("purchase", s.events) || s.inList("event12", s.events))
	{
		// Time between the last prodView and first purchase
		s.eVar87 = s.getTimeBetweenEvents('prodView', 'l', 'purchase', 'f', 's_ttc_ev87');
		// Time between the last Customize (e12) and first purchase
		s.eVar88 = s.getTimeBetweenEvents('event12', 'l', 'purchase', 'f', 's_ttc_ev88');
	}
/*Audience Management instantiation custom code*/

    s.AudienceManagement.setup({
             "partner":"comcast",
             "containerNSID":0,
             "uuidCookie": { //optional if you want to drop the UUID on the first party domain
                "name":"aam_uuid",
                "days": 30
            }
    });  
    if(s.eVar71){
        var cGuid = s.eVar71;
    }  
      if(s.eVar64){
        var aGuid = s.eVar64;
    } 
     

        if((typeof cGuid != 'undefined' && cGuid) && (typeof aGuid != 'undefined' && aGuid))  
            {
                        
                        
                        _satellite.getVisitorId().setCustomerIDs({
                                    "comcast618custguidv71":{
                                    "id":cGuid,
                                    "authState":Visitor.AuthState.AUTHENTICATED
                                    },
                                    "comcast_v64":{
                                    "id":aGuid,
                                    "authState":Visitor.AuthState.AUTHENTICATED
                                    }

                        });
            } 
        if((typeof cGuid != 'undefined' && cGuid) && (typeof aGuid == 'undefined' && !aGuid))  
            {
                       
                        
                        _satellite.getVisitorId().setCustomerIDs({
                                    "comcast618custguidv71":{
                                    "id":cGuid,
                                    "authState":Visitor.AuthState.AUTHENTICATED
                                    },
                                   

                        });
            }       
        if((typeof aGuid != 'undefined' && aGuid) && (typeof cGuid == 'undefined' && !cGuid))  
            {
                        
                        
                        _satellite.getVisitorId().setCustomerIDs({
                                    "comcast_v64":{
                                    "id":aGuid,
                                    "authState":Visitor.AuthState.AUTHENTICATED
                                    }
                                   

                        });
            }
  

}
s.doPlugins = s_doPlugins
/************************** PLUGINS SECTION *************************/
/*
 * Cookie Combining Utility v1.0 (Minified)
 */
if(!s.__ccucr){var c_rspers=function(){var s=this,cv=s.c_rr("s_pers"),date=(new Date).getTime(),expd=null,cvarr=[],vcv="";if(!cv)return vcv;cvarr=cv.split(";");for(var i=0,l=cvarr.length;i<l;i++){expd=cvarr[i].match(/\|([0-9]+)$/);if(expd&&parseInt(expd[1])>=date)vcv+=cvarr[i]+";"}return vcv};var c_r=function(k){var s=this,d=new Date,v=s.c_rr(k),c=s.c_rspers(),i,m,e;if(v)return v;k=s.escape?s.escape(k):encodeURIComponent(k);i=c.indexOf(" "+k+"=");c=i<0?s.c_rr("s_sess"):c;i=c.indexOf(" "+k+"=");m=
i<0?i:c.indexOf("|",i);e=i<0?i:c.indexOf(";",i);m=m>0?m:e;v=i<0?"":s.unescape?s.unescape(c.substring(i+2+k.length,m<0?c.length:m)):decodeURIComponent(c.substring(i+2+k.length,m<0?c.length:m));return v};s.c_rr=s.c_r;s.__ccucr=true;s.c_rspers=c_rspers;s.c_r=s.cookieRead=c_r}
if(!s.__ccucw){var c_w=function(k,v,e){var s=this,d=new Date,ht=0,pn="s_pers",sn="s_sess",pc=0,sc=0,pv,sv,c,i,t,f;d.setTime(d.getTime()-6E4);if(s.c_rr(k))s.c_wr(k,"",d);k=s.escape?s.escape(k):encodeURIComponent(k);pv=s.c_rspers();i=pv.indexOf(" "+k+"=");if(i>-1){pv=pv.substring(0,i)+pv.substring(pv.indexOf(";",i)+1);pc=1}sv=s.c_rr(sn);i=sv.indexOf(" "+k+"=");if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.indexOf(";",i)+1);sc=1}d=new Date;if(e){if(e==1)e=new Date,f=e.getYear(),e.setYear(f+5+(f<1900?
1900:0));if(e.getTime()>d.getTime()){pv+=" "+k+"="+(s.escape?s.escape(v):encodeURIComponent(v))+"|"+e.getTime()+";";pc=1}}else{sv+=" "+k+"="+(s.escape?s.escape(v):encodeURIComponent(v))+";";sc=1}sv=sv.replace(/%00/g,"");pv=pv.replace(/%00/g,"");if(sc)s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t.indexOf(";")!=-1){var t1=parseInt(t.substring(t.indexOf("|")+1,t.indexOf(";")));t=t.substring(t.indexOf(";")+1);ht=ht<t1?t1:ht}d.setTime(ht);s.c_wr(pn,pv,d)}return v==s.c_r(s.unescape?s.unescape(k):decodeURIComponent(k))};
s.c_wr=s.c_w;s.__ccucw=true;s.c_w=s.cookieWrite=c_w};


/*
 * Plugin channelManager v3.04 - Tracking External Traffic
 */
s.channelManager=new Function("a","b","c","d","e","f","g",""
+"var s=this,h=new Date,i=0,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E"
+",F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V;U=s.getQueryParam?1:0;V=s.repl?1"
+":0;if(e){i=1;if(s.c_r(e))i=0;h.setTime(h.getTime()+1800000);s.c_w(e"
+",1,h);if(f&&s.c_r('s_tbm'+e+f))i=0;}j=s.referrer?s.referrer:documen"
+"t.referrer;if(j=='Typed/Bookmarked')j='';j=decodeURIComponent(j.toL"
+"owerCase());if(!j)k=1;else {l=j.indexOf('?')>-1?j.indexOf('?'):j.le"
+"ngth;m=j.substring(0,l);n=j.split('/');n=n[2].split('?');o=n[0].toL"
+"owerCase();p=s.linkInternalFilters.toLowerCase();p=p.split(',');for"
+"(q=0;q<p.length;q++){r=o.indexOf(p[q])==-1?'':j;if(r)break;}}if(!r&"
+"&!k){t=j;u=o;w='Other Natural Referrers';v=w+': '+o;x=s.seList+'>'+"
+"s._extraSearchEngines;if(d==1){m=V?s.repl(m,'oogle','%'):s.replace("
+"m,'oogle','%');m=V?s.repl(m,'ahoo','^'):s.replace(m,'ahoo','^');j=V"
+"?s.repl(j,'as_q','*'):s.replace(j,'as_q','*');}y=x.split('>');for(z"
+"=0;z<y.length;z++){A=y[z];A=A.split('|');B=A[0].split(',');for(C=0;"
+"C<B.length;C++){D=m.indexOf(B[C]);if(D>-1){if(A[2])E=v=A[2];else E="
+"o;if(d==1){E=V?s.repl(E,'#',' - '):s.replace(E,'#',' - ');j=V?s.rep"
+"l(j,'*','as_q'):s.replace(j,'*','as_q');E=V?s.repl(E,'^','ahoo'):s."
+"replace(E,'^','ahoo');E=V?s.repl(E,'%','oogle'):s.replace(E,'%','oo"
+"gle');}F=A[1].split(',');for(G=0;G<F.length;G++){if(j.indexOf(F[G]+"
+"'=')>-1||j.indexOf('https://www.google.')==0||j.indexOf('https://se"
+"arch.yahoo.com/')==0||j.indexOf('http://r.search.yahoo.com')==0||j."
+"indexOf('https://www.bing.com')==0)H=1;I=U?s.getQueryParam(F[G],'',"
+"j).toLowerCase():s.Util.getQueryParam(F[G],j).toLowerCase();if(H||I"
+")break;}}if(H||I)break;}if(H||I)break;}}if(!r||g!='1'){J=a.split(',"
+"');for(var q in J){if(J.hasOwnProperty(q)){if(U?s.getQueryParam(J[q"
+"]):s.Util.getQueryParam(J[q])){if(b)T=T?T+b+(U?s.getQueryParam(J[q]"
+"):s.Util.getQueryParam(J[q])):(U?s.getQueryParam(J[q]):s.Util.getQu"
+"eryParam(J[q]));else {T=U?s.getQueryParam(J[q]):s.Util.getQueryPara"
+"m(J[q]);if(T)break;}}}}if(T){v=T;if(E)w='Paid Search';else w='Unkno"
+"wn Paid Channel';}if(!T&&E&&H){w='Natural Search';v=w+': '+E;}}if(i"
+"&&k&&!T)t=u=v=w='Typed/Bookmarked';J=s._channelDomain;if(J&&o&&!r){"
+"K=J.split('>');for(L=0;L<K.length;L++){M=K[L]?K[L].split('|'):'';N="
+"M[1]?M[1].split(','):'';O=N.length;for(P=0;P<O;P++){Q=N[P].toLowerC"
+"ase();R=('/'+o).indexOf(Q);if(R>-1){w=M[0];v=T?v:M[0]+': '+o;break;"
+"}}if(R>-1)break;}}J=s._channelParameter;if(J){K=J.split('>');for(L="
+"0;L<K.length;L++){M=K[L]?K[L].split('|'):'';N=M[1]?M[1].split(','):"
+"'';O=N.length;for(P=0;P<O;P++){R=U?s.getQueryParam(N[P]):s.Util.get"
+"QueryParam(N[P]);if(R){w=M[0];break;}}if(R)break;}}J=s._channelPatt"
+"ern;if(J){K=J.split('>');for(L=0;L<K.length;L++){M=K[L]?K[L].split("
+"'|'):'';N=M[1]?M[1].split(','):'';O=N.length;for(P=0;P<O;P++){Q=N[P"
+"].toLowerCase();R=T?T.toLowerCase():'';S=R.indexOf(Q);if(S==0){w=M["
+"0];break;}}if(S==0)break;}}S=w?T+u+w+I:'';c=c?c:'c_m';if(c!='0')S=s"
+".getValOnce(S,c,0);if(S){s._campaignID=T?T:'n/a';s._referrer=t?t:'n"
+"/a';s._referringDomain=u?u:'n/a';s._campaign=v?v:'n/a';s._channel=w"
+"?w:'n/a';s._partner=E?E:'n/a';s._keywords=H?I?I:'Keyword Unavailabl"
+"e':'n/a';if(f&&w!='Typed/Bookmarked'){h.setTime(h.getTime()+f*86400"
+"000);s.c_w('s_tbm'+e+f,1,h);}}else s._campaignID=s._referrer=s._ref"
+"erringDomain=s._campaign=s._channel=s._partner=s._keywords='';");

/* Top 130 - Grouped */

s.seList="google.,googlesyndication.com,.googleadservices.com|q,as_q|"
+"Google>bing.com|q|Bing>yahoo.com,yahoo.co.jp|p,va|Yahoo!>ask.jp,ask"
+".co|q,ask|Ask>search.aol.,suche.aolsvc.de|q,query|AOL>altavista.co,"
+"altavista.de|q,r|AltaVista>.mywebsearch.com|searchfor|MyWebSearch>w"
+"ebcrawler.com|q|WebCrawler>wow.com|q|Wow>infospace.com|q|InfoSpace>"
+"blekko.com|q|Blekko>dogpile.com|q|DogPile>alhea.com|q|Alhea>duckduc"
+"kgo.com|q|DuckDuckGo>info.com|qkw|Info.com>contenko.com|q|Contenko>"
+"baidu.com|word,wd|Baidu>daum.net,search.daum.net|q|Daum>icqit.com|q"
+"|icq>myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query"
+"|Naver>netscape.com|query,search|Netscape Search>reference.com|q|Re"
+"ference.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,ww"
+"w.tiscali.co.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yandex|te"
+"xt|Yandex.ru>optimum.net|q|Optimum Search>search.earthlink.net|q|Ea"
+"rthlink>search.comcast.net|q|Comcast>libero.it|query|libero.it>exci"
+"te.co|search|Excite>mail.ru|q|Mail.ru>isearch.avg.com|q|AVG>msn.com"
+"|q|MSN>seznam.cz|q|seznam.cz>so.com|q|so.com>ixquick.com|query|ixqu"
+"ick.com>sogou.com|query|sogou.com>360.cn|q|360.cn";

/*
 * Plugin: getAndPersistValue 0.4 - get a value on every page
 */
s.getAndPersistValue=function(v,c,e){var s=this,a=new Date;e=e?e:0;c=c?c:"s_gapv";a.setTime(a.getTime()+e*864E5);if(v)s.c_w(c,v,e?a:0);return s.c_r(c)};


/* Utility Function: split v1.5 - split a string (JS 1.0 compatible) */
s.split = new Function("l", "d", ""
+ "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+ "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin Utility: apl (Append to List) v2.0 (Minified)
 */
s.apl=function(l,v,d,u){var s=this,m=0,d=d?d:",";if(!l)l="";var i,a=l.split(d),al=a.length;for(i=0;i<al;i++)if(u==1&&a[i]==v){m=1;break}else if(u!=1&&a[i].toLowerCase()==v.toLowerCase()){m=1;break}if(!m)l=l?l+d+v:v;return l};

/*
 * Plugin: getValOnce v1.11
 */
s.getValOnce=new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");


/* Plugin Utility: Replace v1.0*/
s.repl = new Function("x", "o", "n", ""
+ "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+ "substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
 * Plugin Utility: Join v1.0
 */
s.join=new Function("v","p",""
+"var s=this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");


/*
 * Plugin: getPreviousValue 1.1 (Minified)
 */
s.getPreviousValue=function(v,c,el){var s=this,t=new Date,i,j,r="",f=1;t.setTime(t.getTime()+18E5);if(el&&s.events){f=0;i=el.split(",");j=s.events.split(",");for(var x=0,il=i.length;x<il;x++){for(var y=0,jl=j.length;y<jl;y++)if(i[x]==j[y]){f=1;break}if(f==1)break}}if(f==1){if(s.c_r(c))r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,"no value",t)}return r};

/*
 * Plugin: getPercentPageViewed 2.01 (Minified)
 */
s.handlePPVevents=function(){if(!s_c_il)return;for(var i=0,scill=s_c_il.length;i<scill;i++)if(typeof s_c_il[i]!="undefined"&&s_c_il[i]._c&&s_c_il[i]._c=="s_c"){var s=s_c_il[i];break}if(!s)return;if(!s.getPPVid)return;var dh=Math.max(Math.max(s.d.body.scrollHeight,s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,s.d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s.d.documentElement.clientHeight)),vph=window.innerHeight||(s.d.documentElement.clientHeight||s.d.body.clientHeight),
st=window.pageYOffset||(window.document.documentElement.scrollTop||window.document.body.scrollTop),vh=st+vph,pv=Math.min(Math.round(vh/dh*100),100),c="",p=s.c_r("s_ppv").split(",")[0];if(!s.c_r("tp")||(s.unescape?s.unescape(p):decodeURIComponent(p))!=s.getPPVid||s.ppvChange=="1"&&(s.c_r("tp")&&dh!=s.c_r("tp"))){s.c_w("tp",dh);s.c_w("s_ppv","")}else c=s.c_r("s_ppv");var a=c&&c.indexOf(",")>-1?c.split(",",4):[],id=a.length>0?a[0]:escape(s.getPPVid),cv=a.length>1?parseInt(a[1]):0,p0=a.length>2?parseInt(a[2]):
pv,cy=a.length>3?parseInt(a[3]):0,cn=pv>0?id+","+(pv>cv?pv:cv)+","+p0+","+(vh>cy?vh:cy):"";s.c_w("s_ppv",cn)};
s.getPercentPageViewed=function(pid,change){var s=this,ist=!s.getPPVid?true:false;pid=pid?pid:s.pageName?s.pageName:document.location.href;s.ppvChange=change?change:"1";if(typeof s.linkType!="undefined"&&s.linkType!="0"&&s.linkType!=""&&s.linkType!="e")return"";var v=s.c_r("s_ppv"),a=v.indexOf(",")>-1?v.split(",",4):[];if(a&&a.length<4){for(var i=3;i>0;i--)a[i]=i<a.length?a[i-1]:"";a[0]=""}if(a)a[0]=unescape(a[0]);if(!s.getPPVid||s.getPPVid!=pid){s.getPPVid=pid;s.c_w("s_ppv",escape(s.getPPVid));s.handlePPVevents()}if(ist)if(window.addEventListener){window.addEventListener("load",
s.handlePPVevents,false);window.addEventListener("click",s.handlePPVevents,false);window.addEventListener("scroll",s.handlePPVevents,false);window.addEventListener("resize",s.handlePPVevents,false)}else if(window.attachEvent){window.attachEvent("onload",s.handlePPVevents);window.attachEvent("onclick",s.handlePPVevents);window.attachEvent("onscroll",s.handlePPVevents);window.attachEvent("onresize",s.handlePPVevents)}return pid!="-"?a:a[1]};


/*
//* Utility Function: p_gh
*/
s.p_gh = new Function(""
+ "var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+ "o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+ "o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+ "ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");

s.p_gn = new Function("t", "h", ""
+ "var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
+ "t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
+ "return 0;");

/*
 * Plugin Utility: pt - runs function in f argument against list of
 * variables declared in x (delimited by d), with a as an optional
 * argument to be included in f function call
 */
/* 
 * s.pt utility (runs function f against variables in x)
 */
s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:""}return""};


/*
* Utility Function: vpr - set the variable vs with value v
*/
s.vpr = new Function("vs", "v",
"if(typeof(v)!='undefined'){var s=this; eval('s.'+vs+'=\"'+v+'\"')}");

//Page load plugin definition
function s_getLoadTime(){if(!window.s_loadT){var b=new Date().getTime(),o=window.performance?performance.timing:0,a=o?o.requestStart:window.inHeadTS||0;s_loadT=a?Math.round((b-a)/100):''}return (s_loadT<0)?'':s_loadT;}

//getRWD plugin definition
s.getRwd=function(a,c,e){var d;var b=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;var f=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;if(a){if(b<c){d="phone layout";}else{if(b>=e){d="desktop layout";}else{if(b>=c&&b<e){d="tablet layout";}}}d=d+":"+b+"x"+f;}else{d="not rwd page:"+b+"x"+f;}return d;};


/*
* Plugin: getTimeBetweenEvents 0.2 - return the time between two events
*/
s.getTimeBetweenEvents=new Function("v1","v1fl","v2","v2fl","cn","e","fmt","rv",""
+"var s=this,v1p=false,v2p=false,v1a=s.split(v1,','),v2a=s.split(v2,'"
+",'),rva=rv?s.split(rv,','):[],t1,t2='',d=new Date(),x=new Date();cn"
+"=cn?cn:'s_tbe';fmt=fmt?fmt:'f';e=e?e:0;for(var i=0;i<rva.length;++i"
+"){if(s.inList(rva[i],s.events,',')){x.setDate(x.getDate()-1);s.c_w("
+"cn,'',x);return'';}}t1=s.c_r(cn);x.setTime(x.getTime()+e*86400000);"
+"for(var i=0;i<v1a.length&&!v1p;++i){v1p=s.inList(v1a[i],s.events,',"
+"');}for(var i=0;i<v2a.length&&!v2p;++i){v2p=s.inList(v2a[i],s.event"
+"s,',');}if(v1a.length==1&&v2a.length==1&&v1==v2){if(v1p&&v2p){s.c_w"
+"(cn,d.getTime(),e?x:0);if(t1){t2=(d.getTime()-t1)/1000;}}}else{if(v"
+"1p&&(v1fl=='l'||!t1)){s.c_w(cn,d.getTime(),e?x:0);}if(v2p&&t1){if(v"
+"2fl=='f'){x.setDate(x.getDate()-1);s.c_w(cn,'',x);}t2=(d.getTime()-"
+"t1)/1000;}}return t2?s.fmt_t2(t2,fmt):'';");
s.fmt_t2=new Function("t","fmt",""
+"if(fmt=='d'){return t/86400;}else if(fmt=='h'){return t/3600;}else "
+"if(fmt=='m'){return t/60;}else if(fmt=='s'){return t;}else{var td=8"
+"6400,th=3600,tm=60,r=5,u,un;if(t>td){u=td;un='days';}else if(t>th){"
+"u=th;un='hours';}else if(t>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1"
+";un='seconds';}t=t*r/u;return(Math.round(t)/r)+' '+un;}");

/*
 * Utility: inList v1.0 - find out if a value is in a list
 */
 
s.inList=new Function("v","l","d",""
+"var s=this,ar=Array(),i=0,d=(d)?d:',';if(typeof(l)=='string'){if(s."
+"split)ar=s.split(l,d);else if(l.split)ar=l.split(d);else return-1}e"
+"lse ar=l;while(i<ar.length){if(v==ar[i])return true;i++}return fals"
+"e;");

 /* Plugin: manageVars v1.6 (requires s.pt utility if using AppMeasurement)*/
 
s.manageVars=function(c,l,f){var s=this,vl,la,vla;l=l?l:"";f=f?f:1;if(!s[c])return false;vl="pageName,purchaseID,channel,server,pageType,campaign,state,zip,events,products,transactionID";for(var n=1;n<76;n++)vl+=",prop"+n;for(var n=1;n<251;n++)vl+=",eVar"+n;for(n=1;n<6;n++)vl+=",hier"+n;for(n=1;n<4;n++)vl+=",list"+n;for(n in s.contextData)vl+=",contextData."+n;if(l&&(f==1||f==2)){if(f==1)vl=l.replace("['",".").replace("']","");if(f==2){la=l.split(",");vla=vl.split(",");vl="";for(x in la){if(la[x].indexOf("contextData")>
-1){lax=la[x].split("'");la[x]="contextData."+lax[1]}for(y in vla)if(la[x]==vla[y])vla[y]=""}for(y in vla)vl+=vla[y]?","+vla[y]:""}s.pt(vl,",",c,0);return true}else if(l==""&&f==1){s.pt(vl,",",c,0);return true}else return false};
/*s.clearVars=function(t){var s=this;if(t.indexOf("contextData")==-1)s[t]="";else if(t.indexOf("contextData")>-1){var c=t.substring(t.indexOf(".")+1);s.contextData[c]=""}};
s.lowercaseVars=function(t){var s=this;if(t!="events"&&t.indexOf("contextData")==-1&&s[t]){s[t]=s[t].toString();if(s[t].indexOf("D=")!=0)s[t]=s[t].toLowerCase()}else if(t.indexOf("contextData")>-1){var c=t.substring(t.indexOf(".")+1);if(s.contextData[c]){s.contextData[c]=s.contextData[c].toString();s.contextData[c]=s.contextData[c].toLowerCase()}}};
*/
/*
 * TNT Integration Plugin v2.2
 */
s.trackTNT=function(v,p,b){var s=this,n="s_tnt",q="s_tntref",p=p?p:n,v=v?v:n,r="",pm=false,b=b?b:true;s.gqp=s.getQueryParam?s.getQueryParam:s.Util.getQueryParam;if(s.gqp(q)!="")s.referrer=s.gqp(q);else if(s.c_r(q)!=""){s.referrer=s.c_r(q);document.cookie=q+"=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;"}else if(document.cookie.indexOf(q)!=-1&&s.c_r(q)==""||location.search.indexOf(q+"=")!=-1&&s.gqp(q)==""){s.referrer="Typed/Bookmarked";document.cookie=q+"=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;"}if(s.gqp(p)!=
"")pm=s.gqp(p);else if(s.c_r(p)){pm=s.c_r(p);document.cookie=p+"=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;"}else if(s.c_r(p)==""&&s.gqp(p)=="")pm="";if(pm)r+=pm+",";if(window[v]!=undefined)r+=window[v];if(b)window[v]="";return r};

/*
 * Plugin: Days since last Visit 1.1.H - capture time from last visit
 */
s.getDaysSinceLastVisit=new Function("c",""
+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
+"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
+"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
+"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
+"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
+"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
+"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
+"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
+"!=f5) return '';else return cval_s;");


s.p_gh = new Function("", ""
+ "var s=this;if(!s.eo&&!s.lnk)return'';var o=s.eo?s.eo:s.lnk,y=s.ot(o"
+ "),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o"
+ "=o.parentElement?o.parentElement:o.parentNode;if(!o)return'';y=s.ot"
+ "(o);n=s.oid(o);x=o.s_oidt;}}return o?o:'';");
s.p_gn = new Function("t", "h", ""
+ "var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
+ "t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
+ "return 0;");


/*
 * Partner Plugin: DFA Check 1.0 - Restrict DFA calls to once a visit, per report suite, per click
 * through. Used in conjunction with VISTA. Deduplicates SCM hits.
 */
s.partnerDFACheck=new Function("cfg",""
+"var s=this,c=cfg.visitCookie,src=cfg.clickThroughParam,scp=cfg.searchCenterParam,p=cfg.newRsidsProp,tv=cfg.tEvar,dl=',',cr,nc,q,g,gs,i,j,k,fnd,v=1,t=new Date,cn=0,ca=new Array,aa=new Array,cs=new A"
+"rray;t.setTime(t.getTime()+1800000);cr=s.c_r(c);if(cr){v=0;}ca=s.split(cr,dl);if(s.un)aa=s.split(s.un,dl);else aa=s.split(s.account,dl);for(i=0;i<aa.length;i++){fnd = 0;for(j=0;j<ca.length;j++){if(aa[i] == ca[j]){fnd=1;}}if(!fnd){cs[cn"
+"]=aa[i];cn++;}}if(cs.length){for(k=0;k<cs.length;k++){nc=(nc?nc+dl:'')+cs[k];}cr=(cr?cr+dl:'')+nc;s.vpr(p,nc);v=1;}if(s.wd)q=s.wd.location.search.toLowerCase();else q=s.w.location.search.toLowerCase();q=s.repl(q,'?','&');g=q.indexOf('&'+src.toLow"
+"erCase()+'=');gs=(scp)?q.indexOf('&'+scp.toLowerCase()+'='):-1;if(g>-1){s.vpr(p,cr);v=1;}else if(gs>-1){v=0;s.vpr(tv,'SearchCenter Visitors');}if(!s.c_w(c,cr,t)){s.c_w(c,cr,0);}if(!s.c_r(c)){v=0;}r"
+"eturn v>=1;");
/*
 * Utility Function: vpr - set the variable vs with value v
 */
s.vpr=new Function("vs","v",
"if(typeof(v)!='undefined'){var s=this; eval('s.'+vs+'=\"'+v+'\"')}");

/************************** DFA VARIABLES **************************/
/* @TODO: Fill in these variables with the settings mapped in the 
 * DFA wizard and that match your desired preferences. Some of the 
 * variables are optional and have been labeled as such below. 
 * @TODO: Comments should be removed in a production deployment. */
var dfaConfig = {
	CSID:               '1516422', // DFA Client Site ID
	SPOTID:             '4053494', // DFA Spotlight ID
	tEvar:              'eVar22', // Transfer variable, typically the "View Through" eVar.
	errorEvar:          'eVar91', // DFA error tracking (optional)
	timeoutEvent:       'event114', // Tracks timeouts/empty responses (optional)
	requestURL:         "http://fls.doubleclick.net/json?spot=[SPOTID]&src=[CSID]&var=[VAR]&host=integrate.112.2o7.net%2Fdfa_echo%3Fvar%3D[VAR]%26AQE%3D1%26A2S%3D1&ord=[RAND]", // the DFA request URL
	maxDelay:           "875", // The maximum time to wait for DFA servers to respond, in milliseconds.
	visitCookie:        "s_dfa", // The name of the visitor cookie to use to restrict DFA calls to once per visit.
	clickThroughParam:  "CID", // A query string paramter that will force the DFA call to occur.
	searchCenterParam:  undefined, // SearchCenter identifier.
	newRsidsProp:       undefined //"prop34" // Stores the new report suites that need the DFA tracking code. (optional)
};
/************************ END DFA Variables ************************/
s.maxDelay = dfaConfig.maxDelay;
s.loadModule("Integrate")
s.Integrate.onLoad=function(s,m) {
	var dfaCheck = s.partnerDFACheck(dfaConfig);
	if (dfaCheck) {
		s.Integrate.add("DFA");
		s.Integrate.DFA.tEvar=dfaConfig.tEvar;
		s.Integrate.DFA.errorEvar=dfaConfig.errorEvar;
		s.Integrate.DFA.timeoutEvent=dfaConfig.timeoutEvent;
		s.Integrate.DFA.CSID=dfaConfig.CSID;
		s.Integrate.DFA.SPOTID=dfaConfig.SPOTID;
		s.Integrate.DFA.get(dfaConfig.requestURL);
		s.Integrate.DFA.setVars=function(s,p) {
			if (window[p.VAR]) { // got a response
				if(!p.ec) { // no errors
					s[p.tEvar]="DFA-"+(p.lis?p.lis:0)+"-"+(p.lip?p.lip:0)+"-"+(p.lastimp?p.lastimp:0)+"-"+(p.lastimptime?p.lastimptime:0)+"-"+(p.lcs?p.lcs:0)+"-"+(p.lcp?p.lcp:0)+"-"+(p.lastclk?p.lastclk:0)+"-"+(p.lastclktime?p.lastclktime:0)
				} else if (p.errorEvar) { // got an error response, track
					s[p.errorEvar] = p.ec;
				}
			} else if (p.timeoutEvent) { // empty response or timeout
				s.events = ((!s.events || s.events == '') ? '' : (s.events + ',')) + p.timeoutEvent; // timeout event
			}
		}
	}
}

/*********Integrate Module ******************/

function AppMeasurement_Module_Integrate(l){var c=this;c.s=l;var e=window;e.s_c_in||(e.s_c_il=[],e.s_c_in=0);c._il=e.s_c_il;c._in=e.s_c_in;c._il[c._in]=c;e.s_c_in++;c._c="s_m";c.list=[];c.add=function(d,b){var a;b||(b="s_Integrate_"+d);e[b]||(e[b]={});a=c[d]=e[b];a.a=d;a.e=c;a._c=0;a._d=0;void 0==a.disable&&(a.disable=0);a.get=function(b,d){var f=document,h=f.getElementsByTagName("HEAD"),k;if(!a.disable&&(d||(v="s_"+c._in+"_Integrate_"+a.a+"_get_"+a._c),a._c++,a.VAR=v,a.CALLBACK="s_c_il["+c._in+"]."+
a.a+".callback",a.delay(),h=h&&0<h.length?h[0]:f.body))try{k=f.createElement("SCRIPT"),k.type="text/javascript",k.setAttribute("async","async"),k.src=c.c(a,b),0>b.indexOf("[CALLBACK]")&&(k.onload=k.onreadystatechange=function(){a.callback(e[v])}),h.firstChild?h.insertBefore(k,h.firstChild):h.appendChild(k)}catch(l){}};a.callback=function(b){var c;if(b)for(c in b)Object.prototype[c]||(a[c]=b[c]);a.ready()};a.beacon=function(b){var d="s_i_"+c._in+"_Integrate_"+a.a+"_"+a._c;a.disable||(a._c++,d=e[d]=
new Image,d.src=c.c(a,b))};a.script=function(b){a.get(b,1)};a.delay=function(){a._d++};a.ready=function(){a._d--;a.disable||l.delayReady()};c.list.push(d)};c._g=function(d){var b,a=(d?"use":"set")+"Vars";for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&b[a])try{b[a](l,b)}catch(e){}};c._t=function(){c._g(1)};c._d=function(){var d,b;for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&0<b._d)return 1;return 0};c.c=function(c,b){var a,e,g,f;"http"!=b.toLowerCase().substring(0,4)&&
(b="http://"+b);l.ssl&&(b=l.replace(b,"http:","https:"));c.RAND=Math.floor(1E13*Math.random());for(a=0;0<=a;)a=b.indexOf("[",a),0<=a&&(e=b.indexOf("]",a),e>a&&(g=b.substring(a+1,e),2<g.length&&"s."==g.substring(0,2)?(f=l[g.substring(2)])||(f=""):(f=""+c[g],f!=c[g]&&parseFloat(f)!=c[g]&&(g=0)),g&&(b=b.substring(0,a)+encodeURIComponent(f)+b.substring(e+1)),a=e));return b}}

/***********Integrate Module code ENDS*************/



s.visitorNamespace = "comcastcom"
s.trackingServer = "comcastcom.d1.sc.omtrdc.net"
s.dc = 112

/* Mbox Integration */
if (typeof mboxLoadSCPlugin !== "undefined") { mboxLoadSCPlugin(); }

/* Audience Manager Load Module*/

s.loadModule("AudienceManagement");

function AppMeasurement_Module_AudienceManagement(d){var a=this;a.s=d;var b=window;b.s_c_in||(b.s_c_il=[],b.s_c_in=0);a._il=b.s_c_il;a._in=b.s_c_in;a._il[a._in]=a;b.s_c_in++;a._c="s_m";a.setup=function(c){b.DIL&&c&&(c.disableDefaultRequest=!0,c.disableScriptAttachment=!0,a.instance=b.DIL.create(c),a.tools=b.DIL.tools)};a.isReady=function(){return a.instance?!0:!1};a.getEventCallConfigParams=function(){return a.instance&&a.instance.api&&a.instance.api.getEventCallConfigParams?a.instance.api.getEventCallConfigParams():
{}};a.passData=function(b){a.instance&&a.instance.api&&a.instance.api.passData&&a.instance.api.passData(b)}}
"function"!==typeof window.DIL&&(window.DIL=function(a,c){var d=[],b,g;a!==Object(a)&&(a={});var f,k,n,u,s,m,p,y,x,J,K,D;f=a.partner;k=a.containerNSID;n=!!a.disableDestinationPublishingIframe;u=a.iframeAkamaiHTTPS;s=a.mappings;m=a.uuidCookie;p=!0===a.enableErrorReporting;y=a.visitorService;x=a.declaredId;J=!0===a.removeFinishedScriptsAndCallbacks;K=!0===a.delayAllUntilWindowLoad;D=!0===a.disableIDSyncs;var L,M,N,G,E,O,P,Q;L=!0===a.disableScriptAttachment;M=!0===a.disableCORSFiring;N=!0===a.disableDefaultRequest;
G=a.afterResultForDefaultRequest;E=a.dpIframeSrc;O=!0===a.testCORS;P=!0===a.useJSONPOnly;Q=a.visitorConstructor;p&&DIL.errorModule.activate();var R=!0===window._dil_unit_tests;(b=c)&&d.push(b+"");if(!f||"string"!==typeof f)return b="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:b,filename:"dil.js"}),Error(b);b="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if(k||"number"===typeof k)k=parseInt(k,10),
!isNaN(k)&&0<=k&&(b="");b&&(k=0,d.push(b),b="");g=DIL.getDil(f,k);if(g instanceof DIL&&g.api.getPartner()===f&&g.api.getContainerNSID()===k)return g;if(this instanceof DIL)DIL.registerDil(this,f,k);else return new DIL(a,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+f+" and containerNSID = "+k);var B={IS_HTTPS:"https:"===document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,COOKIE_MAX_EXPIRATION_DATE:"Tue, 19 Jan 2038 03:14:07 UTC"},H=
{stuffed:{}},l={},q={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],num_of_img_responses:0,num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,platformParams:{d_nsid:k+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+
"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,calledBack:!1,mid:null,noVisitorAPI:!1,instance:null,releaseType:"no VisitorAPI",admsProcessingStarted:!1,process:function(e){try{if(!this.admsProcessingStarted){this.admsProcessingStarted=!0;var t=this,a,h,b,d,c;if("function"===typeof e&&"function"===typeof e.getInstance){if(y===Object(y)&&(a=y.namespace)&&"string"===typeof a)h=e.getInstance(a,{idSyncContainerID:k});
else{this.releaseType="no namespace";this.releaseRequests();return}if(h===Object(h)&&"function"===typeof h.isAllowed&&"function"===typeof h.getMarketingCloudVisitorID&&"function"===typeof h.getCustomerIDs){if(!h.isAllowed()){this.releaseType="VisitorAPI not allowed";this.releaseRequests();return}this.instance=h;b=function(e){"VisitorAPI"!==t.releaseType&&(t.mid=e,t.releaseType="VisitorAPI",t.releaseRequests())};R&&(d=y.server)&&"string"===typeof d&&(h.server=d);c=h.getMarketingCloudVisitorID(b);if("string"===
typeof c&&c.length){b(c);return}setTimeout(function(){"VisitorAPI"!==t.releaseType&&(t.releaseType="timeout",t.releaseRequests())},this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE);return}this.releaseType="invalid instance"}else this.noVisitorAPI=!0;this.releaseRequests()}}catch(f){this.releaseRequests()}},releaseRequests:function(){this.calledBack=!0;q.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var e=
w.isPopulatedString,t=this.getMarketingCloudVisitorID();e(this.mid)&&this.mid===t||(this.mid=t);return e(this.mid)?"d_mid="+this.mid+"&":""},getCustomerIDs:function(){return this.instance?this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(e){if(e===Object(e)){var t="",a=[],h=[],b,d;for(b in e)e.hasOwnProperty(b)&&(h[0]=b,d=e[b],d===Object(d)&&(h[1]=d.id||"",h[2]=d.authState||0,a.push(h),h=[]));if(h=a.length)for(e=0;e<h;e++)t+="&d_cid_ic="+a[e].join("%01");return t}return""}},
declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(e,t){var a=w.isPopulatedString,h=encodeURIComponent;if(e===Object(e)&&a(t)){var b=e.dpid,d=e.dpuuid,c=null;if(a(b)&&a(d)){c=h(b)+"$"+h(d);if(!0===this.declaredIdCombos[c])return"setDeclaredId: combo exists for type '"+t+"'";this.declaredIdCombos[c]=!0;this.declaredId[t]={dpid:b,dpuuid:d};return"setDeclaredId: succeeded for type '"+t+"'"}}return"setDeclaredId: failed for type '"+t+"'"},getDeclaredIdQueryString:function(){var e=
this.declaredId.request,t=this.declaredId.init,a="";null!==e?a="&d_dpid="+e.dpid+"&d_dpuuid="+e.dpuuid:null!==t&&(a="&d_dpid="+t.dpid+"&d_dpuuid="+t.dpuuid);return a}},registerRequest:function(e){var a=this.firingQueue;e===Object(e)&&a.push(e);this.firing||!a.length||K&&!DIL.windowLoaded||!this.adms.calledBack||(e=a.shift(),e.src=e.src.replace(/demdex.net\/event\?d_nsid=/,"demdex.net/event?"+this.adms.getMIDQueryString()+"d_nsid="),w.isPopulatedString(e.corsPostData)&&(e.corsPostData=e.corsPostData.replace(/^d_nsid=/,
this.adms.getMIDQueryString()+"d_nsid=")),C.fireRequest(e),this.firstRequestHasFired||"script"!==e.tag&&"cors"!==e.tag||(this.firstRequestHasFired=!0))},processVisitorAPI:function(){this.adms.process(Q||window.Visitor)},requestRemoval:function(e){if(!J)return"removeFinishedScriptsAndCallbacks is not boolean true";var a=this.toRemove,r,h;e===Object(e)&&(r=e.script,h=e.callbackName,(r===Object(r)&&"SCRIPT"===r.nodeName||"no script created"===r)&&"string"===typeof h&&h.length&&a.push(e));if(this.readyToRemove&&
a.length){h=a.shift();r=h.script;h=h.callbackName;"no script created"!==r?(e=r.src,r.parentNode.removeChild(r)):e=r;window[h]=null;try{delete window[h]}catch(b){}this.removed.push({scriptSrc:e,callbackName:h});DIL.variables.scriptsRemoved.push(e);DIL.variables.callbacksRemoved.push(h);return this.requestRemoval()}return"requestRemoval() processed"}};g=function(){var e="http://fast.",a="?d_nsid="+k+"#"+encodeURIComponent(document.location.href);if("string"===typeof E&&E.length)return E+a;B.IS_HTTPS&&
(e=!0===u?"https://fast.":"https://");return e+f+".demdex.net/dest5.html"+a};var z={THROTTLE_START:3E4,throttleTimerSet:!1,id:"destination_publishing_iframe_"+f+"_"+k,url:g(),iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messageSendingInterval:B.POST_MESSAGE_ENABLED?15:100,ibsDeleted:[],jsonProcessed:[],newIframeCreated:null,iframeIdChanged:!1,originalIframeHasLoadedAlready:null,attachIframe:function(){function e(){h=document.createElement("iframe");h.id=b.id;h.style.cssText=
"display: none; width: 0; height: 0;";h.src=b.url;b.newIframeCreated=!0;a();document.body.appendChild(h)}function a(){v.addListener(h,"load",function(){h.className="aamIframeLoaded";b.iframeHasLoaded=!0;b.requestToProcess()})}var b=this,h=document.getElementById(this.id);h?"IFRAME"!==h.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==h.className?(this.originalIframeHasLoadedAlready=!1,a()):(this.iframeHasLoaded=this.originalIframeHasLoadedAlready=
!0,this.requestToProcess())):e();this.iframe=h},requestToProcess:function(e,a){var b=this;e&&!w.isEmptyObject(e)&&this.process(e,a);this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){b.messageSendingInterval=B.POST_MESSAGE_ENABLED?15:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},process:function(e,a){var b=encodeURIComponent,h,d,c,f,g,k;a===Object(a)&&(k=v.encodeAndBuildRequest(["",a.dpid||
"",a.dpuuid||""],","));if((h=e.dests)&&h instanceof Array&&(d=h.length))for(c=0;c<d;c++)f=h[c],f=[b("dests"),b(f.id||""),b(f.y||""),b(f.c||"")],this.addMessage(f.join("|"));if((h=e.ibs)&&h instanceof Array&&(d=h.length))for(c=0;c<d;c++)f=h[c],f=[b("ibs"),b(f.id||""),b(f.tag||""),v.encodeAndBuildRequest(f.url||[],","),b(f.ttl||""),"",k],this.addMessage(f.join("|"));if((h=e.dpcalls)&&h instanceof Array&&(d=h.length))for(c=0;c<d;c++)f=h[c],g=f.callback||{},g=[g.obj||"",g.fn||"",g.key||"",g.tag||"",g.url||
""],f=[b("dpm"),b(f.id||""),b(f.tag||""),v.encodeAndBuildRequest(f.url||[],","),b(f.ttl||""),v.encodeAndBuildRequest(g,","),k],this.addMessage(f.join("|"));this.jsonProcessed.push(e)},addMessage:function(e){var a=encodeURIComponent,a=p?a("---destpub-debug---"):a("---destpub---");this.messages.push(a+e)},sendMessages:function(){var e=this,a;this.messages.length?(a=this.messages.shift(),DIL.xd.postMessage(a,this.url,this.iframe.contentWindow),this.messagesPosted.push(a),setTimeout(function(){e.sendMessages()},
this.messageSendingInterval)):this.sendingMessages=!1}},I={traits:function(e){w.isValidPdata(e)&&(l.sids instanceof Array||(l.sids=[]),v.extendArray(l.sids,e));return this},pixels:function(e){w.isValidPdata(e)&&(l.pdata instanceof Array||(l.pdata=[]),v.extendArray(l.pdata,e));return this},logs:function(e){w.isValidLogdata(e)&&(l.logdata!==Object(l.logdata)&&(l.logdata={}),v.extendObject(l.logdata,e));return this},customQueryParams:function(e){w.isEmptyObject(e)||v.extendObject(l,e,q.reservedKeys);
return this},signals:function(e,a){var b,h=e;if(!w.isEmptyObject(h)){if(a&&"string"===typeof a)for(b in h={},e)e.hasOwnProperty(b)&&(h[a+b]=e[b]);v.extendObject(l,h,q.reservedKeys)}return this},declaredId:function(e){q.declaredId.setDeclaredId(e,"request");return this},result:function(e){"function"===typeof e&&(l.callback=e);return this},afterResult:function(e){"function"===typeof e&&(l.postCallbackFn=e);return this},useImageRequest:function(){l.useImageRequest=!0;return this},clearData:function(){l=
{};return this},submit:function(){C.submitRequest(l);l={};return this},getPartner:function(){return f},getContainerNSID:function(){return k},getEventLog:function(){return d},getState:function(){var e={},a={};v.extendObject(e,q,{callbackPrefix:!0,useJSONP:!0,registerRequest:!0});v.extendObject(a,z,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});return{pendingRequest:l,otherRequestInfo:e,destinationPublishingInfo:a}},idSync:function(e){if(D)return"Error: id syncs have been disabled";
if(e!==Object(e)||"string"!==typeof e.dpid||!e.dpid.length)return"Error: config or config.dpid is empty";if("string"!==typeof e.url||!e.url.length)return"Error: config.url is empty";var a=e.url,b=e.minutesToLive,h=encodeURIComponent,d,a=a.replace(/^https:/,"").replace(/^http:/,"");if("undefined"===typeof b)b=20160;else if(b=parseInt(b,10),isNaN(b)||0>=b)return"Error: config.minutesToLive needs to be a positive number";d=v.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],",");e=["ibs",h(e.dpid),"img",
h(a),b,"",d];z.addMessage(e.join("|"));q.firstRequestHasFired&&z.requestToProcess();return"Successfully queued"},aamIdSync:function(e){if(D)return"Error: id syncs have been disabled";if(e!==Object(e)||"string"!==typeof e.dpuuid||!e.dpuuid.length)return"Error: config or config.dpuuid is empty";e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid;return this.idSync(e)},passData:function(e){if(w.isEmptyObject(e))return"Error: json is empty or not an object";z.ibsDeleted.push(e.ibs);delete e.ibs;
C.defaultCallback(e);return e},getPlatformParams:function(){return q.platformParams},getEventCallConfigParams:function(){var e=q,a=e.modStatsParams,b=e.platformParams,h;if(!a){a={};for(h in b)b.hasOwnProperty(h)&&!e.nonModStatsParams[h]&&(a[h.replace(/^d_/,"")]=b[h]);e.modStatsParams=a}return a}},C={corsMetadata:function(){var e="none",a=!0;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?e="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?
e="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(a=!1),0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")&&(a=!1));return{corsType:e,corsCookiesEnabled:a}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(e){q.registerRequest(C.createQueuedRequest(e));return!0},createQueuedRequest:function(e){var a=q,b,h=e.callback,d="img",c;if(!w.isEmptyObject(s)){var f,
g,m;for(f in s)s.hasOwnProperty(f)&&(g=s[f],null!=g&&""!==g&&f in e&&!(g in e||g in q.reservedKeys)&&(m=e[f],null!=m&&""!==m&&(e[g]=m)))}w.isValidPdata(e.sids)||(e.sids=[]);w.isValidPdata(e.pdata)||(e.pdata=[]);w.isValidLogdata(e.logdata)||(e.logdata={});e.logdataArray=v.convertObjectToKeyValuePairs(e.logdata,"=",!0);e.logdataArray.push("_ts="+(new Date).getTime());"function"!==typeof h&&(h=this.defaultCallback);a.useJSONP=!0!==e.useImageRequest;a.useJSONP&&(d="script",b=a.callbackPrefix+"_"+k+"_"+
(new Date).getTime());a=this.makeRequestSrcData(e,b);!P&&(c=this.getCORSInstance())&&a.truncated&&(this.corsMetadata.corsCookiesEnabled||a.isDeclaredIdCall)&&(d="cors");return{tag:d,src:a.src,corsSrc:a.corsSrc,internalCallbackName:b,callbackFn:h,postCallbackFn:e.postCallbackFn,useImageRequest:!!e.useImageRequest,requestData:e,corsInstance:c,corsPostData:a.corsPostData,hasCORSError:!1}},defaultCallback:function(e,a){var b,h,d,c,f,g,k,x,p;if((b=e.stuff)&&b instanceof Array&&(h=b.length))for(d=0;d<h;d++)if((c=
b[d])&&c===Object(c)){f=c.cn;g=c.cv;k=c.ttl;if("undefined"===typeof k||""===k)k=Math.floor(v.getMaxCookieExpiresInMinutes()/60/24);x=c.dmn||"."+document.domain.replace(/^www\./,"");p=c.type;f&&(g||"number"===typeof g)&&("var"!==p&&(k=parseInt(k,10))&&!isNaN(k)&&v.setCookie(f,g,1440*k,"/",x,!1),H.stuffed[f]=g)}b=e.uuid;w.isPopulatedString(b)&&!w.isEmptyObject(m)&&(h=m.path,"string"===typeof h&&h.length||(h="/"),d=parseInt(m.days,10),isNaN(d)&&(d=100),v.setCookie(m.name||"aam_did",b,1440*d,h,m.domain||
"."+document.domain.replace(/^www\./,""),!0===m.secure));n||q.abortRequests||z.requestToProcess(e,a)},makeRequestSrcData:function(e,a){e.sids=w.removeEmptyArrayValues(e.sids||[]);e.pdata=w.removeEmptyArrayValues(e.pdata||[]);var b=q,d=b.platformParams,c=v.encodeAndBuildRequest(e.sids,","),g=v.encodeAndBuildRequest(e.pdata,","),m=(e.logdataArray||[]).join("&");delete e.logdataArray;var x=B.IS_HTTPS?"https://":"http://",p=b.declaredId.getDeclaredIdQueryString(),s=b.adms.instance?b.adms.getCustomerIDsQueryString(b.adms.getCustomerIDs()):
"",A;A=[];var l,n,u,y;for(l in e)if(!(l in b.reservedKeys)&&e.hasOwnProperty(l))if(n=e[l],l=encodeURIComponent(l),n instanceof Array)for(u=0,y=n.length;u<y;u++)A.push(l+"="+encodeURIComponent(n[u]));else A.push(l+"="+encodeURIComponent(n));A=A.length?"&"+A.join("&"):"";l=!1;c="d_nsid="+d.d_nsid+p+s+(c.length?"&d_sid="+c:"")+(g.length?"&d_px="+g:"")+(m.length?"&d_ld="+encodeURIComponent(m):"");d="&d_rtbd="+d.d_rtbd+"&d_jsonv="+d.d_jsonv+"&d_dst="+d.d_dst;x=x+f+".demdex.net/event";g=b=x+"?"+c+(b.useJSONP?
d+"&d_cb="+(a||""):"")+A;2048<b.length&&(b=b.substring(0,b.lastIndexOf("&")),l=!0);return{corsSrc:x+"?"+(O?"testcors=1&d_nsid="+k+"&":"")+"_ts="+(new Date).getTime(),src:b,originalSrc:g,truncated:l,corsPostData:c+d+A,isDeclaredIdCall:""!==p}},fireRequest:function(e){if("img"===e.tag)this.fireImage(e);else{var a=q.declaredId,a=a.declaredId.request||a.declaredId.init||{},a={dpid:a.dpid||"",dpuuid:a.dpuuid||""};"script"===e.tag?this.fireScript(e,a):"cors"===e.tag&&this.fireCORS(e,a)}},fireImage:function(e){var a=
q,c,h;a.abortRequests||(a.firing=!0,c=new Image(0,0),a.sent.push(e),c.onload=function(){a.firing=!1;a.fired.push(e);a.num_of_img_responses++;a.registerRequest()},h=function(c){b="imgAbortOrErrorHandler received the event of type "+c.type;d.push(b);a.abortRequests=!0;a.firing=!1;a.errored.push(e);a.num_of_img_errors++;a.registerRequest()},c.addEventListener?(c.addEventListener("error",h,!1),c.addEventListener("abort",h,!1)):c.attachEvent&&(c.attachEvent("onerror",h),c.attachEvent("onabort",h)),c.src=
e.src)},fireScript:function(a,c){var g=this,h=q,k,m,x=a.src,p=a.postCallbackFn,l="function"===typeof p,s=a.internalCallbackName;h.abortRequests||(h.firing=!0,window[s]=function(g){try{g!==Object(g)&&(g={});D&&(z.ibsDeleted.push(g.ibs),delete g.ibs);var k=a.callbackFn;h.firing=!1;h.fired.push(a);h.num_of_jsonp_responses++;k(g,c);l&&p(g,c)}catch(r){r.message="DIL jsonp callback caught error with message "+r.message;b=r.message;d.push(b);r.filename=r.filename||"dil.js";r.partner=f;DIL.errorModule.handleError(r);
try{k({error:r.name+"|"+r.message},c),l&&p({error:r.name+"|"+r.message},c)}catch(x){}}finally{h.requestRemoval({script:m,callbackName:s}),h.registerRequest()}},L?(h.firing=!1,h.requestRemoval({script:"no script created",callbackName:s})):(m=document.createElement("script"),m.addEventListener&&m.addEventListener("error",function(c){h.requestRemoval({script:m,callbackName:s});b="jsonp script tag error listener received the event of type "+c.type+" with src "+x;g.handleScriptError(b,a)},!1),m.type="text/javascript",
m.src=x,k=DIL.variables.scriptNodeList[0],k.parentNode.insertBefore(m,k)),h.sent.push(a),h.declaredId.declaredId.request=null)},fireCORS:function(a,c){function g(r){var m;try{if(m=JSON.parse(r),m!==Object(m)){h.handleCORSError(a,c,"Response is not JSON");return}}catch(p){h.handleCORSError(a,c,"Error parsing response as JSON");return}try{var x=a.callbackFn;k.firing=!1;k.fired.push(a);k.num_of_cors_responses++;x(m,c);n&&s(m,c)}catch(l){l.message="DIL handleCORSResponse caught error with message "+l.message;
b=l.message;d.push(b);l.filename=l.filename||"dil.js";l.partner=f;DIL.errorModule.handleError(l);try{x({error:l.name+"|"+l.message},c),n&&s({error:l.name+"|"+l.message},c)}catch(q){}}finally{k.registerRequest()}}var h=this,k=q,m=this.corsMetadata.corsType,x=a.corsSrc,p=a.corsInstance,l=a.corsPostData,s=a.postCallbackFn,n="function"===typeof s;if(!k.abortRequests){k.firing=!0;if(M)k.firing=!1;else try{p.open("post",x,!0),"XMLHttpRequest"===m?(p.withCredentials=!0,p.setRequestHeader("Content-Type",
"application/x-www-form-urlencoded"),p.onreadystatechange=function(){4===this.readyState&&(200===this.status?g(this.responseText):h.handleCORSError(a,c,"onreadystatechange"))}):"XDomainRequest"===m&&(p.onload=function(){g(this.responseText)}),p.onerror=function(){h.handleCORSError(a,c,"onerror")},p.ontimeout=function(){h.handleCORSError(a,c,"ontimeout")},p.send(l)}catch(u){this.handleCORSError(a,c,"try-catch")}k.sent.push(a);k.declaredId.declaredId.request=null}},handleCORSError:function(a,b,c){a.hasCORSError||
(a.hasCORSError=!0,q.num_of_cors_errors++,q.corsErrorSources.push(c),a.tag="script",this.fireScript(a,b))},handleScriptError:function(a,b){q.num_of_jsonp_errors++;this.handleRequestError(a,b)},handleRequestError:function(a,b){var c=q;d.push(a);c.abortRequests=!0;c.firing=!1;c.errored.push(b);c.registerRequest()}},w={isValidPdata:function(a){return a instanceof Array&&this.removeEmptyArrayValues(a).length?!0:!1},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if(a!==
Object(a))return!0;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},removeEmptyArrayValues:function(a){for(var b=0,c=a.length,d,f=[],b=0;b<c;b++)d=a[b],"undefined"!==typeof d&&null!==d&&""!==d&&f.push(d);return f},isPopulatedString:function(a){return"string"===typeof a&&a.length}},v={addListener:function(){if(document.addEventListener)return function(a,b,c){a.addEventListener(b,function(a){"function"===typeof c&&c(a)},!1)};if(document.attachEvent)return function(a,b,c){a.attachEvent("on"+
b,function(a){"function"===typeof c&&c(a)})}}(),convertObjectToKeyValuePairs:function(a,b,c){var d=[],f,g;b||(b="=");for(f in a)a.hasOwnProperty(f)&&(g=a[f],"undefined"!==typeof g&&null!==g&&""!==g&&d.push(f+b+(c?encodeURIComponent(g):g)));return d},encodeAndBuildRequest:function(a,b){return this.map(a,function(a){return encodeURIComponent(a)}).join(b)},map:function(a,b){if(Array.prototype.map)return a.map(b);if(void 0===a||null===a)throw new TypeError;var c=Object(a),d=c.length>>>0;if("function"!==
typeof b)throw new TypeError;for(var f=Array(d),g=0;g<d;g++)g in c&&(f[g]=b.call(b,c[g],g,c));return f},filter:function(a,b){if(!Array.prototype.filter){if(void 0===a||null===a)throw new TypeError;var c=Object(a),d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var g=[],f=0;f<d;f++)if(f in c){var k=c[f];b.call(b,k,f,c)&&g.push(k)}return g}return a.filter(b)},getCookie:function(a){a+="=";var b=document.cookie.split(";"),c,d,f;c=0;for(d=b.length;c<d;c++){for(f=b[c];" "===f.charAt(0);)f=
f.substring(1,f.length);if(0===f.indexOf(a))return decodeURIComponent(f.substring(a.length,f.length))}return null},setCookie:function(a,b,c,d,f,g){var k=new Date;c&&(c*=6E4);document.cookie=a+"="+encodeURIComponent(b)+(c?";expires="+(new Date(k.getTime()+c)).toUTCString():"")+(d?";path="+d:"")+(f?";domain="+f:"")+(g?";secure":"")},extendArray:function(a,b){return a instanceof Array&&b instanceof Array?(Array.prototype.push.apply(a,b),!0):!1},extendObject:function(a,b,c){var d;if(a===Object(a)&&b===
Object(b)){for(d in b)!b.hasOwnProperty(d)||!w.isEmptyObject(c)&&d in c||(a[d]=b[d]);return!0}return!1},getMaxCookieExpiresInMinutes:function(){return((new Date(B.COOKIE_MAX_EXPIRATION_DATE)).getTime()-(new Date).getTime())/1E3/60}};"error"===f&&0===k&&v.addListener(window,"load",function(){DIL.windowLoaded=!0});var S=!1,F=function(){S||(S=!0,q.registerRequest(),U(),n||q.abortRequests||z.attachIframe(),q.readyToRemove=!0,q.requestRemoval())},U=function(){n||setTimeout(function(){N||q.firstRequestHasFired||
("function"===typeof G?I.afterResult(G).submit():I.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)},T=document;"error"!==f&&(DIL.windowLoaded?F():"complete"!==T.readyState&&"loaded"!==T.readyState?v.addListener(window,"load",function(){DIL.windowLoaded=!0;F()}):(DIL.windowLoaded=!0,F()));q.declaredId.setDeclaredId(x,"init");q.processVisitorAPI();this.api=I;this.getStuffedVariable=function(a){var b=H.stuffed[a];b||"number"===typeof b||(b=v.getCookie(a))||"number"===typeof b||(b="");return b};this.validators=
w;this.helpers=v;this.constants=B;this.log=d;R&&(this.pendingRequest=l,this.requestController=q,this.setDestinationPublishingUrl=g,this.destinationPublishing=z,this.requestProcs=C,this.variables=H,this.callWindowLoadFunctions=F)},function(){var a=document,c;null==a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",c=function(){a.removeEventListener("DOMContentLoaded",c,!1);a.readyState="complete"},!1))}(),DIL.extendStaticPropertiesAndMethods=function(a){var c;
if(a===Object(a))for(c in a)a.hasOwnProperty(c)&&(this[c]=a[c])},DIL.extendStaticPropertiesAndMethods({version:"6.2",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50},variables:{scriptNodeList:document.getElementsByTagName("script"),scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(a){this.windowLoaded="function"===typeof a?!!a():"boolean"===typeof a?a:!0},create:function(a){try{return new DIL(a)}catch(c){return(new Image(0,0)).src="http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D"+
(new Date).getTime(),Error("Error in attempt to create DIL instance with DIL.create()")}},registerDil:function(a,c,d){c=c+"$"+d;c in this.dils||(this.dils[c]=a)},getDil:function(a,c){var d;"string"!==typeof a&&(a="");c||(c=0);d=a+"$"+c;return d in this.dils?this.dils[d]:Error("The DIL instance with partner = "+a+" and containerNSID = "+c+" was not found")},dexGetQSVars:function(a,c,d){c=this.getDil(c,d);return c instanceof this?c.getStuffedVariable(a):""},xd:{postMessage:function(a,c,d){var b=1;c&&
(window.postMessage?d.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(d.location=c.replace(/#.*$/,"")+"#"+ +new Date+b++ +"&"+a))}}}),DIL.errorModule=function(){var a=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),c={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},d=!1;return{activate:function(){d=!0},handleError:function(b){if(!d)return"DIL error module has not been activated";
b!==Object(b)&&(b={});var g=b.name?(b.name+"").toLowerCase():"",f=[];b={name:g,filename:b.filename?b.filename+"":"",partner:b.partner?b.partner+"":"no_partner",site:b.site?b.site+"":document.location.href,message:b.message?b.message+"":""};f.push(g in c?c[g]:c.noerrortypedefined);a.api.pixels(f).logs(b).useImageRequest().submit();return"DIL error report sent"},pixelMap:c}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(a,c,d){var b="";c=c||"Error caught in DIL module/submodule: ";
a===Object(a)?b=c+(a.message||"err has no message"):(b=c+"err is not a valid object",a={});a.message=b;d instanceof DIL&&(a.partner=d.api.getPartner());DIL.errorModule.handleError(a);return this.errorMessage=b}}});
DIL.tools.getSearchReferrer=function(a,c){var d=DIL.getDil("error"),b=DIL.tools.decomposeURI(a||document.referrer),g="",f="",k={queryParam:"q"};return(g=d.helpers.filter([c===Object(c)?c:{},{hostPattern:/aol\./},{hostPattern:/ask\./},{hostPattern:/bing\./},{hostPattern:/google\./},{hostPattern:/yahoo\./,queryParam:"p"}],function(a){return!(!a.hasOwnProperty("hostPattern")||!b.hostname.match(a.hostPattern))}).shift())?{valid:!0,name:b.hostname,keywords:(d.helpers.extendObject(k,g),f=k.queryPattern?
(g=(""+b.search).match(k.queryPattern))?g[1]:"":b.uriParams[k.queryParam],decodeURIComponent(f||"").replace(/\+|%20/g," "))}:{valid:!1,name:"",keywords:""}};
DIL.tools.decomposeURI=function(a){var c=DIL.getDil("error"),d=document.createElement("a");d.href=a||document.referrer;return{hash:d.hash,host:d.host.split(":").shift(),hostname:d.hostname,href:d.href,pathname:d.pathname.replace(/^\//,""),protocol:d.protocol,search:d.search,uriParams:function(a,d){c.helpers.map(d.split("&"),function(c){c=c.split("=");a[c.shift()]=c.shift()});return a}({},d.search.replace(/^(\/|\?)?|\/$/g,""))}};
DIL.tools.getMetaTags=function(){var a={},c=document.getElementsByTagName("meta"),d,b,g,f,k;d=0;for(g=arguments.length;d<g;d++)if(f=arguments[d],null!==f)for(b=0;b<c.length;b++)if(k=c[b],k.name===f){a[f]=k.content;break}return a};
DIL.modules.siteCatalyst={dil:null,handle:DIL.modules.helpers.handleModuleError,init:function(a,c,d,b){try{var g=this,f={name:"DIL Site Catalyst Module Error"},k=function(a){f.message=a;DIL.errorModule.handleError(f);return a};this.options=b===Object(b)?b:{};this.dil=null;if(c instanceof DIL)this.dil=c;else return k("dilInstance is not a valid instance of DIL");f.partner=c.api.getPartner();if(a!==Object(a))return k("siteCatalystReportingSuite is not an object");window.AppMeasurement_Module_DIL=a.m_DIL=
function(a){var b="function"===typeof a.m_i?a.m_i("DIL"):this;if(b!==Object(b))return k("m is not an object");b.trackVars=g.constructTrackVars(d);b.d=0;b.s=a;b._t=function(){var a,b,c=","+this.trackVars+",",d=this.s,f,s=[];f=[];var n={},u=!1;if(d!==Object(d))return k("Error in m._t function: s is not an object");if(this.d){if("function"===typeof d.foreachVar)d.foreachVar(function(a,b){"undefined"!==typeof b&&(n[a]=b,u=!0)},this.trackVars);else{if(!(d.va_t instanceof Array))return k("Error in m._t function: s.va_t is not an array");
if(d.lightProfileID)(a=d.lightTrackVars)&&(a=","+a+","+d.vl_mr+",");else if(d.pe||d.linkType)a=d.linkTrackVars,d.pe&&(b=d.pe.substring(0,1).toUpperCase()+d.pe.substring(1),d[b]&&(a=d[b].trackVars)),a&&(a=","+a+","+d.vl_l+","+d.vl_l2+",");if(a){b=0;for(s=a.split(",");b<s.length;b++)0<=c.indexOf(","+s[b]+",")&&f.push(s[b]);f.length&&(c=","+f.join(",")+",")}f=0;for(b=d.va_t.length;f<b;f++)a=d.va_t[f],0<=c.indexOf(","+a+",")&&"undefined"!==typeof d[a]&&null!==d[a]&&""!==d[a]&&(n[a]=d[a],u=!0)}g.includeContextData(d,
n).store_populated&&(u=!0);u&&this.d.api.signals(n,"c_").submit()}}};a.loadModule("DIL");a.DIL.d=c;return f.message?f.message:"DIL.modules.siteCatalyst.init() completed with no errors"}catch(n){return this.handle(n,"DIL.modules.siteCatalyst.init() caught error with message ",this.dil)}},constructTrackVars:function(a){var c=[],d,b,g,f,k;if(a===Object(a)){d=a.names;if(d instanceof Array&&(g=d.length))for(b=0;b<g;b++)f=d[b],"string"===typeof f&&f.length&&c.push(f);a=a.iteratedNames;if(a instanceof Array&&
(g=a.length))for(b=0;b<g;b++)if(d=a[b],d===Object(d)&&(f=d.name,k=parseInt(d.maxIndex,10),"string"===typeof f&&f.length&&!isNaN(k)&&0<=k))for(d=0;d<=k;d++)c.push(f+d);if(c.length)return c.join(",")}return this.constructTrackVars({names:"pageName channel campaign products events pe pev1 pev2 pev3".split(" "),iteratedNames:[{name:"prop",maxIndex:75},{name:"eVar",maxIndex:250}]})},includeContextData:function(a,c){var d={},b=!1;if(a.contextData===Object(a.contextData)){var g=a.contextData,f=this.options.replaceContextDataPeriodsWith,
k=this.options.filterFromContextVariables,n={},u,s,m,p;"string"===typeof f&&f.length||(f="_");if(k instanceof Array)for(u=0,s=k.length;u<s;u++)m=k[u],this.dil.validators.isPopulatedString(m)&&(n[m]=!0);for(p in g)!g.hasOwnProperty(p)||n[p]||!(k=g[p])&&"number"!==typeof k||(p=("contextData."+p).replace(/\./g,f),c[p]=k,b=!0)}d.store_populated=b;return d}};
DIL.modules.GA={dil:null,arr:null,tv:null,errorMessage:"",defaultTrackVars:["_setAccount","_setCustomVar","_addItem","_addTrans","_trackSocial"],defaultTrackVarsObj:null,signals:{},hasSignals:!1,handle:DIL.modules.helpers.handleModuleError,init:function(a,c,d){try{this.tv=this.arr=this.dil=null;this.errorMessage="";this.signals={};this.hasSignals=!1;var b={name:"DIL GA Module Error"},g="";c instanceof DIL?(this.dil=c,b.partner=this.dil.api.getPartner()):(g="dilInstance is not a valid instance of DIL",
b.message=g,DIL.errorModule.handleError(b));a instanceof Array&&a.length?this.arr=a:(g="gaArray is not an array or is empty",b.message=g,DIL.errorModule.handleError(b));this.tv=this.constructTrackVars(d);this.errorMessage=g}catch(f){this.handle(f,"DIL.modules.GA.init() caught error with message ",this.dil)}finally{return this}},constructTrackVars:function(a){var c=[],d,b,g,f;if(this.defaultTrackVarsObj!==Object(this.defaultTrackVarsObj)){g=this.defaultTrackVars;f={};d=0;for(b=g.length;d<b;d++)f[g[d]]=
!0;this.defaultTrackVarsObj=f}else f=this.defaultTrackVarsObj;if(a===Object(a)){a=a.names;if(a instanceof Array&&(b=a.length))for(d=0;d<b;d++)g=a[d],"string"===typeof g&&g.length&&g in f&&c.push(g);if(c.length)return c}return this.defaultTrackVars},constructGAObj:function(a){var c={};a=a instanceof Array?a:this.arr;var d,b,g,f;d=0;for(b=a.length;d<b;d++)g=a[d],g instanceof Array&&g.length&&(g=[],f=a[d],g instanceof Array&&f instanceof Array&&Array.prototype.push.apply(g,f),f=g.shift(),"string"===
typeof f&&f.length&&(c[f]instanceof Array||(c[f]=[]),c[f].push(g)));return c},addToSignals:function(a,c){if("string"!==typeof a||""===a||null==c||""===c)return!1;this.signals[a]instanceof Array||(this.signals[a]=[]);this.signals[a].push(c);return this.hasSignals=!0},constructSignals:function(){var a=this.constructGAObj(),c={_setAccount:function(a){this.addToSignals("c_accountId",a)},_setCustomVar:function(a,b,c){"string"===typeof b&&b.length&&this.addToSignals("c_"+b,c)},_addItem:function(a,b,c,d,
f,g){this.addToSignals("c_itemOrderId",a);this.addToSignals("c_itemSku",b);this.addToSignals("c_itemName",c);this.addToSignals("c_itemCategory",d);this.addToSignals("c_itemPrice",f);this.addToSignals("c_itemQuantity",g)},_addTrans:function(a,b,c,d,f,g,k,n){this.addToSignals("c_transOrderId",a);this.addToSignals("c_transAffiliation",b);this.addToSignals("c_transTotal",c);this.addToSignals("c_transTax",d);this.addToSignals("c_transShipping",f);this.addToSignals("c_transCity",g);this.addToSignals("c_transState",
k);this.addToSignals("c_transCountry",n)},_trackSocial:function(a,b,c,d){this.addToSignals("c_socialNetwork",a);this.addToSignals("c_socialAction",b);this.addToSignals("c_socialTarget",c);this.addToSignals("c_socialPagePath",d)}},d=this.tv,b,g,f,k,n,u;b=0;for(g=d.length;b<g;b++)if(f=d[b],a.hasOwnProperty(f)&&c.hasOwnProperty(f)&&(u=a[f],u instanceof Array))for(k=0,n=u.length;k<n;k++)c[f].apply(this,u[k])},submit:function(){try{if(""!==this.errorMessage)return this.errorMessage;this.constructSignals();
return this.hasSignals?(this.dil.api.signals(this.signals).submit(),"Signals sent: "+this.dil.helpers.convertObjectToKeyValuePairs(this.signals,"=",!0)+this.dil.log):"No signals present"}catch(a){return this.handle(a,"DIL.modules.GA.submit() caught error with message ",this.dil)}},Stuffer:{LIMIT:5,dil:null,cookieName:null,delimiter:null,errorMessage:"",handle:DIL.modules.helpers.handleModuleError,callback:null,v:function(){return!1},init:function(a,c,d){try{this.callback=this.dil=null,this.errorMessage=
"",a instanceof DIL?(this.dil=a,this.v=this.dil.validators.isPopulatedString,this.cookieName=this.v(c)?c:"aam_ga",this.delimiter=this.v(d)?d:"|"):this.handle({message:"dilInstance is not a valid instance of DIL"},"DIL.modules.GA.Stuffer.init() error: ")}catch(b){this.handle(b,"DIL.modules.GA.Stuffer.init() caught error with message ",this.dil)}finally{return this}},process:function(a){var c,d,b,g,f,k;k=!1;var n=1;if(a===Object(a)&&(c=a.stuff)&&c instanceof Array&&(d=c.length))for(a=0;a<d;a++)if((b=
c[a])&&b===Object(b)&&(g=b.cn,f=b.cv,g===this.cookieName&&this.v(f))){k=!0;break}if(k){c=f.split(this.delimiter);"undefined"===typeof window._gaq&&(window._gaq=[]);b=window._gaq;a=0;for(d=c.length;a<d&&!(k=c[a].split("="),f=k[0],k=k[1],this.v(f)&&this.v(k)&&b.push(["_setCustomVar",n++,f,k,1]),n>this.LIMIT);a++);this.errorMessage=1<n?"No errors - stuffing successful":"No valid values to stuff"}else this.errorMessage="Cookie name and value not found in json";if("function"===typeof this.callback)return this.callback()},
submit:function(){try{var a=this;if(""!==this.errorMessage)return this.errorMessage;this.dil.api.afterResult(function(c){a.process(c)}).submit();return"DIL.modules.GA.Stuffer.submit() successful"}catch(c){return this.handle(c,"DIL.modules.GA.Stuffer.submit() caught error with message ",this.dil)}}}};
DIL.modules.Peer39={aid:"",dil:null,optionals:null,errorMessage:"",calledBack:!1,script:null,scriptsSent:[],returnedData:[],handle:DIL.modules.helpers.handleModuleError,init:function(a,c,d){try{this.dil=null;this.errorMessage="";this.calledBack=!1;this.optionals=d===Object(d)?d:{};d={name:"DIL Peer39 Module Error"};var b=[],g="";this.isSecurePageButNotEnabled(document.location.protocol)&&(g="Module has not been enabled for a secure page",b.push(g),d.message=g,DIL.errorModule.handleError(d));c instanceof
DIL?(this.dil=c,d.partner=this.dil.api.getPartner()):(g="dilInstance is not a valid instance of DIL",b.push(g),d.message=g,DIL.errorModule.handleError(d));"string"===typeof a&&a.length?this.aid=a:(g="aid is not a string or is empty",b.push(g),d.message=g,DIL.errorModule.handleError(d));this.errorMessage=b.join("\n")}catch(f){this.handle(f,"DIL.modules.Peer39.init() caught error with message ",this.dil)}finally{return this}},isSecurePageButNotEnabled:function(a){return"https:"===a&&!0!==this.optionals.enableHTTPS?
!0:!1},constructSignals:function(){var a=this,c=this.constructScript(),d=DIL.variables.scriptNodeList[0];window["afterFinished_"+this.aid]=function(){try{var b=a.processData(p39_KVP_Short("c_p","|").split("|"));b.hasSignals&&a.dil.api.signals(b.signals).submit()}catch(c){}finally{a.calledBack=!0,"function"===typeof a.optionals.afterResult&&a.optionals.afterResult()}};d.parentNode.insertBefore(c,d);this.scriptsSent.push(c);return"Request sent to Peer39"},processData:function(a){var c,d,b,g,f={},k=
!1;this.returnedData.push(a);if(a instanceof Array)for(c=0,d=a.length;c<d;c++)b=a[c].split("="),g=b[0],b=b[1],g&&isFinite(b)&&!isNaN(parseInt(b,10))&&(f[g]instanceof Array||(f[g]=[]),f[g].push(b),k=!0);return{hasSignals:k,signals:f}},constructScript:function(){var a=document.createElement("script"),c=this.optionals,d=c.scriptId,b=c.scriptSrc,c=c.scriptParams;a.id="string"===typeof d&&d.length?d:"peer39ScriptLoader";a.type="text/javascript";"string"===typeof b&&b.length?a.src=b:(a.src=(this.dil.constants.IS_HTTPS?
"https:":"http:")+"//stags.peer39.net/"+this.aid+"/trg_"+this.aid+".js","string"===typeof c&&c.length&&(a.src+="?"+c));return a},submit:function(){try{return""!==this.errorMessage?this.errorMessage:this.constructSignals()}catch(a){return this.handle(a,"DIL.modules.Peer39.submit() caught error with message ",this.dil)}}};

/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):a.src&&"IMAGE"==c&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 1.6
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(){var a=this;a.version="1.6";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var q=k.AppMeasurement.Db;q||(q=null);var r=k,n,t;try{for(n=r.parent,t=r.location;n&&n.location&&t&&""+n.location!=""+t&&r.location&&""+n.location!=""+r.location&&n.location.host==t.host;)r=n,n=r.parent}catch(u){}a.sb=function(a){try{console.log(a)}catch(b){}};a.Ba=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.kb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&
!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.kb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=
e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=c+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.G=[];a.da=function(c,b,d){if(a.va)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,m=["webkitvisibilitychange","visibilitychange"];
g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ea)for(a.ea=1,d=0;d<m.length;d++)a.d.addEventListener(m[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ea=0,a.delayReady())});f=1;e=0}else d||a.l("_d")&&(f=1);f&&(a.G.push({m:c,a:b,t:e}),a.ea||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.l("_d")?b=1:a.pa();0<a.G.length;){d=a.G.shift();if(b&&!d.t&&d.t>c){a.G.unshift(d);setTimeout(a.delayReady,
parseInt(a.maxDelay/2));break}a.va=1;a[d.m].apply(a,d.a);a.va=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.da("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,m="";e=f="";if(a.lightProfileID)d=a.K,(m=a.lightTrackVars)&&(m=","+m+","+a.ia.join(",")+",");else{d=a.e;if(a.pe||a.linkType)m=a.linkTrackVars,
f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(m=a[e].Cb,f=a[e].Bb));m&&(m=","+m+","+a.B.join(",")+",");f&&m&&(m+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!m||0<=m.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.o=function(c,b,d,f,e){var g="",m,p,k,w,n=0;"contextData"==c&&(c="c");if(b){for(m in b)if(!(Object.prototype[m]||e&&m.substring(0,e.length)!=e)&&b[m]&&(!d||0<=d.indexOf(","+(f?f+".":"")+m+","))){k=!1;if(n)for(p=
0;p<n.length;p++)m.substring(0,n[p].length)==n[p]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),p=b[m],e&&(m=m.substring(e.length)),0<m.length))if(k=m.indexOf("."),0<k)p=m.substring(0,k),k=(e?e:"")+p+".",n||(n=[]),n.push(k),g+=a.o(p,b,d,f,k);else if("boolean"==typeof p&&(p=p?"true":"false"),p){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(k=m.substring(0,4),w=m.substring(4),m){case "transactionID":m="xact";break;case "channel":m="ch";break;case "campaign":m="v0";break;default:a.Ba(w)&&("prop"==
k?m="c"+w:"eVar"==k?m="v"+w:"list"==k?m="l"+w:"hier"==k&&(m="h"+w,p=p.substring(0,255)))}g+="&"+a.escape(m)+"="+a.escape(p)}}""!=g&&(g+="&."+c)}return g};a.mb=function(){var c="",b,d,f,e,g,m,p,k,n="",r="",s=e="";if(a.lightProfileID)b=a.K,(n=a.lightTrackVars)&&(n=","+n+","+a.ia.join(",")+",");else{b=a.e;if(a.pe||a.linkType)n=a.linkTrackVars,r=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].Cb,r=a[e].Bb));n&&(n=","+n+","+a.B.join(",")+",");r&&(r=","+r+",",
n&&(n+=",events,"));a.events2&&(s+=(""!=s?",":"")+a.events2)}if(a.visitor&&1.5<=parseFloat(a.visitor.version)&&a.visitor.getCustomerIDs){e=q;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState));e&&(c+=a.o("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.o("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);m=e.substring(4);!g&&
"events"==e&&s&&(g=s,s="");if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,
255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e=
"cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":s&&(g+=(""!=g?",":"")+s);if(r)for(m=
g.split(","),g="",f=0;f<m.length;f++)p=m[f],k=p.indexOf("="),0<=k&&(p=p.substring(0,k)),k=p.indexOf(":"),0<=k&&(p=p.substring(0,k)),0<=r.indexOf(","+p+",")&&(g+=(g?",":"")+m[f]);break;case "events2":g="";break;case "contextData":c+=a.o("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e=
"mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.o("mts",a[e],n,e));g="";break;default:a.Ba(m)&&("prop"==f?e="c"+m:"eVar"==f?e="v"+m:"list"==f?e="l"+m:"hier"==f&&(e="h"+m,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.c&&(c+=a.c)}return c};a.v=function(a){var b=a.tagName;if("undefined"!=""+a.Gb||"undefined"!=""+a.wb&&"HTML"!=(""+a.wb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||
"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.xa=function(a){var b=a.href?a.href:"",d,f,e;d=b.indexOf(":");f=b.indexOf("?");e=b.indexOf("/");b&&(0>d||0<=f&&d>f||0<=e&&d>e)&&(f=a.protocol&&1<a.protocol.length?a.protocol:l.protocol?l.protocol:"",d=l.pathname.lastIndexOf("/"),b=(f?f+"//":"")+(a.host?a.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>d?0:d)+"/":"")+b);return b};a.H=function(c){var b=a.v(c),d,f,e="",g=0;return b&&
(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):c.src&&"IMAGE"==b&&(e=c.src):e=a.xa(c),e)?{id:e.substring(0,100),type:g}:0};a.Eb=function(c){for(var b=a.v(c),d=a.H(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.v(c),d=a.H(c);
d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.vb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,m;a.ja=1;d||(a.ja=0,d=a.clickObject);if(d){c=a.v(d);for(b=a.H(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.v(d),b=a.H(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var p=d.onclick?""+d.onclick:"";if(0<=p.indexOf(".tl(")||0<=p.indexOf(".trackLink("))d=0}}else a.ja=1;!e&&d&&(e=a.xa(d));e&&
!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var n=0,r=0,q;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(p=e.toLowerCase(),g=p.indexOf("?"),m=p.indexOf("#"),0<=g?0<=m&&m<g&&(g=m):g=m,0<=g&&(p=p.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),m=0;m<g.length;m++)(q=g[m])&&p.substring(p.length-(q.length+1))=="."+q&&(f="d");if(a.trackExternalLinks&&!f&&(p=e.toLowerCase(),a.Aa(p)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),
g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),n=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(m=0;m<g.length;m++)q=g[m],0<=p.indexOf(q)&&(r=1);r?n&&(f="e"):n||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.c="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.c="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+
"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.nb=function(){var c=a.ja,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,m,p,k,e=0;if(g)for(m=0;m<g.length;m++)p=g[m].split("="),f=a.unescape(p[0]).split(","),p=a.unescape(p[1]),
b[p]=f;f=a.account.split(",");m={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(m[k]=a.contextData[k],a.contextData[k]="");a.c=a.o("c",m)+(a.c?a.c:"");if(c||a.c){c&&!a.c&&(e=1);for(p in b)if(!Object.prototype[p])for(k=0;k<f.length;k++)for(e&&(g=b[p].join(","),g==a.account&&(a.c+=("&"!=p.charAt(0)?"&":"")+p,b[p]=[],d=1)),m=0;m<b[p].length;m++)g=b[p][m],g==f[k]&&(e&&(a.c+="&u="+a.escape(g)+("&"!=p.charAt(0)?"&":"")+p+"&u=0"),b[p].splice(m,1),d=1);c||(d=1);if(d){e=
"";m=2;!c&&a.c&&(e=a.escape(f.join(","))+"="+a.escape(a.c),m=1);for(p in b)!Object.prototype[p]&&0<m&&0<b[p].length&&(e+=(e?"&":"")+a.escape(b[p].join(","))+"="+a.escape(p),m--);a.cookieWrite("s_sq",e)}}}return c};a.ob=function(){if(!a.Ab){var c=new Date,b=r.location,d,f,e=f=d="",g="",m="",k="1.2",n=a.cookieWrite("s_cc","true",0)?"Y":"N",q="",s="";if(c.setUTCDate&&(k="1.3",(0).toPrecision&&(k="1.5",c=[],c.forEach))){k="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(k="1.7",c.reduce&&(k="1.8",k.trim&&
(k="1.8.1",Date.parse&&(k="1.8.2",Object.create&&(k="1.8.5")))))}catch(t){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;m=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),q=a.b.Fb(b)?"Y":"N"}catch(u){}try{a.b.addBehavior("#default#clientCaps"),s=a.b.connectionType}catch(x){}a.resolution=d;a.colorDepth=
f;a.javascriptVersion=k;a.javaEnabled=e;a.cookiesEnabled=n;a.browserWidth=g;a.browserHeight=m;a.connectionType=s;a.homepage=q;a.Ab=1}};a.L={};a.loadModule=function(c,b){var d=a.L[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.L[c]=a[c]=d;d.Qa=function(){return d.Ua};d.Va=function(b){if(d.Ua=b)a[c+"_onLoad"]=b,a.da(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.Qa,set:d.Va}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=
b,a.da(c+"_onLoad",[a,d],1)||b(a,d))};a.l=function(c){var b,d;for(b in a.L)if(!Object.prototype[b]&&(d=a.L[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.qb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>v)return 0}return 1};a.M=function(c,b){var d,
f,e,g,m,k;for(d=0;2>d;d++)for(f=0<d?a.qa:a.e,e=0;e<f.length;e++)if(g=f[e],(m=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(k in a[g])m[k]||(m[k]=a[g][k]);a[g]=m}};a.Ja=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.qa:a.e,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.ib=function(a){var b,d,f,e,g,m=0,k,n="",q="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(k=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,
7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?m=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(m=",p,ei,"),m&&k)))){if((a=k.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=m.indexOf(","+e.substring(0,d)+",")?n+=(n?"&":"")+e:q+=(q?"&":"")+e;n&&q?k=n+"&"+q:q=""}d=253-(k.length-q.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+k}return a};a.Pa=function(c){var b=
a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.Z=!1;a.D=!1;a.Xa=function(){a.D=!0;a.i()};a.X=!1;a.Q=!1;a.Ta=function(c){a.marketingCloudVisitorID=c;a.Q=!0;a.i()};a.aa=!1;a.R=!1;a.Ya=function(c){a.visitorOptedOut=c;a.R=!0;a.i()};a.U=!1;a.N=!1;a.La=function(c){a.analyticsVisitorID=
c;a.N=!0;a.i()};a.W=!1;a.P=!1;a.Na=function(c){a.audienceManagerLocationHint=c;a.P=!0;a.i()};a.V=!1;a.O=!1;a.Ma=function(c){a.audienceManagerBlob=c;a.O=!0;a.i()};a.Oa=function(c){a.maxDelay||(a.maxDelay=250);return a.l("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.Y=!1;a.C=!1;a.pa=function(){a.C=!0;a.i()};a.isReadyToTrack=function(){var c=!0,b=a.visitor;a.Z||a.D||(a.Pa(a.Xa)?a.D=!0:a.Z=!0);if(a.Z&&!a.D)return!1;b&&b.isAllowed()&&(a.X||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||
(a.X=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.Ta]),a.marketingCloudVisitorID&&(a.Q=!0)),a.aa||a.visitorOptedOut||!b.isOptedOut||(a.aa=!0,a.visitorOptedOut=b.isOptedOut([a,a.Ya]),a.visitorOptedOut!=q&&(a.R=!0)),a.U||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.U=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.La]),a.analyticsVisitorID&&(a.N=!0)),a.W||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||(a.W=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,
a.Na]),a.audienceManagerLocationHint&&(a.P=!0)),a.V||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.V=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Ma]),a.audienceManagerBlob&&(a.O=!0)),a.X&&!a.Q&&!a.marketingCloudVisitorID||a.U&&!a.N&&!a.analyticsVisitorID||a.W&&!a.P&&!a.audienceManagerLocationHint||a.V&&!a.O&&!a.audienceManagerBlob||a.aa&&!a.R)&&(c=!1);a.Y||a.C||(a.Oa(a.pa)?a.C=!0:a.Y=!0);a.Y&&!a.C&&(c=!1);return c};a.k=q;a.p=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};
f.bb=c;f.ab=b;f.Za=d;a.k==q&&(a.k=[]);a.k.push(f);0==a.p&&(a.p=setInterval(a.i,100))};a.i=function(){var c;if(a.isReadyToTrack()&&(a.Wa(),a.k!=q))for(;0<a.k.length;)c=a.k.shift(),c.ab.apply(c.bb,c.Za)};a.Wa=function(){a.p&&(clearInterval(a.p),a.p=0)};a.Ra=function(c){var b,d,f=q,e=q;if(!a.isReadyToTrack()){b=[];if(c!=q)for(d in f={},c)f[d]=c[d];e={};a.Ja(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return!0}return!1};a.lb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;
var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+
f.getDay()+" "+f.getTimezoneOffset());a.visitor&&(a.visitor.jb&&(a.authState=a.visitor.jb()),!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)));a.l("_s");a.Ra(c)||(b&&a.M(b),c&&(d={},a.Ja(d,0),a.M(c)),a.qb()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.lb()),a.vb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&
(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Ka||(a.referrer=r.document.referrer),a.Ka=1,a.referrer=a.ib(a.referrer),a.l("_g")),a.nb()&&!a.abort&&(a.ob(),g+=a.mb(),a.ub(e,g),a.l("_t"),a.referrer=""))),c&&a.M(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.c=a.lightProfileID=0};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=
c;a.linkType=b;a.linkName=d;e&&(a.j=c,a.r=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.e.length;c++)if(b=a.e[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=
void 0};a.tagContainerMarker="";a.ub=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",k=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(k||(k=a.account,f=k.indexOf(","),0<=f&&(k=k.substring(0,f)),k=k.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=k+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady();d+=f+"/b/ss/"+a.account+
"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.zb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].AudienceManagement.passData&":"")+b+"&AQE=1";a.gb(d);a.fa()};a.gb=function(c){a.g||a.pb();a.g.push(c);a.ha=a.u();a.Ha()};a.pb=function(){a.g=a.rb();a.g||(a.g=[])};a.rb=function(){var c,b;if(a.ma()){try{(b=k.localStorage.getItem(a.ka()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.ma=function(){var c=!0;a.trackOffline&&a.offlineFilename&&
k.localStorage&&k.JSON||(c=!1);return c};a.ya=function(){var c=0;a.g&&(c=a.g.length);a.A&&c++;return c};a.fa=function(){if(!a.A)if(a.za=q,a.la)a.ha>a.J&&a.Fa(a.g),a.oa(500);else{var c=a.$a();if(0<c)a.oa(c);else if(c=a.wa())a.A=1,a.tb(c),a.xb(c)}};a.oa=function(c){a.za||(c||(c=0),a.za=setTimeout(a.fa,c))};a.$a=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.u()-a.Ea;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.wa=function(){if(0<a.g.length)return a.g.shift()};
a.tb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.sb(b)}};a.Sa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.T=!1;var s;try{s=JSON.parse('{"x":"y"}')}catch(x){s=null}s&&"y"==s.x?(a.T=!0,a.S=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.S=function(a){return k.$.parseJSON(a)},a.T=!0):a.S=function(){return null};a.xb=function(c){var b,d,f;a.Sa()&&2047<c.length&&("undefined"!=
typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&a.AudienceManagement&&a.AudienceManagement.isReady()&&(a.T?b.ra=!0:b=0));!b&&a.Ia&&(c=c.substring(0,2047));!b&&a.d.createElement&&a.AudienceManagement&&a.AudienceManagement.isReady()&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=
0);b||(b=new Image,b.alt="");b.ua=function(){try{a.na&&(clearTimeout(a.na),a.na=0),b.timeout&&(clearTimeout(b.timeout),b.timeout=0)}catch(c){}};b.onload=b.yb=function(){b.ua();a.fb();a.ba();a.A=0;a.fa();if(b.ra){b.ra=!1;try{var c=a.S(b.responseText);a.AudienceManagement.passData(c)}catch(d){}}};b.onabort=b.onerror=b.hb=function(){b.ua();(a.trackOffline||a.la)&&a.A&&a.g.unshift(a.eb);a.A=0;a.ha>a.J&&a.Fa(a.g);a.ba();a.oa(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.yb():
b.hb())};a.Ea=a.u();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Ca)try{f.removeChild(a.Ca)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ca=a.cb}b.abort&&(a.na=setTimeout(b.abort,5E3));a.eb=c;a.cb=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.F||a.r)a.forcedLinkTrackingTimeout||
(a.forcedLinkTrackingTimeout=250),a.ca=setTimeout(a.ba,a.forcedLinkTrackingTimeout)};a.fb=function(){if(a.ma()&&!(a.Da>a.J))try{k.localStorage.removeItem(a.ka()),a.Da=a.u()}catch(c){}};a.Fa=function(c){if(a.ma()){a.Ha();try{k.localStorage.setItem(a.ka(),k.JSON.stringify(c)),a.J=a.u()}catch(b){}}};a.Ha=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.g.length>a.offlineLimit;)a.wa()}};a.forceOffline=function(){a.la=!0};a.forceOnline=function(){a.la=!1};a.ka=
function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.u=function(){return(new Date).getTime()};a.Aa=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.zb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.M(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],
f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:k.location);d||(d="&");return c&&
b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?a.unescape(b):""}};a.B="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.e=a.B.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ia="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.K=a.ia.slice(0);a.qa="account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
for(n=0;250>=n;n++)76>n&&(a.e.push("prop"+n),a.K.push("prop"+n)),a.e.push("eVar"+n),a.K.push("eVar"+n),6>n&&a.e.push("hier"+n),4>n&&a.e.push("list"+n);n="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");a.e=a.e.concat(n);a.B=a.B.concat(n);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename=
"AppMeasurement.offline";a.Ea=0;a.ha=0;a.J=0;a.Da=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Ia=!1,navigator){var y=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=y.indexOf("MSIE ")||0<=y.indexOf("Trident/")&&0<=y.indexOf("Windows NT 6"))a.Ia=!0}}catch(z){}a.ba=function(){a.ca&&(k.clearTimeout(a.ca),a.ca=q);a.j&&a.F&&a.j.dispatchEvent(a.F);a.r&&("function"==typeof a.r?a.r():a.j&&a.j.href&&(a.d.location=
a.j.href));a.j=a.F=a.r=0};a.Ga=function(){a.b=a.d.body;a.b?(a.q=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.ta)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.q,!1);else{a.b.removeEventListener("click",a.q,!0);a.ta=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.I&&a.I==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
0;else{var m=a.I=a.clickObject;a.ga&&(clearTimeout(a.ga),a.ga=0);a.ga=setTimeout(function(){a.I==m&&(a.I=0)},1E4);f=a.ya();a.track();if(f<a.ya()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Aa(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(n){b=new k.MouseEvent}if(b){try{b.initMouseEvent("click",
c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(q){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.j=c.target,a.F=b)}}}}}catch(r){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.q):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&
k.MouseEvent)&&(a.ta=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.q,!0)),a.b.addEventListener("click",a.q,!1))):setTimeout(a.Ga,30)};a.Ga();a.loadModule("ActivityMap")}
function s_gi(a){var k,q=window.s_c_il,r,n,t=a.split(","),u,s,x=0;if(q)for(r=0;!x&&r<q.length;){k=q[r];if("s_c"==k._c&&(k.account||k.oun))if(k.account&&k.account==a)x=1;else for(n=k.account?k.account:k.oun,n=k.allAccounts?k.allAccounts:n.split(","),u=0;u<t.length;u++)for(s=0;s<n.length;s++)t[u]==n[s]&&(x=1);r++}x||(k=new AppMeasurement);k.setAccount?k.setAccount(a):k.sa&&k.sa(a);return k}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var a=window,k=a.s_giq,q,r,n;if(k)for(q=0;q<k.length;q++)r=k[q],n=s_gi(r.oun),n.setAccount(r.un),n.setTagContainer(r.tagContainerName);a.s_giq=0}s_pgicq();
