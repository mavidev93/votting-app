

function RequestAccount(){


    //handlers
    const handleReqAccountClick =()=>{
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        // let currentAccount = null;
    
        // ethereum
        //   .request({ method: "eth_accounts" })
        //   .then(handleAccountsChanged)
        //   .catch((err) => {
    
        //     console.error(err);
        //   });
    }
    return <div>
        <button onClick={handleReqAccountClick}>Connect to Metamask</button>
    </div>
}

export default RequestAccount