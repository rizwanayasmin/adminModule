import axios from "axios";
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

const listPayrollPolicies = (
  setPayrollPolicies,
  openModal,
  delPayrollPolicy
) => async (dispatch) => {
  try {
    dispatch({ type: PAYROLL_LIST_REQUEST });
    // Fetch data here
    const { data } = await axios.get("/api/getAllActivePayrolls");
    console.log(data);
    let newData = data.map((d) => {
      d.openModal = openModal;
      d.delPayrollPolicy = delPayrollPolicy;
      return d;
    });
    setPayrollPolicies(newData);
    dispatch({ type: PAYROLL_LIST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: PAYROLL_LIST_FAIL, payload: e.message });
  }
};

const getOnlyPayrollNames = async (setPayrollIds) => {
  try {
    const { data } = await axios.get("/api/getOnlyPayrollNames");
    const nData = data.map((d) => {
      return { value: d.id, label: d.id };
    });
    setPayrollIds(nData);
  } catch (e) {
    console.log(e.message);
  }
};

const savePayrollPolicy = (policyDetails) => async (dispatch) => {
  try {
    dispatch({ type: PAYROLL_SAVE_REQUEST });
    // Fetch data here
    if (!policyDetails._id) {
      const { data } = await axios.post("/api/createNewPayroll", policyDetails);
      if (data.ERROR) {
        // Error
        console.log(data);
      }
      dispatch({ type: PAYROLL_SAVE_SUCCESS, payload: data });
    } else {
      // Update
      const { data } = await axios.put(
        `/api/updateAPayroll/${policyDetails._id}`,
        policyDetails
      );

      dispatch({ type: PAYROLL_SAVE_SUCCESS, payload: data });
    }
  } catch (e) {
    dispatch({ type: PAYROLL_SAVE_FAIL, payload: e.message });
  }
};

const deletePayrollPolicy = (policyId) => async (dispatch) => {
  try {
    dispatch({ type: PAYROLL_DELETE_REQUEST });
    // Fetch data
    const { data } = await axios.delete(`/api/deleteAPayroll/${policyId}`);

    dispatch({ type: PAYROLL_DELETE_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: PAYROLL_DELETE_FAIL, payload: e.message });
  }
};

export {
  listPayrollPolicies,
  savePayrollPolicy,
  deletePayrollPolicy,
  getOnlyPayrollNames,
};
