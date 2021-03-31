import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEye,
  faUserPlus,
  faFilePdf,
  faFileExcel,
  faTrash,
} from "@fortawesome/pro-light-svg-icons";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table,
} from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import { faArrowDown } from "@fortawesome/pro-duotone-svg-icons";

const ProfileInfo = () => {
  return (
    <div className="container-fluid">
      <Row>
        <Col xs="12" sm="12">
          <Card>
            <div className="cardtitle">Personal details</div>
          
            <CardBody>
              <Form>
                <Row>
                  <Col md={6}>
                    <Row>
                      <Col md={12}>
                        <FormGroup className="wrap-input100 rs1-wrap-input100">
                          <Label for="firstname">First name</Label>  
                          <Input
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder="First name"
                            className="input100"
                          />
                          <span class="focus-input100"></span>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={12}>
                        <FormGroup className="wrap-input100 rs1-wrap-input100">
                          <Label for="lastname">Last name</Label>
                          <Input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Last name"
                            className="input100"
                          />
                          <span class="focus-input100"></span>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Row>
                      <Col md={12}>
                        <FormGroup className="wrap-input100 rs1-wrap-input100">
                          <Label for="lastname">Mobile number</Label>
                          <Input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Last name"
                            className="input100"
                          />
                          <span class="focus-input100"></span>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={12}>
                        <FormGroup className="wrap-input100 rs1-wrap-input100">
                          <Label for="lastname">Gender</Label>
                          <Input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Last name"
                            className="input100"
                          />
                          <span class="focus-input100"></span>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Row>
                      <Col md={12}>
                        <FormGroup className="wrap-input100 rs1-wrap-input100">
                          <Label for="lastname">DOB</Label>
                          <Input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Last name"
                            className="input100"
                          />
                          <span class="focus-input100"></span>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={12}>
                        <FormGroup className="wrap-input100 rs1-wrap-input100">
                          <Label for="lastname">Martial status</Label>
                          <Input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Last name"
                            className="input100"
                          />
                          <span class="focus-input100"></span>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Row>
                      <Col md={12}>
                        <FormGroup className="wrap-input100 rs1-wrap-input100">
                          <Label for="subjectMajor">Subject Major</Label>
                          <Input
                            type="text"
                            name="subjectMajor"
                            id="subjectMajor"
                            placeholder="Subject major"
                            className="input100"
                          />
                          <span class="focus-input100"></span>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={12}>
                        <FormGroup className="wrap-input100 rs1-wrap-input100">
                          <Label for="lastname">
                            Educational qualification
                          </Label>
                          <Input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Last name"
                            className="input100"
                          />
                          <span class="focus-input100"></span>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col xs="12" sm="12">
          <Card>
            <div className="cardtitle">Address</div>
            <CardBody>
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Building number</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Building Details"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Street Name</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Street Name"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Area</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Area"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">LandMark</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter LandMark"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Pincode</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Pincode"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">State</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter State"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Country</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Country"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col xs="12" sm="12">
          <Card>
            <div className="cardtitle">Emergency contact</div>
            <CardBody>
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Name</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Building Details"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Relation</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Street Name"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Mobile</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Area"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Alternate mobile</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter LandMark"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Address</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Pincode"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col xs="12" sm="12">
          <Card>
            <div className="cardtitle">Bank details</div>
            <CardBody>
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Name</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Building Details"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Branch</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Street Name"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">IFSC Code</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Area"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Holder name</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter LandMark"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Account number</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Pincode"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col xs="12" sm="12">
          <Card>
            <div className="cardtitle">Salary details</div>
            <CardBody>
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">CTC</Label>
                      <Input
                        type="CTC"
                        name="CTC"
                        id="exampleEmail"
                        placeholder="Enter Building Details"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col xs="12" sm="12">
          <Card>
            <div className="cardtitle">Documents</div>
            <CardBody>
              <Form>
                <Row className="justify-content-center">
                  <Col md={12}>
                    <FormGroup>
                      <Label for="exampleFile">Upload documents</Label>
                      <Input type="file" name="file" id="exampleFile" />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>

              <Row>
                <div className="table-responsive mt-2">
                  <Table className="table lhead table-borderless custom_table ">
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Filename</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Marksheet</td>
                        <td>
                          <div className="table-icons">
                            <a>
                              <FontAwesomeIcon
                                icon={faArrowDown}
                                className="mr-2 font-icon"
                              />
                            </a>
                            <a>
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="mr-2 font-icon"
                              />
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileInfo;
