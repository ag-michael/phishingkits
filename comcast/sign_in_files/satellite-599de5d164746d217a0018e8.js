_satellite.pushAsyncScript(function(event, target, $variables){
  var pageURL=window.location.href;

(function() {
   window["SpongecellActivityTag"] = {
     line_of_business: "Residential",
     primary_category: "PRIMARY_CATEGORY",
     secondary_category: "SECONDARY_CATEGORY",
     purchase_step: "PURCHASE_STEP",
     viewed_product_id: "VIEWED_PRODUCT_ID",
     carted_product_id: "CARTED_PRODUCT_ID",
     purchased_product_id: "PURCHASED_PRODUCT_ID",
     page_url: pageURL
   };
   var tag = document.createElement("script"); tag.async = 1;
   tag.src = "https://assets-ssl.cdn.spongecell.com/data/public/system/assets/27/original/22daf390f3d99f34f5d9b5aff6a4b89fd5ca6412.js";
   var firstTag = document.getElementsByTagName("script")[0];
   firstTag.parentNode.insertBefore(tag, firstTag);
 })();

_satellite.notify('DTM:Spongecell - Universal Activity Tag');
});
