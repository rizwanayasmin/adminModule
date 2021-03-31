import axios from "axios";
import exportToCSV from "../components/attendance-excel-upload/attendance.utility";

const createTeacher = async (teacherDetails) => {
  try {
    const { data } = await axios.post("/api/addTeacher", { ...teacherDetails });
    console.log(data);
  } catch (e) {
    console.log(e.message);
  }
};

const getTeacherListByInstituteId = async (
  instituteId,
  setTeacherList,
  viewProfile
) => {
  try {
    const { data } = await axios.get(
      `/api/getTeacherListByInstituteId/${instituteId}`
    );
    const newData = data.map((list, index) => {
      list.viewProfile = viewProfile;
      return list;
    });
    setTeacherList(newData);
  } catch (e) {
    console.log(e.message);
  }
};

const getTeacherFullInfo = async (teacherId, setTeacherInfo) => {
  try {
    const { data } = await axios.get(`/api/getTeacherFullProfile/${teacherId}`);
    if (data.length !== 0) {
      setTeacherInfo(data[0]);
    }
  } catch (e) {
    console.log(e.message);
  }
};

const getLoanDetailsForTeacher = async (teacherId, setTeacherInfo) => {
  try {
    const { data } = await axios.get(
      `/api/getLoanDetailsForTeacher/${teacherId}`
    );
    console.log("GetloanDetailsfor teacher", data);
    setTeacherInfo(data);
  } catch (e) {
    console.log(e.message);
  }
};

const teacherTransfer = async (teacherId, instituteId) => {
  try {
    const { data } = await axios.put(
      `/api/teacherTransfer/${teacherId}/${instituteId}`
    );
    // console.log(data);
    alert(data.MSG);
  } catch (e) {
    // console.log(e);
    // alert(e.message);
  }
};

const designationChange = async (profileId, designationId) => {
  try {
    const { data } = await axios.put(
      `/api/designationChange/${profileId}/${designationId}`
    );
    // console.log(data);
    alert(data.MSG);
  } catch (e) {
    console.log(e);
  }
};

const getOnlyTeacherIDandNameLists = async (
  organizationId,
  setTeachersList,
  profileId
) => {
  try {
    const { data } = await axios.get(
      `/api/getOnlyTeacherIDandNameLists/${organizationId}`
    );
    setTeachersList(
      [{ id: "", concatString: "--SELECT--" }, ...data].filter((teacher) => {
        return teacher.id !== profileId;
      })
    );
  } catch (e) {
    console.log(e);
  }
};

const getOnlyTeacherIDandNameListsForHrJobPost = async (setTeachersList) => {
  try {
    const { data } = await axios.get(
      `/api/getTeacherIDandNameListsforHRJobPost`
    );
    setTeachersList([{ id: "", concatString: "--SELECT--" }, ...data]);
  } catch (e) {
    console.log(e);
  }
};

const assignAuthority = async (profileId, selectedAuthority) => {
  try {
    const { data } = await axios.put(
      `/api/assignAuthority/${profileId}`,
      selectedAuthority
    );
    alert(data.MSG);
  } catch (e) {
    console.log(e);
  }
};

const profileUpdate = async (profileId, profileInfo, setTeacher) => {
  try {
    const { data } = await axios.put(
      `/api/updateProfile/${profileId}`,
      profileInfo
    );
    console.log(data);
    setTeacher(data.updatedProfile);
    alert(data.MSG);
  } catch (e) {
    console.log(e);
  }
};

const applyResignation = async (
  profileId,
  organizationId,
  reasonForResignation
) => {
  try {
    const { data } = await axios.post(`/api/applyResignation/${profileId}`, {
      organizationId,
      reasonForResignation,
    });

    alert(data.MSG);
  } catch (e) {
    console.log(e);
  }
};

const getAttendanceTeacherLists = async (instituteId, setLists) => {
  try {
    const { data } = await axios.get(
      `/api/getTeachersListForAttendanceByInstituteId/${instituteId}`
    );
    console.log(data);
    setLists(data);
  } catch (e) {
    console.log(e);
  }
};

