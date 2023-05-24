import styled from "styled-components";

const HeaderStyled = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between ;
  background-color: aqua ;
`;
const Header = () => {
  return (
    <HeaderStyled>
        <div ></div>
        <div><span>noti</span><span>avatar</span></div>  
    </HeaderStyled>
  );
};

export default Header;
