export type NavigationItem = {
    name: string;
    href: string;
    activeIcon: React.ReactNode;
    defaultIcon: React.ReactNode;
    alignment: 'left' | 'right';
};