"use client";
import { useState } from "react";
import { Importer, ImporterField } from "react-csv-importer";
import { ethers } from "ethers";

const blockchainExplorerUrl = {
  2810: "https://rpc-quicknode-holesky.morphl2.io",
};

export default function Home() {
  const [payments, setPayments] = useState(undefined);
  const [sending, setSending] = useState(false);
  const [blockchainExplorer, setBlockchainExplorer] = useState(undefined);

  const sendPayments = async () => {
    // Connect to Metamask
    const provider = new ethers.BrowserProvider(windows.ethereum);
    const signer = await provider.getSigner();
    const { chainID } = await provider.getNetwork();
    setBlockchainExplorer(blockchainExplorerUrl[chainID.toString()]);

    // Show feedback to users
    setSending(true);
    // Format arguements for smart contract => Convert CSV row to column
    // Send transaction
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
          </div>
        </div>
      </div>
    </>
  );
}
