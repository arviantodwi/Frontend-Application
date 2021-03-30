import { USER_INITIAL_DATA } from "../constants";

const defaultState = {
  id: null,
  firstName: "",
  lastName: "",
  profilePicture: "",
};

export const setInitialUserData = ({
  id,
  firstName,
  lastName,
  profilePicture,
}) => ({
  type: USER_INITIAL_DATA,
  payload: {
    id,
    firstName,
    lastName,
    profilePicture,
  },
});

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_INITIAL_DATA:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};

export default userReducer;
