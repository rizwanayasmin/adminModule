import React from "react";

import { Row, Col, Form, Label } from "reactstrap";

const ExpandableTable = ({ data }) => {
  return (
    <div>
      <Form>
        <Row>
          <Col sm="12">
            <h1>General details</h1>
          </Col>

          <Col sm="6">
            <Row>
              <Col sm="6">
                <p>Designation Id</p>
              </Col>
              <Col sm="6">
                <p>{data.id} </p>
              </Col>
            </Row>
          </Col>

          <Col sm="6">
            <Row>
              <Col sm="6">
                <p>Designation Name</p>
              </Col>
              <Col sm="6">
                <p>{data.designationName} </p>
              </Col>
            </Row>
          </Col>

          <Col sm="6">
            <Row>
              <Col sm="6">
                <p>Designation Role</p>
              </Col>
              <Col sm="6">
                <p>{data.designationRole} </p>
              </Col>
            </Row>
          </Col>

          <Col sm="6">
            <Row>
              <Col sm="6">
                <p>Department</p>
              </Col>
              <Col sm="6">
                <p>{data.departmentId} </p>
              </Col>
            </Row>
          </Col>

          <Col sm="12">
            <Label for="nameVerticalIcons">
              <h1>Experience</h1>
            </Label>
          </Col>

          <Col sm="12">
            {data.experienceCatagory.isExperienced ? (
              <Row>
                <Col sm="6">
                  <p>
                    <input
                      type="checkbox"
                      checked={true}
                      onChange={() => {}}
                      id="experienced"
                    ></input>
                  </p>
                  <p>Experienced</p>
                </Col>
                <Col sm="3">
                  <p>Minimum year</p>
                  <p>{data.experienceCatagory.minYear}</p>
                </Col>
                <Col sm="3">
                  <p>Maximum year</p>
                  <p>{data.experienceCatagory.maxYear}</p>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col sm="6">
                  <p>
                    <input
                      type="checkbox"
                      checked={true}
                      id="experienced"
                      onChange={() => {}}
                    ></input>
                  </p>
                  <p>Fresher</p>
                </Col>
              </Row>
            )}
          </Col>

          <Col sm="12">
            <h1>Loan Eligibility</h1>
          </Col>

          <Col sm="12">
            <Row>
              {data.loanEligibility.isCTCPercentage ? (
                <Row>
                  <Col sm="3">
                    <p>Percentage of loan from CTC</p>
                  </Col>
                  <Col sm="3">
                    <p>{data.loanEligibility.percentage}%</p>
                  </Col>
                  <Col sm="3">
                    <p>Payment from </p>
                  </Col>
                  <Col sm="3">
                    <p>
                      {data.loanEligibility.isYearly ? "Yearly" : "Monthly"}
                    </p>
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col sm="3">
                    <p>Amount</p>
                  </Col>
                  <Col sm="3">
                    <p>{data.loanEligibility.amount}</p>
                  </Col>
                </Row>
              )}
              {/* <Row> */}
              <Col sm="3">
                <p>Max non-payable period</p>
              </Col>
              <Col sm="3">
                <p>{data.loanEligibility.maxNPTime}</p>
              </Col>
              <Col sm="3">
                <p>Total period</p>
              </Col>
              <Col sm="3">
                <p>{data.loanEligibility.period}</p>
              </Col>
              {/* </Row> */}
            </Row>
          </Col>

          <Col sm="12">
            <h1>Leave policy</h1>
          </Col>

          <Col sm="6">
            <Row>
              <Col sm="6">
                <p>Policy Id</p>
              </Col>
              <Col sm="6">
                <p>{data.leavePolicyId}</p>
              </Col>
            </Row>
          </Col>

          <Col sm="12">
            <h1>Payroll policy</h1>
          </Col>
          <Col sm="6">
            <Row>
              <Col sm="6">
                <p>Policy Id</p>
              </Col>
              <Col sm="6">
                <p>{data.payrollId}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ExpandableTable;
