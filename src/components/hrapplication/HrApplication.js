import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faFilePdf,
  faFileSpreadsheet,
  faPencil,
} from "@fortawesome/pro-solid-svg-icons";
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

class HrApplication extends Component {
  render() {
    return (
      <div className="container-fluid">
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
                    <th>Date</th>
                    <th>Job</th>
                    <th>Level</th>
                    <th>Subject</th>
                    <th>Vacancy</th>
                    <th>Canditates</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>30th Oct 2020</td>
                    <td>Teacher</td>
                    <td>II</td>
                    <td>Mathematics</td>
                    <td>2</td>
                    <td>20</td>
                    <td>Open </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>7th Nov 2020</td>
                    <td>Teacher</td>
                    <td>II</td>
                    <td>Mathematics</td>
                    <td>2</td>
                    <td>20</td>
                    <td>Open</td>
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

export default HrApplication;
