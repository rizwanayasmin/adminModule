import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  // faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faCaretDown,
  faTachometerAlt,
  // faHardHat,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEye,
  faPlus,
  faEdit,
  faTrashAlt,
  // faHardHat,
  faUserHardHat,
  faClipboardUser,
  faHouseReturn,
  faSignOut,
  faEnvelope,
  faBriefcase,
  faUserCheck,
  faFileInvoiceDollar,
  faCog,
  faBuilding,
  faGarage,
  faMapMarkedAlt,
  faUserEdit,
  faRubleSign,
  faUsersClass
  } from "@fortawesome/pro-duotone-svg-icons";
import {
  NavItem,
  NavLink,
  Nav,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
  ListGroup,
  ListGroupItem,
  Badge,
  Row,
  Col,
} from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import footerlogo from '../../images/logoSymbol.png'
import Typography from '@material-ui/core/Typography';


const SideBar = ({ isSideBarOpen, toggleSideBar }) => (
  <div className={classNames("sidebar", { "is-open": isSideBarOpen })}>
    <div className="sidebar-header">
      <img
        src="https://everwinschool.com/img/school/logo-mathur.png"
        style={{ width: "70%", height: "70%" }}
        className="d-block mx-auto img-fluid"
      />
    </div>
    <div className="side-menu">
      <nav>
        <div>
        
          <ListGroup style={{ borderRadius: 0 }}>
          <ListGroupItem style={{ padding: 0 }}>
            <Link to="/teachers" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserHardHat}
                className="mr-2 font-icon"
                style={{ fontSize: 30 }}
              />
             Dashboard
            </Link>
          </ListGroupItem>

          <ListGroupItem style={{ padding: 0 }} id="toggler_fee">
            <Link style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserHardHat}
                className="mr-2 font-icon"
                style={{ fontSize: 30 }}
              />
              Fees 
            </Link>
          </ListGroupItem>
{/* fee collapse */}

<UncontrolledCollapse
            toggler="#toggler_fee"
            style={{ backgroundColor: "#ecf0f1", color: "#6C7A89" }}
          >
            <CardBody className="bottomcollapse p-0">
              <ListGroup style={{ borderwidth: 0 }}>
                <ListGroupItem style={{ padding: 0 }}>
                  <Link  to="/feedashboard" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    	Fee Dashboard
                  </Link>
                </ListGroupItem>
                <ListGroupItem style={{ padding: 0 }}>
            <Link to="/reminder" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserCheck}
                className="mr-2 font-icon"
                style={{ fontSize: 25 }}
              />
              Reminder
            </Link>
          </ListGroupItem>

          <ListGroupItem style={{ padding: 0 }}>
            <Link to="/paymentsettings" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserCheck}
                className="mr-2 font-icon"
                style={{ fontSize: 25 }}
              />
              Payment Setting
            </Link>
          </ListGroupItem>

          <ListGroupItem style={{ padding: 0 }}>
            <Link to="/coursefee" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserCheck}
                className="mr-2 font-icon"
                style={{ fontSize: 25 }}
              />
              Course Fee
            </Link>
          </ListGroupItem>

          <ListGroupItem style={{ padding: 0 }}>
            <Link to="/rpp" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserCheck}
                className="mr-2 font-icon"
                style={{ fontSize: 25 }}
              />
              RPP
            </Link>
          </ListGroupItem>

          <ListGroupItem style={{ padding: 0 }}>
            <Link to="/discount" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserCheck}
                className="mr-2 font-icon"
                style={{ fontSize: 25 }}
              />
              Discount
            </Link>
          </ListGroupItem>

          <ListGroupItem style={{ padding: 0 }}>
            <Link to="/paymentschedule" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserCheck}
                className="mr-2 font-icon"
                style={{ fontSize: 25 }}
              />
              Payment Schedule
            </Link>
          </ListGroupItem>

          <ListGroupItem style={{ padding: 0 }}>
            <Link to="/feesetting" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserCheck}
                className="mr-2 font-icon"
                style={{ fontSize: 25 }}
              />
              Fee Setting
            </Link>
          </ListGroupItem>

              </ListGroup>
            </CardBody>
          </UncontrolledCollapse>


          <ListGroupItem style={{ padding: 0 }} id="togglerd">
            <Link to="/teachers" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserHardHat}
                className="mr-2 font-icon"
                style={{ fontSize: 30 }}
              />
             Survey
            </Link>
          </ListGroupItem>
{/* survey collapse */}

