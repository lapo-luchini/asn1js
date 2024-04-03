const
    id = (elem) => document.getElementById(elem),
    contextMenu = id('contextmenu'),
    btnHideTree = id('btnHideTree'),
    btnCopyHex = id('btnCopyHex'),
    btnCopyB64 = id('btnCopyB64'),
    btnCopyTree = id('btnCopyTree'),
    btnCopyValue = id('btnCopyValue');

export function bindContextMenu(node) {
    const type = node.asn1.typeName();
    const valueEnabled = type != 'SET' && type != 'SEQUENCE';
    node.onclick = function (event) {
        contextMenu.style.left = event.pageX + 'px';
        contextMenu.style.top = event.pageY + 'px';
        contextMenu.style.visibility = 'visible';
        contextMenu.node = this;
        btnHideTree.innerText = (node.className == 'node') ? 'Hide subtree' : 'Show subtree';
        btnHideTree.style.display = node.className.startsWith('node') ? 'block' : 'none';
        btnCopyValue.style.display = valueEnabled ? 'block' : 'none';
        event.stopPropagation();
    };
}

function close() {
    contextMenu.style.visibility = 'hidden';
}

contextMenu.onmouseleave = close;

btnHideTree.onclick = function (event) {
    event.stopPropagation();
    const node = contextMenu.node;
    node.className = (node.className == 'node collapsed') ? 'node' : 'node collapsed';
    close();
};

btnCopyHex.onclick = function (event) {
    event.stopPropagation();
    navigator.clipboard.writeText(contextMenu.node.asn1.toHexString('byte'));
    close();
};

btnCopyB64.onclick = function (event) {
    event.stopPropagation();
    navigator.clipboard.writeText(contextMenu.node.asn1.toB64String());
    close();
};

btnCopyTree.onclick = function (event) {
    event.stopPropagation();
    navigator.clipboard.writeText(contextMenu.node.asn1.toPrettyString());
    close();
};

btnCopyValue.onclick = function (event) {
    event.stopPropagation();
    navigator.clipboard.writeText(contextMenu.node.asn1.content());
    close();
};
