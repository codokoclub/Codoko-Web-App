import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// react router configuration

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import AboutPage from './components/AboutUs/AboutPage.jsx';
import Certificate from './components/CertificateVerification/Certificate.jsx';
import DashboardPage from './components/Dashboard/DashboardPage.jsx';
import CouncilLogin from './components/CouncilLogin/CouncilLogin.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<HomePage />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='councillogin' element={<CouncilLogin />} />
      <Route path='certificate' element={<Certificate />} />
      <Route path='dashboard' element={<DashboardPage />} />
      {/* <Route path='user/:userid' element={<User />} /> */}


    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
