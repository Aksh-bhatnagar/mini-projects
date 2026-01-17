import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row mt-5">
        <h3>To create a ticket, select a relevent topic</h3>
      </div>
      <div className="row">
        <div className="d-flex flex-column justify-content-between col-4 p-5">
          <h5 className="mb-5"><i class="fa-solid fa-circle-plus"></i> Account Opening</h5>
          <a href='' style={{textDecoration:"none"}}>Resident individual</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Minor</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Non Resident Indian (NRI)</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Company, Partnership, HUF and LLP</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Glossary</a>
          <br/>
        </div>
        <div className="d-flex flex-column justify-content-between col-4 p-5">
          <h5 className="mb-5"><i class="fa-regular fa-circle-user"></i> Your Zerodha Account</h5>
          <a href='' style={{textDecoration:"none"}}>Your Profile</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Account modification</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Client Master Report (CMR) and Depository Participant (DP)</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Nomination</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Transfer and conversion of securities</a>
          <br/>
        </div>
        <div className="d-flex flex-column justify-content-between col-4 p-5">
          <h5 className="mb-5"><i class="fa-solid fa-chart-line"></i> Kite</h5>
          <a href='' style={{textDecoration:"none"}}>IPO</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Trading FAQs</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Margin Trading Facility (MTF) and Margins</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Charts and orders</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Alerts and Nudges</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>General</a>
          <br/>
        </div>
      </div>
      <div className="row">
        <div className="d-flex flex-column justify-content-between col-4 p-5">
          <h5 className="mb-5"><i class="fa-regular fa-credit-card"></i> Funds</h5>
          <a href='' style={{textDecoration:"none"}}>Add money</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Withdraw money</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Add bank accounts</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>eMandates</a>
          <br/>
        </div>
        <div className="d-flex flex-column justify-content-between col-4 p-5">
          <h5 className="mb-5"><i class="fa-solid fa-circle-notch"></i> Console</h5>
          <a href='' style={{textDecoration:"none"}}>Portfolio</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Corporate actions</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Funds statement</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Reports</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Profile</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Segments</a>
          <br/>
        </div>
        <div className="d-flex flex-column justify-content-between col-4 p-5">
          <h5 className="mb-5"><i class="fa-solid fa-coins"></i>  Coin</h5>
          <a href='' style={{textDecoration:"none"}}>Mutual funds</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>National Pension Scheme (NPS)</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Fixed Deposit (FD)</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Features on Coin</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>Payments and Orders</a>
          <br/>
          <a href='' style={{textDecoration:"none"}}>General</a>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
