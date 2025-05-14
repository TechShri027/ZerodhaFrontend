import React from 'react'

const Hero = () => {
  return (
    <div>
<div className='container border-bottom'>
      <div className='row p-5  text-center '>
      <h1 className='p-2'>Charges</h1>
      <p className='text-muted fs-6'>List of all charges and taxes</p>
      </div>
      <div className='row p-5 border-top mt-5' >

      <div className="col-4 text-center p-3" >
        <img src="Image/pricingEquity.svg" alt="" />
        <h1>Free equity delivery</h1>
        <p className='mt-4 text-muted p-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
      </div>
      <div className="col-4 text-center p-3">
        <img src="Image/intradayTrades.svg" alt="" />
        <h1>Intraday and F&O trades
        </h1>
        <p className='mt-4 text-muted p-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
      </div>
      <div className="col-4 text-center p-3">
        <img src="Image/pricing0.svg" alt="" />
        <h1>Free direct <br /> MF</h1>
        <p className='mt-4 text-muted p-3' >All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
      </div>
    </div>
    </div>
    </div>

  
  )
}

export default Hero