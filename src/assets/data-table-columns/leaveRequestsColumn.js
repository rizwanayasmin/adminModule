import {
  faEye,
  faPencil,
  faTrash,
  faCheck,
  faTimes,
} from "@fortawesome/pro-duotone-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LeaveApprovalModal from "../../components/popupModels/modalLeaveApproval.component";

const LeaveRequestsColumn = [
  {
    name: "Month",
    selector: "month",
    wrap: true,
  },
  {
    name: "Employee number",
    selector: "employee_number",
    wrap: true,
  },
  {
    name: "Employee name",
    cell: (row) => row.first_name + " " + row.last_name,
    wrap: true,
  },
  {
    name: "Leave type",
    selector: "leaveType",
    wrap: true,
  },
  {
    name: "Requests leave (From - To)",
    // cell: (row) =>
    //   row.dateRange
    //     ? row.dateRange.from
    //       ? row.dateRange.from
    //       : " - "
    //     : " - " + " to " + row.dateRange
    //     ? row.dateRange.to
    //       ? row.dateRange.to
    //       : " - "
    //     : " - ",
    cell: (row) => {
      //   console.log(
      //     row.dateRange
      //       ? (row.dateRange.from ? row.dateRange.from : " - ") +
      //           " to " +
      //           (row.dateRange.to ? row.dateRange.to : " - ")
      //       : " - "
      //   );
      return row.dateRange
        ? (row.dateRange.from ? row.dateRange.from : " - ") +
            " to " +
            (row.dateRange.to ? row.dateRange.to : " - ")
        : " - ";
    },
    wrap: true,
  },
  {
    name: "Request (No. of days)",
    cell: (row) => (row.noOfDays ? row.noOfDays : "-"),
    wrap: true,
  },
  {
    name: "Approved leave (From - To)",
    cell: (row) => {
      return row.approvedDateRange
        ? (row.approvedDateRange.from ? row.approvedDateRange.from : " - ") +
            " to " +
            (row.approvedDateRange.to ? row.approvedDateRange.to : " - ")
        : " - ";
    },
    wrap: true,
  },
  {
    name: "Approved (No. of days)",
    cell: (row) => (row.approvedNoOfDays ? row.approvedNoOfDays : "-"),
    wrap: true,
  },

  {
    name: "Status",
    //   selector: "mobile_number",
    cell: (row) => {
      if (row.isApproved && !row.isRejected) {
        return "APPROVED";
      } else if (!row.isApproved && row.isRejected) {
        return "REJECTED";
      } else {
        return "NEW REQUEST";
      }
    },
    wrap: true,
  },
  {
    name: "Actions",
    cell: (row) => {
      return (
        <div>
          <LeaveApprovalModal
            teacherId={row.teacherId}
            arrayIndex={row.arrayIndex}
            month={row.month}
            dateRange={row.dateRange}
            aDateRange={
              row.approvedDateRange
                ? row.approvedDateRange
                : { from: "", to: "" }
            }
            aNoOfDays={row.approvedNoOfDays ? row.approvedNoOfDays : ""}
          />

          <FontAwesomeIcon
            onClick={() =>
              row.handleLeaveReject(row.teacherId, row.arrayIndex, row.month)
            }
            icon={faTimes}
            className="mr-2"
            style={{ fontSize: 16, color: "#fd868c" }}
          />
        </div>
      );
    },
    wrap: true,
  },
];

export default LeaveRequestsColumn;
