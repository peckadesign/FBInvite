document.addEventListener('DOMContentLoaded', function() {
    var inviteButton = document.getElementById('fbInviteBtn');
    inviteButton.addEventListener('click', function() {

        chrome.tabs.executeScript(null,{code:"var allElements = document.getElementsByTagName('a');for (var i = 0; i < allElements.length; i++) {var attr = allElements[i].getAttribute('ajaxify');if (attr && attr.startsWith('/pages/post_like_invite/send/?')) {allElements[i].click();}}"});
        window.close();

    }, false);
}, false);


