import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Jo from './pages/Jo.tsx';
//REACT TOASTIFY-BÓL HÚÚÚÚZZUK BE!!!!!!!!!!!!!
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<Jo/>}/>
    </Routes>
    </BrowserRouter>
 <ToastContainer theme='colored'/>
  </StrictMode>,
)
