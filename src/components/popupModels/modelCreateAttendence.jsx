import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Pagination,
  PaginationItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  PaginationLink,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledButtonDropdown,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faTrash, faPencil ,faPlus, faLocationArrow} from "@fortawesome/pro-duotone-svg-icons";
import {
  ChevronsLeft,
  ChevronsRight,
  Plus,
  User,
  Search,
  ChevronDown,
  Check,
} from "react-feather";
import Select from "react-select";
import { getOrganizationIdFromInstitute } from "../../actions/instituteActions";
import { createTeacher } from "../../actions/teacherActions";
import './instituteModal.css'

const CreateAttendenceModal = ({ modal, toggle }) => {
    const [instituteSelect, setInstituteSelect] = useState("--SELECT--");
  const [designationSelect, setDesignationSelect] = useState("--SELECT--");
  const [data, setData] = useState({
    v_status: 0,
    first_name: "",
    last_name: "",
  });


  const handleCancel = () => {
    setInstituteSelect("--SELECT--");
    setDesignationSelect("--SELECT--");
   
    setData({
      v_status: 0,
      first_name: "",
      last_name: "",
    });
    toggle();
  };
  console.log(modal);
  return (
    <div>
      <div className='create_employee_btn_div'>
      <Button className="mr-1" color="primary"  outline onClick={handleCancel}>
      <Row>
          <Col sm='3'>
          <FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: 15, color: "#fd868c " }}
                />
          </Col>
          <Col sm='9'>
          Create 
          </Col>
          </Row>
      </Button></div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Create Student</ModalHeader>
        <ModalBody>
          <div>
              <Row>
                <Col sm="6">
                  <Label>First Name</Label>
                  <Input type="text" />
                </Col>
                <Col sm="6">
                  <Label>Last Name</Label>
                  <Input type="text" />
                </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <Label>Admission Details</Label>
                    <Input type="text" />
                  </Col>
                  <Col sm='6'>
                  <Label>Admission Date</Label>
                    <Input
                        id="date"
                        name="date"
                        type="date"
                    />
                  </Col>
                </Row>
              <Row>
                <Col sm="6">
                  <Label>Gender</Label>
                  <Select
                    id="gender"
                    value={{ value: "Male", label: "Male" }}
                    options={[
                        { value: "Male", label: "Male" },
                        { value: "Female", label: "Female" },
                      ]}
                    
                    ></Select>
                </Col>
                <Col sm="6">
                <Label>Date Of Birth</Label>
                    <Input
                        id="date"
                        name="date"
                        type="date"
                    />
                </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <Label>Mobile Number</Label>
                    <Input type="number" />
                  </Col>
                  <Col sm="6">
                    <Label>Roll Number</Label>
                    <Input type="number" />
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <Label>Class</Label>
                    <Select
                    id="class"
                    value={{ value: "Pre-KG", label: "Pre-KG" }}
                    options={[
                        { value: "Pre-KG", label: "Pre-KG" },
                        { value: "LKG", label: "LKG" },
                      ]}
                    
                    ></Select>
                  </Col>
                  <Col sm="6">
                    <Label>Section</Label>
                    <Select
                    id="section"
                    value={{ value: "Beautiful", label: "Beautiful" }}
                    options={[
                        { value: "Beautiful", label: "Beautiful" },
                        { value: "Beautiful", label: "Beautiful" },
                      ]}
                    
                    ></Select>
                  </Col>
                </Row>
              

          </div>
        </ModalBody>
        <ModalFooter>
            <Row>
               
               
                <Col sm='6'>
                <Button color="success" style={{height:'45px'}}>Submit</Button>
                </Col>
            </Row>
          
         
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateAttendenceModal;
