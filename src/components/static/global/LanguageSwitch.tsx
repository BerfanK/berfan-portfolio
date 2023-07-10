import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import { Transition } from '@headlessui/react';
import classnames from 'classnames';
import { Data } from '../../../config/Data';
import { CgChevronDown } from 'react-icons/cg';

function LanguageSwitch() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(Data.LANGUAGES_DATA[0]);

    const changeLanguage = (lang: any) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(Data.LANGUAGES_DATA.find((l) => l.code === lang) || Data.LANGUAGES_DATA[0]);
        setIsOpen(false);
    };

    const buttonRef = useRef(null);

    useEffect(() => {
        const language = cookies.get('i18next');
        if (language) {
            setSelectedLanguage(Data.LANGUAGES_DATA.find((l) => l.code === language) || Data.LANGUAGES_DATA[0]);
            i18n.changeLanguage(language);
        }

        const handleOutsideClick = (event: any) => {
            if (
                buttonRef.current &&
                // @ts-ignore
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div ref={buttonRef} onClick={() => setIsOpen(!isOpen)} className="relative flex flex-row items-center">
            <button className="btn-light dark:btn-dark flex flex-row items-center gap-2">
                <img src={selectedLanguage.image} alt={selectedLanguage.name} className="h-4" />
                {selectedLanguage.short}
                <CgChevronDown
                    className={classnames('h-4 w-4 transition-all duration-200', {
                        'rotate-180 transform': isOpen,
                    })}
                />
            </button>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                className="z-40"
            >
                <div className="absolute -left-[95px] top-[5px] mt-5 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 lg:right-0">
                    <div className="py-1">
                        {Data.LANGUAGES_DATA.map((item: any, index: number) => (
                            <div
                                key={index}
                                onClick={() => changeLanguage(item.code)}
                                className="font-custom flex cursor-pointer flex-row items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                            >
                                <img src={item.image} alt={t(`Languages.${item.locale}`)} className="mr-2 w-6" />
                                {t(`Languages.${item.locale}`)}
                            </div>
                        ))}
                    </div>
                </div>
            </Transition>
        </div>
    );
}

export default LanguageSwitch;
