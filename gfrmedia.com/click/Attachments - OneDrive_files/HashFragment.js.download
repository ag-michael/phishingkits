window.hashFragment = (function () {

    "use strict";

    return {
        hashParams: {},

        parseHashParams: function (windowObj) {
            var hash,
                hashPairs,
                hashPair,
                delimiterIndex,
                key,
                value,
                ind;

            windowObj = windowObj ? windowObj : window;
            hash = windowObj.location.hash.replace("#", "");
            this.hashParams = {};
            hashPairs = hash.split("&");
            for (ind in hashPairs) {
                hashPair = hashPairs[ind];
                delimiterIndex = hashPair.indexOf("=");
                if (delimiterIndex >= 0) {
                    key = decodeURIComponent(hashPair.substring(0, delimiterIndex)).toLowerCase();
                    value = decodeURIComponent(hashPair.substring(delimiterIndex + 1));
                    this.hashParams[key] = value;
                }
            }
        },
        getHashParam: function (key) {
            return this.hashParams[key.toLowerCase()];
        }
    };
})();
