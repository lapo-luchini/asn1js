import globals from 'globals';
import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                Uint8Array: 'readonly',
            },
            ecmaVersion: 2015,
        },
        rules: {
            indent: ['error', 4],
            'no-trailing-spaces': ['error'],
            'linebreak-style': ['error', 'unix'],
            'eol-last': ['error', 'always'],
            semi: ['warn', 'always'],
            quotes: [ 'error', 'single', {
                avoidEscape: true,
            }],
            'no-var': ['warn'],
            'comma-dangle': ['error', 'always-multiline'],
            'no-unused-vars': ['error', {
                caughtErrorsIgnorePattern: 'ignore',
            }],
        },
    },
    {
        files: ['defs.js'],
        languageOptions: {
            ecmaVersion: 2020, // by use of optional chaining operator (?.) and null coalesching operator (??)
        },
    },
    {
        files: ['oids.js'],
        rules: {
            indent: 'off',
            quotes: ['warn', 'double'],
        },
    },
    {
        files: ['tags.js', 'rfcdef.js'],
        rules: {
            indent: [
                'error',
                2,
                {
                    ignoredNodes: [
                        "Program > ExpressionStatement > CallExpression > FunctionExpression > BlockStatement > ExpressionStatement[directive='use strict']:first-child",
                    ],
                },
            ],
            'comma-dangle': 'off',
            quotes: ['warn', 'double'],
        },
    },
    {
        files: ['test.js', 'parseRFC.js', 'dumpASN1.js', 'testDefs.js', 'eslint.config.js'],
        languageOptions: {
            ecmaVersion: 'latest',
        },
        rules: {
            strict: ['error', 'global'],
        },
    },
];
