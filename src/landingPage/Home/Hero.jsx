import React from 'react'

function Hero() {
  return (
   <div className='container p-5 mb-3' >
    <div className='row text-center'>
      <img src="/Image/homeHero.png" alt="Hero-img" className='mb-5' />

      <h1 className='mt-5'>Invest in everything</h1>
      <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      <button className='p-2 btn btn-primary fs-5' style={{width:"22%"  , margin: "0px auto"}}>SignUp Now</button>
    </div>

   </div>

  )
}

export default Hero