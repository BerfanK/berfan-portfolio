import ProjectItem from '../elements/ProjectItem';

export default function Projects() {
    return (
        <section className="mt-32">
            <div className="flex flex-row items-center justify-between">
                <h2 className="text-3xl font-bold">Latest Projects</h2>
                <button className="btn-light dark:btn-dark px-4 text-lg font-semibold">View all</button>
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
