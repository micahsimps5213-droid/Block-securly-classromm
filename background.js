// List of forbidden extension IDs to detect and block
const BLOCKED_IDS = ["hkobaiihndnbfhbkmjjfbdimfbdcppdh"];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "checkBlockedExtensions") {
    chrome.management.getAll(extensions => {
      const isBlocked = extensions.some(ext => 
        BLOCKED_IDS.includes(ext.id) && ext.enabled
      );
      sendResponse({ blocked: isBlocked });
    });
    return true; // Needed for async response
  }
});
