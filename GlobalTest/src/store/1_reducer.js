import { createAction } from "../utils/createAction";

export const ingredientsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case "REMOVE_INGREDIENT":
      return state.filter((ingredient) => ingredient.id !== action.payload.id);
    default:
      return state;
  }
};

export const ADD_INGREDIENT = createAction("ADD_INGREDIENT");
export const REMOVE_INGREDIENT = createAction("REMOVE_INGREDIENT");
