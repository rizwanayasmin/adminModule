import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileSpreadsheet } from "@fortawesome/pro-solid-svg-icons";
import {
  faArrowRight,
  faUserGraduate,
  faArrowUp,
  faEye,
  faTrash,
  faPencil,
} from "@fortawesome/pro-duotone-svg-icons";
import {
  Row,
  Col,
  Button,
  Media,
  FormGroup,
  Label,
  Input,
  Progress,
  Table,
} from "reactstrap";
import {
  Doughnut,
  Line,
  Bar,
  Polar,
  Pie,
  HorizontalBar,
} from "react-chartjs-2";
import StarRatings from "react-star-ratings";

const dataline = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const data = {
  labels: ["Principal", "Teacher", "Parent"],
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

class Survey extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Row className="pb-2">
          <Col>
            <Button className="mt-2 btn-success float-right">
              <FontAwesomeIcon icon={faArrowRight} className="mr-2 font-icon" />
              Take Survey
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <div className="card-box mt-2 mb-2 pb-3 pt-3">
              <p>eNPS Score</p>
              <Line
                data={dataline}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  cutoutPercentage: 50,
                }}
                legend={{
                  position: "bottom",
                }}
              />
            </div>
          </Col>

          <Col sm="6">
            <div className="card-box mt-2 mb-2 pb-3 pt-3">
              <p>Respondance</p>
              <Bar
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
            </div>
          </Col>
        </Row>

        <div
          className="card mt-2"
          style={{ backgroundColor: "#f5f5f5", borderRadius: 10 }}
        >
          {/* <Row className="m-2">
<Col sm="6"><h6 className="text-center" style={{marginTop:7}}>Survey</h6>
</Col>
<Col sm="4"><h6 className="text-center" style={{marginTop:7}}>Results</h6></Col>
<Col sm="2">
<div className="table-icons">
<a><FontAwesomeIcon icon={faPencil} className="mr-2 font-icons" /></a>
<a><FontAwesomeIcon icon={faEye} className="mr-2 font-icons" /></a>
<a><FontAwesomeIcon icon={faTrash} className="mr-2 font-icons" /></a>
</div>  
</Col>
</Row> */}

          {/* <Row className="surveyleft m-2 mt-1">
<Col>
<span><h6 style={{fontWeight:'bold',marginTop:10}}> RoleClarity : <span style={{color:'gray',fontWeight:'normal'}}>i have clarity of what is expected of me from job.i have clarity of what is expected of me from job</span></h6></span> 
</Col>
<Col>
<Row>
<Col sm="10">
<Progress multi style={{marginTop:20}}>
<Progress bar value="15" />
<Progress bar color="success" value="30" />
<Progress bar color="info" value="25" />
<Progress bar color="warning" value="20" />
<Progress bar color="danger" value="5" />
</Progress>

</Col>
<Col sm="2">
<a ><FontAwesomeIcon icon={faArrowUp} className="mr-2 font-icon" style={{marginTop:20}}/><span style={{marginTop:20}}>2.5</span></a>
</Col>
</Row>

</Col>
</Row> */}

          <div className="table-responsive">
            <Table className="table lhead table-borderless custom_table ">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Survey Name </th>
                  <th>Audience</th>
                  <th>Results</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>14th Nov 2020</td>
                  <td>Clarity</td>
                  <td>Parent</td>
                  <td>
                    <Progress multi style={{ marginTop: 5 }}>
                      <Progress bar value="15" />
                      <Progress bar color="success" value="30" />
                      <Progress bar color="info" value="25" />
                      <Progress bar color="warning" value="20" />
                      <Progress bar color="danger" value="5" />
                    </Progress>
                  </td>
                  <td>
                    <div className="table-icons">
                      <a>
                        <FontAwesomeIcon
                          icon={faEye}
                          className="mr-2 font-icons"
                        />
                      </a>
                      <a>
                        <FontAwesomeIcon
                          icon={faPencil}
                          className="mr-2 font-icons"
                        />
                      </a>
                      <a>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="mr-2 font-icons"
                        />
                      </a>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>14th Nov 2020</td>
                  <td>Clarity</td>
                  <td>Parent</td>
                  <td>
                    <Progress multi style={{ marginTop: 5 }}>
                      <Progress bar value="15" />
                      <Progress bar color="success" value="30" />
                      <Progress bar color="info" value="25" />
                      <Progress bar color="warning" value="20" />
                      <Progress bar color="danger" value="5" />
                    </Progress>
                  </td>
                  <td>
                    <div className="table-icons">
                      <a>
                        <FontAwesomeIcon
                          icon={faEye}
                          className="mr-2 font-icons"
                        />
                      </a>
                      <a>
                        <FontAwesomeIcon
                          icon={faPencil}
                          className="mr-2 font-icons"
                        />
                      </a>
                      <a>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="mr-2 font-icons"
                        />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <Row className="mt-2">
          <Col sm="4">
            <div className="card-box mt-2 mb-2 pb-3 pt-3">
              <Media className="mt-1">
                <Media left href="#" className="mt-2">
                  <a>
                    <FontAwesomeIcon
                      icon={faUserGraduate}
                      className="mr-2"
                      style={{ fontSize: 30, color: "#f15c22" }}
                    />
                  </a>
                </Media>
                <Media body className="ml-3">
                  <Media heading>
                    <h6 className="header">Structure Of Policies</h6>
                    <h5 className="ptext">2.2</h5>
                  </Media>
                </Media>
              </Media>
            </div>
          </Col>
          <Col sm="4">
            <div className="card-box mt-2 mb-2 pb-3 pt-3">
              <Media className="mt-1">
                <Media left href="#" className="mt-2">
                  <a>
                    <FontAwesomeIcon
                      icon={faUserGraduate}
                      className="mr-2"
                      style={{ fontSize: 30, color: "#9eb9fd" }}
                    />
                  </a>
                </Media>
                <Media body className="ml-3">
                  <Media heading>
                    <h6 className="header">Values</h6>
                    <h5 className="ptext">2.2</h5>
                  </Media>
                </Media>
              </Media>
            </div>
          </Col>
          <Col sm="4">
            <div className="card-box mt-2 mb-2 pb-3 pt-3">
              <Media className="mt-1">
                <Media left href="#" className="mt-2">
                  <a>
                    <FontAwesomeIcon
                      icon={faUserGraduate}
                      className="mr-2"
                      style={{ fontSize: 30, color: "#ff9da0" }}
                    />
                  </a>
                </Media>
                <Media body className="ml-3">
                  <Media heading>
                    <h6 className="header">Performance Appraisals</h6>
                    <h5 className="ptext">2.2</h5>
                  </Media>
                </Media>
              </Media>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm="4">
            <div className="card-box mt-2 mb-2 pb-3 pt-3">
              <Media className="mt-1">
                <Media left href="#" className="mt-2">
                  <a>
                    <FontAwesomeIcon
                      icon={faUserGraduate}
                      className="mr-2"
                      style={{ fontSize: 30, color: "#ff676f" }}
                    />
                  </a>
                </Media>
                <Media body className="ml-3">
                  <Media heading>
                    <h6 className="header">Role Clarity</h6>
                    <h5 className="ptext">2.2</h5>
                  </Media>
                </Media>
              </Media>
            </div>
          </Col>
          <Col sm="4">
            <div className="card-box mt-2 mb-2 pb-3 pt-3">
              <Media className="mt-1">
                <Media left href="#" className="mt-2">
                  <a>
                    <FontAwesomeIcon
                      icon={faUserGraduate}
                      className="mr-2"
                      style={{ fontSize: 30, color: "#9fbafc" }}
                    />
                  </a>
                </Media>
                <Media body className="ml-3">
                  <Media heading>
                    <h6 className="header">Managerial Relationships</h6>
                    <h5 className="ptext">2.2</h5>
                  </Media>
                </Media>
              </Media>
            </div>
          </Col>
          <Col sm="4">
            <div className="card-box mt-2 mb-2 pb-3 pt-3">
              <Media className="mt-1">
                <Media left href="#" className="mt-2">
                  <a>
                    <FontAwesomeIcon
                      icon={faUserGraduate}
                      className="mr-2"
                      style={{ fontSize: 30, color: "#ffc056" }}
                    />
                  </a>
                </Media>
                <Media body className="ml-3">
                  <Media heading>
                    <h6 className="header">Rewards</h6>
                    <h5 className="ptext">2.2</h5>
                  </Media>
                </Media>
              </Media>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Survey;
