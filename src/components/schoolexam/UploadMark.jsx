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

import { faEye, faTrash, faPencil ,faPlus, faLocationArrow,faFileUpload, faPlug, faPenAlt, faPencilAlt, faWindowClose} from "@fortawesome/pro-duotone-svg-icons";
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




const UploadMark = ({ modal, toggle }) => {
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
      <div className='upload_entry_btn_div'>
      <Button    onClick={handleCancel}>
     
          <FontAwesomeIcon
                  icon={faPencilAlt}
                  style={{ fontSize: 20, color: "#fd868c " }}
                />
         
         
         
      </Button></div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Upload Mark</ModalHeader>
        <ModalBody>
       
              <div className="upload_mark_student_title_div">
                  <Label className="upload_mark_student_title">Student Name:</Label>
                  <h5 className="upload_mark_student_title_name">Maya</h5></div>
          <div>
              <Label className="upload_mark_student_attachement">Attachement File</Label>
              <div>
              <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}> Name	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action	</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell align="center" >Filename	</TableCell>  
             
              <TableCell align="center" ><FontAwesomeIcon
                              icon={faWindowClose}
                              style={{ fontSize: 20, color:"#fd868c" }}
                             
                             
                             
                            /></TableCell>


             
            </TableRow>
        </TableBody>
      </Table>
      
    </TableContainer>
    <div className="upload_mark_file">
        <Input type="file"/>
    </div>
    <div>
        <Label className="upload_mark_file_count">File(s) Selected:<span>1</span></Label>
    </div>
</div>
    <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}> Name	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}> Size	</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}> Progress	</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action	</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell align="center" >Filename	</TableCell>  
              <TableCell align="center" >Size	</TableCell>  
              <TableCell align="center" >Progress	</TableCell>  

             
              <TableCell align="center" ><FontAwesomeIcon
                              icon={faWindowClose}
                              style={{ fontSize: 20, color:"#fd868c" }}
                             
                             
                             
                            /></TableCell>


             
            </TableRow>
        </TableBody>
      </Table>
      
    </TableContainer>
    </div>
          </div>
        </ModalBody>
     
      </Modal>
    </div>
  );
};

export default UploadMark;
