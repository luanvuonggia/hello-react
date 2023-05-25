import styled from "styled-components";
import logo from "assets/logo.svg";
import marketIcon from "assets/market-icon.svg";
import {NavLink} from "react-router-dom";
const StyledSideBar = styled.div`
  background-color: white ;
  height: 100vh;
  padding: 32px;
  .logo {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 54px;
  }
  .logo-text {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #27262E;
  }
  .logo-desc {
    font-size: 10px;
    line-height: 13px;
    color: #7A797D;

  }
  .sidebar-menu {
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #27262E;
  }
`;
const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7A797D;
  margin-bottom: 25px;
  a {
    text-decoration: unset;
    color: #7A797D;
  }
  
`;
const NavItem = ({text, path}) => {
  return (
    <StyledNavItem>
      <img src={marketIcon} alt="nav-icon"></img>
      <NavLink to={path}>{text}</NavLink>
    </StyledNavItem>
  )
}
export const SideBar = () => {
  return (
    <StyledSideBar>
        <div className="logo">
          <img src={logo} alt="logo"></img>
          <div>
            <div className="logo-text">MyNFT</div>
            <div className="logo-desc">NFT Marketplace</div>
          </div>
        </div>
        <div className="nav">
          <NavItem text="Home" path="/"></NavItem>
          <NavItem text="About" path="/about"></NavItem>
          <NavItem text="Login" path="/login"></NavItem>
          <div className="sidebar-menu">PROFILE</div>
          <NavItem text="Home" path="/"></NavItem>
          <NavItem text="About" path="/about"></NavItem>
          <NavItem text="Login" path="/login"></NavItem>
          <NavItem text="Home" path="/"></NavItem>
          <div className="sidebar-menu">Other</div>
          <NavItem text="Light Mode"></NavItem>
        </div>
    </StyledSideBar>
  );
};