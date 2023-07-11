import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitch from '../static/global/LanguageSwitch';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

/**
 * Navigation component of the application.
 *
 * @returns {JSX.Element} The component
 */
export default function Navigation() {
    const { t } = useTranslation();
    const location = useLocation();

    const [isDarkmode, setIsDarkmode] = useState(false);

    const toggleTheme = () => {
        if (isDarkmode) {
            window.document.body.classList.remove('dark');
            window.document.body.classList.remove('bg-[#181818]', 'text-white');
            window.document.body.classList.add('bg-white', 'text-black');
            window.localStorage.setItem('theme', 'light');
            setIsDarkmode(false);
        } else {
            window.document.body.classList.add('dark');
            window.document.body.classList.remove('bg-white', 'text-black');
            window.document.body.classList.add('bg-[#181818]', 'text-white');
            window.localStorage.setItem('theme', 'dark');
            setIsDarkmode(true);
        }
    };

    const loadTheme = () => {
        const theme = window.localStorage.getItem('theme');
        if (theme === 'dark') {
            window.document.body.classList.add('dark');
            window.document.body.classList.remove('bg-white', 'text-black');
            window.document.body.classList.add('bg-[#181818]', 'text-white');
            setIsDarkmode(true);
        } else {
            window.document.body.classList.remove('dark');
            window.document.body.classList.remove('bg-[#181818]', 'text-white');
            window.document.body.classList.add('bg-white', 'text-black');
            setIsDarkmode(false);
        }
    };

    useEffect(() => {
        loadTheme();
    }, [isDarkmode]);

    return (
        <div className="container my-10 bg-gray-200 dark:bg-black lg:dark:bg-transparent sticky py-2 px-5 lg:relative lg:p-0 lg:bg-transparent">
            <header className="hidden lg:block">
                <Link to="/" className="flex flex-row items-center gap-2">
                    <h1 className="text-xl font-semibold text-black dark:text-white">berfan-korkmaz.ch</h1>
                </Link>
            </header>
            <nav className="mt-2 flex flex-row items-center justify-between">
                <div className="flex flex-row flex-wrap items-center gap-x-4">
                    <Link
                        to="/about"
                        className={classNames(
                            'lg:text-lg font-light text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white duration-200 border-b-[3px] border-transparent hover:border-black dark:hover:border-white',
                            location.pathname === '/about' ? 'font-semibold border-black dark:border-white' : ''
                        )}
                    >
                        {t('Navigation.FirstItem')}
                    </Link>
                    <Link
                        to="/projects"
                        className={classNames(
                            'lg:text-lg font-light text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white duration-200 border-b-[3px] border-transparent hover:border-black dark:hover:border-white',
                            location.pathname === '/projects' ? 'font-semibold border-black dark:border-white' : ''
                        )}
                    >
                        {t('Navigation.SecondItem')}
                    </Link>
                    {location.pathname === '/' ? (
                        <a
                            href="#skills"
                            className="lg:text-lg font-light text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white duration-200 border-b-[3px] border-transparent hover:border-black dark:hover:border-white"
                        >
                            {t('Navigation.ThirdItem')}
                        </a>
                    ) : (
                        <Link
                            to="/?to=skills"
                            className="lg:text-lg font-light text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white duration-200 border-b-[3px] border-transparent hover:border-black dark:hover:border-white"
                        >
                            {t('Navigation.ThirdItem')}
                        </Link>
                    )}
                    {location.pathname === '/' ? (
                        <a
                            href="#experiences"
                            className="lg:text-lg font-light text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white duration-200 border-b-[3px] border-transparent hover:border-black dark:hover:border-white"
                        >
                            {t('Navigation.FourthItem')}
                        </a>
                    ) : (
                        <Link
                            to="/?to=experiences"
                            className="lg:text-lg font-light text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white duration-200 border-b-[3px] border-transparent hover:border-black dark:hover:border-white"
                        >
                            {t('Navigation.FourthItem')}
                        </Link>
                    )}
                    <div className="hidden lg:block">
                        {location.pathname === '/' ? (
                            <a
                                href="#education"
                                className="lg:text-lg font-light text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white duration-200 border-b-[3px] border-transparent hover:border-black dark:hover:border-white"
                            >
                                {t('Navigation.FifthItem')}
                            </a>
                        ) : (
                            <Link
                                to="/?to=education"
                                className="lg:text-lg font-light text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white duration-200 border-b-[3px] border-transparent hover:border-black dark:hover:border-white"
                            >
                                {t('Navigation.FifthItem')}
                            </Link>
                        )}
                    </div>
                </div>
                <div className="hidden lg:flex flex-row items-center gap-2">
                    <LanguageSwitch />
                    <button onClick={toggleTheme} className="hidden dark:block btn-dark">
                        <BsSunFill className="text-yellow-400 h-5 w-5" />
                    </button>
                    <button onClick={toggleTheme} className="block dark:hidden btn-light">
                        <BsMoonStarsFill className="text-black h-5 w-5" />
                    </button>
                </div>
            </nav>
            <div className="flex lg:hidden flex-row items-center gap-2 mt-3">
                <LanguageSwitch />
                <button onClick={toggleTheme} className="hidden dark:block btn-dark">
                    <BsSunFill className="text-yellow-400 h-5 w-5" />
                </button>
                <button onClick={toggleTheme} className="block dark:hidden btn-light">
                    <BsMoonStarsFill className="text-black h-5 w-5" />
                </button>
            </div>
        </div>
    );
}
