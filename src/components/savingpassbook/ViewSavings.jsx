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

import { faEye, faTrash, faPencil ,faPlus, faLocationArrow,faFileUpload, faPlug, faTrophyAlt} from "@fortawesome/pro-duotone-svg-icons";
import {
  ChevronsLeft,
  ChevronsRight,
  Plus,
  User,
  Search,
  ChevronDown,
  Check,
  ToggleRight,
} from "react-feather";
import Select from "react-select";
import { getOrganizationIdFromInstitute } from "../../actions/instituteActions";
import { createTeacher } from "../../actions/teacherActions";
import './Savingpassbook.css'
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




const ViewSavings = ({ Viewmodal, istoggled }) => {
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
    ToggleRight();
  };
  console.log(Viewmodal);
  return (
    <div>
      <div className='create_employee_btn_div'>
      {/* <Button className="mr-1" color="primary"  outline > */}
      
          <FontAwesomeIcon
                  icon={faTrophyAlt}
                  style={{ fontSize: 15, color: "#fd868c " }}
                  onClick={handleCancel}
                />
         
      {/* </Button> */}
      </div>
      <Modal isOpen={Viewmodal} ToggleRight={ToggleRight} size="lg">
        <ModalHeader ToggleRight={ToggleRight}>Winner</ModalHeader>
        <ModalBody>
                <div>
                <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Roll No</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Student Name</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Level</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Class</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Prize Amount</TableCell>
         

          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow >
              <TableCell align="center" >12345</TableCell>
              <TableCell align="center" >maya</TableCell>
              <TableCell align="center" >V</TableCell>  
              <TableCell align="center" >PRE-KG</TableCell>
              <TableCell align="center" >100</TableCell>
            </TableRow>
        
        </TableBody>
      </Table>
      
    </TableContainer>
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

export default ViewSavings;
