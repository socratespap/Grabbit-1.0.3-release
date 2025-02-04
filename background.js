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
            request.urls.slice(1).forEach(url => {
                chrome.tabs.create({
                    windowId: newWindow.id,
                    url: url,
                    active: false
                });
            });
        });
    }
    //create tabs
    if (request.action === 'createTab') {
        chrome.tabs.create({
            url: request.url,
            active: false
        });
    }
});
