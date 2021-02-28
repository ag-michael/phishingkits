(function() {
    var mappings = {"Xfinity.com/mobile_RTG_ACQ_4599517_ConfirmationPage":["https://www.xfinity.com/mobile/confirmation"],"Xfinity.com/mobile_RTG_ACQ_4597163_CheckoutReview":["https://www.xfinity.com/mobile/checkout/review"],"Xfinity.com/mobile_RTG_ACQ_4597432_CheckoutPayment":["https://www.xfinity.com/mobile/checkout/payment"],"Xfinity.com/mobile_RTG_ACQ_4597821_CheckoutShipping":["https://www.xfinity.com/mobile/checkout/shipping"],"Xfinity.com/mobile_RTG_ACQ_4597523_CustomizeYourCart":["https://www.xfinity.com/mobile/cart"],"Xfinity.com/mobile_RTG_ACQ_4597632_CustomizePlan":["https://www.xfinity.com/mobile/customizer/plan"],"Xfinity.com/mobile_RTG_ACQ_4597524_CheckoutLogin":["https://www.xfinity.com/mobile/customizer/login"],"Xfinity.com/mobile_RTG_ACQ_4599513_Support":["https://www.xfinity.com/mobile/support"],"Xfinity.com/mobile_RTG_ACQ_4597631_CustomizeDevice":["https://www.xfinity.com/mobile/shop/device/"],"Xfinity.com/mobile_RTG_ACQ_4601190_ShopDevices":["https://www.xfinity.com/mobile/shop?tab=devices"],"Xfinity.com/mobile_RTG_ACQ_4597517_ShopAccessories":["https://www.xfinity.com/mobile/shop?tab=accessories"],"Xfinity.com/mobile_RTG_ACQ_4597623_PlanPage":["https://www.xfinity.com/mobile/plan"],"Xfinity.com/mobile_RTG_ACQ_4597155_InternationalPlanPage":["https://www.xfinity.com/mobile/plan/international"],"Xfinity.com/mobile_RTG_ACQ_4599507_Homepage":["https://www.xfinity.com/mobile"],"Xfinity.com_RTG_ACQ_2723658_Buyflow_OrderConfirmation":["https://www.xfinity.com/Checkout/Confirmation2.aspx","https://www.xfinity.com/buy/confirmation","https://idm.xfinity.com/myaccount/create-uid"],"Xfinity.com_RTG_ACQ_2721063_Buyflow_OrderCustomization":["https://www.xfinity.com/customization/","https://www.xfinity.com/buy/"],"Xfinity.com_RTG_ACQ_2723661_Buyflow_OrderCustomization_Multicultural":["https://es.xfinity.com/customization/","https://es.xfinity.com/buy/"],"Comcast-Xfinity Customers Come First":["https://www.xfinity.com/customers-come-first"],"Comcast-Xfinity Help and Support Cancel Xfinity":["https://www.xfinity.com/support/internet/cancel-my-xfinity-services"],"Xfinity.com_RTG_ACQ_3701725_ContactUs":["https://www.xfinity.com/support/contact-us"],"DBM_RTG_ACQ_6606768_XFINITY_Instant_TV":["https://www.xfinity.com/learn/instant-tv"],"Xfinity.com_RTG_ACQ_4497712_Upgrade":["https://www.xfinity.com/lp/ppc/upgrade-xfinity-internet-service","https://www.xfinity.com/upgrade-center/offers","https://www.xfinity.com/upgrade","https://www.xfinity.com/Corporate/Learn/DigitalCable/premium-channels.html","https://www.xfinity.com/myplan","https://www.xfinity.com/buy/plan"],"Xfinity.com_RTG_ACQ_ 3423384_Homepage_CustomerHomepage":["https://customer.xfinity.com/","https://www.xfinity.com/bill-pay.html","https://www.xfinity.com/apps","https://www.xfinity.com/customer-home","https://www.xfinity.com/manage-my-account"],"DFA Floodlight Refer A Friend_Dashboard":["https://referafriend.xfinity.com/dashboard"],"Xfinity.com_RTG_ACQ_4497712_Help&Support":["https://www.xfinity.com/support"],"Xfinity.com_RTG_ACQ_3675199_Learn&Landing_MyXfinity 2016":["https://my.xfinity.com","https://www.xfinity.com/latino/packages","https://www.xfinity.com/tuidioma","https://www.xfinity.com/parami"],"Xfinity.com_RTG_ACQ_2727704_Multicultural_Hispanic_Multicultural":["https://es.xfinity.com/"],"Xfinity.com_RTG_ACQ_3421191_Learn&Landing_MoveTransferDeals":["https://www.xfinity.com/moving","https://www.xfinity.com/buy/plan/move"],"Xfinity.com_RTG_ACQ_2724308_Learn&Landing_TriplePlay":["https://www.xfinity.com/Corporate/Learn/Bundles/bundles.html","https://www.xfinity.com/shop/xfinity-tripleplay","https://www.xfinity.com/m/triple-play","https://www.xfinity.com/m/tv-internet-voice","https://www.xfinity.com/learn/offers?lob=tv,internet,voice","https://www.xfinity.com/learn/bundles/triple-play"],"Xfinity.com_RTG_ACQ_2723668_Learn&Landing_DoublePlay":["https://www.xfinity.com/cable-internet-packages.html","https://www.xfinity.com/shop/xfinity-doubleplay","https://www.xfinity.com/m/cable-internet-packages","https://www.xfinity.com/learn/offers?lob=tv,internet","https://www.xfinity.com/learn/bundles/internet-cable-packages"],"Xfinity_Learn_ChannelLineUp":["https://www.xfinity.com/learn/channel-lineup"],"Xfinity.com_RTG_ACQ_2724229_Learn&Landing_X1":["https://www.xfinity.com/voice-remote","https://www.xfinity.com/learn/digital-cable-tv/x1"],"Xfinity.com_RTG_NA_2875772_Stream_Stream":["https://www.xfinity.com/get-stream"],"Xfinity.com_RTG_ACQ_3852531_Learn&Landing_Netflix":["https://www.xfinity.com/netflix"],"Xfinity.com_RTG_ACQ_2724312_Learn&Landing_Video":["https://www.xfinity.com/learn/digital-cable-tv","https://www.xfinity.com/Corporate/Learn/DigitalCable","https://www.xfinity.com/shop/xfinity-cable","https://www.xfinity.com/m/digital-cable","https://www.xfinity.com/learn/offers?lob=tv"],"Xfinity.com_RTG_ACQ_2722062_Learn&Landing_HSD":["https://www.xfinity.com/internet-service.html","https://www.xfinity.com/shop/xfinity-internetplus","https://www.xfinity.com/m/internet-service","https://www.xfinity.com/learn/internet-service","https://www.xfinity.com/learn/offers?lob=internet"],"Xfinity.com_RTG_ACQ_6034090_Learn&Landing_Mobile-Service":["https://www.xfinity.com/learn/mobile-service"],"Xfinity.com_RTG_ACQ_2724714_Learn&Landing_Voice":["https://www.xfinity.com/home-phone-service.html","https://www.xfinity.com/m/voice","https://www.xfinity.com/learn/offers?lob=voice","https://www.xfinity.com/learn/home-phone-services"],"Xfinity.com_RTG_ACQ_2721071_Learn&Landing_Deals":["https://www.xfinity.com/Corporate/shop/productoverview.html","https://www.xfinity.com/learn/offers"],"Xfinity.com_RTG_ACQ_2728103_Learn&Landing_XHS":["https://www.xfinity.com/home-security","https://www.xfinity.com/learn/home-security","https://www.xfinity.com/shop/xfinity-homesecurity","https://www.xfinity.com/homeoffer.html","https://www.xfinity.com/learn/bundles/quad-play","https://www.xfinity.com/quad-play"],"Xfinity.com_RTG_ACQ_3377935_Learn&Landing_Xfinity-vs-CenturyLink":["https://www.xfinity.com/compare/comcast-xfinity-vs-centurylink.html"],"Xfinity.com_RTG_ACQ_3380707_Learn&Landing_Xfinity-vs-Directv":["https://www.xfinity.com/compare/comcast-xfinity-vs-directv.html"],"Xfinity.com_RTG_ACQ_3377643_Learn&Landing_Xfinity-vs-DishNetwork":["https://www.xfinity.com/compare/comcast-xfinity-vs-dish-network.html"],"Xfinity.com_RTG_ACQ_3377028_Learn&Landing_Xfinity-vs-VerizonFios":["https://www.xfinity.com/compare/comcast-xfinity-vs-verizon-fios.html"],"Xfinity.com_RTG_ACQ_3380567_Learn&Landing_Xfinity-vs-GoogleFiber":["https://www.xfinity.com/compare/comcast-xfinity-vs-google-fiber.html"],"Xfinity.com_RTG_ACQ_3380161_Learn&Landing_Xfinity-vs-Competition":["https://www.xfinity.com/xfinity-vs-competition"],"Xfinity.com_RTG_ACQ_3380332_Learn&Landing_Xfinity-vs-Uverse-vs-Directv":["https://www.xfinity.com/compare/comcast-xfinity-vs-att-u-verse-directv.html"],"Xfinity.com_RTG_ACQ_4497712_Learning&Landing_Local":["https://www.xfinity.com/local/"],"Xfinity.com_RTG_ACQ_3177760_Buyflow_LocalSearchPages":["https://www.xfinity.com/locations/"],"Xfinity.com_RTG_ACQ_3249796_Gig":["https://www.xfinity.com/Gig"],"Xfinity.com_RTG_ACQ_3472860_Nascar":["https://www.xfinity.com/sports/nascar"],"Xfinity.com_RTG_ACQ_3489312_Sports":["https://www.xfinity.com/sports"],"Xfinity.com_RTG_ACQ_2723464_Homepage_Homepage":["https://www.xfinity.com/","https://www.xfinity.com/m","https://www.xfinity.com/learn/home"]}
;

    var retargetingURL = "https://rt.spongecell.com/v1/r/1300?_id=119";
    var settings = window.SpongecellActivityTag;

    var mapper = function(mappings, pageURL) {
  // console.log("pageURL", pageURL);
  var segmentMatches = {};
  var segments = Object.keys(mappings);
  segments.forEach(function(segment) {
    var patterns = mappings[segment];
    var patternMatches = patterns.forEach(function(pattern) {
      pattern = pattern.replace("http://", "https://");
      pattern = pattern.replace(/[?]/g, "\\?");  // escape special characters for regular expression
      pattern = pattern.replace("*", "(.*)");
      pattern = "^" + pattern;
      // console.log("pattern", pattern)
      var re = new RegExp(pattern, 'i'); // case insensitive
      // console.log("match", re.exec(pageURL))
      var match = re.exec(pageURL);
      if (match != null) {
        segmentMatches[segment] = match;
      }
    });
  });
  var matchingSegments = Object.keys(segmentMatches);
  var longestMatchLength = 0;
  var longestMatchedSegment = null;
  matchingSegments.forEach(function(segment) {
    // console.log("segment", segment);
    var match = segmentMatches[segment];
    var matchedText = match[0];
    if (matchedText.length > longestMatchLength) {
      longestMatchLength = matchedText.length;
      longestMatchedSegment = segment;
    }
  });
  // console.log("longestMatchedSegment", longestMatchedSegment);
  return longestMatchedSegment;
}
;

    // map URLs to retargeting segments
    var pageURL = settings.page_url;
    settings["retargeting_segment"] = mapper(mappings, pageURL);

    // convert all data attributes to retargeting parameters and fire the retargeting pixel
    for (var setting in settings) {
        if (settings.hasOwnProperty(setting)) {
            var value = settings[setting];
            retargetingURL += "&" + setting + "=" + encodeURIComponent(value);
        }
    }

    function firePixel(url) {
        var img = document.createElement("img");
        img.style = "display: none;";
        img.src = url + "&cache_buster=" + Math.floor(Math.random() * 10e12);
        // tag.parentNode.insertBefore(img, tag);
    }

    firePixel(retargetingURL);

    // fire the adobe sync pixel
    firePixel("https://analytics.spongecell.com/sync/6/?r=https%3A%2F%2Fdpm.demdex.net%2Fibs%3Adpid%3D22053%26dpuuid%3D%5BSPONGEKEY%5D");
})();
