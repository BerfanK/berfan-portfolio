import { Fragment } from 'react';
import { Trans, useTranslation } from 'react-i18next';

export default function Tools() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <h2 className="text-xl lg:text-3xl font-bold text-black dark:text-white mt-20">{t('About.Tools.Title')}</h2>
            <hr className="w-full h-[1px] bg-black dark:bg-gray-700 mt-2" />
            <ul className="list-disc list-inside mt-8">
                <li className="text-sm lg:text-lg font-code text-gray-700 dark:text-gray-400">
                    <Trans
                        i18nKey="About.Tools.Software.FirstItem"
                        components={{
                            cfLink: <a href="https://pages.cloudflare.com" target="_blank" className="link" />,
                        }}
                        t={t}
                    ></Trans>
                </li>
                <li className="text-sm lg:text-lg font-code text-gray-700 dark:text-gray-400">
                    <Trans
                        i18nKey="About.Tools.Software.SecondItem"
                        components={{
                            taniaLink: <a href="https://www.taniarascia.com" target="_blank" className="link" />,
                        }}
                        t={t}
                    ></Trans>
                </li>
                <li className="text-sm lg:text-lg font-code text-gray-700 dark:text-gray-400">
                    <Trans
                        i18nKey="About.Tools.Software.ThirdItem"
                        components={{
                            b: <b />,
                            vscodeLink: <a href="https://code.visualstudio.com" target="_blank" className="link" />,
                        }}
                        t={t}
                    ></Trans>
                </li>
                <li className="text-sm lg:text-lg font-code text-gray-700 dark:text-gray-400">
                    <Trans
                        i18nKey="About.Tools.Software.FourthItem"
                        components={{
                            b: <b />,
                            viteLink: <a href="https://vitejs.dev" target="_blank" className="link" />,
                            reactLink: <a href="https://reactjs.org" target="_blank" className="link" />,
                            tailwindLink: <a href="https://tailwindcss.com" target="_blank" className="link" />,
                        }}
                        t={t}
                    ></Trans>
                </li>
            </ul>
        </Fragment>
    );
}
