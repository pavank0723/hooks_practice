import React, { useEffect } from 'react'
import './lang.css'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tEn from './locales/en/translation.json'
import tHi from './locales/hi/translation.json'
import tMa from './locales/ma/translation.json'
// import Heading1 from './components/Heading1';
// import Heading2 from './components/Heading2';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: tEn
            },
            hi: {
                translation: tHi
            },
            ma: {
                translation: tMa
            }

        },
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });
const RadioTest = () => {
    const [lang, setLang] = React.useState('en')

    const handleOnChange = (e) => {
        setLang(e.target.value)
    }
    const handleOnClick = (l) => {
        return () => {
            i18n.changeLanguage(l)

            localStorage.setItem('lang', l)
        }
    }
    useEffect(() => {
        console.log(lang)

        let currentLang = localStorage.getItem('lang')
        i18n.changeLanguage(currentLang)
    }, [lang])

    
    return (
        <>
            <div className='lang_main'>
                <div className='lang_menu'>
                    <div className="selected_lang">
                        {lang.toUpperCase()}
                    </div>
                    <ul>
                        <li>
                            <span><input type='radio' value='hi' name='lang' onChange={handleOnChange} onClick={handleOnClick('hi')} checked={lang === 'hi'} />Hindi</span>
                        </li>
                        <li>
                            <span><input type='radio' value='ma' name='lang' onChange={handleOnChange} onClick={handleOnClick('ma')} checked={lang === 'ma'} />Marathi</span>
                        </li>
                        <hr />
                        <li>
                            <span><input type='radio' value='en' name='lang' onChange={handleOnChange} onClick={handleOnClick('en')} checked={lang === 'en'} />English</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RadioTest