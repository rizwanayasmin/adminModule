import {
  faEye,
  faPencil,
  faTrash,
  faUserPlus,
} from "@fortawesome/pro-duotone-svg-icons";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Table,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import customStyles from "../../assets/custom-data-styles/customDataStyles";
import Chip from "../@vuexy/chips/ChipComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  listAllHiredApplications,
  rejectACandidate,
  updateCTCAndDOJ,
} from "../../actions/jobApplicationActions";
import { Search } from "react-feather";
import ModalHiring from "../popupModels/modalHiringProcess.component";
import jobHiringColumn from "../../assets/data-table-columns/jobHiringColumn";
import { addToEmployeeList } from "../../actions/jobPostsActions";
const JobPostHired = ({ match }) => {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [lists, setLists] = useState([]);
  const { defaultAction, setDefAction } = useState("--SELECT--");
  const [popupData, setPopupData] = useState({
    dateOfJoining: "",
    acceptedCTC: 0,
    finalComment: "",
  });
  const jpHired = useSelector((state) => state.hiredApplicationLists);
  const { hiredLists, loading, error } = jpHired;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      listAllHiredApplications(
        setLists,
        rejectCandidate,
        addToEmployee,
        viewProfile,
        assignFields
      )
    );
    return () => {};
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const rejectCandidate = async (id, info) => {
    const isTrue = window.confirm(
      `Are you sure you want to reject this candidate ${info}?`
    );
    if (isTrue) {
      rejectACandidate(id);
      dispatch(
        listAllHiredApplications(
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

  const updateCandidate = () => {
    setModal(false);
    updateCTCAndDOJ(popupData._id, popupData);
    dispatch(
      listAllHiredApplications(
        setLists,
        rejectCandidate,
        addToEmployee,
        viewProfile,
        assignFields
      )
    );
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
          listAllHiredApplications(
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

  return (
    <div className="container-fluid">
      <Card>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>Hired Candidates</CardTitle>
        </CardHeader>
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
          <div className="float-right">
            <Row>
              <Col>
                <FormGroup className="has-icon-left position-relative">
                  <Input
                    type="search"
                    name="search"
                    placeholder="Search by name"
                    value={search}
                    onChange={handleSearch}
                  />
                  <div className="form-control-position">
                    <Search size={15} />
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </div>
          <div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                <DataTable
                  data={lists.filter((hired) => {
                    return hired.fName
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  })}
                  columns={jobHiringColumn}
                  customStyles={customStyles}
                  selectableRows
                  onSelectedRowsChange={(state) => {
                    console.log(state.selectedRows);
                  }}
                  pagination
                  highlightOnHover
                />
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobPostHired;
