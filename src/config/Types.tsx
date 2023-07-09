import { SkillType } from './Enums';

export type ExperienceProps = {
    name: string;
    company: string;
    type: string;
    date: string;
    image: string | null;
    isPresent: boolean;
};

export type EducationProps = {
    name: string;
    description: string;
    date: string;
    image: string | null;
    isPresent: boolean;
};

export type SkillsProps = {
    name: string;
    stars: number;
    svgIcon: React.ReactNode;
    type: SkillType[];
};
