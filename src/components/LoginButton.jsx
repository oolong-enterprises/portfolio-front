import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const LoginButton = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLoggedIn) {
      logout();
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="ml-[10vw]">
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white py-3 px-6 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg"
      >
        {isLoggedIn ? "Log Out" : "Login"}
      </button>
    </div>
  );
};

export default LoginButton;
