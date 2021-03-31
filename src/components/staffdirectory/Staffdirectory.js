import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faFileSpreadsheet,
  faPencil,
} from "@fortawesome/pro-solid-svg-icons";
import {
  faEye,
  faSearch,
  faPrint,
  faArrowDown,
  faCheckDouble,
  faTrash,
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
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import StarRatings from "react-star-ratings";

class Staffdirectory extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="card-box pt-3 pb-3">
          <Row>
            <Col sm="4">
              <FormGroup>
                <InputGroup style={{ marginTop: 30 }}>
                  <Input />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      {" "}
                      <FontAwesomeIcon icon={faSearch} className="font-icon" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>

            <Col sm="4">
              <FormGroup>
                <Label for="exampleSelect">Designation *</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>

            <Col sm="4">
              <FormGroup>
                <Label for="exampleSelect">Department *</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </div>

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
                    <th>Employee No</th>
                    <th>Employee Name</th>
                    <th>Designation</th>
                    <th>Mobile No</th>
                    <th>Rating</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Employee No</td>
                    <td>Employee Name</td>
                    <td>Designation</td>
                    <td>Mobile No</td>
                    <td>
                      <div>
                        <StarRatings
                          rating={2.403}
                          starRatedColor="#F7CA18"
                          numberOfStars={5}
                          starDimension="25px"
                          starSpacing="10px"
                        />
                      </div>
                    </td>

                    <td>
                      <div className="table-icons">
                        <a>
                          <FontAwesomeIcon
                            icon={faPencil}
                            className="mr-2 font-icon"
                          />
                        </a>
                        <a>
                          <FontAwesomeIcon
                            icon={faEye}
                            className="mr-2 font-icon"
                          />
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Employee No</td>
                    <td>Employee Name</td>
                    <td>Designation</td>
                    <td>Mobile No</td>
                    <td>
                      <div>
                        <StarRatings
                          rating={2.403}
                          starRatedColor="#F7CA18"
                          numberOfStars={5}
                          starDimension="25px"
                          starSpacing="10px"
                        />
                      </div>
                    </td>

                    <td>
                      <div className="table-icons">
                        <a>
                          <FontAwesomeIcon
                            icon={faPencil}
                            className="mr-2 font-icon"
                          />
                        </a>
                        <a>
                          <FontAwesomeIcon
                            icon={faEye}
                            className="mr-2 font-icon"
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
      </div>
    );
  }
}

export default Staffdirectory;
