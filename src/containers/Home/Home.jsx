import React from "react";
import styled from "styled-components";
import Card from "components/Card";
import { PrimaryLayout } from "components/Layout";
import {Button} from "components/Button";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slide1 from "assets/slide1.jpeg";
import slide2 from "assets/slide2.jpeg";
import slide3 from "assets/slide3.jpeg";

const AppWrapper = styled.div`
  text-align: center;
  .button-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 13px;
    color: #27262e;
  }
  .card-wrapper {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  .slide {
    //position: relative;
    display: flex;
    justify-content: center;
    img {
      //position: absolute ;
    }
  }
  .text-center {
    position: absolute;
    margin-left: 40px;
    .large-text {
      font-weight: 700;
      font-size: 54px;
      line-height: 120%;
      /* or 65px */

      letter-spacing: -0.02em;

      color: #FFFFFF;
    }
  }
`;
const fakeData = [
  {
    title: "Revenue",
    amount: 5.0,
    percent: 12.3,
  },
  {
    title: "Spending",
    amount: 2.0,
    percent: 12.3,
  },
  {
    title: "ROI",
    amount: 14.2,
    percent: 12.3,
  },
  {
    title: "Estimated",
    amount: 7.0,
    percent: 3.2,
  },
];
const Home = () => {
  return (
    <PrimaryLayout>
      <AppWrapper>
        <header className="App-header">
          <Carousel width={716} showThumbs={true}>
            <div className="slide">
              <img src={slide1} alt=""/>
              <div className="text-center">
                <p className="large-text">Discover, Create and Sell Your Own NFT.</p>
                <Button>Discover</Button>
                <Button>Create</Button>
              </div> 
            </div>
            <div className="slide">
              <img src={slide2} alt="" />
            </div>
            <div className="slide">
              <img src={slide3} alt="" />
            </div>
          </Carousel>
          <div className="card-wrapper">
            {fakeData.map((item) => (
              <Card
                title={item.title}
                amount={item.amount}
                percent={item.percent}
              ></Card>
            ))}
          </div>
        </header>
      </AppWrapper>
    </PrimaryLayout>
  );
};
export default Home;
