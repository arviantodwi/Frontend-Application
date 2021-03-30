import { PRODUCT_INITIAL_DATA } from "../constants";

const defaultState = {
  id: null,
  name: "",
  type: {},
  picture: "",
  description: "",
};

export const setInitialData = ({ id, name, type, picture, description }) => ({
  type: PRODUCT_INITIAL_DATA,
  payload: {
    id,
    name,
    type,
    picture,
    description,
  },
});

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PRODUCT_INITIAL_DATA:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};

export default productReducer;
