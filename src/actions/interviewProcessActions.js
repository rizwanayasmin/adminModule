import axios from "axios";
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

const listInterviewProcess = (setLists, openModel, deleteIntProcess) => async (
  dispatch
) => {
  try {
    dispatch({ type: INTERVIEWPROCESS_LIST_REQUEST });
    // Data fetch here
    const { data } = await axios.get("/api/getAllActiveHrIntProcess");
    let nIntProcess = data.map((intProcess) => {
      intProcess.openModel = openModel;
      intProcess.deleteIntProcess = deleteIntProcess;
      return intProcess;
    });
    setLists(nIntProcess);
    dispatch({ type: INTERVIEWPROCESS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: INTERVIEWPROCESS_LIST_FAIL, payload: error.message });
  }
};

const getOnlyProcessIds = async (setInterviewProcess) => {
  try {
    const { data } = await axios.get("/api/getOnlyProcessIds");
    const nData = data.map((d) => {
      return { interviewProcessId: d.processId };
    });
    nData.push({ interviewProcessId: "--SELECT--" });
    setInterviewProcess(nData);
  } catch (e) {
    console.log(e.message);
  }
};

const saveInterviewProcess = (intProcessDetails) => async (dispatch) => {
  try {
    dispatch({ type: INTERVIEWPROCESS_SAVE_REQUEST });
    if (!intProcessDetails._id) {
      const { data } = await axios.post(
        "/api/createHrIntProcess",
        intProcessDetails
      );
      if (data.ERROR) {
        alert("Duplicate Process Id found");
        dispatch({ type: INTERVIEWPROCESS_SAVE_FAIL, payload: data.ERROR });
        return;
      }
      dispatch({ type: INTERVIEWPROCESS_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put(
        `/api/modifyHrIntProcess/${intProcessDetails._id}`,
        intProcessDetails
      );

      if (data.ERROR) {
        alert("Duplicate Process Id found");
        dispatch({ type: INTERVIEWPROCESS_SAVE_FAIL, payload: data.ERROR });
        return;
      }
      dispatch({ type: INTERVIEWPROCESS_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: INTERVIEWPROCESS_SAVE_FAIL, payload: error.message });
  }
};

const deleteInterviewProcess = (id) => async (dispatch) => {
  // console.log(id);
  try {
    dispatch({ type: INTERVIEWPROCESS_DELETE_REQUEST });
    // Fetch data
    const { data } = await axios.delete(`/api/deleteHrIntProcess/${id}`);

    dispatch({ type: INTERVIEWPROCESS_DELETE_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: INTERVIEWPROCESS_DELETE_FAIL, payload: e.message });
  }
};

export {
  listInterviewProcess,
  saveInterviewProcess,
  deleteInterviewProcess,
  getOnlyProcessIds,
};
