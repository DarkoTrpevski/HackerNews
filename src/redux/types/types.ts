/**
 * STATES
 */
export type AppState = {
  itemsReducer: ItemsState,
  alertReducer: AlertState,

}
/**
 * TYPES
 */
export interface ItemType {
  objectID: string | number;
  points: string | number;
  created_at_i: string | number;
  num_comments: number;
  comment_text: string;
  story_text: string;
  author: string;

  title: string;
  by: string;
  url: string;
  kids: string[];
}

export interface CommentType {
  by: string;
  id: string | number;
  text: string;
  time: string | number;
  kids: string[];
}

export type ItemsState = {
  items: ItemType[],
  searchQuery: string,
  pageNum: number,
  currentStory: ItemType | null,
  itemComments: CommentType[] | [],
}
export type AlertState = AlertType[]

export interface AlertType {
  msg: string,
  alertType: "error" | "success" | "warning" | "info",
  id: string
}
/**
 * ACTION TYPES
 */

export type ItemAction = {
  type: string
  payload?: any
}
export type AlertAction = {
  type: string,
  payload: AlertType | string
}
/**
 * DISPATCH TYPES
 */
export type DispatchAlertActionType = (args: AlertAction | ((dispatch: any) => void)) => AlertAction