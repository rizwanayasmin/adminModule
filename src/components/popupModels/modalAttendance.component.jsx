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
  AlertTriangle,
} from "react-feather";
import Select from "react-select";
import Checkbox from "../@vuexy/checkbox/CheckboxesVuexy";
import leavePolicyColumn from "../../assets/data-table-columns/leavePolicyColumn";
import IS_YEARLY from "../../assets/sample-data/leavePolicyOptions";
import LEAVE_POLICIES from "../../assets/sample-data/leavePolicies";

const AttendanceModal = ({
  modal,
  setModal,
  toggle,
  attendance,
  setAttendance,
  createAttendance,
}) => {
  const MONTH_OPTIONS = [
    { value: "--SELECT--", label: "--SELECT--" },
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];

  const handleMonthChange = (selectedOption) => {
    setAttendance({ ...attendance, month: selectedOption.value });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setAttendance({ ...attendance, [name]: value });
  };

  const handleCreate = () => {
    if (
      attendance.month === "--SELECT--" ||
      attendance.present === "" ||
      attendance.workingDays === "" ||
      attendance.late === "" ||
      attendance.absent === ""
    ) {
      alert("Some important fields are missing");
      return;
    }
    createAttendance();
  };

  return (
    <div>
      <Button className="mr-1" color="primary" onClick={toggle} outline>
        <Plus size={15} />
        Entry Attendance
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Entry Attendance</ModalHeader>
        <ModalBody>
          <div>
            <Row>
              <Col sm="6">
                <Label htmlFor="month">Month</Label>
                <Select
                  value={{ value: attendance.month, label: attendance.month }}
                  options={MONTH_OPTIONS}
                  onChange={handleMonthChange}
                />
              </Col>

              <Col sm="6">
                <Label htmlFor="workingDays">Working days</Label>
                <Input
                  type="number"
                  name="workingDays"
                  value={attendance.workingDays}
                  onChange={handleChange}
                  id="workingDays"
                ></Input>
              </Col>
              <Col sm="6">
                <Label htmlFor="present">Present</Label>
                <Input
                  type="number"
                  name="present"
                  value={attendance.present}
                  onChange={handleChange}
                  id="present"
                ></Input>
              </Col>
              <Col sm="6">
                <Label htmlFor="absent">Absent</Label>
                <Input
                  type="number"
                  name="absent"
                  value={attendance.absent}
                  onChange={handleChange}
                  id="absent"
                ></Input>
              </Col>
              <Col sm="6">
                <Label htmlFor="late">Late</Label>
                <Input
                  type="number"
                  name="late"
                  value={attendance.late}
                  onChange={handleChange}
                  id="late"
                ></Input>
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          {attendance._id ? (
            <Button color="success" onClick={handleCreate}>
              Update Attendance
            </Button>
          ) : (
            <Button color="success" onClick={handleCreate}>
              Entry Attendance
            </Button>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AttendanceModal;
