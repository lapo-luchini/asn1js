const
    id = (elem) => document.getElementById(elem),
    contextMenu = id('contextmenu'),
    btnCopyHex = id('btnCopyHex'),
    btnCopyString = id('btnCopyString'),
    btnCopyPretty = id('btnCopyPretty');

export function bindContextMenu(node) {
    const type = node.asn1.typeName();
    const stringEnabled = type != 'SET' && type != 'SEQUENCE';
    node.onclick = function (event) {
        contextMenu.style.left = event.pageX + 'px';
        contextMenu.style.top = event.pageY + 'px';
        contextMenu.style.visibility = 'visible';
        contextMenu.node = this;
        btnCopyString.style.display = stringEnabled ? 'block' : 'none';
        event.stopPropagation();
    };
};

function close() {
    contextMenu.style.visibility = 'hidden';
}

contextMenu.onmouseleave = close;

btnCopyHex.onclick = function (event) {
    event.stopPropagation();
    const node = contextMenu.node;
    const hex = node.asn1.toHexString('byte');
    navigator.clipboard.writeText(hex);
    close();
};

btnCopyString.onclick = function (event) {
    event.stopPropagation();
    navigator.clipboard.writeText(contextMenu.node.asn1.content());
    close();
};

btnCopyPretty.onclick = function (event) {
    event.stopPropagation();
    navigator.clipboard.writeText(contextMenu.node.asn1.toPrettyString());
    close();
};
