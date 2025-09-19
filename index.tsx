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
        const getMermaidThemeVariables = () => {
            const style = getComputedStyle(document.body);
            return {
                'primaryColor': style.getPropertyValue('--mermaid-primary-color').trim(),
                'primaryTextColor': style.getPropertyValue('--mermaid-primary-text-color').trim(),
                'primaryBorderColor': style.getPropertyValue('--mermaid-primary-border-color').trim(),
                'lineColor': style.getPropertyValue('--mermaid-line-color').trim(),
                'secondaryColor': style.getPropertyValue('--mermaid-secondary-color').trim(),
                'tertiaryColor': style.getPropertyValue('--mermaid-tertiary-color').trim(),
            };
        };

        const theme = document.body.dataset.theme;
        window.mermaid.initialize({
            startOnLoad: true,
            theme: theme === 'dark' ? 'dark' : 'default',
            securityLevel: 'loose',
            fontFamily: "'Noto Sans TC', sans-serif",
            themeVariables: getMermaidThemeVariables()
        });
    }
});

export {};