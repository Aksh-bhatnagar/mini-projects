import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row text-muted">
        <h1 className="fs-4 text-center">People</h1>
      </div>
      <div className="row p-5 fs-6">
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinkamath.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h5 className="pt-3">Nithin Kamath</h5>
          <h5 className="text-muted fs-6 p-3">Founder, CEO</h5>
        </div>
        <div className="col-6 p-5 mt-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
