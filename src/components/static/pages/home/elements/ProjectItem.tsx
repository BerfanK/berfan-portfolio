import moment from 'moment-timezone';
import { Link } from 'react-router-dom';

interface ProjectItemProps {
    title: string;
    shortDescription: string;
    date: string;
    link: string;
}

export default function ProjectItem({ title, shortDescription, date, link }: ProjectItemProps) {
    const dateFormatted = moment.tz(date, 'Europe/Zurich').format('MMMM Do, YYYY');

    return (
        <Link to={`/projects/${link}`} className="group flex flex-row items-center justify-between w-full mt-2 border-b border-gray-200 dark:border-gray-700 pb-2">
            <h3 className="text-xs truncate lg:text-xl font-normal group-hover:text-blue-400 duration-200">
                {title} &mdash; {shortDescription}
            </h3>
            <p className="text-xs lg:text-lg font-code text-success">{dateFormatted}</p>
        </Link>
    );
}
