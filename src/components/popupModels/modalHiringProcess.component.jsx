import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  Modal,
  Form,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const ModalHiring = ({
  modal,
  setModal,
  toggle,
  popupData,
  setPopupData,
  updateCandidate,
}) => {
  const handleChange = (e) => {
    const { value, name } = e.target;
    setPopupData({ ...popupData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(popupData);
    updateCandidate();
    resetData();
  };

  const handleCancel = () => {
    resetData();
    setModal(false);
  };

  const resetData = () => {
    setPopupData({
      acceptedCTC: 0,
      dataOfJoining: "",
      finalComment: "",
    });
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Update candidate profile</ModalHeader>
        <ModalBody>
          <div>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm="12">
                  <Label for="doj">Date of joining</Label>
                  <FormGroup>
                    <Input
                      type="date"
                      name="dateOfJoining"
                      id="doj"
                      placeholder="Date of joining"
                      onChange={handleChange}
                      value={
                        popupData.dateOfJoining
                          ? new Date(popupData.dateOfJoining)
                              .toISOString()
                              .split("T")[0]
                          : null
                      }
                    />
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="acceptedCTC">Accepted CTC</Label>
                  <FormGroup>
                    <Input
                      type="number"
                      name="acceptedCTC"
                      id="acceptedCTC"
                      onChange={handleChange}
                      placeholder="Process Id"
                      value={popupData.acceptedCTC ? popupData.acceptedCTC : 0}
                    />
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="finalComment">Comment</Label>
                  <FormGroup>
                    <textarea
                      type="text"
                      name="finalComment"
                      id="finalComment"
                      onChange={handleChange}
                      placeholder="Process Id"
                      value={
                        popupData.finalComment ? popupData.finalComment : ""
                      }
                    />
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Button type="button" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button type="submit" color="success">
                    Update
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalHiring;
