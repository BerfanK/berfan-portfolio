import { useTranslation } from 'react-i18next';
import ProjectItem from '../elements/ProjectItem';

export default function Projects() {
    const { t } = useTranslation();

    return (
        <section className="mt-32">
            <div className="flex flex-row items-center justify-between">
                <h2 className="text-3xl font-bold">{t('Home.Projects.Title')}</h2>
                <button className="btn-light dark:btn-dark px-4 text-lg font-semibold">{t('Home.Projects.Button')}</button>
            </div>
            <div className="flex flex-col w-full mt-8">
                <ProjectItem title="EduTrack" shortDescription="School Management Software" date={new Date().toISOString()} link="edutrack" />
                <ProjectItem title="EduTrack" shortDescription="School Management Software" date={new Date().toISOString()} link="edutrack" />
                <ProjectItem title="EduTrack" shortDescription="School Management Software" date={new Date().toISOString()} link="edutrack" />
                <ProjectItem title="EduTrack" shortDescription="School Management Software" date={new Date().toISOString()} link="edutrack" />
            </div>
        </section>
    );
}
