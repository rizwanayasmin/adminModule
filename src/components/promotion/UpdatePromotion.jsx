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
import './promotion.css'

const CreatePromotion = ({ modal, toggle }) => {
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
          Update 
          </Col>
          </Row>
      </Button></div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        {/* <ModalHeader toggle={toggle}>Create Subject</ModalHeader>
        <ModalBody>
          <div>
          <Row>
                  <Col sm="6">
                    <Label>Sybject Name</Label>
                    <Input type="text" />
                  </Col>
                  <Col sm="6">
                    <Label>Subject code</Label>
                    <Input type="text" />
                  </Col>
                </Row>
              <Row>
             
                <Col sm="6">
                  <Label>Subject Type</Label>
                  <Select
                    id="subtype"
                    value={{ value: "1", label: "1" }}
                    options={[
                        { value: "2", label: "2" },
                        { value: "2", label: "2" },
                      ]}
                    
                    ></Select>
                </Col>
                <Col sm="6">
               
                <Label>Class</Label>
                  <Select
                    id="level"
                    value={{ value: "PRE-KG", label: "PRE-KG" }}
                    options={[
                        { value: "PRE-KG", label: "PRE-KG" },
                        { value: "LKG", label: "LKG" },
                      ]}
                    
                    ></Select>
                </Col>
                </Row>
               
          
              

          </div>
        </ModalBody> */}
        <ModalFooter>
            <Row>
               
               
                <Col sm='6'>
                <Button color="success" style={{height:'45px'}}>update</Button>
                </Col>
            </Row>
          
         
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreatePromotion;
