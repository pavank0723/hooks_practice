import React from "react"
import { useTranslation } from "react-i18next"
const Heading1 = () => {
    const { t } = useTranslation()
    return (
        <>
            <h1>
                {t('welcome_message')}<br />
            </h1>
        </>
    )
}

export default Heading1