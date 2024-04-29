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
        preventSVGEmit(),
        pluginDom({
            applyOnMode: true, // all modes
            handler: node => {
                if (removeNodes.includes(node.attribs.id))
                    DomUtils.removeElement(node);
            },
        }),
        viteSingleFile(),
    ],
    build: {
        minify: false,
        cssMinify: false,
        rollupOptions: {
            output: {
                assetFileNames: function (file) {
                    return file.name == 'favicon.svg'
                        ? file.name
                        : 'assets/[name]-[hash].[ext]';
                },
            },
        },
        assetsInlineLimit: 1000000,
    //assetsInlineLimit: path => { throw new Error('XXX'); console.log(path); return true; },
    },
});
