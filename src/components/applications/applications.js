import React, { Component, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Row,
  Col,
  Button,
  Input,
  FormGroup,
  Label,
  ModalFooter,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  Table,
} from "reactstrap";
import { Edit, Trash } from "react-feather";
import userImg from "../../assets/img/portrait/small/avatar-s-18.jpg";
import "../../assets/scss/pages/users.scss";

const ModalExample = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* <Button className="buttons fill pull-right mr-0" onClick={toggle}>Create</Button> */}
      <Button color="primary" onClick={toggle}>
        Create
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
        <ModalHeader toggle={toggle}>Create Job</ModalHeader>
        <ModalBody>
          <div>
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Position Title</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter PositionTitle"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleSelect">Experience Type</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>1</option>
                      <option>2</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Application Id</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter Application Id"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">First Name</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter FirstName"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Last Name</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter LastName"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleDate">AppliedDate</Label>
                    <Input
                      type="date"
                      name="date"
                      id="exampleDate"
                      placeholder="date placeholder"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email Id</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter Email"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Contact No</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter ContactNo"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Message</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter Message"
                    />
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Status</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter Status"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const Applications = (props) => {
  return (
    <div className="m-1">
      <Row>
        <Col>
          <div className="float-right">
            <ModalExample></ModalExample>
          </div>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col sm="12">
          <Card>
            <CardHeader>
              <CardTitle>JobDetails</CardTitle>
            </CardHeader>
            <CardBody>
              <Row className="mx-0" col="12">
                <Col className="pl-0" sm="12">
                  <Media className="d-sm-flex d-block">
                    <Media className="mt-md-1 mt-0" left>
                      <Media
                        className="rounded mr-2"
                        object
                        src={userImg}
                        alt="Generic placeholder image"
                        height="112"
                        width="112"
                      />
                    </Media>
                    <Media body>
                      <Row>
                        <Col sm="9" md="6" lg="5">
                          <div className="users-page-view-table">
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                                Username
                              </div>
                              <div>crystal</div>
                            </div>
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                                Name
                              </div>
                              <div>Crystal Hamilton</div>
                            </div>
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                                Email
                              </div>
                              <div className="text-truncate">
                                <span>crystalhamilton@gmail.com</span>
                              </div>
                            </div>
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                                Mobile
                              </div>
                              <div className="text-truncate">
                                <span>8098879194</span>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md="12" lg="5">
                          <div className="users-page-view-table">
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                                Status
                              </div>
                              <div>active</div>
                            </div>
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                                Role
                              </div>
                              <div>admin</div>
                            </div>
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                                Company
                              </div>
                              <div>
                                <span>North Star Aviation Pvt Ltd</span>
                              </div>
                            </div>
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                                Address
                              </div>
                              <div className="text-truncate">
                                <span>Address</span>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Media>
                  </Media>
                </Col>
                <Col className="mt-1 pl-0" sm="12">
                  <Button className="mr-1" color="primary" outline>
                    <Edit size={15} />
                    <span className="align-middle ml-50">Edit</span>
                  </Button>
                  <Button color="danger" outline>
                    <Trash size={15} />
                    <span className="align-middle ml-50">Delete</span>
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Applications;
