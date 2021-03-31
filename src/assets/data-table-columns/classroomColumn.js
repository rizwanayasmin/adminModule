import { faPencil, faTrash } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const classroomColumn = [
  {
    name: "Level",
    selector: "level",
    wrap: true,
  },
  {
    name: "Class",
    selector: "class",
    wrap: true,
  },
  {
    name: "Subject",
    selector: "subject",
    wrap: true,
  },
  {
    name: "Role",
    selector: "role",
    wrap: true,
  },
  {
    name: "Actions",
    cell: (row) => {
      return (
        <div>
          <FontAwesomeIcon
            // onClick={() => row.openModal(row)}
            icon={faPencil}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          />
          <FontAwesomeIcon
            // onClick={() => row.delLeavePolicy(row._id, row.id)}
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

export default classroomColumn;
