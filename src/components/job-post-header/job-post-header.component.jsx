import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import JOB_POSTS from "../../assets/sample-data/jobPosts";
import Chip from "../../components/@vuexy/chips/ChipComponent";
import { withRouter } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

import "./job-post-header.styles.scss";
import {
  jobPostDetails,
  obtainJobPost,
} from "../../actions/jobApplicationActions";

const JobPostHeader = ({ match }) => {
  const [generalDetails, setGeneralDetails] = useState({
    positionTitle: "",
    noOfOpenings: 0,
    noOfApplications: 0,
    noOfRejections: 0,
    noOfHirings: 0,
    noOfShortlists: 0,
    noOfAddToEmployee: 0,
  });

  useEffect(() => {
    jobPostDetails(match.params.id, setGeneralDetails, generalDetails);
    return () => {};
  }, []);

  return (
    <div>
      <div className="jobPostHeaderHeading">
        <h1>Job post directory</h1>
      </div>
      <hr></hr>
      <div className="jobPostHeader">
        <div className="head">
          <Row>
            <Col sm="6">
              <Row>
                <Col sm="6">
                  <h1 className="title">Position Title</h1>
                </Col>
                <Col sm="6">
                  <h1>{generalDetails.positionTitle}</h1>
                </Col>
                <Col sm="6">
                  <h1 className="title">Job post Status</h1>
                </Col>
                <Col sm="6">
                  {generalDetails.noOfAddToEmployee >=
                  generalDetails.noOfOpenings ? (
                    <Chip color="danger" text="Closed"></Chip>
                  ) : (
                    <Chip color="success" text="Open"></Chip>
                  )}
                </Col>
              </Row>
            </Col>
            <Col sm="6">
              <Row>
                <Col sm="6">
                  <h1 className="title">Total applications</h1>
                </Col>
                <Col sm="6">
                  <h1>
                    {generalDetails.noOfApplications +
                      generalDetails.noOfRejections +
                      generalDetails.noOfHirings +
                      generalDetails.noOfShortlists ===
                    ""
                      ? 0
                      : generalDetails.noOfApplications +
                        generalDetails.noOfRejections +
                        generalDetails.noOfHirings +
                        generalDetails.noOfShortlists}
                  </h1>
                </Col>
                <Col sm="6">
                  <h1 className="title">Total Shortlists</h1>
                </Col>
                <Col sm="6">
                  <h1>
                    {generalDetails.noOfShortlists === ""
                      ? 0
                      : generalDetails.noOfShortlists}
                  </h1>
                </Col>
                <Col sm="6">
                  <h1 className="title">Total Hirings</h1>
                </Col>
                <Col sm="6">
                  <h1>
                    {generalDetails.noOfAddToEmployee === ""
                      ? 0
                      : generalDetails.noOfAddToEmployee}
                    /{generalDetails.noOfOpenings}
                  </h1>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* <div className="body">
          <Row>
            <Col sm="4">
              <Card>
                <CardHeader>
                  <h1 className="cardHeading">General Info</h1>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col sm="6">
                      <h1 className="title">No. of Openings</h1>
                    </Col>
                    <Col sm="6">
                      <h1>5</h1>
                    </Col>
                    <Col sm="6">
                      <h1 className="title">CTC</h1>
                    </Col>
                    <Col sm="6">
                      <h1>Not disclosed</h1>
                    </Col>
                    <Col sm="6">
                      <h1 className="title">Hiring type</h1>
                    </Col>
                    <Col sm="6">
                      <h1>Experienced</h1>
                    </Col>
                    <Col sm="6">
                      <Row>
                        <Col sm="6">
                          <h1 className="title">Min. years</h1>
                        </Col>
                        <Col sm="6">
                          <h1>1</h1>
                        </Col>
                      </Row>
                    </Col>

                    <Col sm="6">
                      <Row>
                        <Col sm="6">
                          <h1 className="title">Max. years</h1>
                        </Col>
                        <Col sm="6">
                          <h1>3</h1>
                        </Col>
                      </Row>
                    </Col>

                    <Col sm="6">
                      <h1 className="title">Institution</h1>
                    </Col>
                    <Col sm="6">
                      <h1>Everwin Group of Schools</h1>
                    </Col>

                    <Col sm="6">
                      <h1 className="title">Branch</h1>
                    </Col>
                    <Col sm="6">
                      <h1>Kolathur</h1>
                    </Col>
                    <Col sm="12">
                      <Button color="primary">View more info</Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <CardHeader>
                  <h1 className="cardHeading">Educational Qualifications</h1>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col sm="6">
                      <h1 className="title">UG</h1>
                    </Col>
                    <Col sm="6">
                      <h1>BSc. Mathematics</h1>
                    </Col>
                    <Col sm="6">
                      <h1 className="title">PG</h1>
                    </Col>
                    <Col sm="6">
                      <h1>MSc. Mathematics</h1>
                    </Col>
                    <Col sm="6">
                      <h1 className="title">Major</h1>
                    </Col>
                    <Col sm="6">
                      <h1>Mathematics</h1>
                    </Col>
                    <Col sm="12">
                      <h1 className="title">Skill tags</h1>
                      <ChipInput
                        id="skillTags"
                        defaultValue={[
                          "Teaching",
                          "Extra-curricular",
                          "Basic-computer",
                        ]}
                        fullWidth
                        disabled
                        variant="outlined"
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <CardHeader>
                  <h1 className="cardHeading">Interview Process</h1>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col sm="6">
                      <h1 className="title">Interview Process Id</h1>
                    </Col>
                    <Col sm="6">
                      <h1>TEA-GRADE-II</h1>
                    </Col>
                    <Col sm="6">
                      <h1 className="title">Total Rounds</h1>
                    </Col>
                    <Col sm="6">
                      <h1>3</h1>
                    </Col>
                    <Col sm="12">
                      <Button color="primary">View interview Process</Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div> */}
      </div>
    </div>
  );
};

export default withRouter(JobPostHeader);
