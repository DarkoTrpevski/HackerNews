import styled from "styled-components";

/**
 * Layout.tsx
 */
export const MainWrapper = styled.div`
  width: 100%;
`
export const ChildrenWrapper = styled.div`
  min-height: 100vh;
  padding-top: 10rem;
  background-color: #fff1e9;
`

/**
 * Sidebar.tsx
 */
 export const SidebarParent = styled.div`
 width: 50px;
 min-width: 50px;
 height: 100vh;
 background: #fff;
 a {
   text-decoration: none;
 }

 @media (min-width: 600px) {
   width: 250px;
   min-width: 250px;
 }
 
`

export const SidebarScroller = styled.div`
 width: 50px;
 position: fixed;
 left: 0;
 top: 0;
 @media (min-width: 600px) {
   width: 250px;
 }
`

export const LogoWrapper = styled.span`
 display: block;
 background: #ff742b;
`;

export const MiscNavList = styled.ul`
 margin-top: 5rem;
`

export const SidebarItem = styled.li`
 padding: 0.5rem;
 height: 50px;
 font-size: 1.6rem;
 border-radius: 4px;
 cursor:pointer;
 transition: 0.4s all cubic-bezier(0.075, 0.82, 0.165, 1);

 @media (min-width: 600px) {
   height: auto;
   padding: 2rem 1rem;
 }

 &:hover {
   background: #ccc;
 }

 a {
   display: block;
   width: 100%;
   height: 100%;
   color: #000;
   font-weight: bold;
   text-decoration: none;
   display: flex;
   align-items: center;
   justify-content: center;
   
   svg {
     margin-right: 1rem;
   }
   span {
     display: none;
   }

   @media (min-width: 600px) {
     justify-content: flex-start;
     span {
       display: inline;
     }
   }

 }  
`;

/**
 * Nav
 */
 export const Navbar = styled.div`
 width: 100%;
 height: 60px;
 display: flex;
 align-items: center;
 position: fixed;
 border-left: 1px solid #fff;
 background: #ff742b;
 z-index: 10;

 a {
   text-decoration: none;
 }
`
/**
 * Searchbar.tsx
 */

 export const SearchbarContainer = styled.div`
 width: calc(80% - 50px);
 height: 40px;
 display: flex;
 align-items: center;
 justify-content: flex-start;
 margin-left: 2rem;

 @media (min-width: 600px) {
   width: calc(80% - 250px);
 }

 input {
   width: 100%;
   height: 100%;
   outline: none;
   border: none;
   font-size: 1.6rem;
   border-top-right-radius: 40px;
   border-bottom-right-radius: 40px;
 }
`

export const Icon = styled.div`
 width: 50px;
 height: 100%;
 background-color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 border-top-left-radius: 40px;
 border-bottom-left-radius: 40px;
`