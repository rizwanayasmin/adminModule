import axios from "axios";
const {
  INSTITUTE_LIST_REQUEST,
  INSTITUTE_LIST_FAIL,
  INSTITUTE_LIST_SUCCESS,
  INSTITUTE_SAVE_REQUEST,
  INSTITUTE_SAVE_SUCCESS,
  INSTITUTE_SAVE_FAIL,
  INSTITUTE_DELETE_REQUEST,
  INSTITUTE_DELETE_SUCCESS,
  INSTITUTE_DELETE_FAIL,
} = require("../constants/instituteConstants");

// List all institutes
const listInstitutes = (setInsList, openModel, deleteInstitute) => async (
  dispatch
) => {
  try {
    dispatch({ type: INSTITUTE_LIST_REQUEST });
    // Data request comes here
    const { data } = await axios.get("/api/getHrInstituteSetups");
    let nInsList = data.map((inst) => {
      inst.openModel = openModel;
      inst.deleteInstitute = deleteInstitute;
      return inst;
    });
    setInsList(nInsList);
    dispatch({ type: INSTITUTE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: INSTITUTE_LIST_FAIL, payload: error.message });
  }
};

const getOnlyInstituteNames = async (setInstituteNames) => {
  try {
    const { data } = await axios.get("/api/getOnlyInstituteNames");
    const nData = data.map((d) => {
      return { instituteId: d.id };
    });
    nData.push({ instituteId: "--SELECT--" });
    setInstituteNames(nData);
  } catch (e) {
    console.log(e.message);
  }
};

// Delete institutes
const delInstitute = (insId) => async (dispatch) => {
  try {
    dispatch({ type: INSTITUTE_DELETE_REQUEST });
    // Data request comes here
    const { data } = await axios.delete(`/api/deleteHrInstituteSetup/${insId}`);
    console.log("Delete", data);
    dispatch({ type: INSTITUTE_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: INSTITUTE_DELETE_FAIL, payload: error.message });
  }
};

// Save an Institute
const saveInstitute = (insDetails) => async (dispatch) => {
  try {
    dispatch({ type: INSTITUTE_SAVE_REQUEST });

    if (!insDetails._id) {
      delete insDetails._id;
      const { data } = await axios.post(
        "/api/createHrInstituteSetup",
        insDetails
      );
      if (data.ERROR) {
        console.log(data);
        dispatch({ type: INSTITUTE_SAVE_FAIL, payload: data.ERROR });
        alert("Insitute Id duplicate found");
      }
      dispatch({ type: INSTITUTE_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put(
        "/api/modifyHrInstituteSetup",
        insDetails
      );
      if (data.ERROR) {
        dispatch({ type: INSTITUTE_SAVE_FAIL, payload: data.ERROR });
        alert("Error updating institute");
      }
      dispatch({ type: INSTITUTE_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: INSTITUTE_SAVE_FAIL, payload: error.message });
  }
};

const getOrganizationIdFromInstitute = async (
  instituteId,
  setOrganizationId,
  setEmpNumber
) => {
  try {
    const { data } = await axios.post("/api/getOrganizationId", {
      instituteId,
    });
    setOrganizationId(data.organization_id);
    // console.log(data);
    setEmpNumber(data.teacherPrefix + Number(data.noOfTeachers + 1));
  } catch (e) {
    console.log(e.message);
  }
};

export {
  listInstitutes,
  saveInstitute,
  delInstitute,
  getOnlyInstituteNames,
  getOrganizationIdFromInstitute,
};
