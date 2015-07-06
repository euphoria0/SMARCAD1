// Saves options to chrome.storage
function save_options() {
    localStorage['ua'] = document.getElementById('ua').value;
    localStorage['ah'] = document.getElementById('ah').value;
    localStorage['al'] = document.getElementById('al').value;
    localStorage['ae'] = document.getElementById('ae').value;
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    /* chrome.storage.local.set({
         ua: document.getElementById('ua').value,
         ah: document.getElementById('ah').value,
         al: document.getElementById('al').value,
         ae: document.getElementById('ae').value
     }, function () {
         var status = document.getElementById('status');
         status.textContent = 'Options saved.';
         setTimeout(function () {
             status.textContent = '';
         }, 750);
     });*/
};

function restore_options() {
    document.getElementById('ua').value = localStorage['ua'];
    document.getElementById('ah').value = localStorage['ah'];
    document.getElementById('al').value = localStorage['al'];
    document.getElementById('ae').value = localStorage['ae'];
    /*chrome.storage.local.get({
        ua: '',
        ah: '',
        al: '',
        ae: ''
    }, function (items) {
        document.getElementById('ua').value = items.ua;
        document.getElementById('ah').value = items.ah;
        document.getElementById('al').value = items.al;
        document.getElementById('ae').value = items.ae;
    });*/

}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);