// Saves options to chrome.storage
function save_options() {
    chrome.storage.local.set({
        ua: document.getElementById('ua').value,
        ah: document.getElementById('ah').value,
        al: document.getElementById('al').value,
        ae: document.getElementById('ae').value,
        vd: document.getElementById('vd').value,
        pf: document.getElementById('pf').value,
        pl: document.getElementById('pl').value,
        wd: document.getElementById('wd').value,
        hg: document.getElementById('hg').value,
        cd: document.getElementById('cd').value,
        os: document.getElementById('os').value,
        tz: document.getElementById("tz").options[document.getElementById("tz").selectedIndex].value
    }, function () {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
};

function restore_options() {
    e = document.getElementById("tz");
    chrome.storage.local.get({
        ua: '',
        ah: '',
        al: '',
        ae: '',
        vd: '',
        pf: '',
        pl: '',
        wd: '',
        hg: '',
        cd: '',
        os: '',
        tz: ''
    }, function (items) {
        document.getElementById('ua').value = items.ua;
        document.getElementById('ah').value = items.ah;
        document.getElementById('al').value = items.al;
        document.getElementById('ae').value = items.ae;
        document.getElementById('vd').value = items.vd;
        document.getElementById('pf').value = items.pf;
        document.getElementById('pl').value = items.pl;
        document.getElementById('wd').value = items.wd;
        document.getElementById('hg').value = items.hg;
        document.getElementById('cd').value = items.cd;
        document.getElementById('os').value = items.os;
        document.getElementById("tz").selectedIndex = items.tz;
    })

}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);