import { faArrowDown, faEye, faPrint } from "@fortawesome/free-solid-svg-icons";
import {
  faDownload,
  faPencil,
  faTrash,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const payslipColumn = [
  {
    name: "Year",
    selector: "year",
    wrap: true,
  },
  {
    name: "Month",
    selector: "month",
    wrap: true,
  },
  {
    name: "Total Earnings",
    cell: (row) => {
      return row.payslip["Total earnings"];
    },
    wrap: true,
  },
  {
    name: "Total Deductions",
    cell: (row) => {
      return row.payslip["Total deductions"];
    },
    wrap: true,
  },
  {
    name: "Net Salary",
    cell: (row) => {
      return row.payslip["Net salary"];
    },
    wrap: true,
  },
  {
    name: "Actions",
    cell: (row) => {
      return (
        <div>
          <FontAwesomeIcon
            onClick={() => row.handleDownload(row)}
            icon={faDownload}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          />
          {/* <FontAwesomeIcon
            // onClick={() => row.delLeavePolicy(row._id, row.id)}
            icon={faEye}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          /> */}
        </div>
      );
    },
    wrap: true,
  },
];

export default payslipColumn;
