import * as actionTypes from './itemsActionTypes';
import { ItemAction, ItemsState } from '../types/types';

const initialState: ItemsState = {
  items: [],
  searchQuery: "",
  pageNum: 1,
  currentStory: null,
  itemComments: []
};

const itemsReducer = (state: ItemsState = initialState, action: ItemAction) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SEARCH_QUERY_CHANGE:
      return {
        ...state,
        searchQuery: payload
      }
    case actionTypes.PAGE_CHANGE:
      return {
        ...state,
        pageNum: payload
      }
    case actionTypes.GET_SEARCH_ITEMS:
      return {
        ...state,
        items: payload
      }
    case actionTypes.GET_ITEM_DETAILS:
      return {
        ...state,
        currentStory: payload
      }
    case actionTypes.GET_ITEM_COMMENTS:
      return {
        ...state,
        itemComments: payload
      }
    default:
      return state;
  }
}

export default itemsReducer;