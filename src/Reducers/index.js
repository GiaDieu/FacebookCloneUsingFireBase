export const initialState = { user: null };

export const ActionTypes = {
  SET_USER: "SET_USER",
};

const reducers = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default reducers;
