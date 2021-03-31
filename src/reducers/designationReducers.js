const {
  DESIGNATION_LIST_REQUEST,
  DESIGNATION_LIST_SUCCESS,
  DESIGNATION_LIST_FAIL,
  DESIGNATION_SAVE_REQUEST,
  DESIGNATION_SAVE_SUCCESS,
  DESIGNATION_SAVE_FAIL,
  DESIGNATION_DELETE_REQUEST,
  DESIGNATION_DELETE_SUCCESS,
  DESIGNATION_DELETE_FAIL,
} = require("../constants/designationConstants");

function listDesignationReducer(state = { designationLists: [] }, action) {
  switch (action.type) {
    case DESIGNATION_LIST_REQUEST:
      return {
        loading: true,
        designationLists: [],
      };
    case DESIGNATION_LIST_SUCCESS:
      return {
        loading: false,
        designationLists: action.payload,
      };
    case DESIGNATION_LIST_FAIL:
      return {
        loading: false,
        designationLists: action.payload,
      };
    default:
      return state;
  }
}

function designationSaveReducer(state = { designation: {} }, action) {
  switch (action.type) {
    case DESIGNATION_SAVE_REQUEST:
      return { loading: true, designation: {} };
    case DESIGNATION_SAVE_SUCCESS:
      return { loading: false, designation: action.payload };
    case DESIGNATION_SAVE_FAIL:
      return { loading: false, designation: action.payload };
    default:
      return state;
  }
}

function designationDeleteReducer(state = { designationDelete: {} }, action) {
  switch (action.type) {
    case DESIGNATION_DELETE_REQUEST:
      return { loading: true, designationDelete: {} };
    case DESIGNATION_DELETE_SUCCESS:
      return { loading: false, designationDelete: action.payload };
    case DESIGNATION_DELETE_FAIL:
      return { loading: false, designationDelete: action.payload };
    default:
      return state;
  }
}

export {
  listDesignationReducer,
  designationSaveReducer,
  designationDeleteReducer,
};
