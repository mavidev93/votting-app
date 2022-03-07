//app
import RegisterUser from "../../Components/RegisterUser/RegisterUser";
import ChangeSession from "../../Components/ChangeSession/ChangeSession";
import {useSession} from '../../Context/SessionContext'
function Admin() {

  const {ses}
  return (
    <>

      <RegisterUser />
      <ChangeSession />
    </>
  );
}

export default Admin;
