import React, { Component, useEffect, useState } from "react";
import APPLICATIONS from "../../assets/sample-data/applications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import customStyles from "../../assets/custom-data-styles/customDataStyles";

import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Pagination,
  PaginationItem,
  PaginationLink,
  DropdownItem,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  Progress,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Media,
} from "reactstrap";
import {
  faEye,
  faTrash,
  faPencil,
  faDownload,
  faBreadLoaf,
} from "@fortawesome/pro-duotone-svg-icons";
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy";
import {
  Plus,
  AlertCircle,
  Check,
  Star,
  ChevronsLeft,
  ChevronsRight,
  Search,
  ChevronDown,
  Eye,
  Edit,
  Trash,
} from "react-feather";
import Chip from "../../components/@vuexy/chips/ChipComponent";
import DataTable from "react-data-table-component";
import userImg from "../../assets/img/portrait/small/avatar-s-18.jpg";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import {
  listShortlistApplications,
  rejectACandidate,
  shortlistRound,
} from "../../actions/jobApplicationActions";
import { useDispatch, useSelector } from "react-redux";
import InterviewStageExpand from "../expandableTables/expInterviewStage.component";
// import Select from "react-select";

const options = [
  { value: "CBSE", label: "CBSE" },
  { value: "MATRIC", label: "MATRIC" },
];

const ModalExample1 = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* <a>
        <FontAwesomeIcon
          icon={faEye}
          className="mr-2"
          style={{ fontSize: 16, color: "#fd868c" }}
          onClick={toggle}
        />
      </a> */}
      <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
        <ModalHeader toggle={toggle}>Resignation</ModalHeader>
        <ModalBody>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>JobDetails</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12">
                    <Media className="d-sm-flex d-block">
                      <Media className="mt-md-1 mt-0" left>
                        <Media
                          className="rounded mr-2"
                          object
                          src={userImg}
                          alt="Generic placeholder image"
                          height="112"
                          width="112"
                        />
                      </Media>
                      <Media body>
                        <Row>
                          <Col sm="12">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Candidate Name
                                </div>
                                <div>Candidate Name</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Email
                                </div>
                                <div>Email</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Qualification
                                </div>
                                <div className="text-truncate">
                                  <span>Qualification</span>
                                </div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Mobile
                                </div>
                                <div className="text-truncate">
                                  <span>8098879194</span>
                                </div>
                              </div>

                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Resume
                                </div>
                                <div className="text-truncate">
                                  <Button
                                    className="mr-1"
                                    color="warning"
                                    outline
                                  >
                                    Download
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Media>
                    </Media>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const ModalExample = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="mr-1" color="primary" onClick={toggle} outline>
        <Plus size={15} />
        Add
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
        <ModalHeader toggle={toggle}>Interview Process</ModalHeader>
        <ModalBody>
          <div>
            <Form>
              <Row>
                <Col sm="12">
                  <Label for="nameVerticalIcons">Date</Label>
                  <FormGroup>
                    <Input
                      type="date"
                      name="date"
                      id="exampleDate"
                      placeholder="Date"
                    />
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="nameVerticalIcons">Name</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="name"
                      id="nameVerticalIcons"
                      placeholder="Name"
                    />
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="nameVerticalIcons">Education</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="name"
                      id="nameVerticalIcons"
                      placeholder="Education"
                    />
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="nameVerticalIcons">Experience</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="name"
                      id="nameVerticalIcons"
                      placeholder="Experience"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const ShortlistStatus = ({ status, name }) => {
  let statusDes = "Not scheduled";
  let color = "info";
  switch (status) {
    case -2:
      statusDes = "Not scheduled";
      color = "light";
      break;
    case -1:
      statusDes = "Scheduled";
      color = "dark";
      break;
    case 0:
      statusDes = "Rejected";
      color = "danger";
      break;
    case 1:
      statusDes = "Shortlisted";
      color = "success";
      break;
    case 2:
      statusDes = "Waiting List";
      color = "warning";
      break;
  }
  return <Chip color={color} text={`${name} - ${statusDes}`}></Chip>;
};

const handleActionChange = (row, e) => {
  const { value } = e.target;
  switch (value) {
    case "Hire":
      row.shortlistCandidate(row._id, row.fName);
      break;
    case "Reject":
      row.rejectCandidate(row._id, row.fName);
      break;
  }
};

