import React from 'react';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects'; // Importar el nuevo componente
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header__content">
          <h1 className="header__title">Victor Manuel Uicab Nahat</h1>
          <p className="header__subtitle">Ingeniero en Sistemasx</p>
          <nav className="header__nav" aria-label="Navegación principal">
            <ul className="header__nav-list">
              <li className="header__nav-item"><a href="#sobre-mi" className="header__nav-link">Sobre Mí</a></li>
              <li className="header__nav-item"><a href="#proyectos" className="header__nav-link">Proyectos</a></li>

              {/* <li className="header__nav-item"><a href="#experiencia" className="header__nav-link">Experiencia</a></li> */}
              <li className="header__nav-item"><a href="#educacion" className="header__nav-link">Educación</a></li>
              <li className="header__nav-item"><a href="#contacto" className="header__nav-link">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main">
        <AboutMe />
        <Experience />
        <Projects />

        <Education />
        <Contact />
      </main>

      <footer className="footer">
        <p className="footer__text">&copy; 2024 Victor Manuel Uicab Nahat. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;