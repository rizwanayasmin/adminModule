const {
  DEPARTMENT_LIST_REQUEST,
  DEPARTMENT_LIST_FAIL,
  DEPARTMENT_LIST_SUCCESS,
  DEPARTMENT_SAVE_REQUEST,
  DEPARTMENT_SAVE_SUCCESS,
  DEPARTMENT_SAVE_FAIL,
  DEPARTMENT_DELETE_REQUEST,
  DEPARTMENT_DELETE_SUCCESS,
  DEPARTMENT_DELETE_FAIL,
} = require("../constants/departmentConstants");

const listDepartmentReducers = (state = { departmentLists: [] }, action) => {
  switch (action.type) {
    case DEPARTMENT_LIST_REQUEST:
      return { loading: true, departmentLists: [] };
    case DEPARTMENT_LIST_SUCCESS:
      return { loading: false, error: false, departmentLists: action.payload };
    case DEPARTMENT_LIST_FAIL:
      return {
        loading: false,
        error: true,
        departmentLists: action.payload,
      };
    default:
      return state;
  }
};

const saveDepartmentReducer = (state = { department: [] }, action) => {
  switch (action.type) {
    case DEPARTMENT_SAVE_REQUEST:
      return { loading: true, department: [] };
    case DEPARTMENT_SAVE_SUCCESS:
      return { loading: false, error: false, department: action.payload };
    case DEPARTMENT_SAVE_FAIL:
      return {
        loading: false,
        error: true,
        department: action.payload,
      };
    default:
      return state;
  }
};

const deleteDepartmentReducer = (state = { delDepartment: [] }, action) => {
  switch (action.type) {
    case DEPARTMENT_DELETE_REQUEST:
      return { loading: true, delDepartment: [] };
    case DEPARTMENT_DELETE_SUCCESS:
      return { loading: false, error: false, delDepartment: action.payload };
    case DEPARTMENT_DELETE_FAIL:
      return {
        loading: false,
        error: true,
        delDepartment: action.payload,
      };
    default:
      return state;
  }
};

export {
  listDepartmentReducers,
  saveDepartmentReducer,
  deleteDepartmentReducer,
};
