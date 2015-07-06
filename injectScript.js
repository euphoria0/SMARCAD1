var script = document.createElement('script');
script.src = chrome.extension.getURL('function.js');
script.onload = function () {
    this.parentNode.removeChild(this);
};
var parent = document.getElementsByTagName('head')[0] || document.documentElement;
parent.appendChild(script);

//var dummy = document.createElement('script');
//dummy.src = chrome.extension.getURL('function.js');
//var flash = document.getElementsByTagName('embed')[0];
//flash.replaceChild(dummy,flash);