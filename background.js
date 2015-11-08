var requestFilter = {
    urls: [
        "<all_urls>"
    ]
};

chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {

    var headers = details.requestHeaders;
    var end = 0;
    var i = 0;
    var l = headers.length;
    for (i = 0; i < l; ++i) {
      if (headers[i].name == 'User-Agent' && i < headers.length) {
        headers[i].value = "Mozilla/5.0 (X11; Linux x86_64; rv:41.0) Gecko/20100101 Firefox/41.0";
        end = end + 1;
      }
      if (headers[i].name == 'Accept' && i < headers.length) {
        headers[i].value = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
        end = end + 1;
      }
      if (headers[i].name == 'Accept-Encoding' && i < headers.length) {
        headers[i].value = "gzip, deflate";
        end = end + 1;
      }
      if (headers[i].name == 'Accept-Language' && i < headers.length) {
        headers[i].value = "en-US,en;q=0.5";
        end = end + 1;
      }
      if (end == 5) {
        break;
      }
    }

    return {
      requestHeaders: headers
    };
  }, requestFilter, ['requestHeaders','blocking']);
