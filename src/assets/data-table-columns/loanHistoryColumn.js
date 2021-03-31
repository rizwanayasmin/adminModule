import { faArrowDown, faEye, faPrint } from "@fortawesome/free-solid-svg-icons";
import {
  faDownload,
  faPencil,
  faTrash,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LoanHistoryColumn = [
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
];

export default LoanHistoryColumn;
