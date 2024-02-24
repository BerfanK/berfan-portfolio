import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './lib/i18n';

/* CSS */
import './index.css';

/* Pages */
import Maintenance from './pages/Maintenance.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Maintenance />} />
            </Routes>
            {/*
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                </Routes>
            </Layout>
            */}
        </BrowserRouter>
    </React.StrictMode>
);
