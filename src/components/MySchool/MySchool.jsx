import React, {useState} from 'react'
import './myschool.css'
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
  import { faPencil, faSave, faTrash } from "@fortawesome/pro-duotone-svg-icons";
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


const MySchool =(props)=>{
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
        {/* <Card> */}
    
        {/* <CardBody> */}
        <div className='create_attendence_parent'>
            
            <div className="survey_create_table_row_div">
                    <Row>
                        
                        
                       
                        <Col style={{marginTop:'16px'}}>
                           
                            <SurveyCreateModal 
                           modal={modal}
                           toggle={toggle}
                          />
                           

                          
                        </Col>
                    </Row>
                    </div>       
        <div className="myschool_div_card">
            <Card>
                <CardHeader style={{padding:"0px",backgroundColor:"#e6e6e5",height:"35px"}}>
                    <CardTitle style={{ color: "#fd868c" }}>School Info</CardTitle>
                </CardHeader>

                <div className="myschool_div_card_sub">
                    <Card>
                        <CardBody>
                            <h5>kolathurCBSE</h5>
                            <p>Schoole Name</p>
                        </CardBody>
                    </Card>
                </div>

                <div className="myschool_div_card_sub">
                    <Card>
                        <CardBody>
                            <h5>Schoole contact</h5>
                            <p>Address</p>
                            <p>Email</p>
                            <p>Phone Number</p>
                            <p>Website</p>
                        </CardBody>
                    </Card>
                </div>

                <div className="myschool_div_card_sub">
                    <Card>
                        <CardBody>
                            <h5>Social Media</h5>
                            <p>facebook : http://localhost:4200/</p>
                            <p>twitter : http://localhost:4200/</p>
                            <p>youtube : http://localhost:4200/</p>
                            <p>insta : http://localhost:4200/</p>

                        </CardBody>
                    </Card>
                </div>

            </Card>
        </div>


                
        </div>
        {/* </CardBody> */}
{/* </Card> */}
</div>
    )
}

export default MySchool