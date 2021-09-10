import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/types/types';
import { Icon, SearchbarContainer } from '../../styles/common/commonStyles';



interface SearchbarProps {
  changed: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Searchbar: React.FC<SearchbarProps> = ({ changed }) => {

  const searchQuery = useSelector((state: AppState) => state.itemsReducer.searchQuery);

  return (
    <SearchbarContainer className="SearchbarContainer">
      <Icon className="Icon">
        <BsSearch fontSize="30px" color="#ccc" className="fas fa-search" />
      </Icon>
      <input value={searchQuery} type="text" placeholder="Search stories" onChange={changed} />
    </SearchbarContainer>
  );
}
export default Searchbar;