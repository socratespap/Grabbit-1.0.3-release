//open options page on extension install
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        // Open options page on first install
        chrome.runtime.openOptionsPage();
    }
});
// create windows
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    //create windows
    if (request.action === 'openLinks') {
        // Create new window with first URL
        chrome.windows.create({
            url: request.urls[0],
            focused: true,            
        }, (newWindow) => {
            // Create tabs for remaining URLs in the new window
            request.urls.slice(1).forEach((url,index) => {
                setTimeout(function(){
                    chrome.tabs.create({
                        windowId: newWindow.id,
                        url: url,
                        active: false
                    });
                },index * request.openDelay * 1000);
            });
        });
    }
    //create tabs
    if (request.action === 'createTab') {
        // Get the index of the current tab
        const currentIndex = sender.tab.index;
        // Create a new tab with the specified URL
        chrome.tabs.create({
            url: request.url,
            // Set the new tab's index to be right after the current tab
            index: currentIndex + 1,
            // Don't make the new tab active
            active: false
        });
    }
});
