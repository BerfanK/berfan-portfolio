import { useTranslation } from 'react-i18next';
import { Data } from '../../../../config/Data';
import { ExperienceProps } from '../../../../config/Types';
import ExperienceCard from './elements/ExperienceCard';

export default function Experiences() {
    const { t } = useTranslation();

    return (
        <section id="experiences" className="mt-20">
            <h2 className="lg:text-3xl font-bold">{t('Home.Experiences.Title')}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-5">
                {Data.EXPERIENCES_DATA.map((experience: ExperienceProps, index: number) => (
                    <ExperienceCard
                        key={index}
                        name={experience.name}
                        company={experience.company}
                        type={experience.type}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        image={experience.image}
                        isPresent={experience.isPresent}
                    />
                ))}
            </div>
        </section>
    );
}
