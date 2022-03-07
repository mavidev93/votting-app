//app
import RegisterUser from "../../Components/RegisterUser/RegisterUser";
import ChangeSession from "../../Components/ChangeSession/ChangeSession";
import { useSession } from "../../Context/SessionContext";
function Admin() {
  const { session } = useSession();
  return (
    <>
      {session === "registerUser" && <RegisterUser />}
      <ChangeSession />
    </>
  );
}

export default Admin;
