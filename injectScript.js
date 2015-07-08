var ua = '';
var vd = '';
var pf = '';
var pl = '';
var wd = '';
var hg = '';
var cd = '';
var os = '';
var tz = '';
var whitelist = '';
chrome.storage.local.get({
    ua: '',
    vd: '',
    pf: '',
    pl: '',
    wd: '',
    hg: '',
    cd: '',
    os: '',
    tz: '',
    whitelist: ''
}, function (items) {
    if (items.ua != "null") ua = items.ua;
    if (items.vd != "null") vd = items.vd;
    if (items.pf != "null") pf = items.pf;
    if (items.pl != "null") pl = items.pl;
    if (items.wd != "null") wd = items.wd;
    if (items.hg != "null") hg = items.hg;
    if (items.cd != "null") cd = items.cd;
    if (items.os != "null") os = items.os;
    if (items.tz != "null") tz = items.tz;
    if (items.whitelist != "null") whitelist = items.whitelist;
    injectJS();
});

var injectJS = function () {
    var code = '';
    code += 'var USERAGENT="' + ua + '";';
    code += 'var VENDOR="' + vd + '";';
    code += 'var PLATFORM="' + pf + '";';
    code += 'var PLUGINS="' + pl + '";';
    code += 'var WIDTH="' + wd + '";';
    code += 'var HEIGHT="' + hg + '";';
    code += 'var COLORDEPTH="' + cd + '";';
    code += 'var OSCPU="' + os + '";';
    code += "var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];";
    code += "var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];";
    code += "var split = String('" + tz + "').split('_');";
    code += "var padDigits = function (number, digits) {return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;};";
    code += "var d = new Date();";
    code += "d.setUTCHours(+d.getUTCHours()+Number(split[1]));";
    code += "var dayweek = d.getUTCDay();";
    code += "var month = d.getUTCMonth();";
    code += "var daymonth = d.getUTCDate();";
    code += "var year = d.getUTCFullYear();";
    code += "var hours = d.getUTCHours();";
    code += "var minutes = d.getUTCMinutes();";
    code += "var seconds = d.getUTCSeconds();";
    code += "var TIMEZONEOFFSET = (split[1]*(-60));";
    code += "var RETURNTIME = days[dayweek] + ' ' + months[month] + ' ' + padDigits(daymonth, 2) + ' ' + year + ' ' + padDigits(hours,2) + ':' + padDigits(minutes,2) + ':' + padDigits(seconds,2) + ' GMT' + split[1] + '00 (' + split[0] + ')';";
    code += "var amPM = function (hours) {if (hours >= 12) {return 'PM';}else{return 'AM';}};";
    code += "var LOCALEDATESTRING = (+month+1) + '/' + daymonth + '/' + year;";
    code += "var LOCALESTRING = (+month+1) + '/' + daymonth + '/' + year + ', ' + padDigits(hours,2) + ':' + padDigits(minutes,2) + ':' + padDigits(seconds,2) + ' ' + amPM(hours);";
    code += "var TIMESTRING = padDigits(hours,2) + ':' + padDigits(minutes,2) + ':' + padDigits(seconds,2) + ' GMT' + split[1] + '00 (' + split[0] + ')';";
    code += "var LOCALETIMESTRING = padDigits(hours,2) + ':' + padDigits(minutes,2) + ':' + padDigits(seconds,2) + ' ' + amPM(hours);";

    code += '(' + function () {

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
            Object.defineProperty(Date.prototype, 'getTimezoneOffset', {
                value: function () {
                    return TIMEZONEOFFSET;
                }
            });
            Object.defineProperty(Date.prototype, 'toString', {
                value: function () {
                    return RETURNTIME;
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
            Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
                value: 0
            });
            Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
                value: 0
            });
            Object.defineProperty(history, "length", {
                value: ""
            });
        };

        defNav();
        defScreen();
        defTime();
        defCanvas();
        defMisc();

    } + ')();';
    var inWL = false;
    var currentSite = window.location.href;
    for (var i = 0; i < whitelist.length; i++) {
        if (currentSite.includes(whitelist[i]) && whitelist[0] != "") {
            inWL = true;
            break;
        }
    }
    if (inWL == true) {
        return;
    };
    var script = document.createElement('script');
    script.textContent = code;
    script.onload = function () {
        this.parentNode.removeChild(this);
    };
    var parent = document.getElementsByTagName('head')[0] || document.documentElement;
    parent.appendChild(script);
}

//var dummy = document.createElement('script');
//dummy.src = chrome.extension.getURL('function.js');
//var flash = document.getElementsByTagName('embed')[0];
//flash.replaceChild(dummy,flash);