chrome.tabs.onUpdate.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url){
        chrome.storage.local.get(['blockedSites'], (result) => {
            const blockedSites = result.blockedSites || [];

            for (const site of blockedSites){
                if(tab.url.includes(site)){
                    const blockedPageUrl = chrome.runtime.getURL('pages/blocked.html');
                    chrome.tabs.update(tabId, {url: blockedPageUrl});
                    break;
                }
            }
        })
    }
})