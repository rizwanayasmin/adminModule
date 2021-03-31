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
  createNewInterviewRounds,
  listShortlistApplications,
  updateInterviewRounds,
} from "../../actions/jobApplicationActions";
import { useDispatch, useSelector } from "react-redux";
import { getOnlyTeacherIDandNameListsForHrJobPost } from "../../actions/teacherActions";

// Date and Time picker
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function DateAndTimePickers({ handleScheduleAction, index, intRounds }) {
  const classes = useStyles();
  // console.log(
  //   { InsideDateandtimepickers: intRounds },
  //   index,
  //   intRounds[index].interviewSchedule.dateAndTime
  // );

  return (
    <FormGroup className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Schedule Interview"
        type="datetime-local"
        name="scheduleDate"
        // defaultValue="2017-05-24T10:30"
        value={intRounds[index].interviewSchedule.dateAndTime}
        onChange={(e) => {
          // console.log(e.target.value);
          handleScheduleAction(index, e.target.value);
        }}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </FormGroup>
  );
}
const InterviewerAddForm = ({
  roundIndex,
  handleFormSubmit,
  interviewer,
  setInterviewer,
}) => {
  // const [teacherList, setTeacherList] = useState([]);
  // const [teacherSelect, setTeacherSelect] = useState({
  //   id: "",
  //   concatString: "--SELECT--",
  // });
  // console.log({ teacherList });

  useEffect(() => {
    // getOnlyTeacherIDandNameListsForHrJobPost(setTeacherList);
    return () => {};
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInterviewer({ ...interviewer, [name]: value });
  };

  const resetInterviewer = () => {
    setInterviewer({
      employeeId: "",
      employeeName: "",
      comments: "",
      score: "",
      rating: "",
    });
  };

  return (
    <Row>
      <Col sm="12">
        <Card>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleFormSubmit(roundIndex, interviewer);
              resetInterviewer();
            }}
          >
            <Row>
              <Col sm="6">
                <Label for="formEmployeeId">Employee Id</Label>
                {/* <Select
                  value={{
                    value: teacherSelect.id,
                    label: teacherSelect.concatString,
                  }}
                  onChange={(select) =>
                    setTeacherSelect({
                      id: select.value,
                      concatString: select.label,
                    })
                  }
                  options={teacherList.map((teacher, index) => {
                    return { value: teacher.id, label: teacher.concatString };
                  })}
                ></Select> */}
                <FormGroup>
                  <Input
                    type="text"
                    name="employeeId"
                    id="formEmployeeId"
                    placeholder="Employee Id"
                    value={interviewer.employeeId}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <Label for="formEmployeeName">Employee name</Label>
                <FormGroup>
                  <Input
                    type="text"
                    name="employeeName"
                    id="formEmployeeName"
                    value={interviewer.employeeName}
                    onChange={handleChange}
                    placeholder="Employee name"
                    required
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <Label for="formEmployeeComments">Comments</Label>
                <FormGroup>
                  <textarea
                    type="text"
                    name="comments"
                    id="formEmployeeComments"
                    onChange={handleChange}
                    value={interviewer.comments}
                    placeholder="Comments"
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <Label for="formEmployeeMark">Mark</Label>
                <FormGroup>
                  <Input
                    type="number"
                    name="score"
                    onChange={handleChange}
                    value={interviewer.score}
                    id="formEmployeeMark"
                    placeholder="Mark out of 100"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <Button
                  type="button"
                  onClick={() => {
                    setInterviewer({
                      employeeId: "",
                      employeeName: "",
                      comments: "",
                      score: "",
                      rating: "",
                    });
                  }}
                >
                  Cancel
                </Button>
                <Button color="success" type="submit">
                  {interviewer._id ? "Update employee" : "Add employee"}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

const InterviewList = ({ intRounds, idx, round, setIntRounds, data }) => {
  // console.log("Int Rounds", intRounds);
  const [interviewer, setInterviewer] = useState({
    employeeId: "",
    employeeName: "",
    comments: "",
    score: "",
    rating: "",
  });

  const ShortlistStatus = (status, name) => {
    let statusDes = "Non-Scheduled";
    let color = "info";
    switch (status) {
      case 0:
        statusDes = "Non-Scheduled";
        color = "light";
        break;
      case 1:
        statusDes = "Scheduled";
        color = "dark";
        break;
      case -1:
        statusDes = "Rejected";
        color = "danger";
        break;
      case 2:
        statusDes = "Shortlisted";
        color = "success";
        break;
      case 3:
        statusDes = "Waitinglist";
        color = "warning";
        break;
    }
    return `${name} - ${statusDes}`;
  };

  const statusChange = (status) => {
    let statusDes = "Non-Scheduled";
    let color = "info";
    switch (status) {
      case 0:
        statusDes = "Non-Scheduled";
        color = "light";
        break;
      case 1:
        statusDes = "Scheduled";
        color = "dark";
        break;
      case -1:
        statusDes = "Rejected";
        color = "danger";
        break;
      case 2:
        statusDes = "Shortlisted";
        color = "success";
        break;
      case 3:
        statusDes = "Waitinglist";
        color = "warning";
        break;
    }
    return statusDes;
  };

  //   Event handlers
  const handleRoundActions = async (roundIndex, value) => {
    const newIntRounds = intRounds;

    let actions = 0;
    switch (value) {
      case "Shortlisted":
        actions = 2;
        break;
      case "Rejected":
        actions = -1;
        break;
      case "Waitinglist":
        actions = 3;
        break;
      case "Scheduled":
        actions = 1;
        break;
      default:
        newIntRounds[roundIndex].interviewSchedule.isScheduled = false;
        newIntRounds[roundIndex].interviewSchedule.dateAndTime = null;
        actions = 0;
    }
    newIntRounds[roundIndex].roundShortListStatus.statusType = actions;
    setIntRounds(newIntRounds);
    updateInterviewRounds(data._id, setIntRounds, intRounds);
  };

  const handleScheduleAction = (roundIndex, value) => {
    // console.log("---Value", value);
    const newIntRounds = intRounds;
    newIntRounds[roundIndex].roundShortListStatus.statusType = 1;
    newIntRounds[roundIndex].interviewSchedule.isScheduled = true;
    newIntRounds[roundIndex].interviewSchedule.dateAndTime = value;
    setIntRounds(newIntRounds);
    updateInterviewRounds(data._id, setIntRounds, intRounds);
  };

  const handleFormSubmit = (roundIndex, interviewerData) => {
    if (interviewerData._id) {
      // console.log("Interviewer id -> ", interviewerData._id);
      const intIndex = intRounds[roundIndex].interviewer.findIndex(
        (data) => data._id === interviewerData._id
      );
      if (intIndex === -1) {
        // console.log("Not found");
      } else {
        // console.log("index ", intIndex);
        const newRounds = intRounds;
        newRounds[roundIndex].interviewer[intIndex].employeeId =
          interviewerData.employeeId;
        newRounds[roundIndex].interviewer[intIndex].employeeName =
          interviewerData.employeeName;
        newRounds[roundIndex].interviewer[intIndex].comments =
          interviewerData.comments;
        newRounds[roundIndex].interviewer[intIndex].score =
          interviewerData.score;
        // console.log("--->", newRounds);
        // setIntRounds(newRounds);
        // updateInterviewRounds(data._id, setIntRounds, intRounds);
      }
    } else {
      const newRounds = intRounds;
      newRounds[roundIndex].interviewer.push(interviewerData);
      setIntRounds(newRounds);
      updateInterviewRounds(data._id, setIntRounds, intRounds);
    }
  };

  const handleEdit = (roundIndex, interviewerIndex) => {
    setInterviewer(intRounds[roundIndex].interviewer[interviewerIndex]);
  };

  const handleDelete = (roundIndex, interviewerIndex) => {
    const isTrue = window.confirm("Are you sure you want to delete?");
    if (isTrue) {
      const newRounds = intRounds;
      newRounds[roundIndex].interviewer.splice(interviewerIndex, 1);
      setIntRounds(newRounds);
      updateInterviewRounds(data._id, setIntRounds, intRounds);
    }
  };
  return (
    <li key={idx}>
      <div className="timeline-icon bg-primary">
        <Plus size={16} />
      </div>
      <div className="timeline-info">
        <Card style={{ backgroundColor: "#fcf1f1" }}>
          <CardHeader>
            <h1>Round Details</h1>
            {/* <h1>{intRounds[idx].roundShortListStatus.statusType}</h1> */}
            <Chip
              color="success"
              text={`${ShortlistStatus(
                intRounds[idx].roundShortListStatus.statusType,
                round.name
              )}`}
            ></Chip>
            <Chip
              color="info"
              text={
                intRounds[idx].interviewSchedule.isScheduled
                  ? `${new Date(
                      intRounds[idx].interviewSchedule.dateAndTime
                    ).getDate()}/${
                      new Date(
                        intRounds[idx].interviewSchedule.dateAndTime
                      ).getMonth() + 1
                    }/${new Date(
                      intRounds[idx].interviewSchedule.dateAndTime
                    ).getFullYear()}  ${new Date(
                      intRounds[idx].interviewSchedule.dateAndTime
                    ).getHours()}:${new Date(
                      intRounds[idx].interviewSchedule.dateAndTime
                    ).getMinutes()}`
                  : "Not scheduled"
              }
            ></Chip>

            <Button>
              Download {"  "}
              <FontAwesomeIcon
                icon={faFilePdf}
                className="mr-4"
                style={{ fontSize: 16, color: "gray" }}
              />
            </Button>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm="6">
                <Row>
                  <Col sm="6">
                    <p>Round name</p>
                  </Col>
                  <Col sm="6">
                    <p>{round.name}</p>
                  </Col>
                  <Col sm="6">
                    <p>Round description</p>
                  </Col>
                  <Col sm="6">
                    <p>{round.description}</p>
                  </Col>
                  <Col sm="6">
                    <p>Round duration</p>
                  </Col>
                  <Col sm="6">
                    <p>{round.duration} minutes</p>
                  </Col>
                  <Col sm="6">
                    <p>Round mark</p>
                  </Col>
                  <Col sm="6">
                    <p>{round.totalMark}</p>
                  </Col>
                  <Col sm="6">
                    <p>Round cutoff</p>
                  </Col>
                  <Col sm="6">
                    <p>{round.cutOff}</p>
                  </Col>
                </Row>
              </Col>
              <Col sm="6">
                <Form>
                  <Row>
                    <Col sm="12">
                      <FormGroup>
                        <label htmlFor="roundActions">Actions</label>
                        <Input
                          id="roundActions"
                          name="roundActions"
                          type="select"
                          placeholde="Round Actions"
                          value={statusChange(
                            intRounds[idx].roundShortListStatus.statusType
                          )}
                          onChange={(e) =>
                            handleRoundActions(idx, e.target.value)
                          }
                        >
                          <option name="0">Non-Scheduled</option>
                          <option name="2">Shortlisted</option>
                          <option name="-1">Rejected</option>
                          <option name="3">Waitinglist</option>
                          <option name="1">Scheduled</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col sm="12">
                      <DateAndTimePickers
                        handleScheduleAction={handleScheduleAction}
                        intRounds={intRounds}
                        index={idx}
                      />
                    </Col>
                    <Col sm="12">
                      <input type="file"></input>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <div>
              <Row className="mt-1">
                {intRounds[idx].interviewer.map((employer, idx1) => (
                  <Col sm="4" key={idx1}>
                    <Card className="bg-warning p-1">
                      <Row>
                        <Col sm="12">
                          <div className="float-right">
                            <FontAwesomeIcon
                              onClick={() => {
                                handleEdit(idx, idx1);
                              }}
                              icon={faPencil}
                              className="mr-2"
                              style={{ fontSize: 16, color: "gray" }}
                            />
                            <FontAwesomeIcon
                              onClick={() => {
                                handleDelete(idx, idx1);
                              }}
                              icon={faTrash}
                              className="mr-2"
                              style={{ fontSize: 16, color: "gray" }}
                            />
                          </div>
                        </Col>
                        <Col sm="6">
                          <p>Employee Id</p>
                        </Col>
                        <Col sm="6">
                          <p>{employer.employeeId}</p>
                        </Col>
                        <Col sm="6">
                          <p>Employee Name</p>
                        </Col>
                        <Col sm="6">
                          <p>{employer.employeeName}</p>
                        </Col>
                        <Col sm="6">
                          <p>Comments</p>
                        </Col>
                        <Col sm="6">
                          <p>{employer.comments}</p>
                        </Col>
                        <Col sm="6">
                          <p>Score</p>
                        </Col>
                        <Col sm="6">
                          <p>
                            {employer.score}/{round.totalMark}
                          </p>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
            <div>
              <InterviewerAddForm
                roundIndex={idx}
                handleFormSubmit={handleFormSubmit}
                {...{ interviewer, setInterviewer }}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </li>
  );
};

const InterviewStageExpand = ({ data }) => {
  const institutionId = data.jobPostInfo.institutionId;

  const [intRounds, setIntRounds] = useState(data.interviewRounds);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log("Inside interview stage");

    if (intRounds.length <= 0) {
      createNewInterviewRounds(
        data._id,
        data.interviewProcess.rounds.length,
        setIntRounds,
        setLoading
      );
    } else {
      setLoading(false);
    }

    return () => {};
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Interview Process</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className="activity-timeline timeline-left list-unstyled">
              {data.interviewProcess.rounds.map((round, idx) => (
                <InterviewList
                  round={round}
                  key={idx}
                  idx={idx}
                  intRounds={intRounds}
                  setIntRounds={setIntRounds}
                  data={data}
                />
              ))}
            </ul>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default InterviewStageExpand;
