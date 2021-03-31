import axios from "axios";
const {
  RESIGNATION_LIST_SUCCESS,
  RESIGNATION_LIST_REQUEST,
  RESIGNATION_LIST_FAIL,
} = require("../constants/resignationConstants");

const listResignations = (
  setLists,
  acceptResignation,
  rejectResignation
) => async (dispatch) => {
  try {
    dispatch({ type: RESIGNATION_LIST_REQUEST });
    const { data } = await axios.get("/api/getResignations");
    const nResignation = data.map((reg) => {
      reg.acceptResignation = acceptResignation;
      reg.rejectResignation = rejectResignation;
      return reg;
    });

    setLists(nResignation);
    dispatch({ type: RESIGNATION_LIST_SUCCESS, payload: nResignation });
  } catch (e) {
    dispatch({ type: RESIGNATION_LIST_FAIL, payload: e.message });
  }
};

const acceptResign = async (id) => {
  try {
    const { data } = await axios.put(`/api/acceptResignation/${id}`);
    // const index = lists.findIndex((d) => d._id === data._id);
    // if (index !== -1) {
    //   lists[index] = data;
    //   setLists(lists);
    // }
  } catch (e) {
    console.log(e.message);
  }
};

const rejectResign = async (id) => {
  try {
    const { data } = await axios.put(`/api/rejectResignation/${id}`);
  } catch (e) {
    console.log(e.message);
  }
};

export { listResignations, acceptResign, rejectResign };
