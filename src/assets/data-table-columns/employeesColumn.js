import { faEye, faPencil, faTrash } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Row,
  Col,
  
} from "reactstrap";

const EmployeesColumn = [
  {
    name: "Employee Id",
    selector: "employee_number",
    wrap: true,
  },
  {
    name: "Employee name",
    cell: (row) => {
      return(
        <div>
          <Row>
            <Col sm='3'>
                {/* <FontAwesomeIcon
                    icon={faEye}
                    className="mr-2"
                    style={{ fontSize: 16, color: "#fd868c" }}
                  /> */}
                  <img
            src="https://ik.imagekit.io/demo/img/smart_crop_blog/test_image_9_By_lQN-WE.jpeg?tr=w-200,h-200,fo-face:r-max"
            style={{ width: 25, height: 25 }}
          />
            </Col>
            <Col sm='9'>
            {row.first_name + " " + row.last_name}
            </Col>
          </Row>
            
              
        </div>
      )
    } 
    ,
    wrap: true,
  },
  {
    name: "Branch",
    selector: "branch",
    wrap: true,
  },
  {
    name: "Department",
    cell: (row) => (row.departmentId ? row.departmentId : "-"),
    wrap: true,
  },
  {
    name: "Designation",
    cell: (row) => (row.designationId ? row.designationId : "-"),
    wrap: true,
  },
  {
    name: "Mobile",
    selector: "mobile_number",
    wrap: true,
  },
  {
    name: "Actions",
    cell: (row) => {
      return (
        <div>
          <FontAwesomeIcon
            onClick={() => row.viewProfile(row._id)}
            icon={faEye}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          />
          <FontAwesomeIcon
            onClick={() => row.viewProfile(row._id)}
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

export default EmployeesColumn;
