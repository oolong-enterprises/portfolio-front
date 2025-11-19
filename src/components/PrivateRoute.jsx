import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { LoadingScreen } from "./LoadingScreen";

const PrivateRoute = ({ children, requiredRole }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn, userRole, setIsLoggedIn, setUserRole }  = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("https://portfolio-backend-3zgg.onrender.com/v1/checkAuth", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) throw new Error("Not authenticated");

        const data = await res.json();

        setIsLoggedIn(res.ok);
        setUserRole(data.role);
      } catch {
        setIsLoggedIn(false);
        setUserRole(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [setIsLoggedIn, setUserRole]);

  if (isLoading) {
    return <LoadingScreen/>;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;