import * as actionTypes from './itemsActionTypes';
import { ItemAction, ItemsState } from '../types/types';
import { updateObject } from '../../utils/updateObject';

const initialState: ItemsState = {
  items: [],
  searchQuery: "",
  pageNum: 1,
  currentStory: null,
  itemComments: []
};



const updateSearchQuery = (state: ItemsState, payload: any) => {
  return updateObject(state, {
    searchQuery: payload
  });
};
const updatePageChange = (state: ItemsState, payload: any) => {
  return updateObject(state, {
    pageNum: payload
  });
};
const getSearchItems = (state: ItemsState, payload: any) => {
  return updateObject(state, {
    items: payload
  });
};
const getItemDetails = (state: ItemsState, payload: any) => {
  return updateObject(state, {
    currentStory: payload
  });
};
const getItemComments = (state: ItemsState, payload: any) => {
  return updateObject(state, {
    itemComments: payload
  });
};



const itemsReducer = (state: ItemsState = initialState, action: ItemAction) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SEARCH_QUERY_CHANGE:
      return updateSearchQuery(state, payload);
    case actionTypes.PAGE_CHANGE:
      return updatePageChange(state, payload)
    case actionTypes.GET_SEARCH_ITEMS:
      return getSearchItems(state, payload)
    case actionTypes.GET_ITEM_DETAILS:
      return getItemDetails(state, payload)
    case actionTypes.GET_ITEM_COMMENTS:
      return getItemComments(state, payload)
    default:
      return state;
  }
}

export default itemsReducer;