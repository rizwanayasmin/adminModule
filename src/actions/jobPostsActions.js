import axios from "axios";
import {
  JOBPOST_LIST_REQUEST,
  JOBPOST_LIST_FAIL,
  JOBPOST_LIST_SUCCESS,
  JOBPOST_SAVE_REQUEST,
  JOBPOST_SAVE_SUCCESS,
  JOBPOST_SAVE_FAIL,
  JOBPOST_DELETE_REQUEST,
  JOBPOST_DELETE_SUCCESS,
  JOBPOST_DELETE_FAIL,
} from "../constants/jobPostConstants";

const listJobPosts = (
  setLists,
  openModal,
  deleteJobPost,
  history,
  match
) => async (dispatch) => {
  try {
    dispatch({ type: JOBPOST_LIST_REQUEST });
    // Data fetch
    const { data } = await axios.get("/api/getHrActiveJobPosts");
    let nJobPost = data.map((jobPost) => {
      jobPost.openModal = openModal;
      jobPost.deleteJobPost = deleteJobPost;
      jobPost.history = history;
      jobPost.match = match;
      return jobPost;
    });
    setLists(nJobPost);
    dispatch({ type: JOBPOST_LIST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: JOBPOST_LIST_FAIL, payload: e.message });
  }
};

const saveJobPost = (jobPostDetails) => async (dispatch) => {
  console.log("-->save -->", jobPostDetails);
  try {
    dispatch({ type: JOBPOST_SAVE_REQUEST });

    if (!jobPostDetails._id) {
      // Create jobpost
      const { data } = await axios.post("/api/createHrJobPost", jobPostDetails);
      dispatch({ type: JOBPOST_SAVE_SUCCESS, payload: data });
    } else {
      // Update jobpost
      const { data } = await axios.put(
        `/api/modifyHrActiveJobPost/${jobPostDetails._id}`,
        jobPostDetails
      );
      dispatch({ type: JOBPOST_SAVE_SUCCESS, payload: data });
    }
  } catch (e) {
    dispatch({ type: JOBPOST_SAVE_FAIL, payload: e.message });
  }
};

const delJobPost = (jobPostId) => async (dispatch) => {
  try {
    dispatch({ type: JOBPOST_DELETE_REQUEST });

    const { data } = await axios.delete(`/api/deleteHrJobPost/${jobPostId}`);
    dispatch({ type: JOBPOST_DELETE_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: JOBPOST_DELETE_FAIL, payload: e.message });
  }
};

const addToEmployeeList = async (instituteId, applicationId, designationId) => {
  // console.log(typeof applicationId, applicationId);
  try {
    const { data } = await axios.put(`/api/addTeacherFromHiring`, {
      instituteId,
      designationId,
      applicationId,
    });
    alert("Employee added successful");
  } catch (e) {
    console.log(e);
  }
};

export { listJobPosts, saveJobPost, delJobPost, addToEmployeeList };
