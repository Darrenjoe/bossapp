import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTyps";

export const changeInputAction = value => ({
  type: CHANGE_INPUT,
  value
});

export const addItemAction = () => ({
  type: ADD_ITEM
});

export const deleteItemAciton = index => ({
  type: DELETE_ITEM,
  index
});

export const getListAction = data => ({
  type: GET_LIST,
  data
});
