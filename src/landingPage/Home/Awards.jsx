import React from 'react'

function Awards() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
    <img src="/Image/largestBroker.svg" alt="Awards-img" className='mt-5'/>
        </div>
        <div className='col-6 p-5'>
          <h1 className='mt-5'>Largest stock broker in India</h1>
          <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
          <div className='row'>
            <div className='col-6 mt-3'>
            <ul>
            <li>Futures and Options</li>
            <li className='mt-3'>Commodity derivatives</li>
            <li className='mt-3'>Currency derivatives</li>
            </ul>
            </div>


            <div className='col-6 mt-3'>
            <ul>
            <li>Stocks & IPOs</li>
            <li className='mt-3'>Direct mutual funds</li>
            <li className='mt-3'>Bonds and Govt. Securities</li>
            </ul>
            </div>
          </div>
            <img src="/Image/pressLogos.png" alt="" style={{width:"90%"}} />
        </div>
      </div>
    </div>
  )
}

export default Awards