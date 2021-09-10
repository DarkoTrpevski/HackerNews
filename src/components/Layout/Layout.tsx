import React, { ReactNode } from 'react'
import { useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';
import Sidebar from '../Sidebar/Sidebar';
import { ChildrenWrapper, MainWrapper } from '../../styles/common/commonStyles';
import { searchQueryChange } from '../../redux/items/itemsActions';



interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  const dispatch = useDispatch();

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchQueryChange(e.target.value));
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <MainWrapper>
          <Nav onSearchChange={onSearchChange} />
          <ChildrenWrapper>
            {children}
          </ChildrenWrapper>
        </MainWrapper>
      </div>
    </div>
  );
}
export default Layout;