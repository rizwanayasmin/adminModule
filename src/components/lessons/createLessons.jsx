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
import './lessons.css'
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';


const CreateLessons = ({ modal, toggle }) => {
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
        <ModalHeader toggle={toggle}>Create Lesson</ModalHeader>
        <ModalBody>
          <div>
            <Row style={{marginBottom:"12px"}}>
              <Col sm="12">
              <Label>Institution</Label>
                              <Select
                                id="classroom"
                               
                                isMulti
                                options={[
                                  { value: "All the Above", label: "All the Above" },
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                  ]}
                              
                                
                                >

        
                                </Select>
              </Col>
            </Row>
              <Row style={{marginBottom:"12px"}}>
                <Col sm="12">
                <Label>Entry Date</Label>
                    <Input
                        id="date"
                        name="date"
                        type="date"
                    />
                </Col>
                </Row>
               
              <Row style={{marginBottom:"12px"}}>
                <Col sm="12">
                  <Label>Level</Label>
                  <Select
                    id="classroom"
                    value={{ value: "PRE-KG", label: "PRE-KG" }}
                    options={[
                        { value: "PRE-KG", label: "PRE-KG" },
                        { value: "LKG", label: "LKG" },
                      ]}
                    
                    ></Select>
                </Col>
                
                </Row>
                
                <Row style={{marginBottom:"12px"}}>
                  <Col sm="12">
                    <Label>Subject</Label>
                    <Select
                    id="subject"
                    value={{ value: "English", label: "English" }}
                    options={[
                        { value: "Tamil", label: "Tamil" },
                        { value: "Hindi", label: "Hindi" },
                      ]}
                    
                    ></Select>
                  </Col>
                </Row>
                
                <Row style={{marginBottom:"12px"}}>
                  <Col sm="12">
                    <Label>Chapter</Label>
                    <Select
                    id="section"
                    value={{ value: "chapter 1", label: "chapter 1" }}
                    options={[
                        { value: "chapter 2", label: "chapter 2" },
                        { value: "chapter 3", label: "chapter 3" },
                      ]}
                    
                    ></Select>
                  </Col>
                </Row>
                <Row style={{marginBottom:"12px"}}>
                    <Col sm="12">
                        <div>
                            <Button color="info">Other Option</Button>
                        </div>
                    </Col>
                </Row>

                <Row style={{marginBottom:"12px"}}>
                    <Col sm="12">
                        <Label>Topics</Label>
                        <Select
                            id="section"
                            value={{ value: "chapter 1", label: "chapter 1" }}
                            options={[
                                { value: "chapter 2", label: "chapter 2" },
                                { value: "chapter 3", label: "chapter 3" },
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

export default CreateLessons;
