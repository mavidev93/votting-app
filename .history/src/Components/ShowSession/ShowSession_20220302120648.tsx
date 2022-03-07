//React
import { useContext, useState } from "react";

//App
import { useSession } from "../../Context/SessionContext";

function ShowSession() {
  const { session } = useSession();
  const [sessionText, setSessionText] = useState(session);

function se

  return (
    <>
      {sessionText && (
        <div className="border-none  	 rotate-90 p-2 font-header	uppercase  text-white rounded-t-sm		origin-bottom-left	  absolute top-50 bg-cyan-700 left-0 ">
          register voter
        </div>
      )}
    </>
  );
}

export default ShowSession;
