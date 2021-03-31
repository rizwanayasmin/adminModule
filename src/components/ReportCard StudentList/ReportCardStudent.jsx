import React, {useState} from 'react'
import './reportCardStudent.css'
import {
    Row,
    Col,
    Input,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Label,
    Button,
    CardFooter,
  } from "reactstrap";
  import { Search } from "react-feather";
  import Select from "react-select";
  import { faEye, faFileUpload, faPencil, faPencilAlt, faSave, faTrash, faTrashAlt } from "@fortawesome/pro-duotone-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import DataTable from "react-data-table-component";
  import customStyles from "../../assets/custom-data-styles/customDataStyles";
  import createAttendenceColumn from "../../assets/data-table-columns/createAttendenceColumn"
  import CreateAttendenceModal from  "../popupModels/modelCreateAttendence"
  import EditAttendence from "../Create Attendence/EditAttendence"
  import CreateDocument from "../documents/CreateDocument"
// dummy table
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { Progress } from 'reactstrap';
import Avatar from '@material-ui/core/Avatar';
import documents from "../../images/documents.jpg"
import Dialog from '@material-ui/core/Dialog';
import DeleteDocument from "../documents/DeleteDocument"
import CreateExtraCurricular from "../Extra Curricular/CreateExtraCurricular"
import CreateSavings from "../savingpassbook/CreateSavings"
import CreateAnnocement from "../announcement/CreateAnnocement"

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

function createData(empid, name,department,designation, status,comments ) {
    return { empid, name,department,designation, status,comments };
  }
  const rows = [
    createData("18-march-2021","maya","Inter-School ","type","1St Price","Good"),
    createData("18-march-2021","maya","Inter-School ","type","1St Price","Good"),
    createData("18-march-2021","maya","Inter-School ","type","1St Price","Good"),
  ];
//dummy end 


const ReportCardStudent =(props)=>{
    const classes = useStyles();

    return(
        <div className="container-fluid">
            <div>
                <h5  className="card_student_div">Student List</h5>
            </div>
            <div>
                <h5  className="card_student_div_exam_type">HYA</h5>
            </div>
<div style={{marginTop:"12px"}}>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Roll No</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Student Name	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>ReportCard</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
            <TableRow >
              <TableCell align="center" >1</TableCell>
              <TableCell align="center" >Maya</TableCell>
              <TableCell align="center">
              
                        <FontAwesomeIcon
                          icon={faEye}
                          style={{ fontSize: 15, color:'#fd868c' }}
                        />
                   
              </TableCell>
             
            </TableRow>
      
        </TableBody>
      </Table>
    </TableContainer>
</div>
        </div>
    )
}

export default ReportCardStudent
