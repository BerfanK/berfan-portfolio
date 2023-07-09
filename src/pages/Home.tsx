import { Fragment } from 'react';

/* Sections */
import Hero from '../components/static/pages/home/sections/Hero';
import Projects from '../components/static/pages/home/sections/Projects';
import Skills from '../components/static/pages/home/sections/Skills';
import Experiences from '../components/static/pages/home/sections/Experiences';
import Education from '../components/static/pages/home/sections/Education';

export default function Home() {
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
