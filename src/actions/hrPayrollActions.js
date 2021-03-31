import { saveAs } from "file-saver";
import axios from "axios";

const getHrPayrollForMonthAndYear = async (
  instituteName,
  month,
  year,
  setPayrollSlips,
  handleDownload,
  handleRelease
) => {
  try {
    const { data } = await axios.get(
      `/api/getHrPayrollForMonthAndYear/${instituteName}/${month}/${year}`
    );
    console.log(data);
    let newData = data.map((d, index) => {
      d.handleDownload = handleDownload;
      d.handleRelease = handleRelease;
      return d;
    });

    setPayrollSlips(newData);
  } catch (e) {
    console.log(e);
  }
};

const changeReleaseStatus = async (
  releaseStatus,
  organization_id,
  month,
  year
) => {
  try {
    const {
      data,
    } = await axios.put(
      `/api/changeReleaseStatus/${organization_id}/${month}/${year}`,
      { status: releaseStatus }
    );

    alert(data.MSG);
  } catch (e) {
    console.log(e);
  }
};

const allPaylipsForATeacher = async (
  organization_id,
  employee_number,
  setPayslips,
  handleDownload
) => {
  try {
    const { data } = await axios.get(
      `/api/allPayslipsForATeacher/${organization_id}/${employee_number}`
    );
    // console.log(data);
    const newData = data.map((d, index) => {
      d.handleDownload = handleDownload;
      return d;
    });
    setPayslips(newData);
  } catch (e) {
    console.log(e);
  }
};

const createPdfAndDownload = (teacherData) => {
  console.log("Download clicked");
  console.log({ teacherData });
  axios
    .post("/create-pdf", teacherData)
    .then(() => axios.get("/fetch-pdf", { responseType: "blob" }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: "application/pdf" });
      saveAs(pdfBlob, "payslip.pdf");
    });
};

export {
  getHrPayrollForMonthAndYear,
  changeReleaseStatus,
  allPaylipsForATeacher,
  createPdfAndDownload,
};
