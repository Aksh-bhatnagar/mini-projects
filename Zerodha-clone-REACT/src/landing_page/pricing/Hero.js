import React from 'react';

function Hero() {
    return ( 
        <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h3>Charges</h3>
        <h5 className='text-muted'>List of all charges and taxes</h5>
      </div>
     <div className="row p-5 mt-5 text-center border-bottom">
        <div className="col-4 p-5">
            <img src='media/images/pricingEquity.svg'/>
            <h3 className='pb-4 pt-2'>Free equity delivery</h3>
            <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-5">
            <img src='media/images/intradayTrades.svg'/>
            <h3 className='pb-4 pt-2'>Intraday and F&O trades</h3>
            <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-5">
            <img src='media/images/pricingEquity.svg'/>
            <h3 className='pb-4 pt-2'>Free direct MF</h3>
            <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
     );
}

export default Hero;