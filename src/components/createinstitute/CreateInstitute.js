import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// socialFacebook,
// } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  delInstitute,
  listInstitutes,
  saveInstitute,
} from "../../actions/instituteActions";
import { Row, Col, Input,Label, Card, CardBody } from "reactstrap";
import { Search } from "react-feather";
import DataTable from "react-data-table-component";
import customStyles from "../../assets/custom-data-styles/customDataStyles";
import institueColumns from "../../assets/data-table-columns/instituteColumn";
import ModalInstitute from "../popupModels/modalInsititute.component";
import './CreateInstitute.css'
// material ui
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
// select
import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// pagination
import Pagination from '../pagination/pagination'
// Accordion
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Select from "react-select";




const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein,result,comments) {
  return { name, calories, fat, carbs, protein,result,comments };
}

const rows = [
  createData('246', '246','woocampus','20-feb-2021','school','mathur'),
  createData('246', '246','woocampus','20-feb-2021','school','mathur'),
  createData('246', '246','woocampus','20-feb-2021','school','mathur'),
  createData('246', '246','woocampus','20-feb-2021','school','mathur'),
  createData('246', '246','woocampus','20-feb-2021','school','mathur'),
];

// academics
const academics = [
  createData('20-feb-2021', '20-feb-2021','woocampus','20-feb-2021','school'),
  createData('20-feb-2021', '20-feb-2021','woocampus','20-feb-2021','school'),
  createData('20-feb-2021', '20-feb-2021','woocampus','20-feb-2021','school'),

];

