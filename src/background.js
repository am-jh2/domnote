// browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     console.log('Hello from the background');
// });

browser.contextMenus.create({ id: "make-note", title: "Highlight", contexts: ["selection"] });

browser.contextMenus.onClicked.addListener((text, tab)=> {
    if (text.menuItemId == "make-note") {
        console.log("item " + text.menuItemId + " was clicked");
        console.log("info: " + JSON.stringify(text));
        console.log("tab: " + JSON.stringify(tab));

        getSelectionContent();
        // browser.tabs.executeScript(null, {
        //     file: '/js/selectionContent.js'
        // });
    }
});

function getSelectionContent() {
    console.log('perkele');
    browser.tabs.executeScript({ file: '/js/selectionContent.js' });
}
