import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
} from "reactstrap";
import { Search } from "react-feather";
import customStyles from "../../assets/custom-data-styles/customDataStyles";
import DataTable from "react-data-table-component";
import {
  deleteLeavePolicy,
  listLeavePolicies,
  saveLeavePolicy,
} from "../../actions/leavePolicyActions";
import { useDispatch, useSelector } from "react-redux";
import EmployeesModal from "../popupModels/modalEmployees.component";
import Select from "react-select";
import EmployeesColumn from "../../assets/data-table-columns/employeesColumn";
import { getOnlyInstituteNames } from "../../actions/instituteActions";
import { getOnlyDesignationNames } from "../../actions/designationActions";
import { getTeacherListByInstituteId } from "../../actions/teacherActions";
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
import './employee.css'


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


const Employees = ({ history }) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  // console.log(history);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [institutionNames, setInstituteNames] = useState([]);
  const [designIds, setDesignIds] = useState([]);
  const [instituteSelect, setInstituteSelect] = useState("--SELECT--");
  const [teachersList, setTeacherList] = useState([]);

  const handleInsituteChange = (selectValue) => {
    setInstituteSelect(selectValue.value);
    // Api fetch
    getTeacherListByInstituteId(selectValue.value, setTeacherList, viewProfile);
  };

  const toggle = () => setModal(!modal);

  useEffect(() => {
    getOnlyInstituteNames(setInstituteNames);
    getOnlyDesignationNames(setDesignIds);

    return () => {
      // cleanup;
    };
  }, []);

  const viewProfile = (_id) => {
    history.push(`/teacher/${_id}`);
  };

  // 
  const handleChangeRow = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="container-fluid">
      <Card>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>Staff</CardTitle>
        </CardHeader>
        <CardBody>
          <Card>
            <div className="float-left">
              <Row>
                <Col sm='6'>
                <div className="float-left">
            <Row>
              <Col>
                <Label for="selectInstitute">Select Institute</Label>
                <Select
                  id="selectInstitute"
                  value={{ value: instituteSelect, label: instituteSelect }}
                  onChange={handleInsituteChange}
                  options={institutionNames.map((ins, i) => ({
                    value: ins.instituteId,
                    label: ins.instituteId,
                  }))}
                ></Select>
              </Col>
              <Col>
                <div className="has-icon-left employee_search">
                  <Input
                    type="search"
                    name="search"
                    placeholder="Search"
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
                </Col>
                <Col sm='6'>
                  <div className='column_2_create_institute'>
                  <EmployeesModal
                    modal={modal}
                    toggle={toggle}
                    {...{ institutionNames, designIds }}
                  ></EmployeesModal>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
{/* <label className='note'>Note :</label>
<p>search by Department ID, Employee number,Employee first name,Employee last name</p> */}
          {teachersList.length !== 0 ? (
            <DataTable
              data={teachersList.filter((teacher) => {
                return (
             
                  teacher.employee_number +
                  teacher.first_name +
                  teacher.last_name +
                  (teacher.departmentId ? teacher.departmentId : "") +
                  (teacher.designationId ? teacher.designationId : "")
                )
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })}
              columns={EmployeesColumn}
              customStyles={customStyles}
              selectableRows
              onSelectedRowsChange={(state) => {
                console.log(state.selectedRows);
              }}
              pagination
              highlightOnHover
            />
          ) : (
            // "Please select institute"
            ''
          )}
 
        </CardBody>
        {/* <div className='table_container_institute'>
          <h5 className='table_head_title' style={{ color:'#c3272b ',fontWeight:'600'}}>Staff Details</h5>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
       
          <TableRow>
          
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>First Name</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Last Name</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Email</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Mobile Number</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Landline Number</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Gender</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Date Of Birth</TableCell>
            <TableCell align="center" style={{fontSize:'14px',color:'#c3272b'}}>Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center">{row.result}</TableCell>
              <TableCell align="center">{row.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> */}
      </Card>
    </div>
  );
};

export default Employees;
