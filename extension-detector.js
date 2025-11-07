// This script will check for the presence of certain common browser extensions.
// Note: This is advisory. Some extensions are undetectable.

function detectExtensions() {
    let detected = false;
    // Example: Detect Grammarly (injects window.grammarly)
    if (window.grammarly === true || !!window.grammarly) detected = true;

    // Example: Detect Adblockers (block certain ad elements)
    let ad = document.createElement('div');
    ad.className = 'adsbox';
    ad.style.height = '10px';
    document.body.appendChild(ad);
    if (ad.offsetHeight === 0) detected = true;
    document.body.removeChild(ad);

    // Example: Detect Tampermonkey (looks for TM specific variables)
    if (window.Tampermonkey) detected = true;

    // Example: Detect other known extension variables — add more rules as needed
    // ...

    return detected;
}

window.onload = function () {
    if (detectExtensions()) {
        document.getElementById('block-message').style.display = 'block';
        // Optionally: disable site functionality, redirect, etc.
        // document.body.innerHTML = ''; // to block further site use
    }
};
