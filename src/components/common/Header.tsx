import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SymbolLogo from '../../assets/SymbolLogo';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeaderContainer>
      <div role="button" onClick={() => navigate('/')}>
        <SymbolLogo />
      </div>
      <StyledSearchBar>
        <input type="text" placeholder="검색" />
        <div role="button" onClick={() => navigate('/searchpage')}>
          검색
        </div>
      </StyledSearchBar>
      <StyledUserInfo>
        <li>
          <Link to="/loginPage">로그인</Link>
        </li>
        {/* <li>
          <Link to="/">회원가입</Link>
        </li> */}
      </StyledUserInfo>
    </StyledHeaderContainer>
  );
};

const StyledHeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border-bottom: 1px solid #ececec;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    & div {
      margin: 0 auto 8px;
    }
  }
`;
const StyledSearchBar = styled.div`
  width: 40%;
  height: 35px;
  display: flex;
  margin: 4px 0 0 90px;
  position: relative;
  & input {
    width: 100%;
    border-radius: 10px;
    border: 1.5px solid #0e0171;
    padding-left: 20px;
  }
  & div {
    position: absolute;
    right: 0;
    height: 35px;
    width: 15%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: white;
    background-color: #0e0171;
    font-size: 18px;
    cursor: pointer;
  }
  @media screen and (max-width: 1080px) {
    margin: 4px 0 0 30px;
    & div {
      font-size: 16px;
      width: 23%;
    }
  }
  @media screen and (max-width: 500px) {
    display: flex;
    width: 100%;
  }
`;
const StyledUserInfo = styled.ul`
  display: flex;
  position: relative;
  // top: 0px;
  width: 20%;
  font-size: 1.2rem;
  align-items: center;
  flex-wrap: wrap;
  & li {
    margin: 0 0 0 25%;
    list-style: none;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default Header;
