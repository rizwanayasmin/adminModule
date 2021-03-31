import {
  faDownload,
  faPencil,
  faTrash,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Input } from "reactstrap";
import {
  listApplications,
  rejectACandidate,
  shortlistResume,
} from "../../actions/jobApplicationActions";
import customStyles from "../../assets/custom-data-styles/customDataStyles";
import "./job-post-applications.styles.scss";

const JobPostApplications = ({ history, match }) => {
  const [lists, setLists] = useState([]);
  const lsApplicaitions = useSelector((state) => state.applicationLists);
  const { applicationLists, loading, error } = lsApplicaitions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      listApplications(
        match.params.id,
        setLists,
        rejectCandidate,
        shortlistCandidate,
        downloadResume
      )
    );
    return () => {};
  }, []);

  const downloadResume = () => {
    console.log("Download resume");
  };

  const rejectCandidate = async (id, info) => {
    const isTrue = window.confirm(
      `Are you sure you want to reject this candidate ${info}?`
    );
    if (isTrue) {
      await rejectACandidate(id);
      dispatch(
        listApplications(
          match.params.id,
          setLists,
          rejectCandidate,
          shortlistCandidate,
          downloadResume
        )
      );
      // console.log("Reject candidate", id);
    }
  };

  const shortlistCandidate = async (id, info) => {
    const isTrue = window.confirm(
      `Are you sure you want to shortlist this candidate ${info}?`
    );
    if (isTrue) {
      await shortlistResume(id);
      dispatch(
        listApplications(
          match.params.id,
          setLists,
          rejectCandidate,
          shortlistCandidate,
          downloadResume
        )
      );
      // console.log("Shortlist Candidate", id);
    }
  };

  const handleActionChange = (row, e) => {
    const { value } = e.target;
    switch (value) {
      case "Resume shortlist":
        row.shortlistCandidate(row._id, row.fName);
        break;
      case "Reject":
        row.rejectCandidate(row._id, row.fName);
        break;
    }
  };

  const columns = [
    {
      name: "Name",
      cell: (row) => {
        return `${row.fName} ${row.lName}`;
      },
      wrap: true,
    },
    {
      name: "Email",
      selector: "email",
      wrap: true,
    },

    {
      name: "Mobile no.",
      selector: "contactNo",
      wrap: true,
    },
    {
      name: "Applied on",
      cell: (row) => {
        const d = new Date(row.applicationDate);
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
      },
      wrap: true,
    },
    {
      name: "Education",
      selector: "education",
      wrap: true,
    },
    {
      name: "Expected CTC",
      selector: "expectedCTC",
      wrap: true,
    },
    {
      name: "Experience",
      selector: "experience",
      wrap: true,
    },
    {
      name: "Resume",
      cell: (row) => (
        <div>
          <FontAwesomeIcon
            onClick={row.downloadResume}
            icon={faDownload}
            className="mr-2"
            style={{ fontSize: 16, color: "gray" }}
          />
        </div>
      ),
      wrap: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <Input
            type="select"
            onChange={(e) => handleActionChange(row, e)}
            value={"--SELECT--"}
          >
            <option>--SELECT--</option>
            <option>Resume shortlist</option>
            <option>Reject</option>
          </Input>
          {/* <FontAwesomeIcon
            onClick={() => row.shortlistCandidate(row._id, row.fName)}
            icon={faPencil}
            className="mr-2"
            style={{ fontSize: 16, color: "gray" }}
          />
          <FontAwesomeIcon
            onClick={() => row.rejectCandidate(row._id, row.fName)}
            icon={faTrash}
            className="mr-2"
            style={{ fontSize: 16, color: "gray" }}
          /> */}
        </div>
      ),
      wrap: true,
    },
  ];

  return (
    <div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <DataTable
            data={lists}
            columns={columns}
            customStyles={customStyles}
            selectableRows
            onSelectedRowsChange={(state) => {
              console.log(state.selectedRows);
            }}
            pagination
            highlightOnHover
          />
        )}
      </div>
    </div>
  );
};

// With Router is an HOC (Higher Order Component),
//      which gives all the router dom properties
export default withRouter(JobPostApplications);
