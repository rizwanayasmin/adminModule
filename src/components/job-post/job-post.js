import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChipInput from "material-ui-chip-input";
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
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledButtonDropdown,
} from "reactstrap";
import { faTrash, faPencil } from "@fortawesome/pro-duotone-svg-icons";
import DataTable from "react-data-table-component";
import {
  Plus,
  ChevronsLeft,
  ChevronsRight,
  Search,
  ChevronDown,
} from "react-feather";
import Chip from "../@vuexy/chips/ChipComponent";
import JobPostModel from "../popupModels/modalJobPost.component";
import customStyles from "../../assets/custom-data-styles/customDataStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  delJobPost,
  listJobPosts,
  saveJobPost,
} from "../../actions/jobPostsActions";

const ApplicationButton = ({ id, history, match }) => {
  return (
    <button
      onClick={() => {
        history.push(`${match.url}/${id}`);
      }}
    >
      View Applications
    </button>
  );
};

const columns = [
  {
    name: "Job post Id",
    selector: "jobPostId",
    wrap: true,
  },
  {
    name: "Position title",
    selector: "positionTitle",
    wrap: true,
  },
  {
    name: "Experience type",
    cell: (row) => {
      return row.experienceCategory.isExperienced ? "Experienced" : "Fresher";
    },
    wrap: true,
  },
  {
    name: "Institution",
    selector: "institutionId",
    wrap: true,
  },
  {
    name: "Interview process",
    selector: "interviewProcessId",
    wrap: true,
  },
  // {
  //   name: "Branch",
  //   selector: "institutionalDetails.branch",
  //   wrap: true,
  // },
  {
    name: "Teaching level",
    selector: "teachingLevel",
    wrap: true,
  },
  {
    name: "Vacancies",
    cell: (row) => `${row.applications.length}/${row.noOfOpenings}`,
    wrap: true,
  },
  {
    name: "Status",
    cell: (row) => {
      return row.applications.length >= row.noOfOpenings ? (
        <Chip color="danger" text="Closed"></Chip>
      ) : (
        <Chip color="success" text="Open"></Chip>
      );
    },
    wrap: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <div>
        <FontAwesomeIcon
          onClick={() => row.openModal(row)}
          icon={faPencil}
          className="mr-2"
          style={{ fontSize: 16, color: "gray" }}
        />
        <FontAwesomeIcon
          onClick={() => row.deleteJobPost(row._id, row.positionTitle)}
          icon={faTrash}
          className="mr-2"
          style={{ fontSize: 16, color: "gray" }}
        />
      </div>
    ),
    wrap: true,
  },
  {
    name: "Applications",
    cell: (row) => (
      <ApplicationButton
        id={row.jobPostId}
        history={row.history}
        match={row.match}
      ></ApplicationButton>
    ),
    wrap: true,
  },
];

