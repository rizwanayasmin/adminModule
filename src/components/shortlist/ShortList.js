import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faFileSpreadsheet,
  faPrint,
} from "@fortawesome/pro-solid-svg-icons";
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
  Modal,
  ModalBody,
  Pagination,
  PaginationItem,
  PaginationLink,
  Breadcrumb,
  BreadcrumbItem,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledButtonDropdown,
  ModalHeader,
  ModalFooter,
  Progress,
} from "reactstrap";
import {
  faEye,
  faTrash,
  faPencil,
  faArrowDown,
} from "@fortawesome/pro-duotone-svg-icons";
import {
  Plus,
  AlertCircle,
  Check,
  Star,
  ChevronsLeft,
  ChevronsRight,
  Search,
  ChevronDown,
} from "react-feather";
import Chip from "../../components/@vuexy/chips/ChipComponent";
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy";

const chipColors = {
  "on hold": "warning",
  delivered: "success",
  pending: "primary",
  canceled: "danger",
};

const ModalExample = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="mr-1" color="primary" onClick={toggle} outline>
        <Plus size={15} />
        Add
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
        <ModalHeader toggle={toggle}>Interview Process</ModalHeader>
        <ModalBody>
          <div>
            <Form>
              <Row>
                <Col sm="12">
                  <Label for="nameVerticalIcons">Date</Label>
                  <FormGroup>
                    <Input
                      type="date"
                      name="date"
                      id="exampleDate"
                      placeholder="Date"
                    />
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="nameVerticalIcons">Name</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="name"
                      id="nameVerticalIcons"
                      placeholder="Name"
                    />
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="nameVerticalIcons">Education</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="name"
                      id="nameVerticalIcons"
                      placeholder="Education"
                    />
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="nameVerticalIcons">Experience</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="name"
                      id="nameVerticalIcons"
                      placeholder="Experience"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

class ShortList extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Breadcrumb className="breadcrumb-pipes">
          <BreadcrumbItem>JobName</BreadcrumbItem>
          <BreadcrumbItem>Level</BreadcrumbItem>
          <BreadcrumbItem>Vacancy</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "#fd868c" }}>Candidates List</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="float-left">
              <Row>
                <Col>
                  <div className="dropdown mr-1 mb-1">
                    <UncontrolledButtonDropdown>
                      <DropdownToggle color="primary" caret>
                        Actions&nbsp;
                        <ChevronDown size={0} />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem tag="a">Delete</DropdownItem>
                        <DropdownItem tag="a">Archive</DropdownItem>
                        <DropdownItem tag="a">Print</DropdownItem>
                        <DropdownItem tag="a">Export</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </div>
                </Col>
                <Col>
                  <ModalExample></ModalExample>
                </Col>
              </Row>
            </div>
            <div className="float-right">
              <Row>
                <Col>
                  <UncontrolledButtonDropdown>
                    <DropdownToggle className="px-2 py-75" color="white">
                      1-44/99
                      <ChevronDown className="ml-50" size={15} />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem tag="a">
                        <span className="align-middle ml-50">10</span>
                      </DropdownItem>
                      <DropdownItem tag="a">
                        <span className="align-middle ml-50">50</span>
                      </DropdownItem>
                      <DropdownItem tag="a">
                        <span className="align-middle ml-50">40</span>
                      </DropdownItem>
                      <DropdownItem tag="a">
                        <span className="align-middle ml-50">60</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </Col>
                <Col>
                  <FormGroup className="has-icon-left position-relative">
                    <Input type="text" name="text" placeholder="Search" />
                    <div className="form-control-position">
                      <Search size={15} />
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <Table responsive>
              <thead>
                <tr>
                  <th style={{ width: "5%" }}>
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      defaultChecked={false}
                    />
                  </th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Eduaction</th>
                  <th>Experience</th>
                  <th>Rating</th>
                  <th>CTC</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      defaultChecked={false}
                    />
                  </td>
                  <td>Date</td>
                  <td>Name</td>
                  <td>Education</td>
                  <td>Experience</td>
                  <td>
                    {" "}
                    <Progress className="progress-lg" value="75" color="danger">
                      25%
                    </Progress>
                  </td>
                  <td>CTC</td>
                  <td>
                    {" "}
                    <Chip color="warning" text="shortlisted"></Chip>
                  </td>
                  <td>
                    <a>
                      <FontAwesomeIcon
                        icon={faEye}
                        className="mr-2"
                        style={{ fontSize: 16, color: "#fd868c" }}
                      />
                    </a>
                    <a>
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className="mr-2"
                        style={{ fontSize: 16, color: "#fd868c" }}
                      />
                    </a>
                    <a>
                      <FontAwesomeIcon
                        icon={faPrint}
                        className="mr-2"
                        style={{ fontSize: 16, color: "#fd868c" }}
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
          <Pagination className="d-flex justify-content-center mt-3 pagination ">
            <PaginationItem href="#" className="prev-item">
              <PaginationLink href="#" first>
                <ChevronsLeft /> Prev
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem href="#" className="next-item">
              <PaginationLink href="#" last>
                Next <ChevronsRight />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </Card>
      </div>
    );
  }
}

export default ShortList;
