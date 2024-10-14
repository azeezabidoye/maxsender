"use client";
import { useState } from "react";
import { Importer, ImporterField } from "react-csv-importer";

export default function Home() {
  const [payments, setPayments] = useState(undefined);
  const [sending, setSending] = useState(false);

  const sendPayments = async () => {
    console.log("Sending payments...");
    console.log(payments);
    console.log(payments.length);
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
