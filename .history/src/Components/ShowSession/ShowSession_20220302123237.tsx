//React
import { useContext, useEffect, useState } from "react";

//App
import { useSession } from "../../Context/SessionContext";

function ShowSession() {
  const { session } = useSession();

  const [sessionText, setSessionText] = useState(session);

    useEffect( ()=>{
        sessionTxt(session)
    }, [])

  return (
    <>
      {sessionText && (
        <div className="border-none  	 rotate-90 p-2 font-header	uppercase  text-white rounded-t-sm		origin-bottom-left	  absolute top-50 bg-cyan-700 left-0 ">
          sessionText
        </div>
      )}
    </>
  );

  //   sessionsArr = ["registerUsers", "sendProposals","getVotes","showResults"]
  function sessionTxt(session) {
    let text: string;
    switch (session) {
      case "registerUsers":
        text = "register Users";
        break;
      case "sendProposals":
        text = "send Proposals";
        break;
      case "getVotes":
        text = "vote";
        break;
      case "showResults":
        text = "showing results";
        break;
      default:
        text = null;
    }

    setSessionText(text);
  }
}

export default ShowSession;
