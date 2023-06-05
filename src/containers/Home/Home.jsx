import React, {useState} from "react";
import styled from "styled-components";
import Card from "components/Card";
import { PrimaryLayout, AntLayout } from "components/Layout";
import { Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slide1 from "assets/slide1.jpeg";
import slide2 from "assets/slide2.jpeg";
import slide3 from "assets/slide3.jpeg";
import {useStore} from "state";

const CustomButton = styled(Button)`
  background-color: #6ced99;
`

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
  .user-info {
    color: white;
    font-size: 28px;
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
  const dispatch = useDispatch();
  const [newName, setNewname] = useState("");
  const rename = () => {
    dispatch.auth.setUsername(newName);
  }
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  return (
      <AppWrapper>
        <header className="App-header">
        <h1>{bears} around here...</h1>
        <Button onClick={increasePopulation}>Increase</Button>
          <Input style={{width: 300, marginTop: '40px'}} onChange={(e) => setNewname(e.target.value)}></Input> <Button onClick={rename}>Rename</Button>
        </header>
      </AppWrapper>
  );
};
export default Home;
