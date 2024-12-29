console.log("JS file loaded!");

document.addEventListener("DOMContentLoaded", () => {
    const savedSitesButton = document.getElementById("savedSites");

    if (savedSitesButton) {
        savedSitesButton.addEventListener("click", () => {
            console.log("Button clicked!");  // Check if button click is being detected
            chrome.tabs.create({ url: chrome.runtime.getURL("savedSites/savedSites.html") });
        });
    } else {
        console.error("Button not found!");
    }
});
