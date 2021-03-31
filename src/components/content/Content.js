import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Profile from "../profile/Profile";
// import TeacherProfile from "../teacherprofile/teacherProfile";
import TeacherProfile from "../teacherprofile/TeacherProfile"
import ProfileInfo from "../profileinfo/ProfileInfo";
import HrApplication from "../hrapplication/HrApplication";
import ShortList from "../shortlist/ShortList";
import Settings from "../settings/Settings";
import Attendance from "../attendance/Attendance";
import Staffdirectory from "../staffdirectory/Staffdirectory";
import Rolechange from "../rolechange/Rolechange";
import Transfer from "../transfer/Transfer";
import Resignation from "../resignation/Resignation";
import Jobpost from "../job-post/job-post";
import Leave from "../leave/Leave";
import Survey from "../survey/Survey";
import Surveyreport from "../surveyreport/Surveyreport";
import HiredCandidates from "../hiredcandidates/HiredCandidates";
import InterviewProcess from "../interviewprocess/InterviewProcess";
import InterviewStage from "../interviewstage/InterviewStage";
import Applications from "../applications/applications";
import Letter from "../letter/Letter";
import CreateInstitute from "../createinstitute/CreateInstitute";
import CreateDepartment from "../createdepartment/CreateDepartment";
import CreateDesignation from "../createdesignation/CreateDesignation";
import JobPostDirectory from "../job-post-directory/job-post-directory.component";
import JobPostHired from "../job-post-hired/job-post-hired.component";
import AttendanceExcel from "../attendance-excel-upload/attendance-excel-upload.component";
import Payroll from "../payroll/payroll.components";
import Employees from "../employees/employees.component";
import TestPdf from "../test-pdf/test-pdf.component";
import LeaveRequests from "../leave-requests/leave-requests.component";
import PayslipGeneratorExcel from "../payslip-generator/payslip-generator-excel-upload.component";
// import Transfer from '../transfer/Transfer.component'
import CreateAttendence from '../Create Attendence/CreateAttendence'

// admin module imports
import Attendence from '../attendance/Attendance'
import Lessons from '../lessons/lessons'
import Document from "../documents/Document"
import TC from "../TC/TC"
import ExtraCurricular from "../Extra Curricular/ExtraCurricular"
import Discipline from "../discipline/Discipline"
import Savingpassbook from "../savingpassbook/Savingpassbook"
import Suggestion from "../suggestion/Suggestion"
import Annocement from "../announcement/Announcement"
import SurveyCreateTable from "../Survey Create/SurveyCreateTable"
import SurveyResponseTable from "../Survey Response/SurveyResponseTable"
import MySchool from "../MySchool/MySchool"
import Classroom from "../classroom/Classroom"
import Subject from "../subject/Subject"
import Promotion from "../promotion/Promotion"
import Teacher from "../Teacher/Teacher"
import Application from "../Application/Application"
import MsgRecords from "../Msg Records/MsgRecords"
import FeeStatus from "../Fee Status/FeeStatus"
import AdmissionDoc from "../Admission Doc/AdmissionDoc"
import Institution from "../institution/Institution"
import Calender from "../Calender/Calender"
import DisciplineTable from "../Discipline Table/DisciplineTable"
import SuggestionTable from "../SuggestionTable/SuggestionTable"
import FeeDashboard from "../Fees/FeeDashboard"
import Reminder from "../Fees/Reminder"
import PaymentSetting from "../Fees/PaymentSetting"
import CourseFee from "../Fees/CourseFee"
import RPP from "../Fees/RPP"
import Discount from "../Fees/Discount"
import PaymentSchedule from "../Fees/PaymentSchedule"
import FeeSetting from "../Fees/FeeSetting"
import OnlineExam from "../onlineexam/Onlineexam"
import ReportCard from "../reportcard/Reportcard"
import SchoolResult from "../SchoolResult/SchoolResult"
import ExamType from "../ExamType/ExamType"
import SchoolExam from "../schoolexam/Schoolexam"
import MarkEntry from "../schoolexam/MarkEntry"
import Online from "../Online/Online"
import SchoolExamDashboard from "../schoolexam/SchoolExamDashboard"

const Content = ({ isSideBarOpen, toggleSidebar }) => (
  <Container
    style={{ padding: 0 }}
    fluid
    className={classNames("", { "is-open": isSideBarOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>

{/* admin module */}
      <Route path="/createattendence" exact component={CreateAttendence} />
      <Route path="/attendence" exact component={Attendence} />
      <Route path="/lesson" exact component={Lessons} />
      <Route path="/document" exact component={Document } />
      <Route path="/tc" exact component={TC} />
      <Route path="/extracurricular" exact component={ExtraCurricular} />
      <Route path="/savings" exact component={Savingpassbook} />
      <Route path="/suggestion" exact component={Suggestion}  />
      <Route path="/annocement" exact component={Annocement} />
      <Route path="/createsurvey" exact component={SurveyCreateTable} />
      <Route path="/surveyresponse" exact component={SurveyResponseTable} />
      <Route path="/myschool" exact component={MySchool} />
      <Route path="/classroom" exact component={Classroom} />
      <Route path="/subject" exact component={Subject} />
      <Route path="/promotion" exact component={Promotion} />
      <Route path="/teacher" exact component={Teacher} />
      <Route path="/application" exact component={Application} />
      <Route path="/msg" exact component={MsgRecords} />
      <Route path="/feestatus" exact component={FeeStatus} />
      <Route path="/admissiondoc" exact component={AdmissionDoc} />
      <Route path="/institutes" exact component={CreateInstitute} />
      <Route path="/calender" exact component={Calender} />
      <Route path="/discipline" exact component={DisciplineTable} />
      <Route path="/suggestiontable" exact component={SuggestionTable} />
      <Route path="/feedashboard" exact component={FeeDashboard} />
      <Route path="/reminder" exact component={Reminder} />
      <Route path="/paymentsettings" exact component={PaymentSetting} />
      <Route path="/coursefee" exact component={CourseFee} />
      <Route path="/rpp" exact component={RPP} />
      <Route path="/discount" exact component={Discount} />
      <Route path="/paymentschedule" exact component={PaymentSchedule} />
      <Route path="/feesetting" exact component={FeeSetting} />
      {/* <Route path="/online" exact component={OnlineExam} /> */}
      <Route path="/report" exact component={ReportCard} />
      <Route path="/schoolresult" exact component={SchoolResult} />
      <Route path="/examtype" exact component={ExamType} />
      {/* <Route path="/schoolexam" exact component={SchoolExam} /> */}
      {/* <Route path="/mark" exact component={MarkEntry} /> */}
      <Route path="/online" exact component={Online} />
      <Route path="/request" exact component={LeaveRequests} />
      <Route path="/schooldashboard" exact component={SchoolExamDashboard} />
    </Switch>
  </Container>
);

export default Content;
