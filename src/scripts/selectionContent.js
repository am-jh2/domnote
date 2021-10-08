
const selection = window.getSelection();
const selectionString = selection.toString();

if (selectionString) {
    let container = selection.getRangeAt(0).commonAncestorContainer;

    while (!container.innerHTML) {
        container = container.parentNode;
    }
}

console.log('selectionText', selection, selectionString);
if (selection && selection.type === 'Range') {
    let selectedText = selection.focusNode.nodeValue.substring(selection.baseOffset, selection.focusOffset);
    console.log('selected text is: ', selectedText);
    let data = null;
    // let location = window.location.host + window.location.pathname
    let location = window.location.href;

    chrome.storage.sync.get(location, (result) => {
        console.log('Data currently is ', result);
        if (result) {
            data = result;
        }
    });

    if (!data) {
        data = {};
        data[location] = {
            highlights: []
        };
    }

    console.log('location data', data[location]);
    if (!data[location].highlights.includes(selectedText)) {
        data[location].highlights.push(selectedText);
        console.log('New data: ', data);

        chrome.storage.sync.set(data, function() {
            console.log('Value is set');
        });
    } else {
        console.log('Data already exists');
    }
}
