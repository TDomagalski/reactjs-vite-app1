import { createContext, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './styles/css/index.css';
import Navigation from './components/Navigation';
import PageAbout from './pages/PageAbout';
import PageContact from './pages/PageContact';
import PageHome from './pages/PageHome';
import PageNotFound from './pages/PageNotFound';

// import createContext hook from react and create <ThemeContext.Provider> and wrap whoal App function
export const ThemeContext = createContext(null);

function App() {
  // create useState hook to change light <-> dark
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    // function setTheme dark <-> light from useState hook
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    // function toggleTheme change value in theme variable
    <ThemeContext.Provider value={theme}>
      {/* in id prop inject theme variable */}
      <div className="App" id={theme}>
        <div className="App_optionbar">
          <button
            type="submit"
            className="btn_theme"
            onClick={() => toggleTheme()}
          >
            <div className="btn_theme-circle" />
          </button>
        </div>
        <div className="App_main">
          <div id="App_navigation" className="close">
            <Navigation />
          </div>
          <div id="App_content">
            <Routes>
              <Route path="/" element={<PageHome />} />
              <Route path="/about" element={<PageAbout />} />
              <Route path="/contact" element={<PageContact />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;
