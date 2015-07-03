(function () {
    var USERAGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0';
    var VENDOR = '';
    var PLATFORM = 'Win32';
    var PLUGINS = '';
    var WIDTH = '1920';
    var HEIGHT = '1080';
    var COLORDEPTH = '24';
    var TIMEZONEOFFSET = '0';

    var defNav = function () {
        Object.defineProperty(window.navigator, 'userAgent', {value: USERAGENT});
        Object.defineProperty(window.navigator, 'vendor', {value: VENDOR});
        Object.defineProperty(window.navigator, 'appVersion', {value: USERAGENT});
        Object.defineProperty(window.navigator, 'platform', {value: PLATFORM});
        Object.defineProperty(window.navigator, 'plugins', {value: PLUGINS});
    };

    var defScreen = function () {
        Object.defineProperty(screen, 'width', {value: WIDTH});
        Object.defineProperty(screen, 'height', {value: HEIGHT});
        Object.defineProperty(screen, 'colorDepth', {value: COLORDEPTH});
    };

    var defTime = function () {
        Object.defineProperty(Date.prototype, 'getTimezoneOffset', {
            value: function () {
                return TIMEZONEOFFSET;
            }
        });
    };

    var defCanvas = function () {
	Object.defineProperty(CanvasRenderingContext2D.prototype, 'fillRect', {value: function() {return undefined;}});
	Object.defineProperty(CanvasRenderingContext2D.prototype, 'textBassline', {value: undefined});
	Object.defineProperty(CanvasRenderingContext2D.prototype, 'font', {value: undefined});
	Object.defineProperty(CanvasRenderingContext2D.prototype, 'fillStyle', {value: undefined});
	Object.defineProperty(CanvasRenderingContext2D.prototype, 'strokeStyle', {value: undefined});
	Object.defineProperty(CanvasRenderingContext2D.prototype, 'fillText', {value: undefined});
	Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {value: function() {return undefined;}});
    };
    defNav();
    defScreen();
    defTime();
    defCanvas();

}());