const ExpandableJobPost = ({ data }) => {
  return (
    // <div>Hello world</div>

    <div>
      General details
      <Row>
        <Col sm="12">
          <h1>General details</h1>
        </Col>
        <Col sm="6">
          <Label for="jobPostId">Job-post Id</Label>
          <p id="jobPostId">{data.jobPostId}</p>
        </Col>

        <Col sm="6">
          <Label for="positionTitle">Position Title</Label>
          <p id="positionTitle">{data.positionTitle}</p>
        </Col>

        <Col sm="6">
          <Label for="teachingLevel">Teaching level</Label>
          <p id="teachingLevel">{data.teachingLevel}</p>
        </Col>

        <Col sm="6">
          <Row>
            <Col sm="12">
              <Row>
                <Col sm="6">
                  <Label htmlFor="notDisclose">Do not disclose CTC</Label>
                  <Input
                    name="notDisclose"
                    type="checkbox"
                    id="notDisclose"
                    checked={!data.ctc.canDisclose}
                    onChange={() => {}}
                  ></Input>
                </Col>
                <Col sm="6">
                  <Label htmlFor="disclose">Disclose CTC</Label>
                  <Input
                    name="disclose"
                    type="checkbox"
                    id="disclose"
                    checked={data.ctc.canDisclose}
                    onChange={() => {}}
                  ></Input>
                </Col>
              </Row>
            </Col>
            {data.ctc.canDisclose && (
              <Col sm="12">
                <Label for="ctc">CTC</Label>
                <FormGroup>
                  <Input
                    type="number"
                    name="ctc"
                    id="ctc"
                    placeholder="CTC"
                    value={data.ctc.amount}
                    onChange={() => {}}
                    required
                  />
                </FormGroup>
              </Col>
            )}
          </Row>
        </Col>

        <Col sm="6">
          <Label for="skillTags">Skill tags</Label>
          <ChipInput
            id="skillTags"
            defaultValue={data.skillTags}
            fullWidth
            disabled
            variant="outlined"
          />
        </Col>

        <Col sm="6">
          <Label for="noOfOpenings">No. of openings</Label>
          <p id="noOfOpenings">{data.noOfOpenings}</p>
        </Col>

        {/* Job description */}

        <Col sm="12">
          <h1>Job description</h1>
        </Col>

        <Col sm="6">
          <Label for="responsibilites">Responsibilities</Label>
          <ChipInput
            id="responsibilites"
            defaultValue={data.jobDescription.responsibilities}
            fullWidth
            disabled
            variant="outlined"
          />
        </Col>
        <Col sm="6">
          <Label for="mustHaveSkills">Must have skills</Label>
          <ChipInput
            id="mustHaveSkills"
            defaultValue={data.jobDescription.mustHaveSkills}
            fullWidth
            disabled
            variant="outlined"
          />
        </Col>
        <Col sm="6">
          <Label for="goodToHave">Good to have skills</Label>
          <ChipInput
            id="goodToHave"
            defaultValue={data.jobDescription.goodToHave}
            fullWidth
            disabled
            variant="outlined"
          />
        </Col>

        <Col sm="12">
          <h1>Educational Qualifications</h1>
        </Col>

        <Col sm="6">
          <Label for="ug">UG</Label>
          <p id="ug">{data.educationalQualifications.UG}</p>
        </Col>

        <Col sm="6">
          <Label for="pg">PG</Label>
          <p id="pg">{data.educationalQualifications.PG}</p>
        </Col>

        {/* Role setup */}
        <Col sm="12">
          <h1>Role setup</h1>
        </Col>

        <Col sm="6">
          <Label for="category">Category</Label>
          <p id="category">{data.role.category}</p>
        </Col>

        <Col sm="6">
          <Label for="employmentType">Employment type</Label>
          <p id="employmentType">{data.role.employmentType}</p>
        </Col>

        {/* Experience details */}

        <Col sm="12">
          <h1>Experience details</h1>
          <Row>
            <Col sm="6">
              <Label for="experienceType">Experience type</Label>
              <p id="experienceType">
                {data.experienceCategory.isExperienced
                  ? "Experienced"
                  : "Fresher"}
              </p>
            </Col>
            {data.experienceCategory.isExperienced && (
              <div>
                <Col sm="6">
                  <Label for="minExperience">Min. Experience</Label>
                  <p id="minExperience">{data.experienceCategory.minYear}</p>
                </Col>
                <Col sm="6">
                  <Label for="maxExperience">Max. Experience</Label>
                  <p id="maxExperience">{data.experienceCategory.maxYear}</p>
                </Col>
              </div>
            )}
          </Row>
        </Col>

        <Col sm="12">
          <h1>Institutional setup</h1>
          <Label for="institutionId">Institution Id</Label>
          <p id="institutionId">{data.institutionId}</p>
        </Col>

        <Col sm="12">
          <h1>Interview process setup</h1>
          <Label for="intProcessSetup">Interview process Id</Label>
          <p id="intProcessSetup">{data.interviewProcessId}</p>
        </Col>

        <Col sm="12">
          <h1>Designation setup</h1>
          <Label for="des">Designation Id</Label>
          <p id="des">{data.designationId}</p>
        </Col>
      </Row>
    </div>
  );
};

