import React from "react";
import { withRouter } from "react-router-dom";
import InterviewStage from "../interviewstage/InterviewStage";

import "./job-post-shortlists.styles.scss";

const JobPostShortlists = ({ generalDetails, setGeneralDetails }) => {
  return (
    <div>
      <InterviewStage />
    </div>
  );
};

export default JobPostShortlists;
