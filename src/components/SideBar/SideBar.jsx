import styled from "styled-components";
import { ReactComponent as MarketIcon } from "assets/market-icon.svg";
import { NavLink } from "react-router-dom";
import { Logo } from "components/Logo";
const StyledLogo = styled(Logo)`
  margin:20px 0 20px;
`
const StyledSideBar = styled.div`
  background-color: white;
  height: 100vh;
  padding: 32px;
  .sidebar-menu {
    margin-bottom: 24px;
    font-weight: bold;
  }
`;
const StyledNavItem = styled.div`
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7a797d;
  margin-bottom: 25px;
  a {
    display: flex;
    align-items: center;
    text-decoration: unset;
    color: #7a797d;
  }
  .active {
    svg {
      path {
        stroke: #f30ee4;
      }  
    }
    color: #f30ee4;
  }
  .item-text {
    margin-left: 12px;
  }
`;
const NavItem = ({ text, path }) => {
  return (
    <StyledNavItem>
      <NavLink to={path}>
        <MarketIcon />
        <span className="item-text">{text}</span>
      </NavLink>
    </StyledNavItem>
  );
};
export const SideBar = () => {
  return (
    <StyledSideBar>
      <StyledLogo></StyledLogo>
      <div className="nav">
        <NavItem text="Home" path="/"></NavItem>
        <NavItem text="About" path="/about"></NavItem>
        <NavItem text="Login" path="/login"></NavItem>
        <div className="sidebar-menu">PROFILE</div>
        <NavItem text="Home" path="/sdsad"></NavItem>
        <NavItem text="About" path="/abasdsadout"></NavItem>
        <NavItem text="Login" path="/lodsasdgin"></NavItem>
        <NavItem text="Home" path="/asdsad"></NavItem>
        <div className="sidebar-menu">Other</div>
        <NavItem text="Light Mode" path="asmdklasm"></NavItem>
      </div>
    </StyledSideBar>
  );
};
