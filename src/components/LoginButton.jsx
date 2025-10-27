import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const LoginButton = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="ml-[10vw]">
      <Link
        to={isLoggedIn ? "/admin" : "/login"}
        className="bg-blue-500 text-white py-3 px-6 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg">
        {isLoggedIn ? "Admin" : "Login"}
      </Link>
    </div>
  );
};

export default LoginButton;