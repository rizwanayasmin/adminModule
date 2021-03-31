import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileSpreadsheet } from "@fortawesome/pro-solid-svg-icons";
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
import {
  faEye,
  faTrash,
  faPencil,
  faArrowDown,
} from "@fortawesome/pro-duotone-svg-icons";
import {
  ChevronsLeft,
  ChevronsRight,
  Plus,
  User,
  Search,
  ChevronDown,
  Check,
  AlertTriangle,
} from "react-feather";
import Select from "react-select";
import Checkbox from "../@vuexy/checkbox/CheckboxesVuexy";
import leavePolicyColumn from "../../assets/data-table-columns/leavePolicyColumn";
import IS_YEARLY from "../../assets/sample-data/leavePolicyOptions";
import LEAVE_POLICIES from "../../assets/sample-data/leavePolicies";
import { profileUpdate } from "../../actions/teacherActions";

const ProfileInfoModal = ({ isModalOpen, toggleModal, teacherInfo }) => {
  const [teacher, setTeacher] = useState({
    first_name: teacherInfo.first_name ? teacherInfo.first_name : "",
    last_name: teacherInfo.last_name ? teacherInfo.last_name : "",
    email: teacherInfo.email ? teacherInfo.email : "",
    mobile_number: teacherInfo.mobile_number ? teacherInfo.mobile_number : "",
    gender: teacherInfo.gender ? teacherInfo.gender : "",
    date_of_birth: teacherInfo.date_of_birth ? teacherInfo.date_of_birth : "",
    marital_status: teacherInfo.marital_status
      ? teacherInfo.marital_status
      : "",
    majorSubject: teacherInfo.majorSubject ? teacherInfo.majorSubject : "",
    educationalQualification: teacherInfo.educationalQualification
      ? teacherInfo.educationalQualification
      : "",
    salary: {
      ctc: teacherInfo.salary
        ? teacherInfo.salary.ctc
          ? teacherInfo.salary.ctc
          : ""
        : "",
      pfNumber: teacherInfo.salary
        ? teacherInfo.salary.pfNumber
          ? teacherInfo.salary.pfNumber
          : ""
        : "",
    },
    bankDetails: {
      name: teacherInfo.bankDetails
        ? teacherInfo.bankDetails.name
          ? teacherInfo.bankDetails.name
          : ""
        : "",
      branch: teacherInfo.bankDetails
        ? teacherInfo.bankDetails.branch
          ? teacherInfo.bankDetails.branch
          : ""
        : "",
      ifscCode: teacherInfo.bankDetails
        ? teacherInfo.bankDetails.ifscCode
          ? teacherInfo.bankDetails.ifscCode
          : ""
        : "",
      holderName: teacherInfo.bankDetails
        ? teacherInfo.bankDetails.holderName
          ? teacherInfo.bankDetails.holderName
          : ""
        : "",
      accountNo: teacherInfo.bankDetails
        ? teacherInfo.bankDetails.accountNo
          ? teacherInfo.bankDetails.accountNo
          : ""
        : "",
    },
    emergencyContact: {
      name: teacherInfo.emergencyContact
        ? teacherInfo.emergencyContact.name
          ? teacherInfo.emergencyContact.name
          : ""
        : "",
      relation: teacherInfo.emergencyContact
        ? teacherInfo.emergencyContact.relation
          ? teacherInfo.emergencyContact.relation
          : ""
        : "",
      mobile: teacherInfo.emergencyContact
        ? teacherInfo.emergencyContact.mobile
          ? teacherInfo.emergencyContact.mobile
          : ""
        : "",
      alternateMobile: teacherInfo.emergencyContact
        ? teacherInfo.emergencyContact.alternateMobile
          ? teacherInfo.emergencyContact.alternateMobile
          : ""
        : "",
      address: teacherInfo.emergencyContact
        ? teacherInfo.emergencyContact.address
          ? teacherInfo.emergencyContact.address
          : ""
        : "",
    },
    address: {
      buildingNo: teacherInfo.address
        ? teacherInfo.address.buildingNo
          ? teacherInfo.address.buildingNo
          : ""
        : "",
      streetName: teacherInfo.address
        ? teacherInfo.address.streetName
          ? teacherInfo.address.streetName
          : ""
        : "",
      area: teacherInfo.address
        ? teacherInfo.address.area
          ? teacherInfo.address.area
          : ""
        : "",
      landmark: teacherInfo.address
        ? teacherInfo.address.landmark
          ? teacherInfo.address.landmark
          : ""
        : "",
      pincode: teacherInfo.address
        ? teacherInfo.address.pincode
          ? teacherInfo.address.pincode
          : ""
        : "",
      state: teacherInfo.address
        ? teacherInfo.address.state
          ? teacherInfo.address.state
          : ""
        : "",
      country: teacherInfo.address
        ? teacherInfo.address.country
          ? teacherInfo.address.country
          : ""
        : "",
    },
  });

  const handleUpdate = () => {
    profileUpdate(teacherInfo.id, teacher, setTeacher);
    toggleModal();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { value, name } = e.target;
    setTeacher({ ...teacher, address: { ...teacher.address, [name]: value } });
  };

  const handleBankDetails = (e) => {
    const { value, name } = e.target;
    setTeacher({
      ...teacher,
      bankDetails: { ...teacher.bankDetails, [name]: value },
    });
  };

  const handleEmergencyContact = (e) => {
    const { value, name } = e.target;
    setTeacher({
      ...teacher,
      emergencyContact: { ...teacher.emergencyContact, [name]: value },
    });
  };

  const handleSalaryDetails = (e) => {
    const { value, name } = e.target;
    setTeacher({ ...teacher, salary: { ...teacher.salary, [name]: value } });
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>Profile information</ModalHeader>
        <ModalBody>
          <div className="container-fluid">
            <Row>
              <Col xs="12" sm="12">
                <Card>
                  <div className="cardtitle">Personal details</div>
                  
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Row>
                            <Col md={12}>
                              <FormGroup className="wrap-input100 rs1-wrap-input100">
                                <Label for="firstname">First name</Label>
                                <Input
                                  value={teacher.first_name}
                                  onChange={handleChange}
                                  type="text"
                                  name="first_name"
                                  id="firstname"
                                  placeholder="First name"
                                  className="input100"
                                />
                                <span className="focus-input100"></span>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12}>
                              <FormGroup className="wrap-input100 rs1-wrap-input100">
                                <Label for="lastname">Last name</Label>
                                <Input
                                  value={teacher.last_name}
                                  onChange={handleChange}
                                  type="text"
                                  name="last_name"
                                  id="lastname"
                                  placeholder="Last name"
                                  className="input100"
                                />
                                <span className="focus-input100"></span>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Row>
                            <Col md={12}>
                              <FormGroup className="wrap-input100 rs1-wrap-input100">
                                <Label for="mobileNumber">Mobile number</Label>
                                <Input
                                  value={teacher.mobile_number}
                                  onChange={handleChange}
                                  type="number"
                                  name="mobile_number"
                                  id="mobileNumber"
                                  placeholder="Mobile number"
                                  className="input100"
                                />
                                <span className="focus-input100"></span>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12}>
                              <FormGroup className="wrap-input100 rs1-wrap-input100">
                                <Label for="gender">Gender</Label>
                                <Input
                                  value={teacher.gender}
                                  onChange={handleChange}
                                  type="text"
                                  name="gender"
                                  id="gender"
                                  placeholder="Gender"
                                  className="input100"
                                />
                                <span className="focus-input100"></span>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Row>
                            <Col md={12}>
                              <FormGroup className="wrap-input100 rs1-wrap-input100">
                                <Label for="date_of_birth">DOB</Label>
                                <Input
                                  value={teacher.date_of_birth}
                                  onChange={handleChange}
                                  type="date"
                                  name="date_of_birth"
                                  id="date_of_birth"
                                  placeholder="DOB"
                                  className="input100"
                                />
                                <span className="focus-input100"></span>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12}>
                              <FormGroup className="wrap-input100 rs1-wrap-input100">
                                <Label for="marital_status">
                                  Marital status
                                </Label>
                                <Input
                                  value={teacher.marital_status}
                                  onChange={handleChange}
                                  type="text"
                                  name="marital_status"
                                  id="marital_status"
                                  placeholder="Marital status"
                                  className="input100"
                                />
                                <span className="focus-input100"></span>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Row>
                            <Col md={12}>
                              <FormGroup className="wrap-input100 rs1-wrap-input100">
                                <Label for="majorSubject">Subject Major</Label>
                                <Input
                                  value={teacher.majorSubject}
                                  onChange={handleChange}
                                  type="text"
                                  name="majorSubject"
                                  id="majorSubject"
                                  placeholder="Subject major"
                                  className="input100"
                                />
                                <span className="focus-input100"></span>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={12}>
                              <FormGroup className="wrap-input100 rs1-wrap-input100">
                                <Label for="educationalQualification">
                                  Educational qualification
                                </Label>
                                <Input
                                  value={teacher.educationalQualification}
                                  onChange={handleChange}
                                  type="text"
                                  name="educationalQualification"
                                  id="educationalQualification"
                                  placeholder="Educational qualification"
                                  className="input100"
                                />
                                <span className="focus-input100"></span>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Row>
                            <Col md={12}>
                              <FormGroup className="wrap-input100 rs1-wrap-input100">
                                <Label for="email">Email</Label>
                                <Input
                                  value={teacher.email}
                                  onChange={handleChange}
                                  type="email"
                                  name="email"
                                  id="email"
                                  placeholder="Email"
                                  className="input100"
                                />
                                <span className="focus-input100"></span>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col xs="12" sm="12">
                <Card>
                  <div className="cardtitle">Address</div>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="buildingNo">Building number</Label>
                            <Input
                              value={teacher.address.buildingNo}
                              onChange={handleAddressChange}
                              type="text"
                              name="buildingNo"
                              id="buildingNo"
                              placeholder="Enter Building Details"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="streetName">Street Name</Label>
                            <Input
                              value={teacher.address.streetName}
                              onChange={handleAddressChange}
                              type="text"
                              name="streetName"
                              id="streetName"
                              placeholder="Enter Street Name"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="area">Area</Label>
                            <Input
                              value={teacher.address.area}
                              onChange={handleAddressChange}
                              type="text"
                              name="area"
                              id="area"
                              placeholder="Enter Area"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="landmark">LandMark</Label>
                            <Input
                              value={teacher.address.landmark}
                              onChange={handleAddressChange}
                              type="text"
                              name="landmark"
                              id="landmark"
                              placeholder="Enter Landmark"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="pincode">Pincode</Label>
                            <Input
                              value={teacher.address.pincode}
                              onChange={handleAddressChange}
                              type="number"
                              name="pincode"
                              id="pincode"
                              placeholder="Enter Pincode"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="state">State</Label>
                            <Input
                              value={teacher.address.state}
                              onChange={handleAddressChange}
                              type="text"
                              name="state"
                              id="state"
                              placeholder="Enter State"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>

                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="country">Country</Label>
                            <Input
                              value={teacher.address.country}
                              onChange={handleAddressChange}
                              type="text"
                              name="country"
                              id="country"
                              placeholder="Enter Country"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col xs="12" sm="12">
                <Card>
                  <div className="cardtitle">Emergency contact</div>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="name">Name</Label>
                            <Input
                              value={teacher.emergencyContact.name}
                              onChange={handleEmergencyContact}
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Enter name"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="relation">Relation</Label>
                            <Input
                              value={teacher.emergencyContact.relation}
                              onChange={handleEmergencyContact}
                              type="text"
                              name="relation"
                              id="relation"
                              placeholder="Enter relation"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="mobile">Mobile</Label>
                            <Input
                              value={teacher.emergencyContact.mobile}
                              onChange={handleEmergencyContact}
                              type="number"
                              name="mobile"
                              id="mobile"
                              placeholder="Enter mobile number"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="alternateMobile">
                              Alternate mobile
                            </Label>
                            <Input
                              value={teacher.emergencyContact.alternateMobile}
                              onChange={handleEmergencyContact}
                              type="number"
                              name="alternateMobile"
                              id="alternateMobile"
                              placeholder="Enter alternate mobile"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="address">Address</Label>
                            <Input
                              value={teacher.emergencyContact.address}
                              onChange={handleEmergencyContact}
                              type="text"
                              name="address"
                              id="address"
                              placeholder="Enter address"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col xs="12" sm="12">
                <Card>
                  <div className="cardtitle">Bank details</div>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="name">Name</Label>
                            <Input
                              value={teacher.bankDetails.name}
                              onChange={handleBankDetails}
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Enter name"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="branch">Branch</Label>
                            <Input
                              value={teacher.bankDetails.branch}
                              onChange={handleBankDetails}
                              type="text"
                              name="branch"
                              id="branch"
                              placeholder="Enter branch"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="ifscCode">IFSC Code</Label>
                            <Input
                              value={teacher.bankDetails.ifscCode}
                              onChange={handleBankDetails}
                              type="text"
                              name="ifscCode"
                              id="ifscCode"
                              placeholder="Enter IFSC code"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="holderName">Holder name</Label>
                            <Input
                              value={teacher.bankDetails.holderName}
                              onChange={handleBankDetails}
                              type="text"
                              name="holderName"
                              id="holderName"
                              placeholder="Enter holder name"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="accountNo">Account number</Label>
                            <Input
                              value={teacher.bankDetails.accountNo}
                              onChange={handleBankDetails}
                              type="text"
                              name="accountNo"
                              id="accountNo"
                              placeholder="Enter account number"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col xs="12" sm="12">
                <Card>
                  <div className="cardtitle">Salary details</div>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="ctc">CTC</Label>
                            <Input
                              value={teacher.salary.ctc}
                              onChange={handleSalaryDetails}
                              type="number"
                              name="ctc"
                              id="ctc"
                              placeholder="Enter CTC"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup className="wrap-input100 rs1-wrap-input100">
                            <Label for="pfNumber">Pf number</Label>
                            <Input
                              value={teacher.salary.pfNumber}
                              onChange={handleSalaryDetails}
                              type="text"
                              name="pfNumber"
                              id="pfNumber"
                              placeholder="Enter PF number"
                              className="input100"
                            />
                            <span className="focus-input100"></span>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col xs="12" sm="12">
                <Card>
                  <div className="cardtitle">Documents</div>
                  <CardBody>
                    <Form>
                      <Row className="justify-content-center">
                        <Col md={12}>
                          <FormGroup>
                            <Label for="exampleFile">Upload documents</Label>
                            <Input type="file" name="file" id="exampleFile" />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>

                    <Row>
                      <div className="table-responsive mt-2">
                        <Table className="table lhead table-borderless custom_table ">
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th>Filename</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Marksheet</td>
                              <td>
                                <div className="table-icons">
                                  <a>
                                    <FontAwesomeIcon
                                      icon={faArrowDown}
                                      className="mr-2 font-icon"
                                    />
                                  </a>
                                  <a>
                                    <FontAwesomeIcon
                                      icon={faTrash}
                                      className="mr-2 font-icon"
                                    />
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleUpdate}>
            Update profile
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProfileInfoModal;
