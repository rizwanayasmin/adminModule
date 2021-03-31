import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faFilePdf,
  faFileSpreadsheet,
} from "@fortawesome/pro-solid-svg-icons";
import {
  faEye,
  faSearch,
  faPencil,
  faUserPlus,
} from "@fortawesome/pro-duotone-svg-icons";
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
  Table,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
} from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import BootstrapTable from "react-bootstrap-table-next";
const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      options: {
        responsive: true,
        cutoutPercentage: 50,
        legend: {
          display: true,
          position: "bottom",
          labels: {
            fontSize: 14,
          },
        },
      },
    },
  ],
};

const products = [
  { id: "apple", name: "orange", price: "100" },
  { id: "apple", name: "orange", price: "100" },
  { id: "apple", name: "orange", price: "100" },
];
const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
];

const expandRow = {
  renderer: (row) => (
    <div>
      <Row>
        <Col md="12">
          <Card>
            <div className="cardtitle">Basic Information</div>
            <CardBody>
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Staff Id</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Staff Id"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleSelect">Role</Label>
                      <Input
                        type="select"
                        name="select"
                        id="exampleSelect"
                        className="input100"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">First Name</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter First Name"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Last Name</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Last Name"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleSelect">Gender</Label>
                      <Input
                        type="select"
                        name="select"
                        id="exampleSelect"
                        className="input100"
                      >
                        <option>male</option>
                        <option>female</option>
                      </Input>
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleSelect">Marital Status</Label>
                      <Input
                        type="select"
                        name="select"
                        id="exampleSelect"
                        className="input100"
                      >
                        <option>married</option>
                        <option>unmarried</option>
                      </Input>
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleDate">Date OF Birth</Label>
                      <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleDate">Date Of Joining</Label>
                      <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Current Address</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Staff Id"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Permanent Address</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Staff Id"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">
                        Educational Qualification
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Staff Id"
                        className="input100"
                      />
                      <span class="focus-input100"></span>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="wrap-input100 rs1-wrap-input100">
                      <Label for="exampleEmail">Permanent Address</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Staff Id"
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
    </div>
  ),
};

class Profile extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col xs="12" sm="4">
            <Card>
              <div className="cardtitle">Total</div>
              <CardBody>
                <Doughnut
                  data={data}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    cutoutPercentage: 50,
                  }}
                  legend={{
                    position: "bottom",
                  }}
                />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="4">
            <Card>
              <div className="cardtitle">Teaching</div>
              <CardBody>
                <Doughnut
                  data={data}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    cutoutPercentage: 50,
                  }}
                  legend={{
                    position: "bottom",
                  }}
                />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="4">
            <Card>
              <div className="cardtitle">Non Teaching</div>
              <CardBody>
                <Doughnut
                  data={data}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    cutoutPercentage: 50,
                  }}
                  legend={{
                    position: "bottom",
                  }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs="12" sm="3">
            <InputGroup>
              <Input />
              {/* <InputGroupAddon addonType="append">
<FontAwesomeIcon icon={faFileExcel} className="font-icon" />
</InputGroupAddon> */}
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  {" "}
                  <FontAwesomeIcon icon={faSearch} className="font-icon" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>

          <Col xs="12" sm="3">
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option>Level</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>

          <Col xs="12" sm="3">
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option>Designation</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>

          <Col xs="12" sm="3">
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
                <option>Role</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="table-responsive mt-2 card-box">
              <Row className="float-right">
                <div className="clearfix mr-3">
                  <span>
                    <button className="btn btn-success  b1">
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        style={{ fontSize: 30 }}
                      />
                    </button>
                    <span className="btext">Download Pdf</span>
                  </span>
                  <span>
                    <button className="btn btn-info b2">
                      <FontAwesomeIcon
                        icon={faFileSpreadsheet}
                        style={{ fontSize: 30 }}
                      />
                    </button>
                    <span className="btext">Download XL</span>
                  </span>
                </div>
              </Row>
              <Table className="table lhead table-borderless custom_table ">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Employee Name</th>
                    <th>Employee Code</th>
                    <th>Level</th>
                    <th>Designation</th>
                    <th>Role</th>
                    <th>Contact Name</th>
                    <th>Mobile No</th>
                    <th>Relationship </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <img
                        src="https://ik.imagekit.io/demo/img/smart_crop_blog/test_image_9_By_lQN-WE.jpeg?tr=w-200,h-200,fo-face:r-max"
                        style={{ width: 45, height: 45 }}
                      />
                      <span className="ml-1">Yasasvi jeiswal</span>
                    </td>
                    <td>R40</td>
                    <td>II</td>
                    <td>Teacher</td>
                    <td>Teacher</td>
                    <td>Steven Smith</td>
                    <td>Mobile NO</td>
                    <td>Brother</td>
                    <td>
                      <div className="table-icons">
                        <a>
                          <FontAwesomeIcon
                            icon={faPencil}
                            className="mr-2 font-icons"
                          />
                        </a>
                        <a>
                          <FontAwesomeIcon
                            icon={faEye}
                            className="mr-2 font-icons"
                          />
                        </a>
                        <a>
                          <FontAwesomeIcon
                            icon={faUserPlus}
                            className="mr-2 font-icons"
                          />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <img
                        src="https://ik.imagekit.io/demo/img/smart_crop_blog/test_image_9_By_lQN-WE.jpeg?tr=w-200,h-200,fo-face:r-max"
                        style={{ width: 45, height: 45 }}
                      />
                      <span className="ml-1">Yasasvi jeiswal</span>
                    </td>
                    <td>R40</td>
                    <td>II</td>
                    <td>Teacher</td>
                    <td>Teacher</td>
                    <td>Steven Smith</td>
                    <td>Mobile NO</td>
                    <td>Brother</td>
                    <td>
                      <div className="table-icons">
                        <a>
                          <FontAwesomeIcon
                            icon={faPencil}
                            className="mr-2 font-icons"
                          />
                        </a>
                        <a>
                          <FontAwesomeIcon
                            icon={faEye}
                            className="mr-2 font-icons"
                          />
                        </a>
                        <a>
                          <FontAwesomeIcon
                            icon={faUserPlus}
                            className="mr-2 font-icons"
                          />
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="card-box">
              <BootstrapTable
                keyField="id"
                data={products}
                columns={columns}
                expandRow={expandRow}
                className="table custom_table"
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
