import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
//   Table,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Pagination,
  PaginationItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  PaginationLink,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledButtonDropdown,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faTrash, faPencil ,faPlus, faLocationArrow, faWindowClose} from "@fortawesome/pro-duotone-svg-icons";
import {
  ChevronsLeft,
  ChevronsRight,
  Plus,
  User,
  Search,
  ChevronDown,
  Check,
} from "react-feather";
import Select from "react-select";
import { getOrganizationIdFromInstitute } from "../../actions/instituteActions";
import { createTeacher } from "../../actions/teacherActions";
import "./surveycreate.css"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
   
  }));
const ViewSurveyModal = ({ editmodal, toggled }) => {
    const classes = useStyles();

    const [instituteSelect, setInstituteSelect] = useState("--SELECT--");
  const [designationSelect, setDesignationSelect] = useState("--SELECT--");
  const [data, setData] = useState({
    v_status: 0,
    first_name: "",
    last_name: "",
  });


  const handleCancel = () => {
    setInstituteSelect("--SELECT--");
    setDesignationSelect("--SELECT--");
   
    setData({
      v_status: 0,
      first_name: "",
      last_name: "",
    });
    toggled();
  };
//   console.log(modal);
  return (
    <div>
      
       
           <FontAwesomeIcon
                  icon={faEye}
                  style={{ fontSize: 15, color: "#fd868c " }}
                  onClick={handleCancel}
                /> 
        
      
      <Modal isOpen={editmodal} toggled={toggled} size="lg">
        {/* <ModalHeader toggled={toggled}> */}
          <div className="editclose_div">
          <div><label className="edit_attendence_label">Test Survey-Survey</label></div>
          <div><FontAwesomeIcon
                  icon={faWindowClose}
                  style={{ fontSize: 30, color: "#fd868c " }}
                  onClick={handleCancel}
                /></div>
                </div>
          {/* </ModalHeader> */}

        <ModalBody>
         <div>
             <Card >
                 <div className="view_survey_Card"> 
                     <Row style={{marginTop:"12px"}}>
                         <Col sm="6">
                         <Label className="create_label">Create Question</Label>
                         </Col>
                         <Col sm="6">
                         <Select
                                id="select"
                                options={[
                                    { value: "Choose The Option", label: "Choose The Option" },
                                    { value: "Short Answer", label: "Short Answer" },
                                    { value: "Linear Scale", label: "Linear Scale" },
                                  ]}
                                
                                ></Select>
                             </Col>
                     </Row>
                     <Row style={{marginTop:"12px"}}>
                         <Col>
                         <Label>Question</Label>
                         <Input type="text" />
                         </Col>
                        
                     </Row>
                     <div style={{marginTop:'2%'}}>
                     <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
            
        
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Option</TableCell>

            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       
            <TableRow >
               
              <TableCell align="center" >

                  <Input type="text" />
              </TableCell>
              

              <TableCell align="center">
               
                 <FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: 15, color: "#fd868c " }}
                />
                
               
              
             
              </TableCell>
             
            </TableRow>
       
        </TableBody>
      </Table>
     
    </TableContainer>
    </div>
{/* short answer */}
{/* <div>
                    <Row>
                         <Col>
                         <Label>Question</Label>
                         <Input type="text" />
                         </Col>
                        
                     </Row>
</div> */}

{/* linear scale */}
                    {/* <Row style={{marginTop:"12px"}}>
                         <Col>
                        
                        <Input type="number" />
                         </Col>
                         <Col>
                        
                        <Input type="number" />
                         </Col>
                        
                     </Row> */}
                     
                     
                 </div>
             </Card>
         </div>
        </ModalBody>
        <ModalFooter>
            <Row>
               
               
                <Col sm='6'>
                
                <Button color="info" style={{height:'45px'}}>
                    <div style={{display:'flex'}}>
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: 15,marginRight:'12px' }}
                />
                    Add
                    </div>
                    </Button>
                </Col>
            </Row>
          
         
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ViewSurveyModal;
