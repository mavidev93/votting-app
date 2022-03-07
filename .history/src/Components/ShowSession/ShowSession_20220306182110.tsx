//React
import { useContext, useEffect, useState } from "react";

//App
import { useSession } from "../../Context/SessionContext";

function ShowSession() {
  const { session } = useSession();

  const [sessionText, setSessionText] = useState<undefined | string>();

  useEffect(() => {
    sessionTxt(session);
  }, [session]);

  return <>{sessionText && <div className="	">{sessionText} session</div>}</>;

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
