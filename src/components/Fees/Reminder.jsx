import React, {useState} from 'react'
import './feefolder.css'
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
  import { faCog, faDownload, faEnvelope, faPencil, faSave, faTrash, faUpload,
    faEye,
    faPencilAlt,
    faTrashAlt,
    faCoins,
    faUsers,
    faFileExcel,
    faFilePdf,
    faFileCsv,
    faBell,
    faPlus,
    faLocationArrow
} from "@fortawesome/pro-duotone-svg-icons";
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
import CreateApplication from "../Application/CreateApplication"
import SmsApplication from "../Application/SmsApplication"
import PaginationIconsAndText from "../pagination/pagination"
import FeeDownloadModal from "../Fees/FeeDownloadModal"

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const Reminder =(props)=>{
  const classes = useStyles();


    return(
        <div className="container-fluid">
            <div className="reminder_div">
                <div><h4 style={{ color: "#fd868c" }}>Reminder</h4></div>
                <div>
                <FontAwesomeIcon
                  icon={faBell}
                  style={{ fontSize: 20, color: "#fd868c " }}
                />
                </div>
              </div>
              <Card>
              <div style={{margin:'2%'}}>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Title</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Message</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action 	</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
               
              <TableCell align="center" >
                Title reminder
              </TableCell>
            
                <TableCell align="center" >
                message remainder
              </TableCell>
             
                 
                  <TableCell align="center">
               
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: 15, color: "#fd868c " }}
                />
             
                
             
             
              </TableCell>
             
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div className="reminder_footer">
      <Button className="reminder_footer_btn" color="warning">
      <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 15,  }}
                />
        Save</Button>
    </div>
              </Card>
 
        </div>
    )
}

export default Reminder