import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faEye,
faPlus,
faEdit,
faTrashAlt,
} from "@fortawesome/pro-duotone-svg-icons";
import {
  Row,
  Col,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";
import { Search } from "react-feather";
import leavePolicyColumn from "../../assets/data-table-columns/leavePolicyColumn";
import customStyles from "../../assets/custom-data-styles/customDataStyles";
import DataTable from "react-data-table-component";
import LeavePolicyModal from "../expandableTables/expLeave.component";
import {
  deleteLeavePolicy,
  listLeavePolicies,
  saveLeavePolicy,
} from "../../actions/leavePolicyActions";
import { useDispatch, useSelector } from "react-redux";
import './leave.css'
// material ui

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Pagination from '../pagination/pagination'

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein,result,comment,view) {
  return { name, calories, fat, carbs, protein,result,comment,view };
}

const rows = [
  createData('246', 'Insurance','maya','20','Yearly','0.5','0','0'),
  createData('246', 'Insurance','maya','20','Yearly','0.5','0','0'),
  createData('246', 'Insurance','maya','20','Yearly','0.5','0','0'),
  createData('246', 'Insurance','maya','20','Yearly','0.5','0','0'),
];

const LeavePolicy = () => {
  const [age, setAge] = React.useState('');
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [leavePolicies, setLeavePolicies] = useState([]);
  const [leavePolicy, setLeavePolicy] = useState({
    id: "",
    name: "",
    leaveConfig: [],
    lateFines: [],
  });

  const toggle = () => setModal(!modal);

  // Redux store access
  const lpLists = useSelector((state) => state.listLeavePolicies);
  const { leavePolicyList, loading, error } = lpLists;
  const dispatch = useDispatch();

  const lp = useSelector((state) => state.leavePolicy);
  const { leavePolicy: leave, loading: saveLoading, error: saveError } = lp;

  const delPolicy = useSelector((state) => state.deletePolicy);
  const {
    leavePolicyDelete,
    loading: deleteLoading,
    error: deleteError,
  } = delPolicy;

  useEffect(() => {
    dispatch(listLeavePolicies(setLeavePolicies, openModal, delLeavePolicy));
    return () => {
      // cleanup;
    };
  }, [saveLoading, deleteLoading]);

  const createLeavePolicy = () => {
    // console.log(leavePolicy);
    dispatch(saveLeavePolicy(leavePolicy));
    setLeavePolicy({
      id: "",
      name: "",
      leaveConfig: [],
      lateFines: [],
    });
    setModal(false);
  };

  const openModal = (policyDetails) => {
    // setLeavePolicies(policyDetails);
    // console.log(policyDetails);
    setLeavePolicy(policyDetails);
    setModal(true);
  };

  const delLeavePolicy = (policyId, policyName) => {
    let isTrue = window.confirm(
      `Are you sure you want to delete ${policyName}`
    );
    if (isTrue) {
      dispatch(deleteLeavePolicy(policyId));
    }
  };
// 
const handleChangeRow = (event) => {
  setAge(event.target.value);
};

  return (
    <div className="container-fluid">
      <Card>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>Leave Policies</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="float-right">
            <Row>
              <Col>
                <LeavePolicyModal
                  modal={modal}
                  setModal={setModal}
                  toggle={toggle}
                  leavePolicy={leavePolicy}
                  setLeavePolicy={setLeavePolicy}
                  createLeavePolicy={createLeavePolicy}
                ></LeavePolicyModal>
              </Col>
            </Row>
          </div>
          <div className="float-left">
            <Row>
              <Col>
                <div className="has-icon-left position-relative">
                  <Input
                    type="search"
                    name="search"
                    placeholder="Search by policy id"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          </CardBody>
{/* <div className='leave_table_container'>
          <Card>
           <div className='leave_table_header'>
           <h5 className='table_head_title' style={{margin:" 2%", color:'#c3272b ',fontWeight:'600'}}>General Details</h5>
           <div>
                  <label className='row_page'>Rows</label>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChangeRow}
                    >
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={15}>15</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={75}>75</MenuItem>
                      <MenuItem value={100}>100</MenuItem>
                    </Select>
                    </div>
              </div> */}
{/* one */}
        {/* <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
       
          <TableRow>
          
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Policy ID</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Policy Name</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}> Name</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>No Of Leave</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Yearly/Monthly </TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Max late Per Month</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>LOP</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Fine Amount</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center"> {row.name} </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center">{row.result}</TableCell>
              <TableCell align="center">{row.comment}</TableCell>
              <TableCell align="center">{row.view}</TableCell>
              <TableCell align="center">
                <div className='icons'>
                <FontAwesomeIcon
                      icon={faEye}
                      style={{ fontSize: 20 , color:'dodgerblue' }}
                      />
                  <FontAwesomeIcon
                      icon={faEdit}
                      style={{ fontSize: 20, color:'#81B622' }}
                      />
                  <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{ fontSize: 20 , color:'red'}}
                  />
                </div>
                  
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
  
  
    
    {/* </Card>
    </div> */}
          <DataTable
            data={leavePolicies.filter((lp) => {
              return lp.id.toLowerCase().includes(search.toLowerCase());
            })}
            // data={leavePolicyList}
            columns={leavePolicyColumn}
            customStyles={customStyles}
            selectableRows
            onSelectedRowsChange={(state) => {
              console.log(state.selectedRows);
            }}
            pagination
            highlightOnHover
          />
       {/* <Pagination /> */}
      </Card>
    </div>
  );
};

export default LeavePolicy;
