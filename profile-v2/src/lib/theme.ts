/**
 * Theme (light/dark) is stored in localStorage so pages stay statically rendered.
 * - No saved choice: follow the OS `prefers-color-scheme`
 * - Applied as `data-theme` on <html>, which `theme.css` and the `dark:` variant read
 */
export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'

const DARK_QUERY = '(prefers-color-scheme: dark)'

export function getSavedTheme(): Theme | null {
  try {
    const theme = localStorage.getItem(THEME_STORAGE_KEY)
    return theme === 'light' || theme === 'dark' ? theme : null
  } catch {
    return null
  }
}

export function getPreferredTheme(): Theme {
  return getSavedTheme() ?? (matchMedia(DARK_QUERY).matches ? 'dark' : 'light')
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.style.colorScheme = theme
}

export function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {}
  applyTheme(theme)
}

/**
 * Runs in <head> before first paint, so there is no flash of the wrong theme.
 * Same logic as getPreferredTheme/applyTheme, written as plain ES5 for inlining.
 */
export const themeInitScript = `(function(){
var k=${JSON.stringify(THEME_STORAGE_KEY)},m=matchMedia(${JSON.stringify(DARK_QUERY)}),d=document.documentElement;
function saved(){try{var t=localStorage.getItem(k);return t==="light"||t==="dark"?t:null}catch(e){return null}}
function apply(t){d.setAttribute("data-theme",t);d.style.colorScheme=t}
apply(saved()||(m.matches?"dark":"light"));
m.addEventListener("change",function(e){if(!saved())apply(e.matches?"dark":"light")});
})()`
