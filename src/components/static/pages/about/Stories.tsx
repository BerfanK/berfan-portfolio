import { Fragment } from 'react';
import { Trans, useTranslation } from 'react-i18next';

export default function Stories() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <h2 className="text-xl lg:text-3xl font-bold text-black dark:text-white mt-8">{t('About.History.Title')}</h2>
            <hr className="w-full h-[1px] bg-black dark:bg-gray-700 mt-2" />

            {/* 1st Story */}
            <div className="flex flex-col gap-1">
                <h3 className="text-sm lg:text-lg font-bold text-black dark:text-white mt-8">{t('About.History.FirstSubtitle')}</h3>
                <p className="tracking-wide text-sm lg:text-lg font-light text-gray-500 dark:text-gray-300/80">
                    <Trans
                        i18nKey="About.History.FirstSection"
                        components={{
                            minecraftLink: <a href="https://minecraft.com" target="_blank" className="link" />,
                            javaLink: <a href="https://java.com" target="_blank" className="link" />,
                            schoolLink: <a href="https://wg.edubs.ch/schulprofil/ims" target="_blank" className="link" />,
                        }}
                        t={t}
                    ></Trans>
                </p>
            </div>

            {/* Divider */}
            <Divider />

            {/* 2nd Story */}
            <div className="flex flex-col gap-1">
                <h3 className="text-sm lg:text-lg font-bold text-black dark:text-white mt-8">{t('About.History.SecondSubtitle')}</h3>
                <p className="tracking-wide text-sm lg:text-lg font-light text-gray-500 dark:text-gray-300/80">
                    <Trans
                        i18nKey="About.History.SecondSection"
                        components={{
                            schoolLink: <a href="https://wg.edubs.ch/schulprofil/ims" target="_blank" className="link" />,
                            htmlLink: <a href="https://wikipedia.org/wiki/HTML" target="_blank" className="link" />,
                            cssLink: <a href="https://wikipedia.org/wiki/CSS" target="_blank" className="link" />,
                            phpLink: <a href="https://wikipedia.org/wiki/PHP" target="_blank" className="link" />,
                            pythonLink: <a href="https://wikipedia.org/wiki/Python_(programming_language)" target="_blank" className="link" />,
                            csharpLink: <a href="https://wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank" className="link" />,
                            bootstrapLink: <a href="https://getbootstrap.com" target="_blank" className="link" />,
                        }}
                        t={t}
                    ></Trans>
                </p>
            </div>

            {/* Divider */}
            <Divider />

            {/* 3rd Story */}
            <div className="flex flex-col gap-1">
                <h3 className="text-sm lg:text-lg font-bold text-black dark:text-white mt-8">{t('About.History.ThirdSubtitle')}</h3>
                <p className="tracking-wide text-sm lg:text-lg font-light text-gray-500 dark:text-gray-300/80">
                    <Trans
                        i18nKey="About.History.ThirdSection"
                        components={{
                            angularLink: <a href="https://angular.io" target="_blank" className="link" />,
                            expressLink: <a href="https://expressjs.com" target="_blank" className="link" />,
                            reactLink: <a href="https://reactjs.org" target="_blank" className="link" />,
                            tailwindLink: <a href="https://tailwindcss.com" target="_blank" className="link" />,
                        }}
                        t={t}
                    ></Trans>
                </p>
            </div>

            {/* Divider */}
            <Divider />

            {/* 4th Story */}
            <div className="flex flex-col gap-1">
                <h3 className="text-sm lg:text-lg font-bold text-black dark:text-white mt-8">{t('About.History.FourthSubtitle')}</h3>
                <p className="tracking-wide text-sm lg:text-lg font-light text-gray-500 dark:text-gray-300/80">
                    <Trans
                        i18nKey="About.History.FourthSection"
                        components={{
                            fhnwLink: <a href="https://fhnw.ch" target="_blank" className="link" />,
                        }}
                        t={t}
                    ></Trans>
                </p>
            </div>
        </Fragment>
    );
}

const Divider = () => {
    return (
        <div className="flex flex-row items-center justify-between w-full gap-8 mt-4">
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400" />
                <div className="w-[2px] h-16 rounded-full bg-gray-500 dark:bg-gray-400" />
                <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400" />
            </div>
        </div>
    );
};
