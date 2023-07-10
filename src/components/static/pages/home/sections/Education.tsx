import { useTranslation } from 'react-i18next';
import { Data } from '../../../../../config/Data';
import { EducationProps } from '../../../../../config/Types';
import EducationCard from '../elements/EducationCard';

export default function Education() {
    const { t } = useTranslation();

    return (
        <section id="education" className="mt-20">
            <h2 className="lg:text-3xl font-bold">{t('Home.Education.Title')}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-5">
                {Data.EDUCATION_DATA.map((education: EducationProps, index: number) => (
                    <EducationCard
                        key={index}
                        name={education.name}
                        description={education.description}
                        startDate={education.startDate}
                        endDate={education.endDate}
                        image={education.image}
                        isPresent={education.isPresent}
                    />
                ))}
            </div>
        </section>
    );
}
