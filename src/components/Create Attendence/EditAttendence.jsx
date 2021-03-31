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

import { faEye, faTrash, faPencil ,faPlus, faLocationArrow, faWindowClose} from "@fortawesome/pro-duotone-svg-icons";
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
import "./CreateAttendence.css"

const EditAttendence = ({ editmodal, toggled }) => {
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
    toggled();
  };
//   console.log(modal);
  return (
    <div>
      
       
           <FontAwesomeIcon
                  icon={faPencil}
                  style={{ fontSize: 15, color: "#fd868c " }}
                  onClick={handleCancel}
                /> 
        
      
      <Modal isOpen={editmodal} toggled={toggled} size="lg">
        {/* <ModalHeader toggled={toggled}> */}
          <div className="editclose_div">
          <div><label className="edit_attendence_label">Edit Attendence</label></div>
          <div><FontAwesomeIcon
                  icon={faWindowClose}
                  style={{ fontSize: 30, color: "#fd868c " }}
                  onClick={handleCancel}
                /></div>
                </div>
          {/* </ModalHeader> */}

        <ModalBody>
          <div>
            <Row>
              <Col sm="6">
              <Label>Institution</Label>
                              <Select
                                id="classroom"
                                value={{ value: "1", label: "1" }}
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                  ]}
                                
                                ></Select>
              </Col>
            </Row>
              <Row>
                <Col sm="6">
                  <Label>Employee Id</Label>
                  <p>1</p>
                </Col>
                  <Col sm='6'>
                  <Label>Employee Name</Label>
                  <p>riya</p>
                  </Col>
                  
              </Row>
              <Row>
                <Col sm="6">
                  <Label>Status</Label>
                  <Select
                    id="selectInstitute"
                    value={{ value: "Present", label: "Status" }}
                    options={[
                        { value: "Present", label: "Present" },
                        { value: "Absent", label: "Absent" },
                        { value: "Late", label: "Late" },
                        { value: "OD", label: "OD" },
                      ]}
                    
                    ></Select>
                </Col>
               
                </Row>
              

          </div>
        </ModalBody>
        <ModalFooter>
            <Row>
               
               
                <Col sm='6'>
                <Button color="success" style={{height:'45px'}}>Update</Button>
                </Col>
            </Row>
          
         
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditAttendence;
