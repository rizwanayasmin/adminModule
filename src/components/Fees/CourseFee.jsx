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

const CourseFee =(props)=>{
  const classes = useStyles();
  const [modal, setModal] = useState(false);


  // Event handlers
  const toggle = () => {
    setModal(!modal);
  };
    return(
        <div className="container-fluid">
            <div className="coursefee_div">
                <h4 style={{ color: "#fd868c" }}>Course Fee</h4>
             <Row>
             <Col>
                            <Label>Institution</Label>
                            <Select
                                id="classroom"
                                isMulti
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
             </Row>  
              </div>
              <div className='payment_setting_top_btn'>
      <Button  color="success"   >
      <Row>
          <Col sm='3'>
          <FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: 20 }}
                />
          </Col>
          <Col sm='3'>
          Create
          </Col>
          </Row>
      </Button></div>
             
              <Card>
              <div style={{margin:'2%'}}>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>SI.No	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Batch</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Level</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Course Fee</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action 	</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
               
              <TableCell align="center" >
                  1
              </TableCell>
            
                <TableCell align="center" >
                2021-2022
              </TableCell>
              <TableCell align="center" >
                I
              </TableCell>
            
                <TableCell align="center" >
                100
              </TableCell>
             
                 
                  <TableCell align="center">
              
             
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  style={{ fontSize: 15, color: "#fd868c " }}
                />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{ fontSize: 15, color: "#fd868c ",marginLeft:"6px" }}
                />
               
                
             
             
              </TableCell>
             
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
              </Card>
{/* after create */}
<div className="coursefee_div">
                <h4 style={{ color: "#fd868c" }}> Create Course Fee</h4>
             <Row>
             <Col>
                            <Label>Institution</Label>
                            <Select
                                id="classroom"
                                isMulti
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
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
                        <h5>Total Amount</h5>
                        <h5>rs.100</h5>
                        </Col>
             </Row>  
              </div>
              
           
              <Card>
              <div className="another_main_card"> 
              <Row>
             <Col>
                            <Label>Fee Type</Label>
                            <Select
                                id="classroom"
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>
                       
                        <Col>
                            <Label>Title</Label>
                            <Input type="text" />
                            
                        </Col>    
                        <Col>
                        <h5>Total Amount</h5>
                        <h5>rs.100</h5>
                        </Col>
             </Row>
             <Row>
             <Col>
                            <h4 style={{ color: "#fd868c", }}>Particulars<span style={{color:"black",fontSize:"14px"}}><Checkbox />Same as the above</span></h4>
                            <Select
                                id="classroom"
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>
                       
                        <Col>
                        
                            <div className="another_main_col_div"><Input type="text" /></div>
                            
                        </Col>    
                        <Col>
                        <div className="another_main_col_div_action"><FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: 15, color: "#fd868c " }}
                /></div>
                        </Col>
             </Row> 
             </div>
              </Card>
{/* create fee type */}
<div className="three_header_div">
<FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: 20, color: "#fd868c " }}
                />
    <h4 className="three_title"> Create New Fee Type</h4>
</div>
{/* four */}
              
<div className="four_header_div">

    <h4 className="three_title"> Fee Breakup</h4>
    
</div>
<Row style={{marginBottom:"12px"}}>
             <Col>
                            <h4 style={{ color: "#fd868c", }}>Particulars<span style={{color:"black",fontSize:"14px"}}><Checkbox />Same as the above</span></h4>
                            <Select
                                id="classroom"
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>
                       
                        <Col>
                        
                            <div className="another_main_col_div"><Input type="text" /></div>
                            
                        </Col>    
                        <Col>
                        <div className="another_main_col_div_action"><FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: 15, color: "#fd868c " }}
                /></div>
                        </Col>
             </Row>
{/* five */}
<div className="four_header_div">

    <h4 className="three_title"> Total</h4>
</div>
<div>
    <Row>
        <Col>
        <div className="total_course_fee"><h5 >Total</h5></div>
        <div className="total_course_fee"><Input type="text">Total</Input></div>
        </Col>
        <Col>
        <div>
            <h5>rs.100</h5>
        <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{ fontSize: 15, color: "#fd868c " }}
                />
        </div>
        <div className="total_course_fee_amt"><h5>rs.100</h5></div>
        </Col>
    </Row>
    <div className="confirm_course_fee_btn">
        <Button color="primary" >Confirm</Button>
    </div>
</div>

{/* six */}
<div>
    <Card>
    <div className="four_header_div">

<h4 className="three_title"> Payment Schedule</h4>
</div>
<div style={{margin:'2%'}}>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Schedule Type	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Fee Type	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Installments	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>FeeDate	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Validity	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action 	</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
               
              <TableCell align="center" >
              <Select
                                id="competetion"
                                options={[
                                    { value: "I", label: "I" },
                                    { value: "II", label: "II" },
                                  ]}
                                
                                ></Select>
              </TableCell>
            
                <TableCell align="center" >
                
              </TableCell>
              <TableCell align="center" >
                <Input type="text" />
              </TableCell>
              <TableCell align="center">
              <Input
                        id="date"
                        name="date"
                        type="date"
                    />
              </TableCell>
              <TableCell align="center" >
                
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

    </Card>
</div>
<div className="course_footer">
    <Button color="success">
    <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 20 }}
                />
        Submit</Button>
</div>
        </div>
    )
}

export default CourseFee