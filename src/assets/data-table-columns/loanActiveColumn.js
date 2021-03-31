import { faArrowDown, faEye, faPrint } from "@fortawesome/free-solid-svg-icons";
import {
  faDownload,
  faPencil,
  faTrash,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "reactstrap";
import LoanPaymentModal from "../../components/popupModels/modalLoanPayment.component";

const LoanActiveColumn = [
  {
    name: "Loan Amount",
    selector: "amount",
    wrap: true,
  },
  {
    name: "Total Period",
    selector: "period",
    wrap: true,
  },
  {
    name: "Max. Non-payable Period",
    selector: "maxNPPeriod",
    wrap: true,
  },
  {
    name: "Paid Amount",
    selector: "paidTillDate",
    wrap: true,
  },
  {
    name: "Paid Period",
    selector: "paidPeriod",
    wrap: true,
  },
  {
    name: "Max. Non-payable Used",
    selector: "maxNPUsed",
    wrap: true,
  },
  {
    name: "Balance",
    cell: (row) => {
      return row.amount - row.paidTillDate;
    },
    wrap: true,
  },
  {
    name: "Actions",
    cell: (row) => {
      return (
        <div>
          <LoanPaymentModal
            profileId={row.profileId}
            balanceAmount={row.amount - row.paidTillDate}
          ></LoanPaymentModal>
          {/* <FontAwesomeIcon
            onClick={() => row.handleDownload(row)}
            icon={faDownload}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          /> */}
          {/* <FontAwesomeIcon
            // onClick={() => row.delLeavePolicy(row._id, row.id)}
            icon={faEye}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          /> */}
        </div>
      );
    },
    wrap: true,
  },
];

export default LoanActiveColumn;
