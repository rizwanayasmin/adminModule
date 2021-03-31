import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faEye,
faPlus,
faEdit,
faTrashAlt,
faTrash,
 faPencil
} from "@fortawesome/pro-duotone-svg-icons";
import {
  Row,
  Col,
  FormGroup,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";
// import { faTrash, faPencil } from "@fortawesome/pro-duotone-svg-icons";
import { Plus, Search } from "react-feather";
import DataTable from "react-data-table-component";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import customStyles from "../../assets/custom-data-styles/customDataStyles";
import ModelInterviewProcess from "../popupModels/modalInterviewProcess.component";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteInterviewProcess,
  listInterviewProcess,
  saveInterviewProcess,
} from "../../actions/interviewProcessActions";
import './interviewProcess.css'
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
  createData('246', 'non teaching','maya','lab assistant','30','45','73'),
  createData('246', 'non teaching','maya','lab assistant','30','45','73'),
  createData('246', 'non teaching','maya','lab assistant','30','45','73'),
  createData('246', 'non teaching','maya','lab assistant','30','45','73'),
];

const columns = [
  {
    name: "Process Id",
    wrap: true,
    selector: "processId",
  },
  {
    name: "Process Name",
    wrap: true,
    selector: "processName",
  },
  {
    name: "Number Of Rounds",
    wrap: true,
    cell: (row) => {
      return row.rounds.length;
    },
  },
  {
    name: "Actions",
    button: true,
    cell: (row) => (
      <div>
        <FontAwesomeIcon
          onClick={() => row.openModel(row)}
          icon={faPencil}
          className="mr-2"
          style={{ fontSize: 16, color: "#fd868c" }}
        />
        <FontAwesomeIcon
          onClick={() => row.deleteIntProcess(row._id, row.processId)}
          icon={faTrash}
          className="mr-2"
          style={{ fontSize: 16, color: "#fd868c" }}
        />
      </div>
    ),
    wrap: true,
  },
];

const ExpandableTable = ({ data }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>
            Process ID :{" "}
            <span style={{ fontWeight: "normal" }}>{data.processId}</span>
          </CardTitle>
        </CardHeader>
        <CardBody>
          <h6 className="pb-2">
            Process Name :{" "}
            <span style={{ fontWeight: "normal" }}>{data.processName}</span>
          </h6>
          <ul className="activity-timeline timeline-left list-unstyled">
            {data.rounds.map((round) => (
              <li key={round.id}>
                <div className="timeline-icon bg-primary">{round.id}</div>
                <div className="timeline-info">
                  <p className="font-weight-bold mb-0">{round.name}</p>
                  <p className="font-small-3">{round.description}</p>
                  <p className="font-small-3">
                    Duration: {round.duration} minutes
                  </p>
                  <p className="font-small-3">Total Mark: {round.totalMark}</p>
                  <p className="font-small-3">Cut-off mark: {round.cutOff}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </div>
  );
};

const InterviewProcess = () => {
  const [age, setAge] = React.useState('');
  const classes = useStyles();
  // States
  const [modal, setModal] = useState(false);
  const [lists, setLists] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [process, setProcess] = useState({
    processId: "",
    processName: "",
    noOfRounds: 0,
    rounds: [],
  });

  const inProcess = useSelector((state) => state.listInterviewProcess);
  const { interviewProcessLists, loading, error } = inProcess;
  const dispatch = useDispatch();

  const interviewProcess = useSelector((state) => state.interviewProcess);
  const {
    intProcess,
    loading: saveLoading,
    error: errorLoading,
  } = interviewProcess;

  const intProcessDel = useSelector((state) => state.deleteInterviewProcess);
  const {
    intProcessDelete,
    loading: deleteLoading,
    error: deleteError,
  } = intProcessDel;

  //Event handlers
  const toggle = () => setModal(!modal);

  const openModel = (intProcessDetails) => {
    setProcess(intProcessDetails);
    setModal(true);
  };

  const deleteIntProcess = (_id, processId) => {
    const isTrue = window.confirm(
      `Are you sure you want to delete ${processId}?`
    );
    if (isTrue) dispatch(deleteInterviewProcess(_id));
  };

  // Hooks
  useEffect(() => {
    dispatch(listInterviewProcess(setLists, openModel, deleteIntProcess));
    return () => {};
  }, [saveLoading, deleteLoading]);

  const createInterviewProcess = () => {
    dispatch(saveInterviewProcess(process));
    setProcess({
      processId: "",
      processName: "",
      noOfRounds: 0,
      rounds: [],
    });
    toggle();
  };

  //Component return

  // 
  const handleChangeRow = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <div className="container-fluid">
      <Card>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>Interview Process</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="float-right">
            <Row>
              <Col>
                <ModelInterviewProcess
                  {...{
                    modal,
                    setModal,
                    toggle,
                    process,
                    setProcess,
                    createInterviewProcess,
                  }}
                ></ModelInterviewProcess>
              </Col>
            </Row>
          </div>
          <div className="float-left">
            <Row>
              <Col>
                <FormGroup className="has-icon-left position-relative">
                  <Input
                    type="search"
                    name="text"
                    placeholder="Search by process Id"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </div>
          <DataTable
            data={lists.filter((intProcess) => {
              return intProcess.processId
                .toLowerCase()
                .includes(search.toLowerCase());
            })}
            columns={columns}
            customStyles={customStyles}
            expandableRows
            expandOnRowClicked
            expandableRowsComponent={<ExpandableTable />}
            selectableRows
            onSelectedRowsChange={(state) => {
              console.log(state.selectedRows);
            }}
            pagination
            highlightOnHover
          />
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
          
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Process ID</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Process Name</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}> Name</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>description</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Duration (in minutes) </TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Total Marks</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Cut-off Mark</TableCell>
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
       {/* <Pagination /> */}
      </Card>
    </div>
  );
};

export default InterviewProcess;
