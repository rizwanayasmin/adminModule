import React, {useState} from 'react'
import './classroom.css'
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
  import { faEye, faPenAlt, faPencil, faPencilAlt, faSave, faTrash, faTrashAlt } from "@fortawesome/pro-duotone-svg-icons";
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
import Grid from '@material-ui/core/Grid';
import CreateClassroom from "../classroom/CreateClassroom"
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
    createData("PRE-KG","2400","2","2","designation", "present"),
    createData("PRE-KG","2400","2","2","designation", "present"),
    createData("PRE-KG","2400","2","2","designation", "present"),
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
          <TableCell align="center" >III</TableCell>
          <TableCell align="center" >10</TableCell>
          <TableCell align="center" >25</TableCell>  
       
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
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>

          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Class Limit</TableCell>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Subject</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Vaccancy</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Total Present</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow className={classes.root}>
        <TableCell align="center" >40</TableCell>
        <TableCell align="center" >English</TableCell>

          <TableCell align="center" >10</TableCell>
          <TableCell align="center" >25</TableCell>  
       
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

const Classroom =(props)=>{
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
        {/* <Card>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>Classroom</CardTitle>
        </CardHeader>
        <CardBody> */}
        <div className='create_attendence_parent'>
           <div className="create_btn_class_changes"> 
            
                <div style={{width:'30%'}}><Label>Institute</Label>
                <Select
                    id="institute"
                    value={{ value: "1", label: "1" }}
                    options={[
                        { value: "2", label: "2" },
                        { value: "3", label: "3" },
                        ]}
                    
                    ></Select>
                </div>
           
            <div >
                    
                        
                    <CreateClassroom 
                    modal={modal}
                    toggle={toggle}
                    />
                
            
            </div>
           
            </div>
            <Row>
                <div className="card_content_div">
                    <Grid container spacing={2}>
                        <Grid item xs={4} lg={4}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Classrooms:</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div className="card_body_shadow">

                                    </div>
                                </CardBody>
                            </Card>
                        </Grid>

                        <Grid item xs={4} lg={4}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Students:</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div className="card_body_shadow">
                                        
                                    </div>

                                </CardBody>
                            </Card>
                        </Grid>

                        <Grid item xs={4} lg={4}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Vacancy:</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div className="card_body_shadow">
                                        
                                    </div>
                                </CardBody>
                            </Card>
                        </Grid>

                    </Grid>
                    
                </div>
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
            {/* <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Class</TableCell> */}
            {/* <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Class Limit</TableCell> */}
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Vacancy</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Total Present</TableCell>
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
        {/* </CardBody>
</Card> */}
</div>
    )
}

export default Classroom