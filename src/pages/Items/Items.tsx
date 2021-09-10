import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState, ItemType } from '../../redux/types/types';
import { Item } from '../../components/Item/Item';
import { getSearchItems, pageChange } from "../../redux/items/itemsActions";
import { Footer } from '../../components/Footer/Footer';


interface ItemsProps { }

const Items: React.FC<ItemsProps> = ({ }) => {

  const dispatch = useDispatch();

  const items = useSelector((state: AppState) => state.itemsReducer.items);
  const searchQuery = useSelector((state: AppState) => state.itemsReducer.searchQuery);
  const pageNum = useSelector((state: AppState) => state.itemsReducer.pageNum);


  useEffect(() => {
    searchQueryItems();
    // eslint-disable-next-line
  }, [searchQuery, pageNum]);

  const searchQueryItems = () => {
    dispatch(getSearchItems(searchQuery, pageNum));
  };

  const onPageChange = (pageNum: number) => {
    dispatch(pageChange(pageNum));
  }

  return (
    <div className="Items">
      <div className="main_container">
        {items.map((item: ItemType) => (
          <Item item={item} key={item.objectID} />
        ))}
        <Footer page={onPageChange} />
      </div>
    </div>
  );
}

export default Items;