<UncontrolledCollapse
            toggler="#togglerd"
            style={{ backgroundColor: "#ecf0f1", color: "#6C7A89" }}
          >
            <CardBody className="bottomcollapse p-0">
              <ListGroup style={{ borderwidth: 0 }}>
                <ListGroupItem style={{ padding: 0 }}>
                  <Link  to="/createsurvey" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    	Survey Create
                  </Link>
                </ListGroupItem>
                <ListGroupItem style={{ padding: 0 }}>
            <Link to="/surveyresponse" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserCheck}
                className="mr-2 font-icon"
                style={{ fontSize: 25 }}
              />
              Survey Response
            </Link>
          </ListGroupItem>
              </ListGroup>
            </CardBody>
          </UncontrolledCollapse>
{/* admission */}
<ListGroupItem style={{ padding: 0 }} id="toggler_admission">
            <Link to="/teachers" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserHardHat}
                className="mr-2 font-icon"
                style={{ fontSize: 30 }}
              />
             Admission
            </Link>
          </ListGroupItem>

<UncontrolledCollapse
            toggler="#toggler_admission"
            style={{ backgroundColor: "#ecf0f1", color: "#6C7A89" }}
          >
            <CardBody className="bottomcollapse p-0">
              <ListGroup style={{ borderwidth: 0 }}>
                <ListGroupItem style={{ padding: 0 }}>
                  <Link  to="/application" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    	Application
                  </Link>
                </ListGroupItem>

                <ListGroupItem style={{ padding: 0 }}>
                  <Link  to="/msg" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    	Msg Record
                  </Link>
                </ListGroupItem>

                <ListGroupItem style={{ padding: 0 }}>
                <Link to="/feestatus" style={{fontWeight:'600'}}>
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="mr-2 font-icon"
                    style={{ fontSize: 25 }}
                  />
                Fee Status
                </Link>
              </ListGroupItem>

              <ListGroupItem style={{ padding: 0 }}>
                <Link to="/admissiondoc" style={{fontWeight:'600'}}>
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="mr-2 font-icon"
                    style={{ fontSize: 25 }}
                  />
                Admission DOC
                </Link>
              </ListGroupItem>

              </ListGroup>
            </CardBody>
          </UncontrolledCollapse>
{/* annocement */}
          <ListGroupItem style={{ padding: 0 }}>
            <Link to="/annocement" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserHardHat}
                className="mr-2 font-icon"
                style={{ fontSize: 30 }}
              />
             Annocement
            </Link>
          </ListGroupItem>
{/* classroom */}

<ListGroupItem style={{ padding: 0 }} id="toggler_Classroom">
            <Link  style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserHardHat}
                className="mr-2 font-icon"
                style={{ fontSize: 30 }}
              />
             Classroom
            </Link>
          </ListGroupItem>

