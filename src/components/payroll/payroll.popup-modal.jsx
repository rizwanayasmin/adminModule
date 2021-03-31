import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  CardTitle,
  Table,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { faTrash, faPencil, faUniversity, faPlus ,faLocationArrow} from "@fortawesome/pro-duotone-svg-icons";
import { Plus } from "react-feather";
import Select from "react-select";
import './payroll.css'
import { MenuItem } from "@material-ui/core";

const PayrollPolicyModal = ({
  modal,
  toggle,
  payrollPolicy,
  setPayrollPolicy,
  createPayrollPolicy,
}) => {
  const [earningsPosition, setEarningsPosition] = useState(0);
  const [deductionsPosition, setDeductionsPosition] = useState(0);
  const [earningsCreateOpen, setEarningsCreateOpen] = useState(false);
  const [deductionsCreateOpen, setDeductionsCreateOpen] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const [isLateNew, setLateIsNew] = useState(true);

  const [configEarnings, setConfigEarnings] = useState({
    name: "",
    refFrom: "Fixed Gross",
    percentage: "",
  });

  const [configDeductions, setConfigDeductions] = useState({
    name: "",
    refFrom: [],
    isContribution: false,
    maxAmount: "",
    percentage: "",
  });

  //   Event handlers
  const handleChange = (e) => {
    const { value, name } = e.target;
    setPayrollPolicy({ ...payrollPolicy, [name]: value });
  };

  const handleEarningsSubmit = (e) => {
    e.preventDefault();
    const newPayrollEarning = payrollPolicy.earnings;
    newPayrollEarning.push(configEarnings);

    setPayrollPolicy({
      ...payrollPolicy,
      earnings: newPayrollEarning,
    });

    console.log(payrollPolicy);
    resetConfigEarnings();
  };

  const handleDeductionsSubmit = (e) => {
    e.preventDefault();

    const newDeductions = payrollPolicy.deductions;
    newDeductions.push(configDeductions);

    setPayrollPolicy({ ...payrollPolicy, lateFines: newDeductions });
    console.log(payrollPolicy);

    resetConfigDeductions();
  };

  const handleDeductionsChange = (e) => {
    const { value, name } = e.target;
    setConfigDeductions({ ...configDeductions, [name]: value });
  };

  const handleEarningsConfig = (e) => {
    const { value, name } = e.target;
    setConfigEarnings({ ...configEarnings, [name]: value });
  };

  const resetConfigEarnings = () => {
    setConfigEarnings({
      name: "",
      refFrom: "Fixed Gross",
      percentage: "",
    });
    setEarningsCreateOpen(false);
  };

  const resetConfigDeductions = () => {
    setConfigDeductions({
      name: "",
      refFrom: [],
      maxAmount: "",
      percentage: "",
      isContribution: false,
    });
    setDeductionsCreateOpen(false);
  };

  const handleEdit = (index, type) => {
    if (type === "EARNINGS") {
      resetConfigEarnings();
      setIsNew(false);
      setEarningsPosition(index);
      const earnings = payrollPolicy.earnings.find((le, idx) => idx === index);
      setConfigEarnings({ ...earnings });
      setEarningsCreateOpen(true);
    } else {
      resetConfigDeductions();
      setLateIsNew(false);
      setDeductionsPosition(index);
      const deductions = payrollPolicy.deductions.find(
        (la, idx) => idx === index
      );
      setConfigDeductions({ ...deductions });
      setDeductionsCreateOpen(true);
    }
  };

  const handleDelete = (index, type) => {
    if (type === "EARNINGS") {
      const isTrue = window.confirm("Are you sure you want to delete?");
      if (isTrue) {
        payrollPolicy.earnings.splice(index, 1);
        setPayrollPolicy({
          ...payrollPolicy,
          earnings: payrollPolicy.earnings,
        });
        resetConfigEarnings();
        setIsNew(true);
      }
    } else {
      const isTrue = window.confirm("Are you sure you want to delete?");
      if (isTrue) {
        payrollPolicy.deductions.splice(index, 1);
        setPayrollPolicy({
          ...payrollPolicy,
          deductions: payrollPolicy.deductions,
        });
        resetConfigDeductions();
        setLateIsNew(true);
      }
    }
  };

  const handleUpdate = (type) => {
    if (type === "EARNINGS") {
      if (configEarnings.name === "" || configEarnings.percentage === "") {
        alert("Can not perform update, because mandatory fields are missing");
      } else {
        payrollPolicy.earnings[earningsPosition] = configEarnings;
        setPayrollPolicy({ ...payrollPolicy });
        resetConfigEarnings();
        setIsNew(true);
      }
    } else {
      if (
        configDeductions.name === "" ||
        configDeductions.refFrom.length === 0 ||
        configDeductions.maxAmount === "" ||
        configDeductions.percentage === ""
      ) {
        alert("Can not perform update, because mandatory fields are missing");
      } else {
        payrollPolicy.deductions[deductionsPosition] = configDeductions;
        setPayrollPolicy({ ...payrollPolicy });
        resetConfigDeductions();
        setLateIsNew(true);
      }
    }
  };

  const handleCreate = () => {
    if (
      payrollPolicy.id === "" ||
      payrollPolicy.name === "" ||
      payrollPolicy.fixedGross === ""
    ) {
      alert("Some important fields are missing");
    } else {
      // console.log(payrollPolicy);
      createPayrollPolicy();
      // toggle();
    }
  };

  const handleRefFrom = (selectedOption) => {
    const arrayValue = selectedOption.map((op) => {
      return op.value;
    });

    setConfigDeductions({ ...configDeductions, refFrom: arrayValue });
  };

  const handleCreatePayroll = () => {
    setPayrollPolicy({
      id: "",
      name: "",
      fixedGross: "",
      ctc: "",
      earnings: [],
      deductions: [],
    });
    toggle();
  };

  const handleIsContribution = (e) => {
    console.log(
      e.target.value,
      e.target.name,
      "ppp",
      !configDeductions.isContribution
    );
    setConfigDeductions({
      ...configDeductions,
      isContribution: !configDeductions.isContribution,
    });
  };

  const calculateCTCandTakeHome = () => {
    let realDeductions = 0;
    const contributions = payrollPolicy.deductions.filter(
      (contri) => contri.isContribution === true
    );

    if (contributions.length === 0) {
      alert(
        `CTC: ${payrollPolicy.fixedGross * 12}, Takehome: ${
          payrollPolicy.fixedGross * 1
        }`
      );
      return;
    }

    contributions.forEach((contribution) => {
      let actualPfContributions = 0;

      contribution.refFrom.forEach((ref) => {
        const earningss = payrollPolicy.earnings.find(
          (earning) => earning.name === ref
        );
        actualPfContributions +=
          (earningss.percentage / 100) * payrollPolicy.fixedGross;
      });

      if (actualPfContributions >= contribution.maxAmount) {
        realDeductions +=
          (contribution.maxAmount * contribution.percentage) / 100;
      } else {
        realDeductions +=
          (actualPfContributions * contribution.percentage) / 100;
      }
    });

    console.log(realDeductions);

    alert(
      `CTC: ${
        (Number(payrollPolicy.fixedGross) + realDeductions) * 12
      }, Fixed Gross: ${Number(payrollPolicy.fixedGross)},  Takehome: ${
        (payrollPolicy.fixedGross - realDeductions) * 1
      }`
    );

    return {
      ctc: (Number(payrollPolicy.fixedGross) + realDeductions) * 12,
      takeHome: (payrollPolicy.fixedGross - realDeductions) * 1,
    };
  };

  return (
    <div>
      <div className="create_payroll_btn">
      <Button
        className="mr-1"
        color="primary"
        onClick={handleCreatePayroll}
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
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Create Payroll policy</ModalHeader>
        <ModalBody>
          <div>
            <Row>
              <Col sm="12">
              <CardTitle style={{ color: "#c3272b" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                General Details
              </CardTitle>
                {/* <h1>General Details</h1> */}
              </Col>
              <Col sm="12">
                <Label htmlFor="id">Policy Id</Label>
                <Input
                  type="text"
                  name="id"
                  id="id"
                  placeholder="Policy Id"
                  value={payrollPolicy.id}
                  onChange={handleChange}
                />
              </Col>

              <Col sm="12">
                <Label htmlFor="name">Policy Name</Label>
                <FormGroup>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Policy Name"
                    value={payrollPolicy.name}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col sm="12">
                <Label htmlFor="fixedGross">Fixed Gross</Label>
                <FormGroup>
                  <Input
                    type="text"
                    name="fixedGross"
                    id="fixedGross"
                    placeholder="Fixed Gross"
                    value={payrollPolicy.fixedGross}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col sm="12">
                {/* <h1>Earning Configuration</h1> */}
                <CardTitle style={{ color: "#c3272b" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                Earning Configuration
              </CardTitle>
              </Col>

              <Col sm="12">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Name</th>
                      <th>Reference from</th>
                      <th>Percentage</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {JSON.stringify(payrollPolicy.leaveConfig)} */}
                    {payrollPolicy.earnings.map(
                      ({ name, refFrom, percentage }, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{name}</td>
                          <td>{refFrom}</td>
                          <td>{percentage + "%"}</td>
                          <td>
                            <FontAwesomeIcon
                              onClick={() => handleEdit(index, "EARNINGS")}
                              icon={faPencil}
                              className="mr-2"
                              style={{ fontSize: 16, color: "dodgerblue" }}
                            />
                            <FontAwesomeIcon
                              onClick={() => handleDelete(index, "EARNINGS")}
                              icon={faTrash}
                              className="mr-2"
                              style={{ fontSize: 16, color: "red" }}
                            />
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
                {!earningsCreateOpen ? (
                  <div className='create_payroll_earning_btn_div'>
                  <Button
                    color="success"
                    onClick={() => setEarningsCreateOpen(true)}
                  >
                    Create Earnings
                  </Button></div>
                ) : (
                  <form onSubmit={handleEarningsSubmit}>
                    <Row>
                      <Col sm='4'>
                      <Label htmlFor="fixedGross">Name</Label>
                        <FormGroup>
                          <Input
                            type="text"
                            id="lcName"
                              placeholder="Name"
                              name="name"
                              value={configEarnings.name}
                              onChange={handleEarningsConfig}
                              required
                          />
                        </FormGroup>
                      </Col>
                      <Col sm='4'>
                      <Label htmlFor="fixedGross">Reference from</Label>
                        <FormGroup>
                          <Select
                            id="refFrom"
                            name="refFrom"
                            value={configEarnings.refFrom}
                            onChange={() => {}}
                            required
                          >
                            <MenuItem key={"Fixed Gross"} value={"Fixed Gross"}></MenuItem>
                            </Select>
                        </FormGroup>
                      </Col>
                      <Col sm='4'>
                      <Label htmlFor="fixedGross">Percentage</Label>
                        <FormGroup>
                          <Input
                          type='text'
                             id="percentage"
                             placeholder="Percentage"
                             name="percentage"
                             value={configEarnings.percentage}
                             onChange={handleEarningsConfig}
                             required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                   

                    {/* <label htmlFor="refFrom">Reference from</label>
                    <select
                      id="refFrom"
                      name="refFrom"
                      value={configEarnings.refFrom}
                      onChange={() => {}}
                      required
                    >
                      <option key={"Fixed Gross"} value={"Fixed Gross"}>
                        Fixed Gross
                      </option>
                    </select> */}

                    {/* <label htmlFor="percentage">Percentage</label>
                    <input
                      id="percentage"
                      placeholder="Percentage"
                      name="percentage"
                      value={configEarnings.percentage}
                      onChange={handleEarningsConfig}
                      required
                    ></input> */}
                    <div className='earn_config_add_btn_div'>
                   <div className='earn_config_add_btn_div_cancel'><Button type="button"  color="danger" onClick={() => resetConfigEarnings()}>
                      Cancel
                    </Button></div>
                    <div>
                    {isNew ? (
                      <Button type="submit"  color="success">Add</Button>
                    ) : (
                      <Button
                        type="button"
                        //  style={{backGroundC}}
                        onClick={() => handleUpdate("EARNINGS")}
                      >
                        Update leave config
                      </Button>
                     
                    )}
                    </div>
                     </div>
                  </form>
                )}
              </Col>
            
            <div className='payroll_deduction_div'>
              <Col sm="12">
                
                 <CardTitle style={{ color: "#c3272b" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                Deductions Configuration
              </CardTitle>
              </Col>
              </div>
              <Col sm="12">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Name</th>
                      <th>Is EPF/ESIC ?</th>
                      <th>Reference from</th>
                      <th>Max amount</th>
                      <th>Percentage</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payrollPolicy.deductions.map(
                      (
                        {
                          name,
                          isContribution,
                          refFrom,
                          maxAmount,
                          percentage,
                        },
                        index
                      ) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{name}</td>
                          <td>
                            <input
                              type="checkbox"
                              checked={isContribution}
                              onChange={() => {}}
                            />
                          </td>
                          <td>{refFrom.join(", ")}</td>
                          <td>{maxAmount}</td>
                          <td>{percentage + "%"}</td>
                          <td>
                            <FontAwesomeIcon
                              onClick={() => handleEdit(index, "DEDUCTIONS")}
                              icon={faPencil}
                              className="mr-2"
                              style={{ fontSize: 16, color: "dodgerblue" }}
                            />
                            <FontAwesomeIcon
                              onClick={() => handleDelete(index, "DEDUCTIONS")}
                              icon={faTrash}
                              className="mr-2"
                              style={{ fontSize: 16, color: "red" }}
                            />
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
                {!deductionsCreateOpen ? (
                  <Button
                    color="success"
                    onClick={() => setDeductionsCreateOpen(true)}
                  >
                    Create deductions
                  </Button>
                ) : (
                  <form onSubmit={handleDeductionsSubmit}>
                    <Row>
                      <Col sm='6'>
                      <Label htmlFor="lfName">Name</Label>
                        <FormGroup>
                          <Input
                             id="lfName"
                             type="text"
                             placeholder="Name"
                             name="name"
                             value={configDeductions.name}
                             onChange={handleDeductionsChange}
                             required
                          />
                        </FormGroup>
                     
                        <div style={{display:'flex'  }}>
                      <Label htmlFor="isContribution">Is EPF/ESIC ?</Label>
                        <FormGroup>
                          <Input
                             type="checkbox"
                             id="isContribution"
                             name="isContribution"
                             checked={configDeductions.isContribution}
                             onChange={handleIsContribution}
                             required
                             style={{position:'relative',left:'35px',top:'-3px'}}
                          />
                        </FormGroup>
                        </div>
                      </Col>
                      <Col sm='6'>

                      <Label htmlFor="lfMaxAllowedLate">Reference from</Label>
                        <FormGroup>
                        <Select
                      options={payrollPolicy.earnings.map((earning) => {
                        return { label: earning.name, value: earning.name };
                      })}
                      onChange={handleRefFrom}
                      isMulti={true}
                    ></Select>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm='6'>
                      <Label id="maxAmount">Maximum amount</Label>
                        <FormGroup>
                          <Input
                             type="number"
                             id="maxAmount"
                             name="maxAmount"
                             onChange={handleDeductionsChange}
                             value={configDeductions.maxAmount}
                             placeholder="Maximum Amount"
                             required
                          />
                        </FormGroup>

                      </Col>
                      <Col sm='6'>
                      
                      <Label id="percentage">Percentage</Label>
                        <FormGroup>
                          <Input
                             type="number"
                             id="percentage"
                             onChange={handleDeductionsChange}
                             placeholder="Percentage"
                             name="percentage"
                             value={configDeductions.percentage}
                             required
                          />
                        </FormGroup>
                        
                      </Col>
                    </Row>

                      
                    {/* <label htmlFor="lfName">Name</label>
                    <input
                      id="lfName"
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={configDeductions.name}
                      onChange={handleDeductionsChange}
                      required
                    ></input> */}
                    {/* <label htmlFor="isContribution">Is EPF/ESIC ?</label>
                    <input
                      type="checkbox"
                      id="isContribution"
                      name="isContribution"
                      checked={configDeductions.isContribution}
                      onChange={handleIsContribution}
                    /> */}

                    {/* <label htmlFor="lfMaxAllowedLate">Reference from</label>
                    <Select
                      options={payrollPolicy.earnings.map((earning) => {
                        return { label: earning.name, value: earning.name };
                      })}
                      onChange={handleRefFrom}
                      isMulti={true}
                    ></Select> */}

                    {/* <label id="maxAmount">Maximum amount </label>
                    <input
                      type="number"
                      id="maxAmount"
                      name="maxAmount"
                      onChange={handleDeductionsChange}
                      value={configDeductions.maxAmount}
                      placeholder="Maximum Amount"
                      required
                    ></input> */}

                    {/* <label id="percentage">Percentage</label>
                    <input
                      type="number"
                      id="percentage"
                      onChange={handleDeductionsChange}
                      placeholder="Percentage"
                      name="percentage"
                      value={configDeductions.percentage}
                      required
                    ></input> */}
                  <div className='earn_config_add_btn_div'>
                    <div className='earn_config_add_btn_div_cancel'><Button
                      type="button"
                      color='danger'
                      onClick={() => resetConfigDeductions()}
                    >
                      Cancel
                    </Button></div>
                    <div>
                    {isLateNew ? (
                      <Button type="submit" color='success'>Add</Button>
                    ) : (
                      <Button
                        type="button"
                        // color='dodgerblue'
                        onClick={() => handleUpdate("DEDUCTIONS")}
                      >
                        Update deductions config
                      </Button>
                    )}
                    </div>
                    </div>
                  </form>
                )}
              </Col>
              
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
       
                <Button color="warning" onClick={calculateCTCandTakeHome}>
                  Calculate CTC and Take home
                </Button>
             
            {payrollPolicy._id ? (
            <Button color="success" onClick={handleCreate}>
              Update leave policy
              <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 20, color: "white ", position:'relative',left:'12px',top:'3px' }}
                />
            </Button>
          ) : (
            <Button color="success" onClick={handleCreate}>
              Create leave policy
              <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 20, color: "white ", position:'relative',left:'12px',top:'3px' }}
                />
            </Button>
          )}
            
         
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PayrollPolicyModal;