// admin user set up
const admin_user = [
  createData('student', 'parent'),
  createData('student', 'parent'),


];
// location
const location = [
  createData('75', 'shanthi colony','anna nagar east','arun store','chennai','600058','Tamil Nadu'),

];
// bank
const bank = [
  createData('edwin', 'ICICI ekkattutangal','123456789654','ICIC0000000000'),
  createData('riya', 'ICICI ekkattutangal','123456789654','ICIC0000000000'),
  

];
// contact
const contact = [
  createData('www.test.com', '04435226600','woocampus@gmail.com','9876543215'),
  createData('www.test.com', '04435226600','woocampus@gmail.com','9876543215'),
  createData('www.test.com', '04435226600','woocampus@gmail.com','9876543215'),

];
const CreateInstitute = () => {
  // States
  const classes = useStyles();
  const [age, setAge] = React.useState('');

 

  // 
  const [isEdit, setIsEditActive] = useState(false);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [lists, setInsList] = useState([]);
  const [insAllDetails, setInsAllDetails] = useState({
    instituteId: "",
    instituteName: "",
    instituteType: null,
    yearOfEstablishment: "",
    branch: "",
    buildingNo: "",
    streetName: "",
    area: "",
    landmark: "",
    city: "",
    pincode: "",
    state: "",
    website: "",
    landline: "",
    mobile: "",
    email: "",
    socialFacebook: "",
    socialTwitter: "",
    socialLinkedIn: "",
    socialInstagram: "",
    bankName: "",
    bankBranch: "",
    bankAccountNo: "",
    bankIfsc: "",
    organization_id: "",
    academicYear: {
      start: "",
      end: "",
      admissionPrefix: "",
      admissionStart: "",
    },
    teacherPrefix: "",
    user: {
      username: "",
      password: "",
    },
  });

  // Redux store access
  const insList = useSelector((state) => state.instituteLists);
  const { instituteLists, loading, error } = insList;
  const dispatch = useDispatch();

  const ins = useSelector((state) => state.institute);
  const { institute, loading: saveLoading, error: saveError } = ins;

  const insDelete = useSelector((state) => state.instituteDelete);
  const {
    instituteDelete,
    loading: deleteLoading,
    error: deleteError,
  } = insDelete;

  //Life cycle methods
  useEffect(() => {
    dispatch(listInstitutes(setInsList, openModel, deleteInstitute));
    return () => {};
  }, [saveLoading, deleteLoading]);

  // Reset states
  const resetStates = () => {
    setInsAllDetails({
      _id: "",
      instituteId: "",
      instituteName: "",
      instituteType: null,
      yearOfEstablishment: "",
      branch: "",
      buildingNo: "",
      streetName: "",
      area: "",
      landmark: "",
      city: "",
      pincode: "",
      state: "",
      website: "",
      landline: "",
      email: "",
      mobile: "",
      socialFacebook: "",
      socialTwitter: "",
      socialLinkedIn: "",
      socialInstagram: "",
      bankName: "",
      bankBranch: "",
      bankAccountNo: "",
      bankIfsc: "",
      organization_id: "",
      academicYear: {
        start: "",
        end: "",
        admissionPrefix: "",
        admissionStart: "",
      },
      teacherPrefix: "",
      user: {
        username: "",
        password: "",
      },
    });
  };
  const toggle = () => {
    setModal(!modal);
  };

  // Save Event handlers
  const handleSave = (e) => {
    e.preventDefault();
    console.log(insAllDetails);
    dispatch(saveInstitute(insAllDetails));
    setModal(false);
    resetStates();
  };
  // Event handlers
  const updateHandler = () => {
    dispatch(saveInstitute(insAllDetails));
    setModal(false);
    resetStates();
  };

  const openModel = (instituteDetails) => {
    setInsAllDetails(instituteDetails);
    setModal(true);
    setIsEditActive(true);
  };

  const deleteInstitute = (insId, insName) => {
    let isTrue = window.confirm(`Are you sure you want to delete ${insName}`);
    if (isTrue) {
      dispatch(delInstitute(insId));
    }
  };

  const handleCreateIns = (e) => {
    resetStates();
    setIsEditActive(false);
    setModal(true);
  };

  const handleCancel = (e) => {
    resetStates();
    setIsEditActive(false);
    setModal(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // 
  const handleChangeRow = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="container-fluid">
      <Card>
        <CardBody>
          <div className="create_institute_filter_head_div">
           <Row style={{width:"50%"}}>
             <Col sm="6">
             <Label>Institution</Label>
                            <Select
                                id="classroom"
                                value={{ value: "Pre-kg", label: "Pre-kg" }}
                                options={[
                                    { value: "LKG", label: "LKG" },
                                    { value: "UKG", label: "UKG" },
                                  ]}
                                
                                ></Select>
             </Col>
             <Col sm="6">
             <div className="has-icon-left position_search">
                  <Input
                    type="search"
                    name="search"
                    placeholder="Search by institute id"
                    value={search}
                    onChange={handleSearch}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </div>
             </Col>
           </Row>
           
               
              
             
              
              
          <div >
            <Row>
              <Col>
                <ModalInstitute
                  {...{
                    lists,
                    modal,
                    toggle,
                    insAllDetails,
                    setInsAllDetails,
                    handleSave,
                    handleCancel,
                    updateHandler,
                    instituteLists,
                    isEdit,
                    handleCreateIns,
                  }}
                />
              </Col>
            </Row>
          </div>
              {/* </Col>
            </Row> */}
            
          </div>
         

         
          
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <DataTable
              data={lists.filter((ins) => {
                return ins.instituteId
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })}
              columns={institueColumns}
              customStyles={customStyles}
              selectableRows
              onSelectedRowsChange={(state) => {
                console.log(state.selectedRows);
              }}
              pagination
              highlightOnHover
            />
          )} */}
        </CardBody>
        <Card>
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
{/* one */}

<div style={{margin:"2%"}}>
<TableContainer component={Paper}>
<h5 className='table_head_title' style={{ color:'#c3272b ',fontWeight:'600',padding:"12px"}}>Institute Details</h5>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
       
          <TableRow>
          
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Organization ID</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Institute ID</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Institute Name</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Year Of Establishment</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Institute Type</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Branch</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center">{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
    </Card>
    {/* academic */}
    <div style={{margin:"2%"}}>
<TableContainer component={Paper}>
<h5 className='table_head_title' style={{ color:'#c3272b ',fontWeight:'600',padding:"12px"}}>Academic Setup </h5>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
       
          <TableRow>
          
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Start</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>End</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Admission prefix</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Admission Start</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Teacher prefix</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">20-march-2021</TableCell>
              <TableCell align="center">20-march-2021</TableCell>
              <TableCell align="center">224</TableCell>
              <TableCell align="center">20-march-2021</TableCell>
              <TableCell align="center">334</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
    {/*  */}
  
    {/* admin user */}


    <Card>
          
          <div className='accordion_div'>
           
              <div style={{margin:"2%"}}>
        <TableContainer component={Paper}>
        <h5 className='table_head_title' style={{ color:'#c3272b ',fontWeight:'600',padding:"12px"}}>Admin user setup</h5>

      <Table className={classes.table} aria-label="simple table">

        <TableHead>  

          <TableRow>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>UserName</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Password</TableCell>
          </TableRow>

        </TableHead>

        <TableBody>
          {admin_user.map((val) => (
            <TableRow key={val.name}>
              <TableCell align="center">
                {val.name}
              </TableCell>
              <TableCell align="center">{val.calories}</TableCell>
              <TableCell align="center">{val.fat}</TableCell>
      
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
             

          </div>
        
    </Card>

    {/*location  */}
  
    <Card>
           
        <div style={{margin:"2%"}}>
        <TableContainer component={Paper}>
        <h5 className='table_head_title' style={{ color:'#c3272b ',fontWeight:'600',padding:"12px"}}>Location Details</h5>

      <Table className={classes.table} aria-label="simple table">

        <TableHead>  

          <TableRow>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Buliding No</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Street Name</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Area</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>LandMark</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>City</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>pincode</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>State</TableCell>

          </TableRow>

        </TableHead>

        <TableBody>
          {location.map((val) => (
            <TableRow key={val.name}>
       
               <TableCell align="center">{val.name} </TableCell>
            <TableCell align="center" >{val.calories} </TableCell>
            <TableCell align="center" >{val.fat}</TableCell>
            <TableCell align="center" >{val.carbs}</TableCell>
            <TableCell align="center" >{val.protein}</TableCell>
            <TableCell align="center" >{val.result}</TableCell>
            <TableCell align="center" >{val.comments}</TableCell>

      
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
        
         
    </Card>
    {/* bank details */}
 
    <Card>
           
              <div style={{margin:"2%"}}>
        <TableContainer component={Paper}>
        <h5 className='table_head_title' style={{ color:'#c3272b ',fontWeight:'600',padding:"12px"}}>Bank Details</h5>

      <Table className={classes.table} aria-label="simple table">

        <TableHead>  

          <TableRow>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Name </TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Branch </TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Account Number</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>IFSC</TableCell>
         

          </TableRow>

        </TableHead>

        <TableBody>
          {bank.map((val) => (
            <TableRow key={val.name}>
       
               <TableCell align="center">{val.name} </TableCell>
            <TableCell align="center" >{val.calories} </TableCell>
            <TableCell align="center" >{val.fat}</TableCell>
            <TableCell align="center" >{val.carbs}</TableCell>
          
      
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
              
    </Card>
    {/*  contact */}
 
    <Card>
           
            <div style={{margin:"2%"}}>
        <TableContainer component={Paper}>
        <h5 className='table_head_title' style={{ color:'#c3272b ',fontWeight:'600',padding:"12px"}}>Contact Details</h5>

      <Table className={classes.table} aria-label="simple table">

        <TableHead>  

          <TableRow>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Website </TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Landline </TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Email </TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Mobile</TableCell>
         

          </TableRow>

        </TableHead>

        <TableBody>
          {contact.map((val) => (
            <TableRow key={val.name}>
       
               <TableCell align="center">{val.name} </TableCell>
            <TableCell align="center" >{val.calories} </TableCell>
            <TableCell align="center" >{val.fat}</TableCell>
            <TableCell align="center" >{val.carbs}</TableCell>
          
      
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
            
          
    </Card>
  
    <Pagination />
      </Card>
    </div>
  );
};

export default CreateInstitute;
