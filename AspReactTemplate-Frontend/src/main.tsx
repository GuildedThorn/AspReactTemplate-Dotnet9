import '@styles/index.css'

import App from '@routes/App'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App/>} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)