import React from "react";
import { Input } from "reactstrap";
import Chip from "../../components/@vuexy/chips/ChipComponent";

const jobHiringColumn = [
  {
    name: "Name",
    cell: (row) => {
      // console.log("IIIIIDDDDD", row._id);
      return `${row.fName} ${row.lName}`;
    },
    wrap: true,
  },
  {
    name: "Email",
    selector: "email",
    wrap: true,
  },

  {
    name: "Mobile no.",
    selector: "contactNo",
    wrap: true,
  },
  {
    name: "Institute name",
    cell: (row) => {
      return row.institution.instituteName;
    },
    wrap: true,
  },
  {
    name: "Branch",
    cell: (row) => {
      return row.institution.branch;
    },
    wrap: true,
  },
  {
    name: "Applied on",
    cell: (row) => {
      const d = new Date(row.applicationDate);
      return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    },
    wrap: true,
  },
  {
    name: "Date of joining",
    cell: (row) => {
      const d = new Date(row.dateOfJoining);

      return row.dateOfJoining
        ? `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
        : "-";
    },
    wrap: true,
  },
  {
    name: "CTC (LPA)",
    cell: (row) => {
      return row.acceptedCTC ? row.acceptedCTC : "-";
    },
    wrap: true,
  },
  {
    name: "Designation",
    cell: (row) => {
      return row.jobPostInfo.designationId
        ? row.jobPostInfo.designationId
        : "-";
    },
    wrap: true,
  },
  {
    name: "Comment",
    cell: (row) => {
      return row.finalComment ? row.finalComment : "-";
    },
    wrap: true,
  },
  {
    name: "Status",
    cell: (row) => (
      <div>
        {row.acceptedCTC === 0 ? (
          <Chip color="warning" text="CTC/DOJ update pending"></Chip>
        ) : (
          <Chip color="success" text="Hired"></Chip>
        )}
      </div>
    ),
    wrap: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <div>
        <Input
          type="select"
          onChange={(e) => handleActionChange(row, e)}
          value={"--SELECT--"}
        >
          <option>--SELECT--</option>
          <option>Update</option>
          <option>Reject</option>
          <option>Create Employee</option>
        </Input>
        {/* <FontAwesomeIcon
            icon={faPencil}
            onClick={() => row.assignFields(row._id, row)}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          />
          <FontAwesomeIcon
            onClick={() => row.addToEmployee()}
            icon={faUserPlus}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          />
          <FontAwesomeIcon
            onClick={() => row.rejectCandidate(row._id, row.fName)}
            icon={faTrash}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          /> */}
        {/* <FontAwesomeIcon
            onClick={() => row.viewProfile()}
            icon={faEye}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          /> */}
      </div>
    ),
    wrap: true,
  },
];

const handleActionChange = (row, e) => {
  const { value } = e.target;
  switch (value) {
    case "Update":
      row.assignFields(row._id, row);
      break;
    case "Reject":
      row.rejectCandidate(row._id, row.fName);
      break;
    case "Create Employee":
      row.addToEmployee(
        row.institution.instituteId,
        row._id,
        row.jobPostInfo.designationId,
        row.acceptedCTC,
        row.dateOfJoining
      );
      break;
  }
};

export default jobHiringColumn;
