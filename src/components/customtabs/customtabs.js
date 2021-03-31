import React, { useState, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Row,
  Col,
  Table,
  CardBody,
  Media,
  Collapse,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faFilePdf,
  faFileSpreadsheet,
} from "@fortawesome/pro-solid-svg-icons";
import {
  faTrash,
  faPencil,
  faPlus,
  faUser,
  faUsersClass,
  faShieldCheck,
  faChartPie,
  faRupeeSign,
  faAddressCard,
  faMapMarkedAlt,
  faMoneyCheckEditAlt,
  faFileAlt,
  faCodeBranch,
  faClipboardListCheck,
  faCrosshairs,
  faEye,
  faPrint,
  faArrowDown,
} from "@fortawesome/pro-duotone-svg-icons";
import { Doughnut } from "react-chartjs-2";
import StarRatings from "react-star-ratings";
import ClassroomTable from "../teacherprofile/classroom.component";
import LoanTable from "../teacherprofile/loan.component";
import AttendanceTable from "../teacherprofile/attendance.component";
import PayslipTable from "../teacherprofile/payslip.component";
import ProfileInfoModal from "../popupModels/modalProfileInfo.component";
import Select from "react-select";
import { getOnlyInstituteNames } from "../../actions/instituteActions";
import {
  assignAuthority,
  designationChange,
  getOnlyTeacherIDandNameLists,
  teacherTransfer,
  applyResignation,
} from "../../actions/teacherActions";
import { getOnlyDesignationNames } from "../../actions/designationActions";
import './customtabs.css'
// import { faClipboardListCheck, faCodeBranch } from "@fortawesome/pro-light-svg-icons";
// import { faMoneyCheckEditAlt } from "@fortawesome/pro-light-svg-icons";

const data = {
  labels: ["Present", "Absent", "Late"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      options: {
        responsive: true,
        cutoutPercentage: 50,
        legend: {
          display: true,
          position: "bottom",
          labels: {
            fontSize: 14,
          },
        },
      },
    },
  ],
};

