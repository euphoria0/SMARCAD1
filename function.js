(function () {
    var USERAGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.124 Safari/537.36';
    var VENDOR = '';
    var PLATFORM = 'Win64';
    var PLUGINS = '';
    var WIDTH = 1920;
    var HEIGHT = 1080;
    var OSCPU = 'Windows NT 6.1';
    var COLORDEPTH = 24;
    var TIMEZONEOFFSET = -180;
    var oldTime = new Date();
    var newTime = new Date(Number(oldTime) + 3600000);
    var LOCALESTRING = newTime.toLocaleString();
    var LOCALEDATESTRING = newTime.toLocaleDateString();
    var TIMESTRING = newTime.toTimeString();
    var LOCALETIMESTRING = newTime.toLocaleTimeString();
    var TIME = String(newTime);
    
    var defNav = function () {
        Object.defineProperty(window.navigator, 'userAgent', {
            value: USERAGENT
        });
        Object.defineProperty(window.navigator, 'vendor', {
            value: VENDOR
        });
        Object.defineProperty(window.navigator, 'appVersion', {
            value: USERAGENT
        });
        Object.defineProperty(window.navigator, 'oscpu', {
            value: OSCPU
        });
        Object.defineProperty(window.navigator, 'platform', {
            value: PLATFORM
        });
        Object.defineProperty(window.navigator, 'plugins', {
            value: PLUGINS
        });
        Object.defineProperty(window.navigator, 'mimeTypes', {
            value: PLUGINS
        });
        Object.defineProperty(window.navigator, 'plugins.length', {
            value: 0
        });
        Object.defineProperty(window.navigator, 'languages', {
            value: "en-US,en"
        });
    };

    var defScreen = function () {
        Object.defineProperty(screen, 'width', {
            value: WIDTH
        });
        Object.defineProperty(screen, 'height', {
            value: HEIGHT
        });
        Object.defineProperty(screen, 'colorDepth', {
            value: COLORDEPTH
        });
    };

    var defTime = function () {
        Object.defineProperty(Date.prototype, 'toString', {
            value: function () {
                return TIME;
            }
        });
        Object.defineProperty(Date.prototype, "toLocaleString", {
            value: function () {
                return LOCALESTRING;
            }
        });
        Object.defineProperty(Date.prototype, "toLocaleDateString", {
            value: function () {
                return LOCALEDATESTRING;
            }
        });
        Object.defineProperty(Date.prototype, "toTimeString", {
            value: function () {
                return TIMESTRING;
            }
        });
        Object.defineProperty(Date.prototype, "toLocaleTimeString", {
            value: function () {
                return LOCALETIMESTRING;
            }
        });
        Object.defineProperty(Date.prototype, 'getTimezoneOffset', {
            value: function () {
                return TIMEZONEOFFSET;
            }
        });
    };

    var defCanvas = function () {
        Object.defineProperty(CanvasRenderingContext2D.prototype, 'fillRect', {
            value: function () {
                return undefined;
            }
        });
        Object.defineProperty(CanvasRenderingContext2D.prototype, 'textBassline', {
            value: undefined
        });
        Object.defineProperty(CanvasRenderingContext2D.prototype, 'font', {
            value: undefined
        });
        Object.defineProperty(CanvasRenderingContext2D.prototype, 'fillStyle', {
            value: undefined
        });
        Object.defineProperty(CanvasRenderingContext2D.prototype, 'strokeStyle', {
            value: undefined
        });
        Object.defineProperty(CanvasRenderingContext2D.prototype, 'fillText', {
            value: undefined
        });
        //Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {value: function() {return this;}});
    };
    
    var defMisc = function () {
        Object.defineProperty(window, "name", {
            value: "",
            writable: true
        });
        Object.defineProperty(HTMLSpanElement.prototype, "offsetHeight", {
            value: 0
        });
        Object.defineProperty(HTMLSpanElement.prototype, "offsetWidth", {
            value: 0
        });
        Object.defineProperty(history, "length", {
            value: ""
        });};

    defNav();
    defScreen();
    defTime();
    defCanvas();
    defMisc();

}());