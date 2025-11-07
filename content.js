// Ask background script if any blocked extension is present
chrome.runtime.sendMessage({ type: "checkBlockedExtensions" }, response => {
  if (response && response.blocked) {
    // Block page with overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = '#a42525e6';
    overlay.style.color = 'white';
    overlay.style.zIndex = 999999;
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.fontSize = '2em';
    overlay.innerText = 'School Extension Detected. Access Blocked.';
    document.body.appendChild(overlay);
  }
});
