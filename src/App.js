import './App.css';
// import styled from 'styled-components';
// import { useState } from 'react';
// import { Counter2 } from 'components/Counter';
import { Button } from 'components/Button';
function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Button percent={10} onClick={()=>console.log("Clickkkk")}><span>Click</span>Me</Button>
      <Button boderColor="red" percent={-109}>109%</Button>
      <Button textColor="white" bgColor="transparent" boderColor="white">0%</Button>
      <Button width={77} height={32} textColor="white" bgColor="#5429FF">Following</Button>
      <Button width={77} height={32} textColor="#5429FF" bgColor="rgba(84, 41, 255, 0.1)">Follow</Button>
      
      </header>
    </div>
  );
}

export default App;
