import React, { useState, useEffect } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faTrash, faPencil ,faPlus, faLocationArrow, faFileCsv} from "@fortawesome/pro-duotone-svg-icons";
import {
  ChevronsLeft,
  ChevronsRight,
  Plus,
  User,
  Search,
  ChevronDown,
  Check,
} from "react-feather";
import Select from "react-select";
import { getOrganizationIdFromInstitute } from "../../actions/instituteActions";
import { createTeacher } from "../../actions/teacherActions";
import './feefolder.css'
import general from "../../images/general.png"
import Divider from '@material-ui/core/Divider';


const FeeDownloadModal = ({ modal, toggle }) => {
    const [instituteSelect, setInstituteSelect] = useState("--SELECT--");
  const [designationSelect, setDesignationSelect] = useState("--SELECT--");
  const [data, setData] = useState({
    v_status: 0,
    first_name: "",
    last_name: "",
  });


  const handleCancel = () => {
    setInstituteSelect("--SELECT--");
    setDesignationSelect("--SELECT--");
   
    setData({
      v_status: 0,
      first_name: "",
      last_name: "",
    });
    toggle();
  };
  console.log(modal);
  return (
    <div>
      <div className='create_employee_btn_div'>
      <Button className="mr-1" color="primary" style={{padding:"6px",borderColor:"white"}} outline onClick={handleCancel}>
      <Row>
          <Col sm='3'>
          <FontAwesomeIcon
                  icon={faFileCsv}
                  style={{ fontSize: 20, color: "#78C000 " }}
                />
          </Col>
          <Col sm='3'>
          CSV
          </Col>
          </Row>
      </Button></div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Receipt View
</ModalHeader>
        <ModalBody>
          <div className="fee_download_modal_div">
             <div className="fee_download_title_div_main">
                    <div  className="fee_download_title_div">
                        <h5 className="fee_download_title_content">School Details</h5>
                    </div>
                    <div className="fee_download_modal_logo_main">
                        <div className="fee_download_modal_logo">
                            <div>
                                <img src={general} style={{width:"60px"}}/>
                            </div>
                            <div className="fee_download_modal_logo_content">
                                <h5>Everwin Group Of Schools</h5>
                                <Label>Kolathur</Label>
                            </div>
                        </div>
                        <div>
                            <Label>Date</Label>
                            <h6>3rd Oct 2020</h6>
                        </div>
                    </div>
              </div>

              <div className="fee_download_title_div_main">
                    <div  className="fee_download_title_div">
                        <h5 className="fee_download_title_content">Student Details</h5>
                    </div>
                    <div className="fee_download_modal_logo_main">
                        <div>
                          
                                <Label className="download_modal_title">Academic Year</Label>
                                <h6>Kolathur</h6>
                        </div>
                        <div>
                                <Label  className="download_modal_title">Student Name</Label>
                                <h6>Maya</h6>
                        </div>
                        <div>
                                <Label  className="download_modal_title">Level</Label>
                                <h6>II</h6>
                        </div>
                        <div>
                                <Label  className="download_modal_title">Class</Label>
                                <h6>Marvellous</h6>
                        </div>
                    </div>
              </div>

              <div className="fee_download_title_div_main">
                    <div  className="fee_download_title_div">
                        <h5 className="fee_download_title_content">Fee Details</h5>
                    </div>
                    <div className="footer_download_modal">
                        <Row>
                            <Col sm="6">
                                <Label className="footer_download_modal_lable">Total Paid</Label>
                            </Col>
                            <Col sm="6">
                                <Label className="footer_download_modal_lable">Rs.6500.00</Label>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="6">
                                <Label className="footer_download_modal_lable">Discount</Label>
                            </Col>
                            <Col sm="6">
                                <Label className="footer_download_modal_lable">10%</Label>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="6">
                                <Label className="footer_download_modal_lable">Fine</Label>
                            </Col>
                            <Col sm="6">
                                <Label className="footer_download_modal_lable">Rs.100</Label>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="6">
                                <Label className="footer_download_modal_lable">Total Paid Amount</Label>
                            </Col>
                            <Col sm="6">
                                <Label className="footer_download_modal_lable">Rs.25000</Label>
                            </Col>
                        </Row>
                    </div>
              </div>
          </div>
        </ModalBody>
        <ModalFooter>
            <Row>
               
            <div className="teacher_btn_div">   
           
           <Button color="success"  style={{height:'45px'}}>

           <Row>
          <Col sm='3'>
          <FontAwesomeIcon
                  icon={faLocationArrow}
                  style={{ fontSize: 20 }}
                />
          </Col>
          <Col sm='6'>
          Download
          </Col>
          </Row>
           </Button>
            </div>
            </Row>
          
         
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default FeeDownloadModal;
