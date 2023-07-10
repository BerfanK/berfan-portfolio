import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-row items-center justify-between w-full gap-8">
            <div className="flex flex-col lg:max-w-[60%]">
                <h1 className="text-3xl lg:text-5xl font-bold">{t('Home.Hero.Title')}</h1>
                <p className="lg:text-lg font-semibold mt-4 text-gray-500 dark:text-gray-300/80">{t('Home.Hero.Subtitle')}</p>
                <p className="lg:text-lg font-semibold mt-4 text-gray-500 dark:text-gray-300/80">{t('Home.Hero.Description')}</p>
            </div>
            <div className="flex-col items-start justify-end text-right hidden lg:flex">
                <img src="/favicon.png" alt="Berfan's portrait" className="rounded w-60" />
            </div>
        </div>
    );
}
