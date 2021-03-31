import {
  INTERVIEWPROCESS_DELETE_FAIL,
  INTERVIEWPROCESS_DELETE_REQUEST,
  INTERVIEWPROCESS_DELETE_SUCCESS,
  INTERVIEWPROCESS_LIST_FAIL,
  INTERVIEWPROCESS_LIST_REQUEST,
  INTERVIEWPROCESS_LIST_SUCCESS,
  INTERVIEWPROCESS_SAVE_FAIL,
  INTERVIEWPROCESS_SAVE_REQUEST,
  INTERVIEWPROCESS_SAVE_SUCCESS,
} from "../constants/interviewProcessConstants";

function listInterviewProcessReducer(
  state = { interviewProcessLists: [] },
  action
) {
  switch (action.type) {
    case INTERVIEWPROCESS_LIST_REQUEST:
      return {
        loading: true,
        interviewProcessLists: [],
      };
    case INTERVIEWPROCESS_LIST_SUCCESS:
      return {
        loading: false,
        interviewProcessLists: action.payload,
      };
    case INTERVIEWPROCESS_LIST_FAIL:
      return {
        loading: false,
        interviewProcessLists: action.payload,
      };
    default:
      return state;
  }
}

function intProcessSaveReducer(state = { intProcess: {} }, action) {
  switch (action.type) {
    case INTERVIEWPROCESS_SAVE_REQUEST:
      return { loading: true, intProcess: {} };
    case INTERVIEWPROCESS_SAVE_SUCCESS:
      return { loading: false, intProcess: action.payload };
    case INTERVIEWPROCESS_SAVE_FAIL:
      return { loading: false, intProcess: action.payload };
    default:
      return state;
  }
}

function intProcessDeleteReducer(state = { intProcessDelete: {} }, action) {
  switch (action.type) {
    case INTERVIEWPROCESS_DELETE_REQUEST:
      return { loading: true, intProcessDelete: {} };
    case INTERVIEWPROCESS_DELETE_SUCCESS:
      return { loading: false, intProcessDelete: action.payload };
    case INTERVIEWPROCESS_DELETE_FAIL:
      return { loading: false, intProcessDelete: action.payload };
    default:
      return state;
  }
}

export {
  listInterviewProcessReducer,
  intProcessSaveReducer,
  intProcessDeleteReducer,
};
