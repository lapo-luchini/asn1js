// set dark theme depending on OS settings
function setTheme(theme) {
    if (theme == 'os') {
        let prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDarkScheme.matches) {
            theme = 'dark';
        } else {
            theme = 'light';
        }
    }
    document.documentElement.style['color-scheme'] = theme;
    document.querySelector('html').setAttribute('data-theme', theme);
    // set the theme-color for iOS devices
    let bgColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color');
    let metaThemeColor = document.querySelector('meta[name=theme-color]');
    metaThemeColor.setAttribute('content', bgColor);
}
// activate selected theme
let theme = 'os';
const localStorageTheme = localStorage.getItem('theme');
if (localStorageTheme) {
    theme = localStorageTheme;
}
setTheme(theme);
// add handler to theme selection element
const selectTheme = document.getElementById('theme-select');
if (selectTheme) {
    selectTheme.addEventListener ('change', function () {
        localStorage.setItem('theme', selectTheme.value);
        setTheme(selectTheme.value);
    });
    if (theme == 'light') {
        selectTheme.selectedIndex = 2;
    } else if (theme == 'dark') {
        selectTheme.selectedIndex = 1;
    }
}
