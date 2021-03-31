const {
  ROLE_LIST_REQUEST,
  ROLE_LIST_SUCCESS,
  ROLE_LIST_FAIL,
  ROLE_DELETE_REQUEST,
  ROLE_DELETE_SUCCESS,
  ROLE_DELETE_FAIL,
  ROLE_SAVE_REQUEST,
  ROLE_SAVE_SUCCESS,
  ROLE_SAVE_FAIL,
} = require("../constants/roleConstants");

const listRoleReducer = (state = { roleLists: [] }, action) => {
  switch (action.type) {
    case ROLE_LIST_REQUEST:
      return { loading: true, roleLists: [] };
    case ROLE_LIST_SUCCESS:
      return { loading: false, error: false, roleLists: action.payload };
    case ROLE_LIST_FAIL:
      return {
        loading: false,
        error: true,
        roleLists: action.payload,
      };
    default:
      return state;
  }
};

const saveRoleReducer = (state = { role: [] }, action) => {
  switch (action.type) {
    case ROLE_SAVE_REQUEST:
      return { loading: true, role: [] };
    case ROLE_SAVE_SUCCESS:
      return { loading: false, error: false, role: action.payload };
    case ROLE_SAVE_FAIL:
      return {
        loading: false,
        error: true,
        role: action.payload,
      };
    default:
      return state;
  }
};

const deleteRoleReducer = (state = { delRole: [] }, action) => {
  switch (action.type) {
    case ROLE_DELETE_REQUEST:
      return { loading: true, delRole: [] };
    case ROLE_DELETE_SUCCESS:
      return { loading: false, error: false, delRole: action.payload };
    case ROLE_DELETE_FAIL:
      return {
        loading: false,
        error: true,
        delRole: action.payload,
      };
    default:
      return state;
  }
};

export { listRoleReducer, saveRoleReducer, deleteRoleReducer };
