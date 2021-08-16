import { SET_CURRENT_USER, START_FETCHING_USER } from '../Actions/userActions';

const INITIAL_STATE = {
  currentUser: null,
  hiddenMenu: true,
  loading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_USER:
      return { ...state, loading: true };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
