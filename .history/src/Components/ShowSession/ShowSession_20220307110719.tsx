//React
import { useEffect, useState } from "react";

//App
import { useSession } from "../../Context/SessionContext";

function ShowSession() {
  const { session } = useSession();

  const [sessionText, setSessionText] = useState<undefined | string>();

  useEffect(() => {
    sessionTxt(session);
  }, [session]);

  //--
  return (
    <>
      {sessionText && (
        <div
          className="text-center mt-5	 font-header uppercase italic py-2 shadow-lg
        "
        >
          {sessionText} session
        </div>
      )}
    </>
  );

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
