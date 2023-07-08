import React from 'react'
import ReactDOM from 'react-dom/client'

/* CSS */
import './index.css'

/* Pages */
import Home from './pages/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
