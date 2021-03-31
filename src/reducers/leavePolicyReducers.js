import {
  LEAVEPOLICY_DELETE_FAIL,
  LEAVEPOLICY_DELETE_REQUEST,
  LEAVEPOLICY_DELETE_SUCCESS,
  LEAVEPOLICY_LIST_FAIL,
  LEAVEPOLICY_LIST_REQUEST,
  LEAVEPOLICY_LIST_SUCCESS,
  LEAVEPOLICY_SAVE_FAIL,
  LEAVEPOLICY_SAVE_REQUEST,
  LEAVEPOLICY_SAVE_SUCCESS,
} from "../constants/leavePolicyConstants";

function leavePolicyReducer(state = { leavePolicyList: [] }, action) {
  switch (action.type) {
    case LEAVEPOLICY_LIST_REQUEST:
      return { loading: true, leavePolicyList: [] };
    case LEAVEPOLICY_LIST_SUCCESS:
      return { loading: false, leavePolicyList: action.payload };
    case LEAVEPOLICY_LIST_FAIL:
      return { loading: false, leavePolicyList: action.payload };
    default:
      return state;
  }
}

function leavePolicySaveReducer(state = { leavePolicy: {} }, action) {
  switch (action.type) {
    case LEAVEPOLICY_SAVE_REQUEST:
      return { loading: true, leavePolicy: {} };
    case LEAVEPOLICY_SAVE_SUCCESS:
      return { loading: false, leavePolicy: action.payload };
    case LEAVEPOLICY_SAVE_FAIL:
      return { loading: false, leavePolicy: action.payload };
    default:
      return state;
  }
}

function leavePolicyDeleteReducer(state = { leavePolicyDelete: {} }, action) {
  switch (action.type) {
    case LEAVEPOLICY_DELETE_REQUEST:
      return { loading: true, leavePolicyDelete: {} };
    case LEAVEPOLICY_DELETE_SUCCESS:
      return { loading: false, leavePolicyDelete: action.payload };
    case LEAVEPOLICY_DELETE_FAIL:
      return { loading: false, leavePolicyDelete: action.payload };
    default:
      return state;
  }
}

export { leavePolicyReducer, leavePolicySaveReducer, leavePolicyDeleteReducer };
