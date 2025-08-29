import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import CustomerTable from "../CustomerTable";
import BackButton from '../BackButton';

export const Admin = () =>{

    const { setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
  try {
    await fetch("https://portfolio-backend-3zgg.onrender.com/v1/logout", {
      method: "POST",
      credentials: "include",
    });
  } catch (err) {
    console.error("Error logging out", err);
  } finally {
    setIsLoggedIn(false);
    navigate("/login");
  }
};


  return (
  <section className="flex flex-col min-h-screen">
    <CustomerTable />

    <div className="mt-auto flex justify-front space-x-4 pl-4 pb-4">

      <BackButton/>
      
      <button
        onClick={handleLogout}
        className="bg-blue-500 text-white py-3 px-6 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg"
      >
        Logout
      </button>
      
    </div>
  </section>
);
}