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
import payslipGeneratorColumn from "../../assets/data-table-columns/paylipGeneratorColumn";
import {
  changeReleaseStatus,
  getHrPayrollForMonthAndYear,
} from "../../actions/hrPayrollActions";
import exportToCSV from "../attendance-excel-upload/attendance.utility";

const PayslipGeneratorTable = ({
  instituteSelect,
  monthSelect,
  yearSelect,
}) => {
  //   const [payslips, setPayslips] = useState([]);
  const [payrollSlips, setPayrollSlips] = useState([]);

  useEffect(() => {
    getHrPayrollForMonthAndYear(
      instituteSelect,
      monthSelect,
      yearSelect,
      setPayrollSlips,
      handleDownload,
      handleRelease
    );
    return () => {};
  }, [instituteSelect, monthSelect, yearSelect]);

  const handleDownload = (teachers) => {
    const resultTeachers = Object.keys(teachers).map((employeeNumber) => {
      const obj = teachers[employeeNumber];
      return obj;
    });
    console.log(resultTeachers);

    exportToCSV(
      [{ data: resultTeachers, sheetName: instituteSelect }],
      `${instituteSelect}_${monthSelect}_${yearSelect}`
    );
  };

  const handleRelease = async (releaseStatus, organization_id, month, year) => {
    await changeReleaseStatus(releaseStatus, organization_id, month, year);
    await getHrPayrollForMonthAndYear(
      instituteSelect,
      monthSelect,
      yearSelect,
      setPayrollSlips,
      handleDownload,
      handleRelease
    );
  };

  return (
    <div className="container-fluid">
      <Card>
        <CardBody>
          <DataTable
            data={payrollSlips}
            // data={leavePolicyList}
            columns={payslipGeneratorColumn}
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

export default PayslipGeneratorTable;
