import { createContext, useContext, useReducer } from "react";
import { createAction } from "../utils/createAction";

const initialState = [{ id: 1, name: "홍길동", nickname: "히히" }];

export const UserContext = createContext();
export const UserDispatchContext = createContext();

export const useUserContext = () => useContext(UserContext);
export const useUserDispatchContext = () => useContext(UserDispatchContext);

export const ADD_USER = createAction("ADD_USER");
export const ADD_ISEDIT = createAction("ADD_ISEDIT");
export const RESET_USER = createAction("RESET_USER");

const userListReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          nickname: action.payload.nickname,
        },
      ];
    case ADD_ISEDIT:
      return state.map((user) => ({
        ...user,
        isEdit: true,
      }));
    case RESET_USER:
      return initialState;
    default:
      return;
  }
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userListReducer, initialState);

  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export default UserContextProvider;
