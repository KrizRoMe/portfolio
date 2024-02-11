import { useEffect, useState } from "preact/hooks"

function BtnTheme() {
  const _VL_LIGHT_THEME= "light"
  const _VL_DARK_THEME = "dark"
  const _VL_PREFER_DARK_SCHEME= window.matchMedia("(prefers-color-scheme: dark)").matches
  ? _VL_DARK_THEME : _VL_LIGHT_THEME

  const [theme, setTheme] = useState(_VL_PREFER_DARK_SCHEME)

  const _handleChangeTheme = () : void => {
    setTheme(theme === _VL_LIGHT_THEME ? _VL_DARK_THEME :_VL_LIGHT_THEME)
  }

  useEffect(() =>{
    const html_element = document.querySelector("html")

    if(theme === _VL_LIGHT_THEME){
      html_element?.classList.remove(_VL_DARK_THEME)
    }
    else{
      html_element?.classList.add(_VL_DARK_THEME)
    }
  }, [theme])

  return (
    <button className="bg-slate-500 px-4 py-2 rounded text-white"
    onClick={_handleChangeTheme}>Change Theme</button>
  )
}

export default BtnTheme