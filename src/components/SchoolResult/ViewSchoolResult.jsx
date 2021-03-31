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

import { faEye, faTrash, faPencil ,faPlus, faLocationArrow,faFileUpload, faPlug, faWindowClose} from "@fortawesome/pro-duotone-svg-icons";
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
import './schoolResult.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PaginationIconsAndText from "../pagination/pagination"
import Avatar from '@material-ui/core/Avatar';


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




const ViewSchoolResult = ({ modals, toggled }) => {
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
    toggled();
  };
  console.log(modals);
  return (
    <div>
      <div className='create_employee_btn_div_kolatur'>
      <h5 className="mr-1" color="primary"  outline onClick={handleCancel}>
      80%
      </h5></div>
      <Modal isOpen={modals} toggled={toggled} size="lg">
        <ModalHeader toggled={toggled}>
            <div className="view_mark_close_div">
                <div>Pre-KG BEAUTIFUL-Mathematics - Oral</div>
            <div><FontAwesomeIcon
                  icon={faWindowClose}
                  style={{ fontSize: 30, color: "#fd868c " }}
                  onClick={handleCancel}
                /></div>    
            </div> 
</ModalHeader>
        <ModalBody>
          <div style={{margin:"2%"}}>
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Roll No	</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Student Name	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>File</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Theory</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Total	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Percentage</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell align="center" >1</TableCell>
              <TableCell align="center" >
                <div style={{display:"flex",alignItems:"center"}}>
              <Avatar className={classes.small}/>
                Dhairya patel</div></TableCell>
              <TableCell align="center" >file</TableCell>
              <TableCell align="center" >0</TableCell>
              <TableCell align="center" >0</TableCell>
              <TableCell align="center" >0%</TableCell>
              <TableCell align="center" >
                  <div className="div_color"><div className="pass"></div>Pass</div>
              </TableCell>
        
             
            </TableRow>
        </TableBody>
      </Table>
      <div style={{padding:"12px"}}>
          <PaginationIconsAndText />
      </div>
    </TableContainer>
          </div>
        </ModalBody>
       
      </Modal>
    </div>
  );
};

export default ViewSchoolResult;
