document.addEventListener('DOMContentLoaded', function() {
    var inviteButton = document.getElementById('fbInviteBtn');

    inviteButton.addEventListener('click', function() {
        chrome.tabs.executeScript(null,{code : "var invitedCount=0;var information=document.createElement('div');var sp2=document.querySelector('ul[id^=\"reaction_profile_browser\"]');var parentDiv=document.querySelector('ul[id^=\"reaction_profile_browser\"]').parentNode;information.style.background='#e2db1a';information.style.padding='5px 10px';information.style.margin='5px 0';information.style.color='#000';information.style.borderRadius='3px';information.innerHTML='Inviting users ...';parentDiv.insertBefore(information,sp2);var invite=function(){var inviteButtons=document.querySelector('ul[id^=\"reaction_profile_browser\"]').querySelectorAll('a[role=button][ajaxify]');var loadButton;var end=false;if(document.getElementById('reaction_profile_pager')){loadButton=document.getElementById('reaction_profile_pager').getElementsByTagName('a');if(loadButton.length){loadButton[0].click();setTimeout(function(){invite()},2000)}else{end=true}}else{end=true}for(var i=0;i<inviteButtons.length;i++){inviteButtons[i].click();invitedCount++}if(end){information.style.background='#2f9207';information.style.color='#fff';information.innerHTML=invitedCount+' users successfully invited :)'}};invite();"});
        window.close();
    }, false);
}, false);


