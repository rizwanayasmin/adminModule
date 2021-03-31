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

const FeeSetting =(props)=>{
  const classes = useStyles();
 
    return(
        <div className="container-fluid">
<div className="rpp_div">
                <h4 style={{ color: "#fd868c" }}> Fee Setting</h4>
             <Row>
             <Col sm="6">
             <Card>
                 <div className="fee_setting_card_one">
                <div className="fee_setting"><h4 style={{ color: "#fd868c" }}>Create Fee Payment Type</h4></div>
                <Label  className="fee_setting_card_one_label">Type<span style={{color:"red"}}>*</span></Label>
                <Input type="text" />
                <div className="fee_setting_card_one_btn">
                    <Button color="success">
                    <FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: 20 }}
                />
                        Add</Button>
                </div>
                </div>     
             </Card>
             </Col>
             <Col sm="6">
             <Card>
                 <div className="fee_setting_card_one">
                <div className="fee_setting"><h4 style={{ color: "#fd868c" }}>Create Fee Type</h4></div>
                <Label  className="fee_setting_card_one_label">Name<span style={{color:"red"}}>*</span></Label>
                <Input type="text" />
                <div className="fee_setting_card_one_btn">
                    <Button color="success">
                    <FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: 20 }}
                />
                        Add</Button>
                </div>
                </div>     
             </Card>
             </Col>
             </Row>  

{/* second row */}
            <Row>
            <Col sm="6">
                        <Card>
                        <div style={{margin:'2%'}}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow style={{backgroundColor:'#fcf1f1'}}>
                    <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>SI.No			</TableCell>
                        <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Feetype		</TableCell>
                        <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action 	</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                        
                        <TableCell align="center" >
                        Default
                        </TableCell>
                        <TableCell align="center" >
                        <Select
                                id="batch"
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                  ]}
                                
                                ></Select>
                        </TableCell>
                        <TableCell align="center">
                            <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>  
                            <FontAwesomeIcon
                            icon={faEye}
                            style={{ fontSize: 15, color: "#fd868c " }}
                            />
                            <FontAwesomeIcon
                            icon={faPencilAlt}
                            style={{ fontSize: 15, color: "#fd868c " }}
                            />
                            <FontAwesomeIcon
                            icon={faTrashAlt}
                            style={{ fontSize: 15, color: "#fd868c " }}
                            />
                    </div>
                        
                            
                        
                        
                        </TableCell>
                        
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
                </div>   
                        </Card>
                        </Col>
                        <Col sm="6">
                        <Card>
                        <div style={{margin:'2%'}}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow style={{backgroundColor:'#fcf1f1'}}>
                    <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>SI.No			</TableCell>
                        <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Fee Name		</TableCell>
                        <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action 	</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                        
                        <TableCell align="center" >
                        1
                        </TableCell>
                        <TableCell align="center" >
                        Name
                        </TableCell>
                        <TableCell align="center">
                            <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>  
                            <FontAwesomeIcon
                            icon={faEye}
                            style={{ fontSize: 15, color: "#fd868c " }}
                            />
                            <FontAwesomeIcon
                            icon={faPencilAlt}
                            style={{ fontSize: 15, color: "#fd868c " }}
                            />
                            <FontAwesomeIcon
                            icon={faTrashAlt}
                            style={{ fontSize: 15, color: "#fd868c " }}
                            />
                    </div>
                        
                            
                        
                        
                        </TableCell>
                        
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
                </div>   
                        </Card>
                        </Col>
                        </Row>
                        <Row>
             <Col sm="6">
             <Card>
                 <div className="fee_setting_card_one">
                <div className="fee_setting"><h4 style={{ color: "#fd868c" }}>Create Fee Particulars</h4></div>
                <Label  className="fee_setting_card_one_label">Particulars<span style={{color:"red"}}>*</span></Label>
                <Input type="text" />
                <div className="fee_setting_card_one_btn">
                    <Button color="success">
                    <FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: 20 }}
                />
                        Add</Button>
                </div>
                </div>     
             </Card>
             </Col>
             
             </Row>  
             <Row>
            <Col sm="6">
                        <Card>
                        <div style={{margin:'2%'}}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow style={{backgroundColor:'#fcf1f1'}}>
                    <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>SI.No			</TableCell>
                        <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Feetype		</TableCell>
                        <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action 	</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                        
                        <TableCell align="center" >
                        1
                        </TableCell>
                        <TableCell align="center" >
                        Type
                        </TableCell>
                        <TableCell align="center">
                            <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>  
                            <FontAwesomeIcon
                            icon={faEye}
                            style={{ fontSize: 15, color: "#fd868c " }}
                            />
                            <FontAwesomeIcon
                            icon={faPencilAlt}
                            style={{ fontSize: 15, color: "#fd868c " }}
                            />
                            <FontAwesomeIcon
                            icon={faTrashAlt}
                            style={{ fontSize: 15, color: "#fd868c " }}
                            />
                    </div>
                        
                            
                        
                        
                        </TableCell>
                        
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
                </div>   
                        </Card>
                        </Col>
                        </Row>
              </div>


        </div>
    )
}

export default FeeSetting