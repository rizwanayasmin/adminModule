import React, {useState} from 'react'
import './feefolder.css'
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
  import { faCog, faDownload, faEnvelope, faPencil, faSave, faTrash, faUpload,
    faEye,
    faPencilAlt,
    faTrashAlt,
    faCoins,
    faUsers,
    faFileExcel,
    faFilePdf,
    faFileCsv
} from "@fortawesome/pro-duotone-svg-icons";
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
import CreateApplication from "../Application/CreateApplication"
import SmsApplication from "../Application/SmsApplication"
import PaginationIconsAndText from "../pagination/pagination"
import FeeDownloadModal from "../Fees/FeeDownloadModal"

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


const FeeDashboard =(props)=>{
    const classes = useStyles();
    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);

    const [editmodal, setEditModal] = useState(false)
    const [search, setSearch] = useState("");



    // Event handlers
  const toggle = () => {
    setModal(!modal);
  };
   // Event handlers
   const toggle1 = () => {
    setModal1(!modal1);
  };

      // Event handlers for edit
      const toggled = () => {
        setEditModal(!editmodal);
      };
    return(
        <div className="container-fluid">
        <Card>
        <CardHeader>
         
              <div style={{  width:'100%',backgroundColor:'#e6e6e5',height:'45px',borderRadius:'4px'}}>
                <h4 style={{ color: "#fd868c" }}>Fee Dashboard</h4>
              </div>
          
        </CardHeader>
        <CardBody>
       
        <Row className="progress_bar_row">
                      <Col sm="12">
                      <Card>
                      <Progress multi className="progress_change">
                      <Progress bar color="success" value="20" />
                      <Progress bar color="warning" value="30" />
                      <Progress bar color="danger" value="10" />
                      </Progress>
                    </Card>
                      </Col>

                    </Row>
                    </CardBody>
</Card>
<div className="card_div_collection_main">
    <Card>
        <div className="card_div_collection">
        <div><FontAwesomeIcon
                  icon={faCoins}
                  style={{ fontSize: 50, color: "#ffd43b " }}
                />
        </div>
        <div>
            <h5>278</h5>
            <Label>Fee Collection</Label>
        </div>
        </div>
    </Card>

    <Card>
        <div className="card_div_collection">
        <div><FontAwesomeIcon
                  icon={faUsers}
                  style={{ fontSize: 50, color: "#78C000 " }}
                />
        </div>
        <div>
            <h5>278</h5>
            <Label>Total Paid</Label>
        </div>
        </div>
    </Card>

    <Card>
        <div className="card_div_collection">
        <div><FontAwesomeIcon
                  icon={faUsers}
                  style={{ fontSize: 50, color: "#c3272b " }}
                />
        </div>
        <div>
            <h5>278</h5>
            <Label>Total Unpaid</Label>
        </div>
        </div>
    </Card>

</div>
<div className='create_attendence_parent'>
                    <Row>
                    <Col>
                            <Label>Institute</Label>
                            <Select
                                id="institute"
                                value={{ value: "1", label: "1" }}
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>
                        <Col>
                            <Label>Batch</Label>
                            <Select
                                id="batch"
                                options={[
                                    { value: "2020-2021", label: "2020-2021" },
                                    { value: "2021-2022", label: "2021-2022" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>
                        <Col>
                            <Label>Level</Label>
                            <Select
                                id="level"
                                options={[
                                    { value: "I", label: "I" },
                                    { value: "II", label: "II" },
                                  ]}
                                
                                ></Select>
                            
                        </Col>

                        <Col>
                            <Label>Class</Label>
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
                <div className="has-icon-left employee_search">
                  <Input
                    type="search"
                    name="search"
                    placeholder="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </div>
              </Col>
                        </Row>
                        
                  
                        <div className="row_page_divison">
  <div className="upload_down_icon">

  {/* <div style={{display:"flex",alignItems:'center',marginRight:"12px"}}><FontAwesomeIcon
                  icon={faFileCsv}
                  style={{ fontSize: 20, color: "#78C000 ",marginRight:"6px" }}
                /> CSV</div> */}

<FeeDownloadModal 
                    modal={modal}
                    toggle={toggle}
                />

  <div style={{display:"flex",alignItems:'center',marginRight:"12px"}}><FontAwesomeIcon
                  icon={faFilePdf}
                  style={{ fontSize: 20, color: "#c3272b  ",marginRight:"6px" }}
                /> PDF</div>

  <div style={{display:"flex",alignItems:'center',marginRight:"12px"}}><FontAwesomeIcon
                  icon={faFileExcel}
                  style={{ fontSize: 20, color: "#78C000 ",marginRight:"6px" }}
                />Excel</div>

                <div style={{display:"flex",alignItems:'center'}}><FontAwesomeIcon
                  icon={faUpload}
                  style={{ fontSize: 20, color: "#ffd43b  ",marginRight:"6px" }}
                />Upload</div>
  </div>
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
                    {/* <div className="upload_down_icon">
                   
                </div> */}

<div style={{marginTop:'2%'}}>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Institute</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Stuent Name</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Admission No	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Type</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Parent Name</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Mobile No		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Amount Paid	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Amount Pending		</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action 	</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
               
              <TableCell align="center" >
                1
              </TableCell>
              <TableCell align="center">
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly', width:'50%',marginLeft:'50px'}}>
                <Avatar className={classes.small}/>
                maya</div></TableCell>
                <TableCell align="center" >
               2442
              </TableCell>
              <TableCell align="center" >
              Type
              </TableCell>
              <TableCell align="center" >
            Shirly Jones
              </TableCell>
              <TableCell align="center" >
        845963257
              </TableCell>
              
              <TableCell align="center">
             1000
             
                  </TableCell>
                  <TableCell align="center">
             1000
             
                  </TableCell>
                  <TableCell align="center">
                  <div className="icon_div_class">
                <FontAwesomeIcon
                  icon={faEye}
                  style={{ fontSize: 15, color: "Dodgerblue " }}
                />
             
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
       
       
</div>
    )
}

export default FeeDashboard