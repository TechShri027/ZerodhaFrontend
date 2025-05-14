import React from 'react'

const Rightsection = ({ProductName,ProductDescription,LearnMore,ImageUrl}) => {
  return (
    <div><div className='container mt-5 '>
    <div className="row  ">

      <div className="col-6 mt-5">
        <h1 className='mt-5'>{ProductName}</h1>
        <p className='mt-5'>{ProductDescription}</p>
        <div className='mt-4'>
        <a href={LearnMore}style={{ textDecoration:"none"}}>LearnMore</a>
        </div>
      
      </div>
     

      <div className="col-6">
<img src={ImageUrl} alt="" width={"110%"}/>
      </div>
     
    </div>
  </div></div>
  )
}

export default Rightsection