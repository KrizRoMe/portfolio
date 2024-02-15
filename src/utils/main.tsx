import { VL_DARK_THEME, VL_ES_LANGUAGE, VL_LIGHT_THEME } from "../constants/main"

export const get_current_theme = () : string => {
    const localStorageTheme = localStorage.getItem("theme")
    const userMediaTheme = window.matchMedia("(prefers-color-scheme: dark)")

    if (localStorageTheme) return localStorageTheme
    if (userMediaTheme.matches) return VL_DARK_THEME

    return VL_LIGHT_THEME
}

export const get_current_language = () : string => {
    const localStorageLanguage = localStorage.getItem("language")
    if (localStorageLanguage) return localStorageLanguage
    return VL_ES_LANGUAGE
}