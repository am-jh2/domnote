
const selection = window.getSelection();
const selectionString = selection.toString();
let container;

if (selectionString) {
    container = selection.getRangeAt(0).commonAncestorContainer;

    while (!container.innerHTML) {
        container = container.parentNode;
    }
}

console.log('selectionText', selection, selectionString, container);
if (selection && selection.type === 'Range') {
    let selectedText = selection.focusNode.nodeValue.substring(selection.baseOffset, selection.focusOffset);
    console.log('selected text is: ', selectedText);
    let data = {};
    // let location = window.location.host + window.location.pathname
    // let location = window.location.href;
    let location = window.location.host;
    let page = window.location.pathname;

    chrome.storage.sync.get([location], (result) => {
        console.log('Data currently is ', result);
        if (result && result[location]) {
            console.log('We had result');
            data = result;
        } else {
            console.log('start init data');
            data[location] = {};
            data[location].pages = {};
            data[location].pages[page] = {
                last_access_at: Date.now(),
                data: []
            };
            console.log('init data', data);
        }
        console.log('Ready data ', data);
    
        let selectionData = {
            selectedText: selectedText,
            textContent: selection.baseNode.textContent,
            container: container,
            offset: selection.baseOffset,
            timestamp: Date.now()
        };
    
        console.log('selection data', selectionData);
        
        let exists = data[location].pages[page].data.findIndex(item => {
            return item.selectedText == selectionData.selectedText && item.textContent == selectionData.textContent
        });
    
        if (exists >= 0) {
            console.log('Data already exists');
        } else {
            data[location].pages[page].data.push(selectionData);
            console.log('New data: ', { [location]: data[location] });
    
            chrome.storage.sync.set({ [location]: data[location] }, function() {
                console.log('Value is set');
            });
        }
    });
}
