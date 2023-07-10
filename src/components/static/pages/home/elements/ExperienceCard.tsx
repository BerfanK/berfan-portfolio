import { useTranslation } from 'react-i18next';
import { ExperienceProps } from '../../../../../config/Types';
import { MdWorkOutline } from 'react-icons/md';

export default function ExperienceCard(props: ExperienceProps) {
    const { t } = useTranslation();

    return (
        <div className="flex flex-row items-center gap-8 border divide-x-2 divide-gray-500 border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1f1f1f] rounded-md p-5">
            {props.image && <img src={props.image} alt={props.name} className="w-10 max-h-10 lg:w-20 lg:max-h-20" />}
            {!props.image && <MdWorkOutline className="w-[50px] h-10 lg:w-[100px] lg:h-20 text-gray-700 dark:text-gray-400" />}
            <div className="flex flex-col pl-5 w-full">
                <div className="flex flex-row items-center justify-between w-full">
                    <h3 className="lg:text-xl font-semibold">{props.name}</h3>
                    {props.isPresent && <div className="hidden lg:block rounded bg-success/30 text-success py-1 px-3 text-xs">{t('Home.Experiences.Present')}</div>}
                </div>
                <p className="text-xs lg:text-sm text-gray-700 dark:text-gray-400 font-light">
                    {props.company} &bull; {t(`Home.Experiences.${props.type}`)}
                </p>
                <p className="text-xs lg:text-sm text-gray-700 dark:text-gray-400 font-light font-code">
                    {props.startDate} - {!props.endDate ? t('Home.Experiences.Present') : props.endDate}
                </p>
            </div>
        </div>
    );
}
