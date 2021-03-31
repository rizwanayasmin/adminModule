import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";
import customStyles from "../../assets/custom-data-styles/customDataStyles";
import DataTable from "react-data-table-component";
import {
  deleteLeavePolicy,
  listLeavePolicies,
  saveLeavePolicy,
} from "../../actions/leavePolicyActions";
import { useDispatch, useSelector } from "react-redux";
import AttendanceModal from "../popupModels/modalAttendance.component";
import attendanceColumn from "../../assets/data-table-columns/attendanceColumn";
import { getTeacherAttendance } from "../../actions/teacherActions";

const AttendanceTable = ({ empNumber }) => {
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [attendanceData, setAttendanceData] = useState([]);
  const [attendance, setAttendance] = useState({
    month: "--SELECT--",
    workingDays: "",
    present: "",
    absent: "",
    late: "",
  });

  useEffect(() => {
    getTeacherAttendance(empNumber, setAttendanceData);

    return () => {
      // Clean up
    };
  }, []);

  const toggle = () => setModal(!modal);

  // Redux store access
  // const lpLists = useSelector((state) => state.listLeavePolicies);
  // const { leavePolicyList, loading, error } = lpLists;
  // const dispatch = useDispatch();

  // const lp = useSelector((state) => state.leavePolicy);
  // const { leavePolicy: leave, loading: saveLoading, error: saveError } = lp;

  // const delPolicy = useSelector((state) => state.deletePolicy);
  // const {
  //   leavePolicyDelete,
  //   loading: deleteLoading,
  //   error: deleteError,
  // } = delPolicy;

  // useEffect(() => {
  //   dispatch(listLeavePolicies(setAttendanceData, openModal, delLeavePolicy));
  //   return () => {
  //     // cleanup;
  //   };
  // }, [saveLoading, deleteLoading]);

  const createAttendance = () => {
    console.log(attendance);
    // dispatch(saveLeavePolicy(attendance));
    setAttendance({
      month: "--SELECT--",
      workingDays: "",
      present: "",
      absent: "",
      late: "",
    });
    setModal(false);
  };

  const openModal = (policyDetails) => {
    // setAttendanceData(policyDetails);
    setAttendance(policyDetails);
    setModal(true);
  };

  const delLeavePolicy = (policyId, policyName) => {
    let isTrue = window.confirm(
      `Are you sure you want to delete ${policyName}`
    );
    if (isTrue) {
      // dispatch(deleteLeavePolicy(policyId));
    }
  };

  return (
    <div className="container-fluid">
      <Card>
        <CardBody>
          {/* <div className="float-left">
            <Row>
              <Col>
                <AttendanceModal
                  modal={modal}
                  setModal={setModal}
                  toggle={toggle}
                  attendance={attendance}
                  setAttendance={setAttendance}
                  createAttendance={createAttendance}
                ></AttendanceModal>
              </Col>
            </Row>
          </div> */}
          <DataTable
            // data={attendanceData.filter((lp) => {
            //   return lp.id.toLowerCase().includes(search.toLowerCase());
            // })}
            data={attendanceData}
            columns={attendanceColumn}
            customStyles={customStyles}
            selectableRows
            onSelectedRowsChange={(state) => {
              console.log(state.selectedRows);
            }}
            pagination
            highlightOnHover
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default AttendanceTable;
