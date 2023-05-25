import React from "react";
import styled from "styled-components";
import Card from "components/Card";
import { PrimaryLayout } from "components/Layout";
import { useSearchParams } from "react-router-dom";
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
`;
const fakeData = [
  {
    title: "Revenue",
    amount: 5.00,
    percent: 12.3,
  },
  {
    title: "Spending",
    amount: 2.00,
    percent: 12.3,
  },
  {
    title: "ROI",
    amount: 14.2,
    percent: 12.3,
  },
  {
    title: "Estimated",
    amount: 7.00,
    percent: 3.2,
  }
]
const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams id', searchParams.get('id'));
  return (
    <PrimaryLayout>
      <AppWrapper>
        <header className="App-header">
          <div className="card-wrapper">
            {
              fakeData.map((item) => <Card title={item.title} amount={item.amount} percent={item.percent}></Card>)
            }
            {/* <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
            <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
            <Card title={"Revenue"} amount="4.02" percent={12.3}></Card>
            <Card title={"Revenue"} amount="5.00" percent={12.3}></Card> */}
          </div>
        </header>
      </AppWrapper>
    </PrimaryLayout>
  );
};
export default Home;
