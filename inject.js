var defNav = function() {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: "Mozilla/5.0 (X11; Linux x86_64; rv:41.0) Gecko/20100101 Firefox/41.0"
  });
  Object.defineProperty(window.navigator, 'appVersion', {
    value: "5.0 (X11)"
  });
  Object.defineProperty(window.navigator, 'vendor', {
    value: ""
  });
  Object.defineProperty(window.navigator, 'appName', {
    value: "Netscape"
  });
  Object.defineProperty(window.navigator, 'appCodeName', {
    value: "Mozilla"
  });
  Object.defineProperty(window.navigator, 'maxTouchPoints', {
    value: ""
  });
  Object.defineProperty(window.navigator, 'hardwareConcurrency', {
    value: ""
  });
  Object.defineProperty(window.navigator, 'product', {
    value: "Gecko"
  });
  Object.defineProperty(window.navigator, 'productSub', {
    value: "20100101"
  });
  Object.defineProperty(window.navigator, 'oscpu', {
    value: "Linux x86_64"
  });
  Object.defineProperty(window.navigator, 'platform', {
    value: "Linux x86_64"
  });
  Object.defineProperty(window.navigator, 'plugins', {
    value: ""
  });
  Object.defineProperty(window.navigator, 'mimeTypes', {
    value: ""
  });
  Object.defineProperty(window.navigator, 'plugins.length', {
    value: 0
  });
  Object.defineProperty(window.navigator, 'language', {
    value: "en-US"
  });
  Object.defineProperty(window.navigator, 'languages', {
    value: function() {
      return undefined;
    }
  });
};

var defScreen = function() {
  Object.defineProperty(screen, 'availWidth', {
    value: 1000
  });
  Object.defineProperty(screen, 'availHeight', {
    value: 900
  });
  Object.defineProperty(screen, 'width', {
    value: 1000
  });
  Object.defineProperty(screen, 'height', {
    value: 900
  });
  Object.defineProperty(screen, 'innerWidth', {
    value: 800
  });
  Object.defineProperty(screen, 'innerHeight', {
    value: 700
  });
  Object.defineProperty(screen, 'colorDepth', {
    value: 24
  });
  Object.defineProperty(screen, 'pixelDepth', {
    value: 24
  });
};

var defMisc = function() {
  Object.defineProperty(window, "name", {
    value: "",
    writable: true
  });
  Object.defineProperty(HTMLIFrameElement.prototype, "contentWindow", {
    value: undefined
  });
  Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
    value: 0
  });
  Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
    value: 0
  });
  Object.defineProperty(history, "length", {
    value: ""
  });
  Object.defineProperty(window.navigator, 'getBattery', {
    value: undefined
  });
  Object.defineProperty(window.navigator, 'geolocation', {
    value: undefined
  });
  Object.defineProperty(window.navigator, 'permissions', {
    value: undefined
  });
};

defScreen();
defNav();
defMisc();
