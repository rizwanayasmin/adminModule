import React, {useState} from 'react'
import './MsgRecords.css'
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
  } from "reactstrap";
  import { Search } from "react-feather";
  import Select from "react-select";
  import { faEye, faPenAlt, faPencil, faPencilAlt, faSave, faTrash, faTrashAlt } from "@fortawesome/pro-duotone-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import DataTable from "react-data-table-component";
  import customStyles from "../../assets/custom-data-styles/customDataStyles";
  import createAttendenceColumn from "../../assets/data-table-columns/createAttendenceColumn"
  import CreateAttendenceModal from  "../popupModels/modelCreateAttendence"
  import EditAttendence from "../Create Attendence/EditAttendence"
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
import Grid from '@material-ui/core/Grid';
import CreateClassroom from "../classroom/CreateClassroom"
import PaginationIconsAndText from "../pagination/pagination"


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
    createData("PRE-KG","2400","2","2","designation", "present"),
    createData("PRE-KG","2400","2","2","designation", "present"),
    createData("PRE-KG","2400","2","2","designation", "present"),
  ];
//dummy end 


const MsgRecords =(props)=>{
    const classes = useStyles();
    const [modal, setModal] = useState(false);
    const [editmodal, setEditModal] = useState(false)
    const [search, setSearch] = useState("");



    // Event handlers
  const toggle = () => {
    setModal(!modal);
  };

      // Event handlers for edit
      const toggled = () => {
        setEditModal(!editmodal);
      };
    return(
        <div className="container-fluid">
            {/* <h4 className="msg_records_title">Message History</h4> */}
            <Card>
            <h4 className="msg_records_title_correction">Message History</h4>

            <div className="row_page">
<Label className="row_label">Row</Label>
                            <Select
                                id="row"
                                value={{ value: "10", label: "10" }}
                                options={[
                                    { value: "15", label: "15" },
                                    { value: "20", label: "20" },
                                    { value: "25", label: "25" },
                                    { value: "30", label: "30" },
                                    { value: "50", label: "50" },                                    
                                    { value: "75", label: "75" },
                                    { value: "100", label: "100" },


                                  ]}
                                
                                ></Select>
</div>
            <div style={{marginTop:'2%'}}>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
            
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600',fontSize:'18px'}}>Date</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600',fontSize:'18px'}}>Audiance</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600',fontSize:'18px'}}>Msg</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600',fontSize:'18px'}}>No. of users</TableCell>
           

            {/* <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
               
              <TableCell align="center" >
                {row.empid}
              </TableCell>
        
                <TableCell align="center" >
                {row.department}
              </TableCell>
              <TableCell align="center" >
                {row.department}
              </TableCell>
              <TableCell align="center" >
                {row.department}
              </TableCell>
             
             
             
                  
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{padding:"12px"}}>
          <PaginationIconsAndText />
      </div>
    </TableContainer>
    </div>
            </Card>
        </div>
    )
}

export default MsgRecords