"use client";
import { useState } from "react";
import { Importer, ImporterField } from "react-csv-importer";
import { ethers, Contract } from "ethers";

// Import Contract ABI
import { abi } from "../../foundary/out/Maxsender.sol/Maxsender.json";

const contractAddress = "0x279AD96a13998dE7E6511f6F5AB9bD358b1453Ca";

const blockchainExplorerUrl = {
  2810: "https://rpc-quicknode-holesky.morphl2.io",
};

export default function Home() {
  const [payments, setPayments] = useState(undefined);
  const [sending, setSending] = useState(false);
  const [blockchainExplorer, setBlockchainExplorer] = useState(undefined);
  const [error, setError] = useState(false);
  const [transaction, setTransaction] = useState(false);

  const sendPayments = async () => {
    // Connect to Metamask
    const provider = new ethers.BrowserProvider(windows.ethereum);
    const signer = await provider.getSigner();
    const { chainID } = await provider.getNetwork();
    setBlockchainExplorer(blockchainExplorerUrl[chainID.toString()]);

    // Show feedback to users
    setSending(true);
    // Format arguements for smart contract => Convert CSV row to column
    const { recipients, amounts, total } = payments.reduce(
      (acc, val) => {
        acc.recipients.push(val.recipients);
        acc.amounts.push(val.amounts);
        acc.total += parseInt(val.amounts);
        return acc;
      },
      {
        recipients: [],
        amounts: [],
        total: 0,
      }
    );
    // Send transaction
    const maxsenderContract = new Contract(contractAddress, abi, signer);
    try {
      const transaction = await maxsenderContract.sendToken(
        recipients,
        amounts,
        { Value: total }
      );
      const transactionReceipt = await transaction.wait();
      setTransaction(transactionReceipt.hash);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <>
      <div className="container-fluid mt-5 d-flex justify-content-center">
        <div id="content" className="row">
          <div id="content-inner" className="col">
            <div className="text-center">
              <h1 id="title" className="fw-bold">
                MAXSENDER
              </h1>
              <p id="sub-title" className="mt-4 fw-bold">
                Send many payments <br /> <span>in just one transaction</span>
              </p>
            </div>
            <Importer
              dataHandler={(rows) => setPayments(rows)}
              defaultNoHeader={false} // optional, keeps "data has headers" checkbox off by default
              restartable={false} // optional, lets user choose to upload another file when import is complete
            >
              <ImporterField name="recipient" label="recipient" />
              <ImporterField name="amount" label="amount" />
              <ImporterField name="asset" label="asset" />
            </Importer>
            <div className="text-center">
              <button
                className="btn btn-primary mt-5"
                onClick={sendPayments}
                disabled={sending || typeof payments === "undefined"}
              >
                Send transactions
              </button>
            </div>
            {sending && (
              <div className="alert alert-info mt-4 mb-0">
                Please wait while your transaction is being processed...
              </div>
            )}
            {transaction && (
              <div className="alert alert-success mt-4 mb-0">
                Congrats! Transaction is succesful. <br />
                <a
                  href={`${blockchainExplorerUrl}/${transaction}`}
                  target="_blank"
                >{`${transaction.subStr(0, 20)}`}</a>
              </div>
            )}
            {error && (
              <div className="alert alert-danger mt-4 mb-0">
                Oops...there was an error. Please try agaiamn later!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
