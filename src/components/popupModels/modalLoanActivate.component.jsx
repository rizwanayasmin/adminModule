import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileSpreadsheet } from "@fortawesome/pro-solid-svg-icons";
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
  Pagination,
  PaginationItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  PaginationLink,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledButtonDropdown,
} from "reactstrap";
import { faEye, faTrash, faPencil } from "@fortawesome/pro-duotone-svg-icons";
import {
  ChevronsLeft,
  ChevronsRight,
  Plus,
  User,
  Search,
  ChevronDown,
  Check,
  AlertTriangle,
} from "react-feather";

const LoanActivateModel = ({
  modal,
  toggle,
  loanSetting,
  setLoanSetting,
  handleLoanUpload,
}) => {
  useEffect(() => {}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanSetting({ ...loanSetting, [name]: value });
  };

  const handleActivate = () => {
    handleLoanUpload();
  };

  return (
    <div>
      <Button className="mr-1" color="primary" onClick={toggle} outline>
        <Plus size={15} />
        Activate loan
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Activate loan</ModalHeader>
        <ModalBody>
          <div>
            <Row>
              <Col sm="6">
                <Label htmlFor="Amount">Amount</Label>
                <Input
                  id="Amount"
                  type="number"
                  value={loanSetting.amount}
                  onChange={handleChange}
                  name="amount"
                ></Input>
              </Col>
              <Col sm="6">
                <Label htmlFor="period">Period</Label>
                <Input
                  id="period"
                  type="number"
                  value={loanSetting.period}
                  onChange={handleChange}
                  name="period"
                ></Input>
              </Col>
              <Col sm="6">
                <Label htmlFor="maxNPPeriod">Max. Non-payable period</Label>
                <Input
                  id="maxNPPeriod"
                  type="number"
                  name="maxNPPeriod"
                  value={loanSetting.maxNPPeriod}
                  onChange={handleChange}
                ></Input>
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleActivate}>
            Activate loan
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LoanActivateModel;
