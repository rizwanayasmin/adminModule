import React, {useState} from 'react'
import './SurveyResponse.css'
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


const SurveyResponseTable =(props)=>{
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
        <div className="container-fluid response_card">
            <Card >
                <CardHeader>
                <   CardTitle style={{ color: "#fd868c" }}> Survey Response</CardTitle>
                </CardHeader>
                <CardBody>
                    <h4 style={{textDecoration:'underline',color:"rgb(103, 58, 183)"}}>Stats</h4>
                </CardBody>
            </Card>

            <Card >
                <CardBody>
                    <h4 >1.What are the staff courteous while you were here</h4>
                    <p>Response</p>
                    <div>
                    <Progress multi>
                        <Progress bar value="15" />
                        <Progress bar color="success" value="30" />
                        <Progress bar color="info" value="25" />
                        <Progress bar color="warning" value="20" />
                        <Progress bar color="danger" value="5" />
                    </Progress>
                    </div>
                </CardBody>
            </Card>

            <Card >
                <CardBody>
                    <h4 >1.What are the staff courteous while you were here</h4>
                    <p>Response</p>
                    <div>
                    <Progress multi>
                        <Progress bar value="15" />
                        <Progress bar color="success" value="30" />
                        <Progress bar color="info" value="25" />
                        <Progress bar color="warning" value="20" />
                        <Progress bar color="danger" value="5" />
                    </Progress>
                    </div>
                </CardBody>
            </Card>

            <Card >
                <CardBody>
                    <h4 >1.What are the staff courteous while you were here</h4>
                    <p>Response</p>
                    <div>
                    <Progress multi>
                        <Progress bar value="15" />
                        <Progress bar color="success" value="30" />
                        <Progress bar color="info" value="25" />
                        <Progress bar color="warning" value="20" />
                        <Progress bar color="danger" value="5" />
                    </Progress>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default SurveyResponseTable