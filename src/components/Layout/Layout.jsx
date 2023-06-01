import Header from "components/Header";
import styled from "styled-components";
import {SideBar} from "components/SideBar";
import {Helmet} from "react-helmet";
import { Outlet } from 'react-router-dom';

const LayoutStyled = styled.div`
  background-color: #CAEAE6;
  min-height: 100vh;
  .right {
    float: right;
    width: 80%;
  }
`;
const ContentStyled = styled.div`
  margin-top: 130px;
  height: 100vh;
`;
const SideBarStyled = styled.div`
  float: left;
  width: 20%;
`;

const PrimaryLayout = ({ title }) => {
  return (
    <LayoutStyled>
      <Helmet>
      <title>{title}</title>
      <meta name="description" content="" />
    </Helmet>
      <SideBarStyled>
        <SideBar></SideBar>
      </SideBarStyled>
      <div className="right">
        <Header />
        <ContentStyled><Outlet></Outlet></ContentStyled>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;
