import { Tabs } from 'webextension-polyfill'
import browser from 'webextension-polyfill'
import { onMessage, sendMessage } from 'webext-bridge'

browser.runtime.onInstalled.addListener((): void => {
    // eslint-disable-next-line no-console
    console.log('Extension installed');

    // Create context menu item for copying the selected text
    browser.contextMenus.create({
        id: 'make-note',
        title: 'Make note',
        contexts: ['selection'],
    });
})

let previousTabId = 0

// communication example: send previous tab title from background page
// see shim.d.ts for type declaration
browser.tabs.onActivated.addListener(async ({ tabId }) => {
    if (!previousTabId) {
        previousTabId = tabId
        return
    }

    let tab: Tabs.Tab

    try {
        tab = await browser.tabs.get(previousTabId)
        previousTabId = tabId
    }
    catch {
        return
    }

    // eslint-disable-next-line no-console
    console.log('previous tab', tab)
    sendMessage('tab-prev', { title: tab.title }, { context: 'content-script', tabId })
})

onMessage('get-current-tab', async () => {
    try {
        const tab = await browser.tabs.get(previousTabId)
        return {
            title: tab?.title,
        }
    }
    catch {
        return {
            title: undefined,
        }
    }
})

// Handle context menu item click
browser.contextMenus.onClicked.addListener(async (data, tab) => {
    console.log('ContextMenus onClicked 2', data, tab);
    if (data.menuItemId === "make-note" && tab?.id && tab.id > 0) {
        // console.log('make-note', data.selectionText);
        // browser.tabs.sendMessage(tab.id, { action: "make-note" });
        // sendMessage("make-note", { ...data }, { context: 'content-script', tabId: tab.id });
        // sendMessage("make-note", { test: 'Test message' }, { context: 'content-script', tabId: tab.id });
        const res = await sendMessage("make-note", { test: 'Test message' }, { context: 'content-script', tabId: tab.id });
        console.log('res', res);
    }
});