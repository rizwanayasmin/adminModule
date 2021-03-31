import React, {useState} from 'react'
import './CreateAttendence.css'
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


const CreateAttendence =(props)=>{
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
          <CardTitle style={{ color: "#fd868c" }}>Student</CardTitle>
        </CardHeader>
        <CardBody>
        <div className='create_attendence_parent'>
            
            
                    <Row>
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
                            <Label>Section</Label>
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
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </div>
              </Col>
                        {/* <Col style={{marginTop:'16px'}}>
                           
                            <CreateAttendenceModal 
                           modal={modal}
                           toggle={toggle}
                          />
                           

                          
                        </Col> */}
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
            
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Student</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Roll Number</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Student Name</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Gender</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Parent Name	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Mobile Number</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>DOC	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action</TableCell>
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
              <TableCell align="center">
                <div style={{display:"flex", alignItems:"center",justifyContent:"space-evenly"}}>
                <FontAwesomeIcon
icon={faEye}
style={{ fontSize: 20, color:"green" }}
/>
                <EditAttendence
                  editmodal={editmodal}
                  toggled={toggled}
                
                />
                
<FontAwesomeIcon
icon={faTrashAlt}
style={{ fontSize: 20, color:"red" }}
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

export default CreateAttendence