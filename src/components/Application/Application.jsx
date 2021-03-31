import React, {useState} from 'react'
import './application.css'
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
    faTrashAlt
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
    createData(1,"riya","department","designation", "present"),
    createData(1,"maya","department","designation", "present"),
    createData(1,"yamini","department","designation", "present"),
  ];
//dummy end 


const Application =(props)=>{
    const classes = useStyles();
    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);

    const [editmodal, setEditModal] = useState(false)
    const [search, setSearch] = useState("");



    // Event handlers
  const toggle = () => {
    setModal(!modal);
  };
   // Event handlers
   const toggle1 = () => {
    setModal1(!modal1);
  };

      // Event handlers for edit
      const toggled = () => {
        setEditModal(!editmodal);
      };
    return(
        <div className="container-fluid">
        <Card>
          <div className="icon_top_corner">
          <div style={{display:"flex",alignItems:'center',marginRight:'12px'}}><FontAwesomeIcon
                  icon={faCog}
                  style={{ fontSize: 20, color: "#fd868c " }}
                />Setting</div>

               
                <SmsApplication
                 modal1={modal1}
                 toggle1={toggle1}
                 className="sms_app"
                />

                <CreateApplication 
                    modal={modal}
                    toggle={toggle}
                />
          </div>
        <CardHeader>
         
              <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between', width:'100%',backgroundColor:'#e6e6e5',height:'45px',borderRadius:'4px'}}>
                <h4 style={{ color: "#fd868c" }}>Admission</h4>
               <h4 style={{ color: "#fd868c" }}>Level-wise</h4>
               
               
              </div>
          
        </CardHeader>
        <CardBody>
       
        <Row className="progress_bar_row">
                      <Col sm="12">
                      <Card>
                      <Progress multi className="progress_change">
                      <Progress bar color="success" value="20" />
                      <Progress bar color="warning" value="30" />
                      <Progress bar color="danger" value="10" />
                      </Progress>
                    </Card>
                      </Col>

                    </Row>
                    </CardBody>
</Card>
<div className='create_attendence_parent'>
                    <Row>
                    <Col>
                            <Label>Institute</Label>
                            <Select
                                id="institute"
                                value={{ value: "1", label: "1" }}
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>
                        <Col>
                            <Label>Classroom</Label>
                            <Select
                                id="classroom"
                                value={{ value: "Pre-kg", label: "Pre-kg" }}
                                options={[
                                    { value: "LKG", label: "LKG" },
                                    { value: "UKG", label: "UKG" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>
                        <Col>
                            <Label>Year</Label>
                            <Select
                                id="selectInstitute"
                                value={{ value: "butterfly", label: "butterfly" }}
                                options={[
                                    { value: "butterfly", label: "butterfly" },
                                    { value: "butterfly", label: "butterfly" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>
                        <Col>
                <div className="has-icon-left employee_search">
                  <Input
                    type="search"
                    name="search"
                    placeholder="mobile number"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </div>
              </Col>
                        </Row>
                        
                  
                        <div className="row_page_divison">
  <div className="upload_down_icon">
  <div style={{display:"flex",alignItems:'center',marginRight:"12px"}}><FontAwesomeIcon
                  icon={faDownload}
                  style={{ fontSize: 20, color: "dodgerblue ",marginRight:"6px" }}
                />Download</div>

                <div style={{display:"flex",alignItems:'center'}}><FontAwesomeIcon
                  icon={faUpload}
                  style={{ fontSize: 20, color: "green ",marginRight:"6px" }}
                />Upload</div>
  </div>
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

            <div className="table_content_div">
                <Row style={{width:'100%'}}>
                    <Col >
                    <h5 style={{color:"#fd868c", fontWeight:"600"}}>All</h5>
                    </Col>

                    <Col >
                    <h5 style={{color:"#fd868c", fontWeight:"600"}}>Enquiry</h5>
                    </Col>

                    <Col >
                    <h5 style={{color:"#fd868c", fontWeight:"600"}}>Application</h5>
                    </Col>

                    <Col >
                    <h5 style={{color:"#fd868c", fontWeight:"600"}}>Admission</h5>
                    </Col>

                    <Col >
                    <h5 style={{color:"#fd868c", fontWeight:"600"}}>Not Interested</h5>
                    </Col>

                    <Col >
                    <h5 style={{color:"#fd868c", fontWeight:"600"}}>Rejected</h5>
                    </Col>

                   
                    
                </Row>
               
               
               
                
               
                
                
            </div>

                        
                           
                           

                          
                      
                    
                    


{/* table data */}
                {/* <DataTable
                    columns={createAttendenceColumn}
                    customStyles={customStyles}
                    selectableRows
                    onSelectedRowsChange={(state) => {
                    console.log(state.selectedRows);
                    }}
                    pagination
                    highlightOnHover
              /> */}

{/* dummy table content */}
                  

<div style={{marginTop:'2%'}}>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
            
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>S No</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Date</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>App/Adm No</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Batch</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Student</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Class	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Parent</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Source	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Mobile Number 	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Fee Date	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Status	</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
               
              <TableCell align="center" >
                {row.empid}
              </TableCell>
              <TableCell align="center">
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly', width:'50%',marginLeft:'50px'}}>
                <Avatar className={classes.small}/>
                {row.name}</div></TableCell>
                <TableCell align="center" >
                {row.department}
              </TableCell>
              <TableCell align="center" >
                {row.department}
              </TableCell>
              <TableCell align="center" >
                {row.department}
              </TableCell>
              <TableCell align="center" >
                {row.designation}
              </TableCell>
              <TableCell align="center">
              {row.designation}
             
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
           
                
        </div>
       
       
</div>
    )
}

export default Application