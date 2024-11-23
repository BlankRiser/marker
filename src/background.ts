
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'saveText') {
        console.log('saveText', message);   
        return true; // Keep the message channel open for sendResponse
    }
});
