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

const ClassroomModal = ({
  modal,
  toggle,
  profileId,
  organizationId,
  classroom,
  setClassroom,
  createClassroom,
}) => {
  const [levelSelect, setLevelSelect] = useState("--SELECT--");
  const [classLists, setClassLists] = useState("--SELECT--");
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    if (levelSelect !== "--SELECT--") {
    }
  }, [levelSelect]);

  const LEVEL_OPTIONS = [
    { value: "--SELECT--", label: "--SELECT--" },
    { value: "Pre-KG", label: "Pre-KG" },
    { value: "LKG", label: "LKG" },
    { value: "UKG", label: "UKG" },
    { value: "I", label: "I" },
    { value: "II", label: "II" },
    { value: "III", label: "III" },
    { value: "IV", label: "IV" },
    { value: "V", label: "V" },
    { value: "VI", label: "VI" },
    { value: "VII", label: "VII" },
    { value: "VIII", label: "III" },
    { value: "IX", label: "IX" },
    { value: "X", label: "X" },
    { value: "XI", label: "XI" },
    { value: "XII", label: "XII" },
  ];

  const CLASS_OPTIONS = [
    { value: "--SELECT--", label: "--SELECT--" },
    { value: "Marvellous", label: "Marvellous" },
    { value: "Awesome", label: "Awesome" },
    { value: "Global", label: "Global" },
  ];

  const ROLE_OPTIONS = [
    { value: "--SELECT--", label: "--SELECT--" },
    { value: "Teacher", label: "Teacher" },
    { value: "Class-teacher", label: "Class-teacher" },
  ];

  const handleLevelChange = (selectedOption) => {
    setClassroom({ ...classroom, level: selectedOption.value });
  };

  const handleClassChange = (selectedOption) => {
    setClassroom({ ...classroom, class: selectedOption.value });
  };

  const handleSubjectChange = (e) => {
    const { value, name } = e.target;
    setClassroom({ ...classroom, [name]: value });
  };

  const handleRoleChange = (selectedOption) => {
    setClassroom({ ...classroom, role: selectedOption.value });
  };

  const handleCreate = () => {
    if (
      classroom.level === "--SELECT--" ||
      classroom.role === "--SELECT--" ||
      classroom.class === "--SELECT--" ||
      classroom.subject === ""
    ) {
      alert("Some important fields are missing");
      return;
    }
    createClassroom();
  };

  return (
    <div>
      <Button className="mr-1" color="primary" onClick={toggle} outline>
        <Plus size={15} />
        Assign classroom
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Assign classroom</ModalHeader>
        <ModalBody>
          <div>
            <Row>
              <Col sm="6">
                <Label htmlFor="level">Level</Label>
                <Select options={LEVEL_OPTIONS} />
              </Col>
              <Col sm="6">
                <Label htmlFor="class">Class</Label>
                <Select options={CLASS_OPTIONS} />
              </Col>
              <Col sm="6">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  value={classroom.subject}
                  onChange={handleSubjectChange}
                  id="subject"
                ></Input>
              </Col>
              <Col sm="6">
                <Label htmlFor="role">Role</Label>
                <Select options={ROLE_OPTIONS} />
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          {classroom._id ? (
            <Button color="success" onClick={handleCreate}>
              Update Classroom
            </Button>
          ) : (
            <Button color="success" onClick={handleCreate}>
              Assign Classroom
            </Button>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ClassroomModal;
