export  function handleAccountsChanged(accounts,currentAccount) {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== currentAccount) {
      currentAccount = accounts[0];
      // Do any other work!
    }
  }

  export function requestAccounts(provider){
    ethereum
    .request({ method: "eth_accounts" })
    .then(handleAccountsChanged)
    .catch((err) => {

      console.error(err);
    });

  const contract = new ethers.Contract(
    votingProposalsAddress,
    VotingProposals.abi,
    provider
  );
  }