import React from 'react'
import { Navbar } from '../../styles/common/commonStyles';
import Searchbar from '../Searchbar/Searchbar';



interface NavProps {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Nav: React.FC<NavProps> = ({ onSearchChange }) => {
  return (
    <Navbar className="Navbar">
      <Searchbar changed={onSearchChange} />
    </Navbar>
  );
}
export default Nav;