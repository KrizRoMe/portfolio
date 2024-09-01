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
              border-2 border-black dark:border-white text-black hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white
              ${current_language === VL_ES_LANGUAGE ? "bg-black dark:text-black text-white dark:bg-white": "dark:text-white"}`
            }
            >
            ES
        </a>
        <a
            onClick={() => _handleChangeLanguage(VL_EN_LANGUAGE)}
            href="/en/"
            class={`inline-flex cursor-pointer items-center justify-center rounded-md py-1 px-3 text-sm font-medium
              border-2 border-black dark:border-white text-black hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white
              ${current_language === VL_EN_LANGUAGE ? "bg-black dark:text-black text-white dark:bg-white" : "dark:text-white"}`
            }
            >
            EN
        </a>
    </div>
  )
}

export default BtnLanguage