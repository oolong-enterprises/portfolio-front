import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem("isLoggedIn");
    return saved === "true"; 
  });
  const [userName, setUserName] = useState(null);

  const logout = async () => {
    try {
      await fetch("https://portfolio-backend-3zgg.onrender.com/v1/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error("Error logging out", err);
    } finally {
      setIsLoggedIn(false);
      setUserName(null);
    }
  };

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, setIsLoggedIn, 
      userName, setUserName,
      logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);