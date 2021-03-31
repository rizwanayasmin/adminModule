import axios from "axios";
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

const listLeavePolicies = (
  setLeavePolicies,
  openModal,
  delLeavePolicy
) => async (dispatch) => {
  try {
    dispatch({ type: LEAVEPOLICY_LIST_REQUEST });
    // Fetch data here
    const { data } = await axios.get("/api/getAllActiveLeavePolicies");
    let newData = data.map((d) => {
      d.openModal = openModal;
      d.delLeavePolicy = delLeavePolicy;
      return d;
    });
    setLeavePolicies(newData);
    dispatch({ type: LEAVEPOLICY_LIST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: LEAVEPOLICY_LIST_FAIL, payload: e.message });
  }
};

const getOnlyLeavePolicyNames = async (setLeavePolicy) => {
  try {
    const { data } = await axios.get("/api/getOnlyLeavePolicyNames");
    const nData = data.map((d) => {
      return { value: d.id, label: d.id };
    });
    setLeavePolicy(nData);
  } catch (e) {
    console.log(e.message);
  }
};

const saveLeavePolicy = (leaveDetails) => async (dispatch) => {
  try {
    dispatch({ type: LEAVEPOLICY_SAVE_REQUEST });
    // Fetch data here
    if (!leaveDetails._id) {
      const { data } = await axios.post(
        "/api/createNewLeavePolicy",
        leaveDetails
      );
      if (data.ERROR) {
        // Error
        console.log(data);
      }
      dispatch({ type: LEAVEPOLICY_SAVE_SUCCESS, payload: data });
    } else {
      // Update
      const { data } = await axios.put(
        `/api/updateALeavePolicy/${leaveDetails._id}`,
        leaveDetails
      );

      dispatch({ type: LEAVEPOLICY_SAVE_SUCCESS, payload: data });
    }
  } catch (e) {
    dispatch({ type: LEAVEPOLICY_SAVE_FAIL, payload: e.message });
  }
};

const deleteLeavePolicy = (policyId) => async (dispatch) => {
  try {
    dispatch({ type: LEAVEPOLICY_DELETE_REQUEST });
    // Fetch data
    const { data } = await axios.delete(`/api/deleteALeavePolicy/${policyId}`);

    dispatch({ type: LEAVEPOLICY_DELETE_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: LEAVEPOLICY_DELETE_FAIL, payload: e.message });
  }
};
export {
  listLeavePolicies,
  saveLeavePolicy,
  deleteLeavePolicy,
  getOnlyLeavePolicyNames,
};
