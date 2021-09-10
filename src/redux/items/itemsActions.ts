import axios, { AxiosResponse } from 'axios';
import { setAlert } from '../alert/alertActions';
import * as actionTypes from './itemsActionTypes';
// import { DispatchJobType } from '../types/types';


/**
 * 
 * @param query Search Bar Input String
 * @returns void
 */
export const searchQueryChange = (query: string) => async (dispatch: any) => {
  try {
    dispatch({ type: actionTypes.SEARCH_QUERY_CHANGE, payload: query });
  } catch (err: any) {
    console.log(err.message);
    console.error(err);
  }
};

/**
 * 
 * @param query Pagination page change
 * @returns void
 */
export const pageChange = (pageNum: number) => async (dispatch: any) => {
  try {
    dispatch({ type: actionTypes.PAGE_CHANGE, payload: pageNum });
  } catch (err: any) {
    console.log(err.message);
    console.error(err);
  }
};

/**
 * 
 * @param query Search Hacker News Algolia API
 * @returns void
 */
export const getSearchItems = (searchQuery: string, pageNum: number) => async (dispatch: any) => {
  const URL = `http://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${pageNum}&tags=story`
  try {
    const res: AxiosResponse = await axios.get(URL);
    dispatch({ type: actionTypes.GET_SEARCH_ITEMS, payload: res.data.hits });
    dispatch(setAlert("Successfully fetched items", "success"));

    // axios.get(URL).then((data) => {
    //   setResult(data.data.hits);
    //   let temp: MiscStats = {
    //     number: data.data.nbHits,
    //     timeTaken: data.data.processingTimeMS / 1000,
    //     totalPage: data.data.nbPages,
    //   };
    //   setSearchStat(temp);
    // });
  } catch (err: any) {
    console.log(err.message);
    console.error(err);
    dispatch(setAlert("Items fetch fail", "error"));
  }
};


export const loadStory = (objectID: string) => async (dispatch: any) => {
  try {
    let currItem;
    if (objectID) currItem = loadFromStorage(objectID);

    if (!currItem) {
      if (objectID) currItem = await loadFromService(objectID);
    }
    if (currItem) {
      dispatch({ type: actionTypes.GET_ITEM_DETAILS, payload: currItem });
      dispatch(setAlert("Successfully rendered item", "success"));
      if (currItem.kids) {
        const initialComments = await initComments(currItem.kids);
        if(initialComments) dispatch({ type: actionTypes.GET_ITEM_COMMENTS, payload: initialComments });
      }
    }
  } catch (err) {
    dispatch(setAlert("Item not Found! Please try again.", "error"));
    console.log(err);
  }
}


const initComments = async (kids: string[]) => {
  try {
    const promises = kids.map((kid) => axios.get(`https://hacker-news.firebaseio.com/v0/item/${kid}.json`).then((response) => response.data));
    const result = await Promise.all(promises);
    return result;
  } catch (err) {
    console.log(err);
    return null
  }
};

const loadFromService = async (storyID: string | number) => {
  try {
    const URL = `https://hacker-news.firebaseio.com/v0/item/${storyID}.json`
    const res = await axios.get(URL);
    if (storyID) localStorage.setItem(storyID.toString(), JSON.stringify(res.data));
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

const loadFromStorage = (storyID: string | number) => {
  const JSONString = window.localStorage.getItem(storyID.toString());
  if (JSONString) {
    const item = JSON.parse(JSONString);
    return item;
  }
  return null;
}