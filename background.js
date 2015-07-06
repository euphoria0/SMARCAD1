var ua = localStorage['ua'];
var ah = localStorage['ah'];
var al = localStorage['al'];
var ae = localStorage['ae'];

var requestFilter = {
    urls: [
        "<all_urls>"
    ]
};
chrome.privacy.network.webRTCMultipleRoutesEnabled.set({
    'value': false
});

chrome.webRequest.onBeforeSendHeaders.addListener(function (details) {
    var headers = details.requestHeaders;
    var end = 0;
    var i = 0;
    var l = headers.length;
    for (i = 0; i < l; ++i) {
        if (headers[i].name == 'User-Agent' && i < headers.length) {
            headers[i].value = ua;
            end = end + 1;
        }
        if (headers[i].name == 'Accept' && i < headers.length) {
            headers[i].value = ah;
            end = end + 1;
        }
        if (headers[i].name == 'Accept-Encoding' && i < headers.length) {
            headers[i].value = al;
            end = end + 1;
        }
        if (headers[i].name == 'Accept-Language' && i < headers.length) {
            headers[i].value = ae;
            end = end + 1;
        }
        if (end == 5) {
            break;
        }
    }

    return {
        requestHeaders: headers
    };
}, requestFilter, ['requestHeaders', 'blocking']);