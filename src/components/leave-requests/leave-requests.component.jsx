import React, {useState} from 'react'
import './leaveRequest.css'
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
  import { faCheck, faClock, faPencil, faSave, faTimes, faTrash } from "@fortawesome/pro-duotone-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import DataTable from "react-data-table-component";
  import customStyles from "../../assets/custom-data-styles/customDataStyles";
  import createAttendenceColumn from "../../assets/data-table-columns/createAttendenceColumn"
  import CreateAttendenceModal from  "../popupModels/modelCreateAttendence"
  import CreateLessons from "../lessons/createLessons"
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
import leaveRequest from "../../images/LeaveRequest.jpg"
import Dialog from '@material-ui/core/Dialog';
import LeaveRequestCheck from "../leave-requests/LeaveRequestCheck"
import PaginationIconsAndText from "../pagination/pagination"
// collapse table
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function createData(empid, name,department,designation, status,comments ) {
    return { empid, name,department,designation, status,comments };
  }
  
  const rows = [
    createData("maya","PRE-KG"," 18-march-2021","18-march-2021", " English","Good"),
    createData("maya","PRE-KG"," 18-march-2021","18-march-2021", " English","Good"),
    createData("maya","PRE-KG"," 18-march-2021","18-march-2021", " English","Good"),
  ];
//dummy end 

// collapse
function Horizontal(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
         <TableCell align="center" style={{width:"5%"}}>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            </TableCell>
            <TableCell align="center" >1</TableCell>
          <TableCell align="center" >18-march-2021</TableCell>
          <TableCell align="center" ><div style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
              <Avatar style={{width:"30px",height:"30px"}}/>
                maya</div></TableCell>
          <TableCell align="center" >V</TableCell>
          <TableCell align="center" >PRE-KG</TableCell>
          <TableCell align="center" >18-march-2021</TableCell>  
          <TableCell align="center" >18-march-2021</TableCell>
          <TableCell align="center" >5</TableCell>
          <TableCell align="center" >Vacation</TableCell>
          <TableCell align="center" >Going to Native</TableCell>
          <TableCell align="center" >
                    <div className="warning_div">
                        <FontAwesomeIcon
                          icon={faClock}
                          style={{ fontSize: 15 }}
                        />
                         Pending
                    </div>
                  
              </TableCell>
          <TableCell align="center">
              <div style={{display:"flex", alignItems:"center",justifyContent:"space-evenly"}}>
              <FontAwesomeIcon
                              icon={faCheck}
                              style={{ fontSize: 15, color:"green" }}
                              // onClick={handleOpen}
                             
                            />
                            <FontAwesomeIcon
                              icon={faTimes}
                              style={{ fontSize: 15, color:"red" }}
                             
                            />
                </div>
                  
              </TableCell>

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <div className="collapse_icon_div_lesson_main">                
              {/* <Row style={{marginTop:"12px"}}> */}
                {/* <Col>
                <div className="collapse_icon_div_lesson_request">
                <FontAwesomeIcon
                              icon={faCheck}
                              style={{ fontSize: 15, color:"green", marginRight:"12px" }}
                             
                            />
                            <FontAwesomeIcon
                              icon={faTimes}
                              style={{ fontSize: 15, color:"red" }}
                             
                            />
                </div>
                </Col> */}

                
              {/* </Row> */}
              <Row style={{marginTop:"12px"}}>
                <Col>
                <Label className="collapse_icon_div_lesson_main_label">Subject:</Label>
                <Label className="collapse_icon_div_lesson_main_label_content">Vacation</Label>
                
               
                </Col>
                </Row>
              <Row style={{marginTop:"12px"}}>
                <Col>
                <Label className="collapse_icon_div_lesson_main_label">Description:</Label>
                <Label className="collapse_icon_div_lesson_main_label_content">Going to Native</Label>
                </Col>
              </Row>
         
              </div> 
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


// 

const LeaveRequests =(props)=>{
    const classes = useStyles();
    const [modal, setModal] = useState(false);
    const [editmodal, setEditModal] = useState(false)
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false)




    // Event handlers
  const toggle = () => {
    setModal(!modal);
  };

      // Event handlers for edit
      const toggled = () => {
        setEditModal(!editmodal);
      };



// dialog

const handleOpen = () => {
  setOpen(true);
 
  };
  
  const handleClose = () => {
  setOpen(false);
  };
    return(
        <div className="container-fluid">
        <Card>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>Leave Request</CardTitle>
        </CardHeader>
        <CardBody>
        <div className='create_attendence_parent'>
            <img src={leaveRequest} style={{width:"100%"}}/>
            
            <Row style={{paddingTop:"12px"}}>
                      <Col >
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
                            <Label>Level</Label>
                            <Select
                                id="subject"
                                options={[
                                    { value: "I", label: "I" },
                                    { value: "II", label: "II" },
                                    { value: "III", label: "III" },

                                  ]}
                                
                                ></Select>
                            
                        </Col>
                        <Col>
                            <Label>Classroom</Label>
                            <Select
                                id="classroom"
                                options={[
                                    { value: "LKG", label: "LKG" },
                                    { value: "UKG", label: "UKG" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>
                        
                     
                        
                    </Row>          
                    


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
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}></TableCell>

          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Institution</TableCell>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}> Date</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Student Name</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Level</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Class</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>From</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>To</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Days</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Subject	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Description</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Status</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        <Horizontal  />

        </TableBody>
      </Table>
      <div style={{padding:"12px"}}>
          <PaginationIconsAndText />
      </div>
    </TableContainer>
    </div>    
  </div>
</CardBody>
</Card>

<Dialog  
  className="request_check"
  aria-labelledby="simple-dialog-title" 
  open={open}
  onClose={handleClose}
>
<LeaveRequestCheck />
</Dialog>
</div>
    )
}

export default LeaveRequests