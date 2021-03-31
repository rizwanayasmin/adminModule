import {
  JOBPOST_LIST_REQUEST,
  JOBPOST_LIST_FAIL,
  JOBPOST_LIST_SUCCESS,
  JOBPOST_SAVE_REQUEST,
  JOBPOST_SAVE_SUCCESS,
  JOBPOST_SAVE_FAIL,
  JOBPOST_DELETE_REQUEST,
  JOBPOST_DELETE_SUCCESS,
  JOBPOST_DELETE_FAIL,
} from "../constants/jobPostConstants";

function jobPostListReducer(state = { jobPostLists: [] }, action) {
  switch (action.type) {
    case JOBPOST_LIST_REQUEST:
      return { loading: true, jobPostLists: [] };
    case JOBPOST_LIST_SUCCESS:
      return { loading: false, jobPostLists: action.payload };
    case JOBPOST_LIST_FAIL:
      return { loading: false, jobPostLists: action.payload };
    default:
      return state;
  }
}

function jobPostSaveReducer(state = { jobPost: {} }, action) {
  switch (action.type) {
    case JOBPOST_SAVE_REQUEST:
      return { loading: true, jobPost: {} };
    case JOBPOST_SAVE_SUCCESS:
      return { loading: false, jobPost: action.payload };
    case JOBPOST_SAVE_FAIL:
      return { loading: false, jobPost: action.payload };
    default:
      return state;
  }
}

function jobPostDeleteReducer(state = { jobPostDelete: {} }, action) {
  switch (action.type) {
    case JOBPOST_DELETE_REQUEST:
      return { loading: true, jobPostDelete: {} };
    case JOBPOST_DELETE_SUCCESS:
      return { loading: false, jobPostDelete: action.payload };
    case JOBPOST_DELETE_FAIL:
      return { loading: false, jobPostDelete: action.payload };
    default:
      return state;
  }
}

export { jobPostListReducer, jobPostSaveReducer, jobPostDeleteReducer };