<UncontrolledCollapse
            toggler="#toggler_Classroom"
            style={{ backgroundColor: "#ecf0f1", color: "#6C7A89" }}
          >
            <CardBody className="bottomcollapse p-0">
              <ListGroup style={{ borderwidth: 0 }}>
                <ListGroupItem style={{ padding: 0 }}>
                  <Link  to="/createattendence" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    	Students
                  </Link>
                </ListGroupItem>

                <ListGroupItem style={{ padding: 0 }}>
                  <Link  to="/attendence" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    	Attendence
                  </Link>
                </ListGroupItem>

                <ListGroupItem style={{ padding: 0 }}>
                <Link to="/lesson" style={{fontWeight:'600'}}>
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="mr-2 font-icon"
                    style={{ fontSize: 25 }}
                  />
                      Lessons
                </Link>
              </ListGroupItem>

              <ListGroupItem style={{ padding: 0 }}>
                <Link to="/request" style={{fontWeight:'600'}}>
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="mr-2 font-icon"
                    style={{ fontSize: 25 }}
                  />
                      Leave Request
                </Link>
              </ListGroupItem>

              <ListGroupItem style={{ padding: 0 }}>
                <Link to="/document" style={{fontWeight:'600'}}>
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="mr-2 font-icon"
                    style={{ fontSize: 25 }}
                  />
                      Document
                </Link>
              </ListGroupItem>

              <ListGroupItem style={{ padding: 0 }}>
                <Link to="/tc" style={{fontWeight:'600'}}>
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="mr-2 font-icon"
                    style={{ fontSize: 25 }}
                  />
                     TC
                </Link>
              </ListGroupItem>

              <ListGroupItem style={{ padding: 0 }}>
                <Link to="/calender" style={{fontWeight:'600'}}>
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="mr-2 font-icon"
                    style={{ fontSize: 25 }}
                  />
                      Calender
                </Link>
              </ListGroupItem>

              </ListGroup>
            </CardBody>
          </UncontrolledCollapse>
{/*  Examination*/}

<ListGroupItem style={{ padding: 0 }} id="toggler_examination">
            <Link to="/teachers" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserHardHat}
                className="mr-2 font-icon"
                style={{ fontSize: 30 }}
              />
            Examination
            </Link>
          </ListGroupItem>

