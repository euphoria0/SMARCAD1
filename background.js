var ua = '';
var ah = '';
var al = '';
var ae = '';
chrome.storage.local.get({
    ua: '',
    ah: '',
    al: '',
    ae: ''
}, function (items) {
    if (items.ua != "null") ua = items.ua;
    if (items.ua != "null") ah = items.ah;
    if (items.ua != "null") al = items.al;
    if (items.ua != "null") ae = items.ae;
    changeHeader();
});

var changeHeader = function () {
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
}