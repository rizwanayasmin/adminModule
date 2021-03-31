import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Pagination,
  PaginationItem,
  PaginationLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledButtonDropdown,
  ButtonDropdown,
} from "reactstrap";
import { faCheck, faTimes } from "@fortawesome/pro-duotone-svg-icons";
import { Plus, Search } from "react-feather";
import Chip from "../../components/@vuexy/chips/ChipComponent";
import customStyles from "../../assets/custom-data-styles/customDataStyles";
import DataTable from "react-data-table-component";
import {
  acceptResign,
  listResignations,
  rejectResign,
} from "../../actions/resignationActions";
import { useDispatch, useSelector } from "react-redux";
import Collapse from '@material-ui/core/Collapse';


const Resignation = () => {
  // collapse state
  const [open, setOpen] = React.useState(false);
// state
  const [search, setSearch] = useState("");
  const [lists, setLists] = useState([]);
  const lsResignation = useSelector((state) => state.resignationLists);
  const { resignationLists, loading, error } = lsResignation;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listResignations(setLists, acceptResignation, rejectResignation));
    return () => {};
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const acceptResignation = async (id) => {
    const isTrue = window.confirm(
      `Are you sure you want to accept the resignation ?`
    );
    if (isTrue) {
      await acceptResign(id);
      dispatch(
        listResignations(setLists, acceptResignation, rejectResignation)
      );
    }
  };
  const rejectResignation = async (id) => {
    const isTrue = window.confirm(
      `Are you sure you want to reject the resignation ?`
    );
    if (isTrue) {
      await rejectResign(id);
      dispatch(
        listResignations(setLists, acceptResignation, rejectResignation)
      );
    }
  };

  const columns = [
    // {
    //   name:'Reason',
    //   cell:(row) =>{
    //     return(
    //       <div>
    //        <Collapse in={open} timeout="auto" unmountOnExit>
    //        <Card>
    //          <CardTitle>Reason</CardTitle>
    //          <CardBody>
    //            <Input type='textarea' value='' />
    //          </CardBody>
    //        </Card>
    //        </Collapse>
    //       </div>
    //     )
    //   }
    // },
    {
      name: "Employee Id",
      selector: "employee_number",
      wrap: true,
    },
    {
      name: "Employee Name",
      selector: "employeeName",
      wrap: true,
    },

    {
      name: "Designation Id",
      cell: (row) => {
        return row.designationId ? row.designationId : "-";
      },
      wrap: true,
    },
    {
      name: "Reporting Authority",
      cell: (row) => {
        return row.reportingAuthority ? row.reportingAuthority : "-";
      },
      wrap: true,
    },
    // {
    //   name:'Reason for Resignation',
    //   cell: (row) => {
    //     return row.reportingAuthority ? row.reportingAuthority : "-";
    //   },
    //   wrap: true,
    // },

    {
      name: "Contact Number",
      cell: (row) => {
        return row.reportingAuthority ? row.reportingAuthority : "-";
      },
      wrap: true,
    },
    {
      name: "Branch",
      selector: "branch",
      wrap: true,
    },
    {
      name: "Date of Resignation",
      cell: (row) => {
        const d = new Date(row.dateOfResignation);
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
      },
      wrap: true,
    },
    {
      name: "Date of Approval",
      cell: (row) => {
        if (row.status.dateOfAcceptance) {
          const d = new Date(row.status.dateOfAcceptance);
          return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
        } else {
          return "-";
        }
      },
      wrap: true,
    },
    {
      name: "Status",
      cell: (row) => {
        switch (row.status.statusType) {
          case 1:
            return <Chip color="success" text="Accepted"></Chip>;
          case -1:
            return <Chip color="danger" text="Rejected"></Chip>;
          default:
            return <Chip color="warning" text="New Resignation"></Chip>;
        }
      },
      wrap: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <FontAwesomeIcon
            onClick={() => row.acceptResignation(row._id)}
            icon={faCheck}
            className="mr-2"
            style={{ fontSize: 16, color: "green" }}
          />
          <FontAwesomeIcon
            onClick={() => row.rejectResignation(row._id)}
            icon={faTimes}
            className="mr-2"
            style={{ fontSize: 16, color: "red" }}
          />
        </div>
      ),
      wrap: true,
    },
  ];

