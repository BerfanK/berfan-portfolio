import { Data } from '../../../../../config/Data';
import { EducationProps } from '../../../../../config/Types';
import EducationCard from '../elements/EducationCard';

export default function Education() {
    return (
        <section className="mt-20">
            <h2 className="text-3xl font-bold">Education</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-8">
                {Data.EDUCATION_DATA.map((education: EducationProps, index: number) => (
                    <EducationCard key={index} name={education.name} description={education.description} date={education.date} image={education.image} isPresent={education.isPresent} />
                ))}
            </div>
        </section>
    );
}
