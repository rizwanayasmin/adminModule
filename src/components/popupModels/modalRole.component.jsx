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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faSearchLocation,
  faUniversity,
  faPlus,
  faLocationArrow
} from "@fortawesome/pro-duotone-svg-icons";

const ModalRole = ({
  isRoleCreateActive,
  roleToggle,
  handleCreateRole,
  resetRoleState,
  isRoleModelOpen,
  role,
  setRole,
  createRole,
}) => {
  const handleRoleId = (e) => {
    setRole({ ...role, id: e.target.value });
  };

  return (
    <div>
        <div className="create_employee_btn_div">
      <Button className="mr-1" color="primary" onClick={createRole} outline>
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
      <Modal isOpen={isRoleCreateActive} toggle={roleToggle} size="lg">
        <ModalHeader toggle={roleToggle}>Create role</ModalHeader>
        <ModalBody>
          <div>
            <form onSubmit={handleCreateRole}>
              <Row>
                <Col sm="12">
                  <Input
                    type="text"
                    name="id"
                    id="exampleEmail"
                    value={role.id}
                    placeholder="Enter role name"
                    onChange={handleRoleId}
                    required
                  />
                </Col>
              </Row>
            <div className='settings_department_div'>
              <div className='settings_department_div_cancel'><Button type="button" color='danger' onClick={resetRoleState} style={{height:'45px'}}>
                Cancel
              </Button></div>
          
              
              {isRoleModelOpen ? (
                <Button color="success" type="submit">
                  Update role
                  <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 20, color: "white ", position:'relative',left:'12px',top:'3px' }}
                />
                </Button>
              ) : (
                <Button color="success" type="submit">
                  Create role
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

export default ModalRole;
