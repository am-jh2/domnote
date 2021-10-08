
const selection = window.getSelection();
const selectionString = selection.toString();

if (selectionString) {
    let container = selection.getRangeAt(0).commonAncestorContainer;

    while (!container.innerHTML) {
        container = container.parentNode;
    }
}

console.log('selectionText', selection, selectionString);
