import React, {useState} from 'react'
import './AdmissionDoc.css'
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
  import { faEye, faPaperclip, faPenAlt, faPencil, faPencilAlt, faSave, faTrash, faTrashAlt } from "@fortawesome/pro-duotone-svg-icons";
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

function createData(empid, name,department,designation,mobile,batch,admin,date, status,comments ) {
    return { empid, name,department,designation, status,comments };
  }
  const rows = [
    createData(1,"20-feb-2021","2014","III","Nakshatra","PRE-KG","Shirly","9629748938","Present"),
    createData(1,"20-feb-2021","2014","III","Nakshatra","PRE-KG","Shirly","9629748938","Present"),
    createData(1,"20-feb-2021","2014","III","Nakshatra","PRE-KG","Shirly","9629748938","Present"),
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
          <TableCell align="center" >144</TableCell>
          <TableCell align="center" >III</TableCell>
          <TableCell align="center" ><div style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
              <Avatar style={{width:'30px',height:'30px'}}/>
                maya</div></TableCell>
          <TableCell align="center" >V</TableCell>
          <TableCell align="center" >shirly Jones</TableCell>  
          <TableCell align="center" >8754269875</TableCell>
          <TableCell align="center" >Present</TableCell>
          <TableCell align="center">
          <div className="collapse_icon_div_table">
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
              <div className="collapse_icon_div_lesson_main">                
              <Row style={{marginTop:"12px"}}>
               
                <Col>
                <div className="collapse_icon_div_lesson_icon">
                  <FontAwesomeIcon
                  icon={faPaperclip}
                  style={{ fontSize: 15, color: "Dodgerblue " }}
                />
                <FontAwesomeIcon
                  icon={faEye}
                  style={{ fontSize: 15, color: "Dodgerblue ",marginLeft:"12px" }}
                />
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  style={{ fontSize: 15, color: "green ",marginLeft:"12px" }}
                />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{ fontSize: 15, color: "red ",marginLeft:"12px" }}
                />
                
             </div>
                </Col>

                
              </Row>
              <Row style={{marginTop:"12px"}}>
                <Col>
                <Label className="collapse_icon_div_lesson_main_label">Filename:</Label>
                <Label className="collapse_icon_div_lesson_main_label_content">education certificate	</Label>
                </Col>
                
                <Col>
                <Label className="collapse_icon_div_lesson_main_label">Attachement:</Label>
                <Label className="collapse_icon_div_lesson_main_label_content">added attachement	</Label>
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

const AdmissionDoc =(props)=>{
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
                <Label>Level</Label>
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
            <div className="has-icon-left employee_search_icon">
                  <Input
                    type="search"
                    name="search"
                    placeholder="mobile number"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </div>
            </Col>
            </Row>
 
 <div className="admin_doc_admin">
     <div><h4 className=" employee_search_icon_title">Admission Document</h4></div>
    
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
<div style={{marginTop:'2%'}}>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
            
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>S.No	</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Date</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>App/Adm No.</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Batch	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Student Name</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Class	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Parent Name	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Mobile No.	</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Status	</TableCell>
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
       
</div>
    )
}

export default AdmissionDoc