const columns = [
  {
    name: "Name",
    cell: (row) => {
      return `${row.fName} ${row.lName}`;
    },
    wrap: true,
  },
  {
    name: "Email",
    selector: "email",
    wrap: true,
  },
  {
    name: "Mobile No.",
    selector: "contactNo",
    wrap: true,
  },
  {
    name: "Experience",
    selector: "experience",
    wrap: true,
  },
  {
    name: "Completion",
    cell: (row) => {
      // console.log(row);
      let totalRounds = row.interviewProcess.rounds.length;
      let segments = 100 / (totalRounds + 1);
      let shortlistedRounds = 0;

      row.interviewRounds.forEach((int) => {
        if (int.roundShortListStatus.statusType === 2) {
          shortlistedRounds++;
        }
      });
      console.log(
        totalRounds,
        segments,
        shortlistedRounds,
        Math.floor(segments * (shortlistedRounds + 1))
      );

      return (
        <Progress
          className="progress-lg"
          value={Math.floor(segments * (shortlistedRounds + 1))}
          color="danger"
          style={{ width: "100%", height: "10", marginTop: 10 }}
        >
          {Math.floor(segments * (shortlistedRounds + 1))}
        </Progress>
      );
    },
    wrap: true,
  },
  {
    name: "Status",
    cell: (row) => {
      return <Chip color="success" text={"Hiring"}></Chip>;
      //   console.log(row);
      // const roundStatus =
      //   row.interviewProcess.length > 0
      //     ? row.interviewProcess[row.interviewProcess.length - 1].roundStatus
      //     : -2;
      // const roundName =
      //   row.interviewProcess.length > 0
      //     ? row.interviewProcess[row.interviewProcess.length - 1].name
      //     : "Round";
      // return (
      //   <ShortlistStatus
      //     status={roundStatus}
      //     name={roundName}
      //   ></ShortlistStatus>
      // );
    },
    wrap: true,
  },
  {
    name: "Resume",
    cell: (row) => (
      <div>
        <FontAwesomeIcon
          icon={faDownload}
          className="mr-2"
          style={{ fontSize: 16, color: "gray" }}
        />
      </div>
    ),
    wrap: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <div>
        <Input
          type="select"
          onChange={(e) => handleActionChange(row, e)}
          value={"--SELECT--"}
        >
          <option>--SELECT--</option>
          <option>Hire</option>
          <option>Reject</option>
        </Input>
        {/* <FontAwesomeIcon
          onClick={() => row.shortlistCandidate(row._id, row.fName)}
          icon={faPencil}
          className="mr-2"
          style={{ fontSize: 16, color: "gray" }}
        />
        <FontAwesomeIcon
          onClick={() => row.rejectCandidate(row._id, row.fName)}
          icon={faTrash}
          className="mr-2"
          style={{ fontSize: 16, color: "gray" }}
        /> */}
      </div>
    ),
    wrap: true,
  },
];

const InterviewStage = ({ match }) => {
  const [lists, setLists] = useState([]);
  // const [stageLoading, setLoading] = useState(true);

  const lsShortlists = useSelector((state) => state.shortlistApplicationLists);
  const { shortlistAppLists, loading, error } = lsShortlists;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      listShortlistApplications(
        match.params.id,
        setLists,
        rejectCandidate,
        shortlistCandidate,
        downloadResume
      )
    );
    return () => {};
  }, []);

  const rejectCandidate = async (id, info) => {
    const isTrue = window.confirm(
      `Are you sure you want to reject this candidate ${info}?`
    );
    if (isTrue) {
      await rejectACandidate(id);
      dispatch(
        listShortlistApplications(
          match.params.id,
          setLists,
          rejectCandidate,
          shortlistCandidate,
          downloadResume
        )
      );
      // console.log("Reject candidate", id);
    }
  };

  const shortlistCandidate = async (id, info) => {
    const isTrue = window.confirm(
      `Are you sure you want to shortlist this candidate ${info}?`
    );
    if (isTrue) {
      await shortlistRound(id);
      dispatch(
        listShortlistApplications(
          match.params.id,
          setLists,
          rejectCandidate,
          shortlistCandidate,
          downloadResume
        )
      );
      // console.log("Shortlist Candidate", id);
    }
  };

  const downloadResume = () => {};

  return (
    <div className="container-fluid">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <DataTable
            data={lists}
            columns={columns}
            customStyles={customStyles}
            expandableRows
            expandOnRowClicked
            expandableRowsComponent={<InterviewStageExpand />}
            selectableRows
            onSelectedRowsChange={(state) => {
              console.log(state.selectedRows);
            }}
            pagination
            highlightOnHover
          />
        </div>
      )}
    </div>
  );
};

export default withRouter(InterviewStage);
