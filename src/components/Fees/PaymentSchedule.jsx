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
import PaymentSettingModal from "../Fees/PaymentSettingModal"

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const PaymentSchedule =(props)=>{
  const classes = useStyles();
  const [modal, setModal] = useState(false);


  // Event handlers
  const toggle = () => {
    setModal(!modal);
  };
    return(
        <div className="container-fluid">
            <div className="coursefee_div">
                <h4 style={{ color: "#fd868c" }}>Payment Schedule</h4>
             <Row>
             <Col>
                            <Label>Institution</Label>
                            <Select
                                id="classroom"
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>
                        <Col>
                            <Label>Batch</Label>
                            <Select
                                id="classroom"
                                options={[
                                    { value: "2020-2021", label: "2020-2021" },
                                    { value: "2021-2022", label: "2021-2022" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>
                        <Col>
                            <Label>Level</Label>
                            <Select
                                id="competetion"
                                options={[
                                    { value: "I", label: "I" },
                                    { value: "II", label: "II" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>    
                        <Col>
                            <Label>Schedule</Label>
                            <Select
                                id="classroom"
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>
             </Row>  
              </div>
         
             
              <div>
    <Card>
  
<div style={{margin:'2%'}}>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Batch		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Level		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Schedule Type		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Total Fee Amount			</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Installments		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Date			</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Validity		</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell align="center" >
             2020-2021
              </TableCell>
              <TableCell align="center" >
             II
              </TableCell>
              <TableCell align="center" >
             type
              </TableCell>
              <TableCell align="center" >
             100
             </TableCell>
             <TableCell align="center" >
             Installments
              </TableCell>
              <TableCell align="center" >
             22-mar-2021
              </TableCell>
              <TableCell align="center" >
             validity
              </TableCell>
        
           
             
            
             
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>

    </Card>
</div>
        </div>
    )
}

export default PaymentSchedule