
//ThirdParty
import {ethers} from 'ethers'

//App
import {handleAccountsChanged} from '../../helpers/metamaskHelpers'
declare const window :any;

function RequestAccount(){

    export function handleAccountsChanged(accounts, currentAccount) {
        if (accounts.length === 0) {
          // MetaMask is locked or the user has not connected any accounts
          console.log("Please connect to MetaMask.");
        } else if (accounts[0] !== currentAccount) {
          currentAccount = accounts[0];
          // Do any other work!
        }
      }

    //handlers
    const handleReqAccountClick =()=>{
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        let currentAccount = null;
    
        ethereum
          .request({ method: "eth_accounts" })
          .then(handleAccountsChanged)
          .catch((err) => {
    
            console.error(err);
          });
    }
    return <div>
        <button onClick={handleReqAccountClick}>Connect to Metamask</button>
    </div>
}

export default RequestAccount