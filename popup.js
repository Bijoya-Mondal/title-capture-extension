document.addEventListener('DOMContentLoaded', function() {
    var getTabTitleButton = document.getElementById('getTabTitle');
    var tabTitleDisplay = document.getElementById('tabTitle');

   
    getTabTitleButton.addEventListener('click', function() {
      
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
       
            var tab = tabs[0];
            var tabTitle = tab.title;
            tabTitleDisplay.textContent = tabTitle;
        });
    });
});
