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
import { Search } from "react-feather";
import customStyles from "../../assets/custom-data-styles/customDataStyles";
import DataTable from "react-data-table-component";
import {
  deleteLeavePolicy,
  listLeavePolicies,
  saveLeavePolicy,
} from "../../actions/leavePolicyActions";
import { useDispatch, useSelector } from "react-redux";
import classroomColumn from "../../assets/data-table-columns/classroomColumn";
import ClassroomModal from "../popupModels/modalClassroom.component";

const ClassroomTable = ({ profileId, organizationId }) => {
  const [modal, setModal] = useState(false);
  const [classroomData, setClassroomData] = useState([]);
  const [classroom, setClassroom] = useState({
    level: "--SELECT--",
    class: "--SELECT--",
    role: "--SELECT--",
    subject: "",
  });

  const toggle = () => setModal(!modal);

  // Redux store access
  //   const lpLists = useSelector((state) => state.listLeavePolicies);
  //   const { leavePolicyList, loading, error } = lpLists;
  //   const dispatch = useDispatch();

  //   const lp = useSelector((state) => state.leavePolicy);
  //   const { leavePolicy: leave, loading: saveLoading, error: saveError } = lp;

  //   const delPolicy = useSelector((state) => state.deletePolicy);
  //   const {
  //     leavePolicyDelete,
  //     loading: deleteLoading,
  //     error: deleteError,
  //   } = delPolicy;

  //   useEffect(() => {
  //     dispatch(listLeavePolicies(setClassroomData, openModal, delLeavePolicy));
  //     return () => {
  //       // cleanup;
  //     };
  //   }, [saveLoading, deleteLoading]);

  const createClassroom = () => {
    // dispatch(saveLeavePolicy(classroom));
    console.log(classroom);
    setClassroom({
      level: "--SELECT--",
      class: "--SELECT--",
      role: "--SELECT--",
      subject: "",
    });
    setModal(false);
  };

  const openModal = (policyDetails) => {
    // setClassroomData(policyDetails);
    setClassroom(policyDetails);
    setModal(true);
  };

  const delLeavePolicy = (policyId, policyName) => {
    let isTrue = window.confirm(
      `Are you sure you want to delete ${policyName}`
    );
    if (isTrue) {
      //   dispatch(deleteLeavePolicy(policyId));
    }
  };

  return (
    <div className="container-fluid">
      <Card>
        <CardBody>
          <div className="float-left">
            <Row>
              <Col>
                <ClassroomModal
                  modal={modal}
                  toggle={toggle}
                  profileId={profileId}
                  organizationId={organizationId}
                  classroom={classroom}
                  setClassroom={setClassroom}
                  createClassroom={createClassroom}
                ></ClassroomModal>
              </Col>
            </Row>
          </div>
          <DataTable
            // data={classroomData.filter((lp) => {
            //   return lp.id.toLowerCase().includes(search.toLowerCase());
            // })}
            data={classroomData}
            columns={classroomColumn}
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

export default ClassroomTable;
