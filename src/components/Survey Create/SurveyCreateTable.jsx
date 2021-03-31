import React, {useState} from 'react'
import './surveycreate.css'
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
  import { faPencil, faSave, faTrash,faEye, faTrashAlt, faPaperclip, faPencilAlt } from "@fortawesome/pro-duotone-svg-icons";
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
import SurveyCreateModal from "../Survey Create/SurveyCreateModal"
import PaginationIconsAndText from "../pagination/pagination"
import ViewSurveyModal from "../Survey Create/ViewSurveyModal"


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
    createData(1,"1","department","designation", "present"),
    createData(1,"2","department","designation", "present"),
    createData(1,"3","department","designation", "present"),
  ];
//dummy end 


const SurveyCreateTable =(props)=>{
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
          <CardTitle style={{ color: "#fd868c" }}>Create Survey</CardTitle>
        </CardHeader>
        <CardBody>
        <div className='create_attendence_parent'>
            
            <div className="survey_create_table_row_div_change">
                   
                        <div style={{width:"25%"}}><Label>Institute</Label>
                            <Select
                                id="institute"
                                value={{ value: "1", label: "1" }}
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                  ]}
                                
                                ></Select>
                        </div>
                           
                            <SurveyCreateModal 
                           modal={modal}
                           toggle={toggle}
                          />
                           

                          
                       
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
            
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>S No</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Institution</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Survey Name</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
               
              <TableCell align="center" >{row.empid}</TableCell>
              <TableCell align="center" >{row.name}</TableCell>

              <TableCell align="center" >{row.department}</TableCell>

              <TableCell align="center">
                <div style={{display:'flex',alignItems:"center",justifyContent:'center'}}>
               
                <div style={{marginRight:"12px"}}><ViewSurveyModal
                  editmodal={editmodal}
                  toggled={toggled}
                
                />
                </div>
                 <FontAwesomeIcon
                  icon={faPencilAlt}
                  style={{ fontSize: 15, color: "#fd868c ",marginRight:"12px" }}
                />
                 <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{ fontSize: 15, color: "#fd868c " }}
                />
                <FontAwesomeIcon
                  icon={faPaperclip}
                  style={{ fontSize: 15, color: "#fd868c ",marginLeft:"12px" }}
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
</div>
    )
}

export default SurveyCreateTable