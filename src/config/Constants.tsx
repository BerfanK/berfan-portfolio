import {NavigationItem} from "./Types.tsx";
import {AiFillHome, AiOutlineHome} from "react-icons/ai";
import {BsFolderFill, BsFolder, BsBoxSeamFill, BsBoxSeam, BsChatSquareFill, BsChatSquare} from "react-icons/bs";
import {PiSparkle, PiSparkleFill} from "react-icons/pi";
import {IoSchoolOutline, IoSchoolSharp} from "react-icons/io5";

export default class Constants {
    public static readonly navigationItems: NavigationItem[] = [
        {
            name: 'Home',
            href: '/',
            activeIcon: <AiFillHome className="h-6 w-6" />,
            defaultIcon: <AiOutlineHome className="h-6 w-6" />,
            alignment: 'left'
        },
        {
            name: 'Projects',
            href: '/projects',
            activeIcon: <BsFolderFill className="h-6 w-6" />,
            defaultIcon: <BsFolder className="h-6 w-6" />,
            alignment: 'left'
        },
        {
            name: 'Skills',
            href: '/skills',
            activeIcon: <BsBoxSeamFill className="h-6 w-6" />,
            defaultIcon: <BsBoxSeam className="h-6 w-6" />,
            alignment: 'left'
        },
        {
            name: 'Education',
            href: '/education',
            activeIcon: <IoSchoolSharp className="h-6 w-6" />,
            defaultIcon: <IoSchoolOutline className="h-6 w-6" />,
            alignment: 'left'
        },
        {
            name: 'Experiences',
            href: '/experiences',
            activeIcon: <PiSparkleFill className="h-6 w-6" />,
            defaultIcon: <PiSparkle className="h-6 w-6" />,
            alignment: 'left'
        },
        {
            name: 'Contact me',
            href: '/contact',
            activeIcon: <BsChatSquareFill className="h-6 w-6" />,
            defaultIcon: <BsChatSquare className="h-6 w-6" />,
            alignment: 'right'
        }
    ];
}