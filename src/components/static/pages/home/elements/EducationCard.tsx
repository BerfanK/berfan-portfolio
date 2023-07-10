import { useTranslation } from 'react-i18next';
import { EducationProps } from '../../../../../config/Types';
import { IoSchoolOutline } from 'react-icons/io5';

export default function EducationCard(props: EducationProps) {
    const { t } = useTranslation();

    return (
        <div className="flex flex-row items-center gap-8 border divide-x-2 divide-gray-500 border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1f1f1f] rounded-md p-5">
            {props.image && <img src={props.image} alt={props.name} className="w-20 max-h-20" />}
            {!props.image && <IoSchoolOutline className="w-[100px] h-20 text-gray-700 dark:text-gray-400" />}
            <div className="flex flex-col pl-5 w-full">
                <div className="flex flex-row items-center justify-between w-full">
                    <h3 className="text-xl font-semibold">{props.name}</h3>
                    {props.isPresent && <div className="rounded bg-success/30 text-success py-1 px-3 text-xs">{t('Home.Education.Present')}</div>}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-400 font-light">{t(`Home.Education.${props.description}`)}</p>
                <p className="text-sm text-gray-700 dark:text-gray-400 font-light font-code">
                    {props.startDate} - {!props.endDate ? t('Home.Education.Present') : props.endDate}
                </p>
            </div>
        </div>
    );
}
