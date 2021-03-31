import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faSearchLocation,
  faUniversity,
  faPlus,
  faLocationArrow
} from "@fortawesome/pro-duotone-svg-icons";
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

import {
  User,
  Mail,
  Lock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Plus,
} from "react-feather";
import Select from "react-select";
import INSTITUTE_OPTIONS from "../../assets/sample-data/instituteOptions";
import './instituteModal.css'
// import Button from '@material-ui/core/Button';

const ModalInstitute = ({
  lists,
  modal,
  toggle,
  insAllDetails,
  setInsAllDetails,
  handleSave,
  handleCancel,
  updateHandler,
  instituteLists,
  isEdit,
  handleCreateIns,
}) => {
  if (!insAllDetails._id) {
    insAllDetails.organization_id = lists.length + 1;
  }

  const handleInstituteId = (e) => {
    setInsAllDetails({ ...insAllDetails, instituteId: e.target.value });
    const dup = instituteLists.findIndex(
      (ins) => ins.instituteId === e.target.value
    );
    if (dup === -1) {
    } else {
      alert(
        `Duplicate Institute Id ${e.target.value} found. Please Change Institute Id`
      );
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInsAllDetails({ ...insAllDetails, [name]: value });
  };

  const handleAcademicChange = (e) => {
    const { value, name } = e.target;
    setInsAllDetails({
      ...insAllDetails,
      academicYear: { ...insAllDetails.academicYear, [name]: value },
    });
  };

  const handleUserChange = (e) => {
    const { value, name } = e.target;
    setInsAllDetails({
      ...insAllDetails,
      user: { ...insAllDetails.user, [name]: value },
    });
  };

  const handleInstituteType = (selectedOption) => {
    setInsAllDetails({ ...insAllDetails, instituteType: selectedOption.value });
  };

  return (
    <div>
      <div className="create_employee_btn_div">
      <Button
        className="mr-1"
        color="primary"
        onClick={handleCreateIns}
        outline
      >
        <Row>
          <Col sm='3'>
          <FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: 15, color: "#fd868c " }}
                />
          </Col>
          <Col sm='9'>
          Create 
          </Col>
          </Row>
      </Button>
      </div>
      <div className='institute_title_header'>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle} >Create Institute</ModalHeader>
        <ModalBody>
          <div>
            <Form onSubmit={handleSave}>
              <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                Institution Details
              </CardTitle>
              <Row>
                <Col sm="12">
                  <Label for="organization_id">Organization ID</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="number"
                      name="organization_id"
                      value={insAllDetails.organization_id}
                      id="organization_id"
                      placeholder="Organization ID"
                      onChange={() => {}}
                      disabled
                    />
                    <div className="form-control-position">
                      <User size={15} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="instituteId">Institute ID</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="instituteId"
                      value={insAllDetails.instituteId}
                      id="instituteId"
                      placeholder="Institute ID"
                      onChange={handleInstituteId}
                    />
                    <div className="form-control-position">
                      <User size={15} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="instituteName">Institute Name</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="instituteName"
                      value={insAllDetails.instituteName}
                      onChange={handleChange}
                      id="instituteName"
                      placeholder="Institute Name"
                    />
                    <div className="form-control-position">
                      <Mail size={15} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="yearOfEstablishment">Year Of Establishment</Label>
                  <FormGroup>
                    <Input
                      required
                      type="date"
                      name="yearOfEstablishment"
                      value={insAllDetails.yearOfEstablishment}
                      onChange={handleChange}
                      id="yearOfEstablishment"
                      placeholder="date placeholder"
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="instituteType">Board OF Education</Label>
                  <FormGroup>
                    <Select
                      name="instituteType"
                      id="instituteType"
                      value={insAllDetails.instituteType}
                      options={INSTITUTE_OPTIONS}
                      onChange={handleInstituteType}
                      placeholder={insAllDetails.instituteType}
                    />
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="branch">Location</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="branch"
                      value={insAllDetails.branch}
                      onChange={handleChange}
                      id="branch"
                      placeholder="location"
                    />
                    <div className="form-control-position">
                      <Lock size={15} />
                    </div>
                  </FormGroup>
                </Col>
              </Row>

              <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                Academic setup
              </CardTitle>
              <Row>
                <Col sm="12">
                  <Label for="organization_id">Academic year</Label>
                </Col>
                <Col sm="12">
                  <Row>
                    <Col sm="6">
                      <FormGroup className="has-icon-left position-relative">
                        <Label for="start">Start</Label>

                        <Input
                          required
                          type="date"
                          name="start"
                          value={insAllDetails.academicYear.start}
                          id="start"
                          placeholder="Start year"
                          onChange={handleAcademicChange}
                        />
                        <div className="form-control-position">
                          <User size={15} />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col sm="6">
                      <FormGroup className="has-icon-left position-relative">
                        <Label for="End">End</Label>

                        <Input
                          required
                          type="date"
                          name="end"
                          value={insAllDetails.academicYear.end}
                          id="End"
                          placeholder="End year"
                          onChange={handleAcademicChange}
                        />
                        <div className="form-control-position">
                          <User size={15} />
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12">
                  <Label for="admissionPrefix">Admission prefix</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="admissionPrefix"
                      value={insAllDetails.academicYear.admissionPrefix}
                      id="admissionPrefix"
                      placeholder="Admission prefix"
                      onChange={handleAcademicChange}
                    />
                    <div className="form-control-position">
                      <User size={15} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="admissionStart">Admission Start</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="number"
                      name="admissionStart"
                      value={insAllDetails.academicYear.admissionStart}
                      id="admissionStart"
                      placeholder="Admission Start"
                      onChange={handleAcademicChange}
                    />
                    <div className="form-control-position">
                      <User size={15} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="teacherPrefix">Teacher prefix</Label>
                  <FormGroup>
                    <Input
                      required
                      type="string"
                      name="teacherPrefix"
                      value={insAllDetails.teacherPrefix}
                      onChange={handleChange}
                      id="teacherPrefix"
                      placeholder="Teacher prefix"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                Admin user setup
              </CardTitle>
              <Row>
                <Col sm="12">
                  <Label for="username">Username</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="username"
                      value={insAllDetails.user.username}
                      id="username"
                      placeholder="Username"
                      onChange={handleUserChange}
                    />
                    <div className="form-control-position">
                      <User size={15} />
                    </div>
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="password">Password</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="password"
                      name="password"
                      value={insAllDetails.user.password}
                      id="password"
                      placeholder="Password"
                      onChange={handleUserChange}
                    />
                    <div className="form-control-position">
                      <User size={15} />
                    </div>
                  </FormGroup>
                </Col>
              </Row>

              <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faSearchLocation}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                Location Details
              </CardTitle>
              <Row>
                <Col sm="12">
                  <Label for="buildingNo">Building No</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="buildingNo"
                      value={insAllDetails.buildingNo}
                      onChange={handleChange}
                      id="buildingNo"
                      placeholder="Building No"
                    />
                    <div className="form-control-position">
                      <User size={15} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="streetName">Street Name</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="streetName"
                      value={insAllDetails.streetName}
                      onChange={handleChange}
                      id="streetName"
                      placeholder="Street Name"
                    />
                    <div className="form-control-position">
                      <Mail size={15} />
                    </div>
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="area">Area</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="area"
                      value={insAllDetails.area}
                      onChange={handleChange}
                      id="area"
                      placeholder="Area"
                    />
                    <div className="form-control-position">
                      <Mail size={15} />
                    </div>
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="landmark">LandMark</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="landmark"
                      value={insAllDetails.landmark}
                      onChange={handleChange}
                      id="landmark"
                      placeholder="Landmark"
                    />
                    <div className="form-control-position">
                      <Mail size={15} />
                    </div>
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="city">City</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="city"
                      value={insAllDetails.city}
                      onChange={handleChange}
                      id="city"
                      placeholder="City"
                    />
                    <div className="form-control-position">
                      <Mail size={15} />
                    </div>
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="pincode">Pincode</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="number"
                      name="pincode"
                      value={insAllDetails.pincode}
                      onChange={handleChange}
                      id="pincode"
                      placeholder="Pincode"
                    />
                    <div className="form-control-position">
                      <Mail size={15} />
                    </div>
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="state">State</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="state"
                      value={insAllDetails.state}
                      onChange={handleChange}
                      id="state"
                      placeholder="State"
                    />
                    <div className="form-control-position">
                      <Lock size={15} />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              {/*  */}
              <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faAddressBook}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                Bank details
              </CardTitle>
              <Row>
                <Col sm="12">
                  <Label for="bankName">Name</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="bankName"
                      value={insAllDetails.bankName}
                      onChange={handleChange}
                      id="bankName"
                      placeholder="Name"
                    />
                    <div className="form-control-position">
                      <Mail size={15} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="bankBranch">Branch</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="bankBranch"
                      value={insAllDetails.bankBranch}
                      onChange={handleChange}
                      id="bankBranch"
                      placeholder="Branch"
                    />
                    <div className="form-control-position">
                      <Mail size={15} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="bankAccountNo">Account number</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      type="text"
                      name="bankAccountNo"
                      value={insAllDetails.bankAccountNo}
                      onChange={handleChange}
                      id="bankAccountNo"
                      placeholder="Account no."
                      required
                    />
                    <div className="form-control-position">
                      <Mail size={15} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="ifsc">IFSC</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="bankIfsc"
                      value={insAllDetails.bankIfsc}
                      onChange={handleChange}
                      id="ifsc"
                      placeholder="IFSC"
                    />
                    <div className="form-control-position">
                      <Mail size={15} />
                    </div>
                  </FormGroup>
                </Col>
              </Row>

              {/*  */}
              <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faAddressBook}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                Contact
              </CardTitle>
              <Row>
                <Col sm="12">
                  <Label for="website">Website</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="website"
                      value={insAllDetails.website}
                      onChange={handleChange}
                      id="website"
                      placeholder="Website"
                    />
                    <div className="form-control-position">
                      <Mail size={15} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="landline">Landline</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="number"
                      name="landline"
                      value={insAllDetails.landline}
                      onChange={handleChange}
                      id="landline"
                      placeholder="Landline"
                    />
                    <div className="form-control-position">
                      <Mail size={15} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="email">Email</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      type="email"
                      name="email"
                      value={insAllDetails.email}
                      onChange={handleChange}
                      id="email"
                      placeholder="Email"
                      required
                    />
                    <div className="form-control-position">
                      <Mail size={15} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="mobile">Mobile</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="number"
                      name="mobile"
                      value={insAllDetails.mobile}
                      onChange={handleChange}
                      id="mobile"
                      placeholder="Mobile"
                    />
                    <div className="form-control-position">
                      <Mail size={15} />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faAddressBook}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                Social Media Link
              </CardTitle>
              <Row>
                <Col sm="12">
                  <Label for="socialFacebook">Facebook</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="socialFacebook"
                      value={insAllDetails.socialFacebook}
                      onChange={handleChange}
                      id="socialFacebook"
                      placeholder="Facebook"
                    />
                    <div className="form-control-position">
                      <Facebook size={15} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="socialTwitter">Twitter</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="socialTwitter"
                      value={insAllDetails.socialTwitter}
                      onChange={handleChange}
                      id="socialTwitter"
                      placeholder="Twitter"
                    />
                    <div className="form-control-position">
                      <Twitter size={15} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="socialLinkedIn">Linked In</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="socialLinkedIn"
                      value={insAllDetails.socialLinkedIn}
                      onChange={handleChange}
                      id="socialLinkedIn"
                      placeholder="LinkedIn"
                    />
                    <div className="form-control-position">
                      <Linkedin size={15} />
                    </div>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="socialInstagram">Instagram</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      required
                      type="text"
                      name="socialInstagram"
                      value={insAllDetails.socialInstagram}
                      onChange={handleChange}
                      id="socialInstagram"
                      placeholder="Instagram"
                    />
                    <div className="form-control-position">
                      <Instagram size={15} />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="btn_div">
                    <div className='btn_div_cancel'><Button 
                    
                     variant="contained" onClick={handleCancel}>Cancel</Button></div>
                    <div>
                    {!isEdit ? (
                      <Button type="submit" 
                      variant="contained"
                      color="success">
                        Create
                        <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 20, color: "white ", position:'relative',left:'12px',top:'3px' }}
                />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        variant="contained"
                        color="success"
                        onClick={updateHandler}
                      >
                        Update Institute
                        <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 20, color: "white ", position:'relative',left:'12px',top:'3px' }}
                />
                      </Button>
                    )}
                    </div>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </ModalBody>
      </Modal>
      </div>
    </div>
  );
};

export default ModalInstitute;
