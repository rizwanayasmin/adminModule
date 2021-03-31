import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
} from "reactstrap";
import customStyles from "../../assets/custom-data-styles/customDataStyles";
import DataTable from "react-data-table-component";
import LoanHistoryColumn from "../../assets/data-table-columns/loanHistoryColumn";
import LoanActivateModel from "../popupModels/modalLoanActivate.component";
import {
  getLoanDetailsForTeacher,
  loanActivatorForTeacher,
} from "../../actions/teacherActions";
import LoanActiveColumn from "../../assets/data-table-columns/loanActiveColumn";

const LoanTable = ({ profileId }) => {
  const [modal, setModal] = useState(false);

  const [loanSetting, setLoanSetting] = useState({
    amount: "",
    period: "",
    maxNPPeriod: "",
  });
  const [teacherInfo, setTeacherInfo] = useState({});

  useEffect(() => {
    getLoanDetailsForTeacher(profileId, setTeacherInfo);
    return () => {};
  }, []);

  const handleLoanUpload = () => {
    const { amount, period, maxNPPeriod } = loanSetting;
    if (amount === "" || period === "" || maxNPPeriod === "") {
      alert("Important fields required");
      return;
    }
    const isConfirmed = window.confirm(
      `Are you sure you want to activate loan?`
    );
    if (isConfirmed) {
      console.log("handleLoanupload");
      loanActivatorForTeacher(profileId, loanSetting);
      // console.log(loanSetting);
      getLoanDetailsForTeacher(profileId, setTeacherInfo);

      toggle();
      resetLoanHandler();
    } else {
      toggle();
      resetLoanHandler();
    }
  };

  const resetLoanHandler = () => {
    setLoanSetting({
      amount: "",
      period: "",
      maxNPPeriod: "",
    });
  };

  const toggle = () => {
    setModal(!modal);
  };

  const { loan } = teacherInfo;
  const currentLoanDetails = [];

  if (loan) {
    if (loan.isActive) {
      loan.currentLoanDetails.profileId = profileId;
      currentLoanDetails.push(loan.currentLoanDetails);
    }
  }

  return (
    <div className="container-fluid">
      <Card>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>Active loans</CardTitle>
        </CardHeader>
        <CardBody>
          {loan ? (
            loan.isActive ? (
              <DataTable
                data={currentLoanDetails}
                columns={LoanActiveColumn}
                customStyles={customStyles}
                selectableRows
                onSelectedRowsChange={(state) => {
                  console.log(state.selectedRows);
                }}
                pagination
                highlightOnHover
              />
            ) : (
              <div>
                <LoanActivateModel
                  modal={modal}
                  toggle={toggle}
                  {...{ loanSetting, setLoanSetting, handleLoanUpload }}
                />
              </div>
            )
          ) : (
            <div>
              <div>
                <LoanActivateModel
                  modal={modal}
                  toggle={toggle}
                  {...{ loanSetting, setLoanSetting, handleLoanUpload }}
                />
              </div>
            </div>
          )}
        </CardBody>
        <CardHeader>
          <CardTitle style={{ color: "#fd868c" }}>Loan History</CardTitle>
        </CardHeader>
        <CardBody>
          {loan ? (
            <DataTable
              data={loan.history}
              // data={leavePolicyList}
              columns={LoanHistoryColumn}
              customStyles={customStyles}
              selectableRows
              onSelectedRowsChange={(state) => {
                console.log(state.selectedRows);
              }}
              pagination
              highlightOnHover
            />
          ) : (
            "No history"
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default LoanTable;
