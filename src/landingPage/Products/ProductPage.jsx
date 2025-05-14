import React from "react";
import Hero from "../Products/Hero";
import Leftsection from "../Products/Leftsection";
import Rightsection from "../Products/Rightsection";
import Universe from "../Products/Universe";

const ProductPage = () => {
  return (
    <div>
      <Hero />
      <Leftsection
        ImageUrl="/Image/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        TryDemo=""
        LearnMore=""
        GooglePlay=""
        AppStore=""
      />
      <Rightsection
        ProductName="Console"
        ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        LearnMore=""
        ImageUrl="/Image/console.png"
      />
       <Leftsection
        ImageUrl="/Image/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        TryDemo=""
        LearnMore=""
        GooglePlay=""
        AppStore=""
      />
       <Rightsection
        ProductName="Kite Connect API"
        ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.."
        LearnMore=""
        ImageUrl="/Image/kiteconnect.png"
      />
             <Leftsection
        ImageUrl="/Image/varsity.png"
        productName="Versity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        TryDemo=""
        LearnMore=""
        GooglePlay=""
        AppStore=""
      />
      <p className="text-center mt-5 fs-5 mb-5">Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a> blog.</p>
      <Universe />
    </div>
  );
};

export default ProductPage;
