import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <main className={location.pathname === '/' ? 'py-0': 'py-3'}>
        {/* Check if the current path is '/' */}
        {location.pathname === '/' ? (
          <Outlet />  // Render Outlet outside the Container
        ) : (
          <Container>
            <Outlet />  {/* Render Outlet inside the Container for other paths */}
          </Container>
        )}
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
