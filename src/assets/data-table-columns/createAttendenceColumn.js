import { faPencil, faSave, faTrash } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Select from "react-select";


const createAttendenceColumn = [
  {
    name: "Employee Id",
    selector: "id",
    wrap: true,
  },
  {
    name:'Employee Name',
    selector:'id',
    wrap:true,
  },
  {
    name:'Department',
    selector:'id',
    wrap:true,
  },
  {
    name:'Designation',
    selector:'id',
    wrap:true,
  },

  {
    name: "Status",
    cell: (row) => {
      return (
        <div>
            <Select
                    name="status"
                    id="status"
                    options={[
                      { value: "Present", label: "Present" },
                      { value: "Absent", label: "Absent" },
                    ]}
                  ></Select>
        </div>
      );
    },
    wrap: true,
  },
  {
    name: "Action",
    cell: (row) => {
      return (
        <div>
            <FontAwesomeIcon
            onClick={() => row.openModal(row)}
            icon={faPencil}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          />
        </div>
      );
    },
    wrap: true,
  },
];

export default createAttendenceColumn;
