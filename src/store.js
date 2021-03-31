import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  deleteDepartmentReducer,
  listDepartmentReducers,
  saveDepartmentReducer,
} from "./reducers/departmentsReducers";
import {
  designationDeleteReducer,
  designationSaveReducer,
  listDesignationReducer,
} from "./reducers/designationReducers";
import {
  instituteDeleteReducer,
  instituteListReducer,
  instituteSaveReducer,
} from "./reducers/instituteReducers";
import {
  intProcessDeleteReducer,
  intProcessSaveReducer,
  listInterviewProcessReducer,
} from "./reducers/interviewProcessReducers";
import {
  allHiredApplicationReducer,
  applicationReducer,
  hiredApplicationReducer,
  shortListApplicationReducer,
} from "./reducers/jobApplicaitonReducers";
import {
  jobPostDeleteReducer,
  jobPostListReducer,
  jobPostSaveReducer,
} from "./reducers/jobPostReducers";
import {
  leavePolicyDeleteReducer,
  leavePolicyReducer,
  leavePolicySaveReducer,
} from "./reducers/leavePolicyReducers";
import {
  payrollPolicyDeleteReducer,
  payrollPolicyReducer,
  payrollPolicySaveReducer,
} from "./reducers/payrollReducers";
import { resignationListsReducers } from "./reducers/resignationReducers";
import {
  deleteRoleReducer,
  listRoleReducer,
  saveRoleReducer,
} from "./reducers/roleReducers";

const initialState = {
  listDepartments: { departmentLists: [] },
  listLeavePolicies: { leavePolicyList: [] },
};

const reducer = combineReducers({
  // List of reducers - Reducers responsible to state changes
  // Institute
  instituteLists: instituteListReducer,
  institute: instituteSaveReducer,
  instituteDelete: instituteDeleteReducer,
  // Department
  listDepartments: listDepartmentReducers,
  department: saveDepartmentReducer,
  deleteDepartment: deleteDepartmentReducer,
  // Leave Policies
  listLeavePolicies: leavePolicyReducer,
  leavePolicy: leavePolicySaveReducer,
  deletePolicy: leavePolicyDeleteReducer,

  payPolicyLists: payrollPolicyReducer,
  payPolicySave: payrollPolicySaveReducer,
  payPolicyDelete: payrollPolicyDeleteReducer,

  // Designation
  listDesignations: listDesignationReducer,
  designation: designationSaveReducer,
  deleteDesignation: designationDeleteReducer,

  // Interview process
  listInterviewProcess: listInterviewProcessReducer,
  interviewProcess: intProcessSaveReducer,
  deleteInterviewProcess: intProcessDeleteReducer,

  // JobPost
  listJobPosts: jobPostListReducer,
  jobPost: jobPostSaveReducer,
  deleteJobPost: jobPostDeleteReducer,

  // Jobpost application
  applicationLists: applicationReducer,
  // Jobpost shortlist round application
  shortlistApplicationLists: shortListApplicationReducer,
  // Jobpost hired round application
  hiredApplicationLists: hiredApplicationReducer,
  // Jobpost all hired round applicaiton
  allHiredApplicationLists: allHiredApplicationReducer,

  // Resignation
  resignationLists: resignationListsReducers,

  // Role
  listRoles: listRoleReducer,
  role: saveRoleReducer,
  deleteRole: deleteRoleReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux store - Responsible for state storage
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
