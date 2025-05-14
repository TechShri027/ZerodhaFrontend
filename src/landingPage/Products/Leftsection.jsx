import React from 'react'

const Leftsection = ({ImageUrl, productName, productDescription,TryDemo,LearnMore,GooglePlay, AppStore}) => {
  return (
    <div className='container mt-5 '>
      <div className="row  ">
        <div className="col-5 mt-5">
<img src={ImageUrl} alt="" />
        </div>
        <div className="col-2"></div>
        <div className="col-5 mt-5 ">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className='mt-4'>
          <a href={TryDemo} style={{textDecoration:"none"}}>TryDemo</a>
          <a href={LearnMore}style={{marginLeft:"10%", textDecoration:"none"}}>LearnMore</a>
          </div>
          <div className='mt-4'>
            <a href={GooglePlay} ><img src="/Image/googlePlayBadge.svg" alt="" /></a>
            <a href={AppStore} style={{marginLeft:"10%"}}><img src="/Image/appstoreBadge.svg" alt="" />
            </a>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Leftsection