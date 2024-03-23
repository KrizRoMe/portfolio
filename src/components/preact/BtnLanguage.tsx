import { useState } from "preact/hooks"
import { VL_EN_LANGUAGE, VL_ES_LANGUAGE } from "../../constants/main"
import { get_current_language } from "../../utils/main"

function BtnLanguage() {
  const current_language = get_current_language()
  const _handleChangeLanguage = (language: string) : void => {
    localStorage.setItem("language", language)
  }

  return (
    <div
        class='flex space-x-1 rtl:space-x-reverse'>
        <a
            onClick={() => _handleChangeLanguage(VL_ES_LANGUAGE)}
            href="/"
            class={`inline-flex cursor-pointer items-center justify-center rounded-md py-1 px-3 text-sm font-medium
              border-2 border-slate-100 text-gray-900 dark:text-white hover:text-black hover:bg-slate-100 dark:hover:text-black
              ${current_language === VL_ES_LANGUAGE && "bg-slate-100 dark:text-black"}`
            }
            >
            ES
        </a>
        <a
            onClick={() => _handleChangeLanguage(VL_EN_LANGUAGE)}
            href="/en/"
            class={`inline-flex cursor-pointer items-center justify-center rounded-md py-1 px-3 text-sm font-medium
              border-2 border-slate-100 text-gray-900 dark:text-white hover:text-black hover:bg-slate-100 dark:hover:text-black
              ${current_language === VL_EN_LANGUAGE && "bg-slate-100 dark:text-black"}`
            }
            >
            EN
        </a>
    </div>
  )
}

export default BtnLanguage