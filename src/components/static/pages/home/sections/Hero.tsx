import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <div className="flex flex-row items-center justify-between w-full gap-8">
            <div className="flex flex-col lg:max-w-[60%]">
                <h1 className="text-3xl lg:text-5xl font-bold">Berfan's Portfolio</h1>
                <p className="lg:text-lg font-semibold mt-4 text-gray-500 dark:text-gray-300/80">Welcome to my portfolio website 🌱</p>
                <p className="lg:text-lg font-semibold mt-4 text-gray-500 dark:text-gray-300/80">
                    I'm a software developer based in Switzerland. I love to build{' '}
                    <Link to="/projects" className="link">
                        projects
                    </Link>{' '}
                    and aquire new{' '}
                    <Link to="/skills" className="link">
                        skills
                    </Link>
                    . I mainly work with web technologies, but I'm also interested in other fields of software development.
                </p>
            </div>
            <div className="flex-col items-start justify-end text-right hidden lg:flex">
                <img src="/favicon.png" alt="Berfan's portrait" className="rounded w-60" />
            </div>
        </div>
    );
}
