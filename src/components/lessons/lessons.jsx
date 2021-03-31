import React, {useState} from 'react'
import './lessons.css'
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
  import { faEye, faPencil, faSave, faTrashAlt } from "@fortawesome/pro-duotone-svg-icons";
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

function createData(empid, name,department,designation, status ) {
    return { empid, name,department,designation, status };
  }
  
  const rows = [
    createData("18-march-2021","English","Chapter 1","Poem", "Assignment 1"),
    createData("18-march-2021","Tamil","Chapter 2","இலக்கணம்", "Assignment 2"),
    createData("18-march-2021","Maths","Chapter 3","Formulas", "Assignment 3"),
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
          <TableCell align="center" >18-march-2021</TableCell>
          <TableCell align="center" >1</TableCell>
          <TableCell align="center" >III</TableCell>
          {/* <TableCell align="center" >Butterfly</TableCell> */}
          <TableCell align="center" >English</TableCell>
          <TableCell align="center" >Chapter 1</TableCell>  
          <TableCell align="center" >Poem</TableCell>
          <TableCell align="center" >Write the poem 2 times</TableCell>
          <TableCell align="center">
          <div style={{display:"flex", alignItems:"center",justifyContent:"space-evenly"}}>
          <FontAwesomeIcon
icon={faEye}
style={{ fontSize: 20, color:"green" }}
/>
          <EditAttendence
            //   editmodal={editmodal}
            //   toggled={toggled}
            
            />
            <FontAwesomeIcon
icon={faTrashAlt}
style={{ fontSize: 20, color:"red" }}
/>
            </div>
            
          </TableCell>

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Section
</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Subject</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Level</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Chapter</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Topic</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Assignment	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
        <TableRow >
        
          <TableCell align="center" >Butterfly</TableCell>
          <TableCell align="center" >English</TableCell>
          <TableCell align="center" >III</TableCell>
          <TableCell align="center" >Chapter 1</TableCell>  
          <TableCell align="center" >Poem</TableCell>
          <TableCell align="center" >Write the poem 2 times</TableCell>
          <TableCell align="center">
          <div style={{display:"flex", alignItems:"center",justifyContent:"space-evenly"}}>
          <FontAwesomeIcon
icon={faEye}
style={{ fontSize: 20, color:"green" }}
/>
          <EditAttendence
            
            />
            <FontAwesomeIcon
icon={faTrashAlt}
style={{ fontSize: 20, color:"red" }}
/>
            </div>
            
          </TableCell>

      </TableRow>
         
        </TableBody>
      </Table>
    
    </TableContainer> 
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


// 

const Lessons =(props)=>{
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
        <Card>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>Lessons</CardTitle>
        </CardHeader>
        <CardBody>
        <div className='create_attendence_parent'>
            
            
                    <Row>
                      <Col >
                      <Label>Institution</Label>
                              <Select
                                id="classroom"
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
                            <Label>Subject</Label>
                            <Select
                                id="subject"
                                value={{ value: "English", label: "English" }}
                                options={[
                                    { value: "Tamil", label: "Tamil" },
                                    { value: "Maths", label: "Maths" },
                                    { value: "Science", label: "Science" },
                                    { value: "Social", label: "Social" },

                                  ]}
                                
                                ></Select>
                            
                        </Col>
                        <Col style={{marginTop:'16px'}}>
                           
                            <CreateLessons 
                           modal={modal}
                           toggle={toggle}
                          />
                           

                          
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
            <h4 style={{color:'green'}}>Upcomping Lessons</h4>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}></TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Date</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Institution</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Level</TableCell>
            {/* <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Section</TableCell> */}
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Subject</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Chapter</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Topic</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Assignment	</TableCell>
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
        <h4 style={{color:'#dc3545'}}>Ongoing Lessons</h4>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}></TableCell>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Date</TableCell>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Institution</TableCell>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Level</TableCell>
          {/* <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Section</TableCell> */}


            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Subject</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Chapter</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Topic</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Assignment	</TableCell>
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
</div>
    )
}

export default Lessons