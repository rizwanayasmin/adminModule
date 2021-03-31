import { faPencil, faTrash } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const leavePolicyColumn = [
  {
    name: "Policy Id",
    selector: "id",
    wrap: true,
  },
  {
    name: "Policy name",
    selector: "name",
    wrap: true,
  },
  {
    name: "No. of leave configurations",
    cell: (row) => <div>{row.leaveConfig.length}</div>,
    wrap: true,
  },
  {
    name: "No. of late configurations",
    cell: (row) => <div>{row.lateFines.length}</div>,
    wrap: true,
  },
  {
    name: "Actions",
    cell: (row) => {
      return (
        <div>
          <FontAwesomeIcon
            onClick={() => row.openModal(row)}
            icon={faPencil}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          />
          <FontAwesomeIcon
            onClick={() => row.delLeavePolicy(row._id, row.id)}
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

export default leavePolicyColumn;
