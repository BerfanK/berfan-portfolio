import { SkillType } from './Enums';

export type LanguageProps = {
    code: string;
    locale: string;
    name: string;
    short: string;
    image: string;
};

export type ExperienceProps = {
    name: string;
    company: string;
    type: string;
    startDate: string;
    endDate: string | null;
    image: string | null;
    isPresent: boolean;
};

export type EducationProps = {
    name: string;
    description: string;
    startDate: string;
    endDate: string | null;
    image: string | null;
    isPresent: boolean;
};

export type SkillsProps = {
    name: string;
    stars: number;
    svgIcon: React.ReactNode;
    type: SkillType[];
};
