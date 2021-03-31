const {
  RESIGNATION_LIST_SUCCESS,
  RESIGNATION_LIST_REQUEST,
  RESIGNATION_LIST_FAIL,
} = require("../constants/resignationConstants");

function resignationListsReducers(state = { resignationLists: [] }, action) {
  switch (action.type) {
    case RESIGNATION_LIST_REQUEST:
      return { loading: true, resignationLists: [] };
    case RESIGNATION_LIST_SUCCESS:
      return { loading: false, resignationLists: action.payload };
    case RESIGNATION_LIST_FAIL:
      return { loading: false, resignationLists: action.payload };
    default:
      return state;
  }
}

export { resignationListsReducers };
