import React, {useState} from 'react'
import './Schoolexam.css'
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
  import { faEye, faFileUpload, faIdCard, faPencil, faPencilAlt, faSave, faTrash, faTrashAlt } from "@fortawesome/pro-duotone-svg-icons";
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
import CreateSchoolExamDashboard from "../schoolexam/CreateSchoolExamDashboard"
import PaginationIconsAndText from "../pagination/pagination"
import MarkEntry from "../schoolexam/MarkEntry"
// collapse table
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
import SchoolExam from "../schoolexam/Schoolexam"

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
    createData("18-march-2021","maya","Inter-School ","type","1St Price","Good","Good","Good","Good"),
    createData("18-march-2021","maya","Inter-School ","type","1St Price","Good","Good","Good","Good"),
    createData("18-march-2021","maya","Inter-School ","type","1St Price","Good","Good","Good","Good"),
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
          <TableCell align="center" >I</TableCell>
         
          <TableCell align="center" >Pre-Contest</TableCell>
          <TableCell align="center" >HYA Pre Contest</TableCell>
          <TableCell align="center">
                     
              <FontAwesomeIcon
                              icon={faPencilAlt}
                              style={{ fontSize: 15, color:"#fd868c" }}
                             
                             
                            />
                        <FontAwesomeIcon
                              icon={faEye}
                              style={{ fontSize: 20, color:"#fd868c",marginLeft:"6px" }}
                             
                             
                            />
                      
              </TableCell>
      
   

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
            <SchoolExam />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


// 
const SchoolExamDashboard =(props)=>{
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
        <Card>
        <CardHeader>
          {/* <CardTitle style={{ color: "#fd868c" }}>Documents</CardTitle> */}
        </CardHeader>
        <CardBody>
        <div className='create_attendence_parent'>
        <img src={documents} style={{width:"100%"}}/>
        <Row>
            <Col sm="12">
            <h4 style={{ color: "#fd868c" , fontWeight:"600",padding:'12px'}}>School Exam</h4>

            </Col>
        </Row>
            
                    <Row>
                    <Col>
                            <Label>Institution</Label>
                            <Select
                                id="classroom"
                                options={[
                                    { value: "LKG", label: "LKG" },
                                    { value: "UKG", label: "UKG" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>
                        <Col>
                            <Label>Level</Label>
                            <Select
                                id="classroom"
                                options={[
                                    { value: "LKG", label: "LKG" },
                                    { value: "UKG", label: "UKG" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>
                        {/* <Col>
                            <Label>Exam Type </Label>
                            <Select
                                id="classroom"
                                options={[
                                    { value: "HYA", label: "HYA" },
                                    { value: "Annual", label: "Annual" },
                                  ]}
                                
                                ></Select>
                            
                        </Col> */}
                    
                        
                        <Col  >
                           
                            <CreateSchoolExamDashboard 
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
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}></TableCell>

          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Institution</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Level</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Type</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Title</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        <Horizontal  />
        <Horizontal  />

            {/* <TableRow >
              <TableCell align="center" >1</TableCell>
              <TableCell align="center" >LKG	</TableCell>  
              <TableCell align="center" >HYA	</TableCell>  

              <TableCell align="center" >Tamil(L2)	</TableCell>
         



              <TableCell align="center">
                     
              <FontAwesomeIcon
                              icon={faPencilAlt}
                              style={{ fontSize: 15, color:"#fd868c" }}
                             
                             
                            />
                        <FontAwesomeIcon
                              icon={faEye}
                              style={{ fontSize: 20, color:"#fd868c",marginLeft:"6px" }}
                             
                             
                            />
                      
              </TableCell>
             
            </TableRow> */}
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
<DeleteDocument />
</Dialog>
</div>
    )
}

export default SchoolExamDashboard