const putTeacherAttendanceFromExcel = async (teacherList) => {
  try {
    const { data } = await axios.put("/api/teacherAttendance", teacherList);
    console.log(data);
    alert(
      `Successful attendance upload ${data.successTeacherList.join(
        " "
      )}. Failed attendance upload for ${data.errTeacherList.join(" ")}`
    );
  } catch (e) {
    console.log(e);
  }
};

const getTeacherAttendance = async (emp_number, setAttendance) => {
  try {
    const { data } = await axios.get(
      `/api/getAttendanceForTeacher/${emp_number}`
    );
    console.log(data);
    setAttendance(data);
  } catch (e) {
    console.log(e);
  }
};

const samplePayrollTeacher = async (instituteId, month, year) => {
  try {
    const { data } = await axios.get(
      `/api/samplePayrollTeacher/${instituteId}/${month}/${year}`
    );
    exportToCSV(
      [{ data: data.teacherPayrolls, sheetName: "Payroll" }],
      "Sample payroll"
    );
  } catch (e) {
    console.log(e);
  }
};

const payrollSave = async (payrollData, instituteId, year, month) => {
  try {
    const { data } = await axios.put(`/api/savePayroll`, {
      payrollData,
      instituteId,
      year,
      month,
    });
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

const loanActivatorForTeacher = async (teacherId, loanInfo) => {
  try {
    const { data } = await axios.put(
      `/api/activeTeacherLoan/${teacherId}`,
      loanInfo
    );
    if (data.MSG) {
      alert(data.MSG);
    }
  } catch (e) {
    console.log(e);
  }
};

const payLoanAmountForATeacher = async (teacherId, amount) => {
  try {
    const { data } = await axios.put(
      `/api/payLoanAmountForATeacher/${teacherId}`,
      {
        amount,
      }
    );

    if (data.MSG) {
      alert(data.MSG);
    }
  } catch (e) {
    console.log(e);
  }
};

const getCompleteLeaveRequest = async (
  instituteId,
  setLeaveRequests,
  handleLeaveReject
) => {
  try {
    const { data } = await axios.get(
      `/api/completeLeaveRequests/${instituteId}`
    );
    console.log({ data });
    let newData = data.map((d, index) => {
      d.handleLeaveReject = handleLeaveReject;
      return d;
    });
    setLeaveRequests(newData);
  } catch (e) {
    console.log(e);
  }
};

const approveLeave = async (
  teacherId,
  arrayIndex,
  month,
  approvedNoOfDays,
  approvedDateRange
) => {
  try {
    const {
      data,
    } = await axios.put(
      `/api/approveLeave/${teacherId}/${month}/${arrayIndex}/1`,
      { approvedDateRange, approvedNoOfDays }
    );
    console.log(data);
    alert(data.MSG);
  } catch (e) {
    console.log(e);
  }
};

const rejectLeave = async (teacherId, arrayIndex, month) => {
  try {
    const {
      data,
    } = await axios.put(
      `/api/approveLeave/${teacherId}/${month}/${arrayIndex}/0`,
      { approvedNoOfDays: 0, approvedDateRange: {} }
    );
    console.log(data);
    alert(data.MSG);
  } catch (e) {
    console.log(e);
  }
};

export {
  createTeacher,
  getTeacherListByInstituteId,
  getTeacherFullInfo,
  teacherTransfer,
  designationChange,
  getOnlyTeacherIDandNameLists,
  assignAuthority,
  profileUpdate,
  applyResignation,
  getAttendanceTeacherLists,
  putTeacherAttendanceFromExcel,
  getTeacherAttendance,
  samplePayrollTeacher,
  payrollSave,
  getLoanDetailsForTeacher,
  loanActivatorForTeacher,
  payLoanAmountForATeacher,
  getCompleteLeaveRequest,
  approveLeave,
  rejectLeave,
  getOnlyTeacherIDandNameListsForHrJobPost,
};
