import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import JobPostApplications from "../job-post-applications/job-post-applications.component";
import JobPostHeader from "../job-post-header/job-post-header.component";
import JobPostHired from "../job-post-hired/job-post-hired.component";
import JobPostShortlists from "../job-post-shortlists/job-post-shortlists.component";

import "./job-post-directory.styles.scss";

const JobPostDirectory = ({ history, location, match }) => {
  console.log(history, location, match);

  useEffect(() => {}, []);

  const handleView = (view) => {
    history.push(`${match.url}?view=${view}`);
  };

  return (
    <div>
      <div className="jobPostBackDiv">
        <Link to="/job-post">{`${"<-"}`} Back to job posts</Link>
        {/* <a></a> */}
      </div>
      <div className="jobPostHeader">
        <JobPostHeader />
      </div>
      <div className="jobDirectoryNavbar">
        <ul>
          <li
            className={`${
              (location.search === "" ||
                location.search.split("=").includes("applications")) &&
              "active"
            }`}
            onClick={() => handleView("applications")}
          >
            <a>Applications</a>
          </li>
          <li
            className={`${
              location.search.split("=").includes("shortlists") && "active"
            }`}
            onClick={() => handleView("shortlists")}
          >
            <a>Shortlists</a>
          </li>
          <li
            className={`${
              location.search.split("=").includes("hired") && "active"
            }`}
            onClick={() => handleView("hired")}
          >
            <a>Hired</a>
          </li>
        </ul>
      </div>
      <div>
        {location.search === "" ||
        location.search.split("=").includes("applications") ? (
          <div className="viewComponents">
            <JobPostApplications />
          </div>
        ) : location.search.split("=").includes("shortlists") ? (
          <div className="viewComponents">
            <JobPostShortlists />
          </div>
        ) : location.search.split("=").includes("hired") ? (
          <div className="viewComponents">
            <JobPostHired />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default JobPostDirectory;