const PersonalTab = ({ teacherInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isECOpen, setIsECOpen] = useState(false);
  const [isBankOpen, setBankOpen] = useState(false);
  const [isDocumentOpen, setDocumentOpen] = useState(false);
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [isSalaryOpen, setSalaryOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const togglePersonal = () => setIsOpen(!isOpen);
  const toggleEmergencyContact = () => setIsECOpen(!isECOpen);
  const toggleBankOpen = () => setBankOpen(!isBankOpen);
  const toggleDocumentOpen = () => setDocumentOpen(!isDocumentOpen);
  const toggleLocationOpen = () => setLocationOpen(!isLocationOpen);
  const toggleSalary = () => setSalaryOpen(!isSalaryOpen);

  return (
    <div>
      <ProfileInfoModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        teacherInfo={teacherInfo}
      ></ProfileInfoModal>
      <Card className="mt-2">
        <CardBody className="p-0" style={{height:'65px'}}>
          <Media style={{margin:'2%'}}>
            <Media left href="#" className="medialeft">
              <FontAwesomeIcon icon={faUser} className="font-icons" style={{ fontSize: 30 }} />
            </Media>
            <div className='profile_collapse_header_div'>
            <Media body onClick={togglePersonal} >
              <h5 className="verticaltext" style={{color: '#c3272b'}}>Personal details</h5>
            </Media>
            {/* <Media right href="#" className="mediaright"> */}
            <FontAwesomeIcon
              icon={faPencil}
              className="mr-2 font-icons"
              onClick={toggleModal}
              style={{color: '#c3272b'}}
            />
            </div>
            {/* </Media> */}
          </Media>
        </CardBody>

        <Collapse isOpen={isOpen}>
          <Row className="m-2">
            <Col>
              <Form>
                <Row style={{marginBottom:'12px'}}>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>First name:</Label></Col>
                      <Col md={6}>
                        <p>{teacherInfo.first_name ? teacherInfo.first_name : "-"}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>Last name:</Label></Col>
                      <Col md={6}>
                        <p>{teacherInfo.last_name ? teacherInfo.last_name : "-"}</p> 
                       
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row style={{marginBottom:'12px'}}>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>Mobile no.:</Label></Col>
                      <Col md={6}>
                       {teacherInfo.mobile_number
                          ? teacherInfo.mobile_number 
                          : "-"} 
                        
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}><Label style={{fontSize:'14px',fontWeight:'600'}}>Gender:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.gender ? teacherInfo.gender : "-"} 
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row style={{marginBottom:'12px'}}>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>DOB:</Label></Col>
                      <Col md={6}>
                       {teacherInfo.date_of_birth
                          ? teacherInfo.date_of_birth
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>
                        Marital status:</Label></Col>
                      <Col md={6}>
                       {teacherInfo.marital_status
                          ? teacherInfo.marital_status
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row style={{marginBottom:'12px'}}>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>
                        Major subject:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.majorSubject
                          ? teacherInfo.majorSubject
                          : "-"} 
                      </Col>
                    </Row>
                    
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>
                        Educational qualification:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.educationalQualification
                          ? teacherInfo.educationalQualification
                          : "-"} 
                      </Col>
                    </Row>
                   
                  </Col>
                </Row>
                <Row>
                      <Col sm={3}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>Email:</Label>
                       
                      </Col>
                      <Col sm={9}>
                      {teacherInfo.email ? teacherInfo.email : "-"}
                      </Col>
                    </Row>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </Card>

      <Card className="mt-2">
        <CardBody className="p-0" style={{height:'65px'}}>
          <Media  style={{margin:'2%'}}>
            <Media left href="#" className="medialeft">
              <FontAwesomeIcon icon={faMapMarkedAlt} className="font-icons" style={{ fontSize: 30 }} />
            </Media>
            <div className='profile_collapse_header_div'>
            <Media body onClick={toggleLocationOpen}>
              <h5 className="verticaltext" style={{color: '#c3272b'}}>Address</h5>
            </Media>
            {/* <Media right href="#" className="mediaright"> */}
            <FontAwesomeIcon
              icon={faPencil}
              onClick={toggleModal}
              className="mr-2 font-icons"
              style={{color: '#c3272b'}}
            />
            {/* </Media> */}
            </div>
          </Media>
        </CardBody>

        <Collapse isOpen={isLocationOpen}>
          <Row className="m-2">
            <Col>
              {/* address: {
      buildingNo: String,
      streetName: String,
      area: String,
      landmark: String,
      pincode: Number,
      state: String,
      country: String,
    }, */}
              <Form>
                <Row style={{marginBottom:'12px'}}>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>
                        Building no.:</Label></Col>
                      <Col md={6}>
                       {teacherInfo.address
                          ? teacherInfo.address.buildingNo
                            ? teacherInfo.address.buildingNo
                            : "-"
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>
                              Street name:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.address
                          ? teacherInfo.address.streetName
                            ? teacherInfo.address.streetName
                            : "-"
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row style={{marginBottom:'12px'}}>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>
                        Area:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.address
                          ? teacherInfo.address.area
                            ? teacherInfo.address.area
                            : "-"
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>
                        Landmark:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.address
                          ? teacherInfo.address.landmark
                            ? teacherInfo.address.landmark
                            : "-"
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row style={{marginBottom:'12px'}}>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>
                        Pincode:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.address
                          ? teacherInfo.address.pincode
                            ? teacherInfo.address.pincode
                            : "-"
                          : "-"}
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>
                        State:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.address
                          ? teacherInfo.address.state
                            ? teacherInfo.address.state
                            : "-"
                          : "-"}
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>Country:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.address
                          ? teacherInfo.address.country
                            ? teacherInfo.address.country
                            : "-"
                          : "-"}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </Card>

      <Card className="mt-2">
        <CardBody className="p-0" style={{height:'65px'}}
>
          <Media style={{margin:'2%'}}
>
            <Media left href="#" className="medialeft">
              <FontAwesomeIcon icon={faAddressCard} className="font-icons" style={{ fontSize: 30 }} 
