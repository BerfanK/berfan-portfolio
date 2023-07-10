import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { BsChevronDown, BsFilterLeft, BsSearch } from 'react-icons/bs';
import { CgStyle } from 'react-icons/cg';
import { SkillsProps } from '../../../../../config/Types';
import { Data } from '../../../../../config/Data';
import { SkillType } from '../../../../../config/Enums';
import classNames from 'classnames';
import SkillFilter from '../elements/SkillFilter';
import SkillItem from '../elements/SkillItem';
import { useTranslation } from 'react-i18next';

export default function Skills() {
    const { t } = useTranslation();

    const [skillData, setSkillData] = useState(Data.SKILLS_DATA);
    const [searchSkill, setSearchSkill] = useState('');
    const [sortSkill, setSortSkill] = useState('asc');

    const [isSkillFilterOpen, setIsSkillFilterOpen] = useState(false);
    const [filterSkill, setFilterSkill] = useState(SkillType.All);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchSkill(e.target.value);

        if (e.target.value === '') {
            setSkillData(Data.SKILLS_DATA);
        } else {
            setSkillData(skillData.filter((skill: SkillsProps) => skill.name.toLowerCase().includes(e.target.value.toLowerCase())));
        }
    };

    const handleSort = () => {
        if (sortSkill === 'asc') {
            setSkillData(skillData.sort((a: SkillsProps, b: SkillsProps) => (a.stars > b.stars ? 1 : -1)));
            setSortSkill('desc');
        } else {
            setSkillData(skillData.sort((a: SkillsProps, b: SkillsProps) => (a.stars < b.stars ? 1 : -1)));
            setSortSkill('asc');
        }
    };

    const handleFilter = (filter: SkillType) => {
        setFilterSkill(filter);

        if (filter === SkillType.All) {
            setSkillData(Data.SKILLS_DATA);
        } else {
            setSkillData(Data.SKILLS_DATA.filter((skill: SkillsProps) => skill.type.includes(filter)));
        }
    };

    return (
        <section className="mt-20">
            <h2 className="text-3xl font-bold">{t('Home.Skills.Title')}</h2>
            <div className="flex flex-row items-center gap-4 mt-8">
                <div className="relative hidden lg:block">
                    <input
                        type="text"
                        value={searchSkill}
                        placeholder={t('Home.Skills.SearchPlaceholder')}
                        onChange={handleSearch}
                        className="w-full border border-gray-700 text-gray-700 dark:text-gray-400 hover:border-gray-500/60 bg-transparent font-medium rounded-md py-2 px-3 pl-10 transition duration-200 focus:outline-none"
                    />
                    <span className="absolute top-[11px] left-3">
                        <BsSearch className="w-5 h-5 text-gray-700 dark:text-gray-400" />
                    </span>
                </div>
                <div onClick={handleSort} className="select-none flex flex-row items-center gap-2 border border-gray-700 hover:border-gray-500/60 duration-200 rounded cursor-pointer py-2 px-3">
                    <BsFilterLeft className="h-6 w-6" />
                    <span className="text-base font-medium text-gray-700 dark:text-gray-400 hidden lg:inline-flex">
                        {sortSkill === 'asc' ? t('Home.Skills.BestRated') : t('Home.Skills.WorstRated')}
                    </span>
                </div>
                <div className="relative">
                    <div
                        onClick={() => setIsSkillFilterOpen(!isSkillFilterOpen)}
                        className={classNames('flex flex-row items-center gap-2 border border-gray-700 hover:border-gray-500/60 duration-200 rounded cursor-pointer py-2 px-3', {
                            'bg-gray-300/60 dark:bg-gray-800/60': isSkillFilterOpen,
                        })}
                    >
                        <CgStyle className="h-6 w-6" />
                        <span className="text-base font-medium text-gray-700 dark:text-gray-400 hidden lg:inline-flex">
                            {filterSkill === SkillType.All ? t('Home.Skills.AllMixed') : t(`Home.Skills.${filterSkill}`)}
                        </span>
                        <BsChevronDown className={classNames('text-gray-700 dark:text-gray-400 h-4 w-4 duration-200', { 'transform rotate-180': isSkillFilterOpen })} />
                    </div>
                    <Transition
                        show={isSkillFilterOpen}
                        enter="transition duration-200 ease-in-out transform"
                        enterFrom="opacity-0 -translate-x-2"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition duration-200 ease-in-out transform"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 -translate-x-2"
                    >
                        <SkillFilter setOpen={setIsSkillFilterOpen} selectedFilter={filterSkill} handleFilter={handleFilter} />
                    </Transition>
                </div>
            </div>
            <div></div>

            <p className="text-base text-gray-700 dark:text-gray-400 font-light mt-4">{t('Home.Skills.Sidenote')}</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4 pr-3">
                {skillData.map((skill: SkillsProps, index: number) => (
                    <SkillItem key={index} name={skill.name} stars={skill.stars} svgIcon={skill.svgIcon} />
                ))}
            </div>
        </section>
    );
}
