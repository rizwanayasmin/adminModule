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

const RPP =(props)=>{
  const classes = useStyles();
 
    return(
        <div className="container-fluid">
<div className="rpp_div">
                <h4 style={{ color: "#fd868c" }}> RPP</h4>
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
                                id="competetion"
                                options={[
                                    { value: "2020-2021", label: "2020-2021" },
                                    { value: "2020-2021", label: "2020-2021" },
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
                            <Label>Class</Label>
                            <Select
                                id="competetion"
                                options={[
                                    { value: "PRE-KG", label: "PRE-KG" },
                                    { value: "LKG", label: "LKG" },
                                  ]}
                                
                                ></Select>
                            
                        </Col> 
                        <Col>
                        <div className="has-icon-left position_search">
                  <Input
                    type="search"
                    name="search"
                    placeholder="Search by institute id"
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </div>
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
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Admission No		</TableCell>

          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Stuent Name		</TableCell>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Level		</TableCell>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Class		</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Parent Name		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Mobile No		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Amount Paid			</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Renewel Date			</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action 	</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
            <TableCell align="center" >
             2244
              </TableCell>
              <TableCell align="center" >
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly', width:'50%',marginLeft:'20px'}}>
                <Avatar className={classes.small}/>
                maya</div>
              </TableCell>
            
              <TableCell align="center" >
             II
              </TableCell>
              
              <TableCell align="center" >
             lkg
              </TableCell>
              <TableCell align="center" >
             Shirly Jones
             </TableCell>
             <TableCell align="center" >
             8762549835
              </TableCell>
              <TableCell align="center" >
             100
              </TableCell>
              <TableCell align="center" >
             10-mar-2021
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
</div>

        </div>
    )
}

export default RPP