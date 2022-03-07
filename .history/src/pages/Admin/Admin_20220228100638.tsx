//app
import RegisterUser from "../../Components/RegisterUser/RegisterUser";
import ChangeSession from "../../Components/ChangeSession/ChangeSession";
import {useSession} from ''
function Admin() {
  return (
    <>
      <RegisterUser />
      <ChangeSession />
    </>
  );
}

export default Admin;
