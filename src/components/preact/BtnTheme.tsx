import { useEffect, useState } from "preact/hooks"
import { VL_DARK_THEME, VL_LIGHT_THEME } from "../../constants/main"
import { get_current_theme } from "../../utils/main"

function BtnTheme() {
  const current_theme = get_current_theme()
  const [theme, setTheme] = useState(current_theme)

  const _handleChangeTheme = () : void => {
    const themeSelected = theme === VL_LIGHT_THEME ? VL_DARK_THEME : VL_LIGHT_THEME
    setTheme(themeSelected)
    localStorage.setItem("theme", themeSelected)
  }

  useEffect(() =>{
    const html_element = document.querySelector("html")
    if(theme === VL_LIGHT_THEME) return html_element?.classList.remove(VL_DARK_THEME)
    html_element?.classList.add(VL_DARK_THEME)
  }, [theme])

  return (
    <button
    aria-label="Button Change theme"
    id="btn-theme"
    onClick={_handleChangeTheme}
    className={`pt-1 px-2 rounded-md bg-slate-100 dark:bg-[#151515]
      ${theme === VL_LIGHT_THEME ? 'text-[#151515]' : 'text-white'}
      transition-colors duration-300`}
  >
    <span className="relative inline-block w-8 h-4 bg-white rounded-full shadow-md">
      <span
        className={`absolute inset-y-0 left-0 w-4 h-4 bg-white dark:bg-[#151515] rounded-full shadow-md
          ${theme === VL_LIGHT_THEME ? 'transform translate-x-0' : 'transform translate-x-4'}
          transition-transform duration-300`}
      />
    </span>
  </button>
  )
}

export default BtnTheme