/>
            </Media>
            <div className='profile_collapse_header_div'>
            <Media body onClick={toggleEmergencyContact}>
              <h5 className="verticaltext" style={{color: '#c3272b'}}>Emergency contact</h5>
            </Media>
            {/* <Media right href="#" className="mediaright"> */}
            <FontAwesomeIcon
              icon={faPencil}
              onClick={toggleModal}
              className="mr-2 font-icons"
              style={{color: '#c3272b'}}
            />
            </div>
            {/* </Media> */}
          </Media>
        </CardBody>

        <Collapse isOpen={isECOpen}>
          {/* emergencyContact: {
      name: String,
      relation: String,
      mobile: Number,
      alternateMobile: Number,
      address: String,
    }, */}
          <Row className="m-2">
            <Col>
              <Form>
                <Row style={{marginBottom:'12px'}}>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>
                        Name: </Label></Col>
                      <Col md={6}>
                        {teacherInfo.emergencyContact
                          ? teacherInfo.emergencyContact.name
                            ? teacherInfo.emergencyContact.name
                            : "-"
                          : "-"}
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>
                        Relation:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.emergencyContact
                          ? teacherInfo.emergencyContact.relation
                            ? teacherInfo.emergencyContact.relation
                            : "-"
                          : "-"}
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row style={{marginBottom:'12px'}}>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>
                        Mobile:</Label></Col>
                      <Col md={6}>
                       {teacherInfo.emergencyContact
                          ? teacherInfo.emergencyContact.mobile
                            ? teacherInfo.emergencyContact.mobile
                            : "-"
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>Alternate mobile:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.emergencyContact
                          ? teacherInfo.emergencyContact.alternateMobile
                            ? teacherInfo.emergencyContact.alternateMobile
                            : "-"
                          : "-"}
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <Row>
                      <Col md={12}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>Address:</Label>
                        {teacherInfo.emergencyContact
                          ? teacherInfo.emergencyContact.address
                            ? teacherInfo.emergencyContact.address
                            : "-"
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </Card>

      <Card className="mt-2">
        <CardBody className="p-0" style={{height:'65px'}}
>
          <Media style={{margin:'2%'}}
>
            <Media left href="#" className="medialeft">
              <FontAwesomeIcon icon={faMoneyCheckEditAlt} className="font-icons" style={{ fontSize: 30 }} 
/>
            </Media>
            <div className='profile_collapse_header_div'>

            <Media body onClick={toggleBankOpen}>
              <h5 className="verticaltext" style={{color: '#c3272b'}}>Bank details</h5>
            </Media>
            {/* <Media right href="#" className="mediaright"> */}
            <FontAwesomeIcon
              icon={faPencil}
              onClick={toggleModal}
              className="mr-2 font-icons"
              style={{color: '#c3272b'}}
            />
            </div>
            {/* </Media> */}
          </Media>
        </CardBody>

        <Collapse isOpen={isBankOpen}>
          <Row className="m-2">
            {/* bankDetails: {
      name: String,
      ifscCode: String,
      holderName: String,
      accountNo: String,
      branch: String,
    }, */}
            <Col>
              <Form>
                <Row style={{marginBottom:'12px'}}>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>Name:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.bankDetails
                          ? teacherInfo.bankDetails.name
                            ? teacherInfo.bankDetails.name
                            : "-"
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>
                        Branch:</Label></Col>
                      <Col md={6}>
                       {teacherInfo.bankDetails
                          ? teacherInfo.bankDetails.branch
                            ? teacherInfo.bankDetails.branch
                            : "-"
                          : "-"}
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row style={{marginBottom:'12px'}}>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>IFSC Code:</Label></Col>
                      <Col md={6}>
                       {teacherInfo.bankDetails
                          ? teacherInfo.bankDetails.ifscCode
                            ? teacherInfo.bankDetails.ifscCode
                            : "-"
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>Holder name:</Label></Col>
                      <Col md={6}>
                       {teacherInfo.bankDetails
                          ? teacherInfo.bankDetails.holderName
                            ? teacherInfo.bankDetails.holderName
                            : "-"
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>Account no:</Label></Col>
                      <Col md={6}>
                        {/* {" "} */}
                        {teacherInfo.bankDetails
                          ? teacherInfo.bankDetails.accountNo
                            ? teacherInfo.bankDetails.accountNo
                            : "-"
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </Card>

      <Card className="mt-2">
        <CardBody className="p-0" style={{height:'65px'}}
>
          <Media style={{margin:'2%'}}
>
            <Media left href="#" className="medialeft">
              <FontAwesomeIcon icon={faRupeeSign} className="font-icons" style={{ fontSize: 30 }} 
 />
            </Media>
            <div className='profile_collapse_header_div'>
            <Media body onClick={toggleSalary}>
              <h5 className="verticaltext" style={{color: '#c3272b'}}>Salary details</h5>
            </Media>
            {/* <Media right href="#" className="mediaright"> */}
            <FontAwesomeIcon
              icon={faPencil}
              onClick={toggleModal}
              className="mr-2 font-icons"
              style={{color: '#c3272b'}}
            />
            </div>
            {/* </Media> */}
          </Media>
        </CardBody>

        <Collapse isOpen={isSalaryOpen}>
          <Row className="m-2">
            <Col>
              <Form>
                <Row>
                  <Col md={6}>
                    <Row>
                      <Col md={6}> 
                      <Label style={{fontSize:'14px',fontWeight:'600'}}>
                      CTC:</Label></Col>
                      <Col md={6}>
                       {teacherInfo.salary
                          ? teacherInfo.salary.ctc
                            ? teacherInfo.salary.ctc
                            : "-"
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>PF number:</Label></Col>
                      <Col md={6}>
                       {teacherInfo.salary
                          ? teacherInfo.salary.pfNumber
                            ? teacherInfo.salary.pfNumber
                            : "-"
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </Card>

      <Card className="mt-2">
        <CardBody className="p-0" style={{height:'65px'}}
>
          <Media style={{margin:'2%'}}
>
            <Media left href="#" className="medialeft" >
              <FontAwesomeIcon icon={faFileAlt} className="font-icons" style={{ fontSize: 30 }} 
/>
{/* ,color:'#fe9a8b' */}
            </Media>
            <div className='profile_collapse_header_div'>
            <Media body onClick={toggleDocumentOpen}>
              <h5 className="verticaltext" style={{color: '#c3272b'}}>Documents</h5>
            </Media>
            {/* <Media right href="#" className="mediaright"> */}
            <FontAwesomeIcon
              icon={faPencil}
              onClick={toggleModal}
              className="mr-2 font-icons"
              style={{color: '#c3272b'}}
            />
            </div>
            {/* </Media> */}
          </Media>
        </CardBody>

        <Collapse isOpen={isDocumentOpen}>
          <div className="table-responsive">
            <Table className="table lhead table-borderless custom_table ">
              <thead>
                <tr align='center'>
                  <th >S.No</th>
                  <th>Documents</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody align='center'>
                <tr>
                  <td>1</td>
                  <td>12thCertificate.pdf</td>
                  <td>
                    <div className="table-icons">
                      {/* <a> */}
                        <FontAwesomeIcon
                          icon={faArrowDown}
                          className="mr-2 font-icons"
                          style={{color:'dodgerblue'}}
                        />
                      {/* </a>
                      <a> */}
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="mr-2 font-icons"
                          style={{color:'red'}}
                        />
                      {/* </a> */}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>10thCertificate.pdf</td>
                  <td>
                    <div className="table-icons">
                      {/* <a> */}
                        <FontAwesomeIcon
                          icon={faArrowDown}
                          className="mr-2 font-icons"
                          style={{color:'dodgerblue'}}
                        />
                      {/* </a>
                      <a> */}
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="mr-2 font-icons"
                          style={{color:'red'}}
                        />
                      {/* </a> */}
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Collapse>
      </Card>
    </div>
  );
};

const BranchTransferModal = ({
  isBTModalOpen,
  toggleBTModal,
  profileId,
  instituteId,
}) => {
  const [insSelect, setInsSelect] = useState("--SELECT--");
  const [institutesName, setInstituteNames] = useState([]);

  useEffect(() => {
    getOnlyInstituteNames(setInstituteNames);
    return () => {
      // Clean up code
    };
  }, []);

  const saveChangesHandler = () => {
    if (insSelect !== "--SELECT--") {
      teacherTransfer(profileId, insSelect);
      toggleBTModal();
    } else {
      alert("Please select transfer institute id");
    }
  };

  return (
    <div>
      <Modal isOpen={isBTModalOpen} toggle={toggleBTModal} size="lg">
        <ModalHeader toggle={toggleBTModal}>Branch transfer</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Current Institute Id</Label>
              <Input type="text" value={instituteId} disabled />
              <Label>Select transfer institute Id</Label>
              <Select
                value={{ value: insSelect, label: insSelect }}
                options={institutesName.map((ins, index) => {
                  return { value: ins.instituteId, label: ins.instituteId };
                })}
                onChange={(select) => setInsSelect(select.value)}
              ></Select>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={saveChangesHandler}>
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const ResignModal = ({
  isResignOpen,
  toggleResignOpen,
  profileId,
  organizationId,
}) => {
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    // console.log(reason, profileId, organizationId);
    if (reason === "") {
      alert("Please enter a valid reason");
    } else {
      applyResignation(profileId, organizationId, reason);
      resetResignation();
    }
  };

  const resetResignation = () => {
    setReason("");
    toggleResignOpen();
  };

  return (
    <div>
      <Modal isOpen={isResignOpen} toggle={toggleResignOpen} size="lg">
        <ModalHeader toggle={toggleResignOpen}>Resignation</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Reason for resignation</Label>
              <Input
                type="textarea"
                value={reason}
                onChange={(e) => {
                  setReason(e.target.value);
                }}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleSubmit}>
            Apply Resignation
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const DeptAndDesChange = ({
  isDeptAndDesOpen,
  toggleDeptAndDes,
  designationId,
  profileId,
}) => {
  // console.log({ designationId });
  const [designationNames, setDesignNames] = useState([]);
  const [designSelect, setDesignSelect] = useState("--SELECT--");

  useEffect(() => {
    getOnlyDesignationNames(setDesignNames);
    return () => {};
  }, []);

  const saveChanges = () => {
    if (designSelect !== "--SELECT--") {
      // console.log(designSelect, profileId);
      designationChange(profileId, designSelect);
      toggleDeptAndDes();
    } else {
      alert("Please select valid designation Id");
    }
  };

  return (
    <div>
      <Modal isOpen={isDeptAndDesOpen} toggle={toggleDeptAndDes} size="lg">
        <ModalHeader toggle={toggleDeptAndDes}>Designation change</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Current Designation</Label>
              {designationId === "" ? (
                <p style={{ color: "red" }}>
                  ***Designation not assigned yet!***
                </p>
              ) : (
                <Input type="text" value={designationId} disabled />
              )}
              <Label>Designation</Label>
              <Select
                value={{ value: designSelect, label: designSelect }}
                onChange={(select) => setDesignSelect(select.value)}
                options={designationNames.map((des, index) => {
                  return { value: des.designationId, label: des.designationId };
                })}
              ></Select>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={saveChanges}>
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const ReportingAuthChange = ({
  isReportOpen,
  toggleReportOpen,
  organizationId,
  reportingAuthority,
  profileId,
}) => {
  const [teachersList, setTeachersList] = useState([]);
  const [authoritySelect, setAuthSelect] = useState({
    id: "",
    concatString: "--SELECT--",
  });

  useEffect(() => {
    getOnlyTeacherIDandNameLists(organizationId, setTeachersList, profileId);
    return () => {
      // Clear code
    };
  }, []);

  const saveChanges = () => {
    if (authoritySelect.id !== "") {
      // console.log({ authoritySelect, profileId });
      assignAuthority(profileId, authoritySelect);
      toggleReportOpen();
    } else {
      alert("Please select a reporty authority from the list");
    }
  };

  return (
    <div>
      <Modal isOpen={isReportOpen} toggle={toggleReportOpen} size="lg">
        <ModalHeader toggle={toggleReportOpen}>
          Reporting Authority change
        </ModalHeader>
        <ModalBody>
          <Label>Current reporting authority</Label>
          {!reportingAuthority ? (
            <p style={{ color: "red" }}>
              ***Reporting authority not assigned yet!***
            </p>
          ) : (
            <Input type="text" value={reportingAuthority} disabled />
          )}
          <Label>Select reporting authority</Label>
          <Select
            value={{
              value: authoritySelect.id,
              label: authoritySelect.concatString,
            }}
            onChange={(select) =>
              setAuthSelect({ id: select.value, concatString: select.label })
            }
            options={teachersList.map((teacher, index) => {
              return { value: teacher.id, label: teacher.concatString };
            })}
          ></Select>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={saveChanges}>
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const ActionsTab = ({ profileId, teacherInfo }) => {
  const [isBTModalOpen, setIsBTModal] = useState(false);
  const [isDeptAndDesOpen, setIsDeptAndDesOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isResignOpen, setIsResignOpen] = useState(false);

  const toggleBTModal = () => setIsBTModal(!isBTModalOpen);
  const toggleDeptAndDes = () => setIsDeptAndDesOpen(!isDeptAndDesOpen);
  const toggleReportOpen = () => setIsReportOpen(!isReportOpen);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isECOpen, setIsECOpen] = useState(false);
  const [isBankOpen, setBankOpen] = useState(false);
  const [isDocumentOpen, setDocumentOpen] = useState(false);
  const [isLocationOpen, setLocationOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const togglePersonal = () => setIsOpen(!isOpen);
  const toggleEmergencyContact = () => setIsECOpen(!isECOpen);
  const toggleBankOpen = () => setBankOpen(!isBankOpen);
  const toggleDocumentOpen = () => setDocumentOpen(!isDocumentOpen);
  const toggleLocationOpen = () => setLocationOpen(!isLocationOpen);
  const toggleResignOpen = () => setIsResignOpen(!isResignOpen);

  return (
    <div>
      <BranchTransferModal
        isBTModalOpen={isBTModalOpen}
        toggleBTModal={toggleBTModal}
        profileId={profileId}
        instituteId={teacherInfo.instituteId}
      ></BranchTransferModal>

      <DeptAndDesChange
        isDeptAndDesOpen={isDeptAndDesOpen}
        toggleDeptAndDes={toggleDeptAndDes}
        designationId={
          teacherInfo.designation_id ? teacherInfo.designation_id : ""
        }
        profileId={profileId}
      ></DeptAndDesChange>

      <ReportingAuthChange
        isReportOpen={isReportOpen}
        toggleReportOpen={toggleReportOpen}
        organizationId={teacherInfo.organization_id}
        reportingAuthority={
          teacherInfo.reportingAuthority
            ? teacherInfo.reportingAuthority.concatString
              ? teacherInfo.reportingAuthority.concatString
              : null
            : null
        }
        profileId={profileId}
      ></ReportingAuthChange>

      <ResignModal
        isResignOpen={isResignOpen}
        toggleResignOpen={toggleResignOpen}
        profileId={profileId}
        organizationId={teacherInfo.organization_id}
      ></ResignModal>

      <Card className="mt-2">
        <CardBody className="p-0" style={{height:'65px'}}
>
          <Media style={{margin:'2%'}}
>
            <Media left href="#" className="medialeft">
              <FontAwesomeIcon icon={faCodeBranch} className="font-icons" style={{ fontSize: 30 }} 
 />
            </Media>
            <div className='profile_collapse_header_div'>

            <Media body onClick={togglePersonal}>
              <h5 className="verticaltext" style={{color: '#c3272b'}}
>Branch transfer</h5>
            </Media>
            {/* <Media right href="#" className="mediaright"> */}
            <Button color="success" onClick={toggleBTModal}>
              Transfer
            </Button>
            </div>
            {/* </Media> */}
          </Media>
        </CardBody>

        <Collapse isOpen={isOpen}>
          <Row className="m-2">
            <Col>
              <Form>
                <Row style={{marginBottom:'12px'}}>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>
                        Current Institute:</Label></Col>
                      <Col md={6}>
                        <p>{teacherInfo.instituteId}</p> </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </Card>

      <Card className="mt-2">
        <CardBody className="p-0" style={{height:'65px'}}
>
          <Media style={{margin:'2%'}}
>
            <Media left href="#" className="medialeft">
              <FontAwesomeIcon icon={faMapMarkedAlt} className="font-icons" style={{ fontSize: 30 }} 
/>
            </Media>
            <div className='profile_collapse_header_div'>
            <Media body onClick={toggleLocationOpen}>
              <h5 className="verticaltext" style={{color: '#c3272b'}}
>Designation change</h5>
            </Media>
            {/* <Media right href="#" className="mediaright"> */}
            <Button color="success" onClick={toggleDeptAndDes}>
              Change
            </Button>
            </div>
            {/* </Media> */}
          </Media>
        </CardBody>

        <Collapse isOpen={isLocationOpen}>
          <Row className="m-2">
            <Col>
              <Form>
                <Row style={{marginBottom:'12px'}}>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}} >
                        Department:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.department} </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}} >
                        Designation:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.designation_id} </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </Card>

      <Card className="mt-2">
        <CardBody className="p-0" style={{height:'65px'}}
>
          <Media style={{margin:'2%'}}
>
            <Media left href="#" className="medialeft">
              <FontAwesomeIcon icon={faClipboardListCheck} className="font-icons" style={{ fontSize: 30 }} 
/>
            </Media>
            <div className='profile_collapse_header_div'>
            <Media body onClick={toggleEmergencyContact}>
              <h5 className="verticaltext" style={{color: '#c3272b'}}
>Reporting authority</h5>
            </Media>
            {/* <Media right href="#" className="mediaright"> */}
            <Button color="success" onClick={toggleReportOpen}>
              Change
            </Button>
            </div>
            {/* </Media> */}
          </Media>
        </CardBody>

        <Collapse isOpen={isECOpen}>
          <Row className="m-2">
            <Col>
              <Form>
                <Row style={{marginBottom:'12px'}}>
                  <Col md={6}>
                    <Row style={{marginBottom:'12px'}}>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}} >
                        Employee Id:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.reportingAuthority
                          ? teacherInfo.reportingAuthority.concatString
                            ? teacherInfo.reportingAuthority.concatString.split(
                                " - "
                              )[0]
                            : "-"
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}} >
                        Employee name:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.reportingAuthority
                          ? teacherInfo.reportingAuthority.concatString
                            ? teacherInfo.reportingAuthority.concatString.split(
                                " - "
                              )[1]
                            : "-"
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row style={{marginBottom:'12px'}}>
                      <Col md={6}>
                        <Label style={{fontSize:'14px',fontWeight:'600'}}>Employee designation:</Label></Col>
                      <Col md={6}>
                        {teacherInfo.reportingAuthority
                          ? teacherInfo.reportingAuthority.concatString
                            ? teacherInfo.reportingAuthority.concatString.split(
                                " - "
                              )[2]
                            : "-"
                          : "-"} 
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </Card>

      <Card className="mt-2">
        <CardBody className="p-0" style={{height:'65px'}}
>
          <Media style={{margin:'2%'}}
>
            <Media left href="#" className="medialeft">
              <FontAwesomeIcon icon={faCrosshairs} className="font-icons" style={{ fontSize: 30 }} 
/>
            </Media>
            <div className='profile_collapse_header_div'>
            <Media body>
              <h5 className="verticaltext" style={{color: '#c3272b'}}
>Resignation</h5>
            </Media>
            <Button color="danger" onClick={toggleResignOpen}>
              Resign
            </Button>
            </div>
          </Media>
        </CardBody>
      </Card>
    </div>
  );
};

const CustomTabs = ({ teacherInfo, id }) => {
  const [activeTab, setActiveTab] = useState("1");
  console.log("Teacher info from custom tabs", teacherInfo);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="container-fluid" style={{ marginTop: 10 }}>
      <Nav tabs className="nav nav-tabs">
        

          
        <NavItem className="nav-item ">
          <NavLink
            className="nav-link active"
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2 font-icons" />
            Profile
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink
            className="nav-link"
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            <FontAwesomeIcon icon={faUsersClass} className="mr-2 font-icons" />
            Class Room
          </NavLink>
        </NavItem>

        <NavItem className="nav-item">
          <NavLink
            className="nav-link"
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            <FontAwesomeIcon icon={faShieldCheck} className="mr-2 font-icons" />
            Attendance
          </NavLink>
        </NavItem>

        <NavItem className="nav-item">
          <NavLink
            className="nav-link"
            className={classnames({ active: activeTab === "5" })}
            onClick={() => {
              toggle("5");
            }}
          >
            <FontAwesomeIcon icon={faRupeeSign} className="mr-2 font-icons" />
            Payslip
          </NavLink>
        </NavItem>

        <NavItem className="nav-item">
          <NavLink
            className="nav-link"
            className={classnames({ active: activeTab === "6" })}
            onClick={() => {
              toggle("6");
            }}
          >
            <FontAwesomeIcon icon={faPencil} className="mr-2 font-icons" />
            Actions
          </NavLink>
        </NavItem>

        <NavItem className="nav-item">
        <NavLink
          className="nav-link"
          className={classnames({ active: activeTab === "7" })}
          onClick={() => {
            toggle("7");
          }}
        >
          <FontAwesomeIcon icon={faRupeeSign} className="mr-2 font-icons" />
          Loan
        </NavLink>
      </NavItem>
        
      </Nav>

     

      <TabContent activeTab={activeTab} className="mt-1">
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <PersonalTab teacherInfo={teacherInfo}></PersonalTab>
            </Col>
          </Row>
        </TabPane>

        {/* Class room component */}
        <TabPane tabId="2">
          <ClassroomTable
            profileId={id}
            organizationId={teacherInfo.organization_id}
          />
        </TabPane>

        <TabPane tabId="3">
          <AttendanceTable empNumber={teacherInfo.employee_number} />
        </TabPane>

        <TabPane tabId="4">
          <Row className="card-box m-1 mt-2">
            <Col sm="7" xs="12">
              <Card className="mt-2">
                <Row>
                  <Col sm="6">
                    <h5 className="verticaltext">ENPS</h5>
                  </Col>
                  <Col sm="6">
                    <div className="media-right">
                      <StarRatings
                        rating={2.403}
                        starRatedColor="#F7CA18"
                        numberOfStars={5}
                        starDimension="25px"
                        starSpacing="10px"
                      />
                    </div>
                  </Col>
                </Row>
              </Card>

              <Card className="mt-2">
                <Row>
                  <Col sm="6">
                    <h5 className="verticaltext">Teacher / Parent Feedback</h5>
                  </Col>
                  <Col sm="6">
                    <div className="media-right">
                      <StarRatings
                        rating={2.403}
                        starRatedColor="#F7CA18"
                        numberOfStars={5}
                        starDimension="25px"
                        starSpacing="10px"
                      />
                    </div>
                  </Col>
                </Row>
              </Card>

              <Card className="mt-2">
                <Row>
                  <Col sm="6">
                    <h5 className="verticaltext">Rewards</h5>
                  </Col>
                  <Col sm="6">
                    <div className="media-right">
                      <StarRatings
                        rating={2.403}
                        starRatedColor="#F7CA18"
                        numberOfStars={5}
                        starDimension="25px"
                        starSpacing="10px"
                      />
                    </div>
                  </Col>
                </Row>
              </Card>

              <Card className="mt-2">
                <Row>
                  <Col sm="6">
                    <h5 className="verticaltext">Reward</h5>
                  </Col>
                  <Col sm="6">
                    <div className="media-right">
                      <StarRatings
                        rating={2.403}
                        starRatedColor="#F7CA18"
                        numberOfStars={5}
                        starDimension="25px"
                        starSpacing="10px"
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col sm="5" xs="12">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  marginTop: 40,
                  margin: "auto",
                }}
              >
                <Doughnut
                  data={data}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    cutoutPercentage: 50,
                  }}
                  legend={{
                    position: "top",
                  }}
                />
              </div>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="5">
          <Row className="card-box m-1 mt-2">
            {/* <Col sm="8" xs="12"> */}
            <Col sm="12" xs="12">
              <PayslipTable
                {...{
                  organization_id: teacherInfo.organization_id,
                  employee_number: teacherInfo.employee_number,
                }}
              />
            </Col>

            {/* <Col sm="4" xs="12" className="text-center">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  marginTop: 40,
                  margin: "auto",
                }}
              >
                <Doughnut
                  data={data}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    cutoutPercentage: 50,
                  }}
                  legend={{
                    position: "top",
                  }}
                />
              </div>
            </Col> */}
          </Row>
        </TabPane>

        <TabPane tabId="6">
          <Row className="card-box m-1 mt-2">
            <Col sm="12">
              <ActionsTab profileId={id} teacherInfo={teacherInfo}></ActionsTab>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="7">
          <LoanTable profileId={id} teacherInfo={teacherInfo} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default CustomTabs;
