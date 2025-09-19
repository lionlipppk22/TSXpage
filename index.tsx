/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

declare global {
    interface Window {
        mermaid: any;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.mermaid) {
        const theme = document.body.dataset.theme;

        const lightThemeVars = {
            'primaryColor': '#f8f9fa',
            'primaryTextColor': '#212529',
            'primaryBorderColor': '#007bff',
            'lineColor': '#495057',
            'secondaryColor': '#ffffff',
            'tertiaryColor': '#f8f9fa'
        };

        const darkThemeVars = {
            'primaryColor': '#112240',
            'primaryTextColor': '#e6f1ff',
            'primaryBorderColor': '#64ffda',
            'lineColor': '#a8b2d1',
            'secondaryColor': '#0a192f',
            'tertiaryColor': '#112240'
        };

        window.mermaid.initialize({
            startOnLoad: true,
            theme: theme === 'dark' ? 'dark' : 'default',
            securityLevel: 'loose',
            fontFamily: "'Noto Sans TC', sans-serif",
            themeVariables: theme === 'dark' ? darkThemeVars : lightThemeVars
        });
    }
});

export {};