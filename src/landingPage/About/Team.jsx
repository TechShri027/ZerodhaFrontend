import React from 'react'

const Team = () => {
  return (
    <div className='container border-top '>
    <div className="row p-5 " >
      <h1 className='fs-1 text-center mt-5'>People</h1>
    </div>

    <div className="row p-5 " style={{lineHeight:"1.8rem"}} >
     <div className="col-6 p-5 text-center" >
     <img src="/Image/shree.jpg" width={"65%"} style={{borderRadius:"100%"}} alt="" />
     <h3 className='text-muted mt-3'>Shrishti Bansal</h3>
<h6 className='text-muted mt-3 '>Software Developer</h6>

     </div>
     <div className="col-6  p-5">
<p className='text-muted'>Shrishti bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
<p className='text-muted'>She is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
<p className='text-muted '>
Playing basketball is her zen.
</p>
<p className='text-muted'>Connect on  <a href="" style={{textDecoration:"none"}}> Homepage / TradingQnA / Twitter</a></p>
     </div>
    </div>
  </div>
  )
}

export default Team