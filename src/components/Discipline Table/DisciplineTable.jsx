import React, {useState} from 'react'
import './discipline.css'
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
import DisciplineTableModal from "../Discipline Table/DisciplineTableModal"


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
    createData("18-march-2021","maya","Inter-School ","type","1St Price","Good"),
    createData("18-march-2021","maya","Inter-School ","type","1St Price","Good"),
    createData("18-march-2021","maya","Inter-School ","type","1St Price","Good"),
  ];
//dummy end 


const DisciplineTable =(props)=>{
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
            <h4 style={{ color: "#fd868c" , fontWeight:"600",padding:'12px'}}>Discipline</h4>

            </Col>
        </Row>
            
                    <div className="insti">
                            <div className="insti_label"><Label>Institution</Label>
                            <Select
                                id="classroom"
                                value={{ value: "Pre-kg", label: "Pre-kg" }}
                                options={[
                                    { value: "LKG", label: "LKG" },
                                    { value: "UKG", label: "UKG" },
                                  ]}
                                
                                ></Select>
                            </div>
                        {/* </Col>
               
                   
                        
                        <Col style={{marginTop:'16px'}} > */}
                           
                            <DisciplineTableModal 
                           modal={modal}
                           toggle={toggle}
                          />
                           

                          
                        {/* </Col>
                    </Row> */}
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

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Date</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Name</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Section</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Issues</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Status</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Remarks</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Comments</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
              <TableCell align="center" >10-08-2020</TableCell>
              <TableCell align="center" >maya</TableCell>
              <TableCell align="center" >butterfly</TableCell>  
              <TableCell align="center" >coming late</TableCell>  
              <TableCell align="center" >18-08-2020</TableCell>  
              <TableCell align="center" >18-08-2020</TableCell>  
              <TableCell align="center" >18-08-2020</TableCell>  

 


              <TableCell align="center">
                  <div>
                        <FontAwesomeIcon
                              icon={faPencilAlt}
                              style={{ fontSize: 15, color:"green" }}
                            />
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          style={{ fontSize: 15, color:'red',marginLeft:'12px' }}
                        />
                    </div>
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

export default DisciplineTable
