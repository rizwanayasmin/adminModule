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
import { payLoanAmountForATeacher } from "../../actions/teacherActions";
import {  Tooltip } from 'reactstrap'


const LoanPaymentModal = ({ profileId, balanceAmount }) => {
  //   console.log({ profileId });
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [tooltipOpen, setTooltipOpen] = useState(false)


  const toggle = () => {
    setModal(!modal);
  };
  useEffect(() => {}, []);

  const handleChange = (e) => {
    const { value } = e.target;
    // console.log(typeof value);
    setAmount(value);
  };

  const handleMakePayment = (teacherId, amount) => {
    if (amount !== "" || amount === "0")
      payLoanAmountForATeacher(teacherId, amount);
    setAmount("");
    toggle();
  };

  return (
    <div>
      <div  style={{display:'flex',alignItem:'center',justifyContent:'space-between'}}> 
        {/* <Button className="mr-1" color="primary" onClick={toggle} outline> */}
        {/* <Row>
          <Col sm='3'> */}
         
          <FontAwesomeIcon
                  icon={faPencil}
                  style={{ fontSize: 15, color: "#fd868c " }}
                  onClick={toggle}
                />
          
               
          {/* </Col>
          <Col sm='9'> */}
          {/* <h6>Payment</h6> */}
          {/* </Col>
          </Row> */}
      {/* </Button> */}
      </div>
      
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Loan payment</ModalHeader>
        <ModalBody>
          <div>
            <Row>
              <Col sm="6">
                <p>Balance amount: {balanceAmount}</p>
              </Col>
              <Col sm="6">
                <Label htmlFor="Amount">Amount</Label>
                {/* <Input
                  id="Amount"
                  type="number"
                  name="amount"
                  pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" value="" data-type="currency" placeholder="$1,000,000.00"
                  value={amount}
                  onChange={handleChange}
                ></Input> */}
                <Input type="text" 
                name="currency-field"
                 id="currency-field" pattern="^\&#8377\d{1,3}(,\d{3})*(\.\d+)?$"
                 value={amount}
                  onChange={handleChange}
                  data-type="currency" 
                  placeholder="$1,000,000.00"></Input>
                  {/* <p> {{ bid | currency:'&#8377;' }} </p> */}
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => handleMakePayment(profileId, amount)}
          >
            Make payment
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LoanPaymentModal;
