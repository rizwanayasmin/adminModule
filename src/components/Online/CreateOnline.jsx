import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
//   Table,
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

import { faEye, faTrash, faPencil ,faPlus, faLocationArrow,faFileUpload, faPlug} from "@fortawesome/pro-duotone-svg-icons";
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
import './online.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  }));
   
function createData(empid, name,department,designation, status ) {
    return { empid, name,department,designation, status };
  }
  
  const rows = [
    createData("18-march-2021","L2 CLASSWORK","VII ","CONTINUE WRITING IN CLASSWORK	"),
   
  ];




const CreateOnline = ({ modal, toggle }) => {
    const classes = useStyles();

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
        <ModalHeader toggle={toggle}>Create Exam </ModalHeader>
        <ModalBody>
          <div>
                <Row >
                    <Col sm="6">
                    <Label>Institution</Label>
                            <Select
                                id="classroom"
                                isMulti
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                  ]}
                                  ></Select>
                    </Col>
                <Col sm="6">
                <Label> Date</Label>
                    <Input
                        id="date"
                        name="date"
                        type="date"
                    />
                </Col>
                
                </Row>
                <Row>
                    <Col sm="6">
                    <Label>Level</Label>
                            <Select
                                id="classroom"
                                isMulti
                                options={[
                                    { value: "I", label: "I" },
                                    { value: "II", label: "II" },
                                  ]}
                                  ></Select>
                    </Col>
                    <Col sm="6">
                    <Label>Subject</Label>
                            <Select
                                id="classroom"
                                isMulti
                                options={[
                                    { value: "English", label: "English" },
                                    { value: "Tamil", label: "Tamil" },
                                  ]}
                                  ></Select>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                    <Label>Title</Label>
                           <Input type="text" />
                    </Col>
                    <Col sm="6">
                    <Label>Type</Label>
                            <Select
                                id="classroom"
                                isMulti
                                options={[
                                    { value: "Assessment", label: "Assessment" },
                                    { value: "Worksheet", label: "Worksheet" },
                                  ]}
                                  ></Select>
                    </Col>
                </Row>
                <Row>
                    
                    <Col >
                    <Label>is Online</Label>
                            <Select
                                id="classroom"
                                isMulti
                                options={[
                                    { value: "Yes", label: "Yes" },
                                    { value: "No", label: "No" },
                                  ]}
                                  ></Select>
                    </Col>
                    <Col >
                    <Label>Max marks</Label>
                           <Input type="number" />
                    </Col>
                    <Col >
                    <Label>min marks</Label>
                           <Input type="number" />
                    </Col>
                </Row>
          </div>
        </ModalBody>
        <ModalFooter>
            <Row>
               
               
                <Col sm='6'>
                   
                <Button color="success" style={{height:'45px'}}>
                  <div style={{display:"flex"}}>
                  Create
                <FontAwesomeIcon
                              icon={faLocationArrow}
                              style={{ fontSize: 15,marginLeft:"12px" }}
                             
                             
                            />
                            </div>
                </Button>
                </Col>
            </Row>
          
         
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateOnline;
