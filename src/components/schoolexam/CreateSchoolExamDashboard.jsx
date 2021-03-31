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
import './Schoolexam.css'
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




const CreateSchoolExamDashboard = ({ modal, toggle }) => {
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
        <ModalHeader toggle={toggle}>Create Exam</ModalHeader>
        <ModalBody>
          <div>

          <Row style={{marginBottom:"12px"}}>
                <Col sm="6">
                  <Label>Institute</Label>
                  <Select
                    id="classroom"
                    isMulti
                    options={[
                      { value: "All The Above", label: "All The Above" },
                        { value: "1", label: "1" },
                        { value: "2", label: "2" },
                      ]}
                    
                    ></Select>
                </Col>
                
                
                <Col sm="6">
                <Label>Type</Label>
                  <Select
                    id="classroom"
                   
                    options={[
                        { value: "Assessment", label: "Assessment" },
                        { value: "Worksheet", label: "Worksheet" },
                      ]}
                    
                    ></Select>
                </Col>
                </Row>
               
                

              <Row style={{marginBottom:"12px"}}>
                <Col sm="6">
                  <Label>Title</Label>
                  <Select
                    id="classroom"
                   
                    options={[
                        { value: "HYA", label: "HYA" },
                        { value: "PA1", label: "PA1" },
                      ]}
                    
                    ></Select>
                </Col>
                
               
                <Col sm="6">
                  <Label>Class</Label>
                  <Select
                    id="classroom"
                    options={[
                        { value: "PRE-KG", label: "PRE-KG" },
                        { value: "LKG", label: "LKG" },
                      ]}
                    
                    ></Select>
                </Col>
                
                </Row>
                <Row style={{marginBottom:"12px"}}>
                <Col sm="9">
                  <div><Label>Add Internals</Label>
                  <Input type="number" /></div>
                 </Col>
                 <Col sm="3">
                  <div className="create_school_Exam_dashboard_plus"><FontAwesomeIcon
                              icon={faPlus}
                              style={{ fontSize: 15,color:'#fd868c' }}
                             
                             
                            /></div>
                  
                </Col>
                
                </Row>
                
                
                
                
               
                


                
                
              

          </div>
        </ModalBody>
        <ModalFooter>
            <Row>
               
               
                <Col sm='6'>
                <Button color="success" style={{height:'45px'}}>
                  <div style={{display:"flex"}}>
                  Submit
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

export default CreateSchoolExamDashboard;
