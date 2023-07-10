import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import './lib/i18n';

/* CSS */
import './index.css';

/* Pages */
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    </React.StrictMode>
);
