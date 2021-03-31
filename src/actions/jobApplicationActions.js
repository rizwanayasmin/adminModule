import axios from "axios";
import {
  APPLICATION_LIST_REQUEST,
  APPLICATION_LIST_FAIL,
  APPLICATION_LIST_SUCCESS,
  SHORTLIST_ROUND_LIST_REQUEST,
  SHORTLIST_ROUND_LIST_SUCCESS,
  SHORTLIST_ROUND_LIST_FAIL,
  HIRED_LIST_REQUEST,
  HIRED_LIST_FAIL,
  HIRED_LIST_SUCCESS,
  ALL_HIRED_LIST_REQUEST,
  ALL_HIRED_LIST_SUCCESS,
  ALL_HIRED_LIST_FAIL,
} from "../constants/jobApplicationConstants";

const listApplications = (
  jobPostId,
  setLists,
  rejectCandidate,
  shortlistCandidate,
  downloadResume
) => async (dispatch) => {
  try {
    dispatch({ type: APPLICATION_LIST_REQUEST });
    console.log(jobPostId);
    // Data fetch
    const { data } = await axios.get(`/api/getApplications/${jobPostId}`);
    console.log(data);
    const nApplications = data.map((app) => {
      app.rejectCandidate = rejectCandidate;
      app.shortlistCandidate = shortlistCandidate;
      app.downloadResume = downloadResume;
      return app;
    });
    setLists(nApplications);
    dispatch({ type: APPLICATION_LIST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: APPLICATION_LIST_FAIL, payload: e.message });
  }
};

const shortlistResume = async (id) => {
  try {
    const { data } = await axios.post(`/api/shortlistResume/${id}`);
  } catch (e) {
    console.log(e.message);
  }
};

const shortlistRound = async (id) => {
  try {
    const { data } = await axios.post(`/api/shortlistRound/${id}`);
  } catch (e) {
    console.log(e.message);
  }
};

const rejectACandidate = async (id) => {
  try {
    const { data } = await axios.post(`/api/rejectCandidate/${id}`);
  } catch (e) {
    console.log(e.message);
  }
};

const jobPostDetails = async (jobPostId, setGeneralDetails, generalDetails) => {
  try {
    const { data } = await axios.get(`/api/applicationDetails/${jobPostId}`);
    let obj = {};
    data.forEach((da) => {
      switch (da._id) {
        case 0:
          obj = { ...obj, noOfApplications: da.count };
          break;
        case -1:
          obj = { ...obj, noOfRejections: da.count };
          break;
        case 2:
          obj = { ...obj, noOfHirings: da.count };
          break;
        case 3:
          obj = { ...obj, noOfAddToEmployee: da.count };
        case 1:
          obj = { ...obj, noOfShortlists: da.count };
          break;
      }
    });
    const jobPost = await obtainJobPost(jobPostId);

    setGeneralDetails({
      ...generalDetails,
      ...obj,
      positionTitle: jobPost.positionTitle,
      noOfOpenings: jobPost.noOfOpenings,
    });
    return obj;
  } catch (e) {
    console.log(e.message);
  }
};

const obtainJobPost = async (jobPostId, setGeneralDetails, generalDetails) => {
  try {
    const { data } = await axios.get(`/api/getHrJobPost/${jobPostId}`);
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

const listShortlistApplications = (
  jobPostId,
  setLists,
  rejectCandidate,
  shortlistCandidate,
  downloadResume
) => async (dispatch) => {
  try {
    dispatch({ type: SHORTLIST_ROUND_LIST_REQUEST });
    console.log(jobPostId);
    // Data fetch
    const { data } = await axios.get(
      `/api/getShortlistApplications/${jobPostId}`
    );
    console.log("shortlists -> ", data);
    const nApplications = data.map((app) => {
      app.rejectCandidate = rejectCandidate;
      app.shortlistCandidate = shortlistCandidate;
      app.downloadResume = downloadResume;
      return app;
    });

    setLists(nApplications);
    dispatch({ type: SHORTLIST_ROUND_LIST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: SHORTLIST_ROUND_LIST_FAIL, payload: e.message });
  }
};

const listHiredApplications = (
  jobPostId,
  setLists,
  rejectCandidate,
  addToEmployee,
  viewProfile,
  assignFields
) => async (dispatch) => {
  try {
    dispatch({ type: HIRED_LIST_REQUEST });
    // Fetch data
    const { data } = await axios.get(`/api/getHiredApplications/${jobPostId}`);
    const nApplications = data.map((app) => {
      app.rejectCandidate = rejectCandidate;
      app.addToEmployee = addToEmployee;
      app.viewProfile = viewProfile;
      app.assignFields = assignFields;
      return app;
    });

    setLists(nApplications);
    dispatch({ type: HIRED_LIST_SUCCESS, payload: nApplications });
  } catch (e) {
    dispatch({ type: HIRED_LIST_FAIL, payload: e.message });
  }
};

const listAllHiredApplications = (
  setLists,
  rejectCandidate,
  addToEmployee,
  viewProfile,
  assignFields
) => async (dispatch) => {
  try {
    dispatch({ type: ALL_HIRED_LIST_REQUEST });
    // Fetch data
    const { data } = await axios.get(`/api/getAllHiredApplications`);
    const nApplications = data.map((app) => {
      app.rejectCandidate = rejectCandidate;
      app.addToEmployee = addToEmployee;
      app.viewProfile = viewProfile;
      app.assignFields = assignFields;
      return app;
    });

    setLists(nApplications);
    dispatch({ type: ALL_HIRED_LIST_SUCCESS, payload: nApplications });
  } catch (e) {
    dispatch({ type: ALL_HIRED_LIST_FAIL, payload: e.message });
  }
};

const createNewInterviewRounds = async (
  candidateId,
  noOfRounds,
  setIntRounds,
  setLoading
) => {
  try {
    const { data } = await axios.post(
      `/api/createNewInterviewRounds/${candidateId}`,
      {
        candidateId,
        noOfRounds,
      }
    );
    console.log("Updated interview round data", data);
    setIntRounds(data.interviewRounds);
    setLoading(false);
  } catch (e) {}
};

const updateInterviewRounds = async (candidateId, setIntRounds, intRounds) => {
  // console.log("aaaaa =>", intRounds);
  try {
    const { data } = await axios.put(
      `/api/updateInterviewRounds/${candidateId}`,
      {
        nwInt: intRounds,
      }
    );
    // console.log("bbbb=>", data.interviewRounds);
    setIntRounds(data.interviewRounds);
  } catch (e) {}
};

const updateCTCAndDOJ = async (candidateId, popupData) => {
  try {
    const { data } = await axios.put(
      `/api/updateCTCandDOJ/${candidateId}`,
      popupData
    );
  } catch (e) {
    console.log(e.message);
  }
};

export {
  listApplications,
  listShortlistApplications,
  listHiredApplications,
  listAllHiredApplications,
  createNewInterviewRounds,
  updateInterviewRounds,
  shortlistResume,
  rejectACandidate,
  shortlistRound,
  jobPostDetails,
  obtainJobPost,
  updateCTCAndDOJ,
};
