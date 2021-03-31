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
  PaginationLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledButtonDropdown,
} from "reactstrap";
import {
  faEye,
  faPencil,
  faTrash,
  faUserPlus,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { withRouter } from "react-router-dom";
import customStyles from "../../assets/custom-data-styles/customDataStyles";
import Chip from "../@vuexy/chips/ChipComponent";
import { useDispatch, useSelector } from "react-redux";
import "./job-post-hired.styles.scss";
import {
  listHiredApplications,
  rejectACandidate,
  updateCTCAndDOJ,
} from "../../actions/jobApplicationActions";
import ModalHiring from "../popupModels/modalHiringProcess.component";
import { Search } from "react-feather";
import jobHiringColumn from "../../assets/data-table-columns/jobHiringColumn";
import { addToEmployeeList } from "../../actions/jobPostsActions";

const JobPostHired = ({ match }) => {
  const [lists, setLists] = useState([]);
  const [popupData, setPopupData] = useState({
    dateOfJoining: "",
    acceptedCTC: 0,
    finalComment: "",
  });
  const [modal, setModal] = useState(false);
  const jpHired = useSelector((state) => state.hiredApplicationLists);
  const { hiredLists, loading, error } = jpHired;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      listHiredApplications(
        match.params.id,
        setLists,
        rejectCandidate,
        addToEmployee,
        viewProfile,
        assignFields
      )
    );
    return () => {};
  }, []);

  const rejectCandidate = async (id, info) => {
    const isTrue = window.confirm(
      `Are you sure you want to reject this candidate ${info}?`
    );
    if (isTrue) {
      rejectACandidate(id);
      dispatch(
        listHiredApplications(
          match.params.id,
          setLists,
          rejectCandidate,
          addToEmployee,
          viewProfile,
          assignFields
        )
      );
      // console.log("Reject candidate", id);
    }
  };

  const addToEmployee = async (
    instituteId,
    applicationId,
    designationId,
    acceptedCTC,
    dateOfJoining
  ) => {
    if (acceptedCTC && dateOfJoining) {
      console.log(acceptedCTC, dateOfJoining);
      const isConfirmed = window.confirm(
        `Are you sure you want to add this applicant to employee list?`
      );
      if (isConfirmed) {
        await addToEmployeeList(instituteId, applicationId, designationId);
        dispatch(
          listHiredApplications(
            match.params.id,
            setLists,
            rejectCandidate,
            addToEmployee,
            viewProfile,
            assignFields
          )
        );
      }
    } else {
      alert("Please update CTC and date of joining");
    }
  };

  const viewProfile = () => {};
  const assignFields = async (id, row) => {
    setPopupData(row);
    setModal(true);
  };

  const updateCandidate = () => {
    setModal(false);
    updateCTCAndDOJ(popupData._id, popupData);
    dispatch(
      listHiredApplications(
        match.params.id,
        setLists,
        rejectCandidate,
        addToEmployee,
        viewProfile,
        assignFields
      )
    );
  };

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div className="container-fluid">
      <Card>
        <CardBody>
          <div className="float-left">
            <Row>
              <Col>
                <ModalHiring
                  modal={modal}
                  setModal={setModal}
                  toggle={toggle}
                  popupData={popupData}
                  setPopupData={setPopupData}
                  updateCandidate={updateCandidate}
                />
              </Col>
            </Row>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <DataTable
              data={lists}
              columns={jobHiringColumn}
              customStyles={customStyles}
              selectableRows
              onSelectedRowsChange={(state) => {
                console.log(state.selectedRows);
              }}
              pagination
              highlightOnHover
            />
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default withRouter(JobPostHired);
