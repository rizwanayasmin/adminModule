import React, {useState} from 'react'
import './feestatus.css'
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
  import { faEye, faPenAlt, faPencil, faPencilAlt, faSave, faTrash, faTrashAlt, faWindowClose } from "@fortawesome/pro-duotone-svg-icons";
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
import { Collapse } from 'antd';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContent } from '@material-ui/core'
import EditFeestatus from "../Fee Status/EditFeeStatus"
import PaginationIconsAndText from "../pagination/pagination"

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

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
    createData("PRE-KG","2400","2","2","designation", "present"),
    createData("PRE-KG","2400","2","2","designation", "present"),
    createData("PRE-KG","2400","2","2","designation", "present"),
  ];
//dummy end 


const FeeStatus =(props)=>{
    const classes = useStyles();
    const [modal, setModal] = useState(false);
    const [editmodal, setEditModal] = useState(false)
    const [search, setSearch] = useState("");
const [ OpenDialog, setOpenDialog] = useState(false)
    // 
const handleDialogOpen = () => {
  setOpenDialog(true);
  };

const handleDialogClose = () => {
  setOpenDialog(false);
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
            <Card style={{height:'100px'}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:'12px'}}>
                        <div style={{width:"25%"}}><Label>Academic Year</Label>
                        <Select
                                id="academic"
                                value={{ value: "2021-2022", label: "2021-2022" }}
                                options={[
                                    { value: "2021-2022", label: "2021-2022" },
                                    { value: "2021-2022", label: "2021-2022" },
                                  ]}
                                
                                ></Select></div>
                                <div style={{width:"25%"}}><Label>Date</Label>
                        <Select
                                id="date"
                                value={{ value: "Today", label: "Today" }}
                                options={[
                                    { value: "This-Week", label: "This-Week" },
                                    { value: "This-Month", label: "This-Month" },
                                  ]}
                                
                                ></Select></div>

                    </div>
            </Card>
            <div>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="Default List" key="1" showArrow={false} className="panel_one_head">

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

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>S.No</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Date</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>App/Adm No.</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Batch</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Student Name</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Class</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Parent Name</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Mobile No.</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Fee Date</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Status</TableCell>
          

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
              <TableCell align="center" >{row.empid}</TableCell>
              <TableCell align="center" >{row.name}</TableCell>
              <TableCell align="center" >{row.department}</TableCell>  
              <TableCell align="center" >{row.designation}</TableCell>
              <TableCell align="center" ><div style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
              <Avatar className={classes.small}/>
                maya</div></TableCell>
              <TableCell align="center" >{row.comments}</TableCell>
              <TableCell align="center" >{row.comments}</TableCell>
              <TableCell align="center" >{row.comments}</TableCell>
              <TableCell align="center" >{row.comments}
              <FontAwesomeIcon
                              icon={faPencilAlt}
                              style={{ fontSize: 15, color:"green",marginLeft:"12px" }}
                             onClick={handleDialogOpen}
                             
                            />
              </TableCell>
              <TableCell align="center" >{row.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{padding:"12px"}}>
          <PaginationIconsAndText />
      </div>
    </TableContainer>
    </div>    
      
    </Panel>
    <Panel header="Current List" key="2" showArrow={false} className="panel_two_head">
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
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>S.No</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Date</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>App/Adm No.</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Batch</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Student Name</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Class</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Parent Name</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Mobile No.</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Fee Date</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
              <TableCell align="center" >{row.empid}</TableCell>
              <TableCell align="center" >{row.name}</TableCell>
              <TableCell align="center" >{row.department}</TableCell>  
              <TableCell align="center" >{row.designation}</TableCell>
              <TableCell align="center" ><div style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
              <Avatar className={classes.small}/>
                maya</div></TableCell>
              <TableCell align="center" >{row.comments}</TableCell>
              <TableCell align="center" >{row.comments}</TableCell>
              <TableCell align="center" >{row.comments}</TableCell>
              <TableCell align="center" >{row.comments}
              <FontAwesomeIcon
                              icon={faPencilAlt}
                              style={{ fontSize: 15, color:"green" ,marginLeft:"12px"}}
                              onClick={handleDialogOpen}
                             
                            />
              </TableCell>
              <TableCell align="center" >{row.comments}</TableCell>


             
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{padding:"12px"}}>
          <PaginationIconsAndText />
      </div>
    </TableContainer>
    </div>    
     
    </Panel>
    
  </Collapse>
            </div>

            <Dialog onClose={handleDialogClose} aria-labelledby="simple-dialog-title" open={OpenDialog}
          >
            <DialogTitle>

              <div className="dialog_close_div">
              <FontAwesomeIcon
                              icon={faWindowClose}
                              style={{ fontSize: 15, color:"red" ,marginLeft:"12px"}}
                              onClick={handleDialogClose}
                             
                            />
              </div>
            </DialogTitle>
         
            <DialogContent>
           

                <EditFeestatus />
            </DialogContent>
          </Dialog>
            {/* <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
              <EditFeestatus />
             
              
            </Dialog> */}

        </div>
    )
}

export default FeeStatus