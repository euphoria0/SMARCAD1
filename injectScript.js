var script = document.createElement('script');
script.src = chrome.extension.getURL('function.js');
script.onload = function () {
    this.parentNode.removeChild(this);
};
var parent = document.getElementsByTagName('head')[0] || document.documentElement;
parent.appendChild(script);