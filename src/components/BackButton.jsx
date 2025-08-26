import { Link } from "react-router-dom";

const BackButton = () => {
  return (
      <Link
        to="/"
        className="bg-blue-500 text-white py-3 px-6 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg"
      >
        Back
      </Link>
  );
};

export default BackButton;