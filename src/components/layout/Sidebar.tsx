import { Transition } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import Constants from "../../config/Constants.tsx";
import {NavigationItem} from "../../config/Types.tsx";
import {BsChatSquare} from "react-icons/bs";

interface SidebarProps {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Layout({ isOpen, setOpen }: SidebarProps)
{
    const location = useLocation();
    const [isRoleSelectionOpen, setIsRoleSelectionOpen] = React.useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setOpen(true);
            } else {
                setOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={classNames('z-[1000] h-full bg-white p-5 lg:flex flex-col sticky top-0', { 'w-full lg:max-w-[300px] max-w-[100px]': isOpen, hidden: !isOpen })}>
            <div className="flex flex-row items-center justify-between">
                <h2 className="hidden lg:inline-flex text-xl font-semibold">Berfan Korkmaz</h2>
                <div className="relative mx-auto lg:mx-0 select-none">
                    <div onClick={() => setIsRoleSelectionOpen(!isRoleSelectionOpen)} className={classNames('p-1 hover:bg-gray-200/60 duration-200 rounded cursor-pointer', { 'bg-gray-200/60': isRoleSelectionOpen })}>
                        <CgMenuGridO className="text-2xl text-black cursor-pointer" />
                    </div>
                    <Transition show={isRoleSelectionOpen} enter="transition duration-200 ease-in-out transform" enterFrom="opacity-0 -translate-x-2" enterTo="opacity-100 translate-x-0" leave="transition duration-200 ease-in-out transform" leaveFrom="opacity-100 translate-x-0" leaveTo="opacity-0 -translate-x-2">
                        {/* TODO */}
                    </Transition>
                </div>
            </div>

            <hr className="h-[1px] bg-gray-200 my-5" />

            <div className="flex flex-col gap-2 text-lg">
                {Constants.navigationItems
                    .filter((item: NavigationItem) => item.alignment === 'left')
                    .map((item: NavigationItem, index: number) => {
                    const isActive = location.pathname === item.href;
                    return (
                        <Link key={index} to={item.href} className={`mx-auto lg:mx-0 duration-200 flex flex-row items-center justify-between p-2 rounded ${isActive ? 'bg-black' : 'hover:bg-gray-100/60'}`}>
                            <div
                                className={classNames('flex flex-row items-center lg:gap-2', {
                                    'text-white font-semibold': isActive,
                                })}
                            >
                                {isActive ? item.activeIcon : item.defaultIcon}
                                <span className="hidden lg:inline-flex">{item.name}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="flex flex-col gap-1 mt-auto">
                <button className={"bg-black rounded-md text-center py-3 flex flex-row items-center justify-center text-white gap-2"}>
                    <BsChatSquare className="" />
                    <span className="">Write me a message</span>
                </button>
            </div>
        </div>
    );
}
