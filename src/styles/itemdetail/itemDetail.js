import styled from "styled-components"

export const ItemDetailWrapper = styled.div`
  display: block;

  a {
    display: flex;
    align-items: center;
    color: #000;
    text-decoration: none;
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
  }
`
export const ItemTitle = styled.h2`
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`
export const ItemAuthor = styled.h3`
  display: block;
  letter-spacing: 0.1rem;
`
export const BackButton = styled.button`
  all: unset;
  display: block;
  cursor: pointer;
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.6rem;
  border: 2px solid #ff742b;
  border-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: #ff742b;
  transition: 0.4s all cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background: #ff742b;
    color: #fff;
  }
`

/**
 * ItemComment.tsx
 */
export const Comment = styled.div`
 width: 100%;
 background-color: #f6f6ef;
 padding: 0;
 padding-left: 15px;
 margin: 0;
 margin: 1.5rem 0;
`
export const Text = styled.div`
 font-size: 14px;
 word-break: break-all;
`
export const AuthorWrapper = styled.div`
 display: flex;
 align-items: center;
 line-height: 1;
 margin-bottom: 0.5rem;
`
export const IconWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 margin-right: 1rem;
 line-height: 1;

 svg {
   border-radius: 2px;
 }
 
 span {
   position: absolute;
   color: #fff;
   font-size: 1.2rem;
   font-weight: bold;
 }
`
export const Author = styled.div`
 font-weight: bold;
 font-size: 18px;
 line-height: 1;
`
export const DateOfPost = styled.div`
 span {
   margin: 0 0.5rem;
 }
`