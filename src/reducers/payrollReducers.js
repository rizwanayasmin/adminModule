import {
  PAYROLL_DELETE_FAIL,
  PAYROLL_DELETE_REQUEST,
  PAYROLL_DELETE_SUCCESS,
  PAYROLL_LIST_FAIL,
  PAYROLL_LIST_REQUEST,
  PAYROLL_LIST_SUCCESS,
  PAYROLL_SAVE_FAIL,
  PAYROLL_SAVE_REQUEST,
  PAYROLL_SAVE_SUCCESS,
} from "../constants/payrollConstants";

function payrollPolicyReducer(state = { payrollPolicyLists: [] }, action) {
  switch (action.type) {
    case PAYROLL_LIST_REQUEST:
      return { loading: true, payrollPolicyLists: [] };
    case PAYROLL_LIST_SUCCESS:
      return { loading: false, payrollPolicyLists: action.payload };
    case PAYROLL_LIST_FAIL:
      return { loading: false, payrollPolicyLists: action.payload };
    default:
      return state;
  }
}

function payrollPolicySaveReducer(state = { payrollPolicy: {} }, action) {
  switch (action.type) {
    case PAYROLL_SAVE_REQUEST:
      return { loading: true, payrollPolicy: {} };
    case PAYROLL_SAVE_SUCCESS:
      return { loading: false, payrollPolicy: action.payload };
    case PAYROLL_SAVE_FAIL:
      return { loading: false, payrollPolicy: action.payload };
    default:
      return state;
  }
}

function payrollPolicyDeleteReducer(state = { payrollPolicyDelete: {} }, action) {
  switch (action.type) {
    case PAYROLL_DELETE_REQUEST:
      return { loading: true, payrollPolicyDelete: {} };
    case PAYROLL_DELETE_SUCCESS:
      return { loading: false, payrollPolicyDelete: action.payload };
    case PAYROLL_DELETE_FAIL:
      return { loading: false, payrollPolicyDelete: action.payload };
    default:
      return state;
  }
}

export {
  payrollPolicyReducer,
  payrollPolicySaveReducer,
  payrollPolicyDeleteReducer,
};
