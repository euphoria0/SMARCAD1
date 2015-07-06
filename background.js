var userAgent = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.124 Safari/537.36";
var AcceptH = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
var AcceptEncoding = "gzip, deflate";
var AcceptLanguage = "en-us,en;q=0.5";

var requestFilter = {
    urls: [
        "<all_urls>"
    ]
};
chrome.privacy.network.webRTCMultipleRoutesEnabled.set({'value': false});
chrome.webRequest.onBeforeSendHeaders.addListener(function (details) {
    var headers = details.requestHeaders;
    var end = 0;
    var i = 0;
    var l = headers.length;
    for (i = 0; i < l; ++i) {
        if (headers[i].name == 'User-Agent' && i < headers.length) {
            headers[i].value = userAgent;
            end = end + 1;}
        if (headers[i].name == 'Accept' && i < headers.length) {
            headers[i].value = AcceptH;
            end = end + 1;
        }
        if (headers[i].name == 'Accept-Encoding' && i < headers.length) {
            headers[i].value = AcceptEncoding;
            end = end + 1;
        }
        if (headers[i].name == 'Accept-Language' && i < headers.length) {
            headers[i].value = AcceptLanguage;
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