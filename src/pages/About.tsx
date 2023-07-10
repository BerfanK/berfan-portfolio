import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

/* Sections */
import Hero from '../components/static/pages/about/Hero';
import Stories from '../components/static/pages/about/Stories';
import Favorites from '../components/static/pages/about/Favorites';
import Tools from '../components/static/pages/about/Tools';

/* Sections */

export default function About() {
    const { t } = useTranslation();
    return (
        <Fragment>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-36">
                <div className="flex flex-col col-span-2">
                    <Hero />
                    <div className="my-5" />
                    <Stories />
                    <div className="my-5" />
                    <Favorites />
                    <div className="my-5" />
                    <Tools />
                </div>
                <div className="flex flex-col">
                    <div className="dark:bg-[#1f1f1f] rounded p-5 border border-gray-700/30">
                        <h2 className="tracking-wider text-xl lg:text-xl font-bold text-black dark:text-white uppercase font-code">{t('About.Me')}</h2>
                        <img src="/avatar.jpg" alt="Me" className="w-full h-auto rounded mt-4" />
                        <p className="tracking-wide text-xs font-code font-light mt-4 text-gray-500 dark:text-gray-300/80">Berfan Korkmaz, 19, CH.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
