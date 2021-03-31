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
import './document.css'
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




const CreateDocument = ({ modal, toggle }) => {
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
        <ModalHeader toggle={toggle}>Create Document</ModalHeader>
        <ModalBody>
          <div>
            <Row style={{marginBottom:"12px"}}>
              <Col sm="12">
              <Label>Institution</Label>
                              <Select
                                id="classroom"
                                isMulti
                                value={{ value: "1", label: "1" }}
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                  ]}
                                
                                ></Select>
              </Col>
            </Row>
              <Row style={{marginBottom:"12px"}}>
                <Col sm="12">
                <Label> Date</Label>
                    <Input
                        id="date"
                        name="date"
                        type="date"
                    />
                </Col>
                </Row>
               
                <Row style={{marginBottom:"12px"}}>
                <Col sm="12">
                  <Label>Title</Label>
                 <Input type="text" />
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
                    <Label>Note</Label>
                    <Input type="text" />
                  </Col>
                </Row>
                
               
                <Row style={{marginBottom:"12px"}}>
                    <Col sm="12">
                        <div>
                            <Button color="info">
                            <FontAwesomeIcon
                              icon={faPlus}
                              style={{ fontSize: 15, color:"doderblue" }}
                             
                             
                            />
                                Add Document</Button>
                        </div>
                    </Col>
                </Row>


                <Row style={{marginBottom:"12px"}}>
                    <Col sm="12">
                        <Input type="file" />
                    </Col>
                </Row>

                <div style={{marginTop:'2%'}}>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Name</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Size</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Progress</TableCell>
     

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
              <TableCell align="center" >{row.empid}</TableCell>
              <TableCell align="center" >{row.name}</TableCell>
              <TableCell align="center" >{row.department}
              <FontAwesomeIcon
                              icon={faFileUpload}
                              style={{ fontSize: 15, color:"#c3272b" }}
                             
                             
                            />
              </TableCell>  
        
              
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
              

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

export default CreateDocument;
