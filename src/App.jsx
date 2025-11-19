import { useState, useEffect } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/mobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import PrivateRoute  from './components/PrivateRoute';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Login } from './components/sections/Login';
import { Admin } from './components/sections/Admin';
import { Blog } from './components/sections/Blog';
import BlogPostPage from './components/sections/BlogPostPage';
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Routes>
          {/* Public routes */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/login" element={<Login />} />

          {/* Admin-protected routes */}
          <Route
            path="/admin"
            element={
              <PrivateRoute requiredRole="ADMIN">
                <Admin />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;