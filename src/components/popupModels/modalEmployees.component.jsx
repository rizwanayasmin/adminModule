import React, { useState, useEffect } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faTrash, faPencil ,faPlus, faLocationArrow} from "@fortawesome/pro-duotone-svg-icons";
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
import { getOrganizationIdFromInstitute } from "../../actions/instituteActions";
import { createTeacher } from "../../actions/teacherActions";
import './instituteModal.css'

const EmployeesModal = ({ modal, toggle, institutionNames, designIds }) => {
  const [instituteSelect, setInstituteSelect] = useState("--SELECT--");
  const [designationSelect, setDesignationSelect] = useState("--SELECT--");
  const [organizationId, setOrganizationId] = useState("");
  const [empNumber, setEmpNumber] = useState("");
  const [data, setData] = useState({
    v_status: 0,
    first_name: "",
    last_name: "",
  });

  useEffect(() => {
    if (instituteSelect !== "--SELECT--") {
      // Api Call
      getOrganizationIdFromInstitute(
        instituteSelect,
        setOrganizationId,
        setEmpNumber
      );
    }
  }, [instituteSelect]);

  const handleCreate = () => {
    if (
      instituteSelect === "--SELECT--" ||
      designationSelect === "--SELECT--" ||
      data.first_name === "" ||
      data.last_name === ""
    ) {
      alert("Please provide all mandatory fields!");
    } else {
      console.log({
        ...data,
        organization_id: organizationId,
        employee_number: empNumber,
        designation_id: designationSelect,
      });
      createTeacher({
        ...data,
        organization_id: organizationId,
        employee_number: empNumber,
        designation_id: designationSelect,
      });
      toggle();
    }
  };

  const handleCancel = () => {
    setInstituteSelect("--SELECT--");
    setDesignationSelect("--SELECT--");
    setOrganizationId("");
    setEmpNumber("");
    setData({
      v_status: 0,
      first_name: "",
      last_name: "",
    });
    toggle();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div>
      <div className='create_employee_btn_div'>
      <Button className="mr-1" color="primary" onClick={handleCancel} outline>
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
      </Button></div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Create new Employee</ModalHeader>
        <ModalBody>
          <div>
            <Form>
              <Row>
                <Col sm="12">
                  <Label for="selectInstitute">Select Institute</Label>
                  <FormGroup className="has-icon-left position-relative">
                    <Select
                      id="selectInstitute"
                      value={{ value: instituteSelect, label: instituteSelect }}
                      options={institutionNames.map((ins, i) => ({
                        value: ins.instituteId,
                        label: ins.instituteId,
                      }))}
                      onChange={(e) => {
                        setInstituteSelect(e.value);
                      }}
                    ></Select>
                  </FormGroup>
                </Col>
              </Row>
              {instituteSelect !== "--SELECT--" ? (
                <Row>
                  <Col sm="12">
                    <Label for="staffId">Staff id</Label>
                    <FormGroup className="has-icon-left position-relative">
                      <Input
                        required
                        type="text"
                        name="staffId"
                        id="staffId"
                        placeholder="Staff Id"
                        value={empNumber}
                        onChange={() => {}}
                        disabled
                      />
                      <div className="form-control-position">
                        <User size={15} />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <Label for="firstName">First name</Label>
                    <FormGroup className="has-icon-left position-relative">
                      <Input
                        required
                        type="text"
                        name="first_name"
                        id="firstName"
                        placeholder="Firstname"
                        value={data.first_name}
                        onChange={handleChange}
                      />
                      <div className="form-control-position">
                        <User size={15} />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <Label for="lastname">Last name</Label>
                    <FormGroup className="has-icon-left position-relative">
                      <Input
                        required
                        type="text"
                        name="last_name"
                        id="lastname"
                        placeholder="Lastname"
                        onChange={handleChange}
                        value={data.last_name}
                      />
                      <div className="form-control-position">
                        <User size={15} />
                      </div>
                    </FormGroup>
                  </Col>
                  <Col sm="12">
                    <Label for="selectDesignation">Select designation</Label>
                    <FormGroup className="has-icon-left position-relative">
                      <Select
                        id="selectDesignation"
                        name="designation"
                        value={{
                          value: designationSelect,
                          label: designationSelect,
                        }}
                        options={designIds.map((designId, i) => ({
                          value: designId.designationId,
                          label: designId.designationId,
                        }))}
                        onChange={(e) => {
                          setDesignationSelect(e.value);
                        }}
                      ></Select>
                    </FormGroup>
                  </Col>
                </Row>
              ) : null}
            </Form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleCancel} style={{height:'45px'}}>Cancel</Button>
          <Button color="success" onClick={handleCreate}>

            Create employee
            <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 20, color: "white ", position:'relative',left:'12px',top:'3px' }}
                />
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EmployeesModal;
