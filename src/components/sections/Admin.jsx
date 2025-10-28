import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import CustomerTable from "../CustomerTable";
import BackButton from '../BackButton';

export const Admin = () =>{

  return (
  <section className="flex flex-col min-h-screen">
    <CustomerTable />

    <div className="mt-auto flex justify-front space-x-4 pl-4 pb-4">

      <BackButton/>
      
    </div>
  </section>
);

}