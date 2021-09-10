import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../assets/images/logo.png';

const LogoContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 45px;
  }
`
const Title = styled.div`
  margin-left: 1rem;
  letter-spacing: 0.2rem;
  font-size: 2rem;;
  color: #fff;

  .Search, .Hacker {
    display: none;
  }

  @media (min-width: 600px) {
    .Search, .Hacker {
      display: block;
    }
  }
`

interface LogoProps {
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <LogoContainer className="LogoContainer">
      <img src={LogoImg} alt="Logo" />
      <Title className="Title">
        <p className="Search">Search</p>
        <p className="Hacker">Hacker News</p>
      </Title>
    </LogoContainer>
  );
}
export default Logo;