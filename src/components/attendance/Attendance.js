import React, {useState} from 'react'
import './attendence.css'
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
  import { faExclamationTriangle, faPencil, faSave, faTrash, faWindWarning ,faEye,faTrashAlt} from "@fortawesome/pro-duotone-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import DataTable from "react-data-table-component";
  import customStyles from "../../assets/custom-data-styles/customDataStyles";
  import createAttendenceColumn from "../../assets/data-table-columns/createAttendenceColumn"
  import CreateAttendenceModal from  "../popupModels/modelCreateAttendence"
  import EditAttendence from "../Create Attendence/EditAttendence"
  import UpdateAttendence from "../attendance/UpdateAttendence"
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
    createData("1","riya","department","designation", "present"),
    createData("2","maya","department","designation", "present"),
    createData("3","yamini","department","designation", "present"),
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
          {/* <TableCell align="center" >Butterfly</TableCell>
          <TableCell align="center" >English</TableCell> */}
          <TableCell align="center" >
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            style={{ fontSize: 15, color: "#fd868c " }}
                          />
                </TableCell>
                <TableCell align="center" >
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            style={{ fontSize: 15, color: "#fd868c " }}
                          />
                </TableCell>
                <TableCell align="center" >
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            style={{ fontSize: 15, color: "#fd868c " }}
                          />
                </TableCell>
                <TableCell align="center" >
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            style={{ fontSize: 15, color: "#fd868c " }}
                          />
                </TableCell>
                <TableCell align="center" >
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            style={{ fontSize: 15, color: "#fd868c " }}
                          />
                </TableCell>
                <TableCell align="center">
                <div style={{display:"flex", alignItems:"center",justifyContent:"space-evenly"}}>
                <FontAwesomeIcon
icon={faEye}
style={{ fontSize: 20, color:"green" }}
/>
<UpdateAttendence
                    
                  
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
                <div>
                <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>


            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Class</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Teacher Name</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Total Strength</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Present</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Late	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Absent		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>OD		</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Precentage	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow >

          <TableCell align="center" >LKG</TableCell>
          <TableCell align="center" >Shalini</TableCell>

          <TableCell align="center" >40</TableCell>
       
          <TableCell align="center" >
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            style={{ fontSize: 15, color: "#fd868c " }}
                          />
                </TableCell>
                <TableCell align="center" >
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            style={{ fontSize: 15, color: "#fd868c " }}
                          />
                </TableCell>
                <TableCell align="center" >
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            style={{ fontSize: 15, color: "#fd868c " }}
                          />
                </TableCell>
                <TableCell align="center" >
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            style={{ fontSize: 15, color: "#fd868c " }}
                          />
                </TableCell>
                <TableCell align="center" >
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            style={{ fontSize: 15, color: "#fd868c " }}
                          />
                </TableCell>
                <TableCell align="center">
                <div style={{display:"flex", alignItems:"center",justifyContent:"space-evenly"}}>
                <FontAwesomeIcon
icon={faEye}
style={{ fontSize: 20, color:"green" }}
/>
<UpdateAttendence
                    
                  
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
                </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


// 

const Attendence =(props)=>{
    const classes = useStyles();
    const [modal, setModal] = useState(false);
    const [editmodal, setEditModal] = useState(false)
    const [search, setSearch] = useState("");
    const [open, setOpen] = React.useState(false);



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
          <CardTitle style={{ color: "#fd868c" }}>Attendence</CardTitle>
        </CardHeader>
        <CardBody>
          
        <div className='create_attendence_parent'>
            
            
                    <Row>
                      <Col >
                        <Label>Total Students</Label>
                        <h5 style={{color:"#C3272B", fontWeight:"600"}}>9788</h5>
                      </Col>
                      <Col>
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

                      <Col >
                        <Label>Date </Label>
                            <Input
                                id="date"
                                name="date"
                                type="date"
                            />
                        </Col>

                        {/* <Col>
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
                            <Label>Section</Label>
                            <Select
                                id="selectInstitute"
                                value={{ value: "butterfly", label: "butterfly" }}
                                options={[
                                    { value: "butterfly", label: "butterfly" },
                                    { value: "butterfly", label: "butterfly" },
                                  ]}
                                
                                ></Select>
                            
                        </Col> */}
                        
                       
                    </Row>
                    <Row className="progress_bar_row">
                      <Col sm="12">
                      <Card>
                      <Progress multi className="progress_change">
                      <Progress bar color="success" value="40" />
                      <Progress bar color="warning" value="40" />
                      <Progress bar color="danger" value="20" />
                      </Progress>
                    </Card>
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

          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Institute</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Level</TableCell>

            {/* <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Section</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Teacher</TableCell> */}
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Total Strength</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Present</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Late	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Absent		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>OD		</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Precentage	</TableCell>
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

export default Attendence