<UncontrolledCollapse
            toggler="#toggler_examination"
            style={{ backgroundColor: "#ecf0f1", color: "#6C7A89" }}
          >
            <CardBody className="bottomcollapse p-0">
              <ListGroup style={{ borderwidth: 0 }}>
                {/* <ListGroupItem style={{ padding: 0 }}>
                  <Link  to="/schoolexam" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    	New School EXam
                  </Link>
                </ListGroupItem> */}
                {/* <ListGroupItem style={{ padding: 0 }}>
                  <Link  to="/mark" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    	New School EXam
                  </Link>
                </ListGroupItem> */}
                    <ListGroupItem style={{ padding: 0 }}>
                  <Link  to="/schooldashboard" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    	New School EXam
                  </Link>
                </ListGroupItem>
                {/* <ListGroupItem style={{ padding: 0 }}>
                  <Link  to="/examtype" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    	EXam Type
                  </Link>
                </ListGroupItem> */}

                <ListGroupItem style={{ padding: 0 }}>
                <Link to="/schoolresult" style={{fontWeight:'600'}}>
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="mr-2 font-icon"
                    style={{ fontSize: 25 }}
                  />
                      School Result
                </Link>
              </ListGroupItem>

              <ListGroupItem style={{ padding: 0 }}>
                <Link to="/report" style={{fontWeight:'600'}}>
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="mr-2 font-icon"
                    style={{ fontSize: 25 }}
                  />
                      Report Card
                </Link>
              </ListGroupItem>

              <ListGroupItem style={{ padding: 0 }}>
                <Link to="/online" style={{fontWeight:'600'}}>
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="mr-2 font-icon"
                    style={{ fontSize: 25 }}
                  />
                     Online Exam
                </Link>
              </ListGroupItem>
              </ListGroup>
            </CardBody>
          </UncontrolledCollapse>
{/* HR */}
          {/* <ListGroupItem style={{ padding: 0 }} id="toggler_hr">
            <Link to="/teachers" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserHardHat}
                className="mr-2 font-icon"
                style={{ fontSize: 30 }}
              />
            HR
            </Link>
          </ListGroupItem> */}

          {/* <UncontrolledCollapse
            toggler="#toggler_hr"
            style={{ backgroundColor: "#ecf0f1", color: "#6C7A89" }}
          >
            <CardBody className="bottomcollapse p-0">
              <ListGroup style={{ borderwidth: 0 }}>
                <ListGroupItem style={{ padding: 0 }}>
                  <Link  to="/job-post" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    	Staff
                  </Link>
                </ListGroupItem>

                <ListGroupItem style={{ padding: 0 }}>
                  <Link  to="/job-post" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    	Job Add
                  </Link>
                </ListGroupItem>

                <ListGroupItem style={{ padding: 0 }}>
                <Link to="/hiredcandidates" style={{fontWeight:'600'}}>
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="mr-2 font-icon"
                    style={{ fontSize: 25 }}
                  />
                      Job List
                </Link>
              </ListGroupItem>
              </ListGroup>
            </CardBody>
          </UncontrolledCollapse> */}
{/* Extra Curricular */}



          <ListGroupItem style={{ padding: 0 }}>
            <Link to="/extracurricular" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faUserHardHat}
                className="mr-2 font-icon"
                style={{ fontSize: 30 }}
              />
             Extra Curricular
            </Link>
          </ListGroupItem>

          <ListGroupItem style={{ padding: 0 }}>
            <Link to="/discipline" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faClipboardUser}
                className="mr-2 font-icon"
                style={{ fontSize: 30 }}
              />
              Discipline
            </Link>
          </ListGroupItem>

          <ListGroupItem style={{ padding: 0 }}>
            <Link to="/savings" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faClipboardUser}
                className="mr-2 font-icon"
                style={{ fontSize: 30 }}
              />
              Savings
            </Link>
          </ListGroupItem>

          

          <ListGroupItem style={{ padding: 0 }}>
            <Link to="/suggestiontable" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faHouseReturn}
                className="mr-2 font-icon"
                style={{ fontSize: 30 }}
              />
              Suggestion
            </Link>
          </ListGroupItem>

          <ListGroupItem style={{ padding: 0 }}>
            <Link to="/resignation" style={{fontWeight:'600'}}>
              <FontAwesomeIcon
                icon={faSignOut}
                className="mr-2 font-icon"
                style={{ fontSize: 30 }}
              />
              Radio
            </Link>
          </ListGroupItem>
{/* settings */}
<ListGroupItem style={{ padding: 0 }}  id="toggler"> 
            <Link style={{fontWeight:'600'}}
          
            >
              <FontAwesomeIcon
                icon={faCog}
                className="mr-2 font-icon"
                style={{ fontSize: 30 }}
              />
              Settings
            </Link>
          </ListGroupItem>
          <UncontrolledCollapse
            toggler="#toggler"
            style={{ backgroundColor: "#ecf0f1", color: "#6C7A89" }}
          >
            <CardBody className="bottomcollapse p-0">
              <ListGroup style={{ borderwidth: 0 }}>
              {/* <ListGroupItem style={{ padding: 0 }}>
                  <Link to="/institutes" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                   Institute
                  </Link>
                </ListGroupItem> */}
              <ListGroupItem style={{ padding: 0 }}>
                  <Link to="/classroom" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faGarage}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    Classroom
                  </Link>
                </ListGroupItem>
                <ListGroupItem style={{ padding: 0 }}>
                  <Link to="/subject" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faMapMarkedAlt}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    Subject
                  </Link>
                </ListGroupItem>
                <ListGroupItem style={{ padding: 0 }}>
                  <Link to="/promotion" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faUserEdit}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    Promotion
                  </Link>
                </ListGroupItem>

                <ListGroupItem style={{ padding: 0 }}>
                  <Link to="/teacher" style={{fontWeight:'600'}}>
                    <FontAwesomeIcon
                      icon={faUsersClass}
                      className="mr-2 font-icon"
                      style={{ fontSize: 25 }}
                    />
                    Teacher
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </UncontrolledCollapse>
          </ListGroup>
        </div>

       
      </nav>
      
    </div>
    <div className='footer_logo'>
    <div className="sidebar-header">
     
      <img
        src={footerlogo}
        style={{ width: "100%", height: "100%" }}
        className="d-block mx-auto img-fluid"
      />
      </div>
    </div>
  </div>
);

export default SideBar;
