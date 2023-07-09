import { BsMoonStarsFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

/**
 * Navigation component of the application.
 *
 * @returns {JSX.Element} The component
 */
export default function Navigation() {
    return (
        <div className="container my-10">
            <header className="hidden lg:block">
                <Link to="/" className="flex flex-row items-center gap-2">
                    <img src="https://em-content.zobj.net/thumbs/120/mozilla/36/sparkles_2728.png" alt="logo" className="h-7" />
                    <h1 className="text-xl font-semibold ml-2">Berfan Korkmaz</h1>
                </Link>
            </header>
            <nav className="mt-8 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4 lg:gap-8">
                    <Link to="/" className="text-lg font-light text-gray-300 hover:text-white duration-200 border-b-[3px] border-transparent hover:border-white">
                        About
                    </Link>
                    <Link to="/" className="text-lg font-light text-gray-300 hover:text-white duration-200 border-b-[3px] border-transparent hover:border-white">
                        Projects
                    </Link>
                    <Link to="/" className="text-lg font-light text-gray-300 hover:text-white duration-200 border-b-[3px] border-transparent hover:border-white">
                        Skills
                    </Link>
                    <Link to="/" className="text-lg font-light text-gray-300 hover:text-white duration-200 border-b-[3px] border-transparent hover:border-white">
                        Education
                    </Link>
                </div>
                <div className="hidden lg:block">
                    <button className="btn-dark">
                        <BsMoonStarsFill className="text-yellow-400 h-5 w-5" />
                    </button>
                </div>
            </nav>
        </div>
    );
}
