import React, {useState} from 'react'
import './online.css'
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
import PaginationIconsAndText from "../pagination/pagination"
import CreateOnline from "../Online/CreateOnline"


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
    createData("18-march-2021","maya","Inter-School ","type","1St Price","Good","Good","Good","Good"),
    createData("18-march-2021","maya","Inter-School ","type","1St Price","Good","Good","Good","Good"),
    createData("18-march-2021","maya","Inter-School ","type","1St Price","Good","Good","Good","Good"),
  ];
//dummy end 


const Online =(props)=>{
    const classes = useStyles();
    const [modal, setModal] = useState(false);
    const [editmodal, setEditModal] = useState(false)
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false)



// dialog

const handleOpen = () => {
    setOpen(true);
   
    };
    
    const handleClose = () => {
    setOpen(false);
    };
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
        
        <div className='create_attendence_parent'>
        <Row>
            <Col sm="12">
            <h4 style={{ color: "#fd868c" , fontWeight:"600",padding:'12px'}}>Online Exam</h4>

            </Col>
        </Row>
            
                    <div className="exam_type_div">
                        <Row>
                            <Col><Label>Institution</Label>
                            <Select
                                id="classroom"
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                  ]}
                                  className="select_insti_exam_type"
                                  ></Select></Col>
                            
                       <Col>
                       <Label>Level</Label>
                            <Select
                                id="classroom"
                                options={[
                                    { value: "I", label: "I" },
                                    { value: "II", label: "II" },
                                  ]}
                                  className="select_insti_exam_type"
                                  ></Select>
                               
                               </Col>
                       <Col>
                       <Label>Type</Label>
                            <Select
                                id="classroom"
                                options={[
                                    { value: "Worksheet", label: "Worksheet" },
                                    { value: "Assessment", label: "Assessment" },
                                  ]}
                                  className="select_insti_exam_type"
                                  ></Select>
                       </Col>
              
                       <Col>
                       <Label> Date</Label>
                    <Input
                        id="date"
                        name="date"
                        type="date"
                    />
                       </Col>
                
                    <Col>    
                            <CreateOnline 
                           modal={modal}
                           toggle={toggle}
                          />
                                                      </Col>    
                                                      </Row>

                           </div>
                      
                    

<div className="upcoming_admin_online_div">
    <h4 className="upcoming_admin_online">Upcoming Test</h4>
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
<Card>
        {/* <CardHeader>
          <CardTitle style={{ color: "#fd868c" , fontWeight:"600" }}>Online Exam</CardTitle>
        </CardHeader> */}
        <CardBody>
<div style={{marginTop:'2%'}}>
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
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Schedule	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Level</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Type</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Subject	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Exam Title		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Max Mark		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Min Mark		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
              <TableCell align="center" ><div>30-Mar-2021</div>
<div>13:00</div></TableCell>
              <TableCell align="center" >XI</TableCell>
              <TableCell align="center" >CRP -PART II</TableCell>
              <TableCell align="center" >COMPUTER SCIENCE	</TableCell>
              <TableCell align="center" >CRP	</TableCell>
              <TableCell align="center" >50	</TableCell>
              <TableCell align="center" >50	</TableCell>

              <TableCell align="center">
                        <FontAwesomeIcon
                              icon={faPencilAlt}
                              style={{ fontSize: 15, color:"#fd868c" }}
                             
                             
                            />
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          style={{ fontSize: 15, color:'#fd868c',marginLeft:"6px" }}
                          onClick={handleOpen}
                        />
                    
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
    
           
                
        {/* </div> */}
        </CardBody>
</Card>
<div className="upcoming_admin_online_div">
    <h4 className="ongoing_admin_online">Ongoing Test</h4>
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
<Card>
        {/* <CardHeader>
          <CardTitle style={{ color: "#fd868c" , fontWeight:"600" }}>Online Exam</CardTitle>
        </CardHeader> */}
        <CardBody>
<div style={{marginTop:'2%'}}>
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
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Schedule	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Level</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Type</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Subject	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Exam Title		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Max Mark		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Min Mark		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
              <TableCell align="center" ><div>30-Mar-2021</div>
<div>13:00</div></TableCell>
              <TableCell align="center" >XI</TableCell>
              <TableCell align="center" >CRP -PART II</TableCell>
              <TableCell align="center" >COMPUTER SCIENCE	</TableCell>
              <TableCell align="center" >CRP	</TableCell>
              <TableCell align="center" >50	</TableCell>
              <TableCell align="center" >50	</TableCell>

              <TableCell align="center">
                        <FontAwesomeIcon
                              icon={faPencilAlt}
                              style={{ fontSize: 15, color:"#fd868c" }}
                             
                             
                            />
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          style={{ fontSize: 15, color:'#fd868c',marginLeft:"6px" }}
                          onClick={handleOpen}
                        />
                    
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
    
           
                
        {/* </div> */}
        </CardBody>
</Card>
</div>
<Dialog  
  className="request_check"
  aria-labelledby="simple-dialog-title" 
  open={open}
  onClose={handleClose}
>
<DeleteDocument />
</Dialog>
</div>
    )
}

export default Online
