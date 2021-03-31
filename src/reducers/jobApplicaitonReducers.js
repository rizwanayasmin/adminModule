import {
  APPLICATION_LIST_REQUEST,
  APPLICATION_LIST_FAIL,
  APPLICATION_LIST_SUCCESS,
  SHORTLIST_ROUND_LIST_REQUEST,
  SHORTLIST_ROUND_LIST_SUCCESS,
  SHORTLIST_ROUND_LIST_FAIL,
  HIRED_LIST_REQUEST,
  HIRED_LIST_FAIL,
  HIRED_LIST_SUCCESS,
  ALL_HIRED_LIST_REQUEST,
  ALL_HIRED_LIST_SUCCESS,
  ALL_HIRED_LIST_FAIL,
} from "../constants/jobApplicationConstants";

function applicationReducer(state = { applicationLists: [] }, action) {
  switch (action.type) {
    case APPLICATION_LIST_REQUEST:
      return { loading: true, applicationLists: [] };
    case APPLICATION_LIST_SUCCESS:
      return { loading: false, applicationLists: action.payload };
    case APPLICATION_LIST_FAIL:
      return { loading: false, applicationLists: action.payload };
    default:
      return state;
  }
}

function shortListApplicationReducer(
  state = { shortlistAppLists: [] },
  action
) {
  switch (action.type) {
    case SHORTLIST_ROUND_LIST_REQUEST:
      return { loading: true, shortlistAppLists: [] };
    case SHORTLIST_ROUND_LIST_SUCCESS:
      return { loading: false, shortlistAppLists: action.payload };
    case SHORTLIST_ROUND_LIST_FAIL:
      return { loading: false, shortlistAppLists: action.payload };
    default:
      return state;
  }
}

function hiredApplicationReducer(state = { hiredLists: [] }, action) {
  switch (action.type) {
    case HIRED_LIST_REQUEST:
      return { loading: true, hiredLists: [] };
    case HIRED_LIST_SUCCESS:
      return { loading: false, hiredLists: action.payload };
    case HIRED_LIST_FAIL:
      return { loading: false, hiredLists: action.payload };
    default:
      return state;
  }
}

function allHiredApplicationReducer(state = { allHiredLists: [] }, action) {
  switch (action.type) {
    case ALL_HIRED_LIST_REQUEST:
      return { loading: true, allHiredLists: [] };
    case ALL_HIRED_LIST_SUCCESS:
      return { loading: false, allHiredLists: action.payload };
    case ALL_HIRED_LIST_FAIL:
      return { loading: false, allHiredLists: action.payload };
    default:
      return state;
  }
}

export {
  applicationReducer,
  shortListApplicationReducer,
  hiredApplicationReducer,
  allHiredApplicationReducer
};
