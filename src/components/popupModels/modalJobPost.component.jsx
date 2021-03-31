import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faSearchLocation,
  faUniversity,
} from "@fortawesome/pro-duotone-svg-icons";
import ChipInput from "material-ui-chip-input";
import CATEGORY_OPTIONS from "../createdepartment/department.data";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Plus } from "react-feather";
import { getOnlyInstituteNames } from "../../actions/instituteActions";
import { getOnlyProcessIds } from "../../actions/interviewProcessActions";
import { getOnlyDesignationNames } from "../../actions/designationActions";
import './instituteModal.css'

const TEACHING_LEVEL = [
  { teachingLevel: "PRE-SCHOOL (Pre-KG, LKG, UKG)" },
  { teachingLevel: "ELEMENTARY (I - V STD)" },
  { teachingLevel: "PRIMARY (VI - X STD)" },
  { teachingLevel: "SECONDARY (XI - XII STD)" },
];

const EMPLOYMENT_TYPE = [
  "--SELECT--",
  "Full-time",
  "Part-time",
  "Guest-lecturer",
];

// const TAGS = ["Mathamatics", "Elementary", "Secondary", "Higher Secondary"];

const JobPostModel = ({
  modal,
  setModal,
  toggle,
  jobPost,
  setJobPost,
  createJobPost,
  JJOBB,
}) => {
  // Form submit
  const [institutionNames, setInstituteNames] = useState([]);

  const [interivewProcessIds, setIntProcessIds] = useState([]);

  const [designationIds, setDesignIds] = useState([]);

  useEffect(() => {
    getOnlyInstituteNames(setInstituteNames);
    getOnlyProcessIds(setIntProcessIds);
    getOnlyDesignationNames(setDesignIds);
    return () => {};
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (jobPost.institutionId === "--SELECT--") {
      alert("Please select institution id");
    } 
    else if (jobPost.interviewProcessId === "--SELECT--") {
      alert("Please select interview process id");
    } else if (jobPost.designationId === "--SELECT--") {
      alert("Please select designation id");
    } 
    else if (jobPost.role.category === "--SELECT--") {
      alert("Please select role category");
    } else if (jobPost.role.employmentType === "--SELECT--") {
      alert("Please select role employment type");
    } 
    else {
      setJobPost(jobPost);
      createJobPost();
    }
  };

  const resetJobPost = () => {
    setJobPost({
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
  };

  // Event handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "teachingLevel":
        setJobPost({ ...jobPost, [name]: value });
        break;
      case "category":
        jobPost.role.category = value;
        setJobPost({ ...jobPost });
        break;
      case "employmentType":
        jobPost.role.employmentType = value;
        setJobPost({ ...jobPost });
        break;
      case "experienceType":
        if (value === "Fresher") {
          jobPost.experienceCategory.isExperienced = false;
          setJobPost({ ...jobPost });
        } else {
          jobPost.experienceCategory.isExperienced = true;
          setJobPost({ ...jobPost });
        }
        break;
      case "minYear":
        jobPost.experienceCategory.minYear = value;
        setJobPost({ ...jobPost });
        break;
      case "maxYear":
        jobPost.experienceCategory.maxYear = value;
        setJobPost({ ...jobPost });
        break;
      case "ug":
        jobPost.educationalQualifications.UG = value;
        setJobPost({ ...jobPost });
        break;
      case "pg":
        jobPost.educationalQualifications.PG = value;
        setJobPost({ ...jobPost });
        break;
      case "disclose":
        jobPost.ctc.canDisclose = true;
        setJobPost({ ...jobPost });
        break;
      case "notDisclose":
        jobPost.ctc.canDisclose = false;
        setJobPost({ ...jobPost });
        break;
      case "ctc":
        jobPost.ctc.amount = value;
        setJobPost({ ...jobPost });
        break;
      default:
        setJobPost({ ...jobPost, [name]: value });
    }
  };

  // Chip event handlers
  const handleSkillTagChip = (chips) => {
    console.log(chips);
    setJobPost({ ...jobPost, skillTags: chips });
  };

  const handleResChip = (chips) => {
    jobPost.jobDescription.responsibilities = chips;
    setJobPost({ ...jobPost });
  };

  const handleMushHaveChip = (chips) => {
    jobPost.jobDescription.mustHaveSkills = chips;
    setJobPost({ ...jobPost });
  };

  const handleGoodToHaveChip = (chips) => {
    jobPost.jobDescription.goodToHave = chips;
    setJobPost({ ...jobPost });
  };

  return (
    <div>
      <Button
        className="mr-1"
        color="primary"
        outline
        onClick={() => {
          setModal(true);
          resetJobPost();
        }}
      >
        <Plus size={15} />
        Create job post
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Create Job Post</ModalHeader>
        <ModalBody>
          <div>
            <Form onSubmit={handleFormSubmit}>
              {/* General details */}
              <Row style={{marginLeft:'0px'}}>
              <Col sm="12">
                
                <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                  General details
                </CardTitle>
              </Col>
                {/* <Col sm="6">
                  <Label for="jobPostId">Job-post Id</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="jobPostId"
                      id="jobPostId"
                      placeholder="Job post Id"
                      value={jobPost.jobPostId}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </Col> */}

                <Col sm="6">
                  <Label for="positionTitle" style={{fontSize:'14px',color:'#c3272b'}}>Position Title</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="positionTitle"
                      id="positionTitle"
                      placeholder="Position Title"
                      onChange={handleChange}
                      value={jobPost.positionTitle}
                      required
                    />
                  </FormGroup>
                </Col>

                <Col sm="6">
                  <Label for="teachingLevel" style={{fontSize:'14px',color:'#c3272b'}}>Teaching level</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      name="teachingLevel"
                      onChange={handleChange}
                      value={jobPost.teachingLevel}
                      id="teachingLevel"
                    >
                      {TEACHING_LEVEL.map((ins, idx) => (
                        <option key={idx}>{ins.teachingLevel}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>

                <Col sm="6">
                  <Row>
                    <Col sm="12">
                      <Row>
                        <Col sm="6">
                          <Label htmlFor="notDisclose" style={{fontSize:'14px',color:'#c3272b'}}>
                            Do not disclose CTC
                          </Label>
                          <Input
                            name="notDisclose"
                            type="checkbox"
                            id="notDisclose"
                            checked={!jobPost.ctc.canDisclose}
                            onChange={handleChange}
                            style={{marginLeft:'12px'}}
                          ></Input>
                        </Col>
                        <Col sm="6">
                          <Label htmlFor="disclose" style={{fontSize:'14px',color:'#c3272b'}}>Disclose CTC</Label>
                          <Input
                            name="disclose"
                            type="checkbox"
                            id="disclose"
                            checked={jobPost.ctc.canDisclose}
                            onChange={handleChange}
                            style={{marginLeft:'12px'}}

                          ></Input>
                        </Col>
                      </Row>
                    </Col>
                    {jobPost.ctc.canDisclose && (
                      <Col sm="12">
                        <Label for="ctc">CTC</Label>
                        <FormGroup>
                          <Input
                            type="number"
                            name="ctc"
                            id="ctc"
                            onChange={handleChange}
                            placeholder="CTC"
                            value={jobPost.ctc.amount}
                            required
                          />
                        </FormGroup>
                      </Col>
                    )}
                  </Row>
                </Col>

                <Col sm="6">
                  <Label for="skillTags" style={{fontSize:'14px',color:'#c3272b'}}>Skill tags</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="skillTags"
                      id="skillTags"
                      placeholder="Skill Tags"
                      defaultValue={jobPost.skillTags}
                      onChange={handleSkillTagChip}
                      required
                    />
                  </FormGroup>
                  {/* <ChipInput
                    id="skillTags"
                    alwaysShowPlaceholder
                    fullWidth
                    variant="outlined"
                    placeholder="Skill tags"
                    defaultValue={jobPost.skillTags}
                    onChange={handleSkillTagChip}
                  /> */}
                </Col>

                <Col sm="6">
                  <Label for="noOfOpenings" style={{fontSize:'14px',color:'#c3272b'}}>No. of openings</Label>
                  <FormGroup>
                    <Input
                      type="number"
                      name="noOfOpenings"
                      id="noOfOpenings"
                      onChange={handleChange}
                      value={jobPost.noOfOpenings}
                      placeholder="No. of openings"
                      required
                    />
                  </FormGroup>
                </Col>

                {/* Job description */}

                <Col sm="12">
                
                <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                  Job description
                </CardTitle>
              </Col>

                <Col sm="6">
                  <Label for="responsibilities" style={{fontSize:'14px',color:'#c3272b'}}>Responsibilities</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="responsibilites"
                      id="responsibilities"
                      defaultValue={jobPost.jobDescription.responsibilities}
                      placeholder="responsibilities"
                      onChange={handleResChip}
                      required
                    />
                  </FormGroup>
                  {/* <ChipInput
                    id="responsibilities"
                    alwaysShowPlaceholder
                    fullWidth
                    variant="outlined"
                    defaultValue={jobPost.jobDescription.responsibilities}
                    placeholder="responsibilities"
                    onChange={handleResChip}
                  /> */}
                </Col>
                <Col sm="6">
                  <Label for="mustHaveSkills" style={{fontSize:'14px',color:'#c3272b'}}>Must have skills</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="skills"
                      id="mustHaveSkills"
                      placeholder="mustHaveSkills"
                      defaultValue={jobPost.jobDescription.mustHaveSkills}
                      onChange={handleMushHaveChip}
                      required
                    />
                  </FormGroup>
                  {/* <ChipInput
                    id="mustHaveSkills"
                    alwaysShowPlaceholder
                    fullWidth
                    variant="outlined"
                    placeholder="mustHaveSkills"
                    defaultValue={jobPost.jobDescription.mustHaveSkills}
                    onChange={handleMushHaveChip}
                  /> */}
                </Col>
                <Col sm="6">
                  <Label for="goodToHave" style={{fontSize:'14px',color:'#c3272b'}}>Good to have skills</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="goodSkills"
                      id="goodToHave"
                      placeholder="goodToHave"
                      defaultValue={jobPost.jobDescription.goodToHave}
                      onChange={handleGoodToHaveChip}
                      required
                    />
                  </FormGroup>
                  {/* <ChipInput
                    id="goodToHave"
                    alwaysShowPlaceholder
                    fullWidth
                    variant="outlined"
                    placeholder="goodToHave"
                    defaultValue={jobPost.jobDescription.goodToHave}
                    onChange={handleGoodToHaveChip}
                  /> */}
                </Col>

                {/* <Col sm="12">
                  <h1>Educational Qualifications</h1>
                </Col> */}
              <Col sm="12">
                
                <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                  Educational Qualifications
                </CardTitle>
              </Col>
                <Col sm="6">
                  <Label for="ug">UG</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="ug"
                      id="ug"
                      value={jobPost.educationalQualifications.UG}
                      placeholder="UG Degree"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>

                <Col sm="6">
                  <Label for="pg">PG</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="pg"
                      id="pg"
                      value={jobPost.educationalQualifications.PG}
                      placeholder="PG Degree"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>

                {/* Role setup */}
                <Col sm="12">
                
                <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                 Role Setup
                </CardTitle>
              </Col>
                {/* <Col sm="12">
                  <h1>Role setup</h1>
                </Col> */}

                <Col sm="6">
                  <Label for="category">Category</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      name="category"
                      id="category"
                      value={jobPost.role.category}
                      placeholder="Category"
                      onChange={handleChange}
                      required
                    >
                      {CATEGORY_OPTIONS.map((option, idx) => (
                        <option key={idx}>{option.value}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>

                <Col sm="6">
                  <Label for="employmentType">Employment type</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      name="employmentType"
                      id="employmentType"
                      onChange={handleChange}
                      value={jobPost.role.employmentType}
                      placeholder="Employment type"
                      required
                    >
                      {EMPLOYMENT_TYPE.map((option, idx) => (
                        <option key={idx}>{option}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>

                {/* Experience details */}
                <Col sm="12">
                
                <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                 Experience Details
                </CardTitle>
              </Col>
                <Col sm="12">
                  
                  <Row>
                    <Col sm="12">
                      <Label for="experienceType">Experience type</Label>
                      <FormGroup>
                        <Input
                          type="select"
                          name="experienceType"
                          onChange={handleChange}
                          id="experienceType"
                          value={
                            jobPost.experienceCategory.isExperienced
                              ? "Experienced"
                              : "Fresher"
                          }
                        >
                          <option>Fresher</option>
                          <option>Experienced</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    {jobPost.experienceCategory.isExperienced ? (
                      <div className='expericence_div'>
                        <Col sm="6">
                          <Label for="minExperience" style={{fontSize:'14px',color:'#c3272b'}}>Min. Experience</Label>
                          <FormGroup>
                            <Input
                              type="number"
                              name="minYear"
                              onChange={handleChange}
                              id="minExperience"
                              value={jobPost.experienceCategory.minYear}
                            ></Input>
                          </FormGroup>
                        </Col>
                        <Col sm="6">
                          <Label for="maxExperience" style={{fontSize:'14px',color:'#c3272b'}}>Max. Experience</Label>
                          <FormGroup>
                            <Input
                              type="number"
                              name="maxYear"
                              onChange={handleChange}
                              value={jobPost.experienceCategory.maxYear}
                              id="maxExperience"
                            ></Input>
                          </FormGroup>
                        </Col>
                      </div>
                    ) : null}
                  </Row>
                </Col>
                <Col sm="12">
                
                <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                  Institutional Setup
                </CardTitle>
              </Col>
                <Col sm="12">
                  {/* <h1>Institutional setup</h1> */}
                  <Label for="institutionId">Institution Id</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      name="institutionId"
                      onChange={handleChange}
                      id="institutionId"
                      value={jobPost.institutionId}
                      placeholder="Process Id"
                    >
                      {institutionNames.map((ins, idx) => (
                        <option key={idx}>{ins.instituteId}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="12">
                
                <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                  Interview Process Setup
                </CardTitle>
              </Col>
                <Col sm="12">
                  {/* <h1>Interview process setup</h1> */}
                  <Label for="intProcessSetup">Interview process Id</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      name="interviewProcessId"
                      onChange={handleChange}
                      id="intProcessSetup"
                      placeholder="Process Id"
                      value={jobPost.interviewProcessId}
                    >
                      {interivewProcessIds.map((ins, idx) => (
                        <option key={idx}>{ins.interviewProcessId}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col sm="12">
                
                <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                 Designation Setup
                </CardTitle>
              </Col>
                <Col sm="12">
                  {/* <h1>Designation setup</h1> */}
                  <Label for="designProcessSetup">Designation Id</Label>
                  <FormGroup>
                    <Input
                      type="select"
                      name="designationId"
                      onChange={handleChange}
                      id="designProcessSetup"
                      placeholder="Process Id"
                      value={
                        jobPost.designationId
                          ? jobPost.designationId
                          : "--SELECT--"
                      }
                    >
                      {/* <option>--SELECT--</option> */}
                      {designationIds.map((des, idx) => (
                        <option key={idx}>{des.designationId}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Col sm="12">
                <div className='btn_div'>
                  <div className='btn_div_cancel'>
                  <Button
                  type="button"
                  onClick={() => {
                    resetJobPost();
                    toggle();
                  }}
                >
                  Cancel
                </Button>
                  </div>
                  <div>
                  {jobPost._id ? (
                  <Button color="success" type="submit">
                    Update job post
                  </Button>
                ) : (
                  <Button color="success" type="submit">
                    Create 
                  </Button>
                )}
                  </div>
                </div>
               
               
              </Col>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default JobPostModel;
