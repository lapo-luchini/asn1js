// register context menu function
document.getElementById('btnCopyHex').onclick = function (event) {
    let contextMenu = document.getElementById('contextmenu');
    let node = contextMenu.node;
    const pos = parseInt(node.getAttribute('pos'));
    const end = parseInt(node.getAttribute('end'));
    const hex = node.asn1.buf2hex(window.derBuffer.subarray(pos, end));
    navigator.clipboard.writeText(hex);
    contextMenu.style.visibility = 'hidden';
    event.stopPropagation();
};

document.getElementById('btnCopyString').onclick = function (event) {
    let contextMenu = document.getElementById('contextmenu');
    let node = contextMenu.node;
    const pos = parseInt(node.getAttribute('pos'));
    const end = parseInt(node.getAttribute('end'));
    let result = ASN1.decode(window.derBuffer.subarray(pos, end));
    let type = result.typeName();
    switch (type) {
    case 'SET':
    case 'SEQUENCE':
        alert('Selected value is not a String!');
        break;
    default: 
        navigator.clipboard.writeText(result.content());
    }
    contextMenu.style.visibility = 'hidden';
    event.stopPropagation();
};

document.getElementById('btnCopyPretty').onclick = function (event) {
    let contextMenu = document.getElementById('contextmenu');
    let node = contextMenu.node;
    const pos = parseInt(node.getAttribute('pos'));
    const end = parseInt(node.getAttribute('end'));
    let result = ASN1.decode(window.derBuffer.subarray(pos, end));
    navigator.clipboard.writeText(result.toPrettyString());
    contextMenu.style.visibility = 'hidden';
    event.stopPropagation();
};
