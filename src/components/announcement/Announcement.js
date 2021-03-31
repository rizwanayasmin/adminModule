import React, {useState} from 'react'
import './Announcement.css'
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
    CardFooter,
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
import CreateSavings from "../savingpassbook/CreateSavings"
import CreateAnnocement from "../announcement/CreateAnnocement"

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


const Annocement =(props)=>{
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
           <img src={documents} style={{width:"100%"}}/>
        <Card>
        <CardBody style={{paddingTop:'0px'}}>
        <div className='create_attendence_parent'>
       
       
            <h4 style={{ color: "#fd868c" , fontWeight:"600",padding:'12px'}}>Annocement</h4>

           
            <div style={{display:"flex",alignItems:"center",justifyContent:'space-between'}}>

                          <div  style={{display:"flex"}}><div style={{width:'200px'}}>
                              <Label>Institution</Label>
                              <Select
                                id="classroom"
                                value={{ value: "1", label: "1" }}
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                  ]}
                                
                                ></Select>
                          </div>  
                    
                          <div style={{width:'200px', marginLeft:'12px'}}>
                              <Label>Level</Label>
                              <Select
                                id="classroom"
                                value={{ value: "I", label: "I" }}
                                options={[
                                    { value: "II", label: "II" },
                                    { value: "III", label: "III" },
                                  ]}
                                
                                ></Select>
                          </div>  
                          <div style={{width:'200px', marginLeft:'12px'}}>
                              <Label>Class</Label>
                              <Select
                                id="classroom"
                                value={{ value: "Kolathur", label: "Kolathur" }}
                                options={[
                                    { value: "LKG", label: "LKG" },
                                    { value: "UKG", label: "UKG" },
                                  ]}
                                
                                ></Select>
                          </div>  
                          </div>
                       
                          <div> 
                            <CreateAnnocement 
                           modal={modal}
                           toggle={toggle}
                          />
                           </div>

                          
                       
                    </div>



    
           
                
        </div>
        </CardBody>
       
        <div className='annocement_mini_card_div'>
  <Card >
      <div>
       
       <div className='annocement_eye'>
       <h5>Exam Time Table</h5>
        <div className="annocement_icons">
        <FontAwesomeIcon
icon={faEye}
style={{ fontSize: 20, color:"dodgerblue" }}
/>
<FontAwesomeIcon
icon={faPencilAlt}
style={{ fontSize: 20, color:"green" }}
/>
<FontAwesomeIcon
icon={faTrashAlt}
style={{ fontSize: 20, color:"red" }}
/>
        </div>                     

                           
                        {/* </Tooltip> */}
         </div> 
        <p>Dear Students Annual Exam going to held on March 10,2021 onwards.</p>
        <h6 className='annocement_mini_card_date'> Admin | 05-Feb-2021</h6>
      </div>
  </Card>
</div>
       
</Card>

</div>
    )
}

export default Annocement

