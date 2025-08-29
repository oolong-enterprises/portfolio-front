import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("https://portfolio-backend-3zgg.onrender.com/v1/checkAuth", {
          method: "GET",
          credentials: "include",
        });

        setIsLoggedIn(res.ok);
      } catch {
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [setIsLoggedIn]);

  if (isLoading) {
    return <div>Loading...</div>; // show spinner or placeholder
  }

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
