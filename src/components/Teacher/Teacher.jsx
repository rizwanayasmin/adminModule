import React, {useState} from 'react'
import './teacher.css'
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
import CreatePromotion from "../promotion/UpdatePromotion"
import ImgSubject from "../../images/annocement.jpg"
import CreateTeacher from "../Teacher/CreateTeacher"
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

function createData(empid, name,department,designation, status,comments ) {
    return { empid, name,department,designation, status,comments };
  }
  
  const rows = [
    createData("1","maya","Female","teacher","8769512354", "2"),
    createData("1","maya","Female","teacher","8769512354", "2"),
    createData("1","maya","Female","teacher","8769512354", "2"),
  ];
//dummy end 


const Teacher =(props)=>{
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
           
        <div className='create_attendence_parent'>
            <h4 className="title_subject">Teacher and Feedback</h4>
            <Row>
            <Col >
                <Label>Institute</Label>
                <Select
                    id="institute"
                    value={{ value: "1", label: "1" }}
                    options={[
                        { value: "2", label: "2" },
                        { value: "3", label: "3" },
                        ]}
                    
                    ></Select>
                </Col>
                <Col >
                    <Label>Department</Label>
                    <Select
                        id="classroom"
                        value={{ value: "Pre-kg", label: "Pre-kg" }}
                        options={[
                            { value: "LKG", label: "LKG" },
                            { value: "UKG", label: "UKG" },
                            ]}
                        
                        ></Select>
                    
                </Col>
                <Col >
                <Label>Designation</Label>
                <Select
                    id="institute"
                    value={{ value: "1", label: "1" }}
                    options={[
                        { value: "2", label: "2" },
                        { value: "3", label: "3" },
                        ]}
                    
                    ></Select>
                </Col>
                <Col>
                <div className="has-icon-left employee_search">
                  <Input
                    type="search"
                    name="search"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </div>
                </Col>
                
                <div className="create_btn_class">
                    
                        
                        <CreateTeacher 
                        modal={modal}
                        toggle={toggle}
                        />
                    
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
            
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>User</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Emp ID </TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Name</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Designation</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Mobile Number</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
              <TableCell align="center" ><div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly', width:'50%',marginLeft:'50px'}}>
                <Avatar className={classes.small}/>
                </div></TableCell>
              <TableCell align="center">{row.empid}</TableCell>
              <TableCell align="center" >{row.name}</TableCell>
              <TableCell align="center" >{row.designation}</TableCell>
              <TableCell align="center" >{row.status}</TableCell>
             


              <TableCell align="center">
                  <div className="icon_div_class">
                <FontAwesomeIcon
                  icon={faEye}
                  style={{ fontSize: 15, color: "Dodgerblue " }}
                />
                {/* <EditAttendence
                  editmodal={editmodal}
                  toggled={toggled}
                
                /> */}
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  style={{ fontSize: 15, color: "green " }}
                />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{ fontSize: 15, color: "red " }}
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
        {/* </CardBody>
</Card> */}
</div>
    )
}

export default Teacher