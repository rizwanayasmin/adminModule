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
import payslipColumn from "../../assets/data-table-columns/payslipColumn";
import {
  allPaylipsForATeacher,
  createPdfAndDownload,
} from "../../actions/hrPayrollActions";

const PayslipTable = ({ organization_id, employee_number }) => {
  // console.log({ organization_id, employee_number });
  const [payslips, setPayslips] = useState([]);

  useEffect(() => {
    allPaylipsForATeacher(
      organization_id,
      employee_number,
      setPayslips,
      handleDownload
    );
    return () => {};
  }, [organization_id, employee_number]);

  const handleDownload = (teacherData) => {
    createPdfAndDownload(teacherData);
  };

  return (
    <div className="container-fluid">
      <Card>
        <CardBody>
          <DataTable
            data={payslips}
            // data={leavePolicyList}
            columns={payslipColumn}
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

export default PayslipTable;
