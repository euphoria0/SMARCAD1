var s = document.createElement('script');
s.src = chrome.extension.getURL('xagent.js');
s.onload = function () {
    this.parentNode.removeChild(this);
};
document.head.appendChild(s);