import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex h-screen">
            <div className="flex flex-col flex-1 overflow-y-auto">
                <Navigation />
                <main className="flex-grow container py-10">{children}</main>
                <Footer />
            </div>
        </div>
    );
}
