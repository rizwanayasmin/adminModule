import React from "react";
import axios from "axios";
import { saveAs } from "file-saver";

const TestPdf = ({ teacherInfo, payslipDetails }) => {
  const samplePayslipObj = {
    organizationName: "Everwin vidhyashram",
    payDate: { month: "February", year: "2019" },
    generalDetails: {
      employeeId: "EMP001",
      employeeName: "Aravind G",
      role: "Teaching",
      pfNo: "1000213123123",
      bankAccNo: "5324413123123",
      workingDays: 28,
      present: 24,
      lop: 4,
    },
    paymentDetails: {
      earnings: [
        {
          name: "Basic Pay",
          amount: 12635,
        },
        {
          name: "Dearness allowance",
          amount: 5054,
        },
        {
          name: "House rent allowance",
          amount: 5054,
        },
        {
          name: "Attn. Bonus",
          amount: 0,
        },
      ],
      deductions: [
        {
          name: "Provident Fund",
          amount: 1800,
        },
        {
          name: "ESI",
          amount: 0,
        },
        {
          name: "Fine",
          amount: 0,
        },
        {
          name: "Advance",
          amount: 600,
        },
        {
          name: "Loan deductions",
          amount: 0,
        },
        {
          name: "Late",
          amount: 0,
        },
        {
          name: "Uniform",
          amount: 0,
        },
        {
          name: "Leave deductions",
          amount: 3610,
        },
      ],
      grossActual: 25270,
      grossEarnings: 21660,
      grossDeductions: 2400,
      netPay: 19260,
    },
  };

  const createPdfAndDownload = () => {
    axios
      .post("/create-pdf", samplePayslipObj)
      .then(() => axios.get("/fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf");
      });
  };

  return (
    <div>
      <button onClick={createPdfAndDownload}>Download PDF</button>
    </div>
  );
};

export default TestPdf;
