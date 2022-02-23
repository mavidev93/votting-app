//app
import RegisterVoter from "../../Components/RegisterVoter";

function Admin() {
  return (
    <div>
      <div className="container flex flex-col">
        <h3>Admin</h3>
        <RegisterVoter />
      </div>
    </div>
  );
}

export default Admin;
