import React from "react";
import { faPencil, faTrash, faEye } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PayrollColumn = [
  {
    name: "Payroll Id",
    selector: "id",
    wrap: true,
  },
  {
    name: "Payroll Name",
    selector: "name",
    wrap: true,
  },
  {
    name: "Fixed Gross",
    selector: "fixedGross",
    wrap: true,
  },
  {
    name: "No. of Earnings",
    cell: (row) => <div>{row.earnings.length}</div>,
    wrap: true,
  },
  {
    name: "No. of Deductions",
    cell: (row) => <div>{row.deductions.length}</div>,
    wrap: true,
  },
  {
    name: "Actions",
    cell: (row) => {
      return (
        <div>
          <FontAwesomeIcon
            // onClick={() => row.delPayrollPolicy(row._id, row.id)}
            icon={faEye}
            className="mr-2"
            style={{ fontSize: 16, color: "dodgerblue" }}
          />
          <FontAwesomeIcon
            onClick={() => row.openModal(row)}
            icon={faPencil}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          />
          <FontAwesomeIcon
            onClick={() => row.delPayrollPolicy(row._id, row.id)}
            icon={faTrash}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          />
        </div>
      );
    },
    wrap: true,
  },
];

export default PayrollColumn;
