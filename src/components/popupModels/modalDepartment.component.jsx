import React from "react";
import { Plus } from "react-feather";
import {
  Row,
  Col,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import './instituteModal.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faSearchLocation,
  faUniversity,
  faPlus
  ,faLocationArrow
} from "@fortawesome/pro-duotone-svg-icons";

const ModalDepartment = ({
  modal,
  toggle,
  handleCreateDept,
  resetState,
  dept,
  isModelOpen,
  setDept,
  createDept,
}) => {
  const handleId = (e) => {
    setDept({ ...dept, id: e.target.value });
  };

  return (
    <div>
        <div className="create_employee_btn_div">
      <Button className="mr-1" color="primary" onClick={createDept} outline>
      
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
        <ModalHeader toggle={toggle}>Create department</ModalHeader>
        <ModalBody>
          <div>
            <form onSubmit={handleCreateDept}>
              <Row>
                <Col sm="12">
                  <Input
                    type="text"
                    name="id"
                    id="exampleEmail"
                    value={dept.id}
                    placeholder="Enter Department name"
                    onChange={handleId}
                    required
                  />
                </Col>
              </Row>
            <div className='settings_department_div'>
              <div className='settings_department_div_cancel'><Button type="button" onClick={resetState} color='danger' style={{height:'45px'}}>
                Cancel
              </Button></div>
              {isModelOpen ? (
                <Button color="success" type="submit">
                  Update Department
                  <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 20, color: "white ", position:'relative',left:'12px',top:'3px' }}
                />
                </Button>
              ) : (
                <Button color="success" type="submit" color='success'>
                  Create department
                  <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 20, color: "white ", position:'relative',left:'12px',top:'3px' }}
                />
                </Button>
              )}
              </div>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalDepartment;
