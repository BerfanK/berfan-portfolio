import { Fragment } from 'react';
import { Trans, useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <h1 className="text-3xl lg:text-5xl font-bold text-black dark:text-white">{t('About.Title')}</h1>
            <p className="tracking-wide text-sm lg:text-lg font-light mt-4 text-gray-500 dark:text-gray-300/80">
                <Trans
                    i18nKey="About.General"
                    components={{
                        schoolLink: <a href="https://wg.edubs.ch/schulprofil/ims" target="_blank" className="link" />,
                        companyLink: <a href="https://smartwork.ch" target="_blank" className="link" />,
                    }}
                    t={t}
                ></Trans>
            </p>
        </Fragment>
    );
}
