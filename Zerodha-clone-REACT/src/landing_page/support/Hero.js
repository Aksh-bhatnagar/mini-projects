import React from 'react'

function Hero() {
    return ( 
    <section className="container-fluid pb-3" id="supportHero">
    <div className='container'>
      <div className="mt-5 p-5" id='supportWrapper'>
        <h5>Support Portal</h5>
        <a href=''>Track Tickets</a>
      </div>
      <div className="row mb-5 p-5 pt-3">
        <div className='col-5 px-3'>
            <h3>Search for an answer or browse help topics to create a ticket</h3>
            <input placeholder='Eg. how do i activate F&O, why is my order getting rejected..'/><br/>
            <a href='#'>Track account opening</a>&nbsp;&nbsp;&nbsp;
            <a href='#'>Track segment activation</a>&nbsp;&nbsp;&nbsp;
            <a href='#'>Intraday margins</a>&nbsp;&nbsp;&nbsp;
            <a href='#'>Kite user manual</a>&nbsp;&nbsp;&nbsp;
        </div>
        <div className='col-1'></div>
        <div className='col-5 px-5 mx-5'>
            <h3>Featured</h3>
            <ol>
                <li className='mb-3'><a href='#'>Current Takeovers and Delisting - September 2025</a></li>
                <li className='mb-3'><a href='#'>Latest Intraday leverages - MIS & CO</a></li>
            </ol>
        </div>
      </div>
    </div>
    </section>
     );
}

export default Hero;