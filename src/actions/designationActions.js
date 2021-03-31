import axios from "axios";
import {
  DESIGNATION_DELETE_FAIL,
  DESIGNATION_DELETE_REQUEST,
  DESIGNATION_DELETE_SUCCESS,
  DESIGNATION_LIST_FAIL,
  DESIGNATION_LIST_REQUEST,
  DESIGNATION_LIST_SUCCESS,
  DESIGNATION_SAVE_FAIL,
  DESIGNATION_SAVE_REQUEST,
  DESIGNATION_SAVE_SUCCESS,
} from "../constants/designationConstants";

const listDesignations = (setLists, openModel, deleteDesignation) => async (
  dispatch
) => {
  try {
    dispatch({ type: DESIGNATION_LIST_REQUEST });
    // Data fetch here
    const { data } = await axios.get("/api/getAllDesignation");
    let nDesList = data.map((design) => {
      design.openModel = openModel;
      design.deleteDesignation = deleteDesignation;
      return design;
    });
    setLists(nDesList);
    dispatch({ type: DESIGNATION_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DESIGNATION_LIST_FAIL, payload: error.message });
  }
};

const getOnlyDesignationNames = async (setter) => {
  try {
    const { data } = await axios.get("/api/getOnlyDesignationNames");
    const nData = data.map((d) => {
      return { designationId: d.id };
    });
    nData.push({ designationId: "--SELECT--" });
    setter(nData);
  } catch (e) {
    console.log(e);
  }
};

const saveDesignation = (designDetails) => async (dispatch) => {
  try {
    dispatch({ type: DESIGNATION_SAVE_REQUEST });
    if (!designDetails._id) {
      const { data } = await axios.post(
        "/api/createDesignation",
        designDetails
      );
      dispatch({ type: DESIGNATION_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put(
        `/api/updateADesignation/${designDetails._id}`,
        designDetails
      );
      dispatch({ type: DESIGNATION_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: DESIGNATION_SAVE_FAIL, payload: error.message });
  }
};

const deleteDesignations = (designationId) => async (dispatch) => {
  try {
    dispatch({ type: DESIGNATION_DELETE_REQUEST });
    // Fetch data
    const { data } = await axios.delete(
      `/api/deleteADesignation/${designationId}`
    );

    dispatch({ type: DESIGNATION_DELETE_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: DESIGNATION_DELETE_FAIL, payload: e.message });
  }
};

export {
  listDesignations,
  saveDesignation,
  deleteDesignations,
  getOnlyDesignationNames,
};
