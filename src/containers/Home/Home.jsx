import React from "react";
import styled from "styled-components";
import Card from "components/Card";
import { PrimaryLayout } from "components/Layout";
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
    width: 350px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
`;
const Home = () => {
  return (
    <PrimaryLayout>
      <AppWrapper>
        <header className="App-header">
          <div className="card-wrapper">
            <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
            <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
            <Card title={"Revenue"} amount="4.02" percent={12.3}></Card>
            <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
          </div>
        </header>
      </AppWrapper>
    </PrimaryLayout>
  );
};
export default Home;
