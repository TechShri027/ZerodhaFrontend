import React from 'react'

const Hero = () => {
  return (
    <div  style={{backgroundColor:"#387ED1", color:"#fff", height:"70vh"}}>
    <div className='container  '>
      <div className="row p-5">
        <div className="col-6"><h1 className='fs-4'>Support Portal</h1></div>
        <div className="col-6"><h1 className='fs-4'>Track Tickets</h1></div>
      </div>
      <div className='row'>
        <div className="col-6">
          <p>Search for an answer or browse help topics to create a tickets</p>
          <input type="text" placeholder='Eg: how do I activate F&Q, why is my order getting rejected..' style={{width:"90%", height:"30%",marginRight:"5%", marginBottom:"5%"}}/>
          <a href="" style={{color:"#fff", marginRight:"5%"}}>Track account opening     </a><a href=""style={{color:"#fff", marginRight:"5%"}}>Track segment activation   </a><a href=""style={{color:"#fff" , marginRight:"5%"}}>Intraday  </a><a href=""style={{color:"#fff", marginRight:"5%"}}>Kite user manual   </a>
        </div>
        <div className="col-6">
          <h2>Features</h2>
          <ol  >
            <a href=""style={{color:"#fff"}}>Current takeover & Delisting-January 2025</a><br />
            <a href=""style={{color:"#fff"}}>Latest Intraday leverages MIS & CO</a>
          </ol>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero