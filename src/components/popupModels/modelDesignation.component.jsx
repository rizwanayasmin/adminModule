import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   Row,
//   Col,
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   CardTitle,
//   Modal,
//   ModalHeader,
//   ModalBody,
// } from "reactstrap";
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
  FormGroup,
  Label,
  Input,
  CardTitle,
  Modal,
  Form,
  ModalHeader,
  ModalBody,
} from "reactstrap";

import Select from "react-select";

import { Plus, User } from "react-feather";
import { getDepartmentNames } from "../../actions/departmentActions";
import { getOnlyLeavePolicyNames } from "../../actions/leavePolicyActions";
import { roleListsNames } from "../../actions/roleActions";
import { getOnlyPayrollNames } from "../../actions/payrollActions";
import './designationModal.css'

const Model = ({
  modal,
  setModal,
  toggle,
  editId,
  designation,
  setDesignation,
  CreateDesign,
  handleCancel,
}) => {
  // const [selectRole, setSelectRole] = useState(null);
  // const [selectDept, setSelectDept] = useState(null);
  // const [selectLeavePolicy, setSelectLeavePolicy] = useState(null);
  // const [selectPayroll, setSelectPayroll] = useState(null);
  const [departmentOptions, setDepartmentOptions] = useState([
    { value: "MATHEMATICS", label: "MATHEMATICS" },
    { value: "SOCIAL SCIENCE", label: "SOCIAL SCIENCE" },
    { value: "ENGLISH", label: "ENGLISH" },
  ]);
  const [roleLists, setRoleLists] = useState([]);
  const [payrollNames, setPayrollNames] = useState([
    { value: "MATH_EXP_1_to_3_YRS", label: "MATH_EXP_1_to_3_YRS" },
    { value: "SOCIAL_EXP_1_to_3_YRS", label: "SOCIAL_EXP_1_to_3_YRS" },
    { value: "PHYSICS_EXP_1_to_3_YRS", label: "PHYSICS_EXP_1_to_3_YRS" },
  ]);

  const [leavePolicyOptions, setLeavePolicy] = useState([
    { value: "JNR_GRD_I", label: "JNR_GRD_I" },
    { value: "JNR_GRD_II", label: "JNR_GRD_II" },
    { value: "SNR_GRD_I", label: "SNR_GRD_I" },
  ]);

  useEffect(() => {
    getDepartmentNames(setDepartmentOptions);
    getOnlyLeavePolicyNames(setLeavePolicy);
    getOnlyPayrollNames(setPayrollNames);
    roleListsNames(setRoleLists);
    if (editId === "") {
    } else {
      alert(`Edit Id ${editId}`);
    }
    return () => {};
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      designation.designationRole &&
      designation.departmentId &&
      designation.leavePolicyId
      // designation.payrollId
    ) {
      CreateDesign();
      // restSelectors();
    } else {
      alert("Some important fields are not filled");
    }
  };

  // Event handlers
  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      // console.log(e.target);
      if (e.target.name === "experienced") {
        designation.experienceCatagory.isExperienced = true;
        setDesignation({
          ...designation,
          experienceCatagory: designation.experienceCatagory,
        });
      } else if (e.target.name === "isCTCPercentage") {
        designation.loanEligibility.isCTCPercentage = true;
        setDesignation({
          ...designation,
          loanEligibility: designation.loanEligibility,
        });
      } else if (e.target.name === "isNotCTCPercentage") {
        designation.loanEligibility.isCTCPercentage = false;
        setDesignation({
          ...designation,
          loanEligibility: designation.loanEligibility,
        });
      } else if (e.target.name === "isYearly") {
        designation.loanEligibility.isYearly = !designation.loanEligibility
          .isYearly;
        setDesignation({
          ...designation,
          loanEligibility: designation.loanEligibility,
        });
      } else {
        designation.experienceCatagory.isExperienced = false;
        setDesignation({
          ...designation,
          experienceCatagory: designation.experienceCatagory,
        });
      }
    } else {
      const { value, name } = e.target;
      switch (e.target.name) {
        case "minYear":
          designation.experienceCatagory.minYear = value;
          setDesignation({
            ...designation,
            experienceCatagory: designation.experienceCatagory,
          });
          break;
        case "maxYear":
          designation.experienceCatagory.maxYear = value;
          setDesignation({
            ...designation,
            experienceCatagory: designation.experienceCatagory,
          });
          break;
        case "percentage":
          designation.loanEligibility.percentage = value;
          setDesignation({
            ...designation,
            loanEligibility: designation.loanEligibility,
          });
          break;
        case "amount":
          designation.loanEligibility.amount = value;
          setDesignation({
            ...designation,
            loanEligibility: designation.loanEligibility,
          });
          break;

        case "maxNPTime":
          designation.loanEligibility.maxNPTime = value;
          setDesignation({
            ...designation,
            loanEligibility: designation.loanEligibility,
          });
          break;

        case "totalPeriod":
          designation.loanEligibility.period = value;
          setDesignation({
            ...designation,
            loanEligibility: designation.loanEligibility,
          });
          break;

        default:
          setDesignation({ ...designation, [name]: value });
      }
    }
  };

  const handleRoleSelect = (selectedOption) => {
    setDesignation({ ...designation, designationRole: selectedOption.value });
    // setSelectRole(selectedOption);
  };

  const handleDepartmentSelect = (selectedOption) => {
    setDesignation({ ...designation, departmentId: selectedOption.value });
    // setSelectDept(selectedOption);
  };

  const handleLeavePolicySelect = (selectedOption) => {
    setDesignation({ ...designation, leavePolicyId: selectedOption.value });
    // setSelectLeavePolicy(selectedOption);
  };

  const handlePayrollPolicySelect = (selectedOption) => {
    setDesignation({ ...designation, payrollId: selectedOption.value });
    // setSelectPayroll(selectedOption);
  };

  const handleCreate = () => {
    setModal(true);
    setDesignation({
      id: "",
      designationRole: null,
      designationName: "",
      departmentId: null,
      experienceCatagory: {
        isExperienced: true,
        minYear: "",
        maxYear: "",
      },
      leavePolicyId: null,
      payrollId: null,
      loanEligibility: {
        isCTCPercentage: true,
        percentage: "",
        isYearly: true,
        amount: "",
        maxNPTime: "",
        period: "",
      },
    });
  };

  return (
    <div>
        <div className="create_employee_btn_div">
      <Button className="mr-1" color="primary" outline onClick={handleCreate}>
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
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Create Designation</ModalHeader>
        <ModalBody>
          <div>
            <Form onSubmit={handleFormSubmit}>
              <Row style={{marginLeft:'0px'}}>
              <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                General Details
              </CardTitle>
                <Col sm="12">
                  <Label for="designationId">Designation Id</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      type="text"
                      name="id"
                      id="designationId"
                      placeholder="Designation Id"
                      value={designation.id}
                      onChange={handleChange}
                      required
                    />
                    <div className="form-control-position">
                      <User size={15} />
                    </div>
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="designationName">Designation Name</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Input
                      type="text"
                      name="designationName"
                      id="designationName"
                      placeholder="Designation Name"
                      value={designation.designationName}
                      onChange={handleChange}
                      required
                    />
                    <div className="form-control-position">
                      <User size={15} />
                    </div>
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="departmentId">Department</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Select
                      name="departmentId"
                      id="departmentId"
                      value={
                        designation.departmentId
                          ? {
                              value: `${designation.departmentId}`,
                              label: `${designation.departmentId}`,
                            }
                          : null
                      }
                      options={departmentOptions}
                      onChange={handleDepartmentSelect}
                      required
                      // placeholder={insAllDetails.instituteType}
                    />
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="designationRole">Designation Role</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Select
                      name="designationRole"
                      id="designationRole"
                      value={
                        designation.designationRole
                          ? {
                              value: `${designation.designationRole}`,
                              label: `${designation.designationRole}`,
                            }
                          : null
                      }
                      // value={designation.designationRole ? selectRole: {label: `${designation.designationRole}`, value=`${designation.designationRole}`}}
                      options={roleLists}
                      onChange={handleRoleSelect}
                      required
                    />
                  </FormGroup>
                </Col>

               
                <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                Experience
              </CardTitle>
                {/* <Col sm="12">
                  <Label for="nameVerticalIcons">
                    <h1>Experience</h1>
                  </Label>
                </Col> */}
                <Col sm="12">
                  <FormGroup>
                  
                   
                      <Label htmlFor="fresher">Fresher</Label>
                      <Input
                          name="fresher"
                          type="checkbox"
                          id="fresher"
                          checked={!designation.experienceCatagory.isExperienced}
                          onChange={handleChange}
                          style={{marginLeft:'12px'}}
                        />
                  
                    <Label htmlFor="experienced"
                     style={{marginLeft:'30px'}}
                    >Experienced</Label>
                    <Input
                      id="experienced"
                      type="checkbox"
                      name="experienced"
                      checked={designation.experienceCatagory.isExperienced}
                      onChange={handleChange}
                      style={{marginLeft:'12px'}}
                    />
                 
                    
                    {designation.experienceCatagory.isExperienced && (
                      <div>
                        <Label htmlFor="minYear">Min Year</Label>
                        <Input
                          type="number"
                          id="minYear"
                          name="minYear"
                          placeholder="Min Year"
                          value={designation.experienceCatagory.minYear}
                          onChange={handleChange}
                          required
                        ></Input>

                        <Label htmlFor="maxYear">Max Year</Label>
                        <Input
                          type="number"
                          name="maxYear"
                          id="maxYear"
                          placeholder="Max Year"
                          value={designation.experienceCatagory.maxYear}
                          onChange={handleChange}
                          required
                        ></Input>
                      </div>
                    )}
                  </FormGroup>
                </Col>

                <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                Loan Eligibility
              </CardTitle>
                <Col sm="12">
                  {/* <Label htmlFor="loanEligibility">
                    <h1>Loan Eligibility</h1>{" "}
                  </Label> */}
                  
                  <FormGroup id="loanEligibility">
                    <Label htmlFor="isCTCPercentage">From CTC</Label>
                    <Input
                      name="isCTCPercentage"
                      type="checkbox"
                      id="isCTCPercentage"
                      checked={designation.loanEligibility.isCTCPercentage}
                      onChange={handleChange}
                      style={{marginLeft:'12px'}}
                    ></Input>
                    <Label htmlFor="isNotCTCPercentage"
                     style={{marginLeft:'30px'}}
                    >From Amount</Label>
                    <Input
                      name="isNotCTCPercentage"
                      type="checkbox"
                      id="isNotCTCPercentage"
                      checked={!designation.loanEligibility.isCTCPercentage}
                      onChange={handleChange}
                      style={{marginLeft:'12px'}}
                    ></Input>

                    {/* <Input
                      id="isCtcPercentage"
                      name="isCTCPercentage"
                      type="radio"
                      value="true"
                      // checked={!designation.loanEligibility.isCTCPercentage}
                      onChange={handleChange}
                    ></Input>
                    <Label id="isCtcPercentage">CTC percentage</Label>
                    <br></br>
                    <Input
                      id="lumpSum"
                      name="isCTCPercentage"
                      type="radio"
                      value="false"
                      // checked={designation.loanEligibility.isCTCPercentage}
                      onChange={handleChange}
                      // onChange={handleChange}
                    ></Input> */}
                    {/* <Label id="lumpSum">Lumpsum amount</Label> */}
                    {designation.loanEligibility.isCTCPercentage ? (
                      <div>
                        <Label id="percentage">Percentage</Label>
                        <Input
                          id="percentage"
                          name="percentage"
                          type="number"
                          value={designation.loanEligibility.percentage}
                          placeholder="Percentage"
                          onChange={handleChange}
                          required
                        ></Input>
                        <Label htmlFor="isYearly">is Yearly</Label>
                        <Input
                          name="isYearly"
                          type="checkbox"
                          id="isYearly"
                          checked={!designation.loanEligibility.isYearly}
                          onChange={handleChange}
                          style={{marginLeft:'12px'}}
                        ></Input>
                      </div>
                    ) : (
                      <div>
                        <Label id="amount">Amount</Label>
                        <Input
                          id="amount"
                          name="amount"
                          type="number"
                          value={designation.loanEligibility.amount}
                          placeholder="Amount"
                          onChange={handleChange}
                          required
                        ></Input>
                      </div>
                    )}
                    <Label htmlFor="maxNPTime">Max non-payable period</Label>
                    <Input
                      id="maxNPTime"
                      name="maxNPTime"
                      type="number"
                      placeholder="Max non-payable Period"
                      value={designation.loanEligibility.maxNPTime}
                      onChange={handleChange}
                      required
                    ></Input>
                    <Label htmlFor="totalPeriod">
                      Total period <span>(in months)</span>
                    </Label>
                    <Input
                      id="totalPeriod"
                      name="totalPeriod"
                      type="number"
                      placeholder="Total period"
                      value={designation.loanEligibility.period}
                      onChange={handleChange}
                      required
                    ></Input>
                  </FormGroup>
                </Col>


                <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
               Policies
              </CardTitle>
                {/* <Col sm="12">
                  <h1>Policies</h1>
                </Col> */}
                <Col sm="12">
                  <Label for="leavePolicy">Leave policy</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Select
                      name="leavePolicy"
                      id="leavePolicy"
                      value={
                        designation.leavePolicyId
                          ? {
                              value: `${designation.leavePolicyId}`,
                              label: `${designation.leavePolicyId}`,
                            }
                          : null
                      }
                      options={leavePolicyOptions}
                      onChange={handleLeavePolicySelect}
                      required
                      // placeholder={insAllDetails.instituteType}
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Label for="payrollPolicy">Payroll policy</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Select
                      name="payrollPolicy"
                      id="payrollPolicy"
                      value={
                        designation.payrollId
                          ? {
                              value: `${designation.payrollId}`,
                              label: `${designation.payrollId}`,
                            }
                          : null
                      }
                      options={payrollNames}
                      onChange={handlePayrollPolicySelect}
                      required
                      // placeholder={insAllDetails.instituteType}
                    />
                  </FormGroup>
                </Col>
              
               
               
              </Row>
              <div className='designation_btn_div'>
                  <div className='designation_btn_div_cancel'>
                  <Button type="button" onClick={handleCancel} style={{height:'45px'}}>
                  Cancel
                </Button>
                  </div>

                  <div>
                  {designation._id ? (
                  <Button type="submit" color="success">
                    Update designation
                    <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 20, color: "white ", position:'relative',left:'12px',top:'3px' }}
                />
                  </Button>
                ) : (
                  <Button type="submit" color="success">
                    Create 
                    <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 20, color: "white ", position:'relative',left:'12px',top:'3px' }}
                />
                  </Button>
                )}
                  </div>

                </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Model;