const JobPost = ({ history, match }) => {
  const JJOOBB = {
    jobPostId: "",
    positionTitle: "",
    teachingLevel: "PRE-SCHOOL (Pre-KG, LKG, UKG)",
    ctc: {
      canDisclose: true,
      amount: 0,
    },
    skillTags: [],
    noOfOpenings: "",
    jobDescription: {
      responsibilites: [],
      mustHaveSkills: [],
      goodToHave: [],
    },
    educationalQualifications: {
      UG: "",
      PG: "",
    },
    experienceCategory: {
      isExperienced: true,
      minYear: "",
      maxYear: "",
    },
    role: {
      category: "--SELECT--",
      employmentType: "--SELECT--",
    },
    institutionId: "--SELECT--",
    interviewProcessId: "--SELECT--",
    designationId: "--SELECT--",
  };
  const [lists, setLists] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [jobPost, setJobPost] = useState({
    jobPostId: "",
    positionTitle: "",
    teachingLevel: "PRE-SCHOOL (Pre-KG, LKG, UKG)",
    ctc: {
      canDisclose: true,
      amount: 0,
    },
    skillTags: [],
    noOfOpenings: "",
    jobDescription: {
      responsibilites: [],
      mustHaveSkills: [],
      goodToHave: [],
    },
    educationalQualifications: {
      UG: "",
      PG: "",
    },
    experienceCategory: {
      isExperienced: true,
      minYear: "",
      maxYear: "",
    },
    role: {
      category: "--SELECT--",
      employmentType: "--SELECT--",
    },
    institutionId: "--SELECT--",
    interviewProcessId: "--SELECT--",
    designationId: "--SELECT--",
  });

  // Event handlers
  const openModal = (jobPostDetails) => {
    setJobPost(jobPostDetails);
    setModal(true);
  };

  const deleteJobPost = (_id, jobPostId) => {
    const isTrue = window.confirm(
      `Are you sure you want to delete job post titled ${jobPostId}`
    );
    if (isTrue) {
      dispatch(delJobPost(_id));
    }
  };

  const createJobPost = () => {
    dispatch(saveJobPost(jobPost));
    setJobPost({
      jobPostId: "",
      positionTitle: "",
      teachingLevel: "PRE-SCHOOL (Pre-KG, LKG, UKG)",
      ctc: {
        canDisclose: true,
        amount: "",
      },
      skillTags: [],
      noOfOpenings: "",
      jobDescription: {
        responsibilites: [],
        mustHaveSkills: [],
        goodToHave: [],
      },
      educationalQualifications: {
        UG: "",
        PG: "",
      },
      experienceCategory: {
        isExperienced: true,
        minYear: "",
        maxYear: "",
      },
      role: {
        category: "",
        employmentType: "",
      },
      institutionId: "--SELECT--",
      interviewProcessId: "--SELECT--",
      designationId: "--SELECT--",
    });
    setModal(false);
  };

  const toggle = () => setModal(!modal);

  const jpList = useSelector((state) => state.listJobPosts);
  const { jobPostLists, loading, error } = jpList;
  const dispatch = useDispatch();

  const jobPo = useSelector((state) => state.jobPost);
  const {
    jobPost: jobPostUpdate,
    loading: saveLoading,
    error: saveError,
  } = jobPo;

  const jobDel = useSelector((state) => state.deleteJobPost);
  const { jobPostDelete, loading: deleteLoading, error: deleteError } = jobDel;

  useEffect(() => {
    dispatch(listJobPosts(setLists, openModal, deleteJobPost, history, match));
  }, [saveLoading, deleteLoading]);

  return (
    <div className="container-fluid">
      <Card>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>Job Postings</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="float-left">
            <Row>
              <Col>
                <JobPostModel
                  modal={modal}
                  setModal={setModal}
                  toggle={toggle}
                  jobPost={jobPost}
                  setJobPost={setJobPost}
                  createJobPost={createJobPost}
                  JJOOBB={JJOOBB}
                ></JobPostModel>
              </Col>
            </Row>
          </div>
          <div className="float-right">
            <Row>
              <Col>
                <FormGroup className="has-icon-left position-relative">
                  <Input
                    type="search"
                    name="search"
                    placeholder="Search by position title"
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
            data={lists.filter((jp) => {
              return jp.positionTitle
                .toLowerCase()
                .includes(search.toLowerCase());
            })}
            columns={columns}
            customStyles={customStyles}
            expandableRows
            expandOnRowClicked
            expandableRowsComponent={<ExpandableJobPost />}
            selectableRows
            onSelectedRowsChange={(state) => {
              console.log(state.selectedRows);
            }}
            pagination
            highlightOnHover
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default JobPost;
