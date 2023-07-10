import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import LanguageSwitch from '../static/global/LanguageSwitch';
import { useTranslation } from 'react-i18next';

/**
 * Navigation component of the application.
 *
 * @returns {JSX.Element} The component
 */
export default function Navigation() {
    const { t } = useTranslation();

    const toggleTheme = () => {
        window.document.body.classList.toggle('dark');

        if (window.document.body.classList.contains('dark')) {
            window.document.body.classList.remove('bg-white', 'text-black');
            window.document.body.classList.add('bg-[#181818]', 'text-white');
        } else {
            window.document.body.classList.remove('bg-[#181818]', 'text-white');
            window.document.body.classList.add('bg-white', 'text-black');
        }
    };

    return (
        <div className="container my-10">
            <header className="">
                <Link to="/" className="flex flex-row items-center gap-2">
                    <h1 className="text-xl font-semibold text-black dark:text-white">berfan-korkmaz.ch</h1>
                </Link>
            </header>
            <nav className="mt-2 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4 lg:gap-8">
                    <Link
                        to="/"
                        className="text-lg font-light text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white duration-200 border-b-[3px] border-transparent hover:border-black dark:hover:border-white"
                    >
                        {t('Navigation.FirstItem')}
                    </Link>
                    <Link
                        to="/"
                        className="text-lg font-light text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white duration-200 border-b-[3px] border-transparent hover:border-black dark:hover:border-white"
                    >
                        {' '}
                        {t('Navigation.SecondItem')}
                    </Link>
                    <Link
                        to="/"
                        className="text-lg font-light text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white duration-200 border-b-[3px] border-transparent hover:border-black dark:hover:border-white"
                    >
                        {' '}
                        {t('Navigation.ThirdItem')}
                    </Link>
                    <Link
                        to="/"
                        className="text-lg font-light text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white duration-200 border-b-[3px] border-transparent hover:border-black dark:hover:border-white"
                    >
                        {' '}
                        {t('Navigation.FourthItem')}
                    </Link>
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
