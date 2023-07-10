import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Projects() {
    const { t } = useTranslation();

    return (
        <section className="mt-32">
            <div className="flex flex-row items-center justify-between">
                <h2 className="lg:text-3xl font-bold">{t('Home.Projects.Title')}</h2>
                <Link to="/projects" className="text-xs btn-light dark:btn-dark lg:px-4 lg:text-lg font-semibold">
                    {t('Home.Projects.Button')}
                </Link>
            </div>
            <div className="flex flex-col w-full mt-5">
                <span className="text-xs lg:text-base tracking-wide font-semibold text-red-500 dark:text-red-300/80">| {t('Home.Projects.Empty')}</span>
            </div>
        </section>
    );
}
