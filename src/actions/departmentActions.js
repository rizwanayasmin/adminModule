import axios from "axios";
import {
  DEPARTMENT_LIST_FAIL,
  DEPARTMENT_LIST_REQUEST,
  DEPARTMENT_LIST_SUCCESS,
  DEPARTMENT_SAVE_FAIL,
  DEPARTMENT_SAVE_REQUEST,
  DEPARTMENT_SAVE_SUCCESS,
  DEPARTMENT_DELETE_REQUEST,
  DEPARTMENT_DELETE_SUCCESS,
  DEPARTMENT_DELETE_FAIL,
} from "../constants/departmentConstants";

const listDepartments = (setDeptLists, openModel, deleteDept) => async (
  dispatch
) => {
  try {
    dispatch({ type: DEPARTMENT_LIST_REQUEST });
    // Data request
    const { data } = await axios.get("/api/getAllActiveDept");
    console.log(data);
    let deptLists = data.map((dept) => {
      dept.openModel = openModel;
      dept.deleteDept = deleteDept;
      return dept;
    });
    // console.log(setDeptLists, openModel, deleteDept);
    // console.log(deptLists);
    setDeptLists(deptLists);
    dispatch({ type: DEPARTMENT_LIST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: DEPARTMENT_LIST_FAIL, payload: e.message });
  }
};

const deleteDepartment = (deptId) => async (dispatch) => {
  try {
    dispatch({ type: DEPARTMENT_DELETE_REQUEST });
    // Data request
    const { data } = await axios.delete(`/api/deleteDepartment/${deptId}`);
    if (data.success) {
      dispatch({ type: DEPARTMENT_DELETE_SUCCESS, payload: data });
    } else {
      alert("Department has been linked with other designations");
      dispatch({ type: DEPARTMENT_DELETE_FAIL, payload: data });
    }
  } catch (e) {
    dispatch({ type: DEPARTMENT_DELETE_FAIL, payload: e.message });
  }
};

const saveDepartment = (deptDetails) => async (dispatch) => {
  try {
    dispatch({ type: DEPARTMENT_SAVE_REQUEST });
    // Request data here
    if (!deptDetails._id) {
      delete deptDetails._id;
      const { data } = await axios.post(
        "/api/createNewDepartment",
        deptDetails
      );
      dispatch({ type: DEPARTMENT_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put("/api/updateDepartment", deptDetails);
      dispatch({ type: DEPARTMENT_SAVE_SUCCESS, payload: data });
    }
  } catch (e) {
    dispatch({ type: DEPARTMENT_SAVE_FAIL, payload: e.message });
  }
};

const getDepartmentNames = async (setDepartmentOptions) => {
  try {
    const { data } = await axios.get("/api/getOnlyDepartmentNames");
    if (data.ERROR) {
    } else {
      console.log(data);
      const newData = data.map((d) => {
        return { value: d.id, label: d.id };
      });
      setDepartmentOptions(newData);
    }
  } catch (e) {
    console.log(e.message);
  }
};

export {
  listDepartments,
  saveDepartment,
  deleteDepartment,
  getDepartmentNames,
};
