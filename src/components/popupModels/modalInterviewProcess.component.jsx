import React, { useEffect, useState } from "react";
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
  CardHeader,
  CardTitle,
  CardBody,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import {
  faEye,
  faTrash,
  faPencil,
  faPlus,
  faLocationArrow,
  faUniversity
} from "@fortawesome/pro-duotone-svg-icons";
import { Plus } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModelInterviewProcess = ({
  modal,
  setModal,
  toggle,
  process,
  setProcess,
  createInterviewProcess,
}) => {
  const [round, setRound] = useState({
    id: "",
    name: "",
    duration: "",
    description: "",
    totalMark: "",
    cutOff: "",
  });

  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nRoundsCount = process.rounds.length;

    if (nRoundsCount <= 0) {
      const isTrue = window.confirm(
        `No rounds found. Are you sure you want to create interview process?`
      );
      if (isTrue) {
        setProcess({ ...process, noOfRounds: nRoundsCount });
        console.log(process);

        createInterviewProcess();
      }
    } else {
      setProcess({ ...process, noOfRounds: nRoundsCount });
      console.log(process);

      createInterviewProcess();
    }
  };

  const handleRoundSubmit = (e) => {
    if (
      // round.id &&
      round.name &&
      round.duration &&
      round.description &&
      round.totalMark &&
      round.cutOff
    ) {
      const nRounds = process.rounds;
      round.id = process.rounds.length + 1;
      nRounds.push(round);
      setProcess({ ...process, rounds: nRounds });
      resetRound();
      setIsCreate(false);
      setIsUpdate(false);
    } else {
      alert("Some round important fields are missing");
    }
  };

  const handleProcessChange = (e) => {
    const { value, name } = e.target;
    setProcess({ ...process, [name]: value });
  };

  const handleRoundChange = (e) => {
    const { value, name } = e.target;
    setRound({ ...round, [name]: value });
  };

  const handleRoundEdit = (index) => {
    if (editIndex) {
      return;
    }
    console.log("Inside handleEvents");
    setEditIndex(index);
    setRound(process.rounds[index]);
    setIsCreate(true);
    setIsUpdate(true);
  };

  const handleRoundUpdate = () => {
    const nRounds = process.rounds;
    nRounds[editIndex] = round;
    setProcess({ ...process, rounds: nRounds });
    setIsCreate(false);
    setEditIndex(null);
    setIsUpdate(false);
    resetRound();
  };

  const handleRoundDelete = (index) => {
    const isTrue = window.confirm("Are you sure you want to delete?");
    if (isTrue) {
      const nRounds = process.rounds;
      nRounds.splice(index, 1);
      setProcess({ ...process, rounds: nRounds });
    }
  };

  const resetProcess = () => {
    setProcess({
      processId: "",
      processName: "",
      noOfRounds: 0,
      rounds: [],
    });
  };

  const resetRound = () => {
    setRound({
      id: "",
      name: "",
      duration: "",
      description: "",
      totalMark: "",
      cutOff: "",
    });
  };

  const handleCreate = () => {
    resetProcess();
    toggle();
  };

  return (
    <div>
     <div className="create_employee_btn_div">
      <Button className="mr-1" color="primary" onClick={handleCreate} outline>
      <Row>
          <Col sm='3'>
          <FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: 15, color: "#fd868c " }}
                />
          </Col>
          <Col sm='9'>
          Create 
          </Col>
          </Row>
      </Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Create Interview Process</ModalHeader>
        <ModalBody>
          <div>
            <Form onSubmit={handleFormSubmit}>
              <Row>
                <Col sm="12">
                <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
                General Details
              </CardTitle>
                </Col>
                <Col sm="12">
                  <Label for="processId">Process Id</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="processId"
                      id="processId"
                      value={process.processId}
                      onChange={handleProcessChange}
                      placeholder="Process Id"
                      required
                    />
                  </FormGroup>
                </Col>

                <Col sm="12">
                  <Label for="processName">Process Name</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      name="processName"
                      id="processName"
                      value={process.processName}
                      onChange={handleProcessChange}
                      required
                      placeholder="Process Name"
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                <CardTitle style={{ color: "#fd868c" }}>
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="mr-2"
                  style={{ fontSize: 16, color: "gray" }}
                />
