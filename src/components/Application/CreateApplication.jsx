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
import './application.css'

const CreateApplication = ({ modal, toggle }) => {
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
        <ModalHeader toggle={toggle}>Create Application</ModalHeader>
        <ModalBody>
          <div>
            <Row>
                <Col sm="6">
                  <Label>Institute ID</Label>
                  <Select
                    id="institute"
                    isMulti
                    options={[
                        { value: "1", label: "1" },
                        { value: "2", label: "2" },
                      ]}
                    
                    ></Select>
                </Col>

                <Col sm="6">
                  <Label>Admission for Academic Year*</Label>
                  <Select
                    id="staff"
                    value={{ value: "2021-2022", label: "2021-2022" }}
                    options={[
                        { value: "2021-2022", label: "2021-2022" },
                        { value: "2021-2022", label: "2021-2022" },
                      ]}
                    
                    ></Select>
                </Col>
            </Row>

            <Row>
              <Col sm="6">
                <Label>Student First Name</Label>
                <Input type="text" />
              </Col>
              <Col sm="6">
                <Label>Student Last Name</Label>
                <Input type="text" />
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <Label>Gender</Label>
                <Select
                    id="select"
                    value={{ value: "Male", label: "Male" }}
                    options={[
                        { value: "Female", label: "Female" },
                        { value: "Male", label: "Male" },
                      ]}
                    
                    ></Select>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <Label>Level</Label>
                <Select
                    id="select"
                    value={{ value: "PRE-KG", label: "PRE-KG" }}
                    options={[
                        { value: "PRE-KG", label: "PRE-KG" },
                        { value: "LKG", label: "LKG" },
                      ]}
                    
                    ></Select>
              </Col>
            </Row>

            <Row>
              <Col sm="12">
                <Label>Exsisting parent</Label>
                <Select
                    id="select"
                    value={{ value: "Yes", label: "Yes" }}
                    options={[
                        { value: "No", label: "No" },
                        { value: "Yes", label: "Yes" },
                      ]}
                    
                    ></Select>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <Label>Mobile Number</Label>
                <Input type="number" />
              </Col>
            </Row>
            <Row>
              <Col sm="6">
                      <Label>Parent Name</Label>
                      <Input type="text" />
              </Col>
              <Col sm="6">
                <Label>Relationship</Label>
                <Select
                    id="relationship"
                    value={{ value: "Father", label: "Father" }}
                    options={[
                        { value: "Mother", label: "Mother" },
                        { value: "Other", label: "Other" },
                      ]}
                    
                    ></Select>
                
                </Col>
            </Row>
            <Row>
              <Col sm="6">
                <Label>Status</Label>
                <Select
                    id="relationship"
                    value={{ value: "Father", label: "Father" }}
                    options={[
                        { value: "Mother", label: "Mother" },
                        { value: "Other", label: "Other" },
                      ]}
                    
                    ></Select>
              </Col>
              <Col sm="6">
                <Label>Status Remark</Label>
                <Input type="textarea" />
              </Col>
            </Row>
      
            <Row>
              <Col sm="6">
                <Label>SMS</Label>
                <Select
                    id="relationship"
                    value={{ value: "Father", label: "Father" }}
                    options={[
                        { value: "Mother", label: "Mother" },
                        { value: "Other", label: "Other" },
                      ]}
                    
                    ></Select>
              </Col>
              <Col sm="6">
                <Label>Messagek</Label>
                <Input type="textarea" />
              </Col>
            </Row>
      
               
               
          
              

          </div>
        </ModalBody>
        <ModalFooter>
            <Row>
               
            <div className="teacher_btn_div">   
           
           <Button color="success" style={{height:'45px'}}>Create</Button>
            </div>
            </Row>
          
         
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateApplication;
