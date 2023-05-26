import styled from "styled-components";
import { ReactComponent as MarketIcon } from "assets/market-icon.svg";
import {NavLink} from "react-router-dom";
import {Logo} from "components/Logo";
const StyledSideBar = styled.div`
  background-color: white ;
  height: 100vh;
  padding: 32px;
  .logo {
    margin-bottom: 54px;
  }
  svg {
    path {
      stroke: #f30ee4;
    }
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
      <MarketIcon />
      <NavLink to={path}>{text}</NavLink>
    </StyledNavItem>
  )
}
export const SideBar = () => {
  return (
    <StyledSideBar>
        <Logo className="logo"></Logo>
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