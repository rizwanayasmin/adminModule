import axios from "axios";
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

const listRoles = (setRoleLists, openRoleModal, deleteRole) => async (
  dispatch
) => {
  try {
    dispatch({ type: ROLE_LIST_REQUEST });
    // Fetch data
    const { data } = await axios.get("/api/getRoles");
    let nData = data.map((role) => {
      role.openRoleModal = openRoleModal;
      role.deleteRole = deleteRole;
      return role;
    });
    setRoleLists(nData);

    dispatch({ type: ROLE_LIST_SUCCESS, payload: data });
  } catch (e) {
    console.log(e);
    dispatch({ type: ROLE_LIST_FAIL, payload: e.message });
  }
};

const roleListsNames = async (setRoleLists) => {
  try {
    const { data } = await axios.get("/api/getRolesNames");
    const nData = data.map((d) => {
      return { value: d.id, label: d.id };
    });
    setRoleLists(nData);
  } catch (e) {
    console.log(e.message);
  }
};

const delRole = (roleId) => async (dispatch) => {
  try {
    dispatch({ type: ROLE_DELETE_REQUEST });
    // fetch data
    const { data } = await axios.delete(`/api/deleteRole/${roleId}`);
    dispatch({ type: ROLE_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ROLE_DELETE_FAIL, payload: error.message });
  }
};

const saveRole = (roleDetails) => async (dispatch) => {
  console.log(roleDetails);
  try {
    dispatch({ type: ROLE_SAVE_REQUEST });
    // Request data here
    if (!roleDetails._id) {
      delete roleDetails._id;
      const { data } = await axios.post("/api/createRole", roleDetails);
      dispatch({ type: ROLE_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put(
        `/api/updateRole/${roleDetails._id}`,
        roleDetails
      );
      dispatch({ type: ROLE_SAVE_SUCCESS, payload: data });
    }
  } catch (e) {
    dispatch({ type: ROLE_SAVE_FAIL, payload: e.message });
  }
};

export { listRoles, delRole, saveRole, roleListsNames };
