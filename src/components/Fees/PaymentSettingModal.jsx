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

import { faEye, faTrashAlt, faPencilAlt ,faPlus, faLocationArrow, faFileCsv} from "@fortawesome/pro-duotone-svg-icons";
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
import './feefolder.css'
import general from "../../images/general.png"
import Divider from '@material-ui/core/Divider';
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
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  }));
  
const PaymentSettingModal = ({ modal, toggle }) => {
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
    toggle();
  };
  console.log(modal);
  return (
    <div>
      <div className='payment_setting_top_btn'>
      <Button  color="success"   onClick={handleCancel}>
      <Row>
          <Col sm='3'>
          <FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: 20 }}
                />
          </Col>
          <Col sm='3'>
          Add
          </Col>
          </Row>
      </Button></div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Payment

</ModalHeader>
        <ModalBody>
            <div>
                <Row>
                    <Col sm="6">
                    <Label className="payment_setting_modal_label">Fee Payment Type</Label>
                <Input type="text" />
                    </Col>
                </Row>
               
            {/* </div>
                
                <div style={{margin:'2%'}}> */}
                <Label className="payment_setting_modal_label">Fields<span  className="field_span">*</span></Label>
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#fcf1f1'}}>
          <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Name</TableCell>
            <TableCell align="center" style={{color:'#c3272b',fontWeight:'600'}}>Action 	</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
               
              <TableCell align="center" >
                Type
              </TableCell>
            
                
             
                 
                  <TableCell align="center">
              
             
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  style={{ fontSize: 15, color: "#fd868c " }}
                />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{ fontSize: 15, color: "#fd868c ",marginLeft:"6px" }}
                />
               
                
             
             
              </TableCell>
             
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
          
          </ModalBody>
          <ModalFooter>
              <div className="payment_setting_top_btn">
                  <Button color="success">

                  <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 15,  }}
                />
                Submit
                  </Button>
              </div>
          </ModalFooter>
      </Modal>
    </div>
  );
};

export default PaymentSettingModal;
