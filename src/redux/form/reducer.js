import {
  LIST_PRODUCT_ADD,
  LIST_PRODUCT_EDIT,
  LIST_PRODUCT_DEL,
} from "src/constants";

const initialState = [];

export default function listproduct(state = initialState, action) {
  switch (action.type) {
    // case LIST_PRODUCT_ADD:
    //   return [...state, action.item];
    case LIST_PRODUCT_EDIT:
      return state.map((stateItem) => {
        if (stateItem.id === action.index) {
          return action.item;
        } else {
          return stateItem;
        }
      });
    case LIST_PRODUCT_DEL:
      return state.filter((item) => item.id !== action.index);
    default:
      console.log(action)
      return state;
  }
}
