import React, { useState, useEffect } from "react";
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
  faCheck,
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
import { approveLeave } from "../../actions/teacherActions";

const LeaveApprovalModal = ({
  teacherId,
  arrayIndex,
  month,
  dateRange,
  aDateRange,
  aNoOfDays,
}) => {
  const [modal, setModal] = useState(false);
  const [approvedNoOfDays, setApprovedNoOfDays] = useState(aNoOfDays);
  const [approvedDateRange, setApprovedDateRange] = useState(aDateRange);

  const toggle = () => {
    setModal(!modal);
  };

  const handleNoOfDays = (e) => {
    setApprovedNoOfDays(e.target.value);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setApprovedDateRange({ ...approvedDateRange, [name]: value });
  };

  const handleApproveLeave = () => {
    if (approvedDateRange.from === "" || approvedNoOfDays === "") {
      alert("Please select from date and give no of days");
      return;
    }

    approveLeave(
      teacherId,
      arrayIndex,
      month,
      approvedNoOfDays,
      approvedDateRange
    );
    toggle();
    resetHandler();
  };

  const resetHandler = () => {
    setApprovedNoOfDays("");
    setApprovedDateRange({ from: "", to: "" });
  };

  //   const handleMakePayment = (teacherId, amount) => {
  //     if (amount !== "" || amount === "0")
  //       payLoanAmountForATeacher(teacherId, amount);
  //     setAmount("");
  //     toggle();
  //   };

  return (
    <div>
      <FontAwesomeIcon
        onClick={toggle}
        icon={faCheck}
        className="mr-2"
        style={{ fontSize: 16, color: "#fd868c" }}
      />
      {/* <Button className="mr-1" color="primary" onClick={toggle} outline>
        <Plus size={15} />
        Leave approval
      </Button> */}
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Leave approval</ModalHeader>
        <ModalBody>
          <div>
            <Row>
              <Col sm="6">
                <h1>Leave request</h1>
                <p>
                  Start date:{" "}
                  {dateRange
                    ? dateRange.from
                      ? dateRange.from
                      : " - "
                    : " - "}
                </p>
                <p>
                  End date:{" "}
                  {dateRange ? (dateRange.to ? dateRange.to : " - ") : " - "}
                </p>
              </Col>
              <Col sm="6">
                <Label htmlFor="start">Start date</Label>
                <Input
                  id="start"
                  type="date"
                  name="from"
                  value={approvedDateRange.from}
                  onChange={handleDateChange}
                ></Input>
              </Col>
              <Col sm="6">
                <Label htmlFor="End">End date</Label>
                <Input
                  id="End"
                  type="date"
                  name="to"
                  value={approvedDateRange.to}
                  onChange={handleDateChange}
                ></Input>
              </Col>
              <Col sm="6">
                <Label htmlFor="approvedNoOfDays">Approved no. of days</Label>
                <Input
                  id="approvedNoOfDays"
                  type="number"
                  name="approvedNoOfDays"
                  value={approvedNoOfDays}
                  onChange={handleNoOfDays}
                ></Input>
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleApproveLeave}>
            Approve leave
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LeaveApprovalModal;