// collapse
  const ExpandableTable = ({ data }) => {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "#fd868c" }}>
            Reason for Resignation :{" "}
              {/* <span style={{ fontWeight: "normal" }}>{data.processId}</span> */}
            </CardTitle>
          </CardHeader>
          <CardBody>
          <p className="font-small-3">Health issue</p>
          </CardBody>
        </Card>
      </div>
    );
  };


  return (
    <div className="container-fluid">
      <Card>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>Resignation</CardTitle>
        </CardHeader>
        <CardBody>
          {/* <div className="float-left">
            <Row>
              <Col>
                <ModalExample></ModalExample>
              </Col>
            </Row>
          </div> */}
          <div className="float-left">
            <Row>
              <Col>
                <FormGroup className="has-icon-left position-relative">
                  <Input
                    type="text"
                    name="text"
                    placeholder="Search by employee name"
                    value={search}
                    onChange={handleSearch}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </div>
          <div>
            <DataTable
              data={lists.filter((resign) => {
                return resign.employeeName
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
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Resignation;

// const RESIGNATION_DATA = [
//   {
//     employeeId: "EMP001",
//     employeeName: "Aravind",
//     employeeLevel: "JNR-GRD-I",
//     reportingTo: "Janci, EMP012, MATHEMATICS",
//     branch: "Kolathur",
//     dateOfResignation: "29/01/2020",
//     reason: "Lack of motivation",
//     status: true,
//   },
//   {
//     employeeId: "EMP002",
//     employeeName: "Bharath",
//     employeeLevel: "ADMIN-GRD-I",
//     reportingTo: "Balaji, EMP012, ADMIN",
//     branch: "Maduravayil",
//     dateOfResignation: "9/12/2020",
//     reason: "Got a better offer",
//     status: false,
//   },
// ];

// const EMP_ID_DATA = [
//   "EMP001-Aravind_G-JNR-GRD-I",
//   "EMP002-Bharath-G-SNR-GRD-II",
//   "EMP003",
//   "EMP004",
//   "EMP005",
//   "EMP006",
//   "EMP007",
// ];

// const STATUS_OPTIONS = ["Accepted", "Rejected"];

// const ModalExample = (props) => {
//   const { buttonLabel, className } = props;

//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   return (
//     <div>
//       <Button className="mr-1" color="primary" outline onClick={toggle}>
//         <Plus size={15} />
//         Apply resignation
//       </Button>
//       <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
//         <ModalHeader toggle={toggle}>Resignation</ModalHeader>
//         <ModalBody>
//           <div>
//             <Form>
//               <Row>
//                 <Col sm="12">
//                   <h1>Apply Resignation</h1>
//                 </Col>
//                 <Col sm="6">
//                   <Label for="employeeId">
//                     Employee no./Employee name/Mobile no.
//                   </Label>
//                   <FormGroup>
//                     <Input
//                       type="search"
//                       name="employeeId"
//                       id="employeeId"
//                       placeholder="Employee No"
//                     >
//                       {EMP_ID_DATA.map((emp, idx) => {
//                         return <option>{emp}</option>;
//                       })}
//                     </Input>
//                   </FormGroup>
//                 </Col>
//                 <Col sm="6">
//                   <Label for="dateOfResignation">Date of Resignation</Label>
//                   <FormGroup>
//                     <Input
//                       type="date"
//                       name="dateOfResignation"
//                       id="dateOfResignation"
//                       placeholder="DOR"
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col sm="6">
//                   <Label for="regStatus">Status</Label>
//                   <FormGroup>
//                     <Input
//                       type="select"
//                       name="regStatus"
//                       id="regStatus"
//                       placeholder="Status"
//                     >
//                       {STATUS_OPTIONS.map((status, idx) => {
//                         return <option key={idx}>{status}</option>;
//                       })}
//                     </Input>
//                   </FormGroup>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col sm="12">
//                   <h1>Employee details</h1>
//                 </Col>
//                 {RESIGNATION_DATA.map(
//                   (
//                     {
//                       employeeId,
//                       employeeName,
//                       employeeLevel,
//                       reportingTo,
//                       branch,
//                     },
//                     idx
//                   ) => (
//                     <Col sm="12" key={idx}>
//                       <Card>
//                         <Row>
//                           <Col sm="6">
//                             <Label for="employeeName">Employee Number</Label>
//                             <p>{employeeId}</p>
//                           </Col>
//                           <Col sm="6">
//                             <Label for="employeeName">Employee name</Label>
//                             <p>{employeeName}</p>
//                           </Col>

//                           <Col sm="6">
//                             <Label for="employeeLevel">Employee level</Label>
//                             <p>{employeeLevel}</p>
//                           </Col>

//                           <Col sm="6">
//                             <Label for="reportingTo">Reporting Authority</Label>
//                             <p>{reportingTo}</p>
//                           </Col>

//                           <Col sm="6">
//                             <Label for="branch">Branch</Label>
//                             <p>{branch}</p>
//                           </Col>
//                           <Col sm="6">
//                             <Button type="button" color="success">
//                               Show Profile
//                             </Button>
//                           </Col>
//                         </Row>
//                       </Card>
//                     </Col>
//                   )
//                 )}
//               </Row>
//             </Form>
//           </div>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="success" onClick={toggle}>
//             Submit
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };
