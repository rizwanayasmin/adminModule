import {
  faArrowDown,
  faCheck,
  faDownload,
  faEye,
  faPrint,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faPencil, faTrash } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const payslipGeneratorColumn = [
  {
    name: "Month",
    selector: "month",
    wrap: true,
  },
  {
    name: "Year",
    selector: "year",
    wrap: true,
  },
  {
    name: "Total Teachers",
    selector: "noOfTeachers",
    wrap: true,
  },
  {
    name: "Total Generated Payslips",
    cell: (row) => {
      return Object.keys(row.payroll.v.teachers).length;
    },
    wrap: true,
  },
  {
    name: "Status",
    cell: (row) => {
      if (row.payroll.v.isReleased) {
        return (
          <div style={{ color: "green" }}>
            <p>RELEASED</p>
          </div>
        );
      } else {
        return (
          <div style={{ color: "red" }}>
            <p>NOT-RELEASED</p>
          </div>
        );
      }
    },
    wrap: true,
  },

  {
    name: "Actions",
    cell: (row) => {
      return (
        <div>
          <FontAwesomeIcon
            onClick={() => row.handleDownload(row.payroll.v.teachers)}
            icon={faDownload}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          />
          <FontAwesomeIcon
            onClick={() =>
              row.handleRelease(true, row.organization_id, row.month, row.year)
            }
            icon={faCheck}
            className="mr-2"
            style={{ fontSize: 16, color: "gray" }}
          />
          <FontAwesomeIcon
            onClick={() =>
              row.handleRelease(false, row.organization_id, row.month, row.year)
            }
            icon={faTimes}
            className="mr-2"
            style={{ fontSize: 16, color: "gray" }}
          />

          {/* <FontAwesomeIcon
            // onClick={() => row.delLeavePolicy(row._id, row.id)}
            icon={faPrint}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          /> */}
        </div>
      );
    },
    wrap: true,
  },
];

export default payslipGeneratorColumn;
