import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { RxCross1 } from 'react-icons/rx';
import { SkillType } from '../../../../../config/Enums';
import { AiOutlineSelect } from 'react-icons/ai';

interface SkillFilterProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedFilter: SkillType;
    handleFilter: (filter: SkillType) => void;
}

export default function SkillFilter({ setOpen, selectedFilter, handleFilter }: SkillFilterProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cardRef.current && !cardRef.current.contains(event.target as Node)) setOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    return (
        <div ref={cardRef} className="bg-white dark:bg-[#181818] border border-gray-700 rounded shadow-md shadow-blue-300/10 p-5 w-screen max-w-[500px] absolute top-[10px] left-0">
            <div className="flex flex-row items-center justify-between mb-1">
                <h2 className="text-lg font-semibold">Filter Selection</h2>
                <div onClick={() => setOpen(false)} className="p-1 hover:bg-gray-500/60 duration-200 rounded cursor-pointer">
                    <RxCross1 className="h-5 w-5 text-white cursor-pointer" />
                </div>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-400 font-light">Keep it organized! You can filter the skills by their type. </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
                {Object.values(SkillType).map((skill: string, index: number) => (
                    <div
                        key={index}
                        onClick={() => handleFilter(skill as SkillType)}
                        className={classNames('border border-gray-600 bg-transparent hover:bg-gray-600/60 duration-200 cursor-pointer rounded p-2 flex flex-row items-center gap-4', {
                            'border-blue-400 bg-gray-200 text-black dark:bg-gray-600/20 dark:text-white': selectedFilter === skill,
                        })}
                    >
                        <AiOutlineSelect className="w-4 h-4" />
                        <div className="flex flex-col">
                            <h2 className="text-base font-semibold">{skill}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
