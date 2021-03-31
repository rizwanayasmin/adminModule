import { faPencil, faTrash } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const attendanceColumn = [
  {
    name: "Month",
    selector: "month",
    wrap: true,
  },
  {
    name: "Working days",
    selector: "workingDays",
    wrap: true,
  },
  {
    name: "Present",
    selector: "present",
    wrap: true,
  },
  {
    name: "Absent",
    selector: "absent",
    wrap: true,
  },
  {
    name: "Late",
    selector: "late",
    wrap: true,
  },
  {
    name: "Percentage",
    cell: (row) => {
      return (row.present / row.workingDays) * 100 + "%";
    },
    wrap: true,
  },
  // {
  //   name: "Actions",
  //   cell: (row) => {
  //     return (
  //       <div>
  //         <FontAwesomeIcon
  //           // onClick={() => row.openModal(row)}
  //           icon={faPencil}
  //           className="mr-2"
  //           style={{ fontSize: 16, color: "#fd868c" }}
  //         />
  //         <FontAwesomeIcon
  //           // onClick={() => row.delLeavePolicy(row._id, row.id)}
  //           icon={faTrash}
  //           className="mr-2"
  //           style={{ fontSize: 16, color: "#fd868c" }}
  //         />
  //       </div>
  //     );
  //   },
  //   wrap: true,
  // },
];

export default attendanceColumn;
