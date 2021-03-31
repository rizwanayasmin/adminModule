import { faPencil, faTrash } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const departmentColumn = [
  {
    name: "Department Id",
    selector: "id",
    wrap: true,
  },
  
  {
    name: "Actions",
    cell: (row) => {
      return (
        <div>
          <FontAwesomeIcon
            onClick={() => row.openModel(row)}
            icon={faPencil}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          />
          <FontAwesomeIcon
            onClick={() => row.deleteDept(row._id, row.id)}
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

export default departmentColumn;
