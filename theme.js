const selectTheme = document.getElementById('theme-select')
// set dark theme depending on OS settings
function setTheme(theme) {
if (!selectTheme) {
    console.log('Themes are currently not working with single file version.');
    return;
}
if (theme == 'os') {
    let prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
        theme = 'dark';
    } else {
        theme = 'light';
    }
}
document.documentElement.style['color-scheme'] = theme
document.querySelector('html').setAttribute('data-theme', theme)
}
// activate selected theme
let theme = 'os';
const localStorageTheme = localStorage.getItem('theme');
if (localStorageTheme) {
theme = localStorageTheme;
}
if (theme == 'light') {
selectTheme.selectedIndex = 2;
} else if (theme == 'dark') {
selectTheme.selectedIndex = 1;
}
setTheme(theme);
// add handler to theme selction element
if (selectTheme) {
selectTheme.addEventListener ('change', function () {
    localStorage.setItem('theme', selectTheme.value);
    setTheme(selectTheme.value);
});
}