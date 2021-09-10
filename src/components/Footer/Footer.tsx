import React from 'react'
import styled from 'styled-components';

interface FooterProps {
  page: (pageNum: number) => void
}

const FooterContainer = styled.footer`
`
const PageNumberList = styled.ul`
  width: calc(100% - 50px);
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  list-style: none;
  padding: 20px;

  @media (min-width: 600px) {
    width: calc(100% - 250px);
  }

  li {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
    cursor: pointer;
    border: 3px solid #ff742b;
    border-radius: 10px;
    transition: all 0.4s ease;
    background-color: #fff;

    &:hover {
      background-color: #ff742b;
      color: #fff;
    }
    @media(min-width: 992px) {
      margin: 1rem;
      padding: 1rem 1.5rem;
      font-size: 1.6rem;
    }
  }

`

export const Footer: React.FC<FooterProps> = ({ page }) => {
  return (
    <FooterContainer>
      <PageNumberList>
        <li onClick={() => page(1)}>1</li>
        <li onClick={() => page(2)}>2</li>
        <li onClick={() => page(3)}>3</li>
        <li onClick={() => page(4)}>4</li>
        <li onClick={() => page(5)}>5</li>
      </PageNumberList>
    </FooterContainer>
  );
}