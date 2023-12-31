import classNames from 'classnames';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

interface SkillItemProps {
    name: string;
    svgIcon: React.ReactNode;
    stars: number;
}

export default function SkillItem({ name, svgIcon, stars }: SkillItemProps) {
    const starsToJSX = () => {
        const starsJSX: React.ReactNode[] = [];
        const fullStars = Math.floor(stars);
        const hasHalfStar = stars % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            starsJSX.push(<BsStarFill key={i} className="text-orange-600 dark:text-yellow-400 w-3 h-3" />);
        }

        if (hasHalfStar) {
            starsJSX.push(<BsStarHalf key={starsJSX.length} className="text-orange-600 dark:text-yellow-400 w-3 h-3" />);
        }

        for (let i = starsJSX.length; i < 5; i++) {
            starsJSX.push(<BsStar key={i} className="text-orange-600 dark:text-yellow-400 w-3 h-3" />);
        }

        return starsJSX;
    };

    return (
        <div className="border-2 border-gray-200 dark:border-gray-800 rounded p-2 lg:p-5">
            <div className="flex flex-row items-center gap-4">
                {svgIcon}
                <div className="flex flex-col">
                    <h3 className="text-lg lg:text-xl font-semibold text-black dark:text-white">{name}</h3>
                    <p
                        className={classNames(
                            'text-base font-code flex flex-row items-center gap-2',
                            { 'text-green-700 font-semibold dark:text-success dark:font-normal': stars >= 3 },
                            { 'text-orange-700 font-semibold dark:text-orange-500 dark:font-normal': stars < 3 && stars > 2 },
                            { 'text-red-700 font-semibold dark:text-red-500 dark:font-normal': stars <= 2 }
                        )}
                    >
                        {starsToJSX()}({stars} / 5)
                    </p>
                </div>
            </div>
        </div>
    );
}
