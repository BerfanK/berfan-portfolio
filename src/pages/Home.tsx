import { Fragment, useEffect, useState } from 'react';

/* Sections */
import Hero from '../components/static/pages/home/Hero';
import Projects from '../components/static/pages/home/Projects';
import Skills from '../components/static/pages/home/Skills';
import Experiences from '../components/static/pages/home/Experiences';
import Education from '../components/static/pages/home/Education';

export default function Home() {
    const [to, setTo] = useState('' as string);

    useEffect(() => {
        const to = new URLSearchParams(window.location.search).get('to');
        if (to) {
            const element = document.getElementById(to);
            if (element) {
                element.scrollIntoView();
            }

            setTo(to);
        }
    }, [to]);

    return (
        <Fragment>
            <Hero />
            <Projects />
            <Skills />
            <Experiences />
            <Education />
        </Fragment>
    );
}
