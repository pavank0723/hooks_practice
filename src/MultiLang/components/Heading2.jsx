import React from "react"
import { useTranslation } from "react-i18next"
const Heading2 = () =>{
    const { t } = useTranslation()
    return(
        <>
        <h2>{t('my_name')}</h2>
        </>
    )
}

export default Heading2