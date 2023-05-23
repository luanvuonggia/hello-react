import './App.css';
import styled from 'styled-components';
// import { useState } from 'react';
// import { Counter2 } from 'components/Counter';

import { Button } from 'components/Button';
import Card from 'components/Card';
import plusIcon from 'assets/plus.svg'
import rightArrow from 'assets/right-arrow.svg'
const AppWrapper = styled.div`
  text-align: center;
  .button-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 13px;
    color: #27262E;
  }
`;
function App() {

  return (
    <AppWrapper>
      <header className="App-header">
      <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
      {/* <Button 
        width={196}
        height={49}
        textColor="black"
        borderRadius="12px"
      >
        <div className="button-content">
          <img src={plusIcon} alt="plus-icon"></img>
          Top Up Balance
          <img src={rightArrow} alt="arrow-icon"></img>
        </div>
        </Button> */}
      </header>
    </AppWrapper>
  );
}

export default App;
