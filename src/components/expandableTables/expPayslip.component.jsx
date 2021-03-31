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
import { faEye, faTrash, faPencil } from "@fortawesome/pro-duotone-svg-icons";
import {
  ChevronsLeft,
  ChevronsRight,
  Plus,
  User,
  Search,
  ChevronDown,
  Check,
} from "react-feather";
import Select from "react-select";
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy";
import leavePolicyColumn from "../../assets/data-table-columns/leavePolicyColumn";
import IS_YEARLY from "../../assets/sample-data/leavePolicyOptions";
import LEAVE_POLICIES from "../../assets/sample-data/leavePolicies";

const PayslipModal = ({
  modal,
  setModal,
  toggle,
  leavePolicy,
  setLeavePolicy,
  createLeavePolicy,
}) => {
  const [leavePosition, setLeavePosition] = useState(0);
  const [latePosition, setLatePosition] = useState(0);
  const [leaveCreateOpen, setLeaveCreateOpen] = useState(false);
  const [lateCreateOpen, setLateCreateOpen] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const [isLateNew, setLateIsNew] = useState(true);

  const [configLeave, setConfigLeave] = useState({
    name: "",
    noOfLeaves: "",
    isYearly: false,
  });
  const [configLate, setConfigLate] = useState({
    name: "",
    maxLateAllowPerMonth: "",
    isBecomeLOP: true,
    fineAmount: "",
  });

  //   Event handlers
  const handleChange = (e) => {
    const { value, name } = e.target;
    setLeavePolicy({ ...leavePolicy, [name]: value });
  };

  const handleLeaveConfigSelect = (e) => {
    const { value } = e.target;
    if (value === "Yearly") {
      setConfigLeave({ ...configLeave, isYearly: true });
    } else {
      setConfigLeave({ ...configLeave, isYearly: false });
    }
  };

  const handleLeaveSubmit = (e) => {
    e.preventDefault();
    // console.log(configLeave);
    const newLeaveConfigArray = leavePolicy.leaveConfig;
    newLeaveConfigArray.push(configLeave);

    setLeavePolicy({
      ...leavePolicy,
      leaveConfig: newLeaveConfigArray,
    });

    console.log(leavePolicy);
    resetConfigLeave();
  };

  const handleLateSubmit = (e) => {
    e.preventDefault();

    // setLeavePolicy({
    //   ...leavePolicy,
    //   lateFines: leavePolicy.lateFines.push(configLate),
    // });
    const newLatePolicy = leavePolicy.lateFines;
    newLatePolicy.push(configLate);

    setLeavePolicy({ ...leavePolicy, lateFines: newLatePolicy });
    console.log(leavePolicy);

    resetConfigLate();
  };

  const handleLateConfig = (e) => {
    const { value, name } = e.target;
    if (e.target.type === "checkbox") {
      setConfigLate({ ...configLate, [name]: !configLate.isBecomeLOP });
    } else {
      setConfigLate({ ...configLate, [name]: value });
    }
  };

  const handleLeaveConfig = (e) => {
    const { value, name } = e.target;
    setConfigLeave({ ...configLeave, [name]: value });
  };

  const resetConfigLeave = () => {
    setConfigLeave({
      name: "",
      noOfLeaves: "",
      isYearly: false,
    });
    setLeaveCreateOpen(false);
  };

  const resetConfigLate = () => {
    setConfigLate({
      name: "",
      maxLateAllowPerMonth: "",
      isBecomeLOP: true,
      fineAmount: "",
    });
    setLateCreateOpen(false);
  };

  const handleEdit = (index, type) => {
    if (type === "LEAVE") {
      resetConfigLeave();
      setIsNew(false);
      setLeavePosition(index);
      const leave = leavePolicy.leaveConfig.find((le, idx) => idx === index);
      setConfigLeave({ ...leave });
      setLeaveCreateOpen(true);
    } else {
      resetConfigLate();
      setLateIsNew(false);
      setLatePosition(index);
      const late = leavePolicy.lateFines.find((la, idx) => idx === index);
      setConfigLate({ ...late });
      setLateCreateOpen(true);
    }
  };

  const handleDelete = (index, type) => {
    if (type === "LEAVE") {
      const isTrue = window.confirm("Are you sure you want to delete?");
      if (isTrue) {
        leavePolicy.leaveConfig.splice(index, 1);
        setLeavePolicy({
          ...leavePolicy,
          leaveConfig: leavePolicy.leaveConfig,
        });
        resetConfigLeave();
        setIsNew(true);
      }
    } else {
      const isTrue = window.confirm("Are you sure you want to delete?");
      if (isTrue) {
        leavePolicy.lateFines.splice(index, 1);
        setLeavePolicy({
          ...leavePolicy,
          lateFines: leavePolicy.lateFines,
        });
        resetConfigLate();
        setLateIsNew(true);
      }
    }
  };

  const handleUpdate = (type) => {
    if (type === "LEAVE") {
      if (configLeave.name === "" || configLeave.noOfLeave === "") {
        alert("Can not perform update, because mandatory fields are missing");
      } else {
        leavePolicy.leaveConfig[leavePosition] = configLeave;
        setLeavePolicy({ ...leavePolicy });
        resetConfigLeave();
        setIsNew(true);
      }
    } else {
      if (configLate.name === "" || configLate.maxLateAllowPerMonth === "") {
        alert("Can not perform update, because mandatory fields are missing");
      } else {
        leavePolicy.lateFines[latePosition] = configLate;
        setLeavePolicy({ ...leavePolicy });
        resetConfigLate();
        setLateIsNew(true);
      }
    }
  };

  const handleCreate = () => {
    if (leavePolicy.id === "" || leavePolicy.name === "") {
      alert("Some important fields are missing");
    } else {
      console.log(leavePolicy);
      createLeavePolicy();
      // toggle();
    }
  };

  return (
    <div>
      <Button className="mr-1" color="primary" onClick={toggle} outline>
        <Plus size={15} />
        Entry attendance
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Entry attendance</ModalHeader>
        <ModalBody>
          <div>
            <Row>
              <Col sm="12">
                <Label htmlFor="id">Policy Id</Label>
                <Input
                  type="text"
                  name="id"
                  id="id"
                  placeholder="Policy Id"
                  value={leavePolicy.id}
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
                    value={leavePolicy.name}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col sm="12">
                <h1>Leave Configuration</h1>
              </Col>

              <Col sm="12">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Name</th>
                      <th>Number of Leaves</th>
                      <th>Yearly</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {JSON.stringify(leavePolicy.leaveConfig)} */}
                    {leavePolicy.leaveConfig.map(
                      ({ name, noOfLeaves, isYearly }, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{name}</td>
                          <td>{noOfLeaves}</td>
                          <td>{isYearly ? "Yearly" : "Monthly"}</td>
                          <td>
                            <FontAwesomeIcon
                              onClick={() => handleEdit(index, "LEAVE")}
                              icon={faPencil}
                              className="mr-2"
                              style={{ fontSize: 16, color: "gray" }}
                            />
                            <FontAwesomeIcon
                              onClick={() => handleDelete(index, "LEAVE")}
                              icon={faTrash}
                              className="mr-2"
                              style={{ fontSize: 16, color: "gray" }}
                            />
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
                {!leaveCreateOpen ? (
                  <Button
                    color="success"
                    onClick={() => setLeaveCreateOpen(true)}
                  >
                    Add Leave Configuration
                  </Button>
                ) : (
                  <form onSubmit={handleLeaveSubmit}>
                    <label htmlFor="lcName">Name</label>
                    <input
                      id="lcName"
                      placeholder="Name"
                      name="name"
                      value={configLeave.name}
                      onChange={handleLeaveConfig}
                      required
                    ></input>
                    <label htmlFor="lcNoOfLeaves">Number of Leaves</label>
                    <input
                      type="number"
                      id="lcNoOfLeaves"
                      name="noOfLeaves"
                      value={configLeave.noOfLeaves}
                      onChange={handleLeaveConfig}
                      placeholder="Number of Leaves"
                      required
                    ></input>
                    <label htmlFor="leaveType">Leave type</label>
                    <select
                      id="leaveType"
                      name="isYearly"
                      value={configLeave.isYearly ? "Yearly" : "Monthly"}
                      onChange={handleLeaveConfigSelect}
                      required
                    >
                      {IS_YEARLY.map((y, index) => (
                        <option key={index} value={y.name}>
                          {y.value}
                        </option>
                      ))}
                    </select>
                    <button type="button" onClick={() => resetConfigLeave()}>
                      Cancel
                    </button>
                    {isNew ? (
                      <button type="submit">Add</button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleUpdate("LEAVE")}
                      >
                        Update leave config
                      </button>
                    )}
                  </form>
                )}
              </Col>

              <Col sm="12">
                <h1>Late fine Configuration</h1>
              </Col>

              <Col sm="12">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Name</th>
                      <th>Max. Late Allowed per Month</th>
                      <th>LOP</th>
                      <th>Fine Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leavePolicy.lateFines.map(
                      (
                        { name, maxLateAllowPerMonth, isBecomeLOP, fineAmount },
                        index
                      ) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{name}</td>
                          <td>{maxLateAllowPerMonth}</td>
                          <td>{isBecomeLOP ? "Yes" : "No"}</td>
                          <td>{fineAmount}</td>
                          <td>
                            <FontAwesomeIcon
                              onClick={() => handleEdit(index, "LATE")}
                              icon={faPencil}
                              className="mr-2"
                              style={{ fontSize: 16, color: "gray" }}
                            />
                            <FontAwesomeIcon
                              onClick={() => handleDelete(index, "LATE")}
                              icon={faTrash}
                              className="mr-2"
                              style={{ fontSize: 16, color: "gray" }}
                            />
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
                {!lateCreateOpen ? (
                  <Button
                    color="success"
                    onClick={() => setLateCreateOpen(true)}
                  >
                    Add Late fine Configuration
                  </Button>
                ) : (
                  <form onSubmit={handleLateSubmit}>
                    <label htmlFor="lfName">Name</label>
                    <input
                      id="lfName"
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={configLate.name}
                      onChange={handleLateConfig}
                      required
                    ></input>
                    <label htmlFor="lfMaxAllowedLate">
                      Max Allowed Late per Month
                    </label>
                    <input
                      type="number"
                      id="lfMaxAllowedLate"
                      name="maxLateAllowPerMonth"
                      onChange={handleLateConfig}
                      value={configLate.maxLateAllowPerMonth}
                      placeholder="Max Allowed Late per Month"
                      required
                    ></input>
                    <label id="lfLOP">LOP </label>
                    <input
                      type="checkbox"
                      id="lfLOP"
                      checked={configLate.isBecomeLOP}
                      onChange={handleLateConfig}
                      name="isBecomeLOP"
                    ></input>

                    <label id="fineAmount">Fine Amount </label>
                    <input
                      type="number"
                      id="fineAmount"
                      onChange={handleLateConfig}
                      placeholder="Fine Amount"
                      name="fineAmount"
                      value={configLate.fineAmount}
                      required
                    ></input>
                    <button type="button" onClick={() => resetConfigLate()}>
                      Cancel
                    </button>

                    {isLateNew ? (
                      <button type="submit">Add</button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleUpdate("LATE")}
                      >
                        Update late config
                      </button>
                    )}
                  </form>
                )}
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          {leavePolicy._id ? (
            <Button color="success" onClick={handleCreate}>
              Update leave policy
            </Button>
          ) : (
            <Button color="success" onClick={handleCreate}>
              Create leave policy
            </Button>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PayslipModal;
