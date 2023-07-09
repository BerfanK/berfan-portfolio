import { Data } from '../../../../../config/Data';
import { ExperienceProps } from '../../../../../config/Types';
import ExperienceCard from '../elements/ExperienceCard';

export default function Experiences() {
    return (
        <section className="mt-20">
            <h2 className="text-3xl font-bold">Experiences</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-8">
                {Data.EXPERIENCES_DATA.map((experience: ExperienceProps, index: number) => (
                    <ExperienceCard
                        key={index}
                        name={experience.name}
                        company={experience.company}
                        type={experience.type}
                        date={experience.date}
                        image={experience.image}
                        isPresent={experience.isPresent}
                    />
                ))}
            </div>
        </section>
    );
}
