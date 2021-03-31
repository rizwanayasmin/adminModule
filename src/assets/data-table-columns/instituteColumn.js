import { faPencil, faTrash } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const institueColumns = [
  {
    name: "Institute Id",
    selector: "instituteId",
    wrap: true,
  },
  {
    name: "Institute name",
    selector: "instituteName",
    wrap: true,
  },
  {
    name: "Branch",
    selector: "branch",
    wrap: true,
  },
  {
    name: "Email",
    cell: (row) => {
      console.log(row.email);
      return row.email ? row.email : "-";
    },
    wrap: true,
  },
  {
    name: "Contact",
    selector: "mobile",
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
            onClick={() => row.deleteInstitute(row._id, row.instituteId)}
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

export default institueColumns;
