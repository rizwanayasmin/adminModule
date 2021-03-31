const {
  INSTITUTE_LIST_REQUEST,
  INSTITUTE_LIST_FAIL,
  INSTITUTE_LIST_SUCCESS,
  INSTITUTE_SAVE_REQUEST,
  INSTITUTE_SAVE_SUCCESS,
  INSTITUTE_SAVE_FAIL,
  INSTITUTE_DELETE_REQUEST,
  INSTITUTE_DELETE_SUCCESS,
  INSTITUTE_DELETE_FAIL,
} = require("../constants/instituteConstants");

function instituteListReducer(state = { instituteLists: [] }, action) {
  switch (action.type) {
    case INSTITUTE_LIST_REQUEST:
      return { loading: true, instituteLists: [] };
    case INSTITUTE_LIST_SUCCESS:
      return { loading: false, instituteLists: action.payload };
    case INSTITUTE_LIST_FAIL:
      return { loading: false, instituteLists: action.payload };
    default:
      return state;
  }
}

function instituteSaveReducer(state = { institute: {} }, action) {
  switch (action.type) {
    case INSTITUTE_SAVE_REQUEST:
      return { loading: true, institute: {} };
    case INSTITUTE_SAVE_SUCCESS:
      return { loading: false, institute: action.payload };
    case INSTITUTE_SAVE_FAIL:
      return { loading: false, institute: action.payload };
    default:
      return state;
  }
}

function instituteDeleteReducer(state = { instituteDelete: {} }, action) {
  switch (action.type) {
    case INSTITUTE_DELETE_REQUEST:
      return { loading: true, instituteDelete: {} };
    case INSTITUTE_DELETE_SUCCESS:
      return { loading: false, instituteDelete: action.payload };
    case INSTITUTE_DELETE_FAIL:
      return { loading: false, instituteDelete: action.payload };
    default:
      return state;
  }
}

export { instituteListReducer, instituteSaveReducer, instituteDeleteReducer };
