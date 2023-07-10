import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
    const { t } = useTranslation();
    return (
        <Fragment>
            <h1 className="text-xl lg:text-3xl font-bold text-black dark:text-white">{t('Projects.Title')}</h1>
            <div className="flex flex-col w-full mt-5">
                <span className="text-xs lg:text-base tracking-wide font-semibold text-red-500 dark:text-red-300/80">| {t('Projects.Empty')}</span>
            </div>
        </Fragment>
    );
}