Interview Rounds Configuration              </CardTitle>
                  
                </Col>
                <Col sm="12">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Duration (in minutes)</th>
                        <th>Total Marks</th>
                        <th>Cut-off Mark</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {process.rounds.map((data, index) => (
                        <tr key={index}>
                          <td>{data.id}</td>
                          <td>{data.name}</td>
                          <td>{data.description}</td>
                          <td>{data.duration}</td>
                          <td>{data.totalMark}</td>
                          <td>{data.cutOff}</td>
                          <td>
                            <FontAwesomeIcon
                              icon={faPencil}
                              onClick={() => handleRoundEdit(index)}
                              className="mr-2"
                              style={{ fontSize: 16, color: "gray" }}
                            />
                            <FontAwesomeIcon
                              icon={faTrash}
                              onClick={() => handleRoundDelete(index)}
                              className="mr-2"
                              style={{ fontSize: 16, color: "gray" }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
                <Col sm="12">
                  <Card>
                    {!isCreate ? (
                      <CardHeader>
                        <Button
                          color="success"
                          type="button"
                          onClick={() => setIsCreate(true)}
                        >
                          Add new round
                        </Button>
                      </CardHeader>
                    ) : (
                      <CardBody>
                        <Row>
                          {/* <Col sm="6">
                            <Label for="roundNumber">Round Number</Label>

                            <Input
                              type="number"
                              name="id"
                              id="roundNumber"
                              value={process.rounds.length + 1}
                              onChange={handleRoundChange}
                              placeholder="Round Number"
                            />
                          </Col> */}

                          <Col sm="6">
                            <Label for="roundName">Round Name</Label>

                            <Input
                              type="text"
                              name="name"
                              id="roundName"
                              value={round.name}
                              onChange={handleRoundChange}
                              placeholder="Round Name"
                            />
                          </Col>

                          <Col sm="6">
                            <Label for="roundDescription">Description</Label>

                            <Input
                              type="textarea"
                              name="description"
                              id="roundDescription"
                              value={round.description}
                              onChange={handleRoundChange}
                              placeholder="Description"
                            />
                          </Col>

                          <Col sm="6">
                            <Label for="roundDuration">
                              Duration (in mins)
                            </Label>

                            <Input
                              type="number"
                              name="duration"
                              id="roundDuration"
                              value={round.duration}
                              onChange={handleRoundChange}
                              placeholder="Duration (in mins)"
                            />
                          </Col>

                          <Col sm="6">
                            <Label for="totalMark">Total Marks</Label>

                            <Input
                              type="number"
                              name="totalMark"
                              id="totalMark"
                              value={round.totalMark}
                              onChange={handleRoundChange}
                              placeholder="Total Marks"
                            />
                          </Col>

                          <Col sm="6">
                            <Label for="cutOff">Cut off</Label>

                            <Input
                              type="number"
                              name="cutOff"
                              id="cutOff"
                              value={round.cutOff}
                              onChange={handleRoundChange}
                              placeholder="Cut off"
                            />
                          </Col>
                        </Row>
                      <div style={{display:'flex', marginTop:'20px'}}>
                        <div><Button
                          type="button"
                          color='danger'
                          onClick={() => {
                            setIsCreate(false);
                            setIsUpdate(false);
                            setEditIndex(null);
                            resetRound();
                          }}
                        >
                          Cancel
                        </Button></div>
                      
                        <div style={{marginLeft:'12px'}}>
                        {isUpdate ? (
                          <Button
                            color="success"
                            type="button"
                            onClick={handleRoundUpdate}
                          >
                            Update round
                          </Button>
                        ) : (
                          <Button
                            color="success"
                            type="button"
                            onClick={handleRoundSubmit}
                          >
                            Add round
                          </Button>
                        )}
                        </div>
                        </div>
                      </CardBody>
                    )}
                  </Card>
                </Col>
                <Col sm="12">
                <div className='settings_department_div'> 
                  <div className='settings_department_div_cancel' ><Button
                  color='danger'
                    type="button"
                    onClick={() => {
                      resetProcess();
                      setModal(false);
                    }}
                    style={{height:'45px'}}
                  >
                    Cancel
                  </Button></div>
               
                  

                  {process._id ? (
                    <Button color="success" type="submit" color='success' >
                      Update interview process
                      <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 20, color: "white ", position:'relative',left:'12px',top:'3px' }}
                />
                    </Button>
                  ) : (
                    <Button color="success" type="submit" color='success'>
                      Create interview process
                      <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 20, color: "white ", position:'relative',left:'12px',top:'3px' }}
                />
                    </Button>
                  )}
                   </div>
                </Col>
              </Row>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModelInterviewProcess;
