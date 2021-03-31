import React, { Component, useState } from "react";
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
  ModalFooter,
  Modal,
  ModalBody,
  ModalHeader,
  CardHeader,
  CardTitle,
  CardBody,
  Pagination,
  PaginationItem,
  PaginationLink,
  DropdownItem,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  FormText,
} from "reactstrap";
import { faEye, faTrash, faPencil } from "@fortawesome/pro-duotone-svg-icons";
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy";
import DataTable from "react-data-table-component";
import {
  Plus,
  AlertCircle,
  Check,
  ChevronsLeft,
  ChevronsRight,
  User,
  Search,
  ChevronDown,
} from "react-feather";

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
        <ModalHeader toggle={toggle}>Letter Details</ModalHeader>
        <ModalBody>
          <div>
            <Form>
              <Row>
                <Col sm="12">
                  <Label for="nameVerticalIcons">Letter Name</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="name"
                      id="nameVerticalIcons"
                      placeholder="Letter Name"
                    />
                  </FormGroup>
                  <FormGroup row>
                    {/* <Label for="exampleFile" sm={2}>File</Label> */}
                    <Col sm={12}>
                      <Input type="file" name="file" id="exampleFile" />
                    </Col>
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

const columns = [
  {
    cell: (row) => (
      <Checkbox
        color="primary"
        icon={<Check className="vx-icon" size={16} />}
        defaultChecked={false}
      />
    ),
    selector: "sno",
  },
  {
    name: "Letter Name",
    selector: "name",
  },

  {
    name: "Action",
    selector: "action",
  },
];
const data = [
  {
    sno: "1",
    name: "Letter name",
    action: "action",
  },
  {
    sno: "1",
    name: "Letter name",
    action: "action",
  },
];

const customStyles = {
  title: {
    style: {},
  },
  rows: {
    style: {},
  },
  headCells: {
    style: {
      color: "#c3272b",
      fontSize: "12px",
      fontWeight: "bold",
    },
  },
  cells: {
    style: {},
  },
};

const ExpandableTable = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>Letter Name</CardTitle>
        </CardHeader>
        <CardBody>
          <h5>Content</h5>
          With basic collapse you can open multiple items at a time. to add
          bottom border use .collapse-bordered as a wrapper of collapse cards.
        </CardBody>
      </Card>
    </div>
  );
};

class Letter extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "#fd868c" }}>HR Letter format</CardTitle>
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
            <DataTable
              data={data}
              columns={columns}
              customStyles={customStyles}
              noHeader
              expandableRows
              expandOnRowClicked
              expandableRowsComponent={<ExpandableTable />}
            />
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

export default Letter;
