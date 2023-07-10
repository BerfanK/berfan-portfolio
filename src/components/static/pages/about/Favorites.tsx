import { Fragment } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { CgChevronDoubleRight } from 'react-icons/cg';

export default function Favorites() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <h2 className="text-xl lg:text-3xl font-bold text-black dark:text-white mt-20">{t('About.Favorites.Title')}</h2>
            <hr className="w-full h-[1px] bg-black dark:bg-gray-700 mt-2" />
            <div className="flex flex-col gap-2 mt-8">
                {/* 1st Favorite */}
                <div className="flex flex-row items-center gap-1">
                    <h3 className="text-sm lg:text-lg min-w-[100px] font-bold font-code text-success">{t('About.Favorites.FirstItem')}</h3>
                    <CgChevronDoubleRight className="w-12 h-6 text-black dark:text-white" />
                    <p className="font-code tracking-wide text-sm lg:text-lg font-light text-gray-500 dark:text-gray-300/80">
                        <Trans i18nKey="About.Favorites.FirstResult" t={t}></Trans>
                    </p>
                </div>

                {/* 2nd Favorite */}
                <div className="flex flex-row items-center gap-1">
                    <h3 className="text-sm lg:text-lg min-w-[100px] font-bold font-code text-success">{t('About.Favorites.SecondItem')}</h3>
                    <CgChevronDoubleRight className="w-12 h-6 text-black dark:text-white" />
                    <p className="font-code tracking-wide text-sm lg:text-lg font-light text-gray-500 dark:text-gray-300/80">
                        <Trans
                            i18nKey="About.Favorites.SecondResult"
                            t={t}
                            components={{
                                foodLink: <a href="https://www.nefisyemektarifleri.com/evde-etli-ekmek/" target="_blank" className="link" />,
                            }}
                        ></Trans>
                    </p>
                </div>

                {/* 3rd Favorite */}
                <div className="flex flex-row items-center gap-1">
                    <h3 className="text-sm lg:text-lg min-w-[100px] font-bold font-code text-success">{t('About.Favorites.ThirdItem')}</h3>
                    <CgChevronDoubleRight className="w-12 h-6 text-black dark:text-white" />
                    <p className="font-code tracking-wide text-sm lg:text-lg font-light text-gray-500 dark:text-gray-300/80">
                        <Trans i18nKey="About.Favorites.ThirdResult" t={t}></Trans>
                    </p>
                </div>

                {/* 4th Favorite */}
                <div className="flex flex-row items-center gap-1">
                    <h3 className="text-sm lg:text-lg min-w-[100px] font-bold font-code text-success">{t('About.Favorites.FourthItem')}</h3>
                    <CgChevronDoubleRight className="w-12 h-6 text-black dark:text-white" />
                    <p className="font-code tracking-wide text-sm lg:text-lg font-light text-gray-500 dark:text-gray-300/80">
                        <Trans
                            i18nKey="About.Favorites.FourthResult"
                            t={t}
                            components={{
                                gameLink: <a href="https://www.counter-strike.net" target="_blank" className="link" />,
                            }}
                        ></Trans>
                    </p>
                </div>

                {/* 5th Favorite */}
                <div className="flex flex-row items-center gap-1">
                    <h3 className="text-sm lg:text-lg min-w-[100px] font-bold font-code text-success">{t('About.Favorites.FifthItem')}</h3>
                    <CgChevronDoubleRight className="w-12 h-6 text-black dark:text-white" />
                    <p className="font-code tracking-wide text-sm lg:text-lg font-light text-gray-500 dark:text-gray-300/80">
                        <Trans i18nKey="About.Favorites.FifthResult" t={t}></Trans>
                    </p>
                </div>

                {/* 6th Favorite */}
                <div className="flex flex-row items-center gap-1">
                    <h3 className="text-sm lg:text-lg min-w-[100px] font-bold font-code text-success">{t('About.Favorites.SixthItem')}</h3>
                    <CgChevronDoubleRight className="w-12 h-6 text-black dark:text-white" />
                    <p className="font-code tracking-wide text-sm lg:text-lg font-light text-gray-500 dark:text-gray-300/80">
                        <Trans i18nKey="About.Favorites.SixthResult" t={t}></Trans>
                    </p>
                </div>
            </div>
        </Fragment>
    );
}
