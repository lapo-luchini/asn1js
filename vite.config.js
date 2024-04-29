import fs from 'node:fs';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import pluginDom from 'vite-plugin-dom';
import { DomUtils } from 'htmlparser2';

const preventSVGEmit = () => {
    return {
        generateBundle(opts, bundle) {
            for (const key in bundle)
                if (key.endsWith('.svg'))
                    delete bundle[key];
        },
    };
};

const removeNodes = [ 'theme-select', 'rowExamples' ];

export default defineConfig({
    plugins: [
        pluginDom({
            applyOnMode: true, // all modes
            handler: node => {
                if (removeNodes.includes(node.attribs.id))
                    DomUtils.removeElement(node);
                else if (node.name == 'link' && node.attribs.rel == 'icon') {
                    //node.attribs.href = 'data:image/svg+xml,' + encodeURI(fs.readFileSync('favicon.svg', 'ascii').replace(/^([^<]+|<[^s]|<s[^v]|<sv[^g])+/, '').trim());
                    node.attribs.href = 'data:image/svg+xml;base64,' + btoa(fs.readFileSync('favicon.svg', 'ascii').replace(/^([^<]+|<[^s]|<s[^v]|<sv[^g])+/, '').trim());
                    console.log(node.attribs.href);
                }
            },
        }),
        viteSingleFile(),
    ],
    build: {
        minify: false,
        cssMinify: false,
    },
});
