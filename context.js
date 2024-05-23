const
    id = (elem) => document.getElementById(elem),
    contextMenu = id('contextmenu'),
    btnCopyHex = id('btnCopyHex'),
    btnCopyB64 = id('btnCopyB64'),
    btnCopyTree = id('btnCopyTree'),
    btnCopyValue = id('btnCopyValue');

export function bindContextMenu(node) {
    const type = node.asn1.typeName();
    const valueEnabled = type != 'SET' && type != 'SEQUENCE';
    node.onclick = function (event) {
        // do not show the menu in case of clicking the icon
        if (event.srcElement.nodeName != 'SPAN') return;
        contextMenu.style.left = event.pageX + 'px';
        contextMenu.style.top = event.pageY + 'px';
        contextMenu.style.visibility = 'visible';
        contextMenu.node = this;
        btnCopyValue.style.display = valueEnabled ? 'block' : 'none';
        event.preventDefault();
        event.stopPropagation();
    };
}

function close(event) {
    contextMenu.style.visibility = 'hidden';
    event.stopPropagation();
}

contextMenu.onmouseleave = close;

btnCopyHex.onclick = function (event) {
    navigator.clipboard.writeText(contextMenu.node.asn1.toHexString('byte'));
    close(event);
};

btnCopyB64.onclick = function (event) {
    event.stopPropagation();
    navigator.clipboard.writeText(contextMenu.node.asn1.toB64String());
    close(event);
};

btnCopyTree.onclick = function (event) {
    event.stopPropagation();
    navigator.clipboard.writeText(contextMenu.node.asn1.toPrettyString());
    close(event);
};

btnCopyValue.onclick = function (event) {
    event.stopPropagation();
    navigator.clipboard.writeText(contextMenu.node.asn1.content());
    close(event);